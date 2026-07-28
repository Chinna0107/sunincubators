import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const MAP_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.3!2d78.6!3d17.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSYNO+159%2C+Surya+Sai+Nagar%2C+Turkayamjal%2C+Hyderabad%2C+Telangana+501510!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin`;

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section ref={ref} className="section-padding bg-light-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Reach Out</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            CONTACT <span className="text-primary">US</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Map + info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card" style={{ height: '280px' }}>
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sun Engineering Works Location"
              />
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: <Phone size={18} />, label: 'Phone', lines: ['9440551559', '9440551669'] },
                  { icon: <Mail size={18} />, label: 'Email', lines: ['sunincubators@gmail.com'] },
                  { icon: <Clock size={18} />, label: 'Business Hours', lines: ['Mon–Sat: 9 AM – 7 PM', 'Sunday: Closed'] },
                  { icon: <MapPin size={18} />, label: 'Address', lines: ['SYNO 159, Surya Sai Nagar,', 'Turkayamjal X road, Abdullapurmet Mandal,', 'Ranga Reddy Dist, Hyderabad – 501510, Telangana'] },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-navy font-bold text-xs mb-0.5">{item.label}</div>
                      {item.lines.map(l => (
                        <div key={l} className="text-slate-500 text-xs leading-relaxed">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-card h-full">
              <h3 className="text-navy font-black text-xl mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Send Us A Message
              </h3>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-navy font-bold">Message sent! We'll reply soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-navy text-xs font-semibold mb-1 block">Your Name</label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1473E6] focus:ring-1 focus:ring-[#1473E6] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-navy text-xs font-semibold mb-1 block">Your Phone</label>
                      <input
                        name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1473E6] focus:ring-1 focus:ring-[#1473E6] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-navy text-xs font-semibold mb-1 block">Your Message</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange}
                      rows={6} placeholder="Your Message"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-[#1473E6] focus:ring-1 focus:ring-[#1473E6] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#1473E6] hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide"
                  >
                    <Send size={16} /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
