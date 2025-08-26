import { PiStarFourFill } from "react-icons/pi";
import { FaCloud } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext"; // Adjust path if needed

export const StarCloud = () => {
  const { isLightMode } = useTheme(); // Consume the theme context

  return <div>{isLightMode ? <FaCloud /> : <PiStarFourFill />}</div>;
};
