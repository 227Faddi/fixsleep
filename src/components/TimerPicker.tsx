import { TimerPickerModal } from "react-native-timer-picker";

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
        mode === "sleep" ? "Set your sleep time" : "Set your wake-up time"
      }
      onCancel={() => setShowModal(false)}
      closeOnOverlayPress
      styles={{
        modalTitle: {
          paddingInline: 25,
          fontWeight: "400",
        },
        contentContainer: {
          borderWidth: 1,
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
