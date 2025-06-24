import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAsyncStorage<T>(key: string) {
  const setItem = async (value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert("Error, please try again");
    }
  };

  const getItem = async (): Promise<T | null> => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      alert("Error, please try again");
      return null;
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
