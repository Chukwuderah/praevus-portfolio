"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import GlassCard from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const pathname = usePathname();
  const { setShowNav } = useNav();

  useEffect(() => {
    setShowNav(false);
    return () => setShowNav(true); // reset when leaving 404
  }, [setShowNav]);

  useEffect(() => {
    if (pathname) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        pathname
      );
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6" data-no-nav>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <GlassCard className="glass-card p-12 max-w-lg">
          <h1 className="mansion-heading text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">
            Room Not Found
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            This room{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-900 dark:text-white">
              {pathname || "unknown"}
            </code>{" "}
            doesn&apos;t exist in our mansion. Perhaps you took a wrong turn?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] hover:text-[var(--accent-primary)] dark:hover:text-[var(--accent-secondary)] text-white">
                <Home className="w-4 h-4 mr-2" />
                Return to Welcome Hall
              </Button>
            </Link>
            <Button variant="ghost" size="lg" onClick={() => history.back()} className="text-[var(--text-primary)] border border-[var(--border-primary)]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};