"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import Card3D from "@/components/shared/Card3D";
import ParallaxContainer from "@/components/shared/ParallaxContainer";

const projects = [
  {
    id: 1,
    title: "Porfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    image: "/portfolio-site.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Resend"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 2,
    title: "Brief Generator App",
    description:
      "OpenBrief is an AI-powered brief generator for freelancers and creative professionals.",
    image: "/openbrief.png",
    tags: ["Next.js", "TypeScript", "Shadcn/ui", "API"],
    github: "https://github.com/Chukwuderah/openbrief",
    live: "https://openbrief.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "SyncUp - Smart Scheduling",
    description:
      "A modern wep app that simplifies scheduling and team collaboration.",
    image: "/syncup.png",
    tags: ["Next.js", "TypeScript", "Resend", "Supabase"],
    github: "https://github.com/Chukwuderah/SyncUp",
    live: "/",
    featured: false,
    upcoming: "true",
  },
  {
    id: 4,
    title: "Shade Maker",
    description:
      "A dynamic color gradient generator built with React and Framer Motion.",
    image: "/shade-maker.png",
    tags: ["React", "Tailwind", "Framer Motion", "TinyColor 2"],
    github: "https://github.com/Chukwuderah/ShadeMaker",
    live: "https://shade-maker-wine.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Banter Box",
    description:
      "AI-powered chat interface with dynamic response and voice input/output.",
    image: "/banter-box.png",
    tags: ["Next.js", "APIs", "webspeechAPI", "TypeScript"],
    github: "https://github.com/Chukwuderah/BanterBox",
    live: "https://banter-box-nu.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "Estate Management Platform",
    description:
      "Interactive learning platform with video courses and progress tracking.",
    image: "/estate-sync.png",
    tags: ["Next.js", "Node.js", "Database", "Auth"],
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
  },
];

const filters = ["All", "Featured", "Upcoming"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    if (activeFilter === "Upcoming") return project.upcoming;
    return true;
  });

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   setMousePosition({ x: e.clientX, y: e.clientY });
  // };

  return (
    <ParallaxContainer
      className="min-h-screen relative"
      //   onMouseMove={handleMouseMove}
    >
      {/* Gallery Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--bg-secondary)", opacity: 0.3 }}
      />

      {/* Moving 3D Spotlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-15"
            style={{
              background: `conic-gradient(from 0deg, var(--accent-primary)40 0%, transparent 30%, var(--accent-primary)20 60%, transparent 90%)`,
              filter: "blur(60px)",
              transform: "translateZ(20px)",
            }}
            animate={{
              x: [0, 200, 0, -200, 0],
              y: [0, -200, 200, 0, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 25 + i * 5,
              ease: "linear",
              repeat: Infinity,
              delay: i * 2,
            }}
            initial={{
              x: `${20 + i * 25}%`,
              y: `${20 + i * 20}%`,
            }}
          />
        ))}

        {/* Cursor-following spotlight */}
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle, var(--accent-primary)60 0%, transparent 70%)`,
            filter: "blur(40px)",
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
            transform: "translateZ(30px)",
          }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
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
              The Gallery
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              A curated collection of my finest work, where creativity meets
              functionality in perfect harmony.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter ? "text-white" : "hover:bg-white/10"
                  }`}
                  style={{
                    backgroundColor:
                      activeFilter === filter
                        ? "var(--accent-primary)"
                        : "transparent",
                    color:
                      activeFilter === filter ? "white" : "var(--text-primary)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card3D
                  intensity={hoveredProject === project.id ? 15 : 8}
                  glowColor="var(--accent-primary)"
                >
                  <GlassCard
                    className="overflow-hidden group cursor-pointer transition-all duration-500"
                    whileHover={{ y: -15, scale: 1.03 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Enhanced Spotlight Effect */}
                      {hoveredProject === project.id && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className="absolute w-32 h-32 rounded-full opacity-60"
                            style={{
                              background: `radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)`,
                              filter: "blur(20px)",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          />
                        </motion.div>
                      )}

                      {/* Enhanced Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <Card3D intensity={8}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass-3d rounded-full transition-colors"
                          >
                            <Github className="w-6 h-6 text-white" />
                          </a>
                        </Card3D>
                        <Card3D intensity={8}>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass-3d rounded-full transition-colors"
                          >
                            <ExternalLink className="w-6 h-6 text-white" />
                          </a>
                        </Card3D>
                      </motion.div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Card3D intensity={5}>
                            <div
                              className="px-3 py-1 rounded-full text-sm font-medium text-white glass"
                              style={{
                                backgroundColor: "var(--accent-primary)",
                              }}
                            >
                              Featured
                            </div>
                          </Card3D>
                        </div>
                      )}
                      {/* Upcoming Badge */}
                      {project.upcoming && (
                        <div className="absolute top-4 right-4">
                          <Card3D intensity={5}>
                            <div
                              className="px-3 py-1 rounded-full text-sm font-medium text-white glass"
                              style={{
                                backgroundColor: "var(--accent-primary)",
                              }}
                            >
                              Upcoming
                            </div>
                          </Card3D>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full glass"
                            style={{ color: "var(--accent-primary)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Card3D>
              </motion.div>
            ))}
          </div>

          {/* Gallery Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20"
          >
            <Card3D intensity={6} glowColor="var(--accent-primary)">
              <GlassCard className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {projects.length}+
                    </div>
                    <div style={{ color: "var(--text-secondary)" }}>
                      Projects
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      50+
                    </div>
                    <div style={{ color: "var(--text-secondary)" }}>
                      Components
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      2+
                    </div>
                    <div style={{ color: "var(--text-secondary)" }}>
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      8+
                    </div>
                    <div style={{ color: "var(--text-secondary)" }}>
                      Technologies
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </ParallaxContainer>
  );
}
