import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAsyncStorage(key: string) {
  const setItem = async (value: unknown) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert("Error, please try again");
    }
  };

  const getItem = async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      alert("Error, please try again");
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      alert("Error, please try again");
    }
  };

  return { setItem, getItem, removeItem };
}
