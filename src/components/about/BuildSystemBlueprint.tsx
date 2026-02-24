import { motion } from "framer-motion";
import GlassCard from "@/components/shared/GlassCard";
import { ArrowRight } from "lucide-react";

const blueprintSteps = [
  "Ideation",
  "Research",
  "Architecture",
  "Build",
  "Optimize",
  "Ship",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const nodeVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function BuildSystemBlueprint() {
  return (
    <div className="space-y-16">
      <motion.h3
        className="text-2xl sm:text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Build System Blueprint
      </motion.h3>

      <motion.div
        className="relative flex flex-wrap justify-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {blueprintSteps.map((step, index) => (
          <BlueprintNode
            key={step}
            label={step}
            isLast={index === blueprintSteps.length - 1}
          />
        ))}
      </motion.div>
    </div>
  );
}

function BlueprintNode({ label, isLast }: { label: string; isLast: boolean }) {
  return (
    <motion.div
      variants={nodeVariants}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-6 relative"
    >
      {/* Floating Card */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <GlassCard className="glass-card py-4 px-6 sm:rounded-full transition-all duration-300">
          <span
            className="text-sm sm:text-base font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            {label}
          </span>
        </GlassCard>
      </motion.div>

      {/* Animated Arrow */}
      {!isLast && (
        <motion.div
          animate={{
            x: [0, 6, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      )}
    </motion.div>
  );
}
