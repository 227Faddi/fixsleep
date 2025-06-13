import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const again = () => {
  return (
    <View>
      <Text className="text-3xl text-white">Again</Text>
      <TouchableOpacity onPress={() => router.push("/onboarding/test")}>
        <Text className="text-3xl text-white">Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-3xl text-white">Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default again;
