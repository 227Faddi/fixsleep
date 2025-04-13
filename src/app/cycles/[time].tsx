import CycleCard from "@/src/components/CycleCard";
import icon from "@/src/constants/icon";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const cycles = () => {
  const { time } = useLocalSearchParams();

  const calcTime = (time: string, cycle: number) => {
    const hr = time.split("").slice(0, 2);
    const min = time.split("").slice(0, 2);
    return hr;
  };

  const data = [
    {
      cycle: "Cycle 6",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiVibe"]({ size: 35 }),
    },
    {
      cycle: "Cycle 5",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiHappy"]({ size: 35 }),
    },
    {
      cycle: "Cycle 4",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiNeutral"]({ size: 35 }),
    },
    {
      cycle: "Cycle 3",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiConfused"]({ size: 35 }),
    },
    {
      cycle: "Cycle 2",
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiSad"]({ size: 35 }),
    },
    {
      cycle: "Cycle 1",
      hrSleep: 16,
      time: "14:07",
      icon: icon["emojiDead"]({ size: 35 }),
    },
  ];
  return (
    <View className="flex-1 pb-24 pt-8 px-16 gap-6 justify-center items-center">
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
      <View className=" gap-4">
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
