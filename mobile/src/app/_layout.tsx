import "@/global.css";
import "@/src/i18n";
import { getLocales } from "expo-localization";
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import color from "../constants/colors";
import AppContextProvider from "../contexts/AppContextProvider";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 200,
  fade: true,
});

export default function RootLayout() {
  const { getItem } = useAsyncStorage("language");
  const { i18n } = useTranslation();

  useEffect(() => {
    const loadLanguage = async () => {
      const supportedLanguages = ["en", "fr"];
      const savedLang = await getItem();
      const deviceLang = getLocales()[0].languageCode;
      const langToUse = savedLang || deviceLang;

      if (
        supportedLanguages.includes(langToUse) &&
        i18n.language !== langToUse
      ) {
        await i18n.changeLanguage(langToUse);
      }

      await SplashScreen.hideAsync();
    };

    loadLanguage();
  }, [i18n]);

  return (
    <GestureHandlerRootView className="flex-1 bg-background">
      <SafeAreaProvider>
        <StatusBar style="light" />
        <AppContextProvider>
          <SafeAreaView className="flex-1 bg-background">
            <Stack
              screenOptions={{
                contentStyle: {
                  backgroundColor: color.background,
                },
              }}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="play/[value]"
                options={{ headerShown: false }}
              />
            </Stack>
          </SafeAreaView>
        </AppContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
