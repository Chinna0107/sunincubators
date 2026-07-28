import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-20 right-4 z-[750] flex flex-col items-end gap-2.5 md:bottom-8 md:right-8">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919440551559"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-3 md:px-4 rounded-full shadow-lg shadow-[#25D366]/30 group"
        title="WhatsApp"
      >
        <MessageCircle size={20} className="shrink-0" />
        <span className="hidden md:inline text-sm font-semibold overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+919440551559"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-[#1473E6] text-white px-3 py-3 md:px-4 rounded-full shadow-lg shadow-[#1473E6]/30 group"
        title="Call Us"
      >
        <Phone size={20} className="shrink-0" />
        <span className="hidden md:inline text-sm font-semibold overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Call Now
        </span>
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-[#06111F] text-white border border-[#1473E6]/40 rounded-full shadow-lg hover:bg-[#1473E6] transition-colors duration-300"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
