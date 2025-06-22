import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Info = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "settings.options.info",
  });

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 32,
        }}
      >
        <View className="gap-14">
          <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
            <TextBold className="!text-accent text-2xl">
              {t("card.title")}
            </TextBold>
            <MyText>{t("card.body")}</MyText>
            <MyText>{t("card.body2")}</MyText>
            <MyText>{t("card.body3")}</MyText>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-5 left-0 right-0 p-4 bg-background">
        <MainButton
          onPress={() => router.back()}
          text={i18n.t("onboarding.welcome.gotIt")}
          textClass={`text-2xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
      </View>
    </View>
  );
};

export default Info;
