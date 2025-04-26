import TabBar from "@/src/components/TabBar";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Tabs } from "expo-router";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function requestPermissions() {
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }
}

export default function MainLayout() {
  useEffect(() => {
    requestPermissions();
  }, []);

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
