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
    <section id="plan" className="py-32 bg-white text-black relative border-8 border-red-500 z-[100]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-black mb-6 tracking-tight">
            DEBUG: PLAN DES TABLES
          </h2>
          <p className="text-2xl font-bold text-red-600">SI VOUS VOYEZ CECI, LE COMPOSANT EST RENDU</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12 bg-gray-100 rounded-[3rem] p-12 md:p-24 relative border border-black/10">
            <div className="space-y-20">
              <div className="flex flex-wrap justify-center gap-10">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Table key={i} type="round" id={`VVIP-${i+1}`} category="VVIP" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
