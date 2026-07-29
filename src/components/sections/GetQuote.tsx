import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PHONE = '919440551559';

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
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    state: '', product: '', capacity: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello Sun Incubators,`,
      `I would like a quotation for:`,
      ``,
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : '',
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      `State: ${form.state}`,
      `Product: ${form.product}`,
      form.capacity ? `Required Capacity: ${form.capacity}` : '',
      form.message ? `\nMessage: ${form.message}` : '',
      ``,
      `Please share:`,
      `• Price`,
      `• Delivery time`,
      `• Shipping charges`,
      `• Product brochure`,
    ].filter(l => l !== undefined && l !== null);
    const msg = lines.join('\n');
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
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

                {/* Submit button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black py-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
                    SEND ENQUIRY ON WHATSAPP
                  </button>
                </div>
              </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
