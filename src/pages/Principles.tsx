import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import GradientOrb from "../components/ui/GradientOrb";

const principles = [
  {
    number: "01",
    title: "Clarity over complexity",
    description: "If something is hard to understand, it's not finished.",
    detail: "We obsess over simplicity until the solution feels obvious. Complexity is a sign of incomplete thinking.",
  },
  {
    number: "02",
    title: "Prevention over repair",
    description: "The best solution is the one that avoids the problem entirely.",
    detail: "We invest in systems that anticipate and prevent issues before they impact users.",
  },
  {
    number: "03",
    title: "Quiet reliability",
    description: "Technology should work without constant attention.",
    detail: "Our products earn trust by performing consistently in the background, not by demanding oversight.",
  },
  {
    number: "04",
    title: "Long-term value",
    description: "We build products meant to last, not chase trends.",
    detail: "Every decision considers the 10-year impact, not just the next quarter.",
  },
];

const Principles = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="section-spacing relative overflow-hidden">
          <GradientOrb 
            size="xl" 
            color="primary" 
            className="-right-40 top-40" 
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
              Guiding values
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
            >
              Our
              <br />
              <span className="text-primary">principles.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-xl text-muted-foreground"
            >
              The non-negotiable values that shape every product we build and every decision we make.
            </motion.p>

            <div className="mt-24 space-y-0">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group border-t border-border/30 py-16 first:border-t-0"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-1">
                      <span className="text-sm font-medium text-primary">
                        {principle.number}
                      </span>
                    </div>
                    
                    <div className="lg:col-span-5">
                      <h2 className="text-3xl font-medium text-foreground transition-colors group-hover:text-primary md:text-4xl">
                        {principle.title}
                      </h2>
                    </div>
                    
                    <div className="lg:col-span-6">
                      <p className="text-xl text-muted-foreground">
                        {principle.description}
                      </p>
                      <p className="mt-4 text-muted-foreground/70">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress line */}
                  <div className="mt-8 h-px w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Principles;
