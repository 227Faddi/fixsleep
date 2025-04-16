import TabBar from "@/src/components/TabBar";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MainLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Tabs.Screen
          name="sounds"
          options={{ title: "Sounds", headerShown: false }}
        />
        <Tabs.Screen
          name="settings"
          options={{ title: "Settings", headerShown: false }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
