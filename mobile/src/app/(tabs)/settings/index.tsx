import MyText from "@/src/components/ui/MyText";
import SettingsRow, { SettingsRowType } from "@/src/components/ui/SettingsRow";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
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

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View
        className={`flex-1 flex flex-col gap-4 space-y-4 items-center px-8 ${Platform.OS === "ios" ? "pb-32 pt-24" : "pb-28 pt-8"}`}
      >
        <MyText
          className={`text-4xl text-textPrimary mb-14 ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
        >
          {t("title")}
        </MyText>
        <View className="w-full bg-primary rounded-3xl">
          {settings.map((item, index) => (
            <SettingsRow
              key={index}
              title={item.title}
              icon={item.icon}
              route={item.route}
            />
          ))}
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default SettingsScreen;
