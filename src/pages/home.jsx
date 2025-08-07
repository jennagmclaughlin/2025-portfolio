import { ThemeToggle } from "@/components/theme-toggle";
import { StarBackground } from "@/components/star-background";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />

      {/* background effects */}
      <StarBackground />

      {/* navbar */}

      {/* main content */}

      {/* footer */}
    </div>
  );
};
