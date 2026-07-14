import { useNavigate } from 'react-router-dom';
import { Route, BarChart2, Package } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface CompanyProps {
  onOpenContact: (source: string) => void;
}

export default function Company({ onOpenContact }: CompanyProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
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
            SINCE 2021
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-[64px] text-white tracking-[-1.5px] leading-tight">
            About FoodCloud
          </h1>
          <p className="font-sans font-normal text-lg md:text-[20px] text-white/70 max-w-[560px] leading-[1.65] mt-4">
            Empowering brands. Expanding horizons. Since 2021.
          </p>
        </div>
      </section>

      {/* SECTION 1 — WHO WE ARE */}
      <section className="bg-white py-[80px] px-6 md:px-[60px]">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal direction="up">
            <p className="font-sans font-normal text-[22px] text-[#1B4090] leading-[1.7] tracking-[-0.2px]">
              FoodCloud is a Dubai-based food distribution and advisory firm built on one belief — that great brands deserve a smarter, lower-risk path into new markets. We connect international and local food manufacturers with the right partners, channels, and strategies to grow across the Middle East and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 — VISION & MISSION */}
      <section className="bg-[#0A0F2E] relative py-[80px] px-6 md:px-[60px] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(27,64,144,0.25) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-[900px] mx-auto relative z-10 flex flex-col">
          
          {/* VISION BLOCK */}
          <ScrollReveal direction="up" delay={0} className="w-full">
            <div className="border-t border-white/10 py-[56px] flex flex-col md:flex-row md:items-center gap-10 md:gap-[60px]">
              <div className="md:w-[30%] flex flex-col">
                <span className="font-display font-bold text-[11px] text-[#93C5FD] tracking-[3px] uppercase">
                  OUR VISION
                </span>
                <div className="mt-3 font-display font-extrabold text-[80px] text-white/5 leading-none -mt-2">
                  01
                </div>
              </div>
              <div className="md:w-[70%] border-l-[3px] border-[#1B4090] pl-[28px]">
                <p className="font-display font-bold text-[26px] text-white tracking-[-0.5px] leading-[1.4]">
                  "To inspire and empower individuals to embrace healthier, value-driven, and environmentally-friendly choices every day — promoting a better for you culture and creating a sustainable future for all."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* MISSION BLOCK */}
          <ScrollReveal direction="up" delay={200} className="w-full">
            <div className="border-t border-white/10 py-[56px] flex flex-col md:flex-row md:items-center gap-10 md:gap-[60px]">
              <div className="md:w-[30%] flex flex-col">
                <span className="font-display font-bold text-[11px] text-[#93C5FD] tracking-[3px] uppercase">
                  OUR MISSION
                </span>
                <div className="mt-3 font-display font-extrabold text-[80px] text-white/5 leading-none -mt-2">
                  02
                </div>
              </div>
              <div className="md:w-[70%] border-l-[3px] border-[#93C5FD] pl-[28px]">
                <p className="font-display font-bold text-[26px] text-white tracking-[-0.5px] leading-[1.4]">
                  "To develop and nurture long-term partnerships with international and local manufacturers — delivering innovative, purpose-driven, and market-fit solutions."
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SECTION 3 — THREE CORE PILLARS */}
      <section className="bg-[#F0F7FF] py-[80px] px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-bold text-[10px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
            WHAT WE DO
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-[#0A0F2E] tracking-[-1.5px] mb-3">
            What we do.
          </h2>
          <p className="font-sans font-normal text-[16px] text-[#64748B] mb-12">
            Three integrated capabilities that take your brand from market insight to in-market growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
            {[
              {
                title: "GTM Advisory",
                body: "Smart, agile market entry — from assessment to distribution — with limited investment and lower risk.",
                icon: Route,
                button: "Learn More",
                path: "/gtm-advisory"
              },
              {
                title: "Market Management",
                body: "On-ground execution and operations management to unlock your brand's full potential in the MENA market.",
                icon: BarChart2,
                button: "Learn More",
                path: "/market-management"
              },
              {
                title: "Ingredients & Solutions",
                body: "Premium ingredient sourcing and product development for bakery, ice cream, and confectionery operators.",
                icon: Package,
                button: "Learn More",
                path: "/ingredients-solutions"
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 150} direction="up" className="h-full">
                  <div className="liquid-glass-card h-full flex flex-col justify-between group-hover:translate-y-[-6px]">
                    <div className="liquid-glass-card-before" />
                    <div className="liquid-glass-card-after" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="mb-5 inline-block text-white/85 p-2 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                          <Icon className="w-[28px] h-[28px]" />
                        </div>
                        <h3 className="font-display font-bold text-[22px] text-white mb-3">
                          {card.title}
                        </h3>
                        <p className="font-sans font-normal text-[14px] text-white/70 leading-[1.65] mb-7">
                          {card.body}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => navigate(card.path)}
                          className="white-pill-button group cursor-pointer shadow-md shadow-bright-blue/10"
                        >
                          <span>{card.button}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY FOODCLOUD EXISTS */}
      <section className="bg-white py-[80px] px-6 md:px-[60px]">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-[80px]">
          <div className="w-full md:w-[55%]">
            <ScrollReveal direction="up">
              <span className="font-display font-bold text-[10px] text-[#1B4090] tracking-[3px] uppercase mb-3 block">
                WHY WE EXIST
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-[#0A0F2E] tracking-[-1.5px] mb-6">
                Built for the market window.
              </h2>
              <p className="font-sans font-normal text-[16px] text-[#64748B] leading-[1.7] mb-4">
                Most brands that fail in MENA don't fail because the product is wrong. They fail because the execution is wrong — the wrong distributor, the wrong pricing, the wrong timing.
              </p>
              <p className="font-sans font-normal text-[16px] text-[#64748B] leading-[1.7]">
                FoodCloud was founded in 2021 to solve exactly that problem. We built an agile, principal-first model that removes the guesswork, reduces the risk, and puts the right brand in front of the right customer at the right time.
              </p>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-[45%]">
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-dark-card-gradient rounded-[20px] p-[40px] shadow-2xl border border-white/5">
                <div className="flex flex-col gap-6">
                  {[
                    { large: "2021", label: "YEAR FOUNDED" },
                    { large: "3", label: "CORE SERVICES" },
                    { large: "MENA", label: "REGION FOCUS" }
                  ].map((stat, idx) => (
                    <div key={idx} className={`${idx !== 0 ? 'border-t border-white/10 pt-6' : ''}`}>
                      <div className="font-display font-extrabold text-[40px] text-white leading-none mb-2">{stat.large}</div>
                      <div className="font-display font-semibold text-[11px] text-[#93C5FD] tracking-[2px] uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMPANY DETAILS */}
      <section className="bg-[#0A0F2E] py-[80px] px-6 md:px-[60px]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center md:text-left">
            <ScrollReveal direction="up">
              <span className="font-display font-bold text-[10px] text-[#93C5FD] tracking-[3px] uppercase mb-3 block">
                COMPANY INFO
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-[44px] text-white tracking-[-1.5px] mb-12">
                Find us.
              </h2>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={150}>
            <div className="bg-dark-card-gradient rounded-[20px] p-8 md:p-[48px] shadow-2xl border border-white/5">
              <div className="flex flex-col">
                {[
                  { label: "Founded", value: "2021", isLink: false },
                  { label: "Headquarters", value: "Dubai, UAE", isLink: false },
                  { label: "Registration", value: "IFZA · Building A2 · Dubai", isLink: false },
                  { label: "Channels", value: "Retail · HORECA · B2B", isLink: false },
                  { label: "Email", value: "info@foodcloud-me.com", isLink: true, href: "mailto:info@foodcloud-me.com" },
                  { label: "Website", value: "www.foodcloud-me.com", isLink: true, href: "https://www.foodcloud-me.com" },
                  { label: "Phone", value: "+971 56 551 1448", isLink: false },
                ].map((row, idx) => (
                  <div key={idx} className={`flex flex-col sm:flex-row sm:items-center py-[18px] gap-2 sm:gap-0 ${idx !== 0 ? 'border-t border-white/5' : ''}`}>
                    <div className="w-full sm:w-[35%] font-display font-semibold text-[12px] text-white/40 tracking-[1px] uppercase">
                      {row.label}
                    </div>
                    <div className="w-full sm:w-[65%] font-sans font-normal text-[15px] text-white">
                      {row.isLink ? (
                        <a href={row.href} className="text-[#93C5FD] hover:underline transition-all">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-hero-gradient py-20 px-6 md:px-14 relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl z-0" />
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-bright-blue/30 rounded-full blur-3xl z-0" />

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[44px] text-white tracking-[-1.5px] leading-tight mb-4">
            Let's build something together.
          </h2>
          <p className="font-sans font-normal text-base text-white/70 leading-relaxed mb-9 max-w-2xl mx-auto">
            Whether you're entering MENA for the first time or looking to scale an existing presence — we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <button
              onClick={() => onOpenContact('Company Page CTA')}
              className="white-pill-button cursor-pointer shadow-lg flex-1 sm:flex-none justify-center"
            >
              <span>Get in Touch</span>
            </button>
            <button
              onClick={() => navigate('/gtm-advisory')}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-6 py-3 rounded-full font-display font-bold text-sm transition-all cursor-pointer flex-1 sm:flex-none text-center"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
