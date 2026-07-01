import ScrollReveal from './ScrollReveal';

interface WhyFoodCloudProps {}

export default function WhyFoodCloud({}: WhyFoodCloudProps) {
  const values = [
    {
      num: '01',
      title: 'Agile by design',
      body: 'No heavy overhead. No slow structures. We move at the speed the market window requires.',
    },
    {
      num: '02',
      title: 'Deep local knowledge',
      body: "MENA distribution has its own rules — relationships, regulation, channel dynamics. We've lived it.",
    },
    {
      num: '03',
      title: 'Principal-first thinking',
      body: 'We work in long-term partnership with the brands we represent. Your success is our entire business model.',
    },
    {
      num: '04',
      title: 'End-to-end coverage',
      body: 'One partner. One relationship. From first market assessment to ongoing performance management.',
    },
  ];

  return (
    <section
      id="why-foodcloud"
      className="bg-white py-24 px-6 md:px-14 relative overflow-hidden"
    >
      {/* Dot Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[44px] text-deep-navy tracking-tight leading-tight">
              Why brands choose FoodCloud.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <p className="font-sans font-normal text-sm sm:text-base text-[#64748B] mt-4 leading-relaxed">
              Most market entries fail not because the product is wrong — but because the execution is. We remove that risk.
            </p>
          </ScrollReveal>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {values.map((item, idx) => {
            return (
              <ScrollReveal
                key={item.num}
                delay={idx * 100}
                direction="up"
              >
                <div
                  className="group relative bg-dark-card-gradient rounded-[20px] p-9 md:p-10 text-left overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.2 hover:shadow-xl hover:shadow-royal-blue/10"
                >
                  {/* Hover Glowing Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(147,197,253,0.3)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                  {/* Large Ghost Number */}
                  <span className="absolute top-4 right-5 font-display font-extrabold text-6xl sm:text-7xl text-sky-light/15 group-hover:text-sky-light/30 transition-all duration-300 leading-none pointer-events-none select-none z-0">
                    {item.num}
                  </span>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-xs sm:text-sm text-white/60 leading-[1.65]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
