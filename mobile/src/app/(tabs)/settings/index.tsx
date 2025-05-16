import SettingsRow, { SettingsRowType } from "@/src/components/ui/SettingsRow";
import TextBold from "@/src/components/ui/TextBold";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
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
      <View className="flex-1 flex flex-col gap-24 items-center">
        <TextBold className="text-4xl">{t("title")}</TextBold>
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
