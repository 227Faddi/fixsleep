import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const cycles = () => {
  const { time } = useLocalSearchParams();
  return (
    <View>
      <Text>Cycles</Text>
      <Text>You should wake up at</Text>
      <View className="border-2 "></View>
    </View>
  );
};

export default cycles;
