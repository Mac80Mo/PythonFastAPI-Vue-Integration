import { ref, onMounted } from "vue";
import de from "@/locales/de.json";
import en from "@/locales/en.json";

const translations = { de, en };

function getValueByKey(obj, key) {
  const parts = key.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

function interpolate(str, params) {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? `{${name}}`);
}

// Shared/singleton locale so all components see changes immediately
const locale = ref("de");

function getInitialLocale() {
  try {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (saved === "de" || saved === "en") return saved;
    const browser =
      typeof navigator !== "undefined"
        ? (navigator.language || navigator.userLanguage || "de").split("-")[0]
        : "de";
    return browser === "de" ? "de" : "en";
  } catch (e) {
    return "de";
  }
}

const t = (key, params) => {
  const dict = translations[locale.value] || {};
  const value = getValueByKey(dict, key);
  if (typeof value === "string") return interpolate(value, params);
  return key;
};

const toggleLocale = () => {
  locale.value = locale.value === "de" ? "en" : "de";
  try {
    if (typeof window !== "undefined")
      localStorage.setItem("locale", locale.value);
  } catch (e) {}
  if (typeof document !== "undefined")
    document.documentElement.setAttribute("lang", locale.value);
};

// initialize once
if (typeof window !== "undefined") {
  locale.value = getInitialLocale();
  if (typeof document !== "undefined")
    document.documentElement.setAttribute("lang", locale.value);
}

export function useLocale() {
  onMounted(() => {
    // ensure lang attribute stays in sync if component mounts later
    if (typeof document !== "undefined")
      document.documentElement.setAttribute("lang", locale.value);
  });

  return { locale, t, toggleLocale };
}
