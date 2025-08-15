import AlarmEditRow from "@/src/components/ui/AlarmEditRow";
import MyText from "@/src/components/ui/MyText";
import { formatDateToTime } from "@/src/lib/formatTime";
import { useAlarmStore } from "@/src/store/appStore";
import { HourTime } from "@/src/types";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Route, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity, View } from "react-native";

const AlarmEditScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep.cycles",
  });
  const { alarmId, new: isNew } = useLocalSearchParams<{
    alarmId?: string;
    new?: string;
  }>();

  const { alarms, removeAlarm } = useAlarmStore();

  const [timePicked, setTimePicked] = useState<HourTime | undefined>();
  const [date, setDate] = useState(new Date());

  const isNewAlarm = isNew === "true";

  const handleSave = () => {
    router.back();
  };

  const handleDelete = async () => {
    router.back();
  };

  const options: { title: string; icon: "sounds"; route: Route }[] = [
    {
      title: "Label",
      icon: "sounds",
      route: "/(tabs)/(home)",
    },
    {
      title: "Sound",
      icon: "sounds",
      route: "/(tabs)/(home)",
    },
    {
      title: "Recurrence",
      icon: "sounds",
      route: "/(tabs)/(home)",
    },
  ];

  return (
    <View className="bg-background flex-1 p-4 gap-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MyText className="text-lg !text-accent">Cancel</MyText>
          </TouchableOpacity>
          <MyText className="text-xl mb-4">
            {isNewAlarm ? "New Alarm" : "Edit Alarm"}
          </MyText>
          <TouchableOpacity onPress={handleSave}>
            <MyText className="text-lg !text-accent">Save</MyText>
          </TouchableOpacity>
        </View>
        <View className="flex-1 flex-col items-center ">
          <RNDateTimePicker
            themeVariant="dark"
            value={date}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={(_, selectedDate) => {
              if (selectedDate) {
                const time = formatDateToTime(selectedDate);
                setDate(selectedDate);
                setTimePicked(time);
              }
            }}
          />
          <View className="w-full gap-6">
            <View className="w-full bg-primary rounded-xl">
              {options.map((item, index) => (
                <AlarmEditRow
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  route={item.route}
                  index={index}
                />
              ))}
            </View>
            {!isNew && (
              <TouchableOpacity
                className="w-full bg-red-500 p-4 rounded-xl mb-4"
                onPress={handleDelete}
              >
                <MyText className="text-center text-lg">Delete Alarm</MyText>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AlarmEditScreen;
