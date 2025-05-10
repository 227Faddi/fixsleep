import { TimePickerStyles } from "@/src/components/TimerPicker";
import MainButton from "@/src/components/ui/MainButton";
import MyText from "@/src/components/ui/MyText";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { useTimetofall } from "@/src/hooks/contexts";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Pressable, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const SleepScreen = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "settings.options.sleep",
  });
  const { timetofall, setTimetofall } = useTimetofall();
  const [showTimePicker, setShowTimePicker] = useState(false);

  return (
    <>
      <View
        className={`bg-background flex-1 flex flex-col gap-4 space-y-4 items-center ${Platform.OS === "ios" ? "pb-28 pt-20 px-16" : "pb-24 pt-10 px-16"}`}
      >
        <Pressable
          onPress={() => router.back()}
          className="absolute left-6 top-16"
        >
          {Platform.OS === "ios"
            ? iconsData["arrowBackIos"]({ color: color.textPrimary })
            : iconsData["arrowBackAndroid"]({ color: color.textPrimary })}
        </Pressable>
        <View className="gap-2">
          <View className="flex-row items-center justify-center gap-2">
            {iconsData["home"]()}
            <MyText className="text-center text-4xl text-textPrimary font-bold">
              {t("title")}
            </MyText>
          </View>
          <View className="flex-1 justify-center">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <MyText className="text-accent text-2xl text-center font-bold">
                {t("card.title")}
              </MyText>
              <MyText className="text-textPrimary text-xl">
                {t("card.body")}
              </MyText>
              <View className="flex-row justify-between">
                <MyText className=" text-textPrimary text-2xl font-bold">
                  {t("card.current")}
                </MyText>
                <MyText className="text-textPrimary text-2xl font-bold">
                  {timetofall} m
                </MyText>
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
        onConfirm={(pickedDuration) => {
          setShowTimePicker(false);
          setTimetofall(pickedDuration.minutes.toString());
        }}
        onCancel={() => setShowTimePicker(false)}
        closeOnOverlayPress
        styles={{ ...TimePickerStyles }}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        hideSeconds
        hideHours
        minuteInterval={1}
        hourLabel={"H"}
        minuteLabel={"M"}
        maximumMinutes={45}
        initialValue={{ minutes: Number(timetofall) }}
      />
    </>
  );
};

export default SleepScreen;
