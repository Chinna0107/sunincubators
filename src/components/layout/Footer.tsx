import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

// Social icon SVGs
const FbIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IgIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>;
const YtIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>;
const LiIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Contact Us', path: '/contact' },
];

const productLinks = [
  { label: 'Egg Incubators', path: '/products' },
  { label: 'Hatcher Systems', path: '/products' },
  { label: 'Genuine Spare Parts', path: '/spare-parts' },
  { label: 'Custom Solutions', path: '/quote' },
];

export default function Footer() {
  return (
    <footer className="bg-[#06111F] border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1473E6]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white p-2 rounded-xl shadow-md shrink-0">
                <img src={logoImg} alt="Sun Incubators" className="h-9 w-auto object-contain" />
              </div>
              <div>
                <p className="font-black text-white text-base md:text-lg leading-none tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  SUN INCUBATORS<sup className="text-[10px] ml-0.5 text-[#1473E6]">®</sup>
                </p>
                <p className="text-[11px] text-[#1473E6] font-bold mt-1 uppercase tracking-wider">Sun Engineering Works</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
              Premium commercial egg incubation systems engineered for maximum hatchability, energy efficiency, and long-term reliability since 2004.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <FbIcon />, href: '#', label: 'Facebook' },
                { icon: <IgIcon />, href: 'https://www.instagram.com/sunincubators', label: 'Instagram' },
                { icon: <YtIcon />, href: '#', label: 'YouTube' },
                { icon: <LiIcon />, href: '#', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1473E6] hover:text-white hover:border-[#1473E6] hover:shadow-lg transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm md:text-base mb-4 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="group flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight size={13} className="text-[#1473E6] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white font-bold text-sm md:text-base mb-4 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="group flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight size={13} className="text-[#1473E6] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm md:text-base mb-4 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-xs md:text-sm">
              <a href="tel:+919440551559" className="group flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors">
                <Phone size={15} className="text-[#1473E6] shrink-0 mt-0.5" />
                <span>+91 9440551559</span>
              </a>
              <a href="mailto:sunincubators@gmail.com" className="group flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors">
                <Mail size={15} className="text-[#1473E6] shrink-0 mt-0.5" />
                <span>sunincubators@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={15} className="text-[#1473E6] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  SYNO 159, Surya Sai Nagar,<br />
                  Turkayamjal X Road, Abdullapurmet,<br />
                  Hyderabad – 501510, Telangana.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar — with pb-20 on mobile so bottom mobile nav never overlaps */}
      <div className="border-t border-white/5 bg-black/40 relative z-10">
        <div className="container-custom pt-5 pb-20 md:pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Sun Engineering Works. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
