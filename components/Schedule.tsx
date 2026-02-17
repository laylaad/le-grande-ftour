
import React from 'react';
import { FadeIn } from './FadeIn';
import { ScheduleItem } from '../types';

const SCHEDULE: ScheduleItem[] = [
  { time: '18:15', event: 'Accueil Protocolaire & Tapis Rouge', description: 'Arrivées des délégations et séance photo officielle dans les jardins.' },
  { time: '19:00', event: 'Networking Stratégique', description: 'Cocktail de bienvenue et échanges de haut niveau entre les 500 décideurs.' },
  { time: '19:30', event: 'Le Grand Ftour Royal', description: 'Rupture du jeûne avec un menu signature fusionnant traditions Souss-Massa et gastronomie moderne.' },
  { time: '20:30', event: 'Cérémonie des Trophées Signature', description: 'Consécration des leaders d\'exception dans les secteurs Agriculture, Industrie et Digital.' },
  { time: '21:45', event: 'Conférence Prestige', description: 'Keynote exclusive sur la vision 2030 de l\'entrepreneuriat au Maroc.' },
  { time: '22:30', event: 'Le Salon des Alliances', description: 'Dégustation de café d\'exception et signature de protocoles de collaboration.' },
];

export const Schedule: React.FC = () => {
  return (
    <section id="programme" className="py-24 md:py-48 bg-luxuryBlack">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-32">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-6">Le Protocole</h2>
          <h3 className="text-4xl md:text-7xl font-serif text-white italic">L'Itinéraire d'Excellence</h3>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-luxuryGold/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-24">
            {SCHEDULE.map((item, idx) => (
              <FadeIn key={item.time} delay={idx * 100}>
                <div className={`flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-20' : 'md:pr-20 text-left md:text-right'}`}>
                    <span className="text-luxuryGold font-serif text-3xl block mb-3">{item.time}</span>
                    <h4 className="text-white text-2xl font-serif mb-4 tracking-wide italic">{item.event}</h4>
                    <p className="text-luxuryTextGray text-base leading-relaxed max-w-md ml-0 md:ml-auto mr-0 md:mr-auto font-light">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-luxuryBlack border-2 border-luxuryGold rounded-full transform -translate-x-1/2 z-10 hidden md:block">
                    <div className="w-1.5 h-1.5 bg-luxuryGold rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>

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
