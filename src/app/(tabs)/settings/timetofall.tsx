import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const TimetofallScreen = () => {
  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]({ color: color.textPrimary })}
      </Pressable>
      <View className="gap-2">
        <Text className="text-center text-4xl text-textPrimary">
          Set Time to Fall
        </Text>
      </View>
    </View>
  );
};

export default TimetofallScreen;
