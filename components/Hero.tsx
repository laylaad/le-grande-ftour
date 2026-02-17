
import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="événement" className="relative min-h-screen w-full flex items-center bg-luxuryBlack pt-20 overflow-hidden">
      {/* Fond cinématique */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale brightness-50">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxuryBlack via-luxuryBlack/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Colonne Gauche: Titre et Boutons */}
          <FadeIn direction="up" className="text-left">
            <div className="inline-block px-4 py-1.5 border border-luxuryGold/30 bg-luxuryGold/5 mb-8">
               <span className="text-luxuryGold text-[10px] tracking-[0.4em] uppercase font-bold italic">Agadir | Mars 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-white mb-8 tracking-tighter leading-[0.9]">
              L'Influence <br />
              <span className="text-luxuryGold italic">Par l'Excellence</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light italic font-serif">
              "Une plateforme d’influence stratégique qui rassemble les bâtisseurs de l’économie de demain."
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <a
                href="#inscription"
                className="group relative inline-flex items-center justify-center px-16 py-6 bg-luxuryGold text-luxuryBlack font-bold text-sm tracking-ultra-widest uppercase hover:bg-white transition-all duration-500 shadow-2xl shadow-luxuryGold/30"
              >
                Inscription
              </a>
              <div className="hidden sm:flex items-center space-x-4 h-full py-6">
                <div className="w-12 h-[1px] bg-luxuryGold/40"></div>
                <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-bold">Produit par Affairino</span>
              </div>
            </div>
          </FadeIn>

          {/* Colonne Droite: Logo local agrandi */}
          <FadeIn direction="none" delay={300} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl md:max-w-2xl aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-luxuryGold/10 blur-[120px] rounded-full animate-pulse-slow"></div>
              
              <img 
                src="logo.png" 
                alt="Le Grand Ftour Logo" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(212,175,55,0.5)] brightness-110 hover:scale-110 transition-transform duration-1000"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              />
            </div>
          </FadeIn>

        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <svg className="w-5 h-5 text-luxuryGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
