import BackButton from "@/src/components/ui/BackButton";
import CycleCard from "@/src/components/ui/CycleCard";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import color from "@/src/constants/colors";
import getCyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import calcCycles from "@/src/lib/calcCycles";
import { useTimetofallStore } from "@/src/store/appStore";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity, View } from "react-native";

const CyclesScreen = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep.cycles",
  });
  const { mode, query: time } = useLocalSearchParams<{
    mode: "sleep" | "wake";
    query: string;
  }>();

  const { timetofall, setTimetofall } = useTimetofallStore();
  const [selectedCycle, setSelectedCycle] = useState<number | null>(null);

  if (mode !== "sleep" && mode !== "wake") {
    router.back();
    return alert("Error, Please try again");
  }

  const timeCycles =
    mode === "sleep"
      ? calcCycles.sleep(time, timetofall)
      : calcCycles.wake(time, timetofall);

  const cycles = getCyclesData(mode);

  const handleSelectCycle = (cycle: number) => {
    setSelectedCycle((prev) => (prev === cycle ? null : cycle));
  };

  return (
    <View className="bg-background flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-col gap-12 items-center py-8 px-4 pb-32">
          <BackButton />
          <View className="gap-2">
            <View className="flex-row items-center justify-center gap-2">
              {mode === "sleep"
                ? iconsData["sun"]({ color: color.yellow })
                : iconsData["moon"]({ color: "#8FB3FF" })}
              <TextBold className="text-center text-4xl">
                {mode === "sleep" ? t("wakeUpTime") : t("bedtime")}
              </TextBold>
            </View>
            <MyText className="text-xl text-center max-w-xs">
              {mode === "sleep"
                ? t("descriptionSleep", { time })
                : t("descriptionWake", { time })}
            </MyText>
          </View>
          <View className="flex-1 w-full justify-center items-center gap-12">
            <View className="gap-3">
              <MyText className="text-center text-lg">I'll Sleep in...</MyText>
              <View className="flex-row justify-center items-center gap-4">
                <TouchableOpacity
                  className="bg-accent rounded-full p-2"
                  onPress={() => setTimetofall(timetofall - 1)}
                >
                  {iconsData["remove"]({ size: 30 })}
                </TouchableOpacity>
                <MyText className="text-2xl border-b border-white p-2">
                  {timetofall} {"min"}
                </MyText>
                <TouchableOpacity
                  className="bg-accent rounded-full p-2"
                  onPress={() => setTimetofall(timetofall + 1)}
                >
                  {iconsData["add"]({ size: 30 })}
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-1 w-full gap-4 flex-col">
              {Array.from({ length: Math.ceil(cycles.length / 2) }).map(
                (_, rowIndex) => (
                  <View key={rowIndex} className="flex-row gap-4">
                    {cycles
                      .slice(rowIndex * 2, rowIndex * 2 + 2)
                      .map((item) => (
                        <CycleCard
                          key={item.cycle}
                          cycle={item.cycle}
                          hrSleep={item.hrSleep}
                          time={
                            timeCycles[item.cycle as keyof typeof timeCycles]
                          }
                          icon={item.icon}
                          mode={mode}
                          isSelected={selectedCycle === item.cycle}
                          onSelect={() => handleSelectCycle(item.cycle)}
                        />
                      ))}
                  </View>
                )
              )}
            </View>
            <View className="flex-row items-center gap-2">
              <TextBold>
                {mode === "sleep"
                  ? "Click on a time cycle to set an Alarm"
                  : "Click on a time cycle to set a reminder"}
              </TextBold>
              <View className="bg-accent rounded-full p-2">
                {iconsData.arrowUp()}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CyclesScreen;
