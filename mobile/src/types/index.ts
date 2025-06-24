import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type RootTabParamList = {
  "(home)": undefined;
  sounds: undefined;
  settings: undefined;
  onboarding: undefined;
};

export type HourTime = { hours: number; minutes: number };

export type TabNav = BottomTabNavigationProp<RootTabParamList>;
