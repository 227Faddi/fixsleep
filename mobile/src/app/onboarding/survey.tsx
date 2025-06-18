import BackStepButton from "@/src/components/onboarding/BackStepButton";
import NextStepButton from "@/src/components/onboarding/NextStepButton";
import SurveyChoice from "@/src/components/onboarding/SurveyChoice";
import MyText from "@/src/components/ui/MyText";
import { IconsData } from "@/src/constants/iconsData";
import React, { useState } from "react";
import { View } from "react-native";

const surveySteps: {
  question: string;
  choices: { text: string; icon: IconsData }[];
}[] = [
  {
    question: "What motivates you to sleep better?",
    choices: [
      { text: "Improve focus", icon: "bed" },
      { text: "Boost energy", icon: "bed" },
      { text: "Feel healthier", icon: "bed" },
      { text: "Be more productive", icon: "bed" },
    ],
  },
  {
    question: "What is your biggest sleep challenge right now?",
    choices: [
      { text: "Falling asleep", icon: "moon" },
      { text: "Waking up at night", icon: "bed" },
      { text: "Waking up tired", icon: "bed" },
      { text: "Not enough time", icon: "bed" },
    ],
  },
  {
    question: "How many hours do you usually sleep per night?",
    choices: [
      { text: "Less than 5", icon: "timer" },
      { text: "5-6 hours", icon: "timer" },
      { text: "7-8 hours", icon: "timer" },
      { text: "More than 8", icon: "timer" },
    ],
  },
  {
    question: "When do you usually go to sleep?",
    choices: [
      { text: "Before 10 PM", icon: "bed" },
      { text: "Around 11 PM", icon: "bed" },
      { text: "Midnight", icon: "bed" },
      { text: "After midnight", icon: "bed" },
    ],
  },
];

const Survey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { question, choices } = surveySteps[currentStep];

  return (
    <View className="bg-background flex-1 gap-4 items-center py-2 px-8">
      <BackStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <View className="flex-1 justify-center items-center gap-10">
        <View className="gap-1">
          <MyText className="text-4xl text-center">{question}</MyText>
        </View>

        <View className="flex-1 justify-center items-center gap-4 w-full">
          {choices.map((item, index) => (
            <SurveyChoice key={index} text={item.text} icon={item.icon} />
          ))}
        </View>
      </View>
      <NextStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={surveySteps.length}
        route={"/onboarding/setup"}
      />
    </View>
  );
};

export default Survey;
