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
      <View className="flex-1 flex flex-col gap-14 items-center pt-6 px-8 pb-32">
        <View className="gap-3">
          <TextBold className="text-4xl text-center">{t("title")}</TextBold>
          {/* <MyText className="text-xl text-center max-w-xs">
              {t("subtitle")}
            </MyText> */}
        </View>
        <View className="flex-1 w-full px-8 gap-4">
          {sounds.map((item, index) => (
            <SoundCard key={index} sound={item.name} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default SoundsScreen;
