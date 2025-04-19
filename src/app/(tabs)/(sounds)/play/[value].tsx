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
        {icon["arrowBack"]({ color: "white" })}
      </Pressable>
      <View className="flex-row justify-center items-center gap-1">
        <Text className="text-4xl text-white">{selectedSound?.title}</Text>
        {icon[selectedSound?.value as keyof typeof icon]({ color: "white" })}
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-8">
        <Image
          style={{ flex: 1, width: "100%", borderRadius: 24 }}
          source={selectedSound?.img}
          contentFit="cover"
          transition={600}
        />
        {/* <View className="flex-row gap-6">
          <Pressable
            className="border border-white p-6 rounded-3xl justify-center"
            style={{ backgroundColor: color.primary }}
            onPress={() => startSoundTimer(15)}
          >
            <Text>{timerIsStarted ? `${soundTimer}` : "15 m to end"}</Text>
          </Pressable>
          <Pressable
            className="border border-white p-6 rounded-3xl justify-center"
            style={{ backgroundColor: color.primary }}
            onPress={() => startSoundTimer(30)}
          >
            <Text>30 m to end</Text>
          </Pressable>
        </View> */}
        <View>
          <Pressable
            className="border p-6 rounded-full border-white"
            style={{ backgroundColor: color.primary }}
            onPress={playSound}
          >
            {isPlaying
              ? icon["stop"]({ size: 40, color: "white" })
              : icon["play"]({ size: 40, color: "white" })}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SoundPlayer;
