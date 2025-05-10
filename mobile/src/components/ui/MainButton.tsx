import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
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
  textClass = "text-textPrimary text-xl",
  text,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`p-4 px-6 rounded-3xl justify-center flex-row items-center gap-1 ${containerClass} `}
    >
      {icon}
      <MyText className={`text-center ${textClass}`}>{text}</MyText>
    </TouchableOpacity>
  );
};

export default MainButton;
