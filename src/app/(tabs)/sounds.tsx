import icon from "@/src/constants/icon";
import React from "react";
import { Text, View } from "react-native";

const sounds = () => {
  const time = "07:00";

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
      hrSleep: 1.5,
      time: "14:02",
      icon: icon["emojiDead"]({ size: 35 }),
    },
  ];

  return (
    <View className="flex-1 pb-32 pt-20 px-16 gap-4 items-center">
      <Text>Sounds</Text>
    </View>
  );
};

export default sounds;
