import hero2 from '../assets/hero2.jpeg';
import smallImg from '../assets/small.jpeg';
import hero5 from '../assets/hero5.jpeg';
import hero6 from '../assets/hero6.jpeg';
import hero7 from '../assets/hero7.jpeg';
import hero8 from '../assets/hero8.jpeg';
import hero9 from '../assets/hero1.jpeg';
import hero10 from '../assets/hero9.jpeg';
import hero11 from '../assets/hero10.jpeg';
import hero12 from '../assets/hero11.jpeg';
import hero13 from '../assets/hero3.jpeg';
import hero14 from '../assets/hero12.jpeg';
import hero15 from '../assets/hero13.jpeg';
import hero16 from '../assets/hero15.jpeg';
import hero20 from '../assets/hero20.jpeg';
import hero21 from '../assets/hero21.jpeg';
import hero22 from '../assets/hero22.jpeg';
import hero23 from '../assets/hero23.jpeg';
import hero24 from '../assets/hero24.jpeg';
import hero25 from '../assets/hero25.jpeg';
import hero26 from '../assets/hero26.jpeg';
import hero27 from '../assets/hero31.jpeg';
import hero32 from '../assets/hero32.jpeg';
import hero34 from '../assets/hero34.jpeg';
import hero35 from '../assets/hero35.jpeg';







export interface Equipment {
  id: string;
  title: string;
  category: 'commercial' | 'hatchers' | 'small_medium' | 'spare_part';
  shortDesc: string;
  fullDesc?: string;
  features?: string[];
  specs?: Record<string, string>;
  imgSrc?: string;
  placeholder: string;
}

