import React from 'react';
import { FadeIn } from './FadeIn';
import { Pillar } from '../types';

const PILLARS: Pillar[] = [
  { title: 'Trophées Signature', description: 'Consécration des leaders nationaux.', icon: '🏆' },
  { title: 'Expérience Prestige', description: 'Accueil protocolaire haut de gamme.', icon: '🔴' },
  { title: 'Networking', description: 'Cercle de 500 décideurs réunis.', icon: '🤝' },
  { title: 'Visibilité', description: 'Vitrine pour marques d\'excellence.', icon: '✨' }
];

export const Pillars: React.FC = () => {
  return (
    <section id="offres" className="py-6 bg-luxuryBlack border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PILLARS.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 50}>
              <div className="p-5 border border-white/10 bg-luxuryGray/50 hover:border-luxuryRed transition-all duration-500 h-full group">
                <div className="text-xl mb-3 group-hover:scale-110 transition-transform filter drop-shadow-[0_0_8px_rgba(173,0,0,0.5)]">{pillar.icon}</div>
                <h4 className="text-white text-xs font-serif mb-1 uppercase tracking-wider group-hover:text-luxuryGold">{pillar.title}</h4>
                <p className="text-luxuryTextGray text-[10px] leading-tight font-light group-hover:text-white/80">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};