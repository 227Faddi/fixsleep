import "@/global.css";
import "@/src/i18n";
import { getLocales } from "expo-localization";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import color from "../constants/colors";
import AppContextProvider from "../contexts/AppContextProvider";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

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
      <StatusBar barStyle={"light-content"} />
      <AppContextProvider>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: color.background },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="play/[value]" options={{ headerShown: false }} />
        </Stack>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
}
