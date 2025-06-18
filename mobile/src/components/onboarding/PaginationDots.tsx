import { View } from "react-native";

type Props = {
  total: number;
  current: number;
};

const PaginationDots = ({ total, current }: Props) => {
  return (
    <View className="flex-row items-center justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;

        return (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${isActive ? "bg-white w-2" : "bg-white/30"}`}
          />
        );
      })}
    </View>
  );
};

export default PaginationDots;
