import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const Setting = ({ title, icon, route }) => {
  return (
    <Pressable
      onPress={() => router.push(route)}
      className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
    >
      <View className="flex-row gap-4">
        {iconsData[icon as keyof typeof iconsData]({ justifySelf: "flex-end" })}
        <Text className="text-xl text-textPrimary">{title}</Text>
      </View>
      {iconsData["arrowForward"]()}
    </Pressable>
  );
};

const SettingsScreen = () => {
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    if (translationX > 50) {
      router.push("/(tabs)/sounds");
    }
  };

  const settings = [
    { title: "Language", icon: "language", route: "/(tabs)/settings/language" },
    {
      title: "Reminders",
      icon: "notifications",
      route: "/(tabs)/settings/reminders",
    },
    {
      title: "Sleep",
      icon: "bed",
      route: "/(tabs)/settings/sleep",
    },
    {
      title: "How this works?",
      icon: "info",
      route: "/(tabs)/settings/info",
    },
  ];

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View className="flex-1 pb-32 pt-24 px-16 gap-24 items-center">
        <Text className="text-4xl text-textPrimary font-bold">Settings</Text>
        <View className="w-full bg-primary rounded-3xl">
          {settings.map((item, index) => (
            <Setting
              key={index}
              title={item.title}
              icon={item.icon}
              route={item.route}
            />
          ))}
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default SettingsScreen;
