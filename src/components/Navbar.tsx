import { useState } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (source: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'GTM Advisory', target: 'three-pillars' },
    { label: 'Market Management', target: 'distribution-channels' },
    { label: 'Ingredients & Solutions', target: 'ingredients-section' },
    { label: 'Our Brands', target: 'partner-ticker' },
    { label: 'Company', target: 'why-foodcloud' },
  ];

  const handleLinkClick = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-between px-6 md:px-14 bg-[#0A0F2E]/85 backdrop-blur-[20px] saturate-[180%] border-b border-white/8 shadow-lg"
      >
        {/* Left: Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer select-none"
        >
          <img
            src="/logo.png"
            alt="FOODCLOUD Logo"
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.target)}
              className="font-display font-semibold text-sm text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: CTA / Mobile Menu buttons */}
        <div className="flex items-center gap-3">
          {/* Desktop Button */}
          <button
            onClick={() => onOpenContact('Navbar Button')}
            className="hidden sm:inline-flex bg-bright-blue hover:bg-royal-blue text-white rounded-lg px-5 py-2 font-display font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Get in Touch
          </button>

          {/* Mobile Button: Icon only */}
          <button
            onClick={() => onOpenContact('Mobile Navbar Button')}
            className="sm:hidden bg-bright-blue hover:bg-royal-blue text-white rounded-lg p-2.5 flex items-center justify-center transition-all hover:scale-105"
            aria-label="Get in Touch"
          >
            <Mail className="w-4 h-4" />
          </button>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[#0A0F2E]/95 backdrop-blur-lg flex flex-col pt-24 px-6 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.target)}
              className="font-display font-semibold text-lg text-white/80 hover:text-white text-left py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenContact('Mobile Menu Bottom');
            }}
            className="mt-6 w-full bg-bright-blue hover:bg-royal-blue text-white py-3 rounded-xl font-display font-semibold text-center flex items-center justify-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}