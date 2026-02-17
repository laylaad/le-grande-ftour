
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-luxuryBlack border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-28 w-auto">
                 <img 
                    src="logo.png" 
                    alt="Logo" 
                    className="h-full w-auto brightness-110 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
              </div>
            </div>
            <p className="text-luxuryTextGray text-sm font-light leading-relaxed mb-8">
              Produit par l’agence Affairino. Le Grand Ftour redéfinit les standards de l'excellence business au Maroc.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[10px] tracking-widest text-luxuryGold hover:text-white transition-colors font-bold uppercase">Instagram</a>
              <a href="#" className="text-[10px] tracking-widest text-luxuryGold hover:text-white transition-colors font-bold uppercase">LinkedIn</a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h5 className="text-white font-serif text-lg mb-8 italic">Accès Rapide</h5>
            <ul className="space-y-4">
              <li><a href="#offres" className="text-[10px] text-luxuryTextGray hover:text-luxuryGold transition-colors tracking-widest uppercase font-bold">Nos Offres</a></li>
              <li><a href="#inscription" className="text-[10px] text-luxuryTextGray hover:text-luxuryGold transition-colors tracking-widest uppercase font-bold">Inscription</a></li>
              <li><a href="#contact" className="text-[10px] text-luxuryTextGray hover:text-luxuryGold transition-colors tracking-widest uppercase font-bold">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h5 className="text-white font-serif text-lg mb-8 italic">Contact Direct</h5>
                  <p className="text-luxuryTextGray text-[10px] tracking-widest uppercase mb-2">Service Conciergerie</p>
                  <p className="text-luxuryGold text-2xl font-serif">+212 612 610 012</p>
                </div>
                <div>
                  <h5 className="text-white font-serif text-lg mb-8 italic">Siège Affairino</h5>
                  <p className="text-luxuryTextGray text-sm font-light leading-relaxed">
                    Maroc, Agadir & Casablanca<br />
                    www.legrandftour.com
                  </p>
                </div>
             </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/5 mb-16"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-luxuryTextGray/30 uppercase font-bold">
          <p className="mb-4 md:mb-0">© 2026 LE GRAND FTOUR - BY AFFAIRINO.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-luxuryGold transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-luxuryGold transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
