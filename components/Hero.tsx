import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { MapPin, Calendar, Users } from 'lucide-react';

export const Hero: React.FC<{ selectedPlan?: string | null }> = ({ selectedPlan }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    position: '',
    phone: '',
    accessType: 'Standard'
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, accessType: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Une erreur est survenue lors de l\'envoi.');
      }
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', position: '', phone: '', accessType: 'Standard' });
    } catch (err: any) { 
      console.error("Submission error:", err);
      setError(err.message || "Service momentanément indisponible. Veuillez réessayer plus tard."); 
    } finally { 
      setIsLoading(false); 
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen w-full flex items-center bg-luxuryBlack pt-24 pb-12 overflow-hidden">
      {/* Background avec Halos d'Or subtils */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[35%] h-[35%] bg-luxuryGold/5 blur-[140px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] right-[5%] w-[40%] h-[40%] bg-luxuryGold/10 blur-[160px] rounded-full"></div>
        
        {/* Lignes décoratives de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-luxuryGold/30 to-transparent"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-luxuryGold/30 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-luxuryGold/30 rounded-full mb-8">
                 <div className="w-1.5 h-1.5 bg-luxuryGold rounded-full shadow-[0_0_8px_#e1a822]"></div>
                 <span className="text-luxuryGold text-[10px] tracking-[0.3em] uppercase font-bold">Événement Exclusif</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif text-white mb-8 tracking-tighter leading-[0.85]">
                Le Grand <br />
                <span className="gold-gradient-text italic font-normal">Ftour 2026</span>
              </h1>
              
              <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed">
                Là où les décideurs se rencontrent pour célébrer l'excellence et le partage.
              </p>

              <div className="space-y-10 mb-12">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 rounded-full border border-luxuryGold flex items-center justify-center transition-all duration-700 group-hover:bg-luxuryGold/5 group-hover:scale-105">
                    <MapPin size={28} className="text-luxuryGold" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[11px] uppercase tracking-[0.4em] text-luxuryGold font-bold">Lieu</span>
                    <span className="block text-white text-lg md:text-xl font-light tracking-tight">Centre d’Estivage du Ministère de la Justice – Agadir</span>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 rounded-full border border-luxuryGold flex items-center justify-center transition-all duration-700 group-hover:bg-luxuryGold/5 group-hover:scale-105">
                    <Calendar size={28} className="text-luxuryGold" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[11px] uppercase tracking-[0.4em] text-luxuryGold font-bold">Date</span>
                    <span className="block text-white text-lg md:text-xl font-light tracking-tight">7 Mars 2026</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div id="inscription-hero" className="lg:col-span-6">
            <FadeIn direction="left" delay={200}>
              <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden rounded-[2rem]">
                <div className="absolute top-12 right-12 opacity-5">
                  <Users size={120} className="text-white" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tighter mb-12 text-center leading-none">
                  Formulaire <br />
                  <span className="italic font-normal">d'Inscription</span>
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-luxuryGold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-luxuryGold/20">
                      <svg className="w-8 h-8 text-luxuryGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h4 className="text-white text-xl mb-2 font-serif italic">Demande Envoyée</h4>
                    <p className="text-luxuryTextGray text-sm mb-8 font-light italic">Merci pour votre intérêt. Notre équipe vous contactera prochainement.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-luxuryGold text-[10px] uppercase font-bold tracking-[0.2em] border-b border-luxuryGold/30 hover:text-white hover:border-white transition-all duration-500">Nouvelle inscription</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    {error && (
                      <div className="p-3 bg-red-900/20 border border-red-500/50 text-red-200 text-xs text-center italic font-light">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      <div className="relative group">
                        <label className="block text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">Nom & prénom</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all duration-500 text-sm font-light outline-none" 
                          value={formData.name} 
                          onChange={e => setFormData({ ...formData, name: e.target.value })} 
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">Fonction</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all duration-500 text-sm font-light outline-none" 
                          value={formData.position} 
                          onChange={e => setFormData({ ...formData, position: e.target.value })} 
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">Entreprise / Administration</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all duration-500 text-sm font-light outline-none" 
                          value={formData.company} 
                          onChange={e => setFormData({ ...formData, company: e.target.value })} 
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">Téléphone</label>
                        <input 
                          type="tel" 
                          required 
                          className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all duration-500 text-sm font-light outline-none" 
                          value={formData.phone} 
                          onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                        />
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label className="block text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">Email</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all duration-500 text-sm font-light outline-none" 
                        value={formData.email} 
                        onChange={e => setFormData({ ...formData, email: e.target.value })} 
                      />
                    </div>

                    <div className="pt-4">
                      <label className="text-[10px] uppercase tracking-widest text-luxuryGold mb-6 block font-bold">
                        Type d'Accès
                      </label>
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {['Standard', 'Gold', 'VIP', 'VVIP'].map((type) => (
                          <label key={type} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="accessType" 
                              value={type}
                              checked={formData.accessType === type}
                              onChange={e => setFormData({ ...formData, accessType: e.target.value })}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${formData.accessType === type ? 'border-luxuryGold bg-luxuryGold/20' : 'border-white/20'}`}>
                              {formData.accessType === type && <div className="w-2 h-2 rounded-full bg-luxuryGold"></div>}
                            </div>
                            <span className={`text-xs transition-colors duration-300 ${formData.accessType === type ? 'text-white' : 'text-white/40'}`}>
                              Accès {type}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isLoading} 
                      className="w-full py-5 bg-gradient-to-r from-luxuryGold via-luxuryGoldLight to-luxuryGoldDark text-luxuryBlack font-bold text-xs uppercase tracking-[0.3em] rounded-xl transition-all duration-500 hover:brightness-110 shadow-xl shadow-luxuryGold/10 disabled:opacity-50 mt-8"
                    >
                      {isLoading ? "Traitement..." : "S'inscrire maintenant"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
