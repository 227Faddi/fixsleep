import TabBar from "@/src/components/TabBar";
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{ title: "Sleep", headerShown: false }}
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
  );
}
