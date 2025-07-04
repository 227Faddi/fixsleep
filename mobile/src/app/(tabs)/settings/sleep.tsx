import { TimePickerStyles } from "@/src/components/TimerPicker";
import BackButton from "@/src/components/ui/BackButton";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import TextBold from "@/src/components/ui/TextBold";
import iconsData from "@/src/constants/iconsData";
import { useTimetofallStore } from "@/src/store/appStore";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const SleepScreen = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "settings.options.sleep",
  });
  const { timetofall, setTimetofall } = useTimetofallStore();
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleTimetofall = (minutes: number) => {
    setShowTimePicker(false);
    setTimetofall(minutes);
  };

  return (
    <>
      <View className="bg-background flex-1 flex flex-col gap-4 space-y-4 items-center p-8">
        <BackButton />
        <View className="gap-14">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["home"]()}
            <TextBold className="text-center text-4xl">{t("title")}</TextBold>
          </View>
          <View className="flex-1">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <TextBold className="!text-accent text-2xl">
                {t("card.title")}
              </TextBold>
              <MyText>{t("card.body")}</MyText>
              <View className="flex-row justify-between">
                <TextBold className="text-2xl">{t("card.current")}</TextBold>
                <TextBold className="text-2xl">{timetofall} m</TextBold>
              </View>
              <MainButton
                onPress={() => setShowTimePicker(true)}
                containerClass="bg-accent"
                text={t("card.btn")}
              />
            </View>
          </View>
        </View>
      </View>
      <TimerPickerModal
        modalTitle={i18n.t("timePicker.pickTime")}
        confirmButtonText={i18n.t("timePicker.save")}
        cancelButtonText={i18n.t("timePicker.cancel")}
        visible={showTimePicker}
        setIsVisible={setShowTimePicker}
        onConfirm={(pickedDuration) => handleTimetofall(pickedDuration.minutes)}
        onCancel={() => setShowTimePicker(false)}
        closeOnOverlayPress
        styles={{
          ...TimePickerStyles,
          pickerLabelContainer: {
            right: -20,
            top: 0,
            bottom: 6,
            alignItems: "center",
          },
        }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        LinearGradient={LinearGradient}
        hideSeconds
        hideHours
        minuteInterval={1}
        minuteLabel={"min"}
        initialValue={{ minutes: Number(timetofall) }}
      />
    </>
  );
};

export default SleepScreen;
