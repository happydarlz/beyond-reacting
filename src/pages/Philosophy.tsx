import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import MotionGraph from "../components/ui/MotionGraph";
import ParticleField from "../components/ui/ParticleField";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="section-spacing relative overflow-hidden">
          <MotionGraph variant="subtle" className="opacity-30" />
          <ParticleField variant="sparse" particleCount={10} className="opacity-25" />
          
          <div className="container-narrow relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-widest text-muted-foreground"
            >
              Philosophy
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            >
              Beyond Being
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 max-w-2xl"
            >
              <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                "Beyond Being" represents our belief that software should move 
                past basic functionality.
              </p>
              
              <div className="mt-12 space-y-4">
                <p className="text-lg text-foreground">Beyond existing.</p>
                <p className="text-lg text-foreground">Beyond reacting.</p>
                <p className="text-lg text-foreground">Beyond complexity.</p>
              </div>

              <p className="mt-12 text-lg leading-relaxed text-muted-foreground">
                We design products that anticipate problems, act with intention, 
                and stay out of the way once their job is done. This philosophy 
                guides how we design, build, and refine everything we create.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Philosophy;
