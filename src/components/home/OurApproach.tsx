import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

const pillars = [
  {
    number: "01",
    title: "Product first",
    description:
      "We don't build features for attention. We build complete products that solve real problems and stand on their own.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Simplicity over noise",
    description:
      "Complexity creates failure. We design everything to be clear, intentional, and easy to understand.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Automation over reaction",
    description:
      "Problems should be prevented, not chased. Our products focus on early detection and automatic resolution.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
];

const OurApproach = () => {
  return (
    <AnimatedSection className="section-spacing relative">
      <div className="container-narrow">
        <div className="divider-subtle mb-20" />

        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-px w-8 bg-primary/50" />
              Our approach
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-medium tracking-tight md:text-5xl"
            >
              How we think.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-muted-foreground lg:text-right"
          >
            Three core pillars that guide every decision we make and every product we build.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">
                    {pillar.number}
                  </span>
                  <div className="text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                  {pillar.title}
                </h3>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                {/* Bottom line indicator */}
                <div className="mt-8 h-px w-12 bg-border/50 transition-all duration-500 group-hover:w-full group-hover:bg-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OurApproach;
