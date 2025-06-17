import { Text } from "react-native";

type Props = {
  className?: string;
  style?: object;
  children: any;
};

const MyText = ({ className = "text-lg", style, children }: Props) => {
  return (
    <Text
      className={`font-fredokaMedium text-textPrimary ${className}`}
      style={{ ...style }}
    >
      {children}
    </Text>
  );
};

export default MyText;
