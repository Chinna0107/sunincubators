import CounterCard from '../ui/CounterCard';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Happy Customers' },
  { value: 5000, suffix: '+', label: 'Machines Installed' },
  { value: 28, suffix: '+', label: 'States Served' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction' },
];

export default function StatsBar() {
  return (
    <section className="bg-[#040C16] border-t border-white/10 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <CounterCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
