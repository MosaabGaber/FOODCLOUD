import { useNavigate } from 'react-router-dom';
import { Map, BarChart2, Package, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ThreePillarsProps {
  onOpenContact: (source: string) => void;
}

export default function ThreePillars({ onOpenContact }: ThreePillarsProps) {
  const navigate = useNavigate();

  const pillars = [
    {
      id: 'gtm-advisory',
      title: 'GTM Advisory',
      body: 'We uncover the genuine challenges in your target market and build a smarter path to entry — the right channels, the right partners, the right pricing — with a fraction of the usual risk.',
      buttonText: 'Explore GTM Advisory',
      icon: Map,
      path: '/gtm-advisory',
      delay: 0,
    },
    {
      id: 'market-management',
      title: 'Market Management',
      body: "We become your eyes, ears, and hands on the ground — managing distributors, tracking performance, and unlocking your brand's full potential in the MENA market.",
      buttonText: 'Explore Market Management',
      icon: BarChart2,
      path: '/market-management',
      delay: 150,
    },
    {
      id: 'ingredients-solutions',
      title: 'Ingredients & Solutions',
      body: 'Through BLNDZ, we source premium ingredients and develop tailored solutions for bakery, ice cream, and confectionery operators. Milk powder, palm oil, cocoa, yeast.',
      buttonText: 'Explore Ingredients',
      icon: Package,
      path: '/ingredients-solutions',
      delay: 300,
    },
  ];

  return (
    <section
      id="three-pillars"
      className="bg-[#F0F7FF] py-24 px-6 md:px-14 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[48px] text-deep-navy tracking-tight leading-tight">
            Do it all with FoodCloud.
          </h2>
        </div>

        {/* 3D Perspective Card Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ perspective: '1200px' }}
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.id}
                delay={pillar.delay}
                direction="up"
                className="h-full"
              >
                <div
                  className="liquid-glass-card liquid-glass-card-hover h-full flex flex-col justify-between"
                >
                  {/* Glass layers */}
                  <div className="liquid-glass-card-before" />
                  <div className="liquid-glass-card-after" />

                  {/* Card Content (z-index 2) */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon */}
                      <div className="mb-6 inline-block text-white/85 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                        <IconComponent className="w-8 h-8" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3.5 tracking-tight">
                        {pillar.title}
                      </h3>

                      {/* Body */}
                      <p className="font-sans font-normal text-sm text-white/75 leading-[1.7] mb-8">
                        {pillar.body}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <button
                        onClick={() => navigate(pillar.path)}
                        className="white-pill-button group cursor-pointer shadow-md shadow-bright-blue/10"
                      >
                        <span>{pillar.buttonText}</span>
                        <ArrowRight className="w-4 h-4 text-[#0D1F5C] transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      
      {/* Anchor targets to match link clicks perfectly */}
      <div id="ingredients-section" className="absolute bottom-0 left-0 h-1 w-1 pointer-events-none opacity-0" />
    </section>
  );
}
