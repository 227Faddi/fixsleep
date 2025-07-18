import { CycleTimePicker } from "@/src/components/TimerPicker";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useReviewPrompt } from "@/src/lib/askReview";
import { formatTime, formatTimeNow } from "@/src/lib/formatTime";
import { TabNav } from "@/src/types";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation<TabNav>();
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
    <View className="flex-1 flex flex-col gap-4 items-center pb-32 pt-6 px-8">
      <View className="gap-3">
        <View className="flex-row justify-center items-center gap-1">
          <TextBold className="text-4xl">{t("title")}</TextBold>
        </View>
        <MyText className="text-xl text-center max-w-xs">
          {t("subtitle")}
        </MyText>
      </View>
      <View className="flex-1 gap-12 justify-center">
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
        </View>
        <MainButton
          onPress={() => getSleepCycles(formatTimeNow())}
          text={t("restNow")}
          icon={iconsData["alarm"]()}
          textClass={`text-2xl text-center text-textPrimary ${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"}`}
          containerClass={`p-6 bg-accent shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]`}
          style={{
            elevation: 10,
          }}
        />
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
