"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import NavMobileMenu from "./NavMobileMenu";
import { navItems } from "@/data/navItems";

export const Navbar = () => {
  // effect if user scrolls past nav
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // preventing memory leaks
  }, []);

  // nav build
  return (
    <nav
      className={`left-0 right-0 md:container px-3 md:rounded-b-full fixed w-full m-auto z-[999] transition-all duration-300 ${
        isScrolled
          ? "py-2 md:py-3 bg-background-color md:bg-background-color/55 backdrop-blur-md shadow-xs"
          : "bg-background-color md:py-5 md:bg-background-color/0"
      }`}
    >
      <div className="flex items-center justify-between md:justify-center md:space-x-8">
        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary focus:text-primary transition-colors duration-150"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* available for work, theme toggle */}
        <div className="flex space-x-2 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/jenna-g-mclaughlin"
            target="_blank"
            rel="noopener noreferrer"
            className="ctaButton bg-card/80"
          >
            Available for Work
          </a>
          <ThemeToggle />
        </div>

        {/* mobile nav */}
        <NavMobileMenu />
      </div>
    </nav>
  );
};
