
import React from 'react';
import { FadeIn } from './FadeIn';
import { Speaker } from '../types';

const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Meryem Bencherif',
    title: 'Ministère de l\'Économie (Invitée)',
    bio: 'Leader stratégique dans le développement des écosystèmes industriels nationaux.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Ahmed El Alami',
    title: 'Pionnier de l\'Agrotech Souss-Massa',
    bio: 'Entrepreneur visionnaire récompensé pour ses innovations en gestion durable des ressources.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Sofia Mansouri',
    title: 'Fondatrice, Digital Impact Africa',
    bio: 'Architecte de solutions technologiques pour l\'inclusion financière en zone rurale.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Karim Tazi',
    title: 'Investisseur Capital-Risque',
    bio: 'Spécialiste de la valorisation des startups marocaines à fort potentiel d\'exportation.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];

export const Speakers: React.FC = () => {
  return (
    <section id="intervenants" className="py-24 md:py-48 bg-luxuryGray">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-24">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-6">Les Voix de l'Excellence</h2>
          <h3 className="text-4xl md:text-7xl font-serif text-white italic">Figures Majeures de l'Écosystème</h3>
          <div className="mt-12 flex justify-center">
            <div className="h-[1px] w-24 bg-luxuryGold/40"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {SPEAKERS.map((speaker, idx) => (
            <FadeIn key={speaker.id} delay={idx * 150} className="group flex flex-col items-center">
              <div className="relative mb-10 w-full group">
                <div className="aspect-[4/5] overflow-hidden border border-white/5 transition-all duration-1000 group-hover:border-luxuryGold/40 shadow-2xl">
                  <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-luxuryGold/40 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-white text-2xl font-serif mb-2 tracking-wide group-hover:text-luxuryGold transition-colors">
                  {speaker.name}
                </h4>
                <p className="text-luxuryGold text-[10px] tracking-[0.3em] uppercase mb-6 font-bold opacity-80">
                  {speaker.title}
                </p>
                <p className="text-luxuryTextGray text-sm leading-relaxed px-4 opacity-70 group-hover:opacity-100 transition-opacity font-light">
                  {speaker.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
