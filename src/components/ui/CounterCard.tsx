import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

export default function CounterCard({ value, suffix = '', prefix = '', label, delay = 0 }: CounterCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    const timer = setTimeout(() => { rafRef.current = requestAnimationFrame(step); }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-white/60 mt-1 font-medium">{label}</div>
    </motion.div>
  );
}
