
import React from 'react';
import { FadeIn } from './FadeIn';
import { Pillar } from '../types';

const PILLARS: Pillar[] = [
  {
    title: 'Les Trophées Signature',
    description: 'Une cérémonie de consécration dédiée aux leaders qui transforment les secteurs clés (Agriculture, Industrie, Digital, Maritime...).',
    icon: '🏆'
  },
  {
    title: "L'Expérience Tapis Rouge",
    description: 'Un accueil protocolaire inédit, honorant chaque invité comme une figure majeure de notre écosystème économique.',
    icon: '🔴'
  },
  {
    title: 'Networking de Haut Niveau',
    description: 'Un cercle de plus de 500 décideurs réunis pour générer des synergies professionnelles et humaines uniques.',
    icon: '🤝'
  },
  {
    title: 'Vitrine de Prestige',
    description: 'Une plateforme de visibilité exclusive pour les marques souhaitant s’associer aux valeurs de réussite et d\'innovation.',
    icon: '✨'
  }
];

export const Pillars: React.FC = () => {
  return (
    <section id="offres" className="py-24 md:py-48 bg-luxuryGray relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-24">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-6">Nos Offres d'Excellence</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">Une Expérience Immersive</h3>
          <p className="text-luxuryTextGray max-w-2xl mx-auto text-lg font-light italic">
            Redéfinir les standards des rencontres d'affaires au Maroc.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PILLARS.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 150} className="group">
              <div className="p-12 border border-white/5 bg-luxuryBlack/50 hover:bg-luxuryBlack transition-all duration-700 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxuryGold/5 blur-3xl rounded-full group-hover:bg-luxuryGold/10 transition-colors"></div>
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{pillar.icon}</div>
                <h4 className="text-white text-2xl font-serif mb-6 tracking-wide group-hover:text-luxuryGold transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-luxuryTextGray text-lg leading-relaxed font-light">
                  {pillar.description}
                </p>
                <div className="mt-8 w-12 h-[1px] bg-luxuryGold/30 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
