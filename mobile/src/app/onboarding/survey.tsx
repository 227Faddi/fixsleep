import BackStepButton from "@/src/components/onboarding/BackStepButton";
import NextStepButton from "@/src/components/onboarding/NextStepButton";
import SurveyChoice from "@/src/components/onboarding/SurveyChoice";
import TextBold from "@/src/components/ui/TextBold";
import { IconsData } from "@/src/constants/iconsData";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const surveySteps: {
  question: string;
  choices: { text: string; icon: IconsData }[];
}[] = [
  {
    question: "What motivates you to sleep better?",
    choices: [
      { text: "Sharper focus", icon: "contract" },
      { text: "More energy", icon: "battery" },
      { text: "Better health", icon: "heart" },
      { text: "Increased productivity", icon: "rocket" },
    ],
  },
  {
    question: "What is your biggest sleep challenge right now?",
    choices: [
      { text: "Falling asleep", icon: "moon" },
      { text: "Waking up at night", icon: "bed" },
      { text: "Waking up tired", icon: "batteryDead" },
      { text: "Not enough sleep time", icon: "hourglass" },
    ],
  },
  {
    question: "How many hours do you usually sleep per night?",
    choices: [
      { text: "Under 5 hrs", icon: "emojiNeutral" },
      { text: "5–6 hrs", icon: "emojiNeutral" },
      { text: "7–8 hrs", icon: "emojiHappy" },
      { text: "Over 8 hrs", icon: "emojiHappy" },
    ],
  },
  {
    question: "What helps you fall asleep faster?",
    choices: [
      { text: "Relaxing sounds", icon: "sounds" },
      { text: "Reading", icon: "book" },
      { text: "Meditation", icon: "leaf" },
      { text: "Avoiding screens", icon: "phonePortrait" },
    ],
  },
];

type SurveyAnswers = {
  [stepIndex: number]: string;
};

const Survey = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers>({});

  const { question, choices } = surveySteps[currentStep];
  const selectedValue = surveyAnswers[currentStep];

  const handleChoiceSelect = (value: string) => {
    setSurveyAnswers((prev) => ({
      ...prev,
      [currentStep]: value,
    }));
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
              isSelected={selectedValue === item.text}
              onSelect={() => handleChoiceSelect(item.text)}
            />
          ))}
        </View>
      </View>

      <NextStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={surveySteps.length}
        route={"/onboarding/setup"}
        disabled={!selectedValue}
      />
    </View>
  );
};

export default Survey;
