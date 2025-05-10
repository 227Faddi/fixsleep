import CycleCard from "@/src/components/ui/CycleCard";
import MyText from "@/src/components/ui/MyText";
import color from "@/src/constants/colors";
import getCyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import { useTimetofall } from "@/src/hooks/contexts";
import calcCycles from "@/src/lib/calcCycles";
import { router, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, View } from "react-native";

const CyclesScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep.cycles",
  });
  const { mode, query: time } = useLocalSearchParams<{
    mode: "sleep" | "wake";
    query: string;
  }>();

  const { timetofall } = useTimetofall();

  if (mode !== "sleep" && mode !== "wake") {
    router.back();
    return alert("Error, Please try again");
  }

  const timeCycles =
    mode === "sleep"
      ? calcCycles.sleep(time, Number(timetofall))
      : calcCycles.wake(time, Number(timetofall));

  const cycles = getCyclesData(mode);

  return (
    <View
      className={`bg-background flex-1 flex flex-col gap-4 space-y-4 items-center ${Platform.OS === "ios" ? "pb-28 pt-20 px-16" : "pb-24 pt-10 px-16"}`}
    >
      <Pressable
        onPress={() => router.back()}
        className={`absolute ${Platform.OS === "ios" ? "left-6 top-16" : "left-3 top-6"}`}
      >
        {Platform.OS === "ios"
          ? iconsData["arrowBackIos"]({ color: color.textPrimary })
          : iconsData["arrowBackAndroid"]({ color: color.textPrimary })}
      </Pressable>
      <View className="gap-2">
        <View className="flex-row items-center justify-center gap-2">
          {mode === "sleep" ? iconsData["sun"]() : iconsData["moon"]()}
          <MyText className="text-center text-4xl text-textPrimary font-bold">
            {mode === "sleep" ? t("wakeUpTime") : t("bedtime")}
          </MyText>
        </View>
        <MyText className="text-center text-xl text-textPrimary">
          {mode === "sleep"
            ? t("descriptionSleep", { time })
            : t("descriptionWake", { time })}
        </MyText>
      </View>
      <View className="flex-1 justify-center gap-4">
        {cycles.map((item) => (
          <CycleCard
            key={item.cycle}
            cycle={item.cycle}
            hrSleep={item.hrSleep}
            time={timeCycles[item.cycle as keyof typeof timeCycles]}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default CyclesScreen;
