"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useEffect, useRef } from "react";
import GlassCard from "@/components/shared/GlassCard";
import Card3D from "@/components/shared/Card3D";

export function Stats({
  stats,
}: {
  stats: { number: string; label: string }[];
}) {
  const { theme } = useTheme();
  const controls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const duration = 15; // slower + smoother scroll
  const isDark = theme === "dark";

 useEffect(() => {
    const startX = isDark ? "-50%" : "0%";
    const endX = isDark ? "0%" : "-50%";

    controls.start({
      x: [startX, endX],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    });
  }, [isDark, controls, duration]);

  // pause/resume animation on hover
  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    const startX = isDark ? "-50%" : "0%";
    const endX = isDark ? "0%" : "-50%";
    controls.start({
      x: [startX, endX],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    });
  };

  return (
    <Card3D intensity={6} glowColor="var(--accent-primary)">
      <GlassCard className="py-8 overflow-hidden">
        <div
          ref={marqueeRef}
          className="overflow-hidden cursor-default"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div className="flex w-max gap-8 px-4" animate={controls}>
            {[...stats, ...stats].map((stat, index) => (
              <div key={index} className="text-center min-w-[180px]">
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm md:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </GlassCard>
    </Card3D>
  );
}
