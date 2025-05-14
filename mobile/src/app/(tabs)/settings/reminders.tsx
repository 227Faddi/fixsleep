import { TimePickerStyles } from "@/src/components/TimerPicker";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { useAsyncStorage } from "@/src/hooks/useAsyncStorage";
import { formatTime } from "@/src/lib/formatTime";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, Switch, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const RemindersScreen = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "settings.options.reminders",
  });

  const { setItem, getItem, removeItem } = useAsyncStorage("sleeptime");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [sleepTime, setSleepTime] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const loadSleepTime = async () => {
      const stored = await getItem();
      if (stored) {
        const { hours, minutes } = stored;
        setSleepTime(formatTime({ hours, minutes }));
        setIsEnabled(true);
      }
    };
    loadSleepTime();
  }, [getItem]);

  const changeDailyNotifications = async ({
    hours,
    minutes,
  }: {
    hours: number;
    minutes: number;
  }) => {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();

      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: i18n.t("notification.title"),
          body: i18n.t("notification.body"),
          sound: "default",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: hours,
          minute: minutes,
        },
      });

      await setItem({ id, hours, minutes });
      setSleepTime(formatTime({ hours, minutes }));
    } catch {
      alert(i18n.t("notification.error"));
    }
  };

  const toggleReminder = async () => {
    const newStatus = !isEnabled;
    if (!newStatus) {
      await Notifications.cancelAllScheduledNotificationsAsync();
      await removeItem();
      setIsEnabled(false);
      return;
    }
    setShowTimePicker(true);
  };

  return (
    <>
      <View
        className={`bg-background flex-1 flex flex-col gap-4 space-y-4 items-center ${Platform.OS === "ios" ? "pb-28 pt-20 px-16" : "pb-24 pt-10 px-16"}`}
      >
        <Pressable
          onPress={() => router.back()}
          className={`absolute ${Platform.OS === "ios" ? "left-6 top-16" : "left-5 top-5"}`}
        >
          {Platform.OS === "ios"
            ? iconsData["arrowBackIos"]({ color: color.textPrimary })
            : iconsData["arrowBackAndroid"]({ color: color.textPrimary })}
        </Pressable>
        <View className="gap-2">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["notifications"]()}
            <MyText
              className={`text-center text-4xl text-textPrimary   ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
            >
              {t("title")}
            </MyText>
          </View>
          <View className="flex-1 justify-center">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <View className="flex-row items-center justify-center gap-3">
                <MyText
                  className={`text-accent text-2xl text-center ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
                >
                  {t("card.title")}
                </MyText>
                <Switch
                  value={isEnabled}
                  onValueChange={toggleReminder}
                  trackColor={{ false: color.background, true: color.accent }}
                  thumbColor={color.textPrimary}
                  ios_backgroundColor={color.primary}
                />
              </View>
              <MyText className="text-textPrimary text-xl">
                {t("card.body")}
              </MyText>
              {isEnabled && (
                <>
                  <View className="flex-row justify-between">
                    <MyText
                      className={`text-textPrimary text-2xl ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
                    >
                      {t("card.current")}
                    </MyText>
                    <MyText
                      className={`text-textPrimary text-2xl ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
                    >
                      {sleepTime}
                    </MyText>
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
          changeDailyNotifications({ hours, minutes });
          setIsEnabled(true);
        }}
        onCancel={() => {
          setShowTimePicker(false);
        }}
        closeOnOverlayPress
        styles={{ ...TimePickerStyles }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        hideSeconds
        minuteInterval={5}
        hourLabel={"H"}
        minuteLabel={"M"}
      />
    </>
  );
};

export default RemindersScreen;
