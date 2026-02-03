import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import AnimatedSection from "../components/ui/AnimatedSection";

const Contact = () => {
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
                Contact
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              >
                Get in touch
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-2xl"
              >
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Whether you're interested in our work, our philosophy, or future 
                  collaboration, we're always open to thoughtful conversations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16"
              >
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
                      Email
                    </h2>
                    <a
                      href="mailto:hello@finitix.com"
                      className="group mt-4 inline-flex items-center gap-3 text-2xl font-medium text-foreground transition-colors hover:text-primary"
                    >
                      hello@finitix.com
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </a>
                  </div>

                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
                      Location
                    </h2>
                    <p className="mt-4 text-2xl font-medium text-foreground">
                      Remote-first
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="divider-subtle my-24" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-lg"
              >
                <p className="text-3xl leading-relaxed text-foreground">
                  Building the future of{" "}
                  <span className="text-primary">quiet technology</span>.
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

export default Contact;
