"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const CursorFollowerLazy = dynamic(
  () => import("@/components/3D/CursorFollower"),
  { ssr: false },
);

export default function CursorFollowerWrapper() {
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
