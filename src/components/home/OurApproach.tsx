import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

const pillars = [
  {
    title: "Product first",
    description:
      "We don't build features for attention. We build complete products that solve real problems and stand on their own.",
  },
  {
    title: "Simplicity over noise",
    description:
      "Complexity creates failure. We design everything to be clear, intentional, and easy to understand.",
  },
  {
    title: "Automation over reaction",
    description:
      "Problems should be prevented, not chased. Our products focus on early detection and automatic resolution.",
  },
];

const OurApproach = () => {
  return (
    <AnimatedSection className="section-spacing">
      <div className="container-narrow">
        <div className="divider-subtle mb-16" />

        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Our approach
        </span>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          How we think.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="mb-4 h-px w-12 bg-primary/50 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
              <h3 className="mb-3 text-lg font-medium text-foreground">
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OurApproach;
