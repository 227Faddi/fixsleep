import "@/global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import color from "../constants/colors";
import AppContextProvider from "../contexts/AppContextProvider";
export default function RootLayout() {
  return (
    <AppContextProvider>
      <GestureHandlerRootView className="flex-1 bg-background">
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: color.background },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="play/[value]" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </AppContextProvider>
  );
}
