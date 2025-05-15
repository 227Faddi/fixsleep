import { Platform } from "react-native";
import MyText from "./MyText";

type Props = { children: any; className?: string };

const TextBold = ({ children, className }: Props) => {
  return (
    <MyText
      className={`${Platform.OS === "ios" ? "font-bold" : "!font-fredokaBold"} ${className}`}
    >
      {children}
    </MyText>
  );
};

export default TextBold;
