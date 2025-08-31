import { motion, useScroll, useTransform } from "motion/react";
import { StarBackground } from "./StarBackground";
import { StarCloud } from "./StarCloud";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <header
      id="hero"
      className="nightsky-background min-h-[300px] h-[95vh] flex flex-col items-center justify-center"
    >
      <StarBackground />
      <div
        id="heroText"
        className="container min-h-[300px] h-[95vh] fixed inset-0 z-1 flex flex-col items-center justify-center"
      >
        <div className="hidden lg:block absolute text-6xl w-auto h-auto top-[70%] left-[5px] 2xl:left-[9%] text-primary/50 -z-1">
          <StarCloud />
        </div>
        <div className="hidden lg:block absolute text-6xl w-auto h-auto bottom-[70%] right-[5px] 2xl:right-[9%] text-primary/50 -z-1">
          <StarCloud />
        </div>
        <motion.div style={{ scale: scaleValue, opacity: scaleValue }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-accent leading-[2.5rem] md:leading-[3.5rem] xl:leading-[5rem]">
            From sports to automotive, I build front-ends engineered for{" "}
            <span className="text-glow text-primary">speed</span>,{" "}
            <span className="text-glow text-primary">precision</span>, and{" "}
            <span className="text-glow text-primary">real-world impact</span>.
          </h1>
          <p className="pt-3 text-xl lg:text-2xl text-foreground/80">
            Scroll to learn more
          </p>
        </motion.div>
      </div>
    </header>
  );
};
