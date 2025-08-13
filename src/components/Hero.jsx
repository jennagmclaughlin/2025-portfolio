import { StarBackground } from "./StarBackground";
import { PiStarFourFill } from "react-icons/pi";

export const Hero = () => {
  const scrollHero = function (quantity) {
    const scrollTop =
      (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
    var size = 1 - (scrollTop / quantity || 0);
    var opacity = 1 - (scrollTop / quantity || 0);

    if (size <= 0.75) size = 0.75;
    if (opacity <= 0.5) opacity = 0.5;

    document
      .querySelector("#heroText")
      .setAttribute(
        "style",
        "transform: scale(" + size + "); opacity: " + opacity + ";"
      );
  };
  window.addEventListener("scroll", function () {
    scrollHero(400);
  });

  return (
    <header
      id="hero"
      className="min-h-[300px] h-[75vh] flex flex-col items-center justify-center"
    >
      <StarBackground />
      <div
        id="heroText"
        className="container min-h-[300px] h-[75vh] fixed inset-0 z-0 px-3 flex flex-col items-center justify-center"
      >
        <div className="absolute text-6xl w-auto h-auto top-[56%] left-[9%] text-primary/50">
          <PiStarFourFill />
        </div>
        <div className="absolute text-6xl w-auto h-auto bottom-[56%] right-[9%] text-primary/50">
          <PiStarFourFill />
        </div>
        <h1 className="text-5xl md:text-7xl font-accent">
          Hello, my name's <span className="text-glow text-primary">Jenna</span>
          .
          <br className="hidden md:block" /> I'm a{" "}
          <span className="text-glow text-primary">Front-End Developer</span>.
        </h1>
        <p className="pt-3 text-2xl text-foreground/80">Scroll to learn more</p>
      </div>
    </header>
  );
};
