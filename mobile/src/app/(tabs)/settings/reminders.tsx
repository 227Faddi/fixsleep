import { TimePickerStyles } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { formatTime } from "@/src/lib/formatTime";
import { changeDailyNotifications } from "@/src/lib/notifications";
import { useSleepTimeStore } from "@/src/store/appStore";
import { HourTime } from "@/src/types";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Linking, Platform, Switch, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const RemindersScreen = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "settings.options.reminders",
  });

  const { sleepTime, setSleepTime, removeSleepTime } = useSleepTimeStore();

  const [showTimePicker, setShowTimePicker] = useState(false);
  const isEnabled = !!sleepTime;

  const onTimePickerConfirm = async ({ hours, minutes }: HourTime) => {
    const { enabled } = await changeDailyNotifications({ hours, minutes });
    if (!enabled) {
      Alert.alert(
        i18n.t("notification.disabledTitle"),
        i18n.t("notification.disabledMessage"),
        [
          { text: i18n.t("notification.cancel"), style: "cancel" },
          {
            text: i18n.t("notification.openSettings"),
            onPress: () => {
              Platform.OS === "ios"
                ? Linking.openURL("app-settings:")
                : Linking.openSettings();
            },
          },
        ]
      );
    } else {
      setSleepTime({ hours, minutes });
    }
  };

  const toggleReminder = async () => {
    if (!sleepTime) {
      setShowTimePicker(true);
    }
    await Notifications.cancelAllScheduledNotificationsAsync();
    removeSleepTime();
    return;
  };

  return (
    <>
      <View className="bg-background flex-1 flex flex-col gap-4 items-center p-8">
        <BackButton />
        <View className="gap-14">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["notifications"]()}
            <TextBold className="text-center text-4xl">{t("title")}</TextBold>
          </View>
          <View className="flex-1">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <View className="flex-row items-center justify-between gap-3">
                <TextBold className="!text-accent text-2xl">
                  {t("card.title")}
                </TextBold>
                <Switch
                  value={isEnabled}
                  onValueChange={toggleReminder}
                  trackColor={{ false: color.background, true: color.accent }}
                  thumbColor={color.textPrimary}
                  ios_backgroundColor={color.primary}
                />
              </View>
              <MyText>{t("card.body")}</MyText>
              {sleepTime && (
                <>
                  <View className="flex-row justify-between">
                    <TextBold className="text-2xl text-center">
                      {t("card.current")}
                    </TextBold>
                    <TextBold className="text-2xl text-center">
                      {formatTime(sleepTime)}
                    </TextBold>
                  </View>
                  <MainButton
                    onPress={() => setShowTimePicker(true)}
                    containerClass="bg-accent"
                    text={t("card.btn")}
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </View>
      <TimerPickerModal
        modalTitle={i18n.t("timePicker.pickTime")}
        confirmButtonText={i18n.t("timePicker.save")}
        cancelButtonText={i18n.t("timePicker.cancel")}
        visible={showTimePicker}
        setIsVisible={setShowTimePicker}
        onConfirm={(pickedDuration) => {
          setShowTimePicker(false);
          const { hours, minutes } = pickedDuration;
          onTimePickerConfirm({ hours, minutes });
        }}
        onCancel={() => {
          setShowTimePicker(false);
        }}
        closeOnOverlayPress
        LinearGradient={LinearGradient}
        styles={{ ...TimePickerStyles }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        hideSeconds
        minuteInterval={5}
        hourLabel={":"}
        minuteLabel={""}
      />
    </>
  );
};

export default RemindersScreen;
