import { Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "none"; // Include "none" as a valid direction
type TransitionType = "tween" | "spring" | "keyframes"; // Add more if needed

export const slideIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      opacity: 0, // Start with element hidden (fade out)
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Slide in from left or right
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // Slide in from top or bottom
    },
    show: {
      opacity: 1, // Fade in the element
      x: direction === "none" ? 0 : 0, // No slide if "none", otherwise move to the original position
      y: direction === "none" ? 0 : 0, // No slide if "none", otherwise move to the original position
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut", // Smooth transition
      },
    },
  };
};
