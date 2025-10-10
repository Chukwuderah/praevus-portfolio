"use client";

import "./globals.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import { NavProvider, useNav } from "@/context/NavContext";
import PageTransition from "@/components/shared/PageTransition";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Toaster } from "sonner";

const Navigation = dynamic(() => import("@/components/layout/Navigation"), {
  ssr: false,
});

const CursorFollowerLazy = dynamic(
  () => import("@/components/3D/CursorFollower"),
  {
    ssr: false,
  }
);

export function CursorFollowerWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleMove = () => {
      setShouldRender(true);
      window.removeEventListener("mousemove", handleMove);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!shouldRender) return null;
  return <CursorFollowerLazy />;
}

const inter = Inter({ subsets: ["latin"] });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { showNav } = useNav();

  return (
    <div>
      {showNav && <Navigation />}
      <main>{children}</main>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Pleasant Chukwuderah | Frontend Developer</title>
        <meta
          name="description"
          content="Explore my creative portfolio through the rooms of a digital mansion"
        />
        <meta
          name="keywords"
          content="portfolio, developer, creative, web design, frontend, pleasant, software engineer, derah, chukwuderah, praevus, pleasant chukwuderah"
        />
        <meta name="author" content="Pleasant Chukwuderah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <CursorFollowerWrapper />
        <ThemeProvider>
          <NavProvider>
            <PageTransition>
              <main className="min-h-screen">
                <ThemeToggle variant="orb" />
                <LayoutContent>
                  {children}
                  <Toaster position="top-right" />
                </LayoutContent>
              </main>
            </PageTransition>
          </NavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
