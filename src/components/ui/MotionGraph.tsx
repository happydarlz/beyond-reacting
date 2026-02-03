import { motion } from "framer-motion";
import { useMemo } from "react";

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
      "M0 350 Q200 300 400 340 T700 290 T900 350",
    ],
    subtle: [
      "M0 150 Q200 100 400 150 T800 120",
      "M0 200 Q200 180 400 220 T800 180",
    ],
    accent: [
      "M0 100 C200 50 400 150 600 100 S900 80 1000 120",
      "M0 150 C250 100 450 180 650 130 S950 110 1000 150",
    ],
  };

  const selectedPaths = paths[variant];

  // Generate floating nodes for hero variant
  const nodes = useMemo(() => {
    if (variant !== "hero") return [];
    return [
      { cx: 200, cy: 150, size: 4, delay: 1 },
      { cx: 400, cy: 120, size: 5, delay: 1.5 },
      { cx: 600, cy: 180, size: 3, delay: 2 },
      { cx: 800, cy: 100, size: 4, delay: 2.5 },
      { cx: 300, cy: 220, size: 3, delay: 1.8 },
      { cx: 700, cy: 240, size: 4, delay: 2.2 },
      { cx: 500, cy: 280, size: 3, delay: 1.3 },
    ];
  }, [variant]);

  // Connection lines between nodes
  const connections = useMemo(() => {
    if (variant !== "hero") return [];
    return [
      { x1: 200, y1: 150, x2: 400, y2: 120 },
      { x1: 400, y1: 120, x2: 600, y2: 180 },
      { x1: 600, y1: 180, x2: 800, y2: 100 },
      { x1: 300, y1: 220, x2: 500, y2: 280 },
      { x1: 500, y1: 280, x2: 700, y2: 240 },
    ];
  }, [variant]);

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
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradientSubtle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(228 10% 30%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(228 10% 30%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(228 10% 30%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nodeConnectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Glow filter for nodes */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Pulse gradient */}
          <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
            <stop offset="70%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Node connection lines */}
        {connections.map((conn, index) => (
          <motion.line
            key={`conn-${index}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#nodeConnectionGradient)"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{
              pathLength: { duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 1 + index * 0.2 },
            }}
          />
        ))}

        {/* Main flowing paths */}
        {selectedPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={variant === "accent" ? "url(#lineGradient)" : "url(#lineGradientSubtle)"}
            strokeWidth={variant === "accent" ? "1.5" : "1"}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.5, delay: index * 0.3, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: index * 0.3 },
            }}
          />
        ))}

        {/* Traveling pulse along first path */}
        {variant === "hero" && (
          <motion.circle
            r="6"
            fill="url(#pulseGradient)"
            filter="url(#nodeGlow)"
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path={selectedPaths[0]}
            />
            <animate
              attributeName="r"
              values="4;6;4"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.circle>
        )}

        {/* Animated nodes */}
        {nodes.map((node, index) => (
          <g key={`node-${index}`}>
            {/* Outer glow ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.size * 3}
              fill="none"
              stroke="hsl(217 91% 60%)"
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ 
                duration: 4, 
                delay: node.delay + 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Main node */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.size}
              fill="hsl(217 91% 60%)"
              filter="url(#nodeGlow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: node.delay,
                ease: "easeOut"
              }}
            />
            {/* Pulsing inner */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.size * 0.5}
              fill="hsl(0 0% 100%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ 
                duration: 2, 
                delay: node.delay + 0.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}

        {/* Accent variant: traveling light */}
        {variant === "accent" && (
          <>
            <motion.circle
              r="3"
              fill="hsl(217 91% 70%)"
              filter="url(#nodeGlow)"
            >
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path={selectedPaths[0]}
              />
            </motion.circle>
            <motion.circle
              r="2"
              fill="hsl(217 91% 60%)"
              filter="url(#nodeGlow)"
            >
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path={selectedPaths[1]}
                begin="1s"
              />
            </motion.circle>
          </>
        )}
      </svg>
    </div>
  );
};

export default MotionGraph;
