import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  icon: ReactNode;
  onPress: () => void;
};

const SoundCard = ({ title, icon, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="border p-6 rounded-3xl flex-row gap-4"
    >
      {icon}
      <Text className="text-xl">{title}</Text>
    </Pressable>
  );
};

export default SoundCard;
