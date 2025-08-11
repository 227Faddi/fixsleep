import color from "@/src/constants/colors";
import { useState } from "react";
import { Switch, View } from "react-native";
import MyText from "./MyText";

type Props = {};

const AlarmCard = ({}: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View
      className={`p-6 rounded-3xl gap-4 bg-primary border-2 ${isEnabled ? "border-[#C4A9F2]" : "border-primary"}`}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <MyText>M</MyText>
          <MyText className="text-accent text-xl">T</MyText>
          <MyText>W</MyText>
          <MyText>T</MyText>
          <MyText className="text-accent text-xl">F</MyText>
          <MyText>S</MyText>
        </View>
        <MyText className="text-xl">Work and Fun</MyText>
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
