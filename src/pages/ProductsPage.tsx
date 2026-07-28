import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings, Info, Search } from 'lucide-react';
import { equipmentData, Equipment } from '../data/products';
import GetQuote from '../components/sections/GetQuote';
import StatsBar from '../components/sections/StatsBar';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'commercial', label: 'COMMERCIAL EGG INCUBATORS' },
  { id: 'hatchers', label: 'Poultry Equipment' },
  { id: 'small_medium', label: 'SMALL AND MEDIUM CAPACITY INCUBATORS' },
  { id: 'spare_part', label: 'POULTRY INCUBATOR SPARE PARTS' }
];

const ProductGrid = ({ products }: { products: Equipment[] }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
    >
      <AnimatePresence mode="popLayout">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group block bg-white rounded-2xl border border-slate-100 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(11,111,245,0.12)]"
          >
            <div className="overflow-hidden aspect-[4/3] bg-slate-50 flex items-center justify-center p-6">
              <img
                src={p.imgSrc}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">{p.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-lg uppercase">
                  {p.category === 'spare_part' ? 'Spare Part' : 'Equipment'}
                </span>
                <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase">
                  {p.category === 'spare_part' ? 'Genuine Part' : '1 Year Warranty'}
                </span>
              </div>
              <Link
                to={p.category === 'spare_part' ? "/spare-parts" : "/quote"}
                className="inline-flex items-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                {p.category === 'spare_part' ? 'View Details' : 'Get a Quote'} <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ProductsPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    if (id === 'commercial-egg-incubators') setActiveFilter('commercial');
    else if (id === 'egg-hatchers') setActiveFilter('hatchers');
    else if (id === 'small-medium-capacity-incubators') setActiveFilter('small_medium');

    // Scroll to top to prevent native jump behavior
    window.scrollTo(0, 0);
  }, [hash]);

  const filteredProducts = equipmentData.filter(e => {
    const matchesCategory = activeFilter === 'all' || e.category === activeFilter;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      {/* Category pills & Search */}
      <div className="bg-white border-b border-slate-100 py-4 sticky top-[60px] md:top-[64px] z-30 shadow-sm">
        <div className="container-custom flex flex-col xl:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'spare_part') {
                    navigate('/spare-parts');
                    return;
                  }
                  setActiveFilter(cat.id);
                  setSearchQuery('');
                }}
                className={`text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full transition-colors border ${activeFilter === cat.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary border-slate-200 hover:border-primary/30'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full xl:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full text-sm bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all shadow-inner"
            />
          </div>
        </div>
      </div>

      <div className="bg-light-gray py-12 min-h-[500px]">
        <div className="container-custom">

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : activeFilter === 'hatchers' && !searchQuery ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm text-center max-w-3xl mx-auto relative overflow-hidden my-12"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                  <Info size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Premium Egg Hatchers <br className="hidden md:block" /> Coming Soon
                </h3>
                <p className="text-slate-500 mb-8 max-w-lg leading-relaxed">
                  We are engineering a new line of high-performance standalone egg hatchers designed for uniform airflow, ideal humidity, and maximum chick survival rates. Stay tuned for our upcoming launch.
                </p>

                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-primary/10 text-primary font-bold px-6 py-3 rounded-xl transition-all duration-300 border border-slate-200 hover:border-primary/30"
                >
                  Inquire About Pre-orders <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm mt-8">
              <Search size={40} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>No products found</h3>
              <p className="text-slate-500">We couldn't find anything matching your search criteria.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 text-primary hover:text-blue-600 font-semibold text-sm underline underline-offset-4"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>

        {/* CTA to spare parts */}
        {activeFilter !== 'spare_part' && (
          <div className="container-custom mt-20">
            <div className="text-center p-8 bg-navy rounded-3xl border border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-white font-black text-2xl md:text-3xl mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Looking for <span className="text-primary">Spare Parts?</span>
                </h3>
                <p className="text-white/70 text-base mb-8 max-w-2xl mx-auto">
                  We stock genuine replacement parts including trays, controllers, heaters, motors, and fans for all Sun Incubator models. Fast delivery across India.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('spare_part');
                    setSearchQuery('');
                  }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(20,115,230,0.4)] hover:shadow-[0_0_30px_rgba(20,115,230,0.6)] hover:-translate-y-1 text-sm uppercase tracking-wide cursor-pointer"
                >
                  View Genuine Spare Parts <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <StatsBar />
      <GetQuote />
    </div>
  );
}

