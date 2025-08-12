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
  time: string;
  label: string;
  days: number[];
  isEnabled: boolean;
  sound: string;
};

export type SleepTime = {
  notificationId: string;
  hours: number;
  minutes: number;
  isEnabled: boolean;
};
