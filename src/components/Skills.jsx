import { motion } from "motion/react";
import { Tooltip } from "./Tooltip";
import * as Icons from "react-icons/si";
import skills from "@/data/skills.json";

export const Skills = () => {
  const variants = {
    initial: { opacity: 0, y: 50, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <ul className="skills-list flex items-center justify-center 2xl:justify-between flex-wrap gap-x-1 gap-y-8 md:gap-3 lg:gap-4 text-[2rem] md:text-[3rem] lg:text-[3.5rem] text-center">
      {skills.map((skill, index) => {
        const IconComponent = Icons[skill.icon];

        return (
          <motion.li
            key={skill.id}
            variants={variants}
            initial="initial"
            whileInView="visible"
            custom={index}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <Tooltip text={skill.name}>
              {IconComponent && <IconComponent />}
            </Tooltip>
          </motion.li>
        );
      })}
    </ul>
  );
};
