import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">What Our Customers Say</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            CUSTOMER <span className="text-primary">TESTIMONIALS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <div className="glass rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-base leading-relaxed flex-1 mb-8 italic">
                    "{t.text}"
                  </p>

                  {/* Customer */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1473E6]/20 border border-[#1473E6]/40 flex items-center justify-center text-[#1473E6] font-black text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">{t.name}</div>
                      <div className="text-white/50 text-xs mt-0.5">{t.business} · {t.location}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
