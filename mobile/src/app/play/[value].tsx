import BackButton from "@/src/components/ui/BackButton";
import TextBold from "@/src/components/ui/TextBold";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import sounds from "@/src/constants/soundsData";
import { SoundCardKey } from "@/src/types/i18next";
import { Audio } from "expo-av";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

const SoundPlayer = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sounds.cards",
  });
  const { value } = useLocalSearchParams<{ value: string }>();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [soundTimer, setSoundTimer] = useState<number | null>();
  // const [timerIsStarted, setTimerIsStarted] = useState(false);

  // const startSoundTimer = (minutes: number) => {
  //   setTimerIsStarted(true);
  // };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const selectedSound = sounds.find((item) => item.value === value);

  if (!selectedSound) {
    alert("Sound not found");
    router.back();
    return;
  }

  const playSound = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="bg-background flex-1 gap-4 items-center p-8 relative">
      <BackButton />
      <View className="flex-row justify-center items-center gap-3">
        {iconsData[selectedSound?.value as keyof typeof iconsData]()}
        <TextBold className="text-4xl">
          {t(selectedSound?.value as SoundCardKey)}
        </TextBold>
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-8">
        <Image
          style={{ flex: 1, width: "100%", borderRadius: 24 }}
          source={selectedSound?.img}
          contentFit="cover"
          transition={600}
        />
        {/* <View className="flex-row gap-6">
          <MainButton
            onPress={() => startSoundTimer(30)}
            text={"30 m to end"}
          />
          <MainButton
            onPress={() => startSoundTimer(30)}
            text={"15 m to end"}
          />
        </View> */}
        <View>
          <TouchableOpacity
            className="p-6 rounded-full bg-primary flex justify-center items-center"
            onPress={playSound}
          >
            {isPlaying ? (
              iconsData["stop"]({ size: 40, color: color.textPrimary })
            ) : isLoading ? (
              <ActivityIndicator size={"large"} />
            ) : (
              iconsData["play"]({ size: 40, color: color.textPrimary })
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SoundPlayer;
