import { motion } from "framer-motion";
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

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const iconVariants = {
  hidden: {
    scale: 0.5,
    rotate: -20,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function JourneyTimeline({
  timelineEvents,
}: JourneyTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <GlassCard className="py-8 px-4 md:p-12">
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
                  key={`${event.year}-${event.title}`}
                  className="relative flex items-start space-x-6"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full glass-strong z-10"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      delay: index * 0.15 + 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 14,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 pb-8"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{
                      delay: index * 0.15 + 0.15,
                      duration: 0.6,
                      ease: "easeOut",
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
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
