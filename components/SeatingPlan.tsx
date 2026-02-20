import React from 'react';

interface TableProps {
  type: 'round' | 'rect';
  id: string;
  category: 'VVIP' | 'VIP' | 'GOLD' | 'STANDARD';
}

const Table: React.FC<TableProps> = ({ type, id, category }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'VVIP': return 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]';
      case 'VIP': return 'border-[#D4AF37]/60 shadow-[0_0_10px_rgba(212,175,55,0.2)]';
      case 'GOLD': return 'border-[#D4AF37]/30';
      default: return 'border-white/20';
    }
  };

  return (
    <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-110">
      {type === 'round' ? (
        <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-[#1a1a1a] group-hover:border-[#D4AF37] transition-all duration-500 ${getCategoryColor()}`}>
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a] shadow-inner border border-white/5" />
          <span className="absolute -bottom-8 text-[9px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap z-10 font-bold">{id}</span>
        </div>
      ) : (
        <div className={`w-20 h-12 rounded-sm border-2 flex items-center justify-center bg-[#1a1a1a] group-hover:border-[#D4AF37] transition-all duration-500 ${getCategoryColor()}`}>
          <div className="w-16 h-8 bg-[#2a2a2a] shadow-inner border border-white/5" />
          <span className="absolute -bottom-8 text-[9px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap z-10 font-bold">{id}</span>
        </div>
      )}
    </div>
  );
};

export const SeatingPlan: React.FC = () => {
  return (
    <section id="plan" className="py-32 bg-black relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
            PLAN DES <span className="gold-gradient-text italic font-normal">TABLES</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-luxuryGold/30"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxuryGold font-bold">Disposition de la salle</span>
            <div className="w-12 h-[1px] bg-luxuryGold/30"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Zone Centrale du Plan */}
          <div className="lg:col-span-12 glass-card rounded-[3rem] p-12 md:p-24 relative border border-white/5">
            
            {/* Indicateur Scène */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-12 py-4 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl shadow-2xl">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">Estrade / Scène</span>
            </div>

            {/* Labels Latéraux */}
            <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-around py-24 pointer-events-none opacity-40">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white -rotate-90 origin-center whitespace-nowrap">VVIP</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white -rotate-90 origin-center whitespace-nowrap">VIP</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white -rotate-90 origin-center whitespace-nowrap">GOLD</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white -rotate-90 origin-center whitespace-nowrap">STANDARD</span>
            </div>
            <div className="absolute right-8 top-0 bottom-0 flex flex-col justify-around py-24 pointer-events-none opacity-40">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white rotate-90 origin-center whitespace-nowrap">VVIP</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white rotate-90 origin-center whitespace-nowrap">VIP</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white rotate-90 origin-center whitespace-nowrap">GOLD</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white rotate-90 origin-center whitespace-nowrap">STANDARD</span>
            </div>

            <div className="space-y-20">
              {/* Ligne VVIP */}
              <div className="flex flex-wrap justify-center gap-10">
                {[...Array(6)].map((_, i) => (
                  <Table key={i} type="round" id={`VVIP-${i+1}`} category="VVIP" />
                ))}
              </div>

              {/* Ligne VIP */}
              <div className="flex flex-wrap justify-center gap-8">
                {[...Array(8)].map((_, i) => (
                  <Table key={i} type="round" id={`VIP-${i+1}`} category="VIP" />
                ))}
              </div>

              {/* Ligne GOLD (Rectangulaires) */}
              <div className="flex flex-wrap justify-center gap-6">
                {[...Array(8)].map((_, i) => (
                  <Table key={i} type="rect" id={`G-${i+1}`} category="GOLD" />
                ))}
              </div>

              {/* Ligne STANDARD (Rectangulaires) */}
              <div className="space-y-8 pt-12 border-t border-white/5">
                <div className="flex flex-wrap justify-center gap-6">
                  {[...Array(8)].map((_, i) => (
                    <Table key={i} type="rect" id={`S-${i+1}`} category="STANDARD" />
                  ))}
                </div>
              </div>
            </div>

            {/* Légende */}
            <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5 pt-12">
              <div className="flex gap-12">
                <div className="flex items-center gap-4 group cursor-help">
                  <div className="w-4 h-4 rounded-full border border-luxuryGold/50 bg-luxuryGold/10 group-hover:bg-luxuryGold/30 transition-colors"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-bold group-hover:text-white transition-colors">Table Ronde</span>
                </div>
                <div className="flex items-center gap-4 group cursor-help">
                  <div className="w-6 h-4 rounded-sm border border-white/30 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-bold group-hover:text-white transition-colors">Table Rectangulaire</span>
                </div>
              </div>

              <a
                href="#inscription-hero"
                className="group relative inline-flex items-center justify-center px-12 py-4 bg-transparent border border-luxuryGold/50 text-luxuryGold font-bold text-[11px] tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:bg-luxuryGold hover:text-luxuryBlack"
              >
                <span className="relative z-10">Réserver</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
