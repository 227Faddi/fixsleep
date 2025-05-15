import MyText from "@/src/components/ui/MyText";
import SoundCard from "@/src/components/ui/SoundCard.";
import TextBold from "@/src/components/ui/TextBold";
import sounds from "@/src/constants/soundsData";
import { Audio } from "expo-av";
import { router } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SoundsScreen = () => {
  const { t } = useTranslation("translation", {
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
      <View className="flex-1 flex flex-col gap-4 space-y-4 items-center">
        <View className="gap-3">
          <TextBold className="text-4xl text-center">{t("title")}</TextBold>
          <MyText className="text-xl text-center">{t("subtitle")}</MyText>
        </View>
        <View className="flex-1 w-full px-8 gap-4 justify-center">
          {sounds.map((item, index) => (
            <SoundCard key={index} value={item.value} />
          ))}
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default SoundsScreen;
