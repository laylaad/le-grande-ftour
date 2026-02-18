import React from 'react';
import { FadeIn } from './FadeIn';
import { Pillar } from '../types';

const PILLARS: (Pillar & { svg: React.ReactNode })[] = [
  { 
    title: 'Trophées Signature', 
    description: 'Consécration des leaders et des trajectoires d\'exception.', 
    icon: '',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <path d="M6 9V2M18 9V2M4 22h16M10 22V15M14 22V15M6 9c0 3.314 2.686 6 6 6s6-2.686 6-6V2H6v7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Expérience Prestige', 
    description: 'Accueil protocolaire aux standards internationaux.', 
    icon: '',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Networking Élite', 
    description: 'Cercle restreint de 500 décideurs influents.', 
    icon: '',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Vitrine Marques', 
    description: 'Exposition pour les enseignes de luxe et d\'excellence.', 
    icon: '',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export const Pillars: React.FC = () => {
  return (
    <section id="offres" className="py-32 bg-luxuryBlack relative">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 150}>
              <div className="group relative p-10 bg-luxuryBlackElevated border border-white/5 hover:border-luxuryGold/40 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxuryGold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                
                <div className="w-16 h-16 mb-8 text-luxuryGold/40 group-hover:text-luxuryGold group-hover:scale-110 transition-all duration-700 filter drop-shadow-[0_0_10px_rgba(225,168,34,0.1)]">
                  {pillar.svg}
                </div>
                
                <h4 className="text-white text-base font-serif mb-4 uppercase tracking-[0.2em] group-hover:text-luxuryGold transition-colors">
                  {pillar.title}
                </h4>
                
                <p className="text-luxuryTextGray text-sm leading-relaxed font-light group-hover:text-white/80 transition-all duration-500 italic">
                  {pillar.description}
                </p>

                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-white/5 group-hover:border-luxuryGold/20 transition-colors"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};