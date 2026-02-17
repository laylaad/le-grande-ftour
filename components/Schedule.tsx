
import React from 'react';
import { FadeIn } from './FadeIn';
import { ScheduleItem } from '../types';

const SCHEDULE: ScheduleItem[] = [
  { time: '18:15', event: 'Accueil Protocolaire', description: 'Arrivées des délégations et séance photo.' },
  { time: '19:00', event: 'Networking Stratégique', description: 'Echanges de haut niveau entre 500 décideurs.' },
  { time: '19:30', event: 'Le Grand Ftour Royal', description: 'Rupture du jeûne gastronomique.' },
  { time: '20:30', event: 'Cérémonie des Trophées', description: 'Consécration des leaders d\'exception.' },
];

export const Schedule: React.FC = () => {
  return (
    <section id="programme" className="py-12 md:py-16 bg-luxuryBlack">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[9px] font-bold mb-2">Le Protocole</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white italic">Programme</h3>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-luxuryGold/20 transform md:-translate-x-1/2"></div>
          <div className="space-y-8">
            {SCHEDULE.map((item, idx) => (
              <FadeIn key={item.time} delay={idx * 50}>
                <div className={`flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10 text-left md:text-right'}`}>
                    <span className="text-luxuryGold font-serif text-xl block">{item.time}</span>
                    <h4 className="text-white text-lg font-serif mb-1 italic">{item.event}</h4>
                    <p className="text-luxuryTextGray text-xs font-light">{item.description}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-luxuryBlack border border-luxuryGold rounded-full transform -translate-x-1/2 z-10 hidden md:block"></div>
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
