"use client";
import { ThemeToggle } from "./ThemeToggle";
import NavMobileMenu from "./NavMobileMenu";
import { navItems } from "@/data/navItems";

export const Navbar = () => {
  // nav build
  return (
    <nav className="left-0 right-0 md:container px-[12px] md:rounded-b-full fixed w-full m-auto z-[999] transition-all duration-300 py-[8px] md:py-[12px] bg-background-color md:bg-background/55 backdrop-blur-md shadow-xs">
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
