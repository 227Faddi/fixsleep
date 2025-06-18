import MyText from "@/src/components/ui/MyText";
import iconsData, { IconsData } from "@/src/constants/iconsData";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

type Props = {
  text: string;
  icon: IconsData;
};

const SurveyChoice = ({ text, icon }: Props) => {
  const [isSelected, SetIsSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => SetIsSelected(!isSelected)}
      className={`p-6 rounded-3xl flex-row justify-between bg-primary w-full ${isSelected && "border border-white"}`}
    >
      <View className="flex-row items-center justify-center gap-4">
        {iconsData[icon]()}
        <MyText className="text-xl">{text}</MyText>
      </View>
      {iconsData[isSelected ? "checkmark" : "circle"]()}
    </TouchableOpacity>
  );
};

export default SurveyChoice;
