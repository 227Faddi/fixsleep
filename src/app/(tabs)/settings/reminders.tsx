import MainButton from "@/src/components/MainButton";
import { TimePickerStyles } from "@/src/components/TimerPicker";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { useAsyncStorage } from "@/src/hooks/useAsyncStorage";
import { formatTime } from "@/src/lib/formatTime";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const RemindersScreen = () => {
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
  }, []);

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
          title: "Sleep Time",
          body: "It's almost time to sleep. Start winding down and get ready for bed.",
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
      alert("Enable to schedule notifiaction, try again");
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
      <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-6 top-16"
        >
          {iconsData["arrowBack"]({ color: color.textPrimary })}
        </Pressable>
        <View className="gap-2">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["notifications"]()}
            <Text className="text-center text-4xl text-textPrimary font-bold">
              Reminders
            </Text>
          </View>
          <View className="flex-1 justify-center">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <View className="flex-row items-center justify-center gap-3">
                <Text className="text-accent text-2xl text-center font-bold">
                  Sleep Time
                </Text>
                <Switch
                  value={isEnabled}
                  onValueChange={toggleReminder}
                  trackColor={{ false: color.primary, true: color.accent }}
                  ios_backgroundColor={color.primary}
                />
              </View>
              <Text className="text-textPrimary text-xl">
                Set a bedtime reminder to build a consistent and healthy sleep
                routine.
              </Text>
              {isEnabled && (
                <>
                  <View className="flex-row justify-between">
                    <Text className="text-textPrimary text-2xl font-bold">
                      Current
                    </Text>
                    <Text className="text-textPrimary text-2xl font-bold">
                      {sleepTime}
                    </Text>
                  </View>
                  <MainButton
                    onPress={() => setShowTimePicker(true)}
                    containerClass="bg-accent"
                    text="Adjust Time"
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </View>
      <TimerPickerModal
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
