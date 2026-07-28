import GetQuote from '../components/sections/GetQuote';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-20">
      <section className="bg-hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0B6FF5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              CONTACT <span className="text-primary">US</span>
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-sm">
              Reach out to our team — we respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
      <Contact />
      <GetQuote />
    </div>
  );
}
