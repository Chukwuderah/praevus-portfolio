"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

interface ThemeToggleProps {
  variant?: "nav" | "orb"; // nav = inline button, orb = floating orb
}

export function ThemeToggle({ variant = "nav" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const shared = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    onClick: toggleTheme,
  };

  if (variant === "orb") {
    return (
      <motion.button
        {...shared}
        className="md:hidden animate-pulse fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg"
      >
        {theme === "light" ? (
          <Moon className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
        ) : (
          <Sun className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
        )}
      </motion.button>
    );
  }

  // default: inline button (for navbar/tablet bar)
  return (
    <motion.button
      {...shared}
      className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" style={{ color: "var(--text-primary)" }} />
      ) : (
        <Sun className="w-5 h-5" style={{ color: "var(--text-primary)" }} />
      )}
    </motion.button>
  );
}
