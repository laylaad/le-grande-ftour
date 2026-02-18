import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="événement" className="py-8 bg-luxuryBlack overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-white/5 pb-8">
          <FadeIn>
            <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[8px] font-bold mb-2">Notre Vision</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              Plateforme <span className="text-luxuryGold italic">d'Influence</span>
            </h3>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-luxuryTextGray text-sm md:text-base leading-relaxed font-light italic">
              Produit par l’agence <span className="text-luxuryGold">Affairino</span>, Le Grand Ftour rassemble les décideurs pour créer des synergies stratégiques dans un cadre d'élégance absolue.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};