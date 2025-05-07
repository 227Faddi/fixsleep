import MainButton from "@/src/components/MainButton";
import MyText from "@/src/components/MyText";
import TimerPicker from "@/src/components/TimerPicker";
import iconsData from "@/src/constants/iconsData";
import { formatTime, formatTimeNow } from "@/src/lib/formatTime";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
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
      router.push("/(tabs)/sounds");
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
        <View className="gap-3">
          <View className="flex-row justify-center items-center gap-1">
            <MyText className="text-5xl text-textPrimary font-fredokaBold">
              FixSleep
            </MyText>
          </View>
          <MyText className="text-2xl text-center text-textPrimary font-fredokaMedium">
            Calculate your sleep cycles for better rest and recovery.
          </MyText>
        </View>
        <View className="flex-1 gap-12 justify-center">
          <View className="gap-6">
            <View className="gap-3">
              <MyText className="text-2xl text-center text-textPrimary">
                Wake Up At
              </MyText>
              <MainButton
                onPress={() => setShowWakeTime(true)}
                text="Pick a time"
              />
            </View>
            <View className="gap-3">
              <MyText className="text-2xl text-center text-textPrimary">
                Fall Asleep At
              </MyText>
              <MainButton
                onPress={() => setShowSleepTime(true)}
                text="Pick a time"
              />
            </View>
          </View>
          <MainButton
            onPress={() => getSleepCycles(formatTimeNow())}
            text="Rest Now"
            icon={iconsData["alarm"]()}
            textClass="text-2xl text-center text-textPrimary"
            containerClass={`p-6 bg-accent shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]`}
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
