import { Text } from "react-native";

type Props = {
  className?: string;
  style?: object;
  children: any;
};

const MyText = ({ className, style, children }: Props) => {
  return (
    <Text className={`font-fredokaMedium ${className}`} style={{ ...style }}>
      {children}
    </Text>
  );
};

export default MyText;
