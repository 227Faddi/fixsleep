import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="play/[value]" options={{ headerShown: false }} />
    </Stack>
  );
}
