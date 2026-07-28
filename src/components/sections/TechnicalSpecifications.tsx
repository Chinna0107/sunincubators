import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings } from 'lucide-react';

export default function TechnicalSpecifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const specs = [
    { label: 'Model', value: 'SUN-1200' },
    { label: 'Humidity Control', value: 'Automatic' },
    { label: 'Egg Capacity (Chicken)', value: '1200 Eggs' },
    { label: 'Egg Turning', value: 'Automatic' },
    { label: 'Egg Capacity (Duck)', value: '1080 Eggs' },
    { label: 'Turning Angle', value: '45° (Left & Right)' },
    { label: 'Egg Capacity (Quail)', value: '3300 Eggs' },
    { label: 'Turning Interval', value: 'Every 1 Hour' },
    { label: 'Power Supply', value: '230V AC, 50Hz' },
    { label: 'Shelves / Trays', value: '10 Nos.' },
    { label: 'Power Consumption', value: '1400 Watts' },
    { label: 'Body Material', value: 'Hylam Sheet with PUF Insulation' },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-navy rounded-t-xl px-6 py-4 flex items-center gap-3">
            <Settings size={20} className="text-white" />
            <h2 className="text-white font-black text-xl tracking-wide uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
              TECHNICAL SPECIFICATIONS
            </h2>
          </div>
          
          <div className="border-x border-b border-slate-200 rounded-b-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:grid grid-cols-2 bg-slate-50 border-b border-slate-200">
                <div className="px-6 py-3 text-sm font-black text-orange-500 tracking-wider">PARAMETER</div>
                <div className="px-6 py-3 text-sm font-black text-orange-500 tracking-wider">SPECIFICATION</div>
              </div>
              <div className="hidden md:grid grid-cols-2 bg-slate-50 border-b md:border-l border-slate-200">
                <div className="px-6 py-3 text-sm font-black text-orange-500 tracking-wider">PARAMETER</div>
                <div className="px-6 py-3 text-sm font-black text-orange-500 tracking-wider">SPECIFICATION</div>
              </div>

              {specs.map((spec, i) => (
                <div 
                  key={i} 
                  className={`grid grid-cols-2 border-slate-200 ${
                    i % 2 !== 0 ? 'md:border-l' : ''
                  } ${
                    i < specs.length - 2 ? 'border-b' : ''
                  }`}
                >
                  <div className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-bold text-slate-700 bg-white md:bg-transparent">
                    {spec.label}
                  </div>
                  <div className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium text-slate-900 border-l border-slate-100 bg-slate-50/50">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
