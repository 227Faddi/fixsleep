import { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";

export function useTimetofall() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("No context");
  }
  return context;
}
