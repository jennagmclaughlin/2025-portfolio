import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import * as Icons from "react-icons/pi";
import timeline from "@/data/timeline.json";
import { useTheme } from "@/contexts/ThemeContext";

export const Timeline = () => {
  // grabbing theme context for the timeline bar's colors
  const { isLightMode } = useTheme();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "-12% start"],
  });
  const barBackground = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `${isLightMode ? "hsl(190 50% 70%)" : "hsl(213 31% 91%)"}`,
      `${isLightMode ? "hsl(190 50% 20%)" : "hsl(205 46% 58%)"}`,
    ]
  );
  const iconVariants = {
    initial: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  // variants for the timelineBox div
  const jobVariants = {
    initial: { opacity: 0.5, scaleX: 0.5 },
    visible: { opacity: 1, scaleX: 1 },
  };

  return (
    <div className="bg-main/50 py-[32px] mt-10 lg:mt-15">
      <div className="container relative">
        <h2 className="font-accent text-4xl md:text-5xl mb-5 text-center">
          Timeline
        </h2>
        <div className="relative">
          <div
            className="bg-primary/15 m-auto rounded-xl absolute left-0 md:right-0 top-0 overflow-hidden"
            style={{
              width: 10,
              minHeight: "10px",
              height: "100%",
            }}
          >
            <motion.div
              className="m-auto rounded-xl relative"
              ref={targetRef}
              style={{
                width: 10,
                height: "100%",
                transformOrigin: "top",
                scaleY: scrollYProgress,
                backgroundColor: barBackground,
              }}
            ></motion.div>
          </div>
          <ul className="timelineContainer">
            {timeline.map((job, index) => {
              const IconComponent = Icons[job.icon];
              return (
                <motion.li
                  key={job.id}
                  className={`flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <motion.div
                    className="timeline-icon"
                    variants={iconVariants}
                    initial="initial"
                    whileInView="visible"
                    transition={{ delay: 0.1, duration: 0.75, type: "spring" }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {IconComponent && <IconComponent />}
                  </motion.div>
                  <motion.div
                    className="timelineBox bg-card lightMode-box-shadow text-left"
                    variants={jobVariants}
                    initial="initial"
                    whileInView="visible"
                    custom={index}
                    transition={{
                      type: "tween",
                      duration: 0.25,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    style={{
                      transformOrigin: index % 2 === 0 ? "right" : "left",
                    }}
                  >
                    <h3 className="font-accent text-xl md:text-2xl">
                      {job.name}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2">
                      <p className="text-lg font-[600] leading-[105%]">
                        {job.location}
                      </p>
                      <p className="md:mt-[0px] text-sm text-foreground/75">
                        {job.date}
                      </p>
                    </div>
                    <p>{job.details}</p>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
