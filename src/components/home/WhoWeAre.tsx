import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import MotionGraph from "../ui/MotionGraph";

const WhoWeAre = () => {
  return (
    <AnimatedSection className="section-spacing relative overflow-hidden">
      <MotionGraph variant="subtle" className="opacity-20" />
      
      <div className="container-narrow relative z-10">
        <div className="divider-subtle mb-16" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Who we are
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
            >
              A product company at our core.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              We are a product-based software company focused on building essential 
              tools that solve real problems without adding complexity.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every product we create is designed to be dependable, intentional, and 
              quietly effective — built for people who value clarity and long-term reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhoWeAre;
