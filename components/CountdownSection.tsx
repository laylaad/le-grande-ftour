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
    <section className="bg-luxuryBlack py-8 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="w-2 h-[1px] bg-luxuryGold/40"></div>
            <h3 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold">L'Événement commence dans</h3>
            <div className="w-2 h-[1px] bg-luxuryGold/40"></div>
          </div>
          
          <div className="flex gap-8 md:gap-14">
            {[
              { label: 'Jours', value: timeLeft.days },
              { label: 'Heures', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Secondes', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center group">
                <span className="text-4xl md:text-5xl font-serif text-white tabular-nums tracking-tighter group-hover:text-luxuryGold transition-colors duration-500">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[8px] text-luxuryGold/60 uppercase font-bold tracking-[0.2em] mt-1">
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