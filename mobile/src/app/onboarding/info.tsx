import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";

const modal = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.options.info",
  });

  return (
    <View className="bg-background flex-1 flex flex-col space-y-4 items-center p-8 pb-32">
      <View className="gap-14">
        <View className="flex-1 justify-center">
          <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
            <View className="gap-2">
              <TextBold className="!text-accent text-2xl">
                {t("card.title1")}
              </TextBold>
              <MyText className="text-xl">{t("card.body1")}</MyText>
            </View>
            <View className="gap-2">
              <TextBold className="!text-accent text-2xl">
                {t("card.title2")}
              </TextBold>
              <MyText className="text-xl">{t("card.body2")}</MyText>
            </View>
          </View>
        </View>
      </View>
      <MainButton
        onPress={() => router.back()}
        text="Close"
        textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
        containerClass={`p-6 bg-accent`}
      />
    </View>
  );
};

export default modal;
