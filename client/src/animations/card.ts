import { Variants } from "framer-motion";

export const cardAnimation: Record<"children" | "parent", Variants> = {
  children: {
    hidden: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.35 },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35 },
    },
  },
  parent: {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 1 },
    },
  },
};
