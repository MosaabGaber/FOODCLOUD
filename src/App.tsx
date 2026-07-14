import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import GTMAdvisory from './pages/GTMAdvisory';
import MarketManagement from './pages/MarketManagement';
import IngredientsAndSolutions from './pages/IngredientsAndSolutions';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSource, setContactSource] = useState('General Inquiry');
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <Routes>
          <Route path="/" element={<Home onOpenContact={openContactModal} />} />
          <Route path="/gtm-advisory" element={<GTMAdvisory onOpenContact={openContactModal} />} />
          <Route path="/market-management" element={<MarketManagement onOpenContact={openContactModal} />} />
          <Route path="/ingredients-solutions" element={<IngredientsAndSolutions onOpenContact={openContactModal} />} />
        </Routes>
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
