import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

const pillars = [
  {
    title: "Focus over features",
    description:
      "We believe fewer, well-built products create more value than endless options.",
  },
  {
    title: "Prevention over reaction",
    description:
      "The best systems avoid problems instead of constantly responding to them.",
  },
  {
    title: "Clarity over complexity",
    description:
      "If something needs explaining too often, it's not finished.",
  },
];

const WhatGuidesUs = () => {
  return (
    <AnimatedSection className="section-spacing">
      <div className="container-narrow">
        <div className="divider-subtle mb-16" />

        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Our values
        </span>
        <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          What guides our work.
        </h2>

        <div className="mt-20 space-y-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-border/30 py-12 first:border-t-0"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-16">
                <span className="text-sm font-medium text-primary/70">
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                    {pillar.description}
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

export default WhatGuidesUs;
