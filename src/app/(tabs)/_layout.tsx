import "@/global.css";
import TabBar from "@/src/components/TabBar";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="sounds"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="sounds"
        options={{ title: "Sounds", headerShown: false }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Settings", headerShown: false }}
      />
    </Tabs>
  );
}
