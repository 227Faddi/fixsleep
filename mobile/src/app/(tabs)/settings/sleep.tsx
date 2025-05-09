import MainButton from "@/src/components/MainButton";
import MyText from "@/src/components/MyText";
import { TimePickerStyles } from "@/src/components/TimerPicker";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { useTimetofall } from "@/src/hooks/contexts";
import { router } from "expo-router";
import { useState } from "react";
import { Platform, Pressable, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const SleepScreen = () => {
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
              Sleep
            </MyText>
          </View>
          <View className="flex-1 justify-center">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-4">
              <MyText className="text-accent text-2xl text-center font-bold">
                Time to fall asleep
              </MyText>
              <MyText className="text-textPrimary text-xl">
                The average time it takes most people to fall asleep is about 15
                minutes. Set yours to better estimate your sleep cycle.
              </MyText>
              <View className="flex-row justify-between">
                <MyText className=" text-textPrimary text-2xl font-bold">
                  Current
                </MyText>
                <MyText className="text-textPrimary text-2xl font-bold">
                  {timetofall} m
                </MyText>
              </View>
              <MainButton
                onPress={() => setShowTimePicker(true)}
                containerClass="bg-accent"
                text="Adjust Time"
              />
            </View>
          </View>
        </View>
      </View>
      <TimerPickerModal
        modalTitle="Pick a time"
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
        confirmButtonText="Save"
        initialValue={{ minutes: Number(timetofall) }}
      />
    </>
  );
};

export default SleepScreen;
