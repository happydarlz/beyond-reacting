import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import AnimatedSection from "../components/ui/AnimatedSection";
import MotionGraph from "../components/ui/MotionGraph";

const Philosophy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32">
          <AnimatedSection className="section-spacing relative overflow-hidden">
            <MotionGraph variant="subtle" className="opacity-30" />
            
            <div className="container-narrow relative z-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-sm uppercase tracking-widest text-primary/80"
              >
                Philosophy
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
              >
                Beyond Being
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16 max-w-3xl"
              >
                <p className="text-2xl leading-relaxed text-muted-foreground md:text-3xl">
                  "Beyond Being" represents our belief that software should move 
                  past basic functionality.
                </p>
                
                <div className="mt-16 space-y-6">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl text-foreground"
                  >
                    Beyond existing.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl text-foreground"
                  >
                    Beyond reacting.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl text-foreground"
                  >
                    Beyond complexity.
                  </motion.p>
                </div>

                <p className="mt-16 text-lg leading-relaxed text-muted-foreground">
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
    </PageTransition>
  );
};

export default Philosophy;
