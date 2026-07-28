import Hero from '../components/sections/Hero';
import FeatureStrip from '../components/sections/FeatureStrip';
import CompanyOverview from '../components/sections/CompanyOverview';
import Products from '../components/sections/Products';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import StatsBar from '../components/sections/StatsBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureStrip />
      <CompanyOverview />
      <Products />
      <WhyChooseUs />
      <Services />
      <StatsBar />
    </main>
  );
}
