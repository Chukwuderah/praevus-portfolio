"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/shared/GlassCard";
import FloatingOrb from "@/components/shared/FloatingOrb";
import CoreDirectives from "@/components/about/CoreDirectives";
import BuildSystemBlueprint from "@/components/about/BuildSystemBlueprint";

const skills = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Figma",
  "Framer Motion",
  "Version Control",
  "Performance Optimization",
  "Accessibility Best Practices",
];

export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Library Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg, var(--russian-violet) 0%, var(--byzantium) 100%)",
        }}
      />

      {/* Floating Lanterns */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <FloatingOrb
            key={i}
            size={i % 3 === 0 ? "lg" : "md"}
            className={`absolute ${
              i === 0
                ? "top-32 left-10"
                : i === 1
                  ? "top-20 right-20"
                  : i === 2
                    ? "top-1/2 left-16"
                    : i === 3
                      ? "bottom-1/3 right-12"
                      : i === 4
                        ? "bottom-40 left-1/3"
                        : "top-2/3 right-1/4"
            }`}
            animation="twinkle"
            delay={i * 0.5}
            color="var(--accent-primary)"
          />
        ))}
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              The Library
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A collection of experiences, knowledge, and stories that shaped my
              journey as a creative developer.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <GlassCard className="p-8 h-full">
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  About Me
                </h2>
                <div
                  className="space-y-4 text-lg text-justify sm:text-left"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <p>
                    I am Pleasant Chukwuderah (Suavis),  an experienced
                    frontend developer who believes in creating beautiful,
                    accessible, and performant software experiences be it web or mobile.
                  </p>
                  <p>
                    With 3 years of experience, I specialize in React, Next.js,
                    and modern CSS frameworks, with proven track record of creating scalable and maintainable applications. I love turning complex problems
                    into simple, elegant solutions.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    design trends, contributing to open-source projects,
                    sharing knowledge with the developer community, or watching cartoons.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <GlassCard className="p-8 h-full">
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Skills & Expertise
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="glass rounded-lg p-3 text-center hover:bg-white/10 transition-colors"
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Operating System: Suavis
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              How I think. How I build. Where I&apos;m headed.
            </p>
          </motion.div>

          <div className="space-y-16">
            <CoreDirectives />
            <BuildSystemBlueprint />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <GlassCard className="glass-card py-8 px-4 md:px-8 max-w-2xl mx-auto">
              <h2 className="mansion-heading text-2xl font-bold mb-4">
                Philosophy
              </h2>
              <p
                style={{ color: "var(--text-secondary)" }}
                className="leading-relaxed"
              >
                I believe that great software is not just about clean code and
                elegant algorithms, it&apos;s about creating experiences that
                feel magical, intuitive, and genuinely helpful to the people who
                use them. Every line of code is a brushstroke in a larger
                masterpiece.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
