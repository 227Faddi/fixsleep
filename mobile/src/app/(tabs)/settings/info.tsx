import MyText from "@/src/components/MyText";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, View } from "react-native";

const InfoScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.options.info",
  });

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
      <View className="gap-2">
        <View className="flex-row items-center justify-center gap-2">
          {iconsData["info"]()}
          <MyText className="text-center text-4xl text-textPrimary font-bold">
            {t("info")}
          </MyText>
        </View>
        <View className="flex-1 justify-center">
          <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
            <View className="gap-2">
              <MyText className="text-accent text-2xl font-bold">
                {t("card.title1")}
              </MyText>
              <MyText className="text-textPrimary text-xl">
                {t("card.body1")}
              </MyText>
            </View>
            <View className="gap-2">
              <MyText className="text-accent text-2xl font-bold">
                {t("card.title2")}
              </MyText>
              <MyText className="text-textPrimary text-xl">
                {t("card.body2")}
              </MyText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoScreen;
