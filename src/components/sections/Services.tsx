import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Settings, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: <Wrench size={36} />,
    title: 'Installation & Commissioning',
    desc: 'Professional installation, calibration, testing, and operator training at your facility for a seamless start.',
    points: ['Site survey & planning', 'Full machine installation', 'System calibration & testing', 'Operator training'],
  },
  {
    icon: <Settings size={36} />,
    title: 'Maintenance & Technical Support',
    desc: 'Scheduled and preventive maintenance, repairs, and expert technical guidance to maximize machine uptime.',
    points: ['Preventive maintenance schedules', 'Emergency repair services', 'Remote technical guidance', 'Performance monitoring'],
  },
  {
    icon: <HeartHandshake size={36} />,
    title: 'After-Sales Service',
    desc: 'Dedicated post-purchase support, warranty assistance, genuine spare parts, and long-term service packages.',
    points: ['Genuine spare parts supply', 'Warranty support', 'Long-term service contracts', 'Pan-India service network'],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            OUR <span className="text-primary">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#1473E6]/10 rounded-2xl flex items-center justify-center text-[#1473E6] mb-6 group-hover:bg-[#1473E6] group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-navy font-black text-xl mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-5">{s.desc}</p>
              <ul className="flex flex-col gap-3">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-[#1473E6] rounded-full shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
