import React from "react";
import { motion, MotionConfig } from "motion/react";

const NavButton = ({ isOpen, setIsOpen }) => {
  return (
    <MotionConfig transition={{ duration: 0.15, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-foreground z-50 cursor-pointer relative w-[32px] h-[54px]"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          variants={VARIANTS.top}
          className="absolute w-[32px] h-[3px] bg-foreground"
          style={{ top: "35%", y: "-50%", left: "50%", x: "-50%" }}
          transition={{ duration: 0.15 }}
        />

        <motion.div
          variants={VARIANTS.middle}
          className="absolute w-[32px] h-[3px] bg-foreground"
          style={{ top: "50%", y: "-50%", left: "50%", x: "-50%" }}
          transition={{ duration: 0.15 }}
        />

        <motion.div
          variants={VARIANTS.bottom}
          className="absolute w-[16px] h-[3px] bg-foreground"
          style={{
            bottom: "35%",
            y: "50%",
            left: "calc(50% + 8px)",
            x: "-50%",
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: "45deg",
      top: "50%",
    },
    closed: {
      rotate: "0deg",
      top: "35%",
      transition: {
        delay: 0.1,
      },
    },
  },
  middle: {
    open: {
      rotate: "-45deg",
    },
    closed: {
      rotate: "0deg",
      transition: {
        delay: 0.1,
      },
    },
  },
  bottom: {
    open: {
      rotate: "45deg",
      bottom: "50%",
      left: "50%",
      opacity: 0,
    },
    closed: {
      rotate: "0deg",
      bottom: "35%",
      left: "calc(50% + 8px)",
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  },
};

export default NavButton;
