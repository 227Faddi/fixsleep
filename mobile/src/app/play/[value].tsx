import { PlayerTimePicker } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import color from "@/src/constants/colors";
import iconsData, { IconsData } from "@/src/constants/iconsData";
import soundsData from "@/src/constants/soundsData";
import { formatTimer } from "@/src/lib/formatTime";
import { useSoundPlayerStore } from "@/src/store/appStore";
import { SoundCardKey } from "@/src/types/i18next";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

import { Slider } from "@miblanchard/react-native-slider";

const SoundPlayer = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sounds.cards",
  });
  const { value } = useLocalSearchParams<{ value: string }>();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { volume, setVolume } = useSoundPlayerStore();

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: InterruptionModeIOS.DuckOthers,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: true,
    });
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
      setIsPlaying(true);
      await sound.playAsync();
      await sound?.setVolumeAsync(volume);
    } catch (err) {
      alert("Error playing sound");
      setIsPlaying(false);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const stopSound = async () => {
    if (sound && isPlaying) {
      setIsRunning(false);
      await sound.unloadAsync();
      setIsPlaying(false);
      setSound(null);
    }
  };

  const startTimer = (minutes: number) => {
    if (!isLoading) {
      if (!isPlaying) {
        playSound();
      }
      const seconds = minutes * 60;
      setTimeLeft(seconds);
      setIsRunning(true);
    }
  };

  const changeVolume = async (value: number) => {
    await sound?.setVolumeAsync(value);
    setVolume(value);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            stopSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <View className="bg-background flex-1 gap-4 items-center px-8 pt-8 pb-2 relative">
      <BackButton />
      <View className="flex-row justify-center items-center gap-3">
        {iconsData[selectedSound.name as IconsData]()}
        <TextBold className="text-4xl">
          {t(selectedSound.name as SoundCardKey)}
        </TextBold>
      </View>
      <View className="w-full flex-1 flex-col justify-between items-center gap-8">
        <View className="flex-1 p-4 w-full">
          <Image
            style={{ flex: 1, width: "100%", borderRadius: 24 }}
            source={selectedSound.img}
            contentFit="cover"
            transition={600}
          />
        </View>
        <View className="flex-row items-center justify-center gap-8 bg-primary px-6 py-4 rounded-3xl">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["volumeOff"]()}
            <Slider
              onValueChange={(value) => changeVolume(value[0])}
              value={volume}
              containerStyle={{ width: 150 }}
              thumbTintColor={color.textPrimary}
              minimumTrackTintColor={color.accent}
              maximumTrackTintColor={color.background}
            />
            {iconsData["volumeOn"]()}
          </View>
          <View className="items-center">
            {isRunning ? (
              <MyText className="text-2xl">{formatTimer(timeLeft)}</MyText>
            ) : (
              <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                {iconsData["timer"]({ size: 40 })}
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="items-center justify-center">
          <TouchableOpacity
            className="p-6 rounded-full bg-primary flex justify-center items-center"
            disabled={isLoading}
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
      </View>
      <PlayerTimePicker
        showModal={showTimePicker}
        setShowModal={setShowTimePicker}
        onConfirmFN={startTimer}
      />
    </View>
  );
};

export default SoundPlayer;
