useAsyncStorage;
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

type AppContextType = {
  timetofall: number;
  setTimetofall: (value: number) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

type Props = { children: ReactNode };

const AppContextProvider = ({ children }: Props) => {
  const { getItem, setItem } = useAsyncStorage<number>("timetofall");

  const [timetofall, setTimetofall] = useState<number>(15);

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
