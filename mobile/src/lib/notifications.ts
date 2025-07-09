import { isDevice } from "expo-device";
import * as Notifications from "expo-notifications";
import i18n from "../i18n";
import { HourTime } from "../types";

export const changeDailyNotifications = async ({
  hours,
  minutes,
}: HourTime): Promise<{ enabled: boolean }> => {
  try {
    const { granted } = await requestPermissions();
    if (!granted) return { enabled: false };

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

    return { enabled: true };
  } catch {
    alert(i18n.t("notification.error"));
    return { enabled: false };
  }
};

async function requestPermissions(): Promise<{ granted: boolean }> {
  if (isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    if (existingStatus === "granted") {
      return { granted: true };
    }

    const { status } = await Notifications.requestPermissionsAsync();

    if (status !== "granted") {
      return { granted: false };
    }

    return { granted: true };
  } else {
    console.warn("Must use physical device for Push Notifications");
    return { granted: true };
  }
}
