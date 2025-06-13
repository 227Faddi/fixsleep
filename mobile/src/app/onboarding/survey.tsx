import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Survey1 = () => {
  return (
    <View>
      <Text className="text-3xl text-white">Survey</Text>
      <TouchableOpacity onPress={() => router.push("/onboarding/setup")}>
        <Text className="text-3xl text-white">Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-3xl text-white">Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Survey1;
