import MyText from "@/src/components/MyText";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, View } from "react-native";

const LanguageScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.options.language",
  });
  const [currentLang, setCurrentLang] = useState("en");
  const changeLang = () => {
    currentLang === "en" ? setCurrentLang("fr") : setCurrentLang("en");
  };

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
      <View className="flex-row items-center justify-center gap-2">
        {iconsData["language"]()}
        <MyText className="text-center text-4xl text-textPrimary font-bold">
          {t("title")}
        </MyText>
      </View>
      <View className="flex-1 justify-center w-full">
        <View className="justify-center bg-primary rounded-3xl">
          <Pressable
            onPress={changeLang}
            disabled={currentLang === "en"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              <MyText
                className={`text-xl text-textPrimary ${
                  currentLang === "en" && "font-bold"
                }`}
              >
                {t("english")}
              </MyText>
            </View>
            {currentLang === "en" && iconsData["checkmark"]()}
          </Pressable>
          <Pressable
            onPress={changeLang}
            disabled={currentLang === "fr"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              <MyText
                className={`text-xl text-textPrimary ${
                  currentLang === "fr" && "font-bold"
                }`}
              >
                {t("french")}
              </MyText>
            </View>
            {currentLang === "fr" && iconsData["checkmark"]()}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LanguageScreen;
