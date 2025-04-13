import CycleCard from "@/src/components/CycleCard";
import icon from "@/src/constants/icon";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const cycles = () => {
  const { time } = useLocalSearchParams<{ time: string }>();

  const calcTime = (time: string, cycle: number) => {
    const hr = time.split("").slice(0, 2);
    const min = time.split("").slice(0, 2);
    return hr;
  };

  const data = [
    {
      cycle: "6 Cycles",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiHappy"]({ size: 35 }),
    },
    {
      cycle: "5 Cycles",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiHappy"]({ size: 35 }),
    },
    {
      cycle: "4 Cycles",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiNeutral"]({ size: 35 }),
    },
    {
      cycle: "3 Cycles",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiNeutral"]({ size: 35 }),
    },
    {
      cycle: "2 Cycles",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiSad"]({ size: 35 }),
    },
    {
      cycle: "1 Cycle",
      hrSleep: 16,
      time: "14:07",
      icon: icon["emojiSad"]({ size: 35 }),
    },
  ];
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
        {data.map((item, index) => (
          <CycleCard
            key={index}
            cycle={item.cycle}
            hrSleep={item.hrSleep}
            time={item.time}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default cycles;
