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
    <View className="flex-1 pb-32 pt-20 px-16 gap-4 items-center">
      <View className="gap-3">
        <View className="flex-row justify-center items-center gap-1">
          <Text className="text-4xl">Sleepnow</Text>
          {icon["bed"]()}
        </View>
        <Text className="text-xl text-center">
          Helping you catch better zzz’s, one cycle at a time.
        </Text>
      </View>

      <View className="flex-1 gap-12 justify-center w-full">
        <View className="gap-6">
          <View className="gap-3">
            <Text className="text-2xl text-center">Wake Up At</Text>
            <MainButton
              onPress={() => setShowWakeTime(true)}
              text="Pick a time"
            />
          </View>
          <View className="gap-3">
            <Text className="text-2xl text-center">Fall Asleep At</Text>
            <MainButton
              onPress={() => setShowWakeTime(true)}
              text="Pick a time"
            />
          </View>
        </View>
        <MainButton
          onPress={() => calcSleep(Date.now())}
          text="Rest Now 🌟"
          textClass="text-2xl text-center"
          containerClass="p-6"
        />
      </View>

      <TimerPickerModal
        visible={showWakeTime}
        setIsVisible={setShowWakeTime}
        onConfirm={(pickedDuration) => {
          setShowWakeTime(false);
          router.navigate(`/cycles/${formatTime(pickedDuration)}`);
        }}
        modalTitle="Set your wake-up time"
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
    </View>
  );
}
