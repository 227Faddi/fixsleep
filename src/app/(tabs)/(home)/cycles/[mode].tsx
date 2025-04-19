import CycleCard from "@/src/components/CycleCard";
import color from "@/src/constants/colors";
import cyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import calcCycles from "@/src/lib/calcCycles";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const CyclesScreen = () => {
  const { mode, query: time } = useLocalSearchParams<{
    mode: "sleep" | "wake";
    query: string;
  }>();

  if (mode !== "sleep" && mode !== "wake") {
    router.back();
    return alert("Error, Please try again");
  }

  const timeCycles =
    mode === "sleep" ? calcCycles.sleep(time) : calcCycles.wake(time);

  const cycles = mode === "sleep" ? cyclesData : cyclesData.reverse();

  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]({ color: "white" })}
      </Pressable>
      <View className="gap-2">
        <Text className="text-center text-4xl" style={{ color: color.white }}>
          Sleep Cycles {iconsData["sleep"]()}
        </Text>
        <Text className="text-center text-xl" style={{ color: color.white }}>
          {mode === "sleep"
            ? `Wake up at the best time after your sleep cycle.`
            : `Go to bed at one of these time to wake up relaxed at ${time}`}
        </Text>
      </View>
      <View className="flex-1 justify-center gap-4">
        {cycles.map((item) => (
          <CycleCard
            key={item.id}
            cycle={item.cycle}
            hrSleep={item.hrSleep}
            time={timeCycles[item.id as keyof typeof timeCycles]}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default CyclesScreen;
