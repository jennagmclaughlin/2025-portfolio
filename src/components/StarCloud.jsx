import { PiStarFourFill } from "react-icons/pi";
import { FaCloud } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export const StarCloud = () => {
  const { isLightMode } = useTheme();

  return <div>{isLightMode ? <FaCloud /> : <PiStarFourFill />}</div>;
};
