import PaginationDots from "@/src/components/onboarding/PaginationDots";
import { Href, router } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { Platform, TouchableOpacity, View } from "react-native";
import MyText from "../ui/MyText";

type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
  route: Href;
  disabled?: boolean;
};

const NextStepButton = ({
  currentStep,
  setCurrentStep,
  totalSteps,
  route,
  disabled,
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
      <TouchableOpacity
        onPress={goNext}
        disabled={disabled}
        className={`px-6 rounded-3xl justify-center flex-row items-center gap-1 p-6 ${disabled ? "bg-primary" : "bg-accent"}`}
      >
        <MyText
          className={`text-2xl text-center text-textPrimary w-full ${
            Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"
          }`}
        >
          {currentStep === totalSteps - 1 ? t("continue") : t("next")}
        </MyText>
      </TouchableOpacity>
    </View>
  );
};

export default NextStepButton;
