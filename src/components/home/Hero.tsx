import { motion } from "framer-motion";
import MotionGraph from "../ui/MotionGraph";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <MotionGraph variant="hero" className="opacity-40" />
      
      <div className="container-narrow relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Beyond being reactive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            We build focused, product-first software that works quietly in the background, 
            fixes problems automatically, and creates long-term value for people and businesses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-base text-muted-foreground/70"
          >
            Simple by design. Reliable by default. Built to last.
          </motion.p>
        </div>
      </div>

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
