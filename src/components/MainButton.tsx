import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  onPress: () => unknown;
  containerClass?: string;
  textClass?: string;
  text: string;
};

const MainButton = ({
  onPress,
  containerClass = "bg-primary",
  textClass = "text-textPrimary",
  text,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`p-4 rounded-3xl ${containerClass}`}
    >
      <Text className={`text-center ${textClass}`}>{text}</Text>
    </Pressable>
  );
};

export default MainButton;
