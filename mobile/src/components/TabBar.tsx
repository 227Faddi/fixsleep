import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
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
      className="flex-row justify-between items-center py-4 border-t-2 border-primary"
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            height: dimensions.height * 0.7,
            width: buttonWidth * 0.49,
            marginHorizontal: "6.5%",
          },
        ]}
        className="absolute rounded-full"
      />
      {state.routes.map((route, index) => {
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
            color={{
              color: isFocused ? color.textPrimary : "gray",
            }}
            label={label as string}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
