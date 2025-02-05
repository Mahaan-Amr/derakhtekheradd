'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedStatProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedStat({ endValue, label, suffix = '', duration = 2 }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = endValue / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xl text-white">{label}</div>
    </motion.div>
  );
} 