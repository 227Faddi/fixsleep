import React from "react";
import { Pressable, Text } from "react-native";
import color from "../constants/colors";

type Props = {
  onPress: () => unknown;
  containerClass?: string;
  textClass?: string;
  text: string;
};

const MainButton = ({ onPress, containerClass, textClass, text }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`border border-white py-4 px-8 rounded-3xl ${containerClass}`}
      style={{ backgroundColor: color.primary }}
    >
      <Text className={`text-center text-xl text-white ${textClass}`}>
        {text}
      </Text>
    </Pressable>
  );
};

export default MainButton;
