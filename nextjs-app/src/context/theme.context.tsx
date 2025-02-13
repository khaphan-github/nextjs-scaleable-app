"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface CustomThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const CustomThemeContext = createContext<CustomThemeContextProps | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = (): CustomThemeContextProps => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider');
  }
  return context;
};