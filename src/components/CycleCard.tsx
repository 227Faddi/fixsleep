import { Text, View } from "react-native";

type Props = {
  cycle: string;
  hrSleep: string;
  time: string;
  icon: any;
};

const CycleCard = ({ cycle, hrSleep, time, icon }: Props) => {
  return (
    <View className="w-full border-2 rounded-xl p-4 flex-row justify-between">
      <View className="flex-col justify-center gap-1">
        <Text className="text-md">{cycle}</Text>
        <Text className="text-md">{hrSleep} hr of Sleep</Text>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <Text className="text-2xl">{time}</Text>
        {icon}
      </View>
    </View>
  );
};

export default CycleCard;
