import Hero from '../components/Hero';
import PartnerTicker from '../components/PartnerTicker';
import ThreePillars from '../components/ThreePillars';
import ProcessSteps from '../components/ProcessSteps';
import DistributionChannels from '../components/DistributionChannels';
import WhyFoodCloud from '../components/WhyFoodCloud';
import CtaBanner from '../components/CtaBanner';

interface HomeProps {
  onOpenContact: (source: string) => void;
}

export default function Home({ onOpenContact }: HomeProps) {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero onOpenContact={onOpenContact} />

      {/* Section 2: Partner Brand Ticker */}
      <PartnerTicker />

      {/* Section 3: Three Service Pillars */}
      <ThreePillars onOpenContact={onOpenContact} />

      {/* Section 4: Four Process Steps */}
      <ProcessSteps />

      {/* Section 5: Three Distribution Channels */}
      <DistributionChannels onOpenContact={onOpenContact} />

      {/* Section 6: Why FoodCloud (2x2 Grid) */}
      <WhyFoodCloud />

      {/* Section 7: Final CTA Banner */}
      <CtaBanner onOpenContact={onOpenContact} />
    </>
  );
}
