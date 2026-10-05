import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Droplets, Leaf, Coffee, Settings, Wheat, IceCream, Candy } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface IngredientsAndSolutionsProps {
  onOpenContact: (source: string) => void;
}

export default function IngredientsAndSolutions({ onOpenContact }: IngredientsAndSolutionsProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[480px] bg-hero-gradient flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <img
          src="/lab.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ opacity: 0.40 }}
        />
        <div className="absolute inset-0 bg-[#0A0F2E]/55 z-10"></div>
        <div className="absolute top-24 left-6 md:left-14 z-20">
          <button
            onClick={() => navigate('/')}
            className="font-display font-semibold text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>

        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          <span className="font-display font-bold text-[10px] tracking-[3px] text-[#93C5FD] uppercase mb-3 block">
            OUR SERVICES
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-[64px] text-white tracking-[-1.5px] leading-tight mb-6">
            Ingredients & Solutions
          </h1>
          <p className="font-sans font-normal text-lg md:text-[18px] text-white/70 max-w-[560px] leading-[1.65] mb-10">
            Diverse sourcing and product development capabilities to uplift the operational and financial efficiencies for operators.
          </p>
          <button
            onClick={() => onOpenContact('Ingredients Hero')}
            className="bg-bright-blue hover:bg-royal-blue saturate-[180%] text-white font-display font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer group"
          >
            <span>Request Sourcing Info</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* BLNDZ INTRO SECTION */}
      <section className="bg-white py-[80px] px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <ScrollReveal direction="up">
              <span className="font-display font-bold text-[12px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
                OUR PLATFORM
              </span>
              <h2 className="font-display font-extrabold text-[40px] md:text-[52px] text-[#0A0F2E] tracking-[-1.5px] leading-tight mb-6">
                Meet BLNDZ.
              </h2>
              <p className="font-sans font-normal text-base text-[#64748B] leading-[1.7] max-w-[480px] mb-10">
                BLNDZ is FOODCLOUD's dedicated ingredients and solutions platform. We source and supply premium food ingredients to bakery, ice cream, and confectionery operators across the MENA region, helping them control costs, improve products, and optimise their processes.
              </p>
              <button
                onClick={() => onOpenContact('BLNDZ Intro')}
                className="bg-bright-blue hover:bg-royal-blue saturate-[180%] text-white font-display font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Request Sourcing Info</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </button>
            </ScrollReveal>
          </div>
          <div className="h-full">
            <ScrollReveal direction="up" delay={150} className="h-full">
              <div className="bg-dark-card-gradient rounded-3xl p-10 h-full flex flex-col justify-center shadow-2xl border border-white/10">
                <span className="font-display font-bold text-[13px] text-[#93C5FD] tracking-[2px] uppercase mb-8 block">
                  BLNDZ Solutions
                </span>
                <ul className="space-y-6">
                  {[
                    "Cost Control",
                    "Product Enhancement",
                    "Process Improvement"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#93C5FD]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-[#93C5FD]" />
                      </div>
                      <span className="font-display font-semibold text-lg text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* INGREDIENTS WE SOURCE */}
      <section className="bg-[#0A0F2E] saturate-[180%] relative py-[80px] px-6 md:px-[60px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(27, 64, 144, 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-display font-bold text-[12px] text-[#93C5FD] tracking-[3px] uppercase mb-3 block">
              WHAT WE SOURCE
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-white tracking-tight mb-4">
              Premium ingredients, reliably sourced.
            </h2>
            <p className="font-sans font-normal text-base text-white/50 leading-[1.65]">
              We work with trusted global suppliers to deliver consistent quality across all our ingredient categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-[52px]">
            {[
              {
                title: "Milk Powder",
                body: "High-quality milk powder for dairy applications in bakery, ice cream, and confectionery production.",
                icon: Droplets
              },
              {
                title: "Oils",
                body: "Sustainably sourced oils for food manufacturing across the region.",
                icon: Leaf
              },
              {
                title: "Cocoa",
                body: "Premium cocoa for confectionery and bakery — consistent in quality, reliable in supply.",
                icon: Coffee
              },
              {
                title: "Solutions",
                body: "Smart systems to improve quality, efficiency, and cost.",
                icon: Settings
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100} direction="up">
                  <div className="bg-dark-card-gradient rounded-[20px] p-8 h-full border border-white/5 shadow-xl text-center flex flex-col items-center">
                    <Icon className="w-[36px] h-[36px] text-white/70 mb-5" />
                    <h3 className="font-display font-bold text-[20px] text-white mb-3">{card.title}</h3>
                    <p className="font-sans font-normal text-[13px] text-white/55 leading-[1.6]">
                      {card.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTORS WE SERVE */}
      <section className="bg-[#F0F7FF] py-[80px] px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-12">
            <span className="font-display font-bold text-[14px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
              WHO WE SUPPLY
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-[#0A0F2E] tracking-tight">
              Built for food operators.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
            {[
              {
                title: "Bakery",
                icon: Wheat
              },
              {
                title: "Ice Cream",
                icon: IceCream
              },
              {
                title: "Confectionery",
                icon: Candy
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
                  <div className="liquid-glass-card h-full p-8 md:p-10 flex flex-col justify-start">
                    <div className="liquid-glass-card-before" />
                    <div className="liquid-glass-card-after" />
                    <div className="relative z-10">
                      <div className="mb-6 inline-block text-white/85 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                        <Icon className="w-[28px] h-[28px]" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">{card.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-white py-16 px-6 md:px-14">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[#1B4090] z-0" />

          <div className="relative z-10 py-16 px-8 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-10 md:mb-0">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
                Looking for a reliable ingredients partner?
              </h2>
              <p className="font-sans font-normal text-base text-white/90 leading-relaxed">
                Let's discuss your sourcing needs and how BLNDZ can support your operation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => onOpenContact('Ingredients CTA')}
                className="bg-bright-blue hover:bg-royal-blue saturate-[180%] text-white font-display font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                Request Sourcing Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
