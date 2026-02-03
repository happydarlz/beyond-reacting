import { motion } from "framer-motion";
import MotionGraph from "../ui/MotionGraph";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <MotionGraph variant="hero" className="opacity-40" />
      
      <div className="container-narrow relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            Beyond being reactive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            We build focused, product-first software that works quietly in the background, 
            fixes problems automatically, and creates long-term value.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 text-base tracking-wide text-muted-foreground/60"
          >
            Simple by design. Reliable by default. Built to last.
          </motion.p>
        </div>
      </div>

      {/* Divider line below hero */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
