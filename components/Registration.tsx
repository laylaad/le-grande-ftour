import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', position: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const isHostinger = window.location.hostname.includes('hostinger') || !window.location.hostname.includes('vercel');
      const apiPath = isHostinger ? '/api/register.php' : '/api/register';
      const response = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Une erreur est survenue lors de la connexion au service.');
      }
      setIsSubmitted(true);
    } catch (err: any) { 
      const cleanError = err.message.includes('<!DOCTYPE') 
        ? "Service momentanément indisponible. Contactez-nous au +212 612 610 012." 
        : err.message;
      setError(cleanError); 
    } finally { 
      setIsLoading(false); 
    }
  };

  return (
    <section id="inscription" className="py-6 bg-luxuryBlack border-t border-white/5">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn className="text-center mb-6">
          <h2 className="text-luxuryRed tracking-[0.4em] uppercase text-[8px] font-bold mb-1">Invitation Exclusive</h2>
          <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-tighter">Inscription</h3>
        </FadeIn>
        
        {isSubmitted ? (
          <FadeIn className="bg-luxuryGray p-6 border border-luxuryGold/30 text-center shadow-2xl">
            <div className="w-12 h-12 bg-luxuryGold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-luxuryGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h4 className="text-white text-base mb-1 font-serif">Demande Enregistrée</h4>
            <p className="text-luxuryTextGray text-[10px] mb-4">Notre service protocole reviendra vers vous.</p>
            <button onClick={() => setIsSubmitted(false)} className="text-luxuryGold text-[9px] uppercase font-bold border-b border-luxuryGold/30 hover:text-luxuryRed transition-colors">Nouvelle inscription</button>
          </FadeIn>
        ) : (
          <FadeIn className="bg-luxuryGray p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxuryRed/50 to-transparent"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-luxuryRed/10 border border-luxuryRed/30 text-red-200 text-[10px] text-center italic font-light">
                  <span className="text-luxuryRed font-bold uppercase not-italic mr-2">Alerte :</span>
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" required placeholder="Nom Complet" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-colors text-sm font-light placeholder:text-white/20" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="relative group">
                  <input type="email" required placeholder="Email Pro" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-colors text-sm font-light placeholder:text-white/20" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="relative group">
                  <input type="text" required placeholder="Entreprise" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-colors text-sm font-light placeholder:text-white/20" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div className="relative group">
                  <input type="text" required placeholder="Fonction" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-colors text-sm font-light placeholder:text-white/20" value={formData.position} onChange={e => setFormData({ ...formData, position: e.target.value })} />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full py-4 bg-luxuryGold text-luxuryBlack font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-luxuryRed hover:text-white transition-all duration-500 disabled:opacity-50 shadow-[0_5px_20px_rgba(225,168,34,0.1)]"
              >
                {isLoading ? "Traitement en cours..." : "Confirmer ma présence"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
};