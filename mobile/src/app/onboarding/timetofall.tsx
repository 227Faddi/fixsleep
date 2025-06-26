import { TimetofallPicker } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MainButton from "@/src/components/ui/MainButton";
import TextBold from "@/src/components/ui/TextBold";
import { useTimetofall } from "@/src/hooks/contexts";
import { router } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";

const Timetofall = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding",
  });
  const [timePicked, setTimePicked] = useState<number>(15);
  const { setTimetofall } = useTimetofall();

  const handleSetTimetofall = async () => {
    setTimetofall(timePicked);
    router.push("/onboarding/reminder");
  };

  return (
    <View className="bg-background flex-1 gap-4 items-center pb-2 pt-12 px-8">
      <BackButton />
      <View className="flex-1 justify-center items-center gap-4">
        <View className="gap-1">
          <TextBold className="text-4xl text-center">
            {t("timetofall.title")}
          </TextBold>
        </View>
        <View className="flex-1 justify-center items-center">
          <View className="bg-primary p-8 rounded-3xl items-center justify-center">
            <TimetofallPicker onChangeFN={setTimePicked} />
          </View>
        </View>
      </View>
      <View className="items-center gap-4">
        <MainButton
          onPress={() => handleSetTimetofall()}
          text={t("continue")}
          textClass={`text-3xl text-center text-textPrimary w-full ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent`}
        />
      </View>
    </View>
  );
};

export default Timetofall;
