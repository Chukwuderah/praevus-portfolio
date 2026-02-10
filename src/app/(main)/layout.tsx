"use client";

import dynamic from "next/dynamic";
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
      <Navigation />
      {children}
    </main>
  );
}
