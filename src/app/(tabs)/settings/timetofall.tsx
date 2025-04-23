import MainButton from "@/src/components/MainButton";
import { TimePickerStyles } from "@/src/components/TimerPicker";
import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TimerPickerModal } from "react-native-timer-picker";

const TimetofallScreen = () => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timetofall, setTimetofall] = useState(15);

  return (
    <>
      <View className="flex-1 pb-32 pt-24 px-16 gap-4 items-center">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-6 top-16"
        >
          {iconsData["arrowBack"]({ color: color.textPrimary })}
        </Pressable>
        <View className="gap-2">
          <Text className="text-center text-4xl text-textPrimary font-bold">
            Time to Fall Asleep
          </Text>
          <View className="flex-1 justify-center">
            <View className="justify-center bg-primary rounded-3xl p-6 gap-6">
              <View className="flex-row justify-between">
                <Text className=" text-accent text-2xl font-bold">Current</Text>
                <Text className="text-textPrimary text-2xl font-bold">
                  {timetofall} m
                </Text>
              </View>
              <Text className="text-textPrimary text-xl">
                The average time it takes most people to fall asleep is about 15
                minutes. Set yours to better estimate your sleep cycle.
              </Text>
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
        visible={showTimePicker}
        setIsVisible={setShowTimePicker}
        onConfirm={(pickedDuration) => {
          setShowTimePicker(false);
          setTimetofall(pickedDuration.minutes);
        }}
        modalTitle=""
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
      />
    </>
  );
};

export default TimetofallScreen;
