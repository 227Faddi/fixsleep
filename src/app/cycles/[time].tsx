import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const cycles = () => {
  const { time } = useLocalSearchParams();
  return (
    <View className="flex-1 pb-24 pt-16 px-16 justify-center items-center">
      <Text>Cycles</Text>
      <Text>You should wake up at:</Text>
      <View className="px-8">
        <View className="border-2">
          <MaterialCommunityIcons name="emoticon-dead-outline" size={24} />
        </View>
      </View>
    </View>
  );
};

export default cycles;
