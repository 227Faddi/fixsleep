import MyText from "@/src/components/MyText";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Platform, Pressable, View } from "react-native";

const InfoScreen = () => {
  return (
    <View
      className={`bg-background flex-1 flex flex-col gap-4 space-y-4 items-center ${Platform.OS === "ios" ? "pb-28 pt-20 px-16" : "pb-24 pt-10 px-16"}`}
    >
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {Platform.OS === "ios"
          ? iconsData["arrowBackIos"]({ color: color.textPrimary })
          : iconsData["arrowBackAndroid"]({ color: color.textPrimary })}
      </Pressable>
      <View className="gap-2">
        <View className="flex-row items-center justify-center gap-2">
          {iconsData["info"]()}
          <MyText className="text-center text-4xl text-textPrimary font-bold">
            Info
          </MyText>
        </View>
        <View className="flex-1 justify-center">
          <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
            <View className="gap-2">
              <MyText className="text-accent text-2xl font-bold">
                What are sleep cycles?
              </MyText>
              <MyText className="text-textPrimary text-xl">
                Sleep cycles last about 90 minutes, including stages like light
                sleep, deep sleep, and REM. These stages help your body recover
                and process the day.
              </MyText>
            </View>
            <View className="gap-2">
              <MyText className="text-accent text-2xl font-bold">
                Why timing matters
              </MyText>
              <MyText className="text-textPrimary text-xl">
                Waking up at the end of a cycle, rather than in the middle,
                helps you feel more refreshed and alert.
              </MyText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoScreen;
