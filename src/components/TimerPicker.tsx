import { TimerPickerModal } from "react-native-timer-picker";
import color from "../constants/colors";

type Props = {
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  mode: string;
  onConfirmFN: (args: any) => void;
};

const TimerPicker = ({ showModal, setShowModal, mode, onConfirmFN }: Props) => {
  const date = new Date();
  return (
    <TimerPickerModal
      visible={showModal}
      setIsVisible={setShowModal}
      onConfirm={(pickedDuration) => {
        setShowModal(false);
        onConfirmFN({ ...pickedDuration, mode });
      }}
      modalTitle={mode === "sleep" ? `Fall Asleep at` : `Wake up at`}
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

export const TimePickerStyles = {
  text: { fontFamily: "Fredoka-Medium" },
  modalTitle: {
    paddingInline: 25,
    fontWeight: "600" as const,
    color: color.textPrimary,
  },
  contentContainer: {
    backgroundColor: color.primary,
    // borderWidth: 1,
    // borderColor: color.textSecondary,
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

export default TimerPicker;
