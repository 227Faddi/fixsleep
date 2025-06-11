import MyText from "@/src/components/ui/MyText";
import SettingsRow, { SettingsRowType } from "@/src/components/ui/SettingsRow";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Linking, Platform, TouchableOpacity, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from "react-native-gesture-handler";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation("translation", {
    keyPrefix: "settings",
  });

  const settings: Partial<SettingsRowType>[] = [
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
      title: t("options.language.title"),
      icon: "language",
      route: "/(tabs)/settings/language",
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
      navigation.navigate("sounds");
    }
  };

  const rateApp = () => {
    const iosLink =
      "https://apps.apple.com/ca/app/fixsleep/id6745803646?action=write-review";
    const androidLink =
      "https://play.google.com/store/apps/details?id=com.x227faddi.fixsleep";

    const link = Platform.OS === "ios" ? iosLink : androidLink;

    Linking.openURL(link).catch((err) =>
      alert("Failed to open store link, Sorry :(")
    );
  };

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
                index={index}
                key={index}
                title={item.title!}
                icon={item.icon!}
                route={item.route!}
              />
            ))}
            <TouchableOpacity
              onPress={rateApp}
              className="w-full p-6 flex-row gap-4 items-center justify-between border-t border-[#ffffff09]"
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
