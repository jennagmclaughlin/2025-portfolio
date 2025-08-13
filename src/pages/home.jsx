import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />

      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* main content */}
      <main className="bg-main p-10 rounded-t-xl min-h-[1000px] relative z-1">
        <section id="about"></section>
      </main>

      {/* footer */}
    </div>
  );
};
