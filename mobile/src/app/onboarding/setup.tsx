import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import { router } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

const Reminder = () => {
  return (
    <View className="bg-background flex-1 gap-4 items-center py-2 px-8">
      <View className="flex-1 justify-center items-center gap-4">
        <MyText>Setup</MyText>
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => router.push("/onboarding/end")}
          text="Continue"
          textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
      </View>
    </View>
  );
};

export default Reminder;
