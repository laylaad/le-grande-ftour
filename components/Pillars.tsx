import React from 'react';
import { FadeIn } from './FadeIn';
import { Users, Trophy, Moon } from 'lucide-react';

const PILLARS = [
  { 
    title: 'Networking à haute valeur', 
    description: 'Rencontrez les décideurs et influenceurs les plus prestigieux du Royaume.', 
    icon: <Users size={32} strokeWidth={1} />
  },
  { 
    title: 'Trophées d’Excellence', 
    description: 'Une cérémonie officielle récompensant les parcours et signatures d\'exception.', 
    icon: <Trophy size={32} strokeWidth={1} />
  },
  { 
    title: 'Expérience Ramadan premium', 
    description: 'Un protocole raffiné alliant tradition marocaine et standards de luxe internationaux.', 
    icon: <Moon size={32} strokeWidth={1} />
  }
];

export const Pillars: React.FC = () => {
  return (
    <section id="offres" className="py-32 bg-luxuryBlack relative">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-20">
          <h3 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            <span className="gold-gradient-text italic font-normal uppercase">Pourquoi Participer</span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 150} direction="up">
              <div className="group relative p-12 bg-luxuryBlackElevated border border-white/5 hover:border-luxuryGold/40 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden rounded-sm">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxuryGold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <div className="w-20 h-20 mb-8 rounded-full bg-luxuryGold/5 border border-luxuryGold/10 flex items-center justify-center text-luxuryGold group-hover:bg-luxuryGold group-hover:text-luxuryBlack transition-all duration-700 shadow-[0_0_20px_rgba(225,168,34,0.05)] group-hover:shadow-[0_0_30px_rgba(225,168,34,0.2)]">
                  {pillar.icon}
                </div>
                
                <h4 className="text-white text-lg font-serif mb-6 uppercase tracking-[0.2em] group-hover:text-luxuryGold transition-colors">
                  {pillar.title}
                </h4>
                
                <p className="text-luxuryTextGray text-sm leading-relaxed font-light group-hover:text-white/80 transition-all duration-500 italic">
                  {pillar.description}
                </p>

                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/5 group-hover:border-luxuryGold/20 transition-colors"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};