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
      <View className="gap-3">
        <Text className="text-4xl text-center">Soothing Sounds</Text>
        <Text className="text-xl text-center">
          Create your perfect sleep atmosphere. Pick a sound, close your eyes,
          and relax.
        </Text>
      </View>
      <View className="flex-1 w-full gap-4 justify-center">
        {cards.map((card, index) => (
          <SoundCard
            key={index}
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
