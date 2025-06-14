import MainButton from "@/src/components/ui/MainButton";
import { router } from "expo-router";
import { Image, Platform, View } from "react-native";

const Features = () => {
  return (
    <View className="bg-background flex-1 gap-4 items-center py-2 px-8">
      <View className="flex-1 justify-center items-center gap-4">
        <Image
          className="w-72 h-72 rounded-3xl object-cover"
          source={require("@/assets/images/1.png")}
        />
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => router.push("/onboarding/survey")}
          text="Next"
          textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
      </View>
    </View>
  );
};

export default Features;
