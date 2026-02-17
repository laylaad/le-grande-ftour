
import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="événement" className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center bg-luxuryBlack pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grayscale brightness-50">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxuryBlack via-luxuryBlack/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <FadeIn direction="up" className="text-left">
            <div className="inline-block px-4 py-1 border border-luxuryGold/30 bg-luxuryGold/5 mb-4">
               <span className="text-luxuryGold text-[10px] tracking-[0.4em] uppercase font-bold italic">Agadir | Mars 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white mb-4 tracking-tighter leading-[1]">
              L'Influence <br />
              <span className="text-luxuryGold italic">Par l'Excellence</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-6 font-light italic font-serif">
              "Une plateforme d’influence stratégique qui rassemble les bâtisseurs de l’économie de demain."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#inscription"
                className="group relative inline-flex items-center justify-center px-12 py-4 bg-luxuryGold text-luxuryBlack font-bold text-xs tracking-ultra-widest uppercase hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Inscription
              </a>
              <div className="hidden sm:flex items-center space-x-4 h-full py-4">
                <div className="w-10 h-[1px] bg-luxuryGold/40"></div>
                <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase font-bold">Produit par Affairino</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="none" delay={300} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-luxuryGold/10 blur-[80px] rounded-full animate-pulse-slow"></div>
              <img 
                src="logo.png" 
                alt="Le Grand Ftour Logo" 
                className="relative z-10 w-full h-auto object-contain brightness-110 hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
