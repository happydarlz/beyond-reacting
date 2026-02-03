import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import MotionGraph from "../components/ui/MotionGraph";
import PageTransition from "../components/ui/PageTransition";

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
                  past basic functionality. It is the foundation upon which Finitix 
                  builds every product and makes every decision.
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

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  In a world saturated with software that demands attention, 
                  Finitix takes a different path. We believe the best technology 
                  is invisible — working silently in the background, preventing 
                  issues before they arise, and requiring nothing from the people 
                  it serves.
                </p>
              </motion.div>

              <div className="divider-subtle my-20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  The meaning
                </span>
                <div className="mt-8 space-y-12">
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Beyond Existing</h3>
                    <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                      Software should not merely exist — it should actively contribute 
                      value. At Finitix, we refuse to build products that just occupy 
                      space. Every tool we create must justify its presence through 
                      measurable impact.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Beyond Reacting</h3>
                    <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                      Reactive systems are inherently fragile. They wait for problems 
                      to occur before responding. Finitix builds proactive technology 
                      that anticipates failure points and addresses them before they 
                      become issues.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Beyond Complexity</h3>
                    <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                      Complexity is the enemy of reliability. We strip away everything 
                      unnecessary, leaving only what truly matters. The result is 
                      software that is easier to use, easier to maintain, and far 
                      less likely to fail.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="divider-subtle my-20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <p className="text-2xl leading-relaxed text-foreground md:text-3xl">
                  This philosophy isn't just words — it's the lens through which 
                  we evaluate every decision, every feature, and every line of code 
                  at <span className="text-primary">Finitix</span>.
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
