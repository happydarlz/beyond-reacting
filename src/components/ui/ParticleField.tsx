import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  variant?: "sparse" | "dense" | "accent";
}

const ParticleField = ({ 
  className = "", 
  particleCount = 20,
  variant = "sparse" 
}: ParticleFieldProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: variant === "accent" ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      opacity: variant === "accent" ? 0.6 : 0.3,
    }));
  }, [particleCount, variant]);

  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    for (let i = 0; i < Math.min(particles.length, 8); i++) {
      const j = (i + 1) % particles.length;
      if (Math.random() > 0.5) {
        lines.push({
          x1: particles[i].x,
          y1: particles[i].y,
          x2: particles[j].x,
          y2: particles[j].y,
          delay: Math.random() * 3,
        });
      }
    }
    return lines;
  }, [particles]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((line, index) => (
          <motion.line
            key={`connection-${index}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="0.1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0.3, 0],
              pathLength: [0, 1, 1, 1]
            }}
            transition={{
              duration: 8,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />
        ))}

        {/* Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={variant === "accent" ? "url(#particleGlow)" : "hsl(228 10% 40%)"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, particle.opacity, particle.opacity, 0],
              scale: [0, 1, 1, 0],
              cx: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 10}%`],
              cy: [`${particle.y}%`, `${particle.y - Math.random() * 15}%`],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ParticleField;
