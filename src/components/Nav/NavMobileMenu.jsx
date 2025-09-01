"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavButton from "./NavButton";
import { navItems } from "@/data/navItems";

const NavMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const listVariants = {
    visible: {
      opacity: 1,
      y: "-35%",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: 0.1,
        default: { ease: "easeInOut" },
      },
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      y: "-35%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="md:hidden h-[100vh] fixed inset-0 bg-main z-40 flex flex-col items-center justify-center"
            initial={{ y: "-140%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-140%" }}
            key="menu"
            transition={{ type: "easeInOut", duration: 0.25 }}
          >
            <motion.ul
              className="flex flex-col space-y-8 text-xl"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {navItems.map((item, key) => (
                <li key={key}>
                  <motion.a
                    href={item.href}
                    title={item.name}
                    className="text-foreground hover:text-primary focus:text-primary transition-colors duration-150 cursor-pointer"
                    onClick={() => setIsOpen(false)} // close menu
                    variants={listItemVariants}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMobileMenu;
