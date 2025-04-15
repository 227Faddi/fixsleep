import CycleCard from "@/src/components/CycleCard";
import cyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import calcCycles from "@/src/lib/calcCycles";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const CyclesScreen = () => {
  const { time } = useLocalSearchParams<{ time: string }>();

  const timeCycles = calcCycles.sleep(time);

  return (
    <View className="flex-1 py-20 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]()}
      </Pressable>
      <View className="gap-2">
        <Text className="text-center text-4xl">
          Sleep Cycles {iconsData["sleep"]()}
        </Text>
        <Text className="text-center text-xl">
          Wake up at the best time after your sleep cycle.
        </Text>
      </View>
      <View className="flex-1 justify-center gap-4">
        {cyclesData.map((item) => (
          <CycleCard
            key={item.id}
            cycle={item.cycle}
            hrSleep={item.hrSleep}
            time={timeCycles[item.id as keyof typeof timeCycles]}
            icon={item.icon}
          />
        ))}
      </View>
      <Text>Aim to this ⬆️</Text>
    </View>
  );
};

export default CyclesScreen;
