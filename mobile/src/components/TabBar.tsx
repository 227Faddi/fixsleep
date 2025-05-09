import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { LayoutChangeEvent, Platform, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import color from "../constants/colors";
import TabBarButton from "./TabBarButton";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / state.routes.length;

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  useEffect(() => {
    tabPositionX.value = withSpring(buttonWidth * state.index, {
      duration: 1500,
    });
  }, [state.index, tabPositionX, buttonWidth]);

  return (
    <View
      onLayout={onTabBarLayout}
      className={`flex-row absolute justify-between items-center mx-[80] py-[15] rounded-[35] bg-primary  ${Platform.OS === "ios" ? "bottom-6" : "bottom-2"}`}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            height: dimensions.height - 15,
            width: buttonWidth - 25,
          },
        ]}
        className={`absolute rounded-[30] mx-[12] bg-accent`}
      />
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const sanitizedRouteName = route.name.replace(/[()]/g, "");

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            routeName={sanitizedRouteName}
            color={{ color: color.textPrimary }}
            label={label as string}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
