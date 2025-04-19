import color from "@/src/constants/colors";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SettingsScreen = () => {
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    if (translationX > 50) {
      router.push("/(tabs)/(sounds)");
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
        <Text className="text-4xl text-white">Settings</Text>
        <View className="flex-1 justify-center w-full gap-4">
          <View className="flex-row gap-4">
            <Pressable
              onPress={() => router.push(`/`)}
              className="border border-white p-6 rounded-3xl flex-row gap-4 flex-1"
              style={{ backgroundColor: color.primary }}
            >
              <Text className="text-xl text-center text-white">
                Sleeping Time
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push(`/`)}
              className="border border-white p-6 rounded-3xl flex-row gap-4 flex-1"
              style={{ backgroundColor: color.primary }}
            >
              <Text className="text-xl text-center text-white">
                Sleeping Time
              </Text>
            </Pressable>
          </View>
          <View className="flex-row gap-4">
            <Pressable
              onPress={() => router.push(`/`)}
              className="border border-white p-6 rounded-3xl flex-row gap-4 flex-1"
              style={{ backgroundColor: color.primary }}
            >
              <Text className="text-xl text-center text-white">
                Sleeping Time
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push(`/`)}
              className="border border-white p-6 rounded-3xl flex-row gap-4 flex-1"
              style={{ backgroundColor: color.primary }}
            >
              <Text className="text-xl text-center text-white">
                Sleeping Time
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default SettingsScreen;
