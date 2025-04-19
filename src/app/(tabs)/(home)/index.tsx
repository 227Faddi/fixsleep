import MainButton from "@/src/components/MainButton";
import TimerPicker from "@/src/components/TimerPicker";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { formatTime, formatTimeNow } from "@/src/lib/formatTime";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const HomeScreen = () => {
  const router = useRouter();
  const [showWakeTime, setShowWakeTime] = useState(false);
  const [showSleepTime, setShowSleepTime] = useState(false);

  const getSleepCycles = ({
    hours,
    minutes,
    mode,
  }: {
    hours: number;
    minutes: number;
    mode: string;
  }) => {
    const time = formatTime({ hours, minutes });
    router.navigate(`/cycles/${mode}?query=${time}`);
  };

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    if (translationX < -50) {
      router.push("/(tabs)/(sounds)");
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
        <View className="gap-3">
          <View className="flex-row justify-center items-center gap-1">
            <Text className="text-4xl text-textPrimary">Sleepnow</Text>
            {iconsData["bed"]({ color: color.textPrimary })}
          </View>
          <Text className="text-xl text-center text-textPrimary">
            Helping you catch better zzz’s, one cycle at a time.
          </Text>
        </View>
        <View className="flex-1 gap-12 justify-center">
          <View className="gap-6">
            <View className="gap-3">
              <Text className="text-2xl text-center text-textPrimary">
                Wake Up At
              </Text>
              <MainButton
                onPress={() => setShowWakeTime(true)}
                text="Pick a time"
              />
            </View>
            <View className="gap-3">
              <Text className="text-2xl text-center text-textPrimary">
                Fall Asleep At
              </Text>
              <MainButton
                onPress={() => setShowSleepTime(true)}
                text="Pick a time"
              />
            </View>
          </View>
          <MainButton
            onPress={() => getSleepCycles(formatTimeNow())}
            text="Rest Now 🌟"
            textClass="text-2xl text-center text-primary"
            containerClass={`p-6 bg-accent`}
          />
        </View>
        <TimerPicker
          mode="wake"
          showModal={showWakeTime}
          setShowModal={setShowWakeTime}
          onConfirmFN={getSleepCycles}
        />
        <TimerPicker
          mode="sleep"
          showModal={showSleepTime}
          setShowModal={setShowSleepTime}
          onConfirmFN={getSleepCycles}
        />
      </View>
    </PanGestureHandler>
  );
};

export default HomeScreen;
