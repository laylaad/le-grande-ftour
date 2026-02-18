import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';
import { FadeIn } from './FadeIn';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-03-12T18:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-luxuryGray py-3 border-y border-luxuryRed/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center flex flex-col md:flex-row items-center justify-center gap-4">
          <h3 className="text-luxuryRed tracking-[0.3em] uppercase text-[9px] font-bold">Lancement de l'expérience</h3>
          <div className="flex gap-6 md:gap-10">
            {[
              { label: 'Jours', value: timeLeft.days },
              { label: 'Heures', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-serif text-white tabular-nums tracking-tighter">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[7px] text-luxuryGold uppercase font-bold tracking-widest opacity-60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};