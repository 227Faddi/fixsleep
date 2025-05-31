import { useTranslation } from "react-i18next";
import { TimerPickerModal } from "react-native-timer-picker";
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
      hideSeconds
      minuteInterval={5}
      hourLabel={"H"}
      minuteLabel={"M"}
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
      modalTitle={t("timePicker.pickTime")}
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
      styles={{ ...TimePickerStyles }}
      modalProps={{
        overlayOpacity: 0.2,
      }}
      hideSeconds
      hideHours
      minuteInterval={5}
      minuteLabel={"M"}
      minuteLimit={{ min: 5 }}
      initialValue={{ minutes: 5 }}
    />
  );
};

export const TimePickerStyles = {
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
    color: color.textPrimary,
  },
  pickerItem: {
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
};

export { CycleTimePicker, PlayerTimePicker };
