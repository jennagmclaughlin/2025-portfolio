import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    } else {
      setIsLightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative max-sm:hidden p-2 rounded-full transition-colors duration-300 text-foreground/80",
        "hover:text-primary focus:outline-hidden cursor-pointer"
      )}
    >
      {isLightMode ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
    </button>
  );
};
