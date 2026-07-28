import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { equipmentData } from '../data/products';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import GetQuote from '../components/sections/GetQuote';

export default function ProductDetail() {
  const { id } = useParams();
  const product = equipmentData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl text-navy font-bold">Product not found</h2>
        <Link to="/products" className="text-primary mt-4 inline-block">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-20">
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <Link to="/equipment" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:gap-3 transition-all duration-200">
            <ArrowLeft size={16} /> Back to Equipment
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <ImagePlaceholder label={product.placeholder} src={product.imgSrc} alt={product.title} dark={false} aspectRatio="aspect-[4/3]" className="rounded-2xl" />
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Sun Incubators Product</span>
              <h1 className="text-3xl md:text-4xl font-black text-navy mt-2 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {product.title}
              </h1>
              <p className="text-slate-500 text-base leading-relaxed mb-6">{product.fullDesc || product.shortDesc}</p>

              {product.specs && (
                <div className="mb-6">
                  <h3 className="text-navy font-bold text-sm mb-3">Technical Specifications:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-slate-400 text-xs font-semibold uppercase">{key}</span>
                        <span className="text-navy font-bold text-sm">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.features && (
                <div className="mb-8">
                  <h3 className="text-navy font-bold text-sm mb-3">Key Features:</h3>
                  <div className="space-y-3">
                    {product.features.map(f => {
                      const splitIdx = f.indexOf(':');
                      const boldPart = splitIdx > -1 ? f.substring(0, splitIdx + 1) : f;
                      const rest = splitIdx > -1 ? f.substring(splitIdx + 1) : '';
                      return (
                        <div key={f} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm leading-relaxed">
                            <span className="font-bold text-navy">{boldPart}</span>{rest}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/quote"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  Request Quote
                </Link>
                <a
                  href="https://wa.me/919440551559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href="tel:+919440551559"
                  className="flex items-center justify-center gap-2 border border-slate-200 text-navy font-bold py-3.5 px-5 rounded-lg hover:border-[#1473E6] hover:text-[#1473E6] transition-all duration-300 text-sm"
                >
                  <Phone size={16} /> Call
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GetQuote />
    </div>
  );
}
