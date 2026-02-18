import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="événement" className="relative min-h-[50vh] md:min-h-[60vh] w-full flex items-center bg-luxuryBlack pt-16 overflow-hidden border-b border-luxuryRed/10">
      <div className="absolute inset-0 z-0 opacity-15 grayscale contrast-125">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-transparent to-luxuryBlack/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <FadeIn direction="up" className="text-left">
            <div className="inline-block px-3 py-0.5 border border-luxuryGold/40 bg-luxuryGold/5 mb-3">
               <span className="text-luxuryGold text-[9px] tracking-[0.4em] uppercase font-bold italic">Agadir | Mars 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white mb-3 tracking-tighter leading-[1]">
              L'Influence <br />
              <span className="text-luxuryRed italic">Par l'Excellence</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed mb-6 font-light font-serif">
              "Une plateforme d’influence stratégique rassemblant les bâtisseurs de demain."
            </p>
            <a
              href="#inscription"
              className="inline-flex items-center justify-center px-12 py-3 bg-luxuryGold text-luxuryBlack font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-luxuryRed hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(225,168,34,0.2)]"
            >
              Inscription
            </a>
          </FadeIn>
          <FadeIn direction="none" delay={300} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-luxuryRed/10 blur-[80px] rounded-full animate-pulse-slow"></div>
              <img 
                src="logo.png" 
                alt="Logo" 
                className="relative z-10 w-full h-auto object-contain brightness-125"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};