import BackStepButton from "@/src/components/onboarding/BackStepButton";
import NextStepButton from "@/src/components/onboarding/NextStepButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";

const Features = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "onboarding",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const featureSteps = [
    {
      title: t("features.step1.title"),
      description: t("features.step1.body"),
      img: require("@/assets/images/onboarding/1.webp"),
    },
    {
      title: t("features.step2.title"),
      description: t("features.step2.body"),
      img: require("@/assets/images/onboarding/2.webp"),
    },
    {
      title: t("features.step3.title"),
      description: t("features.step3.body"),
      img: require("@/assets/images/onboarding/end.webp"),
    },
  ];

  const { title, description, img } = featureSteps[currentStep];

  return (
    <View className="bg-background flex-1 gap-4 items-center pb-2 pt-12 px-8">
      <BackStepButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <TouchableOpacity
        onPress={() => router.push("/onboarding/survey")}
        accessibilityLabel="Skip to survey"
        className="absolute top-0 right-5"
      >
        <MyText className="text-xl underline">{t("skip")}</MyText>
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center gap-10">
        <View className="w-64 h-64 overflow-hidden rounded-3xl">
          <Image
            style={{ flex: 1, width: "100%" }}
            source={img}
            contentFit="cover"
            transition={500}
            priority="high"
          />
        </View>
        <View className="items-center justify-center gap-3">
          <TextBold className="text-4xl font-bold !text-accent text-center">
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
