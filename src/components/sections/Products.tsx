import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Box } from 'lucide-react';
import hero2 from '../../assets/hero2.jpeg';
import smallImg from '../../assets/small.jpeg';
import hero8 from '../../assets/hero8.jpeg';
import hero34 from '../../assets/hero34.jpeg'

const homeProducts = [
  {
    id: 'commercial-egg-incubators',
    title: 'COMMERCIAL EGG INCUBATORS',
    imgSrc: hero2,
    link: '/products#commercial-egg-incubators'
  },
  {
    id: 'egg-hatchers',
    title: 'Poultry Equipments',
    imgSrc: hero34,
    link: '/products#egg-hatchers'
  },
  {
    id: 'small-medium-capacity-incubators',
    title: 'SMALL AND MEDIUM CAPACITY INCUBATORS',
    imgSrc: smallImg,
    link: '/products#small-medium-capacity-incubators'
  },
  {
    id: 'spare-parts-category',
    title: 'POULTRY INCUBATOR SPARE PARTS',
    imgSrc: hero8,
    link: '/spare-parts'
  },
];

export default function Products() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-8 sm:py-12 bg-slate-50 border-t border-slate-200/60">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border border-[#1473E6]/30 bg-white shadow-sm text-[#1473E6]">
              <Box size={16} className="stroke-[2]" />
            </div>
            <span
              className="text-[#1473E6] font-bold text-xs sm:text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              OUR PRODUCT RANGE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/products"
              className="flex items-center gap-1 text-[#1473E6] text-xs font-extrabold tracking-wider hover:gap-2 transition-all duration-200 uppercase"
            >
              <span>VIEW ALL</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* 4 Cards Responsive Grid matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {homeProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={product.link}
                className="group flex flex-col items-center justify-between bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#1473E6]/30 transition-all duration-300 h-full text-center"
              >
                <div className="w-full aspect-square relative flex items-center justify-center p-2 mb-3 bg-slate-50/50 rounded-xl">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-[#06111F] font-bold text-[11px] sm:text-xs md:text-sm leading-snug tracking-wide uppercase"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {product.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
