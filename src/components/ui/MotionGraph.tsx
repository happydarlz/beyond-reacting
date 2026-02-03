import { motion } from "framer-motion";

interface MotionGraphProps {
  className?: string;
  variant?: "hero" | "subtle" | "accent";
}

const MotionGraph = ({ className = "", variant = "hero" }: MotionGraphProps) => {
  const paths = {
    hero: [
      "M0 200 Q100 100 200 150 T400 120 T600 180 T800 100",
      "M0 250 Q150 200 300 220 T500 180 T700 240 T900 160",
      "M0 300 Q100 350 250 280 T450 320 T650 260 T850 300",
    ],
    subtle: [
      "M0 150 Q200 100 400 150 T800 120",
      "M0 200 Q200 180 400 220 T800 180",
    ],
    accent: [
      "M0 100 C200 50 400 150 600 100 S900 80 1000 120",
    ],
  };

  const selectedPaths = paths[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="h-full w-full"
        viewBox="0 0 1000 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradientSubtle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(228 10% 30%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(228 10% 30%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(228 10% 30%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {selectedPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={variant === "accent" ? "url(#lineGradient)" : "url(#lineGradientSubtle)"}
            strokeWidth={variant === "accent" ? "2" : "1"}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.5, delay: index * 0.3, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: index * 0.3 },
            }}
          />
        ))}

        {/* Animated dots */}
        {variant === "hero" && (
          <>
            <motion.circle
              cx="400"
              cy="120"
              r="3"
              fill="hsl(217 91% 60%)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1], scale: 1 }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.circle
              cx="700"
              cy="240"
              r="2"
              fill="hsl(217 91% 60%)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 0.4, 0.8], scale: 1 }}
              transition={{ duration: 2.5, delay: 2, repeat: Infinity, repeatDelay: 4 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default MotionGraph;
