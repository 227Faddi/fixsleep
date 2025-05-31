import { PlayerTimePicker } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import color from "@/src/constants/colors";
import iconsData, { IconsData } from "@/src/constants/iconsData";
import soundsData from "@/src/constants/soundsData";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [soundTimer, setSoundTimer] = useState<number | null>(null);
  const [timerIsStarted, setTimerIsStarted] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const selectedSound = soundsData.find((sound) => sound.name === value);

  if (!selectedSound) {
    alert("Sound not found");
    router.back();
    return;
  }

  const playSound = async () => {
    try {
      setIsLoading(true);
      const { sound } = await Audio.Sound.createAsync(selectedSound.src, {
        isLooping: true,
      });

      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (err) {
      alert("Error playing sound");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const stopSound = async () => {
    if (sound && isPlaying) {
      await sound.unloadAsync();
      setIsPlaying(false);
      setSound(null);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const startSoundTimer = (minutes: number) => {
    if (!isPlaying) {
      playSound();
    }
    setTimerIsStarted(true);
  };

  return (
    <View className="bg-background flex-1 gap-4 items-center p-8 relative">
      <BackButton />
      <View className="flex-row justify-center items-center gap-3">
        {iconsData[selectedSound.name as IconsData]()}
        <TextBold className="text-4xl">
          {t(selectedSound.name as SoundCardKey)}
        </TextBold>
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-8">
        <Image
          style={{ flex: 1, width: "100%", borderRadius: 24 }}
          source={selectedSound.img}
          contentFit="cover"
          transition={600}
        />
        <View className="flex-row gap-10 items-center justify-center">
          <View className="items-center">
            <TouchableOpacity>
              {iconsData["volume"]({ size: 40 })}
            </TouchableOpacity>
          </View>
          <View className="">
            <TouchableOpacity
              className="p-6 rounded-full bg-primary flex justify-center items-center"
              onPress={isPlaying ? stopSound : playSound}
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
          <View className="items-center">
            {timerIsStarted ? (
              <MyText className="text-2xl">{"00:00"}</MyText>
            ) : (
              <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                {iconsData["timer"]({ size: 40 })}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <PlayerTimePicker
        showModal={showTimePicker}
        setShowModal={setShowTimePicker}
        onConfirmFN={startSoundTimer}
      />
    </View>
  );
};

export default SoundPlayer;
