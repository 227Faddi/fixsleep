import MainButton from "@/src/components/ui/MainButton";
import TextBold from "@/src/components/ui/TextBold";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, Platform, View } from "react-native";

const HomeScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep",
  });

  return (
    <View className="flex-1 flex flex-col gap-4 items-center pb-32 pt-2 px-8">
      <View className="flex-1 justify-center">
        <View className="justify-center items-center">
          <Image source={require("assets/icons/ios-light.png")} />
          <TextBold className="text-4xl">Welcome To</TextBold>
          <TextBold className="text-4xl">FixSleep</TextBold>
        </View>
        <View className="">
          <MainButton
            onPress={() => router.push("/(tabs)/(home)")}
            text={"Get Started"}
            textClass={`text-2xl text-center text-textPrimary ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
            containerClass={`p-6 bg-accent shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]`}
            style={{
              elevation: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
