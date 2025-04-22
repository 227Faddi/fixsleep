import MainButton from "@/src/components/MainButton";
import color from "@/src/constants/colors";
import icon from "@/src/constants/iconsData";
import sounds from "@/src/constants/soundsData";
import { Audio } from "expo-av";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const SoundPlayer = () => {
  const { value } = useLocalSearchParams<{ value: string }>();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundTimer, setSoundTimer] = useState<number | null>();
  const [timerIsStarted, setTimerIsStarted] = useState(false);

  const startSoundTimer = (minutes: number) => {
    setTimerIsStarted(true);
  };

  const selectedSound = sounds.find((item) => item.value === value);

  if (!selectedSound) {
    alert("Sound not found");
    router.back();
    return;
  }

  const playSound = async () => {
    try {
      if (isPlaying && sound) {
        await sound.unloadAsync();
        setIsPlaying(false);
        setSound(null);
        return;
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        selectedSound?.src,
        {
          isLooping: true,
        }
      );

      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    } catch (err) {
      alert("Error playing sound");
      console.error(err);
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
    <View className="flex-1 gap-4 pb-32 pt-24 px-16 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {icon["arrowBack"]({ color: color.textPrimary })}
      </Pressable>
      <View className="flex-row justify-center items-center gap-1">
        <Text className="text-4xl text-textPrimary">
          {selectedSound?.title}
        </Text>
        {icon[selectedSound?.value as keyof typeof icon]()}
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-8">
        <Image
          style={{ flex: 1, width: "100%", borderRadius: 24 }}
          source={selectedSound?.img}
          contentFit="cover"
          transition={600}
        />
        <View className="flex-row gap-6">
          <MainButton
            onPress={() => startSoundTimer(30)}
            text={"30 m to end"}
          />
          <MainButton
            onPress={() => startSoundTimer(30)}
            text={"15 m to end"}
          />
        </View>
        <View>
          <Pressable
            className="p-6 rounded-full bg-primary"
            onPress={playSound}
          >
            {isPlaying
              ? icon["stop"]({ size: 40, color: color.textPrimary })
              : icon["play"]({ size: 40, color: color.textPrimary })}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SoundPlayer;
