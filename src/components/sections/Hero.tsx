import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import hero1 from '../../assets/hero1.jpeg';
import hero2 from '../../assets/hero2.jpeg';
import hero3 from '../../assets/hero3.jpeg';
import hero4 from '../../assets/hero4.jpeg';

const slides = [
  {
    id: 1,
    tagline: 'ENGINEERING TRUST.',
    tagline2: 'DELIVERING PERFORMANCE.',
    highlight: 'SINCE 2004.',
    sub: 'Designing and manufacturing premium commercial egg incubation systems for poultry farms across India.',
    imgSrc: hero1,
  },
  {
    id: 2,
    tagline: 'PRECISION ENGINEERED.',
    tagline2: 'BUILT TO LAST.',
    highlight: '20+ YEARS.',
    sub: 'Trusted by 1000+ poultry farmers across 28 states. Experience the Sun Incubators difference.',
    imgSrc: hero2,
  },
  {
    id: 3,
    tagline: 'MAXIMUM HATCHABILITY.',
    tagline2: 'MINIMUM ENERGY.',
    highlight: 'INDIA-WIDE.',
    sub: 'Our machines are engineered for consistent performance, low operating costs, and long-term reliability.',
    imgSrc: hero3,
  },
  {
    id: 4,
    tagline: 'SMART TECHNOLOGY.',
    tagline2: 'OPTIMIZED YIELD.',
    highlight: 'FUTURE READY.',
    sub: 'Embracing modern technology to deliver smart incubation solutions for better yield.',
    imgSrc: hero4,
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#000000',
        paddingTop: 0,
      }}
    >
      {/* Tech dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A9EFF 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Top blue glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ background: '#1473E6' }}
      />

      {/* Nav arrows */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 border border-white/20 backdrop-blur-md items-center justify-center text-white hover:bg-[#1473E6] transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute right-4 lg:left-auto lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 border border-white/20 backdrop-blur-md items-center justify-center text-white hover:bg-[#1473E6] transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="w-full hero-swiper relative z-20"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full flex items-center min-h-[360px] sm:min-h-[460px] md:min-h-[560px] pt-[120px] sm:pt-[130px] md:pt-[96px]">
              <div className="container-custom w-full">
                <div className="flex flex-row items-center justify-between gap-4 md:gap-10 py-6 md:py-12">

                  {/* ── LEFT: Text ── */}
                  <motion.div
                    key={`text-${slide.id}-${idx}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-[1.4] md:flex-[1.2] max-w-lg text-left z-10 min-w-0"
                  >
                    <h1
                      className="font-black leading-[1.1] text-white"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(1.1rem, 3.8vw, 3.25rem)',
                      }}
                    >
                      {slide.tagline}
                      <br />
                      {slide.tagline2}
                      <br />
                      <span style={{ color: '#1473E6' }}>{slide.highlight}</span>
                    </h1>

                    {/* Blue line separator under tagline */}
                    <div className="w-8 sm:w-12 h-[3px] bg-[#1473E6] my-2.5 sm:my-4 rounded-full" />

                    <p
                      className="mb-4 sm:mb-6 md:mb-8 leading-relaxed text-slate-300 font-normal"
                      style={{
                        fontSize: 'clamp(0.68rem, 1.8vw, 1rem)',
                        maxWidth: '420px',
                      }}
                    >
                      {slide.sub}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Link
                        to="/products"
                        className="flex items-center justify-between gap-2 font-bold tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-0.5 px-3 py-2.5 sm:px-6 sm:py-3.5 text-[9px] sm:text-[11px] md:text-[12px] bg-[#1473E6] text-white shadow-[0_4px_20px_rgba(20,115,230,0.45)]"
                      >
                        <span>EXPLORE PRODUCTS</span>
                        <ArrowRight size={13} />
                      </Link>

                      <Link
                        to="/contact"
                        className="flex items-center justify-between gap-2 font-bold tracking-wider rounded-lg transition-all duration-300 hover:bg-white/10 px-3 py-2.5 sm:px-6 sm:py-3.5 text-[9px] sm:text-[11px] md:text-[12px] bg-transparent text-white border border-white/30"
                      >
                        <span>CONTACT US</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.div>

                  {/* ── RIGHT: Image ── */}
                  <motion.div
                    key={`img-${slide.id}-${idx}`}
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="flex-[1] md:flex-[1] flex items-center justify-end z-10 w-full min-w-0"
                    style={{ maxWidth: '520px' }}
                  >
                    {/* Radial glow behind image */}
                    <div className="relative w-full">
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse at center, rgba(20,115,230,0.18) 0%, transparent 70%)',
                          transform: 'scale(1.15)',
                        }}
                      />
                      <img
                        src={slide.imgSrc}
                        alt={slide.tagline}
                        className="relative w-full h-auto object-contain"
                        style={{
                          maxHeight: 'clamp(160px, 35vw, 420px)',
                          mixBlendMode: 'lighten',
                          filter: 'brightness(1.05) contrast(1.05)',
                        }}
                      />
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
