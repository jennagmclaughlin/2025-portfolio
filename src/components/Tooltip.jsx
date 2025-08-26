import { useState } from "react";

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className="tooltip"
        style={{
          opacity: isVisible ? "100%" : "0",
          transform: isVisible ? "translateY(0)" : "translateY(10px) ",
        }}
      >
        {text}
      </div>
    </div>
  );
};
