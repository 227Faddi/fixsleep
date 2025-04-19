import { ReactNode } from "react";
import { Text, View } from "react-native";
import iconsData from "../constants/iconsData";

type Props = {
  cycle: string;
  hrSleep: number;
  time: string;
  icon: ReactNode | any;
};

const CycleCard = ({ cycle, hrSleep, time, icon }: Props) => {
  return (
    <View className="w-full rounded-xl p-4 flex-row justify-between bg-primary">
      <View className="flex-col justify-center gap-1">
        <Text className="text-lg text-textPrimary">{hrSleep} hr of Sleep</Text>
        <Text className="text-md text-accent">{cycle}</Text>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <Text className="text-3xl text-textPrimary">{time}</Text>
        {iconsData[icon as keyof typeof iconsData]({
          size: 35,
        })}
      </View>
    </View>
  );
};

export default CycleCard;
