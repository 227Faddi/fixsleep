import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  cycle: string;
  hrSleep: number;
  time: string;
  icon: ReactNode | any;
};

const CycleCard = ({ cycle, hrSleep, time, icon }: Props) => {
  return (
    <View className="w-full border-2 rounded-xl p-4 flex-row justify-between">
      <View className="flex-col justify-center gap-1">
        <Text className="text-lg">{hrSleep} hr of Sleep</Text>
        <Text className="text-md">{cycle}</Text>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <Text className="text-2xl">{time}</Text>
        {icon}
      </View>
    </View>
  );
};

export default CycleCard;
