/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getThemeStorage } from "../localStorage/themeStorage";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(getThemeStorage());

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isOn));
  }, [isOn]);
  return (
    <ThemeContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
