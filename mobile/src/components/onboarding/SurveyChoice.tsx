import MyText from "@/src/components/ui/MyText";
import color from "@/src/constants/colors";
import iconsData, { IconsData } from "@/src/constants/iconsData";
import React from "react";
import { TouchableOpacity, View } from "react-native";

type Props = {
  text: string;
  icon: IconsData;
  isSelected: boolean;
  variant: "checkbox" | "radio";
  onSelect: () => void;
};

const SurveyChoice = ({ text, icon, isSelected, variant, onSelect }: Props) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      className={`p-6 rounded-3xl flex-row justify-between bg-primary w-full ${isSelected && "border border-accent"}`}
    >
      <View className="flex-row items-center justify-center gap-4">
        {iconsData[icon]({
          color: isSelected ? color.accent : color.textPrimary,
        })}
        <MyText className="text-xl">{text}</MyText>
      </View>
      {variant === "radio"
        ? iconsData[isSelected ? "checkmark" : "circle"]({
            color: isSelected ? color.accent : color.textPrimary,
          })
        : iconsData[isSelected ? "checkbox" : "square"]({
            color: isSelected ? color.accent : color.textPrimary,
          })}
    </TouchableOpacity>
  );
};

export default SurveyChoice;
