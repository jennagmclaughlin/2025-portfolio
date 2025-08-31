import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  // checking theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLightMode(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    setIsLightMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "light" : "dark");
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
