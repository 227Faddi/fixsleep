import * as Notifications from "expo-notifications";
import i18n from "../i18n";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const changeDailyNotifications = async ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}): Promise<{ enabled: boolean }> => {
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
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  if (existingStatus === "granted") {
    return { granted: true };
  }

  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== "granted") {
    return { granted: false };
  }

  return { granted: true };
}
