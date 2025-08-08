import BackButton from "@/src/components/ui/BackButton";
import CycleCard from "@/src/components/ui/CycleCard";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import getCyclesData from "@/src/constants/cyclesData";
import iconsData from "@/src/constants/iconsData";
import calcCycles from "@/src/lib/calcCycles";
import { useTimetofallStore } from "@/src/store/appStore";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
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
        <View className="flex flex-col gap-14 items-center py-8 px-6 pb-32">
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
          <View className="flex-1 w-full justify-center items-center">
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
              {/* <View className="flex-row flex-wrap justify-center items-center gap-1.5 mt-4 text-center">
              <MyText className="text-lg">It takes me about</MyText>
              <TextInput
                keyboardType="numeric"
                value={String(timetofall)}
                onChange={handleTextChange}
                className="w-12 bg-transparent text-center font-bold border-b-2 border-primary text-white text-lg"
              />
              <MyText className="text-lg">minutes to fall asleep.</MyText>
            </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CyclesScreen;
