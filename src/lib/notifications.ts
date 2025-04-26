export const changeDailyNotifications = async ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  setSleepTime(formatTime({ hours, minutes }));

  try {
    await Notifications.scheduleNotificationAsync({
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

    const noti = await Notifications.getAllScheduledNotificationsAsync();
    console.log(noti);
  } catch {
    alert("Enable to schedule notifiaction, try again");
  }
};
