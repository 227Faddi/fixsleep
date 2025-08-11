import color from "@/src/constants/colors";
import { useState } from "react";
import { Switch, View } from "react-native";
import { IconsData } from "../../constants/iconsData";
import { SoundCardKey } from "../../types/i18next";
import MyText from "./MyText";

type Props = {
  sound: IconsData & SoundCardKey;
};

const AlarmCard = ({ sound }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View className="p-6 rounded-3xl gap-4 bg-primary">
      <View className="flex-row items-center gap-2">
        <MyText>M</MyText>
        <MyText className="text-accent text-xl">T</MyText>
        <MyText>W</MyText>
        <MyText>T</MyText>
        <MyText className="text-accent text-xl">F</MyText>
        <MyText>S</MyText>
      </View>
      <View className="flex-row justify-between">
        <MyText className="text-3xl">08:00</MyText>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled((s) => !s)}
          trackColor={{ false: color.background, true: color.accent }}
          thumbColor={color.textPrimary}
          ios_backgroundColor={color.primary}
        />
      </View>
    </View>
  );
};

export default AlarmCard;
