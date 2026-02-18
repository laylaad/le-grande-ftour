import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-[90vh] md:min-h-screen w-full flex items-center bg-luxuryBlack pt-24 overflow-hidden">
      {/* Background avec Halos d'Or subtils */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[35%] h-[35%] bg-luxuryGold/5 blur-[140px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] right-[5%] w-[40%] h-[40%] bg-luxuryGold/10 blur-[160px] rounded-full"></div>
        
        {/* Lignes décoratives de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-luxuryGold/30 to-transparent"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-luxuryGold/30 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-luxuryGold/20 bg-luxuryGold/5 mb-8">
                 <div className="w-1.5 h-1.5 bg-luxuryGold rounded-full animate-pulse shadow-[0_0_8px_#e1a822]"></div>
                 <span className="text-luxuryGold text-[11px] tracking-[0.4em] uppercase font-bold italic">7 Mars 2026 | 17:00</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif text-white mb-8 tracking-tighter leading-[0.85]">
                L'Influence <br />
                <span className="gold-gradient-text italic font-normal">Souveraine</span>
              </h1>
              
              <p className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light font-serif italic border-l-2 border-luxuryGold/30 pl-8">
                "Une expérience immersive dédiée au leadership, à l’excellence et aux connexions stratégiques."
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a
                  href="#inscription"
                  className="group relative inline-flex items-center justify-center px-12 py-5 bg-luxuryGold text-luxuryBlack font-bold text-xs tracking-ultra-widest uppercase overflow-hidden transition-all duration-700 hover:bg-white"
                >
                  <span className="relative z-10">Demander mon invitation</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-5 hidden lg:flex justify-end relative">
            <FadeIn direction="none" delay={400} className="relative w-full max-w-sm aspect-square flex items-center justify-center animate-float group">
              <div className="absolute inset-0 border border-luxuryGold/10 rounded-full scale-110 transition-transform duration-1000 group-hover:scale-125"></div>
              <div className="absolute inset-0 border border-luxuryGold/5 rounded-full scale-125 animate-pulse-slow"></div>
              
              <img 
                src="logo.png" 
                alt="Logo Le Grand Ftour" 
                className="relative z-10 w-full h-auto object-contain brightness-150 drop-shadow-[0_0_40px_rgba(225,168,34,0.4)]"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <span className="text-[9px] uppercase tracking-[0.5em] text-luxuryGold font-bold">Explorer</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-luxuryGold via-luxuryGold/50 to-transparent"></div>
      </div>
    </section>
  );
};