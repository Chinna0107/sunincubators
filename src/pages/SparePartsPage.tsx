import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, Phone } from 'lucide-react';
import GetQuote from '../components/sections/GetQuote';

const PHONE = '919440551559';

function whatsappUrl(productName: string) {
  const msg = `Hello Sun Incubators,
I would like a quotation for:

Product: "${productName}"

Please share:
• Price
• Delivery time
• Shipping charges
• Product brochure`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

import hero5 from '../assets/hero5.jpeg';
import hero6 from '../assets/hero6.jpeg';
import hero7 from '../assets/hero7.jpeg';
import hero9 from '../assets/hero1.jpeg';
import hero10 from '../assets/hero9.jpeg';
import hero14 from '../assets/hero12.jpeg';
import hero15 from '../assets/hero14.jpeg';
import hero16 from '../assets/hero15.jpeg';
import hero26 from '../assets/hero26.jpeg';
import hero27 from '../assets/hero27.jpeg';
import hero20 from '../assets/hero20.jpeg';
import hero21 from '../assets/hero21.jpeg';
import hero22 from '../assets/hero22.jpeg';
import hero23 from '../assets/hero23.jpeg';
import hero24 from '../assets/hero24.jpeg';
import hero33 from '../assets/hero33.jpeg';

 


const spareParts = [
  { id: 'tray-102', name: 'Egg Setting Tray (102)', imgSrc: hero5, desc: '102-capacity egg setting tray. Precise spacing for optimal airflow around each egg during incubation.' },
  { id: 'tray-quail', name: 'Quail Setting Tray', imgSrc:hero10, desc: 'Specially designed setting tray for quail eggs. Compatible with all Sun Incubator setter models.' },
  { id: 'tray-90', name: 'Egg Setting Tray (90)', imgSrc: hero6, desc: ' (29 * 12 Inch) 90-capacity egg setting tray for medium incubators. Durable plastic construction.' },
  { id: 'hatching-90', name: 'Hatcher Tray (90)', imgSrc: hero15, desc: ' 90-capacity smooth-surface hatching tray. Easy to clean and sanitize for biosecurity.' },
  { id: 'hatching-180', name: 'Hatcher Tray (180)', imgSrc: hero27, desc: '180-capacity hatching tray for larger hatchers. Smooth base for safe chick emergence.' },
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
  { id: 'humidity-set', name: 'Humidity Set', imgSrc: hero26, desc: 'Complete humidifier set including water tray, evaporator pad, and nozzle for optimal moisture control.' },
  { id: 'egg-candler', name: 'Egg Candler', imgSrc: '/images/products/egg-candler.jpg', desc: 'High-brightness egg candler for accurate fertility and development checking during incubation.' },
  { id: 'spare-parts-kit', name: 'Genuine Spare Parts Kit', imgSrc: '/images/products/spare-parts.jpg', desc: 'Complete genuine accessories kit — handles, rollers, sensors, door seals, and all essential components.' },
  { id: 'sensor',          name: 'Sensor',                   desc: 'High-precision environmental sensor for accurate readings and control.', imgSrc: hero20, placeholder: 'Sensor' },
  { id: 'gunny-ring',      name: 'Gunny Ring',                desc: 'Durable gunny ring essential for proper moisture distribution.', imgSrc: hero21, placeholder: 'Gunny Ring' },
  { id: 'spindle',         name: 'Spindle',                   desc: 'Sturdy replacement spindle for reliable mechanical operation.', imgSrc: hero22, placeholder: 'Spindle' },
  { id: 'thermometer',     name: 'Dry and Wet Thermometer', desc: 'Classic dry and wet bulb thermometer for accurate humidity monitoring.', imgSrc: hero23, placeholder: 'Dry & Wet Thermometer' },
  { id: 'jumbo-thermometer',      name: 'Jumbo Thermometer',                desc: 'High-precision laboratory thermometer for accurate and reliable temperature measurement.', imgSrc: hero33 },
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
        <div className="flex gap-2">
          <a
            href={whatsappUrl(part.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold px-3 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
            WhatsApp Quote
          </a>
          <a
            href={`tel:+${PHONE}`}
            className="inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:border-primary/40 hover:bg-primary/5 text-slate-600 hover:text-primary text-xs font-bold px-3 py-2.5 rounded-lg transition-all duration-300"
          >
            <Phone size={13} />
            Call
          </a>
        </div>
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
