import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Nav/Navbar";
import { Portrait } from "@/components/Portrait";
import { StarCloud } from "@/components/StarCloud";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { FeaturedProjects } from "@/components/Projects/FeaturedProjects";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="bg-background">
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* main content */}
      <main className="bg-main min-h-[1000px] relative z-1">
        <section
          id="about"
          className="bg-primary/5 text-foreground py-12 lg:py-24 pb-[0px] lg:pb-[0px]"
        >
          <div className="container py-0 flex flex-wrap-reverse items-center justify-center gap-5 text-left">
            <div className="lg:flex-2">
              <h2 className="font-accent text-3xl mb-1 text-center md:text-left">
                A little bit about me
              </h2>
              <p className="text-md md:text-lg">
                I'm Jenna McLaughlin, and you can find me in Noblesville,
                Indiana with my cat and a jungle's worth of house plants. I
                specialize in front-end development, which means you'll be
                seeing me do some good-ol' HTML, CSS, and JavaScript. I've been
                focused on studying for the past few years and I've enjoyed
                every step of the way, no matter the challenge! Right now I'm
                studying React, and I'm hoping to learn Python in the future!
              </p>
              <p className="text-md md:text-lg">
                Outside of coding I love to draw superheroes, go to the movies,
                and play games like Animal Crossing or Monster Hunter.
              </p>
              <p className="text-md md:text-lg">
                Now the important part: what can I do?
              </p>
            </div>
            <div className="relative lg:flex-1">
              <Portrait />
              <div className="hidden lg:block absolute text-8xl w-auto h-auto -bottom-[2%] left-[2%] 2xl:left-[5%] text-foreground/50">
                <StarCloud />
              </div>
              <div className="hidden lg:block absolute text-8xl w-auto h-auto top-[2%] right-[2%] 2xl:right-[5%] text-foreground/50">
                <StarCloud />
              </div>
            </div>
          </div>
          <div className="container mt-5 lg:mt-10">
            <Skills />
          </div>

          <Timeline />
        </section>
        <section id="featured-projects" className="py-6 lg:py-12">
          <FeaturedProjects />
        </section>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};
