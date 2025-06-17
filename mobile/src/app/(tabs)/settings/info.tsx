import BackButton from "@/src/components/ui/BackButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";

const InfoScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.options.info",
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="bg-background flex-1 flex flex-col space-y-4 items-center p-8 pb-32">
        <BackButton />
        <View className="gap-14">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["info"]()}
            <TextBold className="text-center text-4xl">{t("info")}</TextBold>
          </View>
          <View className="flex-1 justify-center">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <View className="gap-4">
                <TextBold className="!text-accent text-2xl">
                  {t("card.title")}
                </TextBold>
                <MyText className="text-xl">{t("card.body")}</MyText>
                <MyText>{t("card.body2")}</MyText>
                <MyText>{t("card.body3")}</MyText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoScreen;
