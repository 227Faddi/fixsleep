import * as Notifications from "expo-notifications";
import i18n from "../i18n";

export const changeDailyNotifications = async ({
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

    return { id, hours, minutes };

    // await setItem({ id, hours, minutes });
    // setSleepTime(formatTime({ hours, minutes }));
  } catch {
    alert(i18n.t("notification.error"));
  }
};
