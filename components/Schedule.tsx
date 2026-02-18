import React from 'react';
import { FadeIn } from './FadeIn';
import { ScheduleItem } from '../types';

const SCHEDULE: (ScheduleItem & { svg: React.ReactNode })[] = [
  { 
    time: '18:15', 
    event: 'Accueil Protocolaire', 
    description: 'Arrivée des délégations, tapis rouge et séance photographique officielle.',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
  },
  { 
    time: '19:00', 
    event: 'Networking Stratégique', 
    description: 'Cocktail de bienvenue et échanges informels dans le salon d\'honneur.',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M18 8h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3m12-3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v3h12V5z"/></svg>
  },
  { 
    time: '19:30', 
    event: 'Le Grand Ftour Royal', 
    description: 'Expérience gastronomique exclusive mettant à l\'honneur le patrimoine culinaire.',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v15"/></svg>
  },
  { 
    time: '20:30', 
    event: 'Remise des Trophées', 
    description: 'Célébration des réussites marquantes de l\'écosystème entrepreneurial.',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M6 9V2M18 9V2M4 22h16M10 22V15M14 22V15M6 9c0 3.314 2.686 6 6 6s6-2.686 6-6V2H6v7z"/></svg>
  },
  { 
    time: '21:30', 
    event: 'Clôture de Session', 
    description: 'Fin de la cérémonie officielle et moment de networking libre.',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
  },
];

export const Schedule: React.FC = () => {
  return (
    <section id="programme" className="py-32 bg-luxuryBlack relative">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-24">
          <h2 className="text-luxuryGold tracking-[0.6em] uppercase text-[11px] font-bold mb-6">Le Protocole</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white italic">Agenda du Soir</h3>
          <div className="w-24 h-[1px] bg-luxuryGold/30 mx-auto mt-10"></div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-luxuryGold/20 to-transparent hidden md:block"></div>

          <div className="space-y-20">
            {SCHEDULE.map((item, idx) => (
              <FadeIn key={item.time} delay={idx * 150} direction="up">
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0 group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-16 md:pl-0`}>
                    <h4 className="text-white text-2xl md:text-3xl font-serif mb-3 group-hover:text-luxuryGold transition-all duration-500 tracking-wide italic">
                      {item.event}
                    </h4>
                    <p className="text-luxuryTextGray text-base font-light leading-relaxed max-w-sm ml-0 md:ml-auto mr-0 md:mr-auto group-hover:text-white/70 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-luxuryBlack border border-luxuryGold/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(225,168,34,0.1)] group-hover:border-luxuryGold transition-all duration-500 group-hover:scale-110">
                      <div className="text-luxuryGold opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.svg}
                      </div>
                    </div>
                  </div>

                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-luxuryGold font-serif text-4xl md:text-6xl tracking-tighter opacity-80 block mb-2 group-hover:opacity-100 transition-all">
                      {item.time}
                    </span>
                    <div className={`h-[1px] w-12 bg-luxuryGold/20 group-hover:w-20 group-hover:bg-luxuryGold/40 transition-all duration-700 ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}></div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};