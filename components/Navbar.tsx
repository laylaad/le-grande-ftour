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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-luxuryBlack/90 backdrop-blur-md py-3 border-b border-luxuryGold/20' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className="h-10 md:h-12 w-auto transition-all duration-300">
            <img 
              src="logo.png" 
              alt="Le Grand Ftour" 
              className="h-full w-auto object-contain brightness-125"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.text-fallback')) {
                  parent.insertAdjacentHTML('afterbegin', '<span class="text-fallback text-luxuryGold font-serif font-bold text-xl tracking-tighter">Le Grand Ftour</span>');
                }
              }}
            />
          </div>
        </a>
        
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#vision" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Vision</a>
          <a href="#offres" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Offres</a>
          <a href="#programme" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Programme</a>
          <a href="#contact" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Contact</a>
          <a
            href="#inscription"
            className="px-8 py-2.5 bg-luxuryGold text-luxuryBlack text-[10px] tracking-[0.3em] hover:bg-white transition-all font-bold uppercase border border-luxuryGold"
          >
            S'inscrire
          </a>
        </div>

        <button className="lg:hidden text-luxuryGold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};