"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import FloatingOrb from "@/components/shared/FloatingOrb";
import Card3D from "@/components/shared/Card3D";
import ParallaxContainer from "@/components/shared/ParallaxContainer";
import { OrbitingTechIcons } from "@/components/3D/OrbitingIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechOrbit from "@/components/3D/TechOrbit";

export default function Home() {
  return (
    <ParallaxContainer className="min-h-screen relative overflow-hidden perspective">
      {/* Gradient Background */}
      <div className="absolute inset-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => {
          // Deterministic pseudo-random (seeded by index)
          const left = (i * 37.21) % 100; // consistent horizontal spread
          const top = (i * 91.73) % 100; // consistent vertical spread
          const duration = 3 + ((i * 29.47) % 2); // 3–5s loop
          const delay = (i * 17.89) % 3; // 0–3s delay

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb
          size="lg"
          className="absolute top-20 left-10 twinkle3d"
          animation="none"
          delay={0}
        />
        <FloatingOrb
          size="md"
          className="absolute top-40 right-20 float3d"
          animation="none"
          delay={1}
        />
        <FloatingOrb
          size="sm"
          className="absolute bottom-32 left-1/4 twinkle3d"
          animation="none"
          delay={2}
        />
        <FloatingOrb
          size="xl"
          className="absolute bottom-20 right-10 opacity-30 float3d"
          animation="none"
          delay={0.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card3D
              intensity={12}
              className="p-6 sm:p-12 rounded-xl relative overflow-hidden"
            >
              {/* 3D Canvas for Orbiting Tech Icons */}
              <div className="hidden sm:flex absolute inset-0 opacity-30">
                <OrbitingTechIcons />
              </div>

              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[var(--text-primary)] text-4xl sm:text-6xl md:text-8xl font-bold mb-6"
                >
                  Pleasant Chukwuderah
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto"
                >
                  Frontend Developer & Technical Writer
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
                    Welcome to my digital mansion, where code meets creativity
                    and every project is crafted with passion, precision, and a
                    touch of magic. I specialize in creating beautiful,
                    performant web applications that delight users and solve
                    real problems.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mt-8">
                    <Link href="/projects">
                      <Button
                        size="lg"
                        className="w-full group 
                 bg-[var(--accent-primary)] 
                 text-[var(--bg-primary)] 
                 hover:bg-[var(--accent-secondary)] 
                 transition-colors"
                      >
                        Explore the Gallery
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    <Link href="/contact">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full 
                 border-[var(--accent-primary)] 
                 text-[var(--accent-primary)] 
                 hover:bg-[var(--accent-primary)] 
                 hover:text-[var(--bg-primary)] 
                 transition-colors"
                      >
                        Let&apos;s Connect
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </Card3D>
          </motion.div>

          <TechOrbit
            images={[
              { src: "/tech/react.png", alt: "React" },
              { src: "/tech/reactnative.png", alt: "React Native" },
              { src: "/tech/nextjs.jpg", alt: "Next.js" },
              { src: "/tech/typescript.png", alt: "TypeScript" },
              { src: "/tech/javascript.png", alt: "JavaScript" },
              { src: "/tech/tailwindcss.png", alt: "Tailwind CSS" },
              { src: "/tech/html_css.png", alt: "HTML & CSS" },
              { src: "/tech/figma.png", alt: "Figma" },
              { src: "/tech/framer.png", alt: "Framer Motion" },
              { src: "/tech/versioncontrol.png", alt: "Version Control" },
            ]}
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <GlassCard className="py-8 px-4 md:px-8 max-w-2xl mx-auto">
              <h2 className="mansion-heading text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                I&apos;m always excited to work on new projects and collaborate
                with passionate people. Let&apos;s turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mt-6">
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="w-full 
                 border-[var(--accent-primary)] 
                 text-[var(--accent-primary)] 
                 hover:bg-[var(--accent-primary)] 
                 hover:text-[var(--bg-primary)] 
                 transition-colors
                 duration-200 ease-in-out"
                  >
                    Learn More About Me
                  </Button>
                </Link>

                {/* <Link href="/blog">
                  <Button
                    variant="ghost"
                    className="w-full border border-[var(--accent-primary)]
                 text-[var(--text-primary)] 
                 hover:text-[var(--accent-primary)] 
                 transition-colors"
                  >
                    Read My Thoughts
                  </Button>
                </Link> */}
              </div>
            </GlassCard>
          </motion.div>

          {/* Room Navigation Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16"
          >
            <p
              className="text-lg opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Each room holds a different story. Where would you like to go
              first?
            </p>
          </motion.div>
        </div>
      </div>
    </ParallaxContainer>
  );
}
