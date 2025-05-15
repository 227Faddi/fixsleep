import { ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import MyText from "./MyText";

type Props = {
  onPress: () => unknown;
  containerClass?: string;
  textClass?: string;
  text: string;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const MainButton = ({
  onPress,
  containerClass = "bg-primary",
  textClass = "text-textPrimary text-xl",
  text,
  icon,
  style,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      className={`p-4 px-6 rounded-3xl justify-center flex-row items-center gap-1 ${containerClass} `}
    >
      {icon}
      <MyText className={`text-center ${textClass}`}>{text}</MyText>
    </TouchableOpacity>
  );
};

export default MainButton;
