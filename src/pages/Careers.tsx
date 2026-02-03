import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import GradientOrb from "../components/ui/GradientOrb";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Ownership",
    description: "Take full responsibility for your work and its impact.",
  },
  {
    title: "Quality",
    description: "Never ship something you wouldn't be proud to show.",
  },
  {
    title: "Thoughtfulness",
    description: "Consider the user in every decision you make.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <AnimatedSection className="section-spacing relative overflow-hidden">
          <GradientOrb 
            size="xl" 
            color="primary" 
            className="-left-40 top-40" 
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
              Join us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
            >
              Work
              <br />
              <span className="text-primary">with us.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 max-w-2xl"
            >
              <p className="text-xl leading-relaxed text-muted-foreground">
                We are a small, focused team that values ownership, quality, and 
                thoughtful execution. We care deeply about what we build and how 
                it's used.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground/80">
                If you believe software should be simple, reliable, and meaningful, 
                you'll feel at home here.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 grid gap-6 md:grid-cols-3"
            >
              {values.map((value, index) => (
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

            <div className="divider-subtle my-24" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-border/50 bg-card/30 p-12 md:p-16"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-medium text-foreground md:text-4xl">
                  Open positions
                </h2>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                  We're always looking for exceptional people. If you share our values, 
                  we'd love to hear from you — even if there isn't a specific role listed.
                </p>
                
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                  >
                    Get in touch
                    <svg 
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
