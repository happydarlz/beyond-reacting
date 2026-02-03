import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import MotionGraph from "../components/ui/MotionGraph";
import GradientOrb from "../components/ui/GradientOrb";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="section-spacing relative overflow-hidden">
          <MotionGraph variant="subtle" className="opacity-30" />
          <GradientOrb 
            size="xl" 
            color="primary" 
            className="left-1/2 top-1/4 -translate-x-1/2" 
            delay={0.3}
          />
          
          <div className="container-narrow relative z-10">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-px w-8 bg-primary/50" />
              Philosophy
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
            >
              Beyond
              <br />
              <span className="text-primary">Being.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-20 max-w-3xl"
            >
              <p className="text-2xl leading-relaxed text-muted-foreground md:text-3xl">
                "Beyond Being" represents our belief that software should move 
                past basic functionality.
              </p>
              
              <div className="mt-16 space-y-8">
                {["Beyond existing.", "Beyond reacting.", "Beyond complexity."].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group flex items-center gap-6"
                  >
                    <div className="h-px w-12 bg-primary/30 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
                    <p className="text-2xl font-medium text-foreground md:text-3xl">{text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-16 text-xl leading-relaxed text-muted-foreground"
              >
                We design products that anticipate problems, act with intention, 
                and stay out of the way once their job is done. This philosophy 
                guides how we design, build, and refine everything we create.
              </motion.p>
            </motion.div>

            {/* Philosophy pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24 grid gap-8 md:grid-cols-2"
            >
              {[
                { 
                  title: "Anticipate, don't react", 
                  description: "The best solutions prevent problems before they occur. We build systems that see ahead." 
                },
                { 
                  title: "Intent over accident", 
                  description: "Every feature, every line of code exists for a reason. Nothing is arbitrary." 
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/50 bg-card/30 p-10 transition-all duration-300 hover:border-primary/30"
                >
                  <span className="mb-4 inline-block text-xs font-medium text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mb-4 text-2xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Philosophy;
