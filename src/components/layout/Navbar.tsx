import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X, Send, Home, Package, Wrench, HelpCircle, PhoneCall, FileText } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Products',
    path: '/products',
    dropdown: [
      { label: 'All Products', path: '/products' },
      { label: 'Spare Parts', path: '/spare-parts' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'All Services', path: '/services' },
      { label: 'Get a Quote', path: '/quote' },
    ],
  },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Contact Us', path: '/contact' },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* ── DESKTOP NAVBAR ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[900] hidden md:flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#06111F] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-2'
            : 'bg-[#06111F]/95 py-3'
        }`}
        style={{ borderBottom: '1px solid rgba(11,111,245,0.15)' }}
      >
        <div className="container-custom flex items-center justify-between w-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src={logoImg}
              alt="Sun Incubators Logo"
              className="h-10 md:h-12 w-auto object-contain mix-blend-screen"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="font-black text-white text-[15px] md:text-[17px] tracking-wide"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                SUN INCUBATORS<sup className="text-[10px] ml-0.5 text-primary">®</sup>
              </span>
              <span className="text-[9px] md:text-[10px] text-blue-300 tracking-widest uppercase">
                Sun Engineering Works
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-0.5">
            {navLinks.map(link => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-white hover:text-primary hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </NavLink>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-44 rounded-xl overflow-hidden shadow-xl border border-primary/20"
                        style={{ background: '#06111F' }}
                      >
                        {link.dropdown.map(item => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                                isActive ? 'text-primary bg-primary/10' : 'text-white/80 hover:text-primary hover:bg-white/5'
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/quote"
              className="flex items-center gap-1.5 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-black tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(11,111,245,0.5)]"
            >
              <Send size={12} />
              GET A QUOTE
            </Link>
            <a
              href="tel:+919440551559"
              className="flex items-center gap-1.5 border border-primary/40 hover:border-primary hover:bg-primary/10 text-white hover:text-primary px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
            >
              <Phone size={12} className="text-primary" />
              <span>
                <span className="block text-[9px] text-white/50 leading-none">CALL US NOW</span>
                <span className="font-bold text-white text-[11px]">9440551559</span>
              </span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE HEADER ──────────────────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[900] md:hidden"
        style={{ background: '#06111F' }}
      >
        {/* Top action bar */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: '#051b3d' }}
        >
          <a
            href="tel:+919440551559"
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <Phone size={16} className="text-[#2EA4FF]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-white/70 font-medium tracking-wide">Call Us Now</span>
              <span className="text-sm font-black text-white tracking-wide">9440551559</span>
            </div>
          </a>
          <Link
            to="/quote"
            className="flex items-center gap-1.5 text-white px-4 py-2 rounded text-[11px] font-black tracking-wide shadow-md"
            style={{ background: '#1473E6' }}
          >
            GET A QUOTE <FileText size={14} />
          </Link>
        </div>

        {/* Logo row + hamburger */}
        <div className="flex items-center justify-between px-4 py-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg overflow-hidden">
              <img
                src={logoImg}
                alt="Sun Incubators"
                className="w-full h-full object-cover"
                style={{ objectPosition: '45% 15%', transform: 'scale(1.5) translateY(-4px)' }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-black text-white text-sm"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                SUN INCUBATORS<sup className="text-[8px] text-primary">®</sup>
              </span>
              <span className="text-[9px] text-blue-300 tracking-wider">Sun Engineering Works</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
              style={{ borderTop: '1px solid rgba(11,111,245,0.2)', background: '#06111F' }}
            >
              <nav className="px-4 py-3 flex flex-col gap-1 pb-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
