import { motion } from "framer-motion";

interface GradientOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary";
  delay?: number;
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[600px] h-[600px]",
};

const GradientOrb = ({ 
  className = "", 
  size = "lg", 
  color = "primary",
  delay = 0 
}: GradientOrbProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${sizeClasses[size]} ${className}`}
      style={{
        background: color === "primary" 
          ? "radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)"
          : "radial-gradient(circle, hsl(228 10% 30% / 0.3) 0%, transparent 70%)",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-full rounded-full"
        style={{
          background: color === "primary"
            ? "radial-gradient(circle, hsl(217 91% 60% / 0.1) 0%, transparent 60%)"
            : "radial-gradient(circle, hsl(228 10% 40% / 0.15) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  );
};

export default GradientOrb;
