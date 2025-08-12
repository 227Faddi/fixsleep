import { isDevice } from "expo-device";
import * as Notifications from "expo-notifications";
import { Alert, Linking, Platform } from "react-native";
import i18n from "../../i18n";

export async function requestPermissions(): Promise<{ granted: boolean }> {
  if (isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    if (existingStatus === "granted") {
      return { granted: true };
    }

    const { status } = await Notifications.requestPermissionsAsync();

    if (status !== "granted") {
      return { granted: false };
    }

    return { granted: true };
  } else {
    console.warn("Must use physical device for Push Notifications");
    return { granted: true };
  }
}

export const alertPermissionNotGiven = () => {
  return Alert.alert(
    i18n.t("notification.disabledTitle"),
    i18n.t("notification.disabledMessage"),
    [
      { text: i18n.t("notification.cancel"), style: "cancel" },
      {
        text: i18n.t("notification.openSettings"),
        onPress: () => {
          Platform.OS === "ios"
            ? Linking.openURL("app-settings:")
            : Linking.openSettings();
        },
      },
    ]
  );
};
