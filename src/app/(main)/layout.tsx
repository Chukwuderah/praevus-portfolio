"use client";

import dynamic from "next/dynamic";
import CursorFollowerWrapper from "@/components/layout/CursorFollowerWrapper";

const Navigation = dynamic(() => import("@/components/layout/Navigation"), {
  ssr: false,
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <CursorFollowerWrapper />
      <Navigation />
      {children}
    </main>
  );
}
