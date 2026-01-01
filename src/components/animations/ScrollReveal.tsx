import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import useScrollAnimation from "@/hooks/useScrollAnimation";

type AnimationVariant = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom-in" 
  | "zoom-out"
  | "flip-up"
  | "flip-down"
  | "slide-up"
  | "slide-down";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animations: Record<AnimationVariant, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-75",
    animate: "opacity-100 scale-100",
  },
  "zoom-out": {
    initial: "opacity-0 scale-125",
    animate: "opacity-100 scale-100",
  },
  "flip-up": {
    initial: "opacity-0 rotateX-90",
    animate: "opacity-100 rotateX-0",
  },
  "flip-down": {
    initial: "opacity-0 -rotateX-90",
    animate: "opacity-100 rotateX-0",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-24",
    animate: "opacity-100 translate-y-0",
  },
  "slide-down": {
    initial: "opacity-0 -translate-y-24",
    animate: "opacity-100 translate-y-0",
  },
};

const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const animation = animations[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? animation.animate : animation.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