export const equipmentData: Equipment[] = [
  // ── Commercial Egg Incubators ───────────────────────────────────────────────
  {
    id: 'duck-34000',
    title: '34,000 Duck Egg Incubator',
    category: 'commercial',
    shortDesc: 'Specialized high-capacity incubator for duck eggs with precision humidity management.',
    imgSrc: hero15,
    placeholder: '34,000 Duck Incubator',
  },
  {
    id: 'incubator-30000',
    title: '30,000 Egg Incubator',
    category: 'commercial',
    shortDesc: 'High-capacity commercial egg incubator designed for large-scale operations.',
    imgSrc: hero24,
    placeholder: '30,000 Egg Incubator',
  },
  {
    id: 'incubator-15000',
    title: '15000 egg incubator and 5000 hatcher',
    category: 'commercial',
    shortDesc: 'Large-scale commercial egg incubator for high-volume hatcheries with uniform airflow system.',
    imgSrc: hero32,
    placeholder: '15,000 Egg Incubator',
  },
  {
    id: 'hatcher-5000',
    title: '10,080 egg capacity hatcher',
    category: 'commercial',
    shortDesc: 'Combined incubator and hatcher with 10,080 egg capacity. Ideal for medium commercial hatcheries.',
    imgSrc: hero27,
    placeholder: '5000 Egg Incubator',
  },
  {
    id: 'hatcher-3000',
    title: '3000 Egg Incubator Cum Hatcher',
    category: 'small_medium',
    shortDesc: 'Combined incubator and hatcher with 3000 egg capacity for consistent hatching performance.',
    imgSrc: hero12,
    placeholder: '3000 Egg Incubator',
  },
  // {
  //   id: 'custom-incubation',
  //   title: 'Custom Incubation Solutions',
  //   category: 'commercial',
  //   shortDesc: 'Tailor-made incubators designed according to customer capacity and operational requirements.',
  //   imgSrc: '/images/products/custom-incubation.jpg',
  //   placeholder: 'Custom Incubation Solutions',
  // },

  // ── Egg Hatchers ────────────────────────────────────────────────────────────
  // No products currently as requested.

  // ── Small and Medium Capacity Incubators ────────────────────────────────────
  {
    id: 'hatcher-1200',
    title: '1200 Eggs Capacity Incubator Cum Hatcher',
    category: 'small_medium',
    shortDesc: 'Combined incubator and hatcher with 1200 egg capacity. Suitable for small to medium farms.',
    imgSrc: hero11,
    placeholder: '1200 Egg Incubator',
  },
  {
    id: 'hatcher-600',
    title: '600 Eggs Capacity Incubator Cum Hatcher',
    category: 'small_medium',
    shortDesc: 'Compact combined incubator and hatcher for medium operations. Energy efficient design.',
    imgSrc: '/images/products/hatcher-600.jpg',
    placeholder: '600 Egg Incubator',
  },
  {
    id: 'hatcher-400',
    title: '400 Egg Capacity Incubator Cum Hatcher',
    category: 'small_medium',
    shortDesc: 'Efficient incubator and hatcher for medium scale production.',
    imgSrc: hero25,
    placeholder: '400 Egg Incubator',
  },
  {
    id: 'hatcher-180',
    title: '180 Egg Incubator Cum Hatcher',
    category: 'small_medium',
    shortDesc: 'Compact incubator and hatcher for small-scale hatching operations and backyard poultry.',
    imgSrc: '/images/products/hatcher-180.jpg',
    placeholder: '180 Egg Incubator',
  },

  // ── Spare Parts ──────────────────────────────────────────────────────────────
  { id: 'tray-102',        title: '102 Setting Tray',         category: 'spare_part', shortDesc: '102 capacity egg setting tray for standard incubators.',             imgSrc: hero5,         placeholder: '102 Setting Tray' },
  { id: 'tray-quail',      title: 'Quail Setting Tray',       category: 'spare_part', shortDesc: 'Setting tray specially designed for quail eggs.',                    imgSrc: hero10 ,       placeholder: 'Quail Tray' },
  { id: 'tray-90',         title: '90 Setting Tray',          category: 'spare_part', shortDesc: '90 capacity egg setting tray for medium incubators.',                imgSrc: hero6,          placeholder: '90 Setting Tray' },
  { id: 'hatching-90',     title: '90 Hatching Tray',         category: 'spare_part', shortDesc: '90 capacity hatching tray for smooth chick emergence.',              imgSrc: '/images/products/hatching-90.jpg',      placeholder: '90 Hatching Tray' },
  { id: 'hatching-180',    title: '180 Hatching Tray',        category: 'spare_part', shortDesc: '180 capacity hatching tray for larger hatchers.',                    imgSrc: '/images/products/hatching-180.jpg',     placeholder: '180 Hatching Tray' },
  { id: 'egg-candler',     title: 'Egg Candler',              category: 'spare_part', shortDesc: 'High-visibility egg candler for fertility checking.',                 imgSrc: '/images/products/egg-candler.jpg',      placeholder: 'Egg Candler' },
  { id: 'fan-blades',      title: 'Fan Blades',               category: 'spare_part', shortDesc: 'Durable replacement fan blades for all incubator models.',           imgSrc: '/images/products/fan-blades.jpg',       placeholder: 'Fan Blades' },
  { id: 'fan-motor',       title: 'Fan Motor',                category: 'spare_part', shortDesc: 'High-performance fan motor for consistent airflow.',                  imgSrc: '/images/products/fan-motor.jpg',        placeholder: 'Fan Motor' },
  { id: 'linear-actuator', title: 'Linear Actuator',          category: 'spare_part', shortDesc: 'Precision linear actuator for automatic egg turning.',               imgSrc: '/images/products/linear-actuator.jpg',  placeholder: 'Linear Actuator' },
  { id: 'turning-motor',   title: 'Turning Motor',            category: 'spare_part', shortDesc: 'Reliable egg turning motor for consistent rotation.',                 imgSrc: hero16,    placeholder: 'Turning Motor' },
  { id: 'micro-switch',    title: 'Micro Switch',             category: 'spare_part', shortDesc: 'Precision micro switch for control panel circuits.',                  imgSrc: hero7,     placeholder: 'Micro Switch' },
  { id: 'fan-hub-set',     title: 'Fan Hub Set',              category: 'spare_part', shortDesc: 'Complete fan hub set for easy replacement.',                         imgSrc: '/images/products/fan-hub-set.jpg',      placeholder: 'Fan Hub Set' },
  { id: 'humidity-set',    title: 'Humidity Set',             category: 'spare_part', shortDesc: 'Replacement humidity management set for all models.',                 imgSrc: hero26,     placeholder: 'Humidity Set' },
  { id: 'heater',          title: 'Heating Element / Heater', category: 'spare_part', shortDesc: 'Industrial-grade heating element, energy-efficient and long-lasting.', imgSrc: '/images/products/heater.jpg',           placeholder: 'Heating Element' },
  { id: 'controller-inc',  title: 'Incubator Controller',     category: 'spare_part', shortDesc: 'Advanced digital incubator controller panel for precise control.',    imgSrc: hero14,   placeholder: 'Incubator Controller' },
  { id: 'controller-hum',  title: 'Humidity Controller',      category: 'spare_part', shortDesc: 'Digital humidity controller with alarm and auto-regulation.',         imgSrc: '/images/products/controller-hum.jpg',   placeholder: 'Humidity Controller' },
  { id: 'controller-temp', title: 'Temperature Controller',   category: 'spare_part', shortDesc: 'Precision digital temperature controller with ±0.1°C accuracy.',     imgSrc: '/images/products/controller-temp.jpg',  placeholder: 'Temp Controller' },
  { id: 'poultry',          title: 'Poultry Equipments',                   category: 'hatchers', shortDesc: 'Poultry Equipments.', imgSrc: hero34, placeholder: 'Sensor' },
  { id: 'poultry',          title: 'Poultry Equipments',                   category: 'hatchers', shortDesc: 'Poultry Equipments.', imgSrc: hero35, placeholder: 'Sensor' },
  // { id: 'gunny-ring',      title: 'Gunny Ring',               category: 'hatchers', shortDesc: 'Durable gunny ring essential for proper moisture distribution.', imgSrc: hero21, placeholder: 'Gunny Ring' },
  // { id: 'spindle',         title: 'Spindle',                  category: 'hatchers', shortDesc: 'Sturdy replacement spindle for reliable mechanical operation.', imgSrc: hero22, placeholder: 'Spindle' },
  // { id: 'thermometer',     title: 'Dry and Wet Thermometer',  category: 'hatchers', shortDesc: 'Classic dry and wet bulb thermometer for accurate humidity monitoring.', imgSrc: hero23, placeholder: 'Dry & Wet Thermometer' },
];
