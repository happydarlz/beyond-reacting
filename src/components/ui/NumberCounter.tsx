import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface NumberCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const NumberCounter = ({ value, suffix = "", prefix = "", className = "" }: NumberCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { 
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

export default NumberCounter;
