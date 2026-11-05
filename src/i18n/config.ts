import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "@/i18n/locales/en/translation.json"
import es from "@/i18n/locales/es/translation.json"
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/i18n/languages"

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    // Only trust the `/:lang` URL segment or a saved choice, never the browser language.
    detection: {
      order: ["path", "localStorage"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
