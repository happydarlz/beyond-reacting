import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import NumberCounter from "../ui/NumberCounter";

const stats = [
  { value: 99.9, suffix: "%", label: "System uptime", sublabel: "Always available" },
  { value: 50, suffix: "%", label: "Error reduction", sublabel: "Less human error" },
  { value: 10, suffix: "x", label: "Faster resolution", sublabel: "Automated fixes" },
];

const Stats = () => {
  return (
    <AnimatedSection className="py-20 md:py-24">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative grid divide-y divide-border/30 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-10 text-center transition-colors hover:bg-card/50"
              >
                <div className="mb-4 text-5xl font-medium tracking-tight text-foreground md:text-6xl">
                  <NumberCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-base font-medium text-foreground">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground/60">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Stats;
