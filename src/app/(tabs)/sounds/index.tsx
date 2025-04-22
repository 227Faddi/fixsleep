import SoundCard from "@/src/components/SoundCard.";
import sounds from "@/src/constants/soundsData";
import { Audio } from "expo-av";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SoundsScreen = () => {
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
      <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
        <View className="gap-3">
          <Text className="text-4xl text-center text-textPrimary font-bold">
            Soothing Sounds
          </Text>
          <Text className="text-xl text-center text-textPrimary">
            Create your perfect sleep atmosphere. Pick a sound, close your eyes,
            and relax.
          </Text>
        </View>
        <View className="flex-1 w-full gap-4 justify-center">
          {sounds.map((item, index) => (
            <SoundCard key={index} title={item.title} value={item.value} />
          ))}
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default SoundsScreen;
