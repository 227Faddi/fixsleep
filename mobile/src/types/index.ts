import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type RootTabParamList = {
  "(home)": undefined;
  sounds: undefined;
  alarm: undefined;
  settings: undefined;
  onboarding: undefined;
};

export type HourTime = { hours: number; minutes: number };

export type SupportedLanguage = "en" | "fr";

export type TabNav = BottomTabNavigationProp<RootTabParamList>;

export type Alarm = {
  notificationId: string;
  hours: number;
  minutes: number;
  label: string;
  days: number[];
  sound: string;
  isEnabled: boolean;
};

export type SleepTime = {
  notificationId: string;
  hours: number;
  minutes: number;
  isEnabled: boolean;
};
