import { motion } from "motion/react";

function AnimatedCheckmark() {
  return (
    <div className="w-full flex flex-col items-center justify-centern inset-0 m-auto">
      <motion.div
        className="rounded-full w-14 h-14"
        initial={{ scale: 1.5 }}
        animate={{
          scale: [1.5, 1.75, 1.5],
        }}
        transition={{
          scale: { delay: 0.9, duration: 0.3, ease: "easeInOut" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          className="w-14 h-14 overflow-visible"
        >
          {/* circle stroke */}
          <motion.circle
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="#688f49"
            strokeWidth="2"
            strokeDasharray="166"
            strokeDashoffset="166"
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.65, 0, 0.45, 1],
            }}
          />
          {/* fill circle */}
          <motion.circle
            cx="26"
            cy="26"
            r="0" // start invisible
            fill="#688f49"
            animate={{ r: 25 }} // grow to full radius
            transition={{
              delay: 0.4, // after the outline starts
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
          />
          {/* "aura" that pulses after fill */}
          <motion.circle
            cx="26"
            cy="26"
            r="0"
            fill="none"
            stroke="#688f49"
            strokeWidth="3"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ r: 25, scale: [1, 1.4], opacity: [0.8, 0] }}
            transition={{
              delay: 0.7, // start after bounce
              duration: 0.6,
              ease: "easeOut",
            }}
          />
          {/* checkmark */}
          <motion.path
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="48"
            strokeDashoffset="48"
            d="M14 27l7 7 16-16"
            animate={{ strokeDashoffset: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.3,
              ease: [0.65, 0, 0.45, 1],
            }}
          />
        </svg>
      </motion.div>
      <motion.p
        className="pt-[24px] px-[20px] text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Thank you so much! I'll reach out shortly.
      </motion.p>
    </div>
  );
}

export default AnimatedCheckmark;
