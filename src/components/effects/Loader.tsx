import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.jpg';

interface LoaderProps {
  onComplete: () => void;
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: Math.random() * 4 + 3,
}));

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const TOTAL_MS = 2600;

  useEffect(() => {
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / TOTAL_MS) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setTimeout(() => setDone(true), 400);
        setTimeout(() => onComplete(), 900);
      }
    };
    setTimeout(() => setLettersVisible(true), 500);
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  const company = 'SUN INCUBATORS'.split('');

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020810] overflow-hidden"
        >
          {/* Particles */}
          {PARTICLES.map(p => (
            <div
              key={p.id}
              className="loader-particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                bottom: '-10px',
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          {/* Blue ambient glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-96 h-96 bg-primary rounded-full blur-[120px] pointer-events-none"
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-6"
          >
            {/* Shine sweep */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={logoImg}
                alt="Sun Incubators Logo"
                className="w-40 h-40 md:w-56 md:h-56 object-contain mix-blend-screen animate-pulse"
                style={{ filter: 'drop-shadow(0 0 20px rgba(11,111,245,0.5))' }}
              />
              <motion.div
                initial={{ left: '-100%', opacity: 0 }}
                animate={{ left: '200%', opacity: [0, 0.6, 0] }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 pointer-events-none"
                style={{ position: 'absolute', top: 0, bottom: 0, width: '4rem' }}
              />
            </div>
          </motion.div>

          {/* Company name letter-by-letter */}
          <div className="flex gap-0.5 md:gap-1 z-10 mb-2 overflow-hidden">
            {company.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={lettersVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
                className="text-xl md:text-3xl font-black text-white tracking-wider"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: lettersVisible ? 0.6 : 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-xs md:text-sm text-blue-300 tracking-widest uppercase z-10 mb-8"
          >
            Sun Engineering Works
          </motion.p>

          {/* Progress counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="z-10 text-primary font-bold text-lg mb-3"
          >
            {progress}%
          </motion.div>

          {/* Progress bar */}
          <div className="fixed bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
