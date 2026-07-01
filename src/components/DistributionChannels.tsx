import { ShoppingBag, UtensilsCrossed, Boxes, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface DistributionChannelsProps {
  onOpenContact: (source: string) => void;
}

export default function DistributionChannels({ onOpenContact }: DistributionChannelsProps) {
  const channels = [
    {
      title: 'Retail',
      body: 'Supermarkets, hypermarkets, and specialty food stores. We place your brand where MENA consumers shop most.',
      buttonText: 'Learn about Retail',
      icon: ShoppingBag,
    },
    {
      title: 'HORECA',
      body: 'Hotels, restaurants, and cafes. Where premium food brands build loyalty with discerning operators.',
      buttonText: 'Learn about HORECA',
      icon: UtensilsCrossed,
    },
    {
      title: 'B2B Sourcing',
      body: 'Ingredients and solutions supplied directly to food manufacturers, processors, and bakeries.',
      buttonText: 'Learn about B2B',
      icon: Boxes,
    },
  ];

  return (
    <section
      id="distribution-channels"
      className="bg-[#F8FAFF] py-24 px-6 md:px-14 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[44px] text-deep-navy tracking-tight leading-tight">
              Where your brand reaches customers.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <p className="font-sans font-normal text-sm sm:text-base text-[#64748B] mt-4 leading-relaxed">
              We operate across three channels in MENA, with deep execution expertise in each.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((channel, idx) => {
            const IconComponent = channel.icon;
            return (
              <ScrollReveal
                key={channel.title}
                delay={idx * 150}
                direction="up"
              >
                <div
                  className="group relative bg-dark-card-gradient rounded-[20px] p-8 md:p-10 text-left overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-royal-blue/15"
                >
                  {/* Glowing Overlay on Hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(147,197,253,0.35)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

                  {/* Card Content (z-index 10 for absolute safety above gradient filters) */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon */}
                      <div className="mb-6 inline-block text-white/70 p-1.5 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3.5 tracking-tight">
                        {channel.title}
                      </h3>

                      {/* Body */}
                      <p className="font-sans font-normal text-sm text-white/60 leading-[1.65] mb-8">
                        {channel.body}
                      </p>
                    </div>

                    {/* White Pill Button */}
                    <div>
                      <button
                        onClick={() => onOpenContact(`${channel.title} Channel`)}
                        className="white-pill-button cursor-pointer w-full sm:w-auto justify-center"
                      >
                        <span>{channel.buttonText}</span>
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
    </section>
  );
}
