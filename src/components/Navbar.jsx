import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
];

export const Navbar = () => {
  // mobile dropdown
  const [isOpen, setIsOpen] = useState(false);

  // effect if user scrolled past nav
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
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* logo */}
        <a
          href="#hero"
          className="hidden md:flex text-xl font-bold text-primary item-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Jenna McLaughlin</span>{" "}
            Portfolio
          </span>
        </a>

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

        {/* available for work */}
        <a
          href="https://www.linkedin.com/in/jenna-g-mclaughlin"
          target="_blank"
          rel="noopener noreferrer"
          className="ctaButton bg-card/80"
        >
          Available for Work
        </a>

        {/* mobile nav */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-foreground z-50 cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-150 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground hover:text-primary focus:text-primary transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
