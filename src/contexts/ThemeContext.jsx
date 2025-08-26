import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  // checking theme on page load
  useEffect(() => {
    if (document.documentElement.classList.contains("light")) {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
