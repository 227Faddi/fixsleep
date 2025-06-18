import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Platform, TouchableOpacity } from "react-native";

type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const BackStepButton = ({ currentStep, setCurrentStep }: Props) => {
  const goBack = () => {
    if (currentStep === 0) {
      router.back();
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => goBack()}
      className="absolute top-0 left-5"
    >
      {Platform.OS === "ios"
        ? iconsData["arrowBackIos"]()
        : iconsData["arrowBackAndroid"]()}
    </TouchableOpacity>
  );
};

export default BackStepButton;
