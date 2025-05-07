import { Text } from "react-native";

type Props = {
  className?: string;
  style?: object;
  children: any;
};

const MyText = ({ className = "text-2xl", style, children }: Props) => {
  return (
    <Text className={`font-fredokaMedium ${className}`} style={{ ...style }}>
      {children}
    </Text>
  );
};

export default MyText;
