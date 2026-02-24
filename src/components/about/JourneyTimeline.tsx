import { motion, type Variants } from "framer-motion";
import GlassCard from "@/components/shared/GlassCard";

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface JourneyTimelineProps {
  timelineEvents: TimelineEvent[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function JourneyTimeline({
  timelineEvents,
}: JourneyTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <GlassCard className="py-8 px-4 md:p-12 relative overflow-hidden">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: "var(--text-primary)" }}
        >
          My Journey
        </h2>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5"
            style={{ backgroundColor: "var(--accent-primary)" }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {timelineEvents.map((event) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={`${event.year}-${event.title}`}
                  className="relative flex items-start space-x-6"
                  variants={itemVariants}
                >
                  {/* Glowing Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full z-10 relative"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                    }}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        "0 0 0px var(--accent-primary)",
                        "0 0 20px var(--accent-primary)",
                        "0 0 0px var(--accent-primary)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 pb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {event.title}
                      </h3>
                      <span
                        className="text-sm font-medium w-fit px-3 py-1 rounded-full glass-strong"
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
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
