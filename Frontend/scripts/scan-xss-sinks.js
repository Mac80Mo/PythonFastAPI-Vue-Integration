const fs = require("fs");
const path = require("path");

// Start scan from repo root (two levels up from this script)
const repoRoot = path.resolve(__dirname, "..", "..");
// limit scan to frontend source to avoid unrelated files
const scanRoot = path.join(repoRoot, "Frontend", "src");
const reportPath = path.join(__dirname, "scan-xss-report.json");

const patterns = [
  { name: "v-html", regex: /v-html\s*=\s*["'`]/g },
  { name: "innerHTML", regex: /\.innerHTML\b/g },
  { name: "document.write", regex: /document\.write\s*\(/g },
  { name: "insertAdjacentHTML", regex: /insertAdjacentHTML\s*\(/g },
  { name: "eval", regex: /\beval\s*\(/g },
  { name: "outerHTML", regex: /\.outerHTML\b/g },
  { name: "dangerouslySetInnerHTML", regex: /dangerouslySetInnerHTML/g },
  {
    name: "setAttribute-on",
    regex: /setAttribute\s*\(\s*["']on[a-zA-Z]+["']\s*,/g,
  },
  {
    name: "addEventListener-on",
    regex: /addEventListener\s*\(\s*["']on[a-zA-Z]+["']\s*,/g,
  },
  { name: "template-interpolation", regex: /\{\{\s*t\(.*?\)\s*\}\}/g },
  { name: "v-html-with-t", regex: /v-html\s*=\s*["'`][^"'`]*t\(/g },
];

const fileExts = new Set([
  ".vue",
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".html",
  ".json",
]);

// Files to ignore explicitly (lockfiles and similar noisy files)
const ignoreFileNames = new Set([
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
]);

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      // skip node_modules, .git, dist/build folders
      if (
        ent.name === "node_modules" ||
        ent.name === ".git" ||
        ent.name === "dist" ||
        ent.name === "build"
      )
        continue;
      walk(full, cb);
    } else if (ent.isFile()) {
      cb(full);
    }
  }
}

function scanFile(filePath) {
  // ignore explicit filenames (e.g. package-lock.json) to reduce false-positives
  const baseName = path.basename(filePath).toLowerCase();
  if (ignoreFileNames.has(baseName)) return null;

  const ext = path.extname(filePath).toLowerCase();
  if (!fileExts.has(ext)) return null;
  let content;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (e) {
    return null;
  }

  const lines = content.split(/\r?\n/);
  const findings = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const p of patterns) {
      if (p.regex.test(line)) {
        findings.push({ pattern: p.name, line: i + 1, snippet: line.trim() });
      }
      // reset lastIndex for global regex
      if (p.regex.global) p.regex.lastIndex = 0;
    }
  }

  // additional scan for JSON locales: only check JSON files inside Frontend/src/locales
  if (
    ext === ".json" &&
    filePath.indexOf(path.join("Frontend", "src", "locales")) !== -1
  ) {
    try {
      const obj = JSON.parse(content);
      const stack = [{ key: "", val: obj }];
      while (stack.length) {
        const { key, val } = stack.pop();
        if (typeof val === "string") {
          if (val.indexOf("<") !== -1) {
            findings.push({
              pattern: "json-html-like",
              line: null,
              snippet: `${key}: ${val.slice(0, 80)}`,
            });
          }
        } else if (Array.isArray(val)) {
          val.forEach((v, idx) =>
            stack.push({ key: `${key}[${idx}]`, val: v })
          );
        } else if (val && typeof val === "object") {
          Object.keys(val).forEach((k) =>
            stack.push({ key: key ? `${key}.${k}` : k, val: val[k] })
          );
        }
      }
    } catch (e) {
      // ignore JSON parse errors
    }
  }

  if (findings.length)
    return { path: path.relative(repoRoot, filePath), findings };
  return null;
}

const report = { scannedAt: new Date().toISOString(), repoRoot, results: [] };

if (fs.existsSync(scanRoot)) {
  walk(scanRoot, (full) => {
    const res = scanFile(full);
    if (res) report.results.push(res);
  });
} else {
  // fallback to repo root if frontend src is missing
  walk(repoRoot, (full) => {
    const res = scanFile(full);
    if (res) report.results.push(res);
  });
}

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log("Scan complete. Report written to", reportPath);
console.log(JSON.stringify(report, null, 2));

// Determine if any findings are high-risk (exclude harmless template interpolation)
const highRiskPatterns = new Set([
  "v-html",
  "innerHTML",
  "document.write",
  "insertAdjacentHTML",
  "eval",
  "outerHTML",
  "dangerouslySetInnerHTML",
  "setAttribute-on",
  "addEventListener-on",
  "v-html-with-t",
  "json-html-like",
]);

const highRiskResults = report.results.filter((r) =>
  r.findings.some((f) => highRiskPatterns.has(f.pattern))
);

if (highRiskResults.length > 0) {
  console.error("High-risk XSS patterns found. Failing with exit code 1.");
  process.exit(1);
} else if (report.results.length > 0) {
  console.log(
    "Findings present but only informational (template interpolation). Not failing."
  );
  process.exit(0);
} else {
  console.log("No findings.");
  process.exit(0);
}
