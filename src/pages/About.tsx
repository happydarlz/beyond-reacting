import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";

const About = () => {
  return (
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
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default About;
