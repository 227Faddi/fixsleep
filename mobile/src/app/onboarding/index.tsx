import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, Platform, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep",
  });

  return (
    <View className="flex-1 gap-4 items-center py-2 px-8">
      <View className="flex-1 justify-center items-center gap-4">
        <Image
          className="w-24 h-24 rounded-3xl"
          source={require("@/assets/icons/ios-light.png")}
        />
        <View className="justify-center items-center">
          <TextBold className="text-5xl">Welcome To</TextBold>
          <TextBold className="text-5xl">FixSleep</TextBold>
        </View>
        <View>
          <MyText className="text-center text-xl max-w-sm">
            Find the best times to sleep and wake up
          </MyText>
          <MyText className="text-center text-xl max-w-sm">
            for better rest and recovery.
          </MyText>
        </View>
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => router.push("/onboarding/test")}
          text={"Get Started"}
          textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
          style={{
            elevation: 10,
          }}
        />
        <TouchableOpacity className="flex-row items-center justify-center gap-1">
          {iconsData["info"]()}
          <MyText>How this works?</MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
