
import React from 'react';
import { FadeIn } from './FadeIn';

export const Venue: React.FC = () => {
  return (
    <section id="lieu" className="py-24 md:py-48 bg-luxuryBlack relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-6">La Destination</h2>
              <h3 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[0.9]">
                Agadir <br />
                <span className="italic">Souss-Massa</span>
              </h3>
              <p className="text-luxuryTextGray text-xl font-light leading-relaxed mb-12">
                Pour l'édition 2026, Le Grand Ftour s'installe dans la capitale du Souss. Un cadre prestigieux où la modernité architecturale rencontre la douceur atlantique.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 border border-luxuryGold/30 flex items-center justify-center text-luxuryGold group-hover:bg-luxuryGold group-hover:text-luxuryBlack transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h5 className="text-white font-serif text-xl mb-1">Localisation de Prestige</h5>
                    <p className="text-luxuryTextGray text-sm tracking-wide">Zone Hôtelière de Luxe, Front de Mer, Agadir</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 border border-luxuryGold/30 flex items-center justify-center text-luxuryGold group-hover:bg-luxuryGold group-hover:text-luxuryBlack transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h5 className="text-white font-serif text-xl mb-1">Inauguration 2026</h5>
                    <p className="text-luxuryTextGray text-sm tracking-wide">Cérémonie prévue en Mars 2026 - Ramadan</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-luxuryGold/50 to-transparent"></div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 h-[500px] md:h-[700px] relative">
            <FadeIn delay={300} className="h-full group">
              <div className="w-full h-full rounded-sm border border-luxuryGold/20 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-luxuryGold/10 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55002.50875960098!2d-9.61056581090333!3d30.41901001090333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9411ef9f%3A0xe5b5f374d8e883!2sAgadir!5e0!3m2!1sen!2sma!4v1715000000000!5m2!1sen!2sma" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  className="grayscale hover:grayscale-0 transition-all duration-1000 contrast-125"
                ></iframe>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-r-2 border-b-2 border-luxuryGold/30 -z-10 group-hover:-bottom-10 group-hover:-right-10 transition-all duration-500"></div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
