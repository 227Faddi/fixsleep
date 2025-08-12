import color from "@/src/constants/colors";
import { useAlarmStore } from "@/src/store/appStore";
import { Alarm } from "@/src/types";
import { router } from "expo-router";
import { Switch, TouchableOpacity, View } from "react-native";
import MyText from "./MyText";

type Props = {
  alarm: Alarm;
};

const AlarmCard = ({ alarm }: Props) => {
  const { updateAlarm } = useAlarmStore();

  const editAlarm = () => {
    router.push({
      pathname: "/(tabs)/alarms/edit",
      params: { alarmId: alarm.id },
    });
  };

  const toggleSwitch = () => {
    updateAlarm({ ...alarm, isEnabled: !alarm.isEnabled });
  };

  const formatDays = () => {
    if (alarm.days.length === 7) {
      return <MyText className="text-accent text-xl">Everyday</MyText>;
    }

    if (alarm.days.length === 0) {
      return <MyText>Only once</MyText>;
    }

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const activeDays = alarm.days.map((dayIndex) => daysOfWeek[dayIndex]);

    return (
      <View className="flex-row items-center gap-2">
        {activeDays.map((day, index) => (
          <MyText key={index} className="text-accent text-xl">
            {day}
          </MyText>
        ))}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={editAlarm}
      className={`p-6 rounded-3xl gap-4 bg-primary border-2 ${alarm.isEnabled ? "border-[#C4A9F2]" : "border-primary"}`}
    >
      <View className="flex-row items-center justify-between">
        {formatDays()}
        <MyText className="text-xl">{alarm.label}</MyText>
      </View>
      <View className="flex-row justify-between">
        <MyText className="text-3xl">{alarm.time}</MyText>
        <Switch
          value={alarm.isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: color.background, true: color.accent }}
          thumbColor={color.textPrimary}
          ios_backgroundColor={color.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AlarmCard;
