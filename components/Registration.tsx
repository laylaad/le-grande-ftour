
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
      if (!response.ok || !result.success) throw new Error(result.error || 'Erreur');
      setIsSubmitted(true);
    } catch (err: any) { setError(err.message); } finally { setIsLoading(false); }
  };

  return (
    <section id="inscription" className="py-12 md:py-16 bg-luxuryGray relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-8">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[9px] font-bold mb-2">Demande d'Invitation</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">Inscription</h3>
        </FadeIn>
        {isSubmitted ? (
          <FadeIn className="bg-luxuryBlack p-8 border border-luxuryGold/30 text-center shadow-2xl">
            <h4 className="text-xl font-serif text-white mb-2">Demande Enregistrée</h4>
            <p className="text-luxuryTextGray text-sm font-light mb-4">Nous reviendrons vers vous par email.</p>
            <button onClick={() => setIsSubmitted(false)} className="text-luxuryGold text-[9px] uppercase font-bold border-b border-luxuryGold/30 pb-1">Retour</button>
          </FadeIn>
        ) : (
          <FadeIn className="bg-luxuryBlack p-6 md:p-10 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <div className="p-3 bg-red-950/20 border-l-2 border-red-500 text-red-200 text-xs">{error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" required placeholder="Nom Complet" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-luxuryGold text-base" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" required placeholder="Email Pro" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-luxuryGold text-base" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <input type="text" required placeholder="Entreprise" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-luxuryGold text-base" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                <input type="text" required placeholder="Fonction" className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-luxuryGold text-base" value={formData.position} onChange={e => setFormData({ ...formData, position: e.target.value })} />
              </div>
              <button type="submit" disabled={isLoading} className="w-full py-4 bg-luxuryGold text-luxuryBlack font-bold text-[10px] tracking-ultra-widest uppercase hover:bg-white transition-all">
                {isLoading ? "Chargement..." : "Confirmer mon inscription"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
