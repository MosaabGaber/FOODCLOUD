import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerTicker from './components/PartnerTicker';
import ThreePillars from './components/ThreePillars';
import ProcessSteps from './components/ProcessSteps';
import DistributionChannels from './components/DistributionChannels';
import WhyFoodCloud from './components/WhyFoodCloud';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSource, setContactSource] = useState('General Inquiry');

  const openContactModal = (source: string) => {
    setContactSource(source);
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-deep-navy selection:bg-bright-blue/20 selection:text-bright-blue antialiased">
      {/* Dynamic Navigation */}
      <Navbar onOpenContact={openContactModal} />

      {/* Main Sections */}
      <main className="pt-16">
        {/* Section 1: Hero */}
        <Hero onOpenContact={openContactModal} />

        {/* Section 2: Partner Brand Ticker */}
        <PartnerTicker />

        {/* Section 3: Three Service Pillars */}
        <ThreePillars onOpenContact={openContactModal} />

        {/* Section 4: Four Process Steps */}
        <ProcessSteps />

        {/* Section 5: Three Distribution Channels */}
        <DistributionChannels onOpenContact={openContactModal} />

        {/* Section 6: Why FoodCloud (2x2 Grid) */}
        <WhyFoodCloud />

        {/* Section 7: Final CTA Banner */}
        <CtaBanner onOpenContact={openContactModal} />
      </main>

      {/* Section 8: Five-Column Footer */}
      <Footer onOpenContact={openContactModal} />

      {/* Interactive Contact Drawer Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialSource={contactSource}
      />
    </div>
  );
}
