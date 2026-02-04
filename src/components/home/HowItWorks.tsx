import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import stepsImage from "@/assets/steps-abstract.png";

const steps = [
  {
    number: "01",
    title: "Identify the Problem",
    description: "We start by deeply understanding the challenge. What's breaking? What's slowing people down? We dig into the root cause, not just symptoms.",
  },
  {
    number: "02",
    title: "Design with Intention",
    description: "Every feature, every interaction is designed with purpose. We eliminate complexity and focus on what truly matters to users.",
  },
  {
    number: "03",
    title: "Build for Reliability",
    description: "We engineer software that works quietly in the background. Self-healing, self-correcting, and built to handle edge cases gracefully.",
  },
  {
    number: "04",
    title: "Deploy & Monitor",
    description: "Launch is just the beginning. We continuously monitor, learn, and improve—ensuring long-term value and reliability.",
  },
];

const HowItWorks = () => {
  return (
    <AnimatedSection className="section-spacing">
      <div className="container-narrow">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Our Process
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
        >
          How We Build Software
        </motion.h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex gap-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-primary transition-colors group-hover:border-primary group-hover:bg-primary/10">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={stepsImage}
                alt="Abstract visualization of automated software processes"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorks;
