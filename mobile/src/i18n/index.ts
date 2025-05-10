import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const initI18n = async () => {
  const { getItem } = useAsyncStorage("language");
  let savedLanguage = await getItem();

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
