import MainButton from "@/src/components/MainButton";
import icon from "@/src/constants/icon";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

export const formatTime = ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  const h = hours?.toString().padStart(2, "0");
  const m = minutes?.toString().padStart(2, "0");
  return `${h}:${m}`;
};

export default function Index() {
  const router = useRouter();
  const [showSleepTime, setShowSleepTime] = useState(false);
  const [showWakeTime, setShowWakeTime] = useState(false);

  const date = new Date();

  const calcSleep = (timeNow: number) => {
    const date = new Date(timeNow);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = formatTime({ hours, minutes });
    router.navigate(`/cycles/${time}`);
  };

  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-6 items-center">
      <View className="gap-3">
        <Text className="text-4xl text-center">Sleep Now {icon["moon"]()}</Text>
        <Text className="text-xl text-center">
          Helping you catch better zzz’s, one cycle at a time.
        </Text>
      </View>
      <View className="w-full">
        <View className="mb-8">
          <Text className="text-xl mb-6 text-center">Wake up Time</Text>
          <MainButton onPress={() => setShowWakeTime(true)} text="Wake Up At" />
        </View>
        <View>
          <Text className="text-xl mb-6 text-center">Sleep Time</Text>
          <MainButton
            onPress={() => setShowSleepTime(true)}
            text="Fall Asleep At"
          />
        </View>
        <View className="">
          <MainButton
            onPress={() => calcSleep(Date.now())}
            text="Sleep Now 🌟"
            textClass="text-3xl text-center"
            containerClass="p-6"
          />
        </View>
      </View>
      <TimerPickerModal
        visible={showWakeTime}
        setIsVisible={setShowWakeTime}
        onConfirm={(pickedDuration) => {
          setShowWakeTime(false);
          router.navigate(`/cycles/${formatTime(pickedDuration)}`);
        }}
        modalTitle="When to wake up?"
        onCancel={() => setShowWakeTime(false)}
        closeOnOverlayPress
        styles={{
          theme: "dark",
        }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        hideSeconds
        minuteInterval={5}
        hourLabel={"H"}
        minuteLabel={"M"}
      />
      <TimerPickerModal
        visible={showSleepTime}
        setIsVisible={setShowSleepTime}
        onConfirm={(pickedDuration) => {
          setShowSleepTime(false);
          router.navigate(`/cycles/${formatTime(pickedDuration)}`);
        }}
        modalTitle="When to sleep?"
        onCancel={() => setShowSleepTime(false)}
        closeOnOverlayPress
        styles={{
          theme: "dark",
        }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        hideSeconds
        minuteInterval={5}
        hourLabel={"H"}
        minuteLabel={"M"}
      />
    </View>
  );
}
