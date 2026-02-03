import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../ui/AnimatedSection";
import MotionGraph from "../ui/MotionGraph";
import GradientOrb from "../ui/GradientOrb";

const ClosingStatement = () => {
  return (
    <AnimatedSection className="section-spacing relative overflow-hidden">
      <MotionGraph variant="accent" className="opacity-20" />
      <GradientOrb 
        size="xl" 
        color="primary" 
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
        delay={0.3}
      />
      
      <div className="container-narrow relative z-10">
        <div className="divider-subtle mb-20" />

        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground"
          >
            <span className="h-px w-8 bg-primary/50" />
            Our promise
            <span className="h-px w-8 bg-primary/50" />
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-3xl font-medium leading-relaxed tracking-tight text-foreground md:text-4xl lg:text-5xl">
              We don't just build software.
              <br />
              <span className="mt-2 block text-muted-foreground">
                We build products that quietly improve how things work —
              </span>
            </p>
            
            <p className="mt-8 text-2xl text-primary md:text-3xl lg:text-4xl">
              beyond being reactive, beyond being fragile, beyond being temporary.
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-8 py-4 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              Learn more about us
              <svg 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Get in touch
              <svg 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ClosingStatement;
