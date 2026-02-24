"use client";

import Image from "next/image";
import React from "react";

interface TechOrbitProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function TechOrbit({ images }: TechOrbitProps) {
  return (
    <section className="relative my-24 flex items-center justify-center overflow-hidden">
      <div className="orbit-box">
        {images.map((img, index) => (
          <span
            key={img.alt}
            style={
              {
                "--i": index,
                "--total": images.length,
              } as React.CSSProperties
            }
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={200}
              height={200}
              className="orbit-image"
              priority={index < 2}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
