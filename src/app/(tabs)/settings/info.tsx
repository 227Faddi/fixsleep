import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const InfoScreen = () => {
  return (
    <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute left-6 top-16"
      >
        {iconsData["arrowBack"]({ color: color.textPrimary })}
      </Pressable>
      <View className="gap-2">
        <Text className="text-center text-4xl text-textPrimary">Info</Text>
        <View className="flex-1 justify-center">
          <View className="justify-center bg-primary rounded-3xl p-6 gap-3">
            <View className="gap-2">
              <Text className="text-accent text-2xl">Cycles</Text>
              <Text className="text-textPrimary text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                eius animi, rerum voluptate sed ad aut laudantium optio ipsa
                itaque error consequatur deserunt
              </Text>
            </View>
            <View className="gap-2">
              <Text className="text-accent text-2xl">Cycles</Text>
              <Text className="text-textPrimary text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                eius animi, rerum voluptate sed ad aut laudantium optio ipsa
                itaque error consequatur deserunt
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoScreen;
