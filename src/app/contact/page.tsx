"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import FloatingOrb from "@/components/shared/FloatingOrb";
import Card3D from "@/components/shared/Card3D";
import ParallaxContainer from "@/components/shared/ParallaxContainer";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

const socialLinks = [
  { icon: Github, href: "https://github.com/Chukwuderah/", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pleasant-chukwuderah-327149183/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/Pleasant_Dev", label: "Twitter" },
  { icon: Mail, href: "mailto:pleasantchukwu@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+2349131925112", label: "Phone" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "pleasantchukwu@gmail.com" },
  { icon: Phone, label: "Phone", value: "+2349131925112" },
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fireflies, setFireflies] = useState<
    { left: string; top: string; delay: number }[]
  >([]);

  // Generate random animation positions *only on client*
  useEffect(() => {
    const generatedFireflies = Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));

    setFireflies(generatedFireflies);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // live field-level validation
    const fieldSchema = contactSchema.shape[name as keyof typeof formData];
    if (fieldSchema) {
      const result = fieldSchema.safeParse(value);
      setErrors((prev) => ({
        ...prev,
        [name]: result.success ? "" : result.error.issues[0].message,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(newErrors);
      toast.error("Please fix the errors before submitting ❌");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message Sent", {
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", {
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid = contactSchema.safeParse(formData).success;

  return (
    <ParallaxContainer className="min-h-screen relative overflow-hidden perspective">
      {/* Night Sky Background */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(180deg,var(--russian-violet)_0%,var(--byzantium)_50%,var(--russian-violet)_100%)]" />

      {/* Animated Fireflies/Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {fireflies.map((f, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full opacity-70"
            style={{ left: f.left, top: f.top }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: f.delay,
            }}
          />
        ))}

        {/* Additional Twinkling Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <FloatingOrb
              key={i}
              size={i % 5 === 0 ? "md" : "sm"}
              className={`absolute twinkle`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animation="none"
              delay={Math.random() * 3}
              color={
                i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#87CEEB" : "#FFA500"
              }
            />
          ))}
        </div>

        {/* Larger floating elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
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
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              The Observatory
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Under the starlit sky, let&apos;s begin a conversation that could
              spark something extraordinary. Reach out and let&apos;s create
              together.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Contact Form - Glass Greenhouse */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Card3D intensity={6} glowColor="var(--accent-primary)">
                <GlassCard className="py-8 px-4 md:px-5 lg:p-10" strong>
                  <h2
                    className="text-3xl font-bold mb-8"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Name
                        </label>
                        <Card3D intensity={5}>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg glass border-0 focus:outline-none focus:ring-2 transition-all"
                            style={{
                              color: "var(--text-primary)",
                            }}
                            placeholder="Your name"
                          />
                        </Card3D>
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Email
                        </label>
                        <Card3D intensity={5}>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg glass border-0 focus:outline-none focus:ring-2 transition-all"
                            style={{
                              color: "var(--text-primary)",
                            }}
                            placeholder="your@email.com"
                          />
                        </Card3D>
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Subject
                      </label>
                      <Card3D intensity={5}>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg glass border-0 focus:outline-none focus:ring-2 transition-all"
                          style={{
                            color: "var(--text-primary)",
                          }}
                          placeholder="What's this about?"
                        />
                      </Card3D>
                      {errors.subject && (
                        <p className="text-red-500 text-sm">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Message
                      </label>
                      <Card3D intensity={5}>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg glass border-0 focus:outline-none focus:ring-2 transition-all resize-none"
                          style={{
                            color: "var(--text-primary)",
                          }}
                          placeholder="Tell me about your project or just say hello..."
                        />
                      </Card3D>
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <Card3D intensity={8}>
                      <motion.button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                          !isValid || isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:shadow-2xl"
                        }`}
                        style={{ backgroundColor: "var(--accent-primary)" }}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </Card3D>
                  </form>
                </GlassCard>
              </Card3D>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card3D intensity={8} glowColor="var(--accent-primary)">
                <GlassCard className="py-8 px-4 md:p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;

                      return (
                        <motion.div
                          key={info.label}
                          className="flex items-center space-x-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            duration: 0.6,
                          }}
                        >
                          <Card3D intensity={10}>
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center"
                              style={{
                                backgroundColor: "var(--accent-primary)",
                              }}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </Card3D>
                          <div className="max-w-full text-wrap">
                            <p
                              className="font-medium"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {info.label}
                            </p>
                            <p
                              className="text-sm text-wrap"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {info.value}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </GlassCard>
              </Card3D>

              {/* Social Links */}
              <Card3D intensity={8} glowColor="var(--accent-primary)">
                <GlassCard className="py-8 px-4 md:p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Connect Online
                  </h3>

                  <div className="flex flex-wrap items-center justify-start space-y-2 space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;

                      return (
                        <Card3D key={social.label} intensity={12}>
                          <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 1 + index * 0.1,
                              duration: 0.6,
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon
                              className="w-6 h-6"
                              style={{ color: "var(--accent-primary)" }}
                            />
                          </motion.a>
                        </Card3D>
                      );
                    })}
                  </div>

                  <p
                    className="text-sm mt-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Follow me for updates on my latest projects and thoughts on
                    web development.
                  </p>
                </GlassCard>
              </Card3D>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Card3D intensity={6} glowColor="#10B981">
                  <GlassCard className="py-8 px-4 md:p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span
                        className="font-medium text-nowrap"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Available for new projects
                      </span>
                    </div>
                    <p
                      className="text-sm mt-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Currently accepting freelance and contract work.
                      Let&apos;s build something amazing together!
                    </p>
                  </GlassCard>
                </Card3D>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8 mt-10 md:mt-16 text-center"
          >
            {/* Contact Details */}
            <Card3D intensity={8} glowColor="var(--accent-primary)">
              <GlassCard className="py-8 px-4 md:px-8 max-w-2xl mx-auto">
                <h3
                  className="text-lg sm:text-2xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Let&apos;s Build Something Amazing
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Whether you have a project in mind, want to collaborate, or
                  just want to chat about technology and innovation, I&apos;d
                  love to hear from you. Every great journey begins with a
                  single conversation.
                </p>
              </GlassCard>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </ParallaxContainer>
  );
}
