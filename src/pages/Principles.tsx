import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import AnimatedSection from "../components/ui/AnimatedSection";

const principles = [
  {
    number: "01",
    title: "Clarity over complexity",
    description: "If something is hard to understand, it's not finished.",
  },
  {
    number: "02",
    title: "Prevention over repair",
    description: "The best solution is the one that avoids the problem entirely.",
  },
  {
    number: "03",
    title: "Quiet reliability",
    description: "Technology should work without constant attention.",
  },
  {
    number: "04",
    title: "Long-term value",
    description: "We build products meant to last, not chase trends.",
  },
];

const Principles = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32">
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-sm uppercase tracking-widest text-muted-foreground"
              >
                Guiding values
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              >
                Our principles
              </motion.h1>

              <div className="mt-24 space-y-0">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group border-t border-border/30 py-16 first:border-t-0"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16">
                      <span className="text-sm font-medium text-primary/70">
                        {principle.number}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-3xl font-medium text-foreground transition-colors group-hover:text-primary md:text-4xl">
                          {principle.title}
                        </h2>
                        <p className="mt-6 max-w-xl text-xl text-muted-foreground">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Principles;
