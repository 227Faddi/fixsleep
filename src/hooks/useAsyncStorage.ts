import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = (key: string) => {
  const setItem = async (value: unknown) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert(error);
    }
  };

  const getItem = async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      alert(error);
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      alert(error);
    }
  };

  return { setItem, getItem, removeItem };
};
