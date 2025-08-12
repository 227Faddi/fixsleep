import AlarmCard from "@/src/components/ui/AlarmCard";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useAlarmStore } from "@/src/store/appStore";
import { TabNav } from "@/src/types";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AlarmsScreen = () => {
  const navigation = useNavigation<TabNav>();
  const { t } = useTranslation("translation", {
    keyPrefix: "sounds",
  });

  const { alarms } = useAlarmStore();

  const openAlarmModal = () => {
    router.push({ pathname: "/(tabs)/alarms/edit", params: { new: "true" } });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 flex flex-col pt-3">
        <View className="border-b border-primary pb-3 px-4">
          <View className="flex-row justify-between">
            <TextBold className="text-4xl">{"Alarms"}</TextBold>
            <TouchableOpacity
              className="bg-accent rounded-full p-2"
              onPress={openAlarmModal}
            >
              {iconsData["add"]({ size: 25 })}
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1 px-4 py-8">
          <View className="w-full gap-4">
            {alarms.map((alarm) => (
              <AlarmCard key={alarm.id} alarm={alarm} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlarmsScreen;
