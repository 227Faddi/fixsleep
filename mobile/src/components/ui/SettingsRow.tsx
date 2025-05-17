import iconsData from "@/src/constants/iconsData";
import { Href, router } from "expo-router";
import { Platform, TouchableOpacity, View } from "react-native";
import MyText from "./MyText";

export type SettingsRowType = {
  title: string;
  icon: keyof typeof iconsData;
  route: Href;
};

const SettingsRow = ({ title, icon, route }: SettingsRowType) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(route)}
      className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
    >
      <View className="flex-row gap-4">
        {iconsData[icon]({ justifySelf: "flex-end" })}
        <MyText className="text-xl text-textPrimary">{title}</MyText>
      </View>
      {Platform.OS === "ios" && iconsData["arrowForward"]()}
    </TouchableOpacity>
  );
};

export default SettingsRow;
