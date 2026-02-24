import { motion } from "framer-motion";
import GlassCard from "@/components/shared/GlassCard";

const principles = [
  {
    title: "Performance is Product Integrity",
    description:
      "Speed isn't an optimization task, it's a core feature. I design systems with intentional rendering strategies, efficient state management, and measurable performance budgets from day one.",
  },
  {
    title: "Accessibility is Non-Negotiable",
    description:
      "Inclusive design isn't a checkbox. I build with semantic structure, keyboard navigation, screen reader support, and WCAG-conscious color systems to ensure every user can fully engage.",
  },
  {
    title: "Architecture Enables Scale",
    description:
      "Clean abstractions and predictable structure outlive hacks. I prioritize modular components, separation of concerns, and maintainable patterns that support long-term growth.",
  },
  {
    title: "Design is a Structured System",
    description:
      "Consistency builds trust. I treat design as an ecosystem, reusable components, scalable tokens, motion guidelines, and cohesive UI logic that create seamless user experiences.",
  },
];

export default function CoreDirectives() {
  return (
    <div className="space-y-12">
      <h3 className="text-2xl sm:text-4xl font-semibold text-center sr-only">
        Core Directives
      </h3>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {principles.map((item) => (
          <PrincipleCard key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

function PrincipleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="backdrop-blur-xl"
    >
      <GlassCard className="glass-card py-6 px-4 md:px-6 h-full">
        <h4 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h4>
        <p
          className="text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      </GlassCard>
    </motion.div>
  );
}
