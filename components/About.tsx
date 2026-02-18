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
              <h2 className="text-luxuryGold tracking-[0.5em] uppercase text-[11px] font-bold">Manifeste</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] mb-8">
              Une Plateforme <br />
              <span className="gold-gradient-text italic font-normal">d'Exception</span>
            </h3>
            <div className="w-32 h-[1px] bg-luxuryGold/30"></div>
            
            {/* Décoration iconique */}
            <div className="mt-12 opacity-20">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-luxuryGold fill-none stroke-current" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10L50 90M10 50L90 50M22 22L78 78M22 78L78 22" />
              </svg>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="md:pt-20 relative">
            <div className="absolute -left-10 top-20 text-luxuryGold/10 text-9xl font-serif select-none pointer-events-none">"</div>
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-serif italic mb-10 border-l-2 border-luxuryGold/40 pl-10 relative z-10">
              "Le Grand Ftour 2026 n'est pas une simple rencontre, c'est l'épicentre des alliances stratégiques du Royaume."
            </p>
            <div className="space-y-6 text-luxuryTextGray text-lg font-light leading-relaxed">
              <p>
                Produit par l’agence <span className="text-luxuryGold font-medium">Affairino</span>, cet événement institutionnel s’affirme par son positionnement d'élite.
              </p>
              <p className="opacity-70">
                Dans le cadre majestueux d'Agadir, nous réunissons les décideurs, les bâtisseurs et les visionnaires pour sceller les opportunités de demain sous le signe de l'excellence marocaine.
              </p>
            </div>
            
            <div className="mt-12 flex gap-4">
               <div className="px-4 py-2 border border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-widest text-white/40">Gouvernance</div>
               <div className="px-4 py-2 border border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-widest text-white/40">Innovation</div>
               <div className="px-4 py-2 border border-white/5 bg-white/[0.02] text-[10px] uppercase tracking-widest text-white/40">Protocole</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};