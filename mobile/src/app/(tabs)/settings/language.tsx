import MyText from "@/src/components/ui/MyText";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { useAsyncStorage } from "@/src/hooks/useAsyncStorage";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, TouchableOpacity, View } from "react-native";

const LanguageScreen = () => {
  const { setItem } = useAsyncStorage("language");
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "settings.options.language",
  });

  const currentLang = i18n.language;

  const changeLang = async (lang: string) => {
    await setItem(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View
      className={`bg-background flex-1 flex flex-col gap-4 space-y-4 items-center ${Platform.OS === "ios" ? "pb-28 pt-20 px-16" : "pb-24 pt-10 px-16"}`}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        className={`absolute ${Platform.OS === "ios" ? "left-6 top-16" : "left-5 top-5"}`}
      >
        {Platform.OS === "ios"
          ? iconsData["arrowBackIos"]({ color: color.textPrimary })
          : iconsData["arrowBackAndroid"]({ color: color.textPrimary })}
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-2">
        {iconsData["language"]()}
        <MyText
          className={`text-center text-4xl text-textPrimary  ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
        >
          {t("title")}
        </MyText>
      </View>
      <View className="flex-1 justify-center w-full">
        <View className="justify-center bg-primary rounded-3xl">
          <TouchableOpacity
            onPress={() => changeLang("en")}
            disabled={currentLang === "en"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              <MyText
                className={`text-xl text-textPrimary ${
                  currentLang === "en"
                    ? Platform.OS === "ios"
                      ? "font-bold"
                      : "!font-fredokaBold"
                    : ""
                }`}
              >
                {t("english")}
              </MyText>
            </View>
            {currentLang === "en" && iconsData["checkmark"]()}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLang("fr")}
            disabled={currentLang === "fr"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              <MyText
                className={`text-xl text-textPrimary ${
                  currentLang === "fr"
                    ? Platform.OS === "ios"
                      ? "font-bold"
                      : "!font-fredokaBold"
                    : ""
                }`}
              >
                {t("french")}
              </MyText>
            </View>
            {currentLang === "fr" && iconsData["checkmark"]()}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LanguageScreen;
