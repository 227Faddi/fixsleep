import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import {
  CustomTimerPickerModalStyles,
  TimerPicker,
  TimerPickerModal,
} from "react-native-timer-picker";
import color from "../constants/colors";

type CycleTimePickerProps = {
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  mode: string;
  onConfirmFN: (args: any) => void;
};

const CycleTimePicker = ({
  showModal,
  setShowModal,
  mode,
  onConfirmFN,
}: CycleTimePickerProps) => {
  const { t } = useTranslation();
  const date = new Date();
  return (
    <TimerPickerModal
      visible={showModal}
      setIsVisible={setShowModal}
      onConfirm={(pickedDuration) => {
        setShowModal(false);
        onConfirmFN({ ...pickedDuration, mode });
      }}
      modalTitle={
        mode === "sleep" ? t("sleep.fallAsleepAt") : t("sleep.wakeUpAt")
      }
      confirmButtonText={t("timePicker.confirm")}
      cancelButtonText={t("timePicker.cancel")}
      onCancel={() => setShowModal(false)}
      closeOnOverlayPress
      styles={{ ...TimePickerStyles }}
      modalProps={{
        overlayOpacity: 0.2,
      }}
      LinearGradient={LinearGradient}
      hideSeconds
      minuteInterval={5}
      hourLabel={":"}
      minuteLabel={""}
      initialValue={{
        hours: date.getHours(),
        minutes: Math.round(date.getMinutes() / 5) * 5,
      }}
    />
  );
};

type PlayerTimePickerProps = {
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  onConfirmFN: (args: any) => void;
};

const PlayerTimePicker = ({
  showModal,
  setShowModal,
  onConfirmFN,
}: PlayerTimePickerProps) => {
  const { t } = useTranslation();
  return (
    <TimerPickerModal
      modalTitle={t("timePicker.soundDuration")}
      confirmButtonText={t("timePicker.confirm")}
      cancelButtonText={t("timePicker.cancel")}
      visible={showModal}
      setIsVisible={setShowModal}
      onConfirm={(pickedDuration) => {
        setShowModal(false);
        onConfirmFN(pickedDuration.minutes);
      }}
      onCancel={() => setShowModal(false)}
      closeOnOverlayPress
      LinearGradient={LinearGradient}
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
      hideSeconds
      hideHours
      minuteInterval={5}
      minuteLabel={"min"}
      minuteLimit={{ min: 5 }}
      maximumMinutes={50}
      initialValue={{ minutes: 5 }}
    />
  );
};

type TimetofallPickerProps = {
  onChangeFN: Dispatch<SetStateAction<number>>;
};

const TimetofallPicker = ({ onChangeFN }: TimetofallPickerProps) => {
  return (
    <TimerPicker
      onDurationChange={(duration) => {
        const { minutes } = duration;
        onChangeFN(minutes);
      }}
      hideHours
      hideSeconds
      minuteLabel="min"
      initialValue={{ minutes: 15 }}
      LinearGradient={LinearGradient}
      MaskedView={MaskedView}
      styles={{
        text: { fontFamily: "Fredoka-Medium", color: color.textPrimary },
        backgroundColor: "transparent",
        pickerItem: {
          fontSize: 24,
        },
        pickerLabel: {
          fontSize: 24,
          marginTop: 0,
        },
        pickerContainer: {
          marginRight: 6,
        },
        pickerItemContainer: {
          minWidth: 130,
        },
        pickerLabelContainer: {
          alignItems: "center",
        },
      }}
    />
  );
};

type BedtimePickerProps = {
  onChangeFN: Dispatch<SetStateAction<{ hours: number; minutes: number }>>;
};

const BedtimePicker = ({ onChangeFN }: BedtimePickerProps) => {
  return (
    <TimerPicker
      onDurationChange={(duration) => {
        const { hours, minutes } = duration;
        onChangeFN({ hours, minutes });
      }}
      hideSeconds
      padWithNItems={1}
      minuteInterval={5}
      initialValue={{ hours: 22, minutes: 30 }}
      //it works lol
      hourLabel="     :"
      minuteLabel=""
      LinearGradient={LinearGradient}
      MaskedView={MaskedView}
      styles={{
        text: { fontFamily: "Fredoka-Medium", color: color.textPrimary },
        backgroundColor: "transparent",
        pickerItem: {
          fontSize: 24,
        },
        pickerLabel: {
          fontSize: 24,
          marginTop: 0,
        },
        pickerContainer: {
          marginRight: 6,
        },
        pickerLabelContainer: {
          right: 0,
          alignItems: "center",
        },
      }}
    />
  );
};

export const TimePickerStyles: CustomTimerPickerModalStyles = {
  text: { fontFamily: "Fredoka-Medium" },
  modalTitle: {
    paddingInline: 25,
    fontWeight: "600" as const,
    color: color.textPrimary,
  },
  contentContainer: {
    backgroundColor: color.primary,
  },
  pickerContainer: {
    marginBlock: 15,
    backgroundColor: color.primary,
  },
  pickerLabel: {
    fontSize: 28,
    color: color.textPrimary,
  },
  pickerItem: {
    fontSize: 28,
    color: color.textPrimary,
  },
  confirmButton: {
    color: color.textPrimary,
    backgroundColor: color.accent,
    borderWidth: 0,
  },
  cancelButton: {
    color: color.textPrimary,
    backgroundColor: color.background,
    borderWidth: 0,
  },
  pickerLabelContainer: {
    right: -20,
    top: 0,
    bottom: 6,
    width: 40,
    alignItems: "center",
  },
};

export { BedtimePicker, CycleTimePicker, PlayerTimePicker, TimetofallPicker };
