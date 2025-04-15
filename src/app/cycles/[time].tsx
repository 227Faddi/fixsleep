import CycleCard from "@/src/components/CycleCard";
import cyclesData from "@/src/constants/cyclesData";
import icon from "@/src/constants/icon";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const CyclesScreen = () => {
  const { time } = useLocalSearchParams<{ time: string }>();

  const cycleDuration = 90;

  const cycles = {
    sleep: function (startTime) {
      const startMinutes = timeToMinutes(startTime);
      const result = {};

      for (let i = 1; i <= 6; i++) {
        const cycleTime = startMinutes + i * cycleDuration;
        result[i] = minutesToTime(cycleTime);
      }

      return result;
    },

    wake: function (startTime) {
      const startMinutes = timeToMinutes(startTime);
      const result = {};

      for (let i = 1; i <= 6; i++) {
        const cycleTime = startMinutes - i * cycleDuration;
        result[i] = minutesToTime(cycleTime);
      }

      return result;
    },
  };

  // Helper functions for time conversion
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function minutesToTime(totalMinutes) {
    const minsInDay = 24 * 60;
    const minutes = ((totalMinutes % minsInDay) + minsInDay) % minsInDay; // wrap negative values
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  }

  const timeCycles = cycles.sleep(time);

  return (
    <View className="flex-1 py-20 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {icon["arrowBack"]()}
      </Pressable>
      <View className="gap-2">
        <Text className="text-center text-4xl">
          Sleep Cycles {icon["sleep"]()}
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
