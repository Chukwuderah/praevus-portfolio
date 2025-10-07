"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  animation?: "float" | "orbit" | "twinkle" | "none";
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  style?: React.CSSProperties;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export default function FloatingOrb({
  size = "md",
  color = "var(--accent-primary)",
  animation = "float",
  className,
  children,
  delay,
  x,
  y,
}: FloatingOrbProps) {
  // 🎲 generate randomized timings once per orb
  const { randomDelay, randomDuration, randomAmplitude } = useMemo(() => {
    return {
      randomDelay: delay ?? Math.random() * 3, // random 0–3s
      randomDuration: 2 + Math.random() * 2, // random 2–4s
      randomAmplitude: 5 + Math.random() * 8, // random float amplitude 5–13px
    };
  }, [delay]);

  const animationVariants = {
    float: {
      y: [0, -randomAmplitude, randomAmplitude / 2, 0],
      rotate: [0, 120, 240, 360],
      transition: {
        duration: randomDuration,
        ease: "easeInOut" as const,
        repeat: Infinity,
        delay: randomDelay,
      },
    },
    twinkle: {
      scale: [1, 1.1 + Math.random() * 0.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: randomDuration,
        ease: "easeInOut" as const,
        repeat: Infinity,
        delay: randomDelay,
      },
    },
    none: {},
  };

  const orbMotion =
    animation === "orbit"
      ? {
          animate: { rotate: 360 },
          transition: {
            duration: 20 + Math.random() * 10, // 20–30s orbit
            ease: "linear" as const,
            repeat: Infinity,
            delay: randomDelay,
          },
        }
      : {
          animate:
            animationVariants[animation as keyof typeof animationVariants],
        };

  return (
    <motion.div
      className={cn(
        "rounded-full flex items-center justify-center",
        sizeClasses[size],
        className
      )}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}80, ${color}40, ${color}20)`,
        boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
        transform: `translate(${x ?? 0}px, ${y ?? 0}px)`,
      }}
      {...orbMotion}
    >
      {children}
    </motion.div>
  );
}
