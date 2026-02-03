import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import PageTransition from "../components/ui/PageTransition";
import { Link } from "react-router-dom";

const Careers = () => {
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
                Join us
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl"
              >
                Work with us
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-2xl"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We are a small, focused team that values ownership, quality, and 
                  thoughtful execution. We care deeply about what we build and how 
                  it's used.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  If you believe software should be simple, reliable, and meaningful, 
                  you'll feel at home here.
                </p>
              </motion.div>

              <div className="divider-subtle my-20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-medium text-foreground">
                  Open positions
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We're always looking for exceptional people. If you share our values, 
                  we'd love to hear from you.
                </p>
                <Link
                  to="/contact"
                  className="btn-outline-premium mt-8 inline-flex"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Careers;
