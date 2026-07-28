import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Award, Zap, Headset } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'SINCE 2004',
    sub: 'Manufacturing Excellence',
  },
  {
    icon: Award,
    title: 'PREMIUM QUALITY',
    sub: 'Built to Last',
  },
  {
    icon: Zap,
    title: 'ENERGY EFFICIENT',
    sub: 'Save More, Perform More',
  },
  {
    icon: Headset,
    title: 'AFTER SALES SUPPORT',
    sub: 'Always With You',
  },
];

export default function FeatureStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#040C16] border-y border-white/10 py-6 md:py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-white/10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center px-2 md:px-4 py-2"
              >
                <div className="w-11 h-11 rounded-full border border-[#1473E6]/60 bg-[#1473E6]/10 flex items-center justify-center text-[#2EA4FF] mb-2.5 shadow-[0_0_15px_rgba(20,115,230,0.2)]">
                  <Icon size={20} className="stroke-[2]" />
                </div>
                <div
                  className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wide"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {item.title}
                </div>
                <div className="text-slate-400 text-[11px] sm:text-xs mt-1 leading-snug font-medium">
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
