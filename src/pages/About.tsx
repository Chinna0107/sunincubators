import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Globe, ShieldCheck, ThumbsUp, Users, Award, Cpu, Zap } from 'lucide-react';
import StatsBar from '../components/sections/StatsBar';
import GetQuote from '../components/sections/GetQuote';
import logoImg from '../assets/logo.jpg';

const timeline = [
  { year: '2004', event: 'Sun Engineering Works founded in Hyderabad, Telangana.' },
  { year: '2008', event: 'Expanded product line to include full commercial egg incubators.' },
  { year: '2012', event: 'Reached 200+ customers milestone across South India.' },
  { year: '2016', event: 'Pan-India expansion — serving 15+ states.' },
  { year: '2020', event: 'Launched custom incubation solution division.' },
  { year: '2024', event: '1000+ customers, 5000+ machines, 28+ states served.' },
];

const values = [
  { icon: <Calendar size={24} />, title: 'Since 2004', desc: '20+ years of manufacturing excellence in poultry incubation.' },
  { icon: <Cpu size={24} />, title: 'Precision Engineering', desc: 'Every machine built to exacting specifications for reliability.' },
  { icon: <Globe size={24} />, title: 'India Wide', desc: 'Trusted by poultry farmers across 28+ states nationwide.' },
  { icon: <Zap size={24} />, title: 'Energy Efficient', desc: 'Our machines save up to 30% energy vs. competitors.' },
  { icon: <ShieldCheck size={24} />, title: 'Quality Assured', desc: 'Every unit rigorously tested before delivery.' },
  { icon: <ThumbsUp size={24} />, title: 'Customer Focused', desc: 'Your success is our mission — end-to-end support.' },
  { icon: <Users size={24} />, title: 'Expert Team', desc: 'Skilled engineers and technicians with decades of experience.' },
  { icon: <Award size={24} />, title: 'Premium Quality', desc: 'Industrial-grade materials, premium finish, built to last.' },
];

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="pt-24 md:pt-20">
      {/* Hero banner */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0B6FF5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <img src={logoImg} alt="Sun Incubators" className="w-24 h-24 object-contain mx-auto mb-6 drop-shadow-xl" />
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              ABOUT <span className="text-[#1473E6]">US</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
              20+ years of engineering trust. The story of Sun Engineering Works & Sun Incubators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Section>
            <p className="text-slate-500 text-lg leading-relaxed mb-4">
              Our company, established in 2004, is a leading manufacturer and expert in the design and production of high-quality automatic egg incubators and we provide complete range of spare parts.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-4">
              With over two decades of experience in the industry, we specialize in providing innovative and reliable incubation solutions for various sectors, including poultry farming, commercial hatcheries.
            </p>
            <p className="text-navy font-bold text-lg">
              We are dedicated to quality and service.
            </p>
          </Section>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-mid">
        <div className="container-custom">
          <Section className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              OUR <span className="text-primary">JOURNEY</span>
            </h2>
          </Section>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            <div className="flex flex-col gap-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-2xl p-5 border border-white/10 hover:border-[#1473E6]/30 transition-colors inline-block max-w-sm shadow-md">
                      <div className="text-[#1473E6] font-black text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.year}</div>
                      <div className="text-white/70 text-sm">{t.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#1473E6] rounded-full shrink-0 shadow-lg hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Section className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-navy" style={{ fontFamily: 'Outfit, sans-serif' }}>
              OUR <span className="text-primary">VALUES</span>
            </h2>
          </Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1473E6]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#1473E6]/10 rounded-xl flex items-center justify-center text-[#1473E6] mx-auto mb-4 group-hover:bg-[#1473E6] group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-navy font-black text-sm mb-2">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <GetQuote />
    </div>
  );
}
