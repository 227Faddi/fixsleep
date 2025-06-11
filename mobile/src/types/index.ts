import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type RootTabParamList = {
  "(home)": undefined;
  sounds: undefined;
  settings: undefined;
};

export type TabNav = BottomTabNavigationProp<RootTabParamList>;
