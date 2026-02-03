import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import PageTransition from "../components/ui/PageTransition";

const About = () => {
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
                About us
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl"
              >
                About us
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-2xl"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Finitix is a product-based software company focused on building 
                  practical, long-lasting technology. We create tools that remove 
                  complexity, reduce human error, and make systems more reliable 
                  without adding noise or unnecessary control.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Our work is guided by clarity, restraint, and a deep respect for 
                  the people who rely on technology every day. We believe strong 
                  products don't shout — they earn trust by working consistently, 
                  silently, and well.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Founded on the principle that technology should serve without 
                  demanding attention, Finitix operates at the intersection of 
                  engineering excellence and thoughtful design. Every decision we 
                  make is measured against a simple question: does this make the 
                  system more dependable?
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We are a deliberately small team of engineers, designers, and 
                  problem-solvers who share a common belief — that the most 
                  powerful technology is the kind you never have to think about.
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
                  Our vision
                </span>
                <p className="mt-6 max-w-2xl text-2xl leading-relaxed text-foreground md:text-3xl">
                  A future where technology protects itself, corrects itself, and 
                  supports people without constant oversight —{" "}
                  <span className="text-primary">beyond being reactive</span>, and 
                  beyond being fragile.
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
                  Our commitment
                </span>
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  {[
                    { title: "Integrity", desc: "We build what we believe in and stand behind every product we create." },
                    { title: "Excellence", desc: "We hold ourselves to the highest standards in design, engineering, and execution." },
                    { title: "Longevity", desc: "We create technology meant to serve for years, not just until the next update cycle." },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-l border-border/50 pl-6"
                    >
                      <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
