import MyText from "@/src/components/ui/MyText";
import SettingsRow, { SettingsRowType } from "@/src/components/ui/SettingsRow";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, TouchableOpacity, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from "react-native-gesture-handler";

const SettingsScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings",
  });

  const settings: SettingsRowType[] = [
    {
      title: t("options.language.title"),
      icon: "language",
      route: "/(tabs)/settings/language",
    },
    {
      title: t("options.reminders.title"),
      icon: "notifications",
      route: "/(tabs)/settings/reminders",
    },
    {
      title: t("options.sleep.title"),
      icon: "bed",
      route: "/(tabs)/settings/sleep",
    },
    {
      title: t("options.info.title"),
      icon: "info",
      route: "/(tabs)/settings/info",
    },
  ];

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    if (translationX > 50) {
      router.push("/(tabs)/sounds");
    }
  };

  const handleRate = () => {};

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 flex flex-col gap-14 items-center pt-2 px-8 pb-32">
          <View className="gap-3">
            <TextBold className="text-4xl text-center">{t("title")}</TextBold>
            <MyText className="text-xl text-center max-w-xs">
              {t("subtitle")}
            </MyText>
          </View>
          <View className="w-full bg-primary rounded-3xl">
            {settings.map((item, index) => (
              <SettingsRow
                key={index}
                title={item.title}
                icon={item.icon}
                route={item.route}
              />
            ))}
            <TouchableOpacity
              onPress={handleRate}
              className="w-full p-6 rounded-3xl flex-row gap-4 items-center justify-between"
            >
              <View className="flex-row gap-4">
                {iconsData["star"]({ justifySelf: "flex-end" })}
                <MyText className="text-xl text-textPrimary">
                  {t("options.rateus")}
                </MyText>
              </View>
              {Platform.OS === "ios" && iconsData["arrowForward"]()}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
};

export default SettingsScreen;
