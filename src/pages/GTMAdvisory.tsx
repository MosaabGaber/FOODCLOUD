import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CtaBanner from '../components/CtaBanner';

interface GTMAdvisoryProps {
  onOpenContact: (source: string) => void;
}

export default function GTMAdvisory({ onOpenContact }: GTMAdvisoryProps) {
  const navigate = useNavigate();

  // Animation logic for Stage 2 Process Steps
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineActive, setLineActive] = useState(false);
  const [activeSteps, setActiveSteps] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineActive(true);
          const timers = [
            setTimeout(() => setActiveSteps((prev) => [true, prev[1], prev[2], prev[3]]), 100),
            setTimeout(() => setActiveSteps((prev) => [prev[0], true, prev[2], prev[3]]), 500),
            setTimeout(() => setActiveSteps((prev) => [prev[0], prev[1], true, prev[3]]), 1000),
            setTimeout(() => setActiveSteps((prev) => [prev[0], prev[1], prev[2], true]), 1500),
          ];
          if (sectionRef.current) observer.unobserve(sectionRef.current);
          return () => timers.forEach(clearTimeout);
        }
      },
      { threshold: 0.15 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const gtmSteps = [
    {
      num: 'STEP 01',
      title: 'Segment & Range',
      desc: 'Identify the portfolio where you have the highest competitive advantage.',
    },
    {
      num: 'STEP 02',
      title: 'Coverage Objectives',
      desc: 'Scope the most relevant channels for optimum penetration and cost to serve.',
    },
    {
      num: 'STEP 03',
      title: 'Pricing Strategy',
      desc: 'Develop pricing relative to competition, gross margin, and portfolio mix.',
    },
    {
      num: 'STEP 04',
      title: 'Distribution Partners',
      desc: 'Define selection criteria: ambition, focus, capabilities, category relevance, and reach.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[480px] bg-hero-gradient flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F2E]/55 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 font-display font-semibold text-[13px] text-white/60 hover:text-white transition-colors flex items-center cursor-pointer"
          >
            ← Back to Home
          </button>
          <span className="font-display font-bold text-[10px] tracking-[3px] text-[#93C5FD] uppercase mb-3 block">
            OUR SERVICES
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-[64px] text-white tracking-[-1.5px] leading-tight mb-6">
            GTM Advisory
          </h1>
          <p className="font-sans font-normal text-lg md:text-[18px] text-white/70 max-w-[560px] leading-[1.65] mb-10">
            An integrated business model offering a smarter choice for agile business expansion — with limited investments and lower risk.
          </p>
          <button
            onClick={() => onOpenContact('GTM Advisory Hero')}
            className="white-pill-button group cursor-pointer shadow-lg shadow-bright-blue/20"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="w-4 h-4 text-[#0D1F5C] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* THREE SUB-SERVICES OVERVIEW */}
      <section className="bg-[#F0F7FF] py-[80px] px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-display font-extrabold text-3xl md:text-[44px] text-[#0A0F2E] tracking-[-1.5px] mb-12">
            Three stages. One clear path to market.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
            <ScrollReveal delay={0} direction="up" className="h-full">
              <div className="liquid-glass-card h-full">
                <div className="liquid-glass-card-before" />
                <div className="liquid-glass-card-after" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block text-white/85 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                    <Search className="w-[28px] h-[28px]" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 tracking-tight">Market Assessment</h3>
                  <p className="font-sans font-normal text-sm text-white/75 leading-[1.7]">
                    Uncover the genuine challenges within your target market and map the path to success.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="up" className="h-full">
              <div className="liquid-glass-card h-full">
                <div className="liquid-glass-card-before" />
                <div className="liquid-glass-card-after" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block text-white/85 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                    <TrendingUp className="w-[28px] h-[28px]" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 tracking-tight">GTM Strategy</h3>
                  <p className="font-sans font-normal text-sm text-white/75 leading-[1.7]">
                    Build the right portfolio, channel, pricing, and distribution partner strategy.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up" className="h-full">
              <div className="liquid-glass-card h-full">
                <div className="liquid-glass-card-before" />
                <div className="liquid-glass-card-after" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block text-white/85 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                    <Rocket className="w-[28px] h-[28px]" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 tracking-tight">Market Readiness</h3>
                  <p className="font-sans font-normal text-sm text-white/75 leading-[1.7]">
                    Finalize distributors, commercial terms, launch portfolio, and go-live plan.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MARKET ASSESSMENT DEEP DIVE */}
      <section className="bg-white relative py-[80px] px-6 md:px-[60px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(27,64,144,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-display font-bold text-[10px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
            STAGE 01
          </span>
          <h2 className="font-display font-bold text-3xl md:text-[38px] text-[#0A0F2E] max-w-[640px] tracking-[-1px] mb-12">
            Uncover the genuine challenges within the market to establish a clear and effective path to success.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: "Size of Prize",
                body: "Understand the market size, trends, growth trajectory, and key channels."
              },
              {
                title: "Market Landscape",
                body: "Identify key players and understand their offering, pricing, trade structure, and universe."
              },
              {
                title: "Customer Needs",
                body: "Learn customers' priorities, purchase dynamics, and usage insights."
              },
              {
                title: "Gap & Opportunity Analysis",
                body: "Define key challenges and opportunities to develop potential entry and growth strategies."
              }
            ].map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="bg-dark-card-gradient rounded-[20px] p-8 h-full border border-white/5 shadow-xl">
                  <h3 className="font-display font-bold text-[18px] text-white mb-3">{card.title}</h3>
                  <p className="font-sans font-normal text-[13px] text-white/65 leading-[1.65]">
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GTM STRATEGY DEEP DIVE */}
      <section ref={sectionRef} className="bg-[#0A0F2E] relative py-[80px] px-6 md:px-[60px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(27, 64, 144, 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-display font-bold text-[10px] text-[#93C5FD] tracking-[3px] uppercase mb-3 block">
            STAGE 02
          </span>
          <h2 className="font-display font-bold text-3xl md:text-[38px] text-white max-w-[680px] tracking-tight mb-16">
            The right distribution partners and a smart pricing strategy are the cornerstones of a successful GTM strategy.
          </h2>

          <div className="relative mt-12">
            {/* Connecting Line — desktop only */}
            <div className="hidden md:block absolute top-4.5 left-[12.5%] right-[12.5%] h-px bg-bright-blue/25 z-0">
              <div
                className="h-full bg-gradient-to-r from-bright-blue to-[#93C5FD] transition-all ease-out"
                style={{
                  width: lineActive ? '100%' : '0%',
                  transitionDuration: '1600ms',
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
              {gtmSteps.map((step, idx) => {
                const isActive = activeSteps[idx];
                return (
                  <ScrollReveal
                    key={step.num}
                    delay={idx * 150}
                    direction="up"
                    className="group px-0 md:px-5 relative z-10 text-center md:text-left flex flex-col items-center md:items-start"
                  >
                    {/* Step Number Circle */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center mb-7 z-10 transition-all duration-300 ${
                        isActive
                          ? 'border-2 border-[#1B4090] bg-[#0A0F2E] shadow-[0_0_12px_rgba(27,64,144,0.5)] scale-100'
                          : 'border border-bright-blue/30 bg-bright-blue/15'
                      } group-hover:border-[#1B4090] group-hover:scale-110`}
                      style={{
                        animation: isActive ? 'pulseOnce 0.4s ease-out' : 'none',
                      }}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-[#1B4090] transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-50'
                        }`}
                      />
                    </div>

                    <span className="font-display font-bold text-[10px] text-bright-blue/50 group-hover:text-bright-blue tracking-[2px] uppercase mb-2 block transition-colors">
                      {step.num}
                    </span>

                    <h3 className="font-display font-bold text-lg text-white mb-2.5 transition-colors group-hover:text-[#93C5FD]">
                      {step.title}
                    </h3>

                    <p className="font-sans font-normal text-xs sm:text-[13px] text-white/40 leading-[1.65] max-w-xs md:max-w-none">
                      {step.desc}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes pulseOnce {
            0%   { transform: scale(1); }
            50%  { transform: scale(1.3); }
            100% { transform: scale(1); }
          }
        `}</style>
      </section>

      {/* MARKET READINESS DEEP DIVE */}
      <section className="bg-[#F0F7FF] py-[80px] px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-bold text-[10px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
            STAGE 03
          </span>
          <h2 className="font-display font-bold text-3xl md:text-[38px] text-[#0A0F2E] tracking-tight mb-12">
            From shortlist to launch — we get your brand market-ready.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ perspective: '1200px' }}>
            {[
              { title: "Distributor Scoping", body: "Shortlist potential distributors and negotiate commercial terms and collaboration agreements." },
              { title: "Business Objectives", body: "Build launch reach and volume targets with a 6-month outlook aligned with principal and distributor." },
              { title: "Portfolio", body: "Develop the launch phase portfolio along with potential range for the next phase." },
              { title: "Launch Planning", body: "Agree launch support and customer engagement activities for go-live." }
            ].map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
                <div className="liquid-glass-card h-full p-8 md:p-10 flex flex-col justify-start">
                  <div className="liquid-glass-card-before" />
                  <div className="liquid-glass-card-after" />
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-xl text-white mb-3">{card.title}</h3>
                    <p className="font-sans font-normal text-[14px] text-white/75 leading-[1.65]">
                      {card.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER (Custom text but same style) */}
      <section className="bg-white py-16 px-6 md:px-14">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[#F4715B] z-0" />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)),linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05))] bg-[length:24px_24px] bg-[position:0_0,12px_12px]" />
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl z-0" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-3xl z-0" />

          <div className="relative z-10 py-16 px-8 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-10 md:mb-0">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
                Ready to enter the Middle East market?
              </h2>
              <p className="font-sans font-normal text-base text-white/90 leading-relaxed">
                Let's build your market entry strategy together — from assessment to launch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => onOpenContact('GTM Advisory CTA')}
                className="bg-deep-navy hover:bg-[#111A42] text-white px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-transform hover:-translate-y-1 shadow-lg cursor-pointer flex-1 md:flex-none text-center"
              >
                Book a Discovery Call
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-all shadow-md backdrop-blur-sm cursor-pointer flex-1 md:flex-none text-center"
              >
                Back to Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
