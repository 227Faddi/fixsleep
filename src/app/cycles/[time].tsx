import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const cycles = () => {
  const { time } = useLocalSearchParams();
  return (
    <View>
      <Text>Cycles</Text>
      <Text>You should wake up at</Text>
      <View className="px-8">
        <View className="border-2">
          <MaterialCommunityIcons name="emoticon-dead-outline" size={24} />
        </View>
      </View>
    </View>
  );
};

export default cycles;
