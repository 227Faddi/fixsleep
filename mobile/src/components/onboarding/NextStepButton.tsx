import PaginationDots from "@/src/components/onboarding/PaginationDots";
import MainButton from "@/src/components/ui/MainButton";
import { Href, router } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";

type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
  route: Href;
};

const NextStepButton = ({
  currentStep,
  setCurrentStep,
  totalSteps,
  route,
}: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding",
  });

  const goNext = () => {
    if (currentStep === totalSteps - 1) {
      router.push(route);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <View className="items-center gap-4">
      <PaginationDots total={totalSteps} current={currentStep} />
      <MainButton
        onPress={goNext}
        text={currentStep === totalSteps - 1 ? t("continue") : t("next")}
        textClass={`text-2xl text-center text-textPrimary w-full ${
          Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"
        }`}
        containerClass="p-6 bg-accent"
      />
    </View>
  );
};

export default NextStepButton;
