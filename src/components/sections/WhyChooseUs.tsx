import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Calendar, Cpu, Zap, Layers, Settings2, TrendingUp,
  Package, Users, Puzzle, MapPin
} from 'lucide-react';

const reasons = [
  { icon: <Calendar size={28} />, title: 'Since 2004 Experience', sub: '20+ years of trusted manufacturing' },
  { icon: <Cpu size={28} />, title: 'Precision Engineered', sub: 'Built to exacting specifications' },
  { icon: <Zap size={28} />, title: 'Energy Efficient', sub: 'Low running costs, high output' },
  { icon: <Layers size={28} />, title: 'Premium Build Quality', sub: 'Industrial-grade materials' },
  { icon: <Settings2 size={28} />, title: 'Reliable Control Systems', sub: 'Smart microprocessor technology' },
  { icon: <TrendingUp size={28} />, title: 'High Hatchability Performance', sub: 'Consistent 90%+ hatch rates' },
  { icon: <Package size={28} />, title: 'Genuine Spare Parts', sub: 'Authentic parts, fast delivery' },
  { icon: <Users size={28} />, title: 'Professional Support', sub: '24/7 after-sales assistance' },
  { icon: <Puzzle size={28} />, title: 'Customized Solutions', sub: 'Built to your requirements' },
  { icon: <MapPin size={28} />, title: 'Trusted Across India', sub: '28+ states, 1000+ customers' },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-navy-mid">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            WHY CHOOSE <span className="text-primary">SUN INCUBATORS</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group glass rounded-2xl p-5 text-center border border-primary/10 hover:border-primary/40 hover:shadow-blue-glow-sm transition-all duration-300 cursor-default"
            >
              <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <div className="text-white font-bold text-xs mb-1 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {r.title}
              </div>
              <div className="text-white/45 text-[10px] leading-snug">{r.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
