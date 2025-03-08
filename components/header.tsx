"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type WrapperProps = {
  className?: string; 
  children?: React.ReactNode; // Nhận bất kỳ phần tử React nào làm con
};

export default function Header({ className, children }: WrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Target scroll tracking
    target: ref,
    // Tracking offset:
    // * Start: head element = 0 && end viewport = 1
    // * End: end element = 1 && head viewport = 0
    offset: ["0 1", "1 0"]
  })

  // Setup scroll effect
  // useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  // * scrollYProgress = 0   -> Scale = 0.8 (get in viewport -> small)
  // * scrollYProgress = 0.5 -> Scale = 1   (normal)
  // * scrollYProgress = 1   -> Scale = 0.8 (get out viewport -> small)
  const scaleProgess = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.8, 1, 1, 0.8]);
  const opacityProgess = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.3, 1, 1, 0]);

  return <motion.div
    className={`${className}`}
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess
    }}
  >
    <h1 className="px-4 text-4xl font-black text-secondary drop-shadow-2xl header">
      {children}
    </h1>
  </motion.div>
}