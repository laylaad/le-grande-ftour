
import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="événement" className="py-12 md:py-16 bg-luxuryBlack overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <FadeIn className="md:sticky md:top-24">
            <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[9px] font-bold mb-2">Notre Vision</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white leading-[1] mb-4">
              Une Plateforme <br />
              <span className="text-luxuryGold italic">d'Influence</span>
            </h3>
            <div className="w-16 h-[1px] bg-luxuryGold/30"></div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="space-y-6 max-w-2xl">
              <h3 className="text-white text-lg md:text-2xl leading-tight font-serif italic font-light border-l-2 border-luxuryGold pl-4">
                Produit par l’agence <span className="text-luxuryGold font-normal">Affairino</span>, Le Grand Ftour s’affirme par son positionnement haut de gamme.
              </h3>
              <div className="space-y-4 text-luxuryTextGray text-base leading-relaxed font-light">
                <p>
                  Bien plus qu’une simple rupture du jeûne, c’est une plateforme d’influence stratégique qui rassemble les décideurs de l’économie de demain.
                </p>
                <p>
                  Dans un cadre où l’élégance rencontre le protocole, nous créons un environnement propice à la <span className="text-white font-medium">signature d'alliances durables</span>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
