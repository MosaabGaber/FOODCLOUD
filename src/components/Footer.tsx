import { Mail, Globe, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContact: (source: string) => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-[#060913] text-white pt-16 pb-7 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/7 mb-6">
          
          {/* Column 1: Brand (Span 2 for 2fr ratio on 5-col grid) */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.svg" 
                alt="FOODCLOUD Logo" 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="font-sans font-normal text-xs sm:text-[13px] text-white/35 max-w-[230px] leading-relaxed mb-6">
              Empowering brands. Expanding horizons. Since 2021.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@foodcloud-me.com"
                className="group flex items-center gap-2 text-white/30 hover:text-[#93C5FD] font-sans text-xs transition-all duration-250 hover:translate-x-0.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@foodcloud-me.com</span>
              </a>
              <a
                href="https://www.foodcloud-me.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/30 hover:text-[#93C5FD] font-sans text-xs transition-all duration-250 hover:translate-x-0.5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>www.foodcloud-me.com</span>
              </a>
              <a
                href="tel:+971565511448"
                className="group flex items-center gap-2 text-white/30 hover:text-[#93C5FD] font-sans text-xs transition-all duration-250 hover:translate-x-0.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+971 56 551 1448</span>
              </a>
              <div
                onClick={() => onOpenContact('Map Address Click')}
                className="group flex items-center gap-2 text-white/30 hover:text-[#93C5FD] font-sans text-xs transition-all duration-250 hover:translate-x-0.5 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>IFZA · Building A2 · Dubai · UAE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-display font-bold text-[10px] text-white tracking-[2.5px] uppercase mb-5.5">
              SERVICES
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'GTM Advisory', target: 'three-pillars' },
                { label: 'Market Management', target: 'three-pillars' },
                { label: 'Ingredients & Solutions', target: 'three-pillars' },
                { label: 'BLNDZ Solutions', target: 'three-pillars' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToId(item.target)}
                  className="text-left font-sans text-[13px] text-white/35 hover:text-[#93C5FD] transition-all hover:translate-x-0.5 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Channels */}
          <div>
            <h4 className="font-display font-bold text-[10px] text-white tracking-[2.5px] uppercase mb-5.5">
              CHANNELS
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Retail', target: 'distribution-channels' },
                { label: 'HORECA', target: 'distribution-channels' },
                { label: 'B2B Sourcing', target: 'distribution-channels' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToId(item.target)}
                  className="text-left font-sans text-[13px] text-white/35 hover:text-[#93C5FD] transition-all hover:translate-x-0.5 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-display font-bold text-[10px] text-white tracking-[2.5px] uppercase mb-5.5">
              COMPANY
            </h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToId('why-foodcloud')}
                className="text-left font-sans text-[13px] text-white/35 hover:text-[#93C5FD] transition-all hover:translate-x-0.5 cursor-pointer"
              >
                About FoodCloud
              </button>
              <button
                onClick={() => scrollToId('partner-ticker')}
                className="text-left font-sans text-[13px] text-white/35 hover:text-[#93C5FD] transition-all hover:translate-x-0.5 cursor-pointer"
              >
                Our Brands
              </button>
              <button
                onClick={() => scrollToId('partner-ticker')}
                className="text-left font-sans text-[13px] text-white/35 hover:text-[#93C5FD] transition-all hover:translate-x-0.5 cursor-pointer"
              >
                Partners
              </button>
              <button
                onClick={() => onOpenContact('Footer Contact Link')}
                className="text-left font-sans text-[13px] text-white/35 hover:text-[#93C5FD] transition-all hover:translate-x-0.5 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 font-sans text-[11px]">
          <span>© 2025 FoodCloud. All rights reserved.</span>
          <span>Dubai, UAE · Est. 2021</span>
        </div>

      </div>
    </footer>
  );
}
