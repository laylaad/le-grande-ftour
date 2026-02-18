import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-luxuryBlack/95 backdrop-blur-xl py-2 border-b border-luxuryRed/30' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className="h-10 md:h-12 w-auto transition-all duration-300">
            <img 
              src="logo.png" 
              alt="Le Grand Ftour" 
              className="h-full w-auto object-contain brightness-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.text-fallback')) {
                  parent.insertAdjacentHTML('afterbegin', '<span class="text-fallback text-luxuryGold font-serif font-bold text-lg tracking-tighter">Le Grand Ftour</span>');
                }
              }}
            />
          </div>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#offres" className="text-[9px] tracking-widest text-white/70 hover:text-luxuryGold transition-colors font-bold uppercase">Nos Offres</a>
          <a href="#programme" className="text-[9px] tracking-widest text-white/70 hover:text-luxuryGold transition-colors font-bold uppercase">Programme</a>
          <a href="#contact" className="text-[9px] tracking-widest text-white/70 hover:text-luxuryGold transition-colors font-bold uppercase">Contact</a>
          <a
            href="#inscription"
            className="px-6 py-2 bg-luxuryRed text-white text-[9px] tracking-widest hover:bg-luxuryGold hover:text-luxuryBlack transition-all font-bold uppercase border border-luxuryRed"
          >
            Inscription
          </a>
        </div>

        <button className="lg:hidden text-luxuryGold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};