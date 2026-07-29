import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { LayoutGrid, Images, LogOut, Menu, X } from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) navigate('/admin/login');
  }, [navigate]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  function logout() {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  }

  const nav = [
    { to: '/admin/products', label: 'Products', icon: LayoutGrid },
    { to: '/admin/gallery', label: 'Gallery', icon: Images },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div>
          <img src="/logo.jpeg" alt="Sun Incubators" className="h-8 object-contain" />
          <p className="text-white/40 text-[10px] mt-1 font-bold uppercase tracking-widest">Admin Panel</p>
        </div>
        <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white/60 hover:text-white">
          <X size={20} />
        </button>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {nav.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              pathname.startsWith(to)
                ? 'bg-primary text-white'
                : 'text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-white/60 hover:bg-white/10 hover:text-white transition-colors w-full"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <div className="h-screen flex bg-slate-50 overflow-hidden">

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 bg-navy flex-col shrink-0 h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-navy flex flex-col z-50 md:hidden transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Mobile top bar */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-navy border-b border-white/10 shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="text-white/70 hover:text-white">
            <Menu size={22} />
          </button>
          <img src="/logo.jpeg" alt="Sun Incubators" className="h-7 object-contain" />
          <span className="text-white font-bold text-sm ml-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Admin Panel
          </span>
        </header>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
