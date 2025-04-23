import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const InfoScreen = () => {
  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]()}
      </Pressable>
      <View className="gap-2">
        <View className="flex-row items-center justify-center gap-2">
          {iconsData["info"]()}
          <Text className="text-center text-4xl text-textPrimary font-bold">
            Info
          </Text>
        </View>
        <View className="flex-1 justify-center">
          <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
            <View className="gap-2">
              <Text className="text-accent text-2xl font-bold">
                What are sleep cycles?
              </Text>
              <Text className="text-textPrimary text-xl">
                Sleep cycles last about 90 minutes, including stages like light
                sleep, deep sleep, and REM. These stages help your body recover
                and process the day.
              </Text>
            </View>
            <View className="gap-2">
              <Text className="text-accent text-2xl font-bold">
                Why timing matters
              </Text>
              <Text className="text-textPrimary text-xl">
                Waking up at the end of a cycle, rather than in the middle,
                helps you feel more refreshed and alert.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoScreen;
