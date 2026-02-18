import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-luxuryBlack border-t border-white/5 pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
          <div className="max-w-xs">
            <img src="logo.png" alt="Logo" className="h-10 w-auto mb-2 brightness-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <p className="text-luxuryTextGray text-[10px] leading-tight">Produit par l’agence Affairino. L'excellence business au Maroc.</p>
          </div>
          <div className="flex gap-8">
            <div>
              <h5 className="text-white text-[10px] uppercase font-bold mb-2">Contact</h5>
              <p className="text-luxuryGold text-sm font-serif">+212 612 610 012</p>
            </div>
            <div>
              <h5 className="text-white text-[10px] uppercase font-bold mb-2">Réseaux</h5>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/p/DUYGa-GDCVa/" className="text-[9px] text-luxuryTextGray uppercase font-bold">Insta</a>
                <a href="https://www.linkedin.com/showcase/le-grand-ftour/" className="text-[9px] text-luxuryTextGray uppercase font-bold">Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[8px] tracking-widest text-luxuryTextGray/20 uppercase font-bold pt-4 border-t border-white/5">
          <p>© 2026 LE GRAND FTOUR - BY AFFAIRINO.</p>
        </div>
      </div>
    </footer>
  );
};