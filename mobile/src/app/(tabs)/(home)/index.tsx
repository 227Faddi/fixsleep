import { CycleTimePicker } from "@/src/components/TimerPicker";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useReviewPrompt } from "@/src/lib/askReview";
import { formatTime, formatTimeNow } from "@/src/lib/formatTime";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  const { tryPromptReview } = useReviewPrompt();
  const [showWakeTime, setShowWakeTime] = useState(false);
  const [showSleepTime, setShowSleepTime] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep",
  });

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
    tryPromptReview();
    router.navigate(`/cycles/${mode}?query=${time}`);
  };

  return (
    <View className="flex-1 flex flex-col pt-3">
      <View className="border-b border-primary pb-3 px-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="w-12 h-12 overflow-hidden rounded-xl">
              <Image
                style={{ flex: 1 }}
                source={require("@/assets/icons/ios-light.png")}
                contentFit="cover"
                transition={300}
              />
            </View>
            <TextBold className="text-4xl">{t("title")}</TextBold>
          </View>
          <View className="flex-row items-center gap-1 bg-accent px-4 py-2 rounded-xl">
            <MyText className="text-lg">1</MyText>
            {iconsData["flame"]({ size: 25 })}{" "}
          </View>
        </View>
      </View>
      <View className="flex-1 justify-center items-center px-4 py-8">
        <View className="gap-6">
          <View className="gap-3">
            <MyText className="text-2xl text-center">{t("wakeUpAt")}</MyText>
            <MainButton
              onPress={() => setShowWakeTime(true)}
              text={t("pickTime")}
            />
          </View>
          <View className="gap-3">
            <MyText className="text-2xl text-center">
              {t("fallAsleepAt")}
            </MyText>
            <MainButton
              onPress={() => setShowSleepTime(true)}
              text={t("pickTime")}
            />
          </View>
          <MainButton
            onPress={() => getSleepCycles(formatTimeNow())}
            text={t("restNow")}
            icon={iconsData["alarm"]()}
            textClass={`text-2xl text-center text-textPrimary ios:font-bold !font-fredokaBold`}
            containerClass={`p-6 bg-accent shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]`}
            style={{
              elevation: 10,
            }}
          />
        </View>
      </View>
      <CycleTimePicker
        mode="wake"
        showModal={showWakeTime}
        setShowModal={setShowWakeTime}
        onConfirmFN={getSleepCycles}
      />
      <CycleTimePicker
        mode="sleep"
        showModal={showSleepTime}
        setShowModal={setShowSleepTime}
        onConfirmFN={getSleepCycles}
      />
    </View>
  );
};

export default HomeScreen;
