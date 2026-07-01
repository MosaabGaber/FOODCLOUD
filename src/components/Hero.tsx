import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: (source: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] w-full bg-hero-gradient flex flex-col items-center justify-center text-center px-6 md:px-14 overflow-hidden pt-12 pb-16"
    >
      {/* Animated Background Orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-white/12 top-[-200px] right-[-100px] pointer-events-none z-0 animate-orb1"
        style={{ filter: 'blur(80px)' }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-bright-blue/10 bottom-[-100px] left-[-80px] pointer-events-none z-0 animate-orb2"
        style={{ filter: 'blur(60px)' }}
      />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Announcement Banner */}
        <div
          onClick={() => onOpenContact('MENA Market Report')}
          className="group inline-flex items-center gap-3 bg-bright-blue/25 backdrop-blur-md border border-white/30 rounded-full py-2.5 pl-4 pr-5 mb-10 hover:bg-bright-blue/40 transition-all duration-300 cursor-pointer max-w-full select-none animate-[fadeIn_0.5s_ease-out]"
        >
          {/* Pulsing indicator */}
          <div className="relative w-2.5 h-2.5 flex items-center justify-center">
            <span className="absolute w-2 h-2 rounded-full bg-white animate-pulse-custom" />
          </div>
          
          <span className="font-display font-medium text-[11px] sm:text-xs text-white tracking-wide text-left line-clamp-1 sm:line-clamp-none">
            Expanding into Saudi Arabia and Egypt — read our MENA market report
          </span>
          
          <ArrowRight className="w-4 h-4 text-white shrink-0 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Headline */}
        <h1 
          className="font-display font-extrabold text-[40px] sm:text-[52px] md:text-[68px] leading-[1.0] text-white tracking-[-2px] max-w-[800px] animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
        >
          Empower brands.<br />
          Expand horizons.
        </h1>

        {/* Subheadline */}
        <p 
          className="font-sans font-normal text-base sm:text-lg text-white/70 max-w-[540px] leading-[1.65] mt-6 animate-[fadeIn_0.7s_ease-out_0.4s_both]"
        >
          Your dedicated partner for smart market entry into MENA — with limited investment and lower risk.
        </p>

        {/* CTA Button */}
        <div className="mt-10 animate-[fadeInUp_0.6s_ease-out_0.65s_both]">
          <button
            onClick={() => onOpenContact('Strategy Call')}
            className="group flex items-center gap-2.5 bg-white text-deep-navy font-display font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-soft-white hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-5 h-5 text-deep-navy transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stat Chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-[fadeIn_0.6s_ease-out_1s_both]">
          <div className="glass-style text-white font-display font-semibold text-xs sm:text-[13px] py-2.5 px-5 rounded-full select-none shadow-sm shadow-black/5 hover:bg-white/12 transition-colors">
            Est. 2021
          </div>
          <div className="glass-style text-white font-display font-semibold text-xs sm:text-[13px] py-2.5 px-5 rounded-full select-none shadow-sm shadow-black/5 hover:bg-white/12 transition-colors">
            3 Core Services
          </div>
          <div className="glass-style text-white font-display font-semibold text-xs sm:text-[13px] py-2.5 px-5 rounded-full select-none shadow-sm shadow-black/5 hover:bg-white/12 transition-colors">
            MENA Region
          </div>
        </div>

      </div>

      {/* Thin horizon line at bottom with bouncing dot */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex justify-center items-center z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </div>
    </section>
  );
}
