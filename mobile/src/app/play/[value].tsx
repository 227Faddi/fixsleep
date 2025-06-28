import { PlayerTimePicker } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import color from "@/src/constants/colors";
import iconsData, { IconsData } from "@/src/constants/iconsData";
import soundsData from "@/src/constants/soundsData";
import { useAsyncStorage } from "@/src/hooks/useAsyncStorage";
import { formatTimer } from "@/src/lib/formatTime";
import { SoundCardKey } from "@/src/types/i18next";
import Slider from "@react-native-community/slider";
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

  const { getItem, setItem } = useAsyncStorage<number>("volume");
  const [volume, setVolume] = useState(1);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
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
    setItem(value);
    setVolume(value);
    await sound?.setVolumeAsync(value);
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

  useEffect(() => {
    const loadPreviousVolume = async () => {
      try {
        const savedVolume = await getItem();
        if (savedVolume !== null) {
          setVolume(savedVolume);
        }
      } catch (error) {
        console.warn("Failed to load saved volume", error);
      }
    };

    loadPreviousVolume();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
        <View className="flex-1 p-6 w-full">
          <Image
            style={{ flex: 1, width: "100%", borderRadius: 24 }}
            source={selectedSound.img}
            contentFit="cover"
            transition={600}
          />
        </View>
        <View className="flex-row items-center justify-center gap-8">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["volumeOff"]()}
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(value) => changeVolume(value)}
              value={volume}
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
