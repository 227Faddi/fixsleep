import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding.welcome",
  });

  return (
    <View className="flex-1 gap-4 items-center pb-2 pt-12 px-8">
      <View className="flex-1 justify-center items-center gap-4">
        <View className="w-24 h-24">
          <Image
            style={{ flex: 1, borderRadius: 24 }}
            source={require("@/assets/icons/ios-light.png")}
            contentFit="cover"
            transition={300}
          />
        </View>
        <View className="">
          <View className="justify-center items-center">
            <TextBold className="text-5xl text-center">{t("title")}</TextBold>
          </View>
          <MyText className="text-center text-xl max-w-sm">
            {t("subtitle")}
          </MyText>
        </View>
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => router.push("/onboarding/survey")}
          text={t("getStarted")}
          textClass={`text-2xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
        <TouchableOpacity
          className="flex-row items-center justify-center gap-1"
          onPress={() => router.push("/onboarding/info")}
        >
          {iconsData["info"]()}
          <MyText className="text-base">{t("howThisWorks")}</MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
