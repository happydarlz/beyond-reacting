import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import MotionGraph from "../ui/MotionGraph";

const BeyondBeing = () => {
  return (
    <AnimatedSection className="section-spacing relative overflow-hidden">
      <MotionGraph variant="accent" className="opacity-25" />
      
      <div className="container-narrow relative z-10">
        <div className="divider-subtle mb-16" />

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-primary/80"
          >
            Our philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
          >
            Beyond Being
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            "Beyond Being" is our philosophy. It means moving past software that 
            simply exists or reacts.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            We build products that anticipate, protect, and support — quietly 
            improving how systems work without demanding constant attention.
          </motion.p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BeyondBeing;
