import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View className="mt-10">
        <Text className="text-purple-500">Hello</Text>
      </View>
    </View>
  );
}
