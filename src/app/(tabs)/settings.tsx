import React from "react";
import { Text, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View className="flex-1 pb-32 pt-20 px-16 gap-4 items-center">
      <Text className="text-4xl">Settings</Text>
      <View className="flex-1 w-full gap-4 justify-center"></View>
    </View>
  );
};

export default SettingsScreen;
