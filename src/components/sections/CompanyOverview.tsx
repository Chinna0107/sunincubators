import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, UserCheck, ShieldCheck, ThumbsUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'SINCE 2004',
    sub: 'Manufacturing Experience',
  },
  {
    icon: UserCheck,
    title: 'INDIA WIDE',
    sub: 'Trusted by Poultry Farmers',
  },
  {
    icon: ShieldCheck,
    title: 'QUALITY ASSURED',
    sub: 'Precision Engineered',
  },
  {
    icon: ThumbsUp,
    title: 'CUSTOMER FOCUSED',
    sub: 'Your Success is Our Mission',
  },
];

export default function CompanyOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-slate-50 py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        {/* Main Card Container matching reference mobile screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden"
        >
          {/* Top-Right Factory Blueprint Line Art SVG */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-30 sm:opacity-40 pointer-events-none w-20 h-20 sm:w-28 sm:h-28 text-[#1473E6]">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 85 h80 V50 L65 35 V20 h-15 v25 L35 35 V25 h-15 v25 L10 60 Z" />
              <path d="M25 60 h10 v25 H25 Z" />
              <path d="M45 60 h10 v25 H45 Z" />
              <circle cx="75" cy="25" r="10" strokeDasharray="3 3" />
              <path d="M75 18 v14 M68 25 h14" />
            </svg>
          </div>

          <div className="max-w-3xl relative z-10">
            {/* Header badges */}
            <span
              className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-1"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              COMPANY OVERVIEW
            </span>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#06111F] tracking-tight leading-tight mb-1"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              SUN ENGINEERING WORKS
            </h2>

            <p className="text-[#1473E6] font-bold text-sm sm:text-base mb-4">
              Brand: Sun Incubators
            </p>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              Sun Incubators is committed to building reliable, precision-engineered incubation systems that help poultry businesses achieve higher productivity, better hatchability, and long-term success.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 bg-slate-50/70 p-3 sm:p-4 rounded-2xl border border-slate-100"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1473E6]/10 flex items-center justify-center text-[#1473E6] shrink-0">
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <div>
                      <h4
                        className="text-[#06111F] font-bold text-xs sm:text-sm tracking-wide uppercase"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-snug">
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View More Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#1473E6] font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                <span>VIEW MORE ABOUT US</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
