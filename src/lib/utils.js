import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn = "class name"
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
