import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View className="h-full w-full flex justify-center items-center">
        <Text>Oops! Not Found</Text>
        <Link href="/">Go back to Home screen!</Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
