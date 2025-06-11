import MyText from "@/src/components/ui/MyText";
import SoundCard from "@/src/components/ui/SoundCard.";
import TextBold from "@/src/components/ui/TextBold";
import sounds from "@/src/constants/soundsData";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from "react-native-gesture-handler";

const SoundsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "sounds",
  });
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;

    if (translationX > 50) {
      navigation.navigate("(home)");
    } else if (translationX < -50) {
      navigation.navigate("settings");
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 flex flex-col gap-14 items-center pt-2 px-8 pb-32">
          <View className="gap-3">
            <TextBold className="text-4xl text-center">{t("title")}</TextBold>
            <MyText className="text-xl text-center max-w-xs">
              {t("subtitle")}
            </MyText>
          </View>
          <View className="flex-1 w-full px-8 gap-4">
            {sounds.map((item, index) => (
              <SoundCard key={index} sound={item.name} />
            ))}
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
};

export default SoundsScreen;
