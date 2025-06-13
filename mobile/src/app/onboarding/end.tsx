import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const End = () => {
  return (
    <View>
      <Text className="text-3xl text-white">End</Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)/(home)")}>
        <Text className="text-3xl text-white">Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-3xl text-white">Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default End;
