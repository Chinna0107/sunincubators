import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, highlight, subtitle, center = false, light = false }: SectionTitleProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-tight ${light ? 'text-white' : 'text-navy'}`}
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-primary">{highlight}</span>
            {titleParts[1]}
          </>
        ) : title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
