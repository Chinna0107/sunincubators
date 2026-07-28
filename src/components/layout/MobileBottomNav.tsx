import { NavLink } from 'react-router-dom';
import { Home, Package, Wrench, Shield, Phone } from 'lucide-react';

const navItems = [
  { label: 'HOME', path: '/', icon: Home },
  { label: 'PRODUCTS', path: '/products', icon: Package },
  { label: 'SERVICES', path: '/services', icon: Wrench },
  { label: 'WHY CHOOSE US', path: '/why-choose-us', icon: Shield },
  { label: 'CONTACT', path: '/contact', icon: Phone },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[800] md:hidden bg-[#040C16] border-t border-primary/20 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 min-w-[62px] ${
                  isActive
                    ? 'bg-[#1473E6] text-white shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <Icon size={18} className="mb-0.5" />
              <span className="text-[9px] font-black tracking-tight uppercase whitespace-nowrap">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
