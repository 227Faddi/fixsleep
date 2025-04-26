import CycleCard from "@/src/components/CycleCard";
import color from "@/src/constants/colors";
import getCyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import { useTimetofall } from "@/src/hooks/contexts";
import calcCycles from "@/src/lib/calcCycles";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

const CyclesScreen = () => {
  const { mode, query: time } = useLocalSearchParams<{
    mode: "sleep" | "wake";
    query: string;
  }>();

  // create an object with sleep and wake labels

  const { timetofall } = useTimetofall();

  if (mode !== "sleep" && mode !== "wake") {
    router.back();
    return alert("Error, Please try again");
  }

  const timeCycles =
    mode === "sleep"
      ? calcCycles.sleep(time, Number(timetofall))
      : calcCycles.wake(time, Number(timetofall));

  console.log(timeCycles);

  const cycles = getCyclesData(mode);

  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]({ color: color.textPrimary })}
      </Pressable>
      <View className="gap-2">
        <View className="flex-row items-center justify-center gap-2">
          {mode === "sleep" ? iconsData["moon"]() : iconsData["sun"]()}
          <Text className="text-center text-4xl text-textPrimary font-bold">
            {mode === "sleep" ? `Sleep` : `Wake up`}
          </Text>
        </View>
        <Text className="text-center text-xl text-textPrimary">
          {mode === "sleep"
            ? `Wake up at the best time after your sleep cycle.`
            : `Go to bed at one of these time to wake up relaxed at ${time}`}
        </Text>
      </View>
      <View className="flex-1 justify-center gap-4">
        {cycles.map((item) => (
          <CycleCard
            key={item.id}
            cycle={item.cycle}
            hrSleep={item.hrSleep}
            time={timeCycles[item.id as keyof typeof timeCycles]}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default CyclesScreen;
