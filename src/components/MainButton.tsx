import { ReactNode } from "react";
import { Pressable } from "react-native";
import MyText from "./MyText";

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
      {icon}
      <MyText className={`text-center ${textClass}`}>{text}</MyText>
    </Pressable>
  );
};

export default MainButton;
