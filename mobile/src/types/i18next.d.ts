import type en from "@/locales/en.json";
import "react-i18next";

type DefaultNamespace = "translation";
type Resources = {
  translation: typeof en;
};

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: DefaultNamespace;
    resources: Resources;
  }
}

export type SoundCardKey = keyof typeof en.sounds.cards;
export type NavigationKey = keyof typeof en.navigation;
