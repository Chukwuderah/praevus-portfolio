"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import FloatingOrb from "@/components/shared/FloatingOrb";

const timelineEvents = [
  {
    year: "2025 - Date",
    title: "Frontend Developer",
    company: "Estate Sync",
    description:
      "Leading frontend architecture and development for a real estate SaaS platform",
    icon: Award,
  },
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Rooster Africa",
    description: "Built responsive web applications using React and Next.js",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Junior Developer",
    company: "ThoughtOut NG",
    description: "Started my journey in web development with modern frameworks",
    icon: Calendar,
  },
  {
    year: "2023",
    title: "Computer Science",
    company: "Lagos State University",
    description: "Bachelor of Science in Computer Science",
    icon: MapPin,
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Figma",
  "Framer Motion",
  "Version Control",
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
                  className="space-y-4 text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <p>
                    Welcome to my digital library! I&apos;m a passionate
                    frontend developer who believes in creating beautiful,
                    accessible, and performant web experiences.
                  </p>
                  <p>
                    With over 2 years of experience, I specialize in React,
                    Next.js, and modern CSS frameworks. I love turning complex
                    problems into simple, elegant solutions.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    design trends, contributing to open-source projects, or
                    sharing knowledge with the developer community.
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

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2
                className="text-3xl font-bold mb-12 text-center"
                style={{ color: "var(--text-primary)" }}
              >
                My Journey
              </h2>

              <div className="relative">
                {/* Timeline Line */}
                <div
                  className="absolute left-8 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                />

                <div className="space-y-12">
                  {timelineEvents.map((event, index) => {
                    const Icon = event.icon;

                    return (
                      <motion.div
                        key={event.year}
                        className="relative flex items-start space-x-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                      >
                        {/* Timeline Icon */}
                        <div
                          className="flex items-center justify-center w-16 h-16 rounded-full glass-strong z-10"
                          style={{ backgroundColor: "var(--accent-primary)" }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3
                              className="text-xl font-bold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {event.title}
                            </h3>
                            <span
                              className="text-sm font-medium px-3 py-1 rounded-full glass-strong"
                              style={{ color: "var(--accent-primary)" }}
                            >
                              {event.year}
                            </span>
                          </div>
                          <p
                            className="text-lg font-medium mb-2"
                            style={{ color: "var(--accent-primary)" }}
                          >
                            {event.company}
                          </p>
                          <p
                            className="text-base"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>
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
