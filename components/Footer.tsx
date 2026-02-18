import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-luxuryBlack border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="h-14 mb-6">
              <img 
                src="logo.png" 
                alt="Logo Le Grand Ftour" 
                className="h-full w-auto object-contain brightness-125"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.text-fallback')) {
                    parent.insertAdjacentHTML('afterbegin', '<span class="text-fallback text-luxuryGold font-serif font-bold text-2xl tracking-tighter italic">Le Grand Ftour</span>');
                  }
                }}
              />
            </div>
            <p className="text-luxuryTextGray text-xs leading-relaxed max-w-xs italic opacity-50">
              Produit par l’agence <span className="text-luxuryGold">Affairino</span>. L'excellence business au Maroc, redéfinissant les connexions stratégiques.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:items-center">
            <div className="text-left md:text-center">
              <h5 className="text-white text-[10px] uppercase font-bold tracking-[0.3em] mb-4">Contact & Conciergerie</h5>
              <p className="text-luxuryGold text-2xl font-serif italic mb-2 tracking-tighter">+212 612 610 012</p>
              <p className="text-luxuryTextGray text-[10px] uppercase tracking-widest opacity-40">Service Protocole Affairino</p>
            </div>
          </div>

          {/* Social Networks */}
          <div className="flex flex-col md:items-end">
            <h5 className="text-white text-[10px] uppercase font-bold tracking-[0.3em] mb-6">Réseaux Sociaux</h5>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/legrandftour/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-luxuryGold hover:bg-luxuryGold hover:text-luxuryBlack transition-all duration-500 rounded-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/showcase/le-grand-ftour/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-luxuryGold hover:bg-luxuryGold hover:text-luxuryBlack transition-all duration-500 rounded-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Final Line */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.5em] text-luxuryTextGray/20 uppercase font-bold pt-8 border-t border-white/5">
          <p>© 2026 LE GRAND FTOUR - BY AFFAIRINO.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="hover:text-luxuryGold/40 cursor-help transition-colors">Mentions Légales</span>
            <span className="hover:text-luxuryGold/40 cursor-help transition-colors">Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};