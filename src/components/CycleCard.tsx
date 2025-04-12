import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

const CycleCard = () => {
  return (
    <View className="w-full border-2 rounded-xl p-4 flex-row justify-between">
      <View className="flex-col justify-center gap-1">
        <Text className="text-md">1 Cycle</Text>
        <Text className="text-md">1.5 hr of Sleep</Text>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <Text className="text-2xl">7:15</Text>
        <MaterialCommunityIcons name="emoticon-dead-outline" size={35} />
      </View>
    </View>
  );
};

export default CycleCard;
