import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  return (
    <div
      className="container mt-5 lg:mt-10 relative"
      ref={containerRef}
      style={{ overflow: "scroll" }}
    >
      <motion.div
        className="bg-primary m-auto"
        style={{
          transformOrigin: "top",
          width: 10,
          height: 100 * scrollYProgress,
        }}
      ></motion.div>
    </div>
  );
};
