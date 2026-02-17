
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-luxuryBlack/95 backdrop-blur-xl py-4 border-b border-luxuryGold/20' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className="h-20 md:h-24 w-auto transition-all duration-500">
            {/* Utilisation d'un chemin relatif pour le logo local */}
            <img 
              src="logo.png" 
              alt="Le Grand Ftour" 
              className="h-full w-auto object-contain brightness-110 drop-shadow-xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.text-fallback')) {
                  parent.insertAdjacentHTML('afterbegin', '<span class="text-fallback text-luxuryGold font-serif font-bold text-2xl tracking-tighter">Le Grand Ftour</span>');
                }
              }}
            />
          </div>
        </a>
        
        <div className="hidden lg:flex items-center space-x-12">
          <a href="#offres" className="text-[10px] tracking-ultra-widest text-white/70 hover:text-luxuryGold transition-colors duration-300 font-bold uppercase">Nos Offres</a>
          <a href="#contact" className="text-[10px] tracking-ultra-widest text-white/70 hover:text-luxuryGold transition-colors duration-300 font-bold uppercase">Contact</a>
          <a
            href="#inscription"
            className="px-8 py-3 bg-luxuryGold text-luxuryBlack text-[10px] tracking-ultra-widest hover:bg-white transition-all duration-300 font-bold shadow-lg shadow-luxuryGold/20 uppercase"
          >
            Inscription
          </a>
        </div>

        <button className="lg:hidden text-luxuryGold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
