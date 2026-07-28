import Gallery from '../components/sections/Gallery';
import GetQuote from '../components/sections/GetQuote';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-20">
      <section className="bg-hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0B6FF5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              PHOTO <span className="text-primary">GALLERY</span>
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-sm">
              Official images from Sun Incubators — products, factory, installations, and team.
            </p>
          </motion.div>
        </div>
      </section>
      <Gallery />
      <GetQuote />
    </div>
  );
}
