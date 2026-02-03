import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import GradientOrb from "../components/ui/GradientOrb";
import GridPattern from "../components/ui/GridPattern";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="section-spacing relative overflow-hidden">
          <GridPattern className="opacity-30" />
          <GradientOrb 
            size="xl" 
            color="primary" 
            className="-right-40 top-20" 
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
              About us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
            >
              Building technology
              <br />
              <span className="text-primary">that lasts.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Finitix is a product-based software company focused on building 
                  practical, long-lasting technology. We create tools that remove 
                  complexity, reduce human error, and make systems more reliable 
                  without adding noise or unnecessary control.
                </p>
              </div>
              
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our work is guided by clarity, restraint, and a deep respect for 
                  the people who rely on technology every day. We believe strong 
                  products don't shout — they earn trust by working consistently, 
                  silently, and well.
                </p>
              </div>
            </motion.div>

            <div className="divider-subtle my-24" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground">
                    <span className="h-px w-8 bg-primary/50" />
                    Our vision
                  </span>
                </div>
                
                <div className="lg:col-span-8">
                  <p className="text-3xl font-medium leading-relaxed tracking-tight text-foreground md:text-4xl">
                    A future where technology protects itself, corrects itself, and 
                    supports people without constant oversight —{" "}
                    <span className="text-primary">beyond being reactive</span>, and 
                    beyond being fragile.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24 grid gap-6 md:grid-cols-3"
            >
              {[
                { title: "Clarity", description: "We communicate directly and build interfaces that explain themselves." },
                { title: "Restraint", description: "We resist feature creep and focus on what truly matters." },
                { title: "Reliability", description: "We build systems that work when you need them most." },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-border/50 bg-card/30 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
                >
                  <span className="mb-4 inline-block text-xs font-medium text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
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

export default About;
