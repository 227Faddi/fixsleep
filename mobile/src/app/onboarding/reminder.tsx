import { BedtimePicker } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MainButton from "@/src/components/ui/MainButton";
import TextBold from "@/src/components/ui/TextBold";
import i18n from "@/src/i18n";
import { changeDailyNotifications } from "@/src/lib/notifications";
import { useSleepTimeStore } from "@/src/store/appStore";
import { HourTime } from "@/src/types";
import { router } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Linking, Platform, View } from "react-native";

const Reminder = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding.reminder",
  });

  const setSleepTime = useSleepTimeStore((state) => state.setSleepTime);

  const [timePicked, setTimePicked] = useState<HourTime>({
    hours: 22,
    minutes: 30,
  });

  const handleSetReminder = async () => {
    const { enabled } = await changeDailyNotifications(timePicked);
    if (!enabled) {
      Alert.alert(
        i18n.t("notification.disabledTitle"),
        i18n.t("notification.disabledMessage"),
        [
          {
            text: i18n.t("notification.openSettings"),
            onPress: () => {
              Platform.OS === "ios"
                ? Linking.openURL("app-settings:")
                : Linking.openSettings();
            },
          },
          {
            text: i18n.t("notification.continueWithout"),
            style: "default",
            onPress: () => router.push("/onboarding/end"),
          },
          { text: i18n.t("notification.cancel"), style: "cancel" },
        ]
      );
    } else {
      setSleepTime(timePicked);
      router.push("/onboarding/end");
    }
  };

  return (
    <View className="bg-background flex-1 gap-4 items-center pb-2 pt-20 px-8">
      <BackButton />
      <View className="flex-1 justify-center items-center gap-4">
        <View className="gap-1">
          <TextBold className="text-3xl text-center">{t("title")}</TextBold>
        </View>
        <View className="flex-1 justify-center items-center">
          <View className="bg-primary px-8 py-6 rounded-3xl items-center justify-center">
            <BedtimePicker onChangeFN={setTimePicked} />
          </View>
        </View>
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => handleSetReminder()}
          text={t("btn")}
          textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
      </View>
    </View>
  );
};

export default Reminder;
