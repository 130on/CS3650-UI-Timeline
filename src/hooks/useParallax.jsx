import { useTransform } from "framer-motion";

export const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};