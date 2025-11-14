/*
  Script: translate-locales.js
  Verwendung: setze environment variable DEEPL_API_KEY und führe dieses Skript im Ordner Frontend aus.
  Es liest `src/locales/de.json` und schreibt eine übersetzte `src/locales/en.json`.
  Hinweis: Dieses Skript ist ein Seed; prüfe die Übersetzungen nach dem Lauf manuell.
*/

const fs = require("fs");
const path = require("path");
const axios = require("axios");

const DE_PATH = path.join(__dirname, "../src/locales/de.json");
const EN_PATH = path.join(__dirname, "../src/locales/en.json");
const DEEPL_KEY = process.env.DEEPL_API_KEY;

if (!DEEPL_KEY) {
  console.error(
    "DEEPL_API_KEY is not set. Export it as environment variable and retry."
  );
  process.exit(1);
}

async function translateText(text) {
  try {
    const res = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      null,
      {
        params: {
          auth_key: DEEPL_KEY,
          text: text,
          target_lang: "EN",
        },
      }
    );
    return res.data.translations[0].text;
  } catch (err) {
    console.error("Translation error:", err?.response?.data || err.message);
    throw err;
  }
}

async function translateObject(obj) {
  if (typeof obj === "string") return await translateText(obj);
  if (Array.isArray(obj)) {
    const out = [];
    for (let i = 0; i < obj.length; i++) out[i] = await translateObject(obj[i]);
    return out;
  }
  const out = {};
  for (const k of Object.keys(obj)) {
    out[k] = await translateObject(obj[k]);
  }
  return out;
}

(async () => {
  try {
    const raw = fs.readFileSync(DE_PATH, "utf-8");
    const deObj = JSON.parse(raw);
    console.log("Translating locale keys...");
    const enObj = await translateObject(deObj);
    fs.writeFileSync(EN_PATH, JSON.stringify(enObj, null, 2) + "\n", "utf-8");
    console.log("Wrote", EN_PATH);
  } catch (err) {
    console.error("Failed:", err.message);
    process.exit(1);
  }
})();
