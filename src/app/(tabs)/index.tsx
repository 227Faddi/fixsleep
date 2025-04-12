import MainButton from "@/src/components/MainButton";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

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

  const formatTime = ({
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

  return (
    <View className="h-screen bg-[#04052e]">
      <View className="flex justify-center items-center">
        <View className="mt-40 w-1/2">
          <View className="mb-12">
            <Text className="text-xl mb-6 text-white text-center">
              Wake up Time
            </Text>
            <MainButton onPress={() => setShowWakeTime(true)} text="Set" />
          </View>
          <View>
            <Text className="text-xl mb-6 text-white text-center">
              Sleep Time
            </Text>
            <MainButton onPress={() => setShowSleepTime(true)} text="Set" />
          </View>
        </View>
        <View className="mt-20">
          <MainButton
            onPress={() => calcSleep(Date.now())}
            text="Sleep Now 🌟"
            textClass="text-3xl text-center text-white"
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
