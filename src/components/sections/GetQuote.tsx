import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MessageCircle, Phone } from 'lucide-react';

const states = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Jammu & Kashmir','Ladakh','Other'
];

const productOptions = [
  'Commercial Egg Incubators',
  'Egg Hatchers',
  'Combined Setter & Hatcher Systems',
  'Poultry Incubator Spare Parts',
  'Custom Incubation Solutions',
  'Other / Not Sure',
];

export default function GetQuote() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    state: '', product: '', capacity: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 focus:bg-white/15 transition-all duration-200";
  const labelClass = "text-white/70 text-xs font-semibold mb-1 block";

  return (
    <section ref={ref} className="section-padding bg-blue-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            GET A <span className="text-white/90 underline decoration-white/30">FREE QUOTE</span>
          </h2>
          <p className="text-white/70 mt-3 text-sm max-w-lg mx-auto">
            Tell us your requirements and our team will respond within 24 hours with a detailed quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-blue rounded-3xl p-6 md:p-10 shadow-premium">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white font-black text-2xl mb-2">Quote Request Sent!</h3>
                <p className="text-white/70 text-sm">Our team will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Your Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Full Name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Company / Farm Name</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State *</label>
                  <select name="state" required value={form.state} onChange={handleChange} className={inputClass}>
                    <option value="" className="bg-navy">Select State</option>
                    {states.map(s => <option key={s} value={s} className="bg-navy">{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Product Interest *</label>
                  <select name="product" required value={form.product} onChange={handleChange} className={inputClass}>
                    <option value="" className="bg-navy">Select Product</option>
                    {productOptions.map(p => <option key={p} value={p} className="bg-navy">{p}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Required Capacity (Eggs)</label>
                  <input name="capacity" value={form.capacity} onChange={handleChange} placeholder="e.g. 1056 eggs, 5000 eggs, custom" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Additional Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe your requirements..." className={`${inputClass} resize-none`} />
                </div>

                {/* Submit buttons */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-[#1473E6] font-black py-3.5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
                  >
                    <Send size={16} /> REQUEST QUOTE
                  </button>
                  <a
                    href="https://wa.me/919440551559?text=Hi, I'd like to get a quote for Sun Incubators products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black py-3.5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
                  >
                    <MessageCircle size={16} /> WHATSAPP
                  </a>
                  <a
                    href="tel:+919440551559"
                    className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold py-3.5 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    <Phone size={16} /> CALL NOW
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
