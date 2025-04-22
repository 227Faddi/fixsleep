import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  onPress: () => unknown;
  containerClass?: string;
  textClass?: string;
  text: string;
  icon?: ReactNode;
};

const MainButton = ({
  onPress,
  containerClass = "bg-primary",
  textClass = "text-textPrimary text-lg",
  text,
  icon,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`p-4 rounded-3xl justify-center flex-row items-center gap-1 ${containerClass}`}
    >
      <Text className={`text-center ${textClass}`}>{text}</Text>
      {icon}
    </Pressable>
  );
};

export default MainButton;
