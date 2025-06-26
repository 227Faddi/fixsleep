import BackStepButton from "@/src/components/onboarding/BackStepButton";
import NextStepButton from "@/src/components/onboarding/NextStepButton";
import SurveyChoice from "@/src/components/onboarding/SurveyChoice";
import TextBold from "@/src/components/ui/TextBold";
import { IconsData } from "@/src/constants/iconsData";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

type SurveyAnswers = {
  [stepIndex: number]: string[];
};

const Survey = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding.survey",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers>({});

  const surveySteps: {
    question: string;
    choices: { text: string; icon: IconsData }[];
    multiSelect?: boolean;
  }[] = [
    {
      question: t("questions.hours"),
      multiSelect: false,
      choices: [
        { text: t("choices.under5hrs"), icon: "emojiNeutral" },
        { text: t("choices.5to6hrs"), icon: "emojiNeutral" },
        { text: t("choices.7to8hrs"), icon: "emojiHappy" },
        { text: t("choices.over8hrs"), icon: "emojiHappy" },
      ],
    },
    {
      question: t("questions.challenge"),
      multiSelect: true,
      choices: [
        { text: t("choices.fallingAsleep"), icon: "moon" },
        { text: t("choices.wakingUpAtNight"), icon: "bed" },
        { text: t("choices.wakingUpTired"), icon: "batteryDead" },
        { text: t("choices.notEnoughSleepTime"), icon: "hourglass" },
      ],
    },
    {
      question: t("questions.helpFallAsleep"),
      multiSelect: true,
      choices: [
        { text: t("choices.relaxingSounds"), icon: "sounds" },
        { text: t("choices.reading"), icon: "book" },
        { text: t("choices.meditation"), icon: "leaf" },
        { text: t("choices.avoidingScreens"), icon: "phonePortrait" },
      ],
    },
    {
      question: t("questions.motivation"),
      multiSelect: true,
      choices: [
        { text: t("choices.sharperFocus"), icon: "contract" },
        { text: t("choices.moreEnergy"), icon: "battery" },
        { text: t("choices.betterHealth"), icon: "heart" },
        { text: t("choices.increasedProductivity"), icon: "rocket" },
      ],
    },
  ];

  const { question, choices, multiSelect } = surveySteps[currentStep];
  const selectedValues = surveyAnswers[currentStep] || [];

  const handleChoiceSelect = (value: string) => {
    setSurveyAnswers((prev) => {
      const currentAnswers = prev[currentStep] || [];

      if (multiSelect) {
        const isAlreadySelected = currentAnswers.includes(value);

        return {
          ...prev,
          [currentStep]: isAlreadySelected
            ? currentAnswers.filter((answer) => answer !== value)
            : [...currentAnswers, value],
        };
      } else {
        return {
          ...prev,
          [currentStep]: [value],
        };
      }
    });
  };

  return (
    <View className="bg-background flex-1 gap-4 items-center pb-2 pt-12 px-8">
      <BackStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <View className="flex-1 justify-center items-center gap-10">
        <View className="gap-1">
          <TextBold className="text-4xl text-center">{question}</TextBold>
        </View>
        <View className="flex-1 justify-center items-center gap-4 w-full">
          {choices.map((item, index) => (
            <SurveyChoice
              key={index}
              text={item.text}
              icon={item.icon}
              isSelected={selectedValues.includes(item.text)}
              onSelect={() => handleChoiceSelect(item.text)}
              variant={multiSelect ? "checkbox" : "radio"}
            />
          ))}
        </View>
      </View>
      <NextStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={surveySteps.length}
        route={"/onboarding/timetofall"}
        disabled={selectedValues.length === 0}
      />
    </View>
  );
};

export default Survey;
