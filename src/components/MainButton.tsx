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
  textClass = "text-textPrimary",
  text,
  icon,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`p-4 text-xl rounded-3xl flex-row items-center justify-center gap-1 ${containerClass}`}
    >
      <Text className={`text-center ${textClass}`}>{text}</Text>
      {icon}
    </Pressable>
  );
};

export default MainButton;
