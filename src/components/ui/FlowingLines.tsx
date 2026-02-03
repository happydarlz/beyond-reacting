import { motion } from "framer-motion";

interface FlowingLinesProps {
  className?: string;
  variant?: "horizontal" | "diagonal" | "wave";
}

const FlowingLines = ({ className = "", variant = "horizontal" }: FlowingLinesProps) => {
  const paths = {
    horizontal: [
      { d: "M-100 80 Q100 60 300 80 T700 60 T1100 80", delay: 0 },
      { d: "M-100 120 Q150 100 350 130 T750 100 T1100 120", delay: 0.5 },
      { d: "M-100 160 Q200 180 400 150 T800 180 T1100 160", delay: 1 },
    ],
    diagonal: [
      { d: "M-50 400 Q200 300 400 350 Q600 400 800 200 Q900 100 1050 50", delay: 0 },
      { d: "M-50 450 Q250 350 450 380 Q650 410 850 250 Q950 150 1050 100", delay: 0.3 },
    ],
    wave: [
      { d: "M0 200 C100 150 200 250 300 200 S500 150 600 200 S800 250 900 200 S1000 150 1100 200", delay: 0 },
      { d: "M0 220 C120 180 220 260 320 220 S520 180 620 220 S820 260 920 220 S1020 180 1100 220", delay: 0.4 },
      { d: "M0 180 C80 130 180 230 280 180 S480 130 580 180 S780 230 880 180 S980 130 1100 180", delay: 0.8 },
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
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
            <stop offset="70%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGradientSubtle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(228 10% 35%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(228 10% 35%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(228 10% 35%)" stopOpacity="0" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background flowing lines */}
        {selectedPaths.map((path, index) => (
          <motion.path
            key={`bg-${index}`}
            d={path.d}
            stroke="url(#flowGradientSubtle)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 3, delay: path.delay, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: path.delay },
            }}
          />
        ))}

        {/* Accent flowing pulse */}
        {selectedPaths.slice(0, 1).map((path, index) => (
          <motion.path
            key={`accent-${index}`}
            d={path.d}
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            strokeDasharray="50 950"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: -1000 }}
            transition={{
              duration: 8,
              delay: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating orbs along paths */}
        <motion.circle
          r="4"
          fill="hsl(217 91% 60%)"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 4, delay: 3, repeat: Infinity, repeatDelay: 4 }}
        >
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path={selectedPaths[0].d}
            begin="3s"
          />
        </motion.circle>
      </svg>
    </div>
  );
};

export default FlowingLines;
