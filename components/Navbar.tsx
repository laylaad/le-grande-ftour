import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled || isMenuOpen ? 'bg-luxuryBlack/95 backdrop-blur-md py-3 border-b border-luxuryGold/20' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className="flex items-center gap-2">
            <span className="logo-text">Le Grand Ftour</span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#offres" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Offres</a>
          <a href="#tarifs" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Tarifs</a>
          <a href="#plan" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Plan</a>
          <a href="#programme" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Programme</a>
          <a href="#presse" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Presse</a>
          <a href="#contact" className="text-[10px] tracking-[0.25em] text-white/60 hover:text-luxuryGold transition-all font-medium uppercase">Contact</a>
          <a
            href="#inscription-hero"
            className="px-8 py-2.5 bg-gradient-to-r from-luxuryGold via-luxuryGoldLight to-luxuryGoldDark text-luxuryBlack text-[10px] tracking-[0.3em] hover:brightness-110 transition-all font-bold uppercase shadow-lg shadow-luxuryGold/20"
          >
            S'inscrire
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-luxuryGold p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-0 top-[60px] bg-luxuryBlack/98 backdrop-blur-xl border-b border-luxuryGold/10 transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col p-8 space-y-6 text-center">
          <a href="#offres" onClick={toggleMenu} className="text-[11px] tracking-[0.3em] text-white/80 hover:text-luxuryGold transition-all font-medium uppercase">Offres</a>
          <a href="#tarifs" onClick={toggleMenu} className="text-[11px] tracking-[0.3em] text-white/80 hover:text-luxuryGold transition-all font-medium uppercase">Tarifs</a>
          <a href="#plan" onClick={toggleMenu} className="text-[11px] tracking-[0.3em] text-white/80 hover:text-luxuryGold transition-all font-medium uppercase">Plan</a>
          <a href="#programme" onClick={toggleMenu} className="text-[11px] tracking-[0.3em] text-white/80 hover:text-luxuryGold transition-all font-medium uppercase">Programme</a>
          <a href="#presse" onClick={toggleMenu} className="text-[11px] tracking-[0.3em] text-white/80 hover:text-luxuryGold transition-all font-medium uppercase">Presse</a>
          <a href="#contact" onClick={toggleMenu} className="text-[11px] tracking-[0.3em] text-white/80 hover:text-luxuryGold transition-all font-medium uppercase">Contact</a>
          <a
            href="#inscription-hero"
            onClick={toggleMenu}
            className="mx-auto px-10 py-3 bg-gradient-to-r from-luxuryGold via-luxuryGoldLight to-luxuryGoldDark text-luxuryBlack text-[11px] tracking-[0.3em] font-bold uppercase shadow-lg shadow-luxuryGold/20"
          >
            S'inscrire
          </a>
        </div>
      </div>
    </nav>
  );
};