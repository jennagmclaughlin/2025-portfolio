import React from "react";
import { motion } from "motion/react";
import * as Icons from "react-icons/pi";
import timeline from "@/data/timeline.json";

export const Timeline = () => {
  const barVariants = {
    initial: {
      scaleY: 0.1,
    },
    visible: {
      scaleY: 1,
    },
  };
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
          <motion.div
            className="bg-primary m-auto rounded-xl absolute left-0 md:right-0 top-0"
            style={{
              transformOrigin: "top",
              width: 10,
              minHeight: "10px",
              height: "100%",
              ease: "easeInOut",
            }}
            variants={barVariants}
            initial="initial"
            whileInView="visible"
            transition={{
              ease: "easeInOut",
              damping: 25,
              duration: 0.8,
              type: "spring",
            }}
            viewport={{ once: true }}
          ></motion.div>
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
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {IconComponent && <IconComponent />}
                  </motion.div>
                  <motion.div
                    className="timelineBox text-left"
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
