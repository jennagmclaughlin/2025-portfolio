import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-[300px] flex flex-col items-center justify-center text-center">
        <p className="text-3xl md:text-5xl font-bold">404 not found :-(</p>
        <a
          href="/"
          className="text-xl md:text-2xl mt-2 transition-colors duration-150 hover:text-primary"
        >
          Go home
        </a>
      </div>
      <StarBackground />
    </div>
  );
};
