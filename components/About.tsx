import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-luxuryBlack relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      {/* Éléments de style */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxuryGold/5 to-transparent"></div>
      <div className="absolute -right-20 top-1/4 w-64 h-64 bg-luxuryGold/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-luxuryGold/60"></div>
              <h2 className="text-luxuryGold tracking-[0.5em] uppercase text-[11px] font-bold">Lancement Officiel</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] mb-8">
              Redéfinir <br />
              <span className="gold-gradient-text italic font-normal">l'Excellence</span>
            </h3>
            <p className="text-luxuryTextGray text-lg font-light leading-relaxed mb-8 border-l border-luxuryGold/20 pl-6">
              Pensé comme un rendez-vous d’exception, cet événement ambitionne de transformer le ftour en une expérience premium dédiée au leadership et aux connexions stratégiques.
            </p>
            <div className="mt-12 opacity-20">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-luxuryGold fill-none stroke-current" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10L50 90M10 50L90 50" />
              </svg>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="md:pt-20 relative">
            <div className="absolute -left-10 top-20 text-luxuryGold/10 text-9xl font-serif select-none pointer-events-none">"</div>
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-serif italic mb-10 border-l-2 border-luxuryGold/40 pl-10 relative z-10">
              "Bien au-delà d’un simple moment de rupture du jeûne, l’événement se positionne comme une plateforme de valorisation des parcours inspirants."
            </p>
            <div className="space-y-6 text-luxuryTextGray text-base font-light leading-relaxed">
              <p>
                Le concept repose sur des piliers fondamentaux : un protocole exclusif avec tapis rouge, et une cérémonie officielle de remise des <span className="text-luxuryGold">Trophées Signature d’Excellence</span>.
              </p>
              <p className="opacity-70">
                Chaque détail est pensé pour offrir une expérience immersive, raffinée et mémorable, marquant une nouvelle étape dans l’univers des événements professionnels au Maroc.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};