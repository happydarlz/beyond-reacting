import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import heroAbstract from "@/assets/hero-abstract.png";

const examples = [
  {
    title: "Automated Error Recovery",
    description: "A logistics platform where the system automatically detects failed deliveries, reroutes packages, and notifies customers—without human intervention.",
    category: "Logistics",
  },
  {
    title: "Self-Healing Infrastructure",
    description: "Cloud infrastructure that monitors itself, scales automatically during peak loads, and recovers from failures before users notice any disruption.",
    category: "Cloud",
  },
  {
    title: "Predictive Maintenance",
    description: "Manufacturing software that predicts equipment failures before they happen, scheduling maintenance during optimal windows to minimize downtime.",
    category: "Manufacturing",
  },
];

const Examples = () => {
  return (
    <AnimatedSection className="section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        <img
          src={heroAbstract}
          alt=""
          className="h-96 w-96 object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="container-narrow relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Real-World Applications
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
        >
          What Proactive Software Looks Like
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Here's how our philosophy translates into real products that solve real problems—quietly, reliably, and effectively.
        </motion.p>

        <div className="mt-16 space-y-6">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {example.category}
                  </span>
                  <h3 className="mt-4 text-xl font-medium text-foreground md:text-2xl">
                    {example.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Examples;
