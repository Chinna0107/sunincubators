import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package } from 'lucide-react';
import GetQuote from '../components/sections/GetQuote';

import hero5 from '../assets/hero5.jpeg';
import hero6 from '../assets/hero6.jpeg';
import hero7 from '../assets/hero7.jpeg';
import hero9 from '../assets/hero1.jpeg';
import hero10 from '../assets/hero9.jpeg';
import hero14 from '../assets/hero12.jpeg';
import hero15 from '../assets/hero14.jpeg';
import hero16 from '../assets/hero15.jpeg';

 


const spareParts = [
  { id: 'tray-102', name: 'Egg Setting Tray (102)', imgSrc: hero5, desc: '102-capacity egg setting tray. Precise spacing for optimal airflow around each egg during incubation.' },
  { id: 'tray-quail', name: 'Quail Setting Tray', imgSrc:hero10, desc: 'Specially designed setting tray for quail eggs. Compatible with all Sun Incubator setter models.' },
  { id: 'tray-90', name: 'Egg Setting Tray (90)', imgSrc: hero6, desc: ' (29 * 12 Inch) 90-capacity egg setting tray for medium incubators. Durable plastic construction.' },
  { id: 'hatching-90', name: 'Hatcher Tray (90)', imgSrc: hero15, desc: ' 90-capacity smooth-surface hatching tray. Easy to clean and sanitize for biosecurity.' },
  { id: 'hatching-180', name: 'Hatcher Tray (180)', imgSrc: '/images/products/hatching-180.jpg', desc: '180-capacity hatching tray for larger hatchers. Smooth base for safe chick emergence.' },
  { id: 'heater', name: 'Heating Element / Heater', imgSrc: '/images/products/heater.jpg', desc: 'Industrial-grade heating element for consistent temperature maintenance. Long lifespan, energy efficient.' },
  { id: 'controller-temp', name: 'Temperature Controller', imgSrc: '/images/products/controller-temp.jpg', desc: 'Digital precision temperature controller with ±0.1°C accuracy. PID-based control for stable incubation.' },
  { id: 'controller-hum', name: 'Humidity Controller', imgSrc: '/images/products/controller-hum.jpg', desc: 'Automatic humidity controller with digital readout and alarm. Ensures optimal humidity throughout incubation.' },
  { id: 'controller-inc', name: 'Incubator Controller', imgSrc: hero14, desc: 'Original Sun Incubators PCB control board. Controls temperature, humidity, and egg turning automatically.' },
  { id: 'fan-motor', name: 'Fan Motor', imgSrc: '/images/products/fan-motor.jpg', desc: 'High-performance replacement fan motor. Low noise, continuous-duty rated for all Sun Incubator models.' },
  { id: 'fan-blades', name: 'Fan Blades', imgSrc: '/images/products/fan-blades.jpg', desc: 'Durable replacement fan blades for balanced airflow and even heat distribution inside incubators.' },
  { id: 'fan-hub-set', name: 'Fan Hub Set', imgSrc: '/images/products/fan-hub-set.jpg', desc: 'Complete fan hub set for easy replacement. Includes hub, shaft, and mounting hardware.' },
  { id: 'turning-motor', name: 'Turning Motor', imgSrc: hero16, desc: 'Reliable egg turning motor for consistent 45° rotation. Compatible with all setter models.' },
  { id: 'linear-actuator', name: 'Linear Actuator', imgSrc: '/images/products/linear-actuator.jpg', desc: 'Precision linear actuator for automatic egg turning systems. Smooth, silent operation.' },
  { id: 'micro-switch', name: 'Micro Switch', imgSrc: hero7, desc: 'Precision micro switch for door and tray detection in control panel circuits.' },
  { id: 'humidity-set', name: 'Humidity Set', imgSrc: hero9, desc: 'Complete humidifier set including water tray, evaporator pad, and nozzle for optimal moisture control.' },
  { id: 'egg-candler', name: 'Egg Candler', imgSrc: '/images/products/egg-candler.jpg', desc: 'High-brightness egg candler for accurate fertility and development checking during incubation.' },
  { id: 'spare-parts-kit', name: 'Genuine Spare Parts Kit', imgSrc: '/images/products/spare-parts.jpg', desc: 'Complete genuine accessories kit — handles, rollers, sensors, door seals, and all essential components.' },
];

function SparePartCard({ part, index }: { part: typeof spareParts[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
      className="group bg-white border border-slate-100 hover:border-primary/30 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(11,111,245,0.1)] transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product image */}
      <div className="w-full h-44 bg-slate-50 overflow-hidden relative border-b border-slate-100">
        <img
          src={part.imgSrc}
          alt={part.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 transition-transform duration-400 group-hover:scale-105"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = 'none';
            el.parentElement!.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-50 to-blue-50">
                <div class="text-3xl opacity-40">📦</div>
                <span class="text-[9px] text-slate-400 font-medium tracking-widest uppercase text-center px-2">Official image will be added here</span>
              </div>`;
          }}
        />
        <div className="absolute top-2 right-2">
          <span className="text-[9px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full border border-primary/20">GENUINE</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Package size={14} className="text-primary shrink-0" />
          <h3 className="text-navy font-black text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {part.name}
          </h3>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed mb-4">{part.desc}</p>
        <Link
          to="/quote"
          className="inline-flex items-center gap-1.5 bg-[#1473E6] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full justify-center"
        >
          Send Inquiry →
        </Link>
      </div>
    </motion.div>
  );
}

export default function SparePartsPage() {
  return (
    <div className="pt-[60px] md:pt-[64px]">
      {/* Hero banner */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0B6FF5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              100% Genuine Parts
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              GENUINE <span className="text-primary">SPARE PARTS</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
              Original Sun Incubators spare parts for all models. Fast pan-India delivery. Guaranteed compatibility and quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info strip */}
      <div className="bg-primary py-4">
        <div className="container-custom flex flex-wrap items-center justify-center gap-6 text-white text-sm font-semibold text-center">
          <span>✅ 100% Genuine Parts</span>
          <span>🚚 Fast Pan-India Delivery</span>
          <span>🔧 All Models Supported</span>
          <span>📞 Call: 9440551559</span>
        </div>
      </div>

      {/* Spare parts grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-navy" style={{ fontFamily: 'Outfit, sans-serif' }}>
              AVAILABLE <span className="text-primary">SPARE PARTS</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
              Browse our complete range of genuine replacement parts. Contact us for pricing and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {spareParts.map((part, i) => (
              <SparePartCard key={part.id} part={part} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why genuine parts matter */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              WHY USE <span className="text-primary">GENUINE PARTS?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Warranty Protection', desc: 'Using genuine parts keeps your machine warranty valid.' },
              { icon: '⚡', title: 'Optimal Performance', desc: 'Engineered to exact specifications for best results.' },
              { icon: '🔒', title: 'Safe & Reliable', desc: 'Tested for electrical safety and durability standards.' },
              { icon: '💰', title: 'Cost Effective', desc: 'Longer lifespan means fewer replacements and lower cost.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GetQuote />
    </div>
  );
}
