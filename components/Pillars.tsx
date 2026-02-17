
import React from 'react';
import { FadeIn } from './FadeIn';
import { Pillar } from '../types';

const PILLARS: Pillar[] = [
  { title: 'Les Trophées Signature', description: 'Une cérémonie de consécration dédiée aux leaders (Agriculture, Industrie, Digital...).', icon: '🏆' },
  { title: "L'Expérience Tapis Rouge", description: 'Un accueil protocolaire honorant chaque invité comme une figure majeure.', icon: '🔴' },
  { title: 'Networking Stratégique', description: 'Un cercle de plus de 500 décideurs réunis pour générer des synergies professionnelles.', icon: '🤝' },
  { title: 'Vitrine de Prestige', description: 'Une plateforme de visibilité exclusive pour les marques d\'excellence.', icon: '✨' }
];

export const Pillars: React.FC = () => {
  return (
    <section id="offres" className="py-12 md:py-16 bg-luxuryGray relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[9px] font-bold mb-2">Nos Offres d'Excellence</h2>
          <h3 className="text-2xl md:text-4xl font-serif text-white">Une Expérience Immersive</h3>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 100}>
              <div className="p-8 border border-white/5 bg-luxuryBlack/50 hover:bg-luxuryBlack transition-all h-full">
                <div className="text-2xl mb-4">{pillar.icon}</div>
                <h4 className="text-white text-lg font-serif mb-2 tracking-wide group-hover:text-luxuryGold">{pillar.title}</h4>
                <p className="text-luxuryTextGray text-sm leading-relaxed font-light">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
