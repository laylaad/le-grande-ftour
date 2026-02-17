
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';
import { FadeIn } from './FadeIn';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Ramadan 2026 is around Feb 17 - Mar 18. Setting target to Mid-March 2026 for the Gala.
    const targetDate = new Date('2026-03-12T18:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

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
    <section className="bg-luxuryGray py-20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxuryGold via-transparent to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center">
          <h3 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-12">
            L'Expérience commence dans
          </h3>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { label: 'Jours', value: timeLeft.days },
              { label: 'Heures', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Secondes', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center group">
                <div className="relative overflow-hidden">
                   <span className="text-5xl md:text-8xl font-serif text-white tabular-nums tracking-tighter block group-hover:-translate-y-2 transition-transform duration-500">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] text-luxuryGold tracking-[0.3em] uppercase mt-6 font-bold opacity-60">
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
