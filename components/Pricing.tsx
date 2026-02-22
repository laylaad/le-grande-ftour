import React from 'react';
import { FadeIn } from './FadeIn';

const PLANS = [
  {
    name: 'Standard',
    displayName: 'STANDARD',
    price: '400',
    tablePrice: '3 500',
    color: 'border-white/40',
    textColor: 'text-white',
    accentColor: 'bg-white/10',
    features: [
      { label: 'Placement', value: 'Accès Général' },
      { label: 'Networking', value: 'Accès' },
      { label: 'Expérience', value: 'Accès Soirée' }
    ],
    highlight: false
  },
  {
    name: 'Gold',
    displayName: 'GOLD',
    price: '700',
    tablePrice: '6 500',
    color: 'border-[#b87333]/40', // Bronze/Copper
    textColor: 'text-[#cd7f32]',
    accentColor: 'bg-[#b87333]/10',
    features: [
      { label: 'Placement', value: 'Zone Centrale' },
      { label: 'Networking', value: 'Ouvert' },
      { label: 'Expérience', value: 'Cérémonie Trophées' }
    ],
    highlight: false
  },
  {
    name: 'VIP',
    displayName: 'VIP',
    price: '900',
    tablePrice: '8 500',
    color: 'border-blue-300/40', // Silver/Blueish
    textColor: 'text-blue-200',
    accentColor: 'bg-blue-300/10',
    features: [
      { label: 'Placement', value: 'Zone VIP' },
      { label: 'Networking', value: 'Privilégié' },
      { label: 'Expérience', value: 'Proximité Scène' }
    ],
    highlight: true
  },
  {
    name: 'VVIP',
    displayName: 'VVIP',
    price: '1200',
    tablePrice: '11 000',
    color: 'border-luxuryGold/40',
    textColor: 'text-luxuryGold',
    accentColor: 'bg-luxuryGold/10',
    features: [
      { label: 'Placement', value: 'Front Stage' },
      { label: 'Networking', value: 'Prioritaire' },
      { label: 'Expérience', value: 'Visibilité Maximale' }
    ],
    highlight: false
  }
];

export const Pricing: React.FC<{ onSelectPlan: (plan: string) => void }> = ({ onSelectPlan }) => {
  return (
    <section id="tarifs" className="py-32 bg-luxuryBlack relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <h2 className="text-luxuryGold tracking-[0.5em] uppercase text-[11px] font-bold mb-6">Comparatif des Offres</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
            VOTRE ACCÈS <span className="gold-gradient-text italic font-normal">EXCLUSIF</span>
          </h3>
          <p className="text-luxuryTextGray max-w-2xl mx-auto text-sm md:text-base font-light italic opacity-60">
            Choisissez l'expérience qui correspond à vos ambitions de networking et de visibilité.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 100} direction="up">
              <div className={`relative h-full p-8 flex flex-col border transition-all duration-700 group overflow-hidden bg-luxuryBlackElevated ${plan.color} ${
                plan.highlight ? 'shadow-[0_0_40px_rgba(225,168,34,0.1)]' : ''
              }`}>
                
                <div className="text-center mb-10">
                  <h4 className={`text-sm uppercase tracking-[0.4em] font-bold py-3 border-b border-white/5 mb-8 ${plan.textColor}`}>
                    {plan.displayName}
                  </h4>
                </div>

                <div className="flex-1 space-y-6 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature.label} className="space-y-3">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold text-center">{feature.label}</p>
                      <div className={`py-4 px-4 rounded-xl border text-center transition-all duration-500 ${plan.color} ${plan.accentColor}`}>
                        <div className="flex items-center justify-center gap-3">
                          {feature.label === 'Networking' && (
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.textColor} border border-current bg-white/5`}>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                              </svg>
                            </div>
                          )}
                          <span className={`text-xs font-medium tracking-wide ${plan.textColor}`}>{feature.value}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto pt-8 border-t border-white/5 text-center space-y-4`}>
                  <div className={`p-4 rounded-lg border ${plan.color} ${plan.accentColor}`}>
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-serif text-white">{plan.price}</span>
                        <span className={`text-[10px] font-bold uppercase ${plan.textColor}`}>DH / pers</span>
                      </div>
                      <div className="flex items-baseline justify-center gap-1 opacity-60">
                        <span className="text-lg font-serif text-white">{plan.tablePrice}</span>
                        <span className={`text-[8px] font-bold uppercase ${plan.textColor}`}>DH / table</span>
                      </div>
                      <p className="text-[7px] uppercase tracking-widest text-white/30">(10 personnes)</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className="w-full py-4 bg-gradient-to-r from-luxuryGold via-luxuryGoldLight to-luxuryGoldDark text-luxuryBlack text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 hover:brightness-110 shadow-lg shadow-luxuryGold/10"
                  >
                    Réserver
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
