import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProcessSteps() {
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

  const steps = [
    {
      num: 'STEP 01',
      title: 'Market Assessment',
      desc: 'Map the market. Size, trends, competition, channel structures, and where the real opportunity lives.',
    },
    {
      num: 'STEP 02',
      title: 'GTM Strategy',
      desc: 'Define portfolio positioning, select high-margin channels, build pricing architecture, and shortlist distributor profiles.',
    },
    {
      num: 'STEP 03',
      title: 'Market Readiness',
      desc: 'Negotiate distributor terms, agree commercial structure, define launch portfolio and 6-month volume targets.',
    },
    {
      num: 'STEP 04',
      title: 'Performance Management',
      desc: 'Ongoing KPI tracking, stock forecasting, corrective action planning, and monthly market reporting.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process-steps"
      className="bg-deep-navy py-24 px-6 md:px-14 relative overflow-hidden"
    >
      {/* Decorative Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-18">
          <ScrollReveal direction="up">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[48px] text-white tracking-tight leading-tight">
              A proven path from insight to growth.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <p className="font-sans font-normal text-sm sm:text-base text-white/50 max-w-lg mx-auto mt-4 leading-relaxed">
              Whether you're entering MENA for the first time or scaling an existing 
              presence — our structured process removes the guesswork.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
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
            {steps.map((step, idx) => {
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
                        ? 'border-2 border-[#3B82F6] bg-deep-navy shadow-[0_0_12px_rgba(59,130,246,0.5)] scale-100'
                        : 'border border-bright-blue/30 bg-bright-blue/15'
                    } group-hover:border-[#3B82F6] group-hover:scale-110`}
                    style={{
                      animation: isActive ? 'pulseOnce 0.4s ease-out' : 'none',
                    }}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full bg-[#3B82F6] transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-50'
                      }`}
                    />
                  </div>

                  {/* Step Label */}
                  <span className="font-display font-bold text-[10px] text-bright-blue/50 group-hover:text-bright-blue tracking-[2px] uppercase mb-2 block transition-colors">
                    {step.num}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-display font-bold text-lg text-white mb-2.5 transition-colors group-hover:text-[#93C5FD]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
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
  );
}