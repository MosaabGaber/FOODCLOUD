import { useState } from 'react';
import { ArrowRight, FileText, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface CtaBannerProps {
  onOpenContact: (source: string) => void;
}

export default function CtaBanner({ onOpenContact }: CtaBannerProps) {
  const [downloadState, setDownloadState] = useState<'idle' | 'preparing' | 'done'>('idle');

  const handleDownload = () => {
    setDownloadState('preparing');
    // Simulate premium PDF compilation and download
    setTimeout(() => {
      setDownloadState('done');
      
      // Auto-reset back to idle after 3 seconds
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
      
      // Create a virtual download link
      const text = "FoodCloud Dubai GTM Advisory & Food Distribution Company Profile 2025. Empower brands, Expand horizons.";
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "FoodCloud_Company_Profile.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  return (
    <section
      id="cta-banner"
      className="relative bg-hero-gradient py-24 px-6 md:px-14 text-center overflow-hidden"
    >
      {/* Background Floating Orbs (smaller scale) */}
      <div 
        className="absolute w-[350px] h-[350px] rounded-full bg-white/12 top-[-100px] right-[-50px] pointer-events-none z-0 animate-orb1"
        style={{ filter: 'blur(60px)' }}
      />
      <div 
        className="absolute w-[220px] h-[220px] rounded-full bg-bright-blue/10 bottom-[-50px] left-[-40px] pointer-events-none z-0 animate-orb2"
        style={{ filter: 'blur(40px)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Headline */}
        <ScrollReveal direction="up">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[48px] text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to bring your brand to the Middle East?
          </h2>
        </ScrollReveal>

        {/* Subhead */}
        <ScrollReveal direction="up" delay={150}>
          <p className="font-sans font-normal text-sm sm:text-lg text-white/70 mt-4 mb-10 max-w-lg mx-auto leading-relaxed">
            Let's start with a conversation. No pressure, no pitch — just an honest look at your opportunity.
          </p>
        </ScrollReveal>

        {/* Interactive Action Buttons */}
        <ScrollReveal direction="up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5">
            {/* Discovery Call Button */}
            <button
              onClick={() => onOpenContact('Discovery Call')}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-deep-navy font-display font-bold text-[15px] px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-soft-white hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-black/5"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-deep-navy transition-transform group-hover:translate-x-1" />
            </button>

            {/* Profile Download Button */}
            <button
              onClick={handleDownload}
              disabled={downloadState === 'preparing'}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-1.5 border-white text-white font-display font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 cursor-pointer disabled:opacity-80"
            >
              {downloadState === 'idle' && (
                <>
                  <span>Download Company Profile</span>
                  <FileText className="w-4 h-4 text-white group-hover:scale-105 transition-transform" />
                </>
              )}
              {downloadState === 'preparing' && (
                <>
                  <span>Preparing Profile PDF...</span>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </>
              )}
              {downloadState === 'done' && (
                <>
                  <span>Profile Downloaded</span>
                  <Check className="w-4 h-4 text-emerald-300" />
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
