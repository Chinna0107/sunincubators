import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 120, damping: 20 });
  const ringY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleHoverIn = () => cursorRingRef.current?.classList.add('hovered');
    const handleHoverOut = () => cursorRingRef.current?.classList.remove('hovered');

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, [x, y]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
      <motion.div
        ref={cursorRingRef}
        className="cursor-ring hidden md:block"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
