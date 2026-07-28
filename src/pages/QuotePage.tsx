import GetQuote from '../components/sections/GetQuote';
import { motion } from 'framer-motion';

export default function QuotePage() {
  return (
    <div className="pt-24 md:pt-20">
      <section className="bg-hero-gradient py-16">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              GET A <span className="text-primary">QUOTE</span>
            </h1>
            <p className="text-white/60 max-w-md mx-auto text-sm">
              Fill in your requirements and our team will provide a detailed quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
      <GetQuote />
    </div>
  );
}
