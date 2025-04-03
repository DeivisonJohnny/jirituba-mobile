import React, { createContext, useState } from "react";

type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

interface AppContextTheme {
  children: React.ReactNode;
}

const ConfigApp = ({ children }: AppContextTheme) => {
  const theme = "dark";

  const [currentTheme, setCurrentTheme] = useState(theme);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  const value = {
    theme: currentTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value as ThemeContextType}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ConfigApp;
