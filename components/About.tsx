
import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="événement" className="py-32 md:py-56 bg-luxuryBlack overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 items-start">
          <FadeIn className="sticky top-32">
            <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-6">Notre Vision</h2>
            <h3 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] mb-12">
              Une Plateforme <br />
              <span className="text-luxuryGold italic">d'Influence</span>
            </h3>
            <div className="w-24 h-[1px] bg-luxuryGold/30"></div>
          </FadeIn>
          
          <FadeIn delay={200} className="pt-4 md:pt-24">
            <div className="space-y-12 max-w-2xl">
              <h3 className="text-white text-2xl md:text-4xl leading-tight font-serif italic font-light border-l-2 border-luxuryGold pl-8">
                Produit par l’agence <span className="text-luxuryGold font-normal">Affairino</span>, Le Grand Ftour s’affirme par son positionnement haut de gamme et son expérience immersive.
              </h3>

              <div className="space-y-8 text-luxuryTextGray text-lg md:text-xl leading-relaxed font-light">
                <p>
                  Bien plus qu’une simple rupture du jeûne, c’est une plateforme d’influence stratégique qui rassemble les décideurs, les investisseurs et les bâtisseurs de l’économie d’aujourd’hui et de demain.
                </p>

                <p>
                  Dans un cadre où l’élégance rencontre le protocole, nous créons un environnement propice à la <span className="text-white font-medium">signature d'alliances durables</span> et à la valorisation des parcours d'exception.
                </p>

                <p className="text-luxuryGold font-serif italic text-2xl">
                  "Redéfinir les standards des rencontres d'affaires au Maroc."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
