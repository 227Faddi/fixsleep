import icon from "@/src/constants/icon";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const SoundPlayer = () => {
  const { sound } = useLocalSearchParams<{ sound: string }>();
  const [isPlaying, setIsPlaying] = useState(false);

  const title = sound.split("");

  return (
    <View className="flex-1 py-20 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {icon["arrowBack"]()}
      </Pressable>
      <View className="flex-row justify-center items-center gap-1">
        <Text className="text-4xl">{title}</Text>
        {icon[sound as keyof typeof icon]()}
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-16">
        <View className="border w-full flex-1 rounded-3xl"></View>
        <View>
          <Pressable
            className="border p-6 rounded-full"
            onPress={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying
              ? icon["stop"]({ size: 40 })
              : icon["play"]({ size: 40 })}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SoundPlayer;
