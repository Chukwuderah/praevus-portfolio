"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Welcome Hall", icon: Home },
  { href: "/about", label: "Library", icon: User },
  { href: "/projects", label: "Gallery", icon: Briefcase },
  { href: "/blog", label: "Study", icon: BookOpen },
  { href: "/contact", label: "Observatory", icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* DESKTOP NAV (top bar) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden md:block lg:block fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative">
              <h1 className="text-4xl font-medium playfair-display leading-7 ml-5">
                P | C
              </h1>
              <p className="absolute top-2.5 text-nowrap text-[8px] font-semibold uppercase z-20">
                Pleasant Chukwuderah
              </p>
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} className="relative">
                    <motion.div
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
                        isActive ? "text-white" : "hover:bg-white/10"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-lg"
                          style={{ backgroundColor: "var(--accent-primary)" }}
                        />
                      )}
                      <Icon className="w-4 h-4 relative z-10" />
                      <span className="text-sm font-medium relative z-10">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle variant="nav" />
          </div>
        </div>
      </motion.nav>

      {/* TABLET NAV (bottom bar) */}
      <div className="hidden md:flex lg:hidden fixed bottom-0 left-0 right-0 z-50 glass p-2 justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={cn(
                  "flex flex-col items-center px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "text-[var(--accent-primary)]"
                    : "hover:bg-white/10"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* MOBILE NAV (curtain menu) */}
      <div className="flex md:hidden fixed top-0 left-0 right-0 z-50 glass p-4 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative">
          <h1 className="text-4xl font-medium playfair-display leading-7 ml-5">
            P | C
          </h1>
          <p className="absolute top-2.5 text-nowrap text-[8px] font-semibold uppercase z-20">
            Pleasant Chukwuderah
          </p>
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Curtain Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 w-[70%] h-screen bg-[var(--bg-primary)] z-50 pl-8 pt-10 flex flex-col space-y-8"
            >
              <button
                className="absolute top-6 right-6"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.div
                      className={cn(
                        "flex items-center space-x-3 text-base",
                        isActive
                          ? "text-[var(--accent-primary)]"
                          : "hover:text-white"
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6" />
                      <span>{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
