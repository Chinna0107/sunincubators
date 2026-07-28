import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import { equipmentData } from '../data/products';
import GetQuote from '../components/sections/GetQuote';
import StatsBar from '../components/sections/StatsBar';

// Show only incubators on the Products page
const incubators = equipmentData.filter(e => e.category === 'incubator');

export default function ProductsPage() {
  const { hash } = useLocation();
  const [highlightId, setHighlightId] = useState<string | null>(null);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    setHighlightId(id);

    // Wait for the page to paint, then scroll + highlight
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      // Remove highlight after 2.5s
      setTimeout(() => setHighlightId(null), 2500);
    }, 300);

    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="pt-[60px] md:pt-[64px]">
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0B6FF5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Our Product Range
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              OUR <span className="text-primary">PRODUCTS</span>
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-sm">
              Premium commercial egg incubation systems engineered for maximum hatchability, energy efficiency, and long-term reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category pills */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="container-custom flex flex-wrap items-center justify-center gap-3">
          <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">All Incubators</span>
          <Link to="/spare-parts" className="bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary text-xs font-bold px-4 py-1.5 rounded-full transition-colors border border-slate-200 hover:border-primary/30">
            Genuine Spare Parts →
          </Link>
        </div>
      </div>

      {/* Products grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {incubators.map((p, i) => {
              const isHighlighted = highlightId === p.id;
              return (
                <motion.div
                  key={p.id}
                  id={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group block bg-white rounded-2xl border transition-all duration-500 overflow-hidden hover:-translate-y-1 ${
                    isHighlighted
                      ? 'border-[#1473E6] shadow-[0_0_0_3px_rgba(20,115,230,0.35),0_8px_40px_rgba(20,115,230,0.25)] scale-[1.02]'
                      : 'border-slate-100 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(11,111,245,0.12)]'
                  }`}
                >
                  <div className="overflow-hidden aspect-[16/9] bg-slate-50">
                    <img
                      src={p.imgSrc}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs text-center p-4">${p.placeholder}</div>`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings size={16} className="text-primary" />
                      <h2 className="text-navy font-black text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>{p.title}</h2>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-lg uppercase">
                        Egg Incubator
                      </span>
                      <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase">
                        1 Year Warranty
                      </span>
                    </div>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Get a Quote <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA to spare parts */}
          <div className="text-center mt-12 p-8 bg-navy rounded-2xl border border-primary/20">
            <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Looking for <span className="text-primary">Spare Parts?</span>
            </h3>
            <p className="text-white/60 text-sm mb-5">We stock genuine replacement parts for all Sun Incubator models. Fast delivery across India.</p>
            <Link
              to="/spare-parts"
              className="inline-flex items-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              View Genuine Spare Parts <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <StatsBar />
      <GetQuote />
    </div>
  );
}

