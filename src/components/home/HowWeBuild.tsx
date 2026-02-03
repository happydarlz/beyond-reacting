import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

const buildPrinciples = [
  "Built with restraint",
  "Designed for reliability",
  "Tested for real-world use",
  "Maintained with long-term care",
];

const HowWeBuild = () => {
  return (
    <AnimatedSection className="section-spacing">
      <div className="container-narrow">
        <div className="divider-subtle mb-16" />

        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Our craft
        </span>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Designed to last.
        </h2>

        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {buildPrinciples.map((principle, index) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-l border-border/30 py-8 pl-6 first:border-l-0 md:first:border-l"
            >
              <div className="mb-4 h-px w-8 bg-primary/40 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
              <p className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                {principle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowWeBuild;
