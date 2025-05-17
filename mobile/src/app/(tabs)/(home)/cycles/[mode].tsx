import BackButton from "@/src/components/ui/BackButton";
import CycleCard from "@/src/components/ui/CycleCard";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import getCyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import { useTimetofall } from "@/src/hooks/contexts";
import calcCycles from "@/src/lib/calcCycles";
import { router, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="bg-background flex-1 flex flex-col gap-14 items-center p-8 px-12 pb-32">
        <BackButton />
        <View className="gap-2">
          <View className="flex-row items-center justify-center gap-2">
            {mode === "sleep" ? iconsData["sun"]() : iconsData["moon"]()}
            <TextBold className="text-center text-4xl">
              {mode === "sleep" ? t("wakeUpTime") : t("bedtime")}
            </TextBold>
          </View>
          <MyText className="text-xl text-center">
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
    </ScrollView>
  );
};

export default CyclesScreen;
