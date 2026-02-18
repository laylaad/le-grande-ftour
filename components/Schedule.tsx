import React from 'react';
import { FadeIn } from './FadeIn';
import { ScheduleItem } from '../types';

const SCHEDULE: ScheduleItem[] = [
  { time: '18:15', event: 'Accueil', description: 'Tapis Rouge' },
  { time: '19:00', event: 'Networking', description: 'Cocktail de bienvenue' },
  { time: '19:30', event: 'Ftour Royal', description: 'Menu gastronomique' },
  { time: '20:30', event: 'Cérémonie', description: 'Remise des Trophées' },
];

export const Schedule: React.FC = () => {
  return (
    <section id="programme" className="py-4 bg-luxuryBlack">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[8px] font-bold">Le Programme</h2>
          <div className="h-[1px] flex-grow mx-4 bg-luxuryGold/20"></div>
          <span className="text-white text-[10px] font-serif italic">Mars 2026</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCHEDULE.map((item, idx) => (
            <FadeIn key={item.time} delay={idx * 50} className="text-center">
              <span className="text-luxuryGold font-serif text-lg block">{item.time}</span>
              <h4 className="text-white text-[11px] font-bold uppercase mb-0.5">{item.event}</h4>
              <p className="text-luxuryTextGray text-[9px] font-light">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};