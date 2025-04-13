import audio from "@/src/constants/audio";
import icon from "@/src/constants/icon";
import { Audio } from "expo-av";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const SoundPlayer = () => {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const title = name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase());

  const playSound = async () => {
    try {
      if (isPlaying && sound) {
        await sound.unloadAsync();
        setIsPlaying(false);
        setSound(null);
        return;
      }

      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound: newSound } = await Audio.Sound.createAsync(
        audio[name as keyof typeof audio],
        { isLooping: true }
      );
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

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
        {icon[name as keyof typeof icon]()}
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-8">
        <View className="border w-full flex-1 rounded-3xl"></View>
        <View className="flex-row gap-6">
          <Pressable
            className="border p-6 rounded-3xl justify-center"
            onPress={() => console.log("timer")}
          >
            <Text>1 h to end</Text>
          </Pressable>
          <Pressable
            className="border p-6 rounded-3xl justify-center"
            onPress={() => console.log("timer")}
          >
            <Text>30 m to end</Text>
          </Pressable>
        </View>
        <View>
          <Pressable className="border p-6 rounded-full" onPress={playSound}>
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
