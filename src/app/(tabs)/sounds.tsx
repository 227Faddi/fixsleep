import { Text, View } from "react-native";

const sounds = () => {
  return (
    <View className="flex-1 pb-32 pt-20 px-16 gap-4 items-center">
      <Text className="text-4xl">Soothing Sounds</Text>
      <View className="flex-1 w-full gap-4 justify-center ">
        <View className="border-2 p-6 rounded-3xl">
          <Text className="text-xl">Ocean Waves</Text>
        </View>
        <View className="border-2 p-6 rounded-3xl">
          <Text className="text-xl">Rainfall</Text>
        </View>
        <View className="border-2 p-6 rounded-3xl">
          <Text className="text-xl">Brown Noise</Text>
        </View>
      </View>
    </View>
  );
};

export default sounds;
