import { motion } from "framer-motion";
import MotionGraph from "../ui/MotionGraph";
import GradientOrb from "../ui/GradientOrb";
import GridPattern from "../ui/GridPattern";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background elements */}
      <GridPattern className="opacity-50" />
      <GradientOrb 
        size="xl" 
        color="primary" 
        className="-right-40 -top-40" 
        delay={0.5}
      />
      <GradientOrb 
        size="lg" 
        color="secondary" 
        className="-bottom-20 -left-20" 
        delay={0.8}
      />
      <MotionGraph variant="hero" className="opacity-30" />
      
      <div className="container-narrow relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Brand badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Building the future of autonomous systems
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Beyond being
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              reactive.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl"
          >
            We build focused, product-first software that works quietly in the background, 
            fixes problems automatically, and creates long-term value for people and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-6 text-sm text-muted-foreground/70">
              <span className="flex items-center gap-2">
                <span className="h-px w-4 bg-primary/50" />
                Simple by design
              </span>
              <span className="flex items-center gap-2">
                <span className="h-px w-4 bg-primary/50" />
                Reliable by default
              </span>
              <span className="flex items-center gap-2">
                <span className="h-px w-4 bg-primary/50" />
                Built to last
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent"
          />
        </div>
      </motion.div>

      {/* Side accent line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "40%" }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute right-0 top-1/2 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
      />
    </section>
  );
};

export default Hero;
