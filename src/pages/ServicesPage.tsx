import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Wrench, Settings, HeartHandshake, ShieldCheck, Phone,
  BookOpen, Lightbulb, TrendingUp, Users, Package
} from 'lucide-react';
import GetQuote from '../components/sections/GetQuote';
import StatsBar from '../components/sections/StatsBar';

const services = [
  {
    icon: <Wrench size={32} />,
    title: 'Installation',
    desc: 'Professional on-site installation of egg incubators and hatchers by our trained engineers. Complete setup, wiring, and system integration at your facility.',
    points: ['Site survey & planning', 'Full machine installation', 'Electrical wiring & integration', 'Commissioning test run'],
  },
  {
    icon: <Settings size={32} />,
    title: 'Commissioning',
    desc: 'Thorough commissioning of all installed machines — calibration, function testing, trial runs, and handover documentation for full operational readiness.',
    points: ['System calibration', 'Trial hatch verification', 'Operator handover training', 'Documentation & checklist'],
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Preventive Maintenance',
    desc: 'Scheduled preventive maintenance visits to keep your incubators running at peak performance. Reduce downtime and extend machine life.',
    points: ['Periodic inspection visits', 'Cleaning & lubrication', 'Parts wear assessment', 'Performance log reports'],
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Breakdown Service',
    desc: 'Rapid response breakdown service across India. Our technicians are available to diagnose and repair any machine fault, minimizing hatch cycle disruption.',
    points: ['24/7 emergency response', 'On-site diagnostics', 'Fast spare parts supply', 'Pan-India service network'],
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'AMC (Annual Maintenance Contract)',
    desc: 'Comprehensive AMC packages for commercial hatcheries. Priority service, scheduled visits, discounted spare parts, and dedicated support throughout the year.',
    points: ['Priority call handling', 'Scheduled PM visits', 'Discounted spare parts', 'Dedicated service engineer'],
  },
  {
    icon: <Phone size={32} />,
    title: 'Technical Support',
    desc: 'Expert remote and on-site technical support for troubleshooting, parameter setting, and process optimization of your incubation systems.',
    points: ['Remote phone/video support', 'On-site troubleshooting', 'Parameter optimization', 'WhatsApp support channel'],
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Consultation',
    desc: 'Professional incubation consultancy for new hatchery setup, capacity planning, energy optimization, and technology selection advice.',
    points: ['Hatchery feasibility study', 'Capacity planning', 'Energy efficiency audit', 'Technology recommendation'],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Machine Upgradation',
    desc: 'Upgrade your existing incubators with modern controllers, digital displays, automatic humidity systems, and energy-efficient components.',
    points: ['Controller upgrades', 'Humidity system upgrades', 'Digital panel retrofitting', 'Energy-saving modifications'],
  },
  {
    icon: <Users size={32} />,
    title: 'Customer Training',
    desc: 'Hands-on training programs for hatchery operators and managers. Learn best practices for incubation management, machine operation, and hygiene.',
    points: ['Machine operation training', 'Hygiene & biosecurity', 'Hatch record management', 'Troubleshooting basics'],
  },
  {
    icon: <Package size={32} />,
    title: 'Spare Parts Supply',
    desc: 'Genuine Sun Incubators spare parts supplied directly from our warehouse. Fast delivery across India — trays, heating elements, motors, sensors, and more.',
    points: ['100% genuine spare parts', 'Fast pan-India delivery', 'All models supported', 'Bulk order discounts'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
      className="group bg-white border border-slate-100 hover:border-primary/30 rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(11,111,245,0.12)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-8">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {service.icon}
        </div>
        <h3 className="text-navy font-black text-lg mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>

        <ul className="flex flex-col gap-1.5 mb-5">
          {service.points.map(p => (
            <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              {p}
            </li>
          ))}
        </ul>

        <Link
          to="/quote"
          className="inline-flex items-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white text-xs font-bold px-5 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Send Inquiry →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-20">
      {/* Hero banner */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0B6FF5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              OUR <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
              Complete end-to-end support for your poultry incubation business — from installation to annual maintenance, training, and genuine spare parts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-navy" style={{ fontFamily: 'Outfit, sans-serif' }}>
              10 WAYS WE <span className="text-primary">SERVE YOU</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
              Sun Incubators provides comprehensive after-sales and technical services across all 28+ states of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <GetQuote />
    </div>
  );
}
