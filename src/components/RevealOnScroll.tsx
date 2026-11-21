"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 35 };
      case "down": return { opacity: 0, y: -35 };
      case "left": return { opacity: 0, x: -35 };
      case "right": return { opacity: 0, x: 35 };
      case "scale": return { opacity: 0, scale: 0.94 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : getInitial()}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
