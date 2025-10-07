"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export default function Card3D({
  children,
  className,
  intensity = 15,
  glowColor = "var(--accent-primary)",
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [intensity, -intensity]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-intensity, intensity]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative transition-all duration-200", className)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}40 0%, transparent 70%)`,
          filter: "blur(20px)",
          transform: "translateZ(-10px)",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main content */}
      <div
        style={{
          transform: "translateZ(20px)",
        }}
        className="relative z-10"
      >
        {children}
      </div>

      {/* Depth shadow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-black/20 pointer-events-none"
        style={{
          transform: "translateZ(-5px)",
          filter: "blur(10px)",
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0.1,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
