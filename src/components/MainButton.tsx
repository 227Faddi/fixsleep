import React from "react";
import { Pressable, Text } from "react-native";

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
      className={`border-2 py-4 px-8 rounded-3xl ${containerClass}`}
    >
      <Text className={`text-center text-xl ${textClass}`}>{text}</Text>
    </Pressable>
  );
};

export default MainButton;
