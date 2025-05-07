import icon from "@/src/constants/iconsData";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: { color: string };
  label: string;
};

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: Props) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused
    );
  }, [scale, isFocused]);

  const animatedText = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });

  const animatedIcon = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return { transform: [{ scale: scaleValue }], top };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 items-center"
    >
      <Animated.View style={[animatedIcon]}>
        {icon[routeName as keyof typeof icon](color)}
      </Animated.View>
      <Animated.Text
        style={[color, animatedText]}
        className="text-center font-fredokaMedium"
      >
        {label}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default TabBarButton;
