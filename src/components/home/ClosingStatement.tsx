import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";

const ClosingStatement = () => {
  return (
    <AnimatedSection className="section-spacing-lg">
      <div className="container-narrow">
        <div className="divider-subtle mb-20" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <p className="text-3xl font-medium leading-relaxed tracking-tight text-foreground md:text-4xl lg:text-5xl">
            We don't chase trends or noise.
          </p>
          <p className="mt-6 text-3xl font-medium leading-relaxed tracking-tight text-foreground md:text-4xl lg:text-5xl">
            We build products that quietly{" "}
            <span className="text-primary">make things better</span>.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-lg text-muted-foreground"
        >
          Beyond being reactive. Beyond being fragile. Beyond being temporary.
        </motion.p>
      </div>
    </AnimatedSection>
  );
};

export default ClosingStatement;
