import { ReactNode } from "react";
import { Text, View } from "react-native";
import color from "../constants/colors";
import iconsData from "../constants/iconsData";

type Props = {
  cycle: string;
  hrSleep: number;
  time: string;
  icon: ReactNode | any;
};

const CycleCard = ({ cycle, hrSleep, time, icon }: Props) => {
  return (
    <View
      className="w-full border border-white rounded-xl p-4 flex-row justify-between"
      style={{ backgroundColor: color.primary }}
    >
      <View className="flex-col justify-center gap-1">
        <Text className="text-lg text-white">{hrSleep} hr of Sleep</Text>
        <Text className="text-md text-white">{cycle}</Text>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <Text className="text-2xl text-white">{time}</Text>
        {iconsData[icon as keyof typeof iconsData]({
          size: 35,
          color: "white",
        })}
      </View>
    </View>
  );
};

export default CycleCard;
