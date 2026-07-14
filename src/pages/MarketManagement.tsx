import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface MarketManagementProps {
  onOpenContact: (source: string) => void;
}

export default function MarketManagement({ onOpenContact }: MarketManagementProps) {
  const navigate = useNavigate();

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
            Market Management
          </h1>
          <p className="font-sans font-normal text-lg md:text-[18px] text-white/70 max-w-[560px] leading-[1.65] mb-10">
            Solid expertise in diverse distribution models. Strong on-ground execution and effective operations management.
          </p>
          <button
            onClick={() => onOpenContact('Market Management Hero')}
            className="white-pill-button group cursor-pointer shadow-lg shadow-bright-blue/20"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4 text-[#0D1F5C] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* VALUE STATEMENT SECTION */}
      <section className="bg-white py-[80px] px-6 md:px-[60px]">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          <ScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl md:text-[32px] text-[#0A0F2E] tracking-[-0.5px] leading-[1.3] border-l-4 border-[#1B4090] pl-6 md:pl-8 text-left max-w-[680px] mx-auto">
              "Create awareness, grow penetration and engagement to unlock your brand's full potential in the market."
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <p className="font-sans font-normal text-base text-[#64748B] mt-8 max-w-[680px] mx-auto text-left pl-6 md:pl-8">
              From the moment your brand goes live in the MENA market, FoodCloud manages every operational touchpoint — so you can focus on growing the brand, not managing the logistics.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FOUR-STAGE MANAGEMENT CYCLE */}
      <section className="bg-[#0A0F2E] relative py-[80px] px-6 md:px-[60px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(27, 64, 144, 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-display font-bold text-[10px] text-[#93C5FD] tracking-[3px] uppercase mb-3 block">
            HOW WE MANAGE
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-white tracking-tight mb-12">
            A complete management cycle for your MENA market.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {[
              { num: '01', title: 'Business Planning', body: 'Agree annual objectives with the principal along with launches, initiatives and investments.' },
              { num: '02', title: 'Distributor Management', body: 'Manage and support distributor operations: sales performance, rolling forecast, stock replenishment, and payment.' },
              { num: '03', title: 'Performance Management', body: 'KPI assessment, corrective actions, and contingency planning when the market demands it.' },
              { num: '04', title: 'Reporting', body: 'Business reporting and analysis covering performance, market dynamics, competition, regulatory, and standards.' }
            ].map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="bg-dark-card-gradient rounded-[20px] p-8 h-full border border-white/5 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 font-display font-extrabold text-[120px] leading-none text-white/5 select-none pointer-events-none">
                    {card.num}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-[18px] text-white mb-3">{card.title}</h3>
                    <p className="font-sans font-normal text-[13px] text-white/65 leading-[1.65]">
                      {card.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BENEFITS SECTION */}
      <section className="bg-[#F0F7FF] py-[80px] px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-bold text-[10px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
            WHAT THIS MEANS FOR YOU
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-[#0A0F2E] tracking-tight mb-12">
            We operate as your MENA team.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
            {[
              { title: "Your on-ground team", body: "No need to build a local structure from scratch. We operate as your dedicated MENA arm — present, accountable, and aligned with your goals." },
              { title: "Problems solved early", body: "Constant monitoring means we identify distributor challenges before they escalate — and act fast to resolve them." },
              { title: "Full visibility, always", body: "Regular structured reporting keeps you informed on performance, market dynamics, and competitive activity at all times." }
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

      {/* CTA BANNER */}
      <section className="bg-white py-16 px-6 md:px-14">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-[#F4715B] z-0" />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)),linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05))] bg-[length:24px_24px] bg-[position:0_0,12px_12px]" />
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl z-0" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-3xl z-0" />

          <div className="relative z-10 py-16 px-8 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-10 md:mb-0">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
                Let's manage your MENA market together.
              </h2>
              <p className="font-sans font-normal text-base text-white/90 leading-relaxed">
                One dedicated partner. Full on-ground coverage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => onOpenContact('Market Management CTA')}
                className="bg-deep-navy hover:bg-[#111A42] text-white px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-transform hover:-translate-y-1 shadow-lg cursor-pointer flex-1 md:flex-none text-center"
              >
                Get in Touch
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
