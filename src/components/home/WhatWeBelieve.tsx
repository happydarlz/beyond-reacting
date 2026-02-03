import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import GradientOrb from "../ui/GradientOrb";

const WhatWeBelieve = () => {
  return (
    <AnimatedSection className="section-spacing relative overflow-hidden">
      <GradientOrb 
        size="lg" 
        color="secondary" 
        className="-right-32 top-0" 
        delay={0.3}
      />
      
      <div className="container-narrow relative z-10">
        <div className="divider-subtle mb-20" />
        
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-px w-8 bg-primary/50" />
              What we believe
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            >
              Built with
              <br />
              <span className="text-primary">purpose.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl leading-relaxed text-muted-foreground md:text-2xl"
            >
              Technology should not demand constant attention. It should be 
              dependable, clear, and quietly effective.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground/80"
            >
              We believe the best products are the ones you don't have to 
              think about — they simply work, reduce risk, and make everyday 
              systems stronger.
            </motion.p>

            {/* Value indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-border/50 pt-8"
            >
              {[
                { label: "Dependable", sublabel: "Always on" },
                { label: "Clear", sublabel: "No confusion" },
                { label: "Effective", sublabel: "Real results" },
              ].map((item, index) => (
                <div key={item.label} className="group">
                  <div className="mb-2 h-px w-full bg-border/30 transition-colors group-hover:bg-primary/50" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground/60">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhatWeBelieve;
