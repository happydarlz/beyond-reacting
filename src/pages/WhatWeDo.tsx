import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import AnimatedSection from "../components/ui/AnimatedSection";

const WhatWeDo = () => {
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
                Our work
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              >
                What we do
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-2xl"
              >
                <p className="text-xl leading-relaxed text-muted-foreground">
                  We design and build focused software products that help systems 
                  stay safe, stable, and dependable. Our work centers on prevention, 
                  automation, and clarity — turning fragile setups into strong 
                  foundations.
                </p>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  Every product we create is built to be essential, easy to use, 
                  and valuable over the long term.
                </p>
              </motion.div>

              <div className="divider-subtle my-24" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid gap-0 md:grid-cols-3"
              >
                {[
                  { label: "Prevention", value: "First" },
                  { label: "Automation", value: "Always" },
                  { label: "Clarity", value: "Core" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l border-border/30 py-8 pl-8 first:border-l-0 first:pl-0"
                  >
                    <span className="text-4xl font-medium text-primary">{item.value}</span>
                    <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default WhatWeDo;
