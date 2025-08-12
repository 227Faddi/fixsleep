import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications";
import i18n from "../../i18n";
import { requestPermissions } from "./utils";

export const cancelNotificationById = async (id?: string) => {
  if (id) {
    await Notifications.cancelScheduledNotificationAsync(id);
  }
};

export const addDailyBedtime = async ({
  hours,
  minutes,
  existingId,
}: {
  hours: number;
  minutes: number;
  existingId?: string;
}): Promise<{ notificationId: string | null }> => {
  try {
    const { granted } = await requestPermissions();
    if (!granted) return { notificationId: null };

    await cancelNotificationById(existingId);

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: i18n.t("notification.title"),
        body: i18n.t("notification.body"),
        sound: "default",
        data: { type: "bedtime" },
      },
      trigger: {
        type: SchedulableTriggerInputTypes.DAILY,
        hour: hours,
        minute: minutes,
      },
    });

    return { notificationId };
  } catch {
    alert(i18n.t("notification.error"));
    return { notificationId: null };
  }
};

// For one-time alarms
export const addOneTimeAlarm = async (
  date: Date,
  title: string,
  body: string,
  sound: string
): Promise<{ enabled: boolean }> => {
  try {
    const { granted } = await requestPermissions();
    if (!granted) return { enabled: false };

    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        sound: sound,
      },
      trigger: {
        date: date,
        type: Notifications.SchedulableTriggerInputTypes.DATE,
      },
    });

    return { enabled: true };
  } catch {
    alert(i18n.t("notification.error"));
    return { enabled: false };
  }
};

// // For repetitive alarms
// export const addRepetitiveAlarm = async (
//   hour: number,
//   minute: number,
//   days: number[], // 0 for Sunday, 1 for Monday, etc.
//   title: string,
//   body: string,
//   sound: string
// ): Promise<{ enabled: boolean }> => {
//   try {
//     const { granted } = await requestPermissions();
//     if (!granted) return { enabled: false };

//     // Cancel existing repetitive alarms with the same trigger (if any)
//     const scheduled = await Notifications.getAllScheduledNotificationsAsync();
//     scheduled.forEach(async (notification) => {
//       if (
//         notification.trigger &&
//         "weekday" in notification.trigger &&
//         notification.trigger.hour === hour &&
//         notification.trigger.minute === minute &&
//         days.includes(notification.trigger.weekday as number)
//       ) {
//         await Notifications.cancelScheduledNotificationAsync(
//           notification.identifier
//         );
//       }
//     });

//     // Schedule a notification for each selected day
//     for (const day of days) {
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: title,
//           body: body,
//           sound: sound,
//         },
//         trigger: {
//           weekday: day,
//           hour: hour,
//           minute: minute,
//           type: Notifications.SchedulableTriggerInputTypes.DAILY,
//         } as Notifications.DailyTriggerInput,
//       });
//     }

//     return { enabled: true };
//   } catch {
//     alert(i18n.t("notification.error"));
//     return { enabled: false };
//   }
// };
