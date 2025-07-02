import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";
import { useLanguageStore } from "../store/appStore";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const initI18n = async () => {
  const language = useLanguageStore.getState().language;

  i18n.use(initReactI18next).init({
    resources,
    lng: language || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
