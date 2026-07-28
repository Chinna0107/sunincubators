import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './components/effects/Loader';
import ScrollProgress from './components/effects/ScrollProgress';
import FloatingButtons from './components/effects/FloatingButtons';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBottomNav from './components/layout/MobileBottomNav';

import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import SparePartsPage from './pages/SparePartsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="pb-14 md:pb-0">
        <PageTransition>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/spare-parts" element={<SparePartsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollProgress />
      <FloatingButtons />

      {loading && <Loader onComplete={() => setLoading(false)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppContent />
      </motion.div>
    </BrowserRouter>
  );
}
