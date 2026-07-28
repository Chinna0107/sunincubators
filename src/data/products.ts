import hero2 from '../assets/hero2.jpeg';
import smallImg from '../assets/small.jpeg';
import hero5 from '../assets/hero5.jpeg';
import hero6 from '../assets/hero6.jpeg';
import hero7 from '../assets/hero7.jpeg';
import hero8 from '../assets/hero8.jpeg';


export interface Equipment {
  id: string;
  title: string;
  category: 'incubator' | 'spare_part';
  shortDesc: string;
  fullDesc?: string;
  features?: string[];
  specs?: Record<string, string>;
  imgSrc?: string;
  placeholder: string;
}

export const equipmentData: Equipment[] = [
  // ── Incubators ──────────────────────────────────────────────────────────────
  {
    id: 'commercial-egg-incubator',
    title: 'Commercial Egg Incubators',
    category: 'incubator',
    shortDesc: 'Fully automatic incubators engineered for superior hatchability, precise temperature control.',
    imgSrc: hero2,
    placeholder: 'Commercial Egg Incubator',
  },
  {
    id: 'egg-hatcher',
    title: 'Egg Hatchers',
    category: 'incubator',
    shortDesc: 'High-performance hatchers designed for uniform airflow, ideal humidity, and maximum chick survival.',
    imgSrc: '/images/products/egg-hatcher.jpg',
    placeholder: 'Egg Hatchers',
  },
  {
    id: 'small-medium-capacity-incubators',
    title: 'Small and Medium Capacity Incubators',
    category: 'incubator',
    shortDesc: 'Integrated incubation systems offering seamless incubation and hatching in one efficient solution for small and medium farms.',
    imgSrc: smallImg,
    placeholder: 'Small and Medium Capacity Incubators',
  },
  {
    id: 'spare-parts-category',
    title: 'Poultry Incubator Spare Parts',
    category: 'incubator',
    shortDesc: 'Premium-quality controllers, heaters, fans, motors, sensors, trays, and all essential accessories.',
    imgSrc: hero8,
    placeholder: 'Poultry Incubator Spare Parts',
  },
  {
    id: 'custom-incubation',
    title: 'Custom Incubation Solutions',
    category: 'incubator',
    shortDesc: 'Tailor-made incubators designed according to customer capacity and operational requirements.',
    imgSrc: '/images/products/custom-incubation.jpg',
    placeholder: 'Custom Incubation Solutions',
  },
  // ── Specific Models ──────────────────────────────────────────────────────────
  {
    id: 'sun-1200',
    title: 'SUN-1200 Automatic Egg Incubator',
    category: 'incubator',
    shortDesc: 'Advanced technology automatic egg incubator with 1200 egg capacity. Digital temperature & humidity control.',
    imgSrc: '/images/products/sun-1200.jpg',
    placeholder: 'SUN-1200 Incubator',
  },
  {
    id: 'duck-34000',
    title: '34,000 Duck Egg Incubator',
    category: 'incubator',
    shortDesc: 'Specialized high-capacity incubator for duck eggs with precision humidity management.',
    imgSrc: '/images/products/duck-34000.jpg',
    placeholder: '34,000 Duck Incubator',
  },
  {
    id: 'incubator-15000',
    title: '15,000 Egg Incubator',
    category: 'incubator',
    shortDesc: 'Large-scale commercial egg incubator for high-volume hatcheries with uniform airflow system.',
    imgSrc: '/images/products/incubator-15000.jpg',
    placeholder: '15,000 Egg Incubator',
  },
  {
    id: 'hatcher-5000',
    title: '5000 Egg Incubator Cum Hatcher',
    category: 'incubator',
    shortDesc: 'Combined incubator and hatcher with 5000 egg capacity. Ideal for medium commercial hatcheries.',
    imgSrc: '/images/products/hatcher-5000.jpg',
    placeholder: '5000 Egg Incubator',
  },
  {
    id: 'hatcher-3000',
    title: '3000 Egg Incubator Cum Hatcher',
    category: 'incubator',
    shortDesc: 'Combined incubator and hatcher with 3000 egg capacity for consistent hatching performance.',
    imgSrc: '/images/products/hatcher-3000.jpg',
    placeholder: '3000 Egg Incubator',
  },
  {
    id: 'hatcher-1200',
    title: '1200 Eggs Capacity Incubator Cum Hatcher',
    category: 'incubator',
    shortDesc: 'Combined incubator and hatcher with 1200 egg capacity. Suitable for small to medium farms.',
    imgSrc: '/images/products/hatcher-1200.jpg',
    placeholder: '1200 Egg Incubator',
  },
  {
    id: 'hatcher-600',
    title: '600 Eggs Capacity Incubator Cum Hatcher',
    category: 'incubator',
    shortDesc: 'Compact combined incubator and hatcher for medium operations. Energy efficient design.',
    imgSrc: '/images/products/hatcher-600.jpg',
    placeholder: '600 Egg Incubator',
  },
  {
    id: 'hatcher-180',
    title: '180 Egg Incubator Cum Hatcher',
    category: 'incubator',
    shortDesc: 'Compact incubator and hatcher for small-scale hatching operations and backyard poultry.',
    imgSrc: '/images/products/hatcher-180.jpg',
    placeholder: '180 Egg Incubator',
  },

  // ── Spare Parts ──────────────────────────────────────────────────────────────
  { id: 'tray-102',        title: '102 Setting Tray',         category: 'spare_part', shortDesc: '102 capacity egg setting tray for standard incubators.',             imgSrc: hero5,         placeholder: '102 Setting Tray' },
  { id: 'tray-quail',      title: 'Quail Setting Tray',       category: 'spare_part', shortDesc: 'Setting tray specially designed for quail eggs.',                    imgSrc: '/images/products/tray-quail.jpg',       placeholder: 'Quail Tray' },
  { id: 'tray-90',         title: '90 Setting Tray',          category: 'spare_part', shortDesc: '90 capacity egg setting tray for medium incubators.',                imgSrc: hero6,          placeholder: '90 Setting Tray' },
  { id: 'hatching-90',     title: '90 Hatching Tray',         category: 'spare_part', shortDesc: '90 capacity hatching tray for smooth chick emergence.',              imgSrc: '/images/products/hatching-90.jpg',      placeholder: '90 Hatching Tray' },
  { id: 'hatching-180',    title: '180 Hatching Tray',        category: 'spare_part', shortDesc: '180 capacity hatching tray for larger hatchers.',                    imgSrc: '/images/products/hatching-180.jpg',     placeholder: '180 Hatching Tray' },
  { id: 'egg-candler',     title: 'Egg Candler',              category: 'spare_part', shortDesc: 'High-visibility egg candler for fertility checking.',                 imgSrc: '/images/products/egg-candler.jpg',      placeholder: 'Egg Candler' },
  { id: 'fan-blades',      title: 'Fan Blades',               category: 'spare_part', shortDesc: 'Durable replacement fan blades for all incubator models.',           imgSrc: '/images/products/fan-blades.jpg',       placeholder: 'Fan Blades' },
  { id: 'fan-motor',       title: 'Fan Motor',                category: 'spare_part', shortDesc: 'High-performance fan motor for consistent airflow.',                  imgSrc: '/images/products/fan-motor.jpg',        placeholder: 'Fan Motor' },
  { id: 'linear-actuator', title: 'Linear Actuator',          category: 'spare_part', shortDesc: 'Precision linear actuator for automatic egg turning.',               imgSrc: '/images/products/linear-actuator.jpg',  placeholder: 'Linear Actuator' },
  { id: 'turning-motor',   title: 'Turning Motor',            category: 'spare_part', shortDesc: 'Reliable egg turning motor for consistent rotation.',                 imgSrc: '/images/products/turning-motor.jpg',    placeholder: 'Turning Motor' },
  { id: 'micro-switch',    title: 'Micro Switch',             category: 'spare_part', shortDesc: 'Precision micro switch for control panel circuits.',                  imgSrc: hero7,     placeholder: 'Micro Switch' },
  { id: 'fan-hub-set',     title: 'Fan Hub Set',              category: 'spare_part', shortDesc: 'Complete fan hub set for easy replacement.',                         imgSrc: '/images/products/fan-hub-set.jpg',      placeholder: 'Fan Hub Set' },
  { id: 'humidity-set',    title: 'Humidity Set',             category: 'spare_part', shortDesc: 'Replacement humidity management set for all models.',                 imgSrc: '/images/products/humidity-set.jpg',     placeholder: 'Humidity Set' },
  { id: 'heater',          title: 'Heating Element / Heater', category: 'spare_part', shortDesc: 'Industrial-grade heating element, energy-efficient and long-lasting.', imgSrc: '/images/products/heater.jpg',           placeholder: 'Heating Element' },
  { id: 'controller-inc',  title: 'Incubator Controller',     category: 'spare_part', shortDesc: 'Advanced digital incubator controller panel for precise control.',    imgSrc: '/images/products/controller-inc.jpg',   placeholder: 'Incubator Controller' },
  { id: 'controller-hum',  title: 'Humidity Controller',      category: 'spare_part', shortDesc: 'Digital humidity controller with alarm and auto-regulation.',         imgSrc: '/images/products/controller-hum.jpg',   placeholder: 'Humidity Controller' },
  { id: 'controller-temp', title: 'Temperature Controller',   category: 'spare_part', shortDesc: 'Precision digital temperature controller with ±0.1°C accuracy.',     imgSrc: '/images/products/controller-temp.jpg',  placeholder: 'Temp Controller' },
];
