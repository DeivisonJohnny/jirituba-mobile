import React, { createContext, useState } from "react";

type ThemeType = "dark" | "light";

type AppConfigType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  titlePage: string | null;
  setTitlePage: (title: string | null) => void;
};

export const AppConfigContext = createContext<AppConfigType>({
  theme: "dark",
  setTheme: () => {},
  titlePage: null,
  setTitlePage: () => {},
});

interface AppConfigProps {
  children: React.ReactNode;
}

const ConfigApp = ({ children }: AppConfigProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("dark");
  const [titlePage, setTitlePage] = useState<string | null>(null);

  const value: AppConfigType = {
    theme: currentTheme,
    setTheme: setCurrentTheme,
    titlePage,
    setTitlePage,
  };

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
};

export default ConfigApp;
