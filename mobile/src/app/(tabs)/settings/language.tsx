import BackButton from "@/src/components/ui/BackButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useAsyncStorage } from "@/src/hooks/useAsyncStorage";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";

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
    <View className="bg-background flex-1 flex flex-col gap-14 space-y-4 items-center p-8">
      <BackButton />
      <View className="flex-row items-center justify-center gap-2">
        {iconsData["language"]()}
        <TextBold className="text-center text-4xl">{t("title")}</TextBold>
      </View>
      <View className="flex-1 w-full">
        <View className="justify-center bg-primary rounded-3xl">
          <TouchableOpacity
            onPress={() => changeLang("en")}
            disabled={currentLang === "en"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              {currentLang === "en" ? (
                <TextBold className="text-xl">{t("english")}</TextBold>
              ) : (
                <MyText>{t("english")}</MyText>
              )}
            </View>
            {currentLang === "en" && iconsData["checkmark"]()}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLang("fr")}
            disabled={currentLang === "fr"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              {currentLang === "fr" ? (
                <TextBold className="text-xl">{t("french")}</TextBold>
              ) : (
                <MyText>{t("french")}</MyText>
              )}
            </View>
            {currentLang === "fr" && iconsData["checkmark"]()}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LanguageScreen;
