import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { toggleTheme, isLightMode } = useTheme();

  return (
    <button
      id="ThemeToggle"
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
