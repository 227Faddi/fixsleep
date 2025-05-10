import MyText from "@/src/components/MyText";
import SoundCard from "@/src/components/SoundCard.";
import sounds from "@/src/constants/soundsData";
import { Audio } from "expo-av";
import { router } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SoundsScreen = () => {
  const { t } = useTranslation("", {
    keyPrefix: "sounds",
  });
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;

    if (translationX > 50) {
      router.push("/(tabs)/(home)");
    } else if (translationX < -50) {
      router.push("/(tabs)/settings");
    }
  };

  useEffect(() => {
    const configureAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: false,
          playThroughEarpieceAndroid: false,
        });
      } catch (error) {
        console.warn("Failed to set audio mode", error);
      }
    };
    configureAudio();
  }, []);

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View
        className={`flex-1 flex flex-col gap-4 space-y-4 items-center ${Platform.OS === "ios" ? "pb-32 pt-24 px-16" : "pb-28 pt-8 px-16"}`}
      >
        <View className="gap-3">
          <MyText className="text-4xl text-center text-textPrimary font-bold">
            {t("title")}
          </MyText>
          <MyText className="text-xl text-center text-textPrimary">
            {t("subtitle")}
          </MyText>
        </View>
        <View className="flex-1 w-full gap-4 justify-center">
          {sounds.map((item, index) => (
            <SoundCard key={index} value={item.value} />
          ))}
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default SoundsScreen;
