import BackStepButton from "@/src/components/onboarding/BackStepButton";
import NextStepButton from "@/src/components/onboarding/NextStepButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import { useState } from "react";
import { Image, View } from "react-native";

const featureSteps = [
  {
    title: "Sleep Smarter with Cycles",
    description:
      "Easily calculate your ideal sleep and wake-up times based on your natural sleep cycles.",
    image: require("@/assets/images/1.png"),
  },
  {
    title: "Relax with Sleep Sounds",
    description:
      "Enjoy calming soundscapes to help you fall asleep and stay asleep longer.",
    image: require("@/assets/images/2.png"),
  },
  {
    title: "Build a Better Routine",
    description:
      "Set gentle reminders to stick to a consistent sleep schedule and build healthy habits over time.",
    image: require("@/assets/images/3.png"),
  },
];

const Features = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { title, description, image } = featureSteps[currentStep];

  return (
    <View className="bg-background flex-1 gap-4 items-center py-2 px-8">
      <BackStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <View className="flex-1 justify-center items-center gap-10">
        <View>
          <Image
            className="w-72 h-72 rounded-3xl object-cover"
            source={image}
          />
        </View>
        <View className="items-center justify-center gap-3">
          <TextBold className="text-4xl font-bold !text-accent">
            {title}
          </TextBold>
          <MyText className="text-2xl text-center">{description}</MyText>
        </View>
      </View>
      <NextStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={featureSteps.length}
        route={"/onboarding/survey"}
      />
    </View>
  );
};

export default Features;
