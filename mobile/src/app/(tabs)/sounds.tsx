import SoundCard from "@/src/components/ui/SoundCard.";
import TextBold from "@/src/components/ui/TextBold";
import sounds from "@/src/constants/soundsData";
import { TabNav } from "@/src/types";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SoundsScreen = () => {
  const navigation = useNavigation<TabNav>();
  const { t } = useTranslation("translation", {
    keyPrefix: "sounds",
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 flex flex-col pt-3">
        <View className="border-b border-primary pb-3 px-4">
          <TextBold className="text-4xl">{t("title")}</TextBold>
        </View>
        <View className="flex-1 justify-center items-center px-4 py-8">
          <View className="w-full gap-6">
            <View className="gap-3">
              <View className="flex-row justify-end">
                <TextBold className="text-lg bg-accent px-4 py-2 rounded-xl">
                  Nature
                </TextBold>
              </View>
              {sounds.map((item, index) => (
                <SoundCard key={index} sound={item.name} />
              ))}
            </View>
            <View className="gap-3">
              <View className="flex-row justify-end">
                <TextBold className="text-lg bg-accent px-4 py-2 rounded-xl">
                  Noises
                </TextBold>
              </View>
              {sounds.map((item, index) => (
                <SoundCard key={index} sound={item.name} />
              ))}
            </View>
            <View className="gap-3">
              <View className="flex-row justify-end">
                <TextBold className="text-lg bg-accent px-4 py-2 rounded-xl">
                  Meditation
                </TextBold>
              </View>
              {sounds.map((item, index) => (
                <SoundCard key={index} sound={item.name} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SoundsScreen;
