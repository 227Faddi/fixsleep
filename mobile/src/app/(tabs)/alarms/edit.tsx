import MyText from "@/src/components/ui/MyText";
import { useAlarmStore } from "@/src/store/appStore";
import { Alarm } from "@/src/types";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Button, ScrollView, TextInput, View } from "react-native";

const AlarmEditScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep.cycles",
  });
  const { alarmId, new: isNew } = useLocalSearchParams<{
    alarmId?: string;
    new?: string;
  }>();
  const { alarms, addAlarm, updateAlarm } = useAlarmStore();

  const [alarm, setAlarm] = useState<Partial<Alarm>>({
    time: "",
    label: "",
    days: [],
    isEnabled: true,
    sound: "rainfall",
  });

  const isNewAlarm = isNew === "true";

  useEffect(() => {
    if (alarmId) {
      const existingAlarm = alarms.find((a) => a.id === alarmId);
      if (existingAlarm) {
        setAlarm(existingAlarm);
      }
    }
  }, [alarmId, alarms]);

  const handleSave = () => {
    if (isNewAlarm) {
      const success = addAlarm({
        ...alarm,
        id: Date.now().toString(),
      } as Alarm);
      if (!success) {
        Alert.alert(
          "Alarm Limit Reached",
          "You can only have up to 10 alarms."
        );
        return;
      }
    } else {
      updateAlarm(alarm as Alarm);
    }
    router.back();
  };

  return (
    <View className="bg-background flex-1 p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyText className="text-2xl mb-4">
          {isNewAlarm ? "Create New Alarm" : "Edit Alarm"}
        </MyText>

        <View className="gap-4">
          <TextInput
            className="bg-primary text-white p-4 rounded-lg"
            placeholder="Label"
            value={alarm.label}
            onChangeText={(text) => setAlarm({ ...alarm, label: text })}
          />
          <TextInput
            className="bg-primary text-white p-4 rounded-lg"
            placeholder="Time (HH:mm)"
            value={alarm.time}
            onChangeText={(text) => setAlarm({ ...alarm, time: text })}
          />
        </View>

        <View className="mt-8">
          <Button title="Save" onPress={handleSave} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AlarmEditScreen;
