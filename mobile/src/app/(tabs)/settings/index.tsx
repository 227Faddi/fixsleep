import MyText from "@/src/components/ui/MyText";
import SettingsRow, { SettingsRowType } from "@/src/components/ui/SettingsRow";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { TabNav } from "@/src/types";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Linking, Platform, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SettingsScreen = () => {
  const navigation = useNavigation<TabNav>();
  const { t } = useTranslation("translation", {
    keyPrefix: "settings",
  });

  const settings: Partial<SettingsRowType>[] = [
    // {
    //   title: "Onboarding (test)",
    //   icon: "rocket",
    //   route: "/onboarding",
    // },
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 flex flex-col pt-3">
        <View className="border-b border-primary pb-3 px-4">
          <TextBold className="text-4xl">{t("title")}</TextBold>
        </View>
        <View className="flex-1 px-4 py-8 gap-12">
          <TouchableOpacity
            onPress={rateApp}
            className="rounded-xl w-full p-6 flex-row gap-4 items-center justify-between border-4 bg-accent border-white"
          >
            {iconsData["star"]({ justifySelf: "flex-end" })}
            <MyText className="text-textPrimary text-2xl">
              {t("options.rateus")}
            </MyText>
          </TouchableOpacity>
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
