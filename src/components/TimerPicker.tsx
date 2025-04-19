import { TimerPickerModal } from "react-native-timer-picker";
import color from "../constants/colors";

type Props = {
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  mode: string;
  onConfirmFN: (args: any) => void;
};

const TimerPicker = ({ showModal, setShowModal, mode, onConfirmFN }: Props) => {
  return (
    <TimerPickerModal
      visible={showModal}
      setIsVisible={setShowModal}
      onConfirm={(pickedDuration) => {
        setShowModal(false);
        onConfirmFN({ ...pickedDuration, mode });
      }}
      modalTitle={
        mode === "sleep" ? "Set your sleep time ☾" : "Set your wake-up time ☀️"
      }
      onCancel={() => setShowModal(false)}
      closeOnOverlayPress
      styles={{
        modalTitle: {
          paddingInline: 25,
          fontWeight: "400",
          color: color.textPrimary,
        },
        contentContainer: {
          backgroundColor: color.primary,
          borderWidth: 1,
          borderColor: color.textSecondary,
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
          color: color.textSecondary,
          backgroundColor: color.background,
          borderWidth: 0,
        },
      }}
      modalProps={{
        overlayOpacity: 0.2,
      }}
      hideSeconds
      minuteInterval={5}
      hourLabel={"H"}
      minuteLabel={"M"}
    />
  );
};

export default TimerPicker;
