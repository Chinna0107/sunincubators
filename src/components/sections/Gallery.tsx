import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';
import { galleryItems, galleryCategories } from '../../data/gallery';

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory);

  return (
    <section ref={ref} className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            PHOTO <span className="text-primary">GALLERY</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">Official images from Sun Incubators operations</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold capitalize transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-blue-glow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="masonry-grid"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="masonry-grid-item group relative cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightbox(item)}
              >
                <div className={`w-full overflow-hidden ${i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.parentElement!.classList.add('bg-slate-100', 'flex', 'items-center', 'justify-center');
                      el.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-[10px] text-white bg-gradient-to-t from-navy/80 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-center">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9000] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                >
                  <X size={28} />
                </button>
                <img
                  src={lightbox.imgSrc}
                  alt={lightbox.label}
                  className="w-full aspect-[4/3] object-contain rounded-2xl max-h-[80vh]"
                />
                <p className="text-center text-white/60 text-sm mt-4">{lightbox.label}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
