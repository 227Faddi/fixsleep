import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

type AppContextType = {
  timetofall: string;
  setTimetofall: (value: string) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

type Props = { children: ReactNode };

const AppContextProvider = ({ children }: Props) => {
  const { getItem, setItem } = useAsyncStorage("timetofall");

  const [timetofall, setTimetofall] = useState("15");

  useEffect(() => {
    const loadTime = async () => {
      const storedValue = await getItem();
      if (storedValue) {
        setTimetofall(storedValue);
      }
    };
    loadTime();
  }, []);

  useEffect(() => {
    const saveTimetofall = async () => {
      await setItem(timetofall);
    };
    saveTimetofall();
  }, [timetofall]);

  return (
    <AppContext.Provider value={{ timetofall, setTimetofall }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
