import SoundCard from "@/src/components/SoundCard.";
import icon from "@/src/constants/icon";
import { Text, View } from "react-native";

const sounds = () => {
  const cards = [
    { title: "Rainfall", icon: icon["rain"]() },
    { title: "Ocean Waves", icon: icon["oceanWave"]() },
    { title: "Brown Noise", icon: icon["brownNoise"]() },
  ];
  return (
    <View className="flex-1 pb-32 pt-20 px-16 gap-4 items-center">
      <Text className="text-4xl">Soothing Sounds</Text>
      <View className="flex-1 w-full gap-4 justify-center ">
        {cards.map((card) => (
          <SoundCard
            title={card.title}
            icon={card.icon}
            onPress={() => 2 + 2}
          />
        ))}
      </View>
    </View>
  );
};

export default sounds;
