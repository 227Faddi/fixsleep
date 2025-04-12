import CycleCard from "@/src/components/CycleCard";
import React from "react";
import { Text, View } from "react-native";

const sounds = () => {
  return (
    <View className="flex-1 pb-24 pt-20 px-16 gap-8 justify-center items-center">
      <View className="gap-2">
        <Text className="text-center text-4xl">Sleep Cycles </Text>
        <Text className="text-center">You should wake up at:</Text>
      </View>
      <View className=" gap-6">
        <CycleCard />
        <CycleCard />
        <CycleCard />
        <CycleCard />
        <CycleCard />
        <CycleCard />
      </View>
    </View>
  );
};

export default sounds;
