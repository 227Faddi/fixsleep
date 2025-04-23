import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const LanguageScreen = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const changeLang = () => {
    currentLang === "en" ? setCurrentLang("fr") : setCurrentLang("en");
  };

  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]({ color: color.textPrimary })}
      </Pressable>
      <Text className="text-center text-4xl text-textPrimary">Language</Text>
      <View className="flex-1 justify-center w-full">
        <View className="justify-center bg-primary rounded-3xl">
          <Pressable
            onPress={changeLang}
            disabled={currentLang === "en"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              <Text className="text-xl text-textPrimary">English</Text>
            </View>
            {currentLang === "en" && iconsData["checkmark"]()}
          </Pressable>
          <Pressable
            onPress={changeLang}
            disabled={currentLang === "fr"}
            className="p-6 rounded-3xl flex-row gap-4 items-center justify-between"
          >
            <View className="flex-row gap-4">
              <Text className="text-xl text-textPrimary">French</Text>
            </View>
            {currentLang === "fr" && iconsData["checkmark"]()}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LanguageScreen;
