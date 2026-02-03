import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import MotionGraph from "../ui/MotionGraph";
import FlowingLines from "../ui/FlowingLines";
import ParticleField from "../ui/ParticleField";

const ClosingStatement = () => {
  return (
    <AnimatedSection className="section-spacing relative overflow-hidden">
      <MotionGraph variant="accent" className="opacity-40" />
      <FlowingLines variant="diagonal" className="opacity-25" />
      <ParticleField variant="accent" particleCount={12} className="opacity-30" />
      
      <div className="container-narrow relative z-10">
        <div className="divider-subtle mb-16" />

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="text-2xl leading-relaxed text-foreground md:text-3xl">
            We don't just build software. We build products that quietly improve 
            how things work —{" "}
            <span className="text-primary">beyond being reactive</span>, beyond 
            being fragile, beyond being temporary.
          </p>
        </motion.blockquote>
      </div>
    </AnimatedSection>
  );
};

export default ClosingStatement;
