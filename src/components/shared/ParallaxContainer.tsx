"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed: number;
  className?: string;
}

function ParallaxLayer({ children, speed, className }: ParallaxLayerProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 100]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxContainer({
  children,
  className,
  ...props
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Background layers with mouse parallax */}
      <ParallaxLayer speed={-0.5} className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, var(--accent-primary)20 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer speed={-0.3} className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 70% 70%, var(--byzantium)30 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </ParallaxLayer>

      {/* Main content */}
      <div className="relative z-10" {...props}>{children}</div>
    </div>
  );
}
