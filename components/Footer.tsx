
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-luxuryBlack border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <img src="logo.png" alt="Logo" className="h-12 w-auto mb-4 brightness-110 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <p className="text-luxuryTextGray text-xs font-light leading-relaxed mb-4">Produit par l’agence Affairino. L'excellence business au Maroc.</p>
          </div>
          <div className="lg:col-span-1">
            <h5 className="text-white font-serif text-base mb-4 italic">Accès Rapide</h5>
            <ul className="space-y-2">
              <li><a href="#offres" className="text-[9px] text-luxuryTextGray hover:text-luxuryGold tracking-widest uppercase font-bold">Nos Offres</a></li>
              <li><a href="#programme" className="text-[9px] text-luxuryTextGray hover:text-luxuryGold tracking-widest uppercase font-bold">Programme</a></li>
              <li><a href="#inscription" className="text-[9px] text-luxuryTextGray hover:text-luxuryGold tracking-widest uppercase font-bold">Inscription</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-serif text-base mb-2 italic">Contact Direct</h5>
                  <p className="text-luxuryGold text-xl font-serif">+212 612 610 012</p>
                </div>
                <div>
                  <h5 className="text-white font-serif text-base mb-2 italic">Siège Affairino</h5>
                  <p className="text-luxuryTextGray text-xs font-light leading-relaxed">Maroc, Agadir & Casablanca</p>
                </div>
             </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] tracking-widest text-luxuryTextGray/30 uppercase font-bold pt-6 border-t border-white/5">
          <p>© 2026 LE GRAND FTOUR - BY AFFAIRINO.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-luxuryGold transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-luxuryGold transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
