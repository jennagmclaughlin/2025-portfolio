import stars from "@/assets/stars.json";
import meteors from "@/assets/meteors.json";
import { TbNorthStar } from "react-icons/tb";

export const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-1">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            top: meteor.top + "%",
            left: meteor.left + "%",
            opacity: meteor.opacity + "%",
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration + "s",
          }}
        >
          <div
            className="meteorShine animate-meteorShine"
            style={{
              animationDelay: meteor.animationDelay,
              animationDuration: meteor.animationDuration + "s",
              transform: "rotate(135deg)",
            }}
          >
            <TbNorthStar />
          </div>
        </div>
      ))}
    </div>
  );
};
