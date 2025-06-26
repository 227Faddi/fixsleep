import BackButton from "@/src/components/ui/BackButton";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";

const End = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding.end",
  });

  return (
    <View className="bg-background flex-1 gap-4 items-center pb-2 pt-12 px-8">
      <BackButton />
      <View className="w-full flex-1 justify-center items-center gap-4">
        <View className="gap-2">
          <TextBold className="text-4xl text-center">{t("title")}</TextBold>
          <MyText className="text-2xl text-center">{t("subtitle")}</MyText>
        </View>
        <View className="w-full flex-1 p-8">
          <Image
            style={{ flex: 1, width: "100%", borderRadius: 24 }}
            source={require("@/assets/images/onboarding/end.webp")}
            contentFit="cover"
            transition={600}
          />
        </View>
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => router.push("/(tabs)/(home)")}
          text={t("btn")}
          textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
      </View>
    </View>
  );
};

export default End;
