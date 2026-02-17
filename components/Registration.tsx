
import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // On appelle notre propre API Vercel qui gère SheetMonkey ET l'Email
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Désolé, une erreur technique est survenue. Veuillez nous contacter au +212 612 610 012.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="inscription" className="py-24 md:py-48 bg-luxuryGray relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxuryGold/30 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-luxuryGold tracking-[0.4em] uppercase text-[10px] font-bold mb-6">Demande d'Invitation</h2>
          <h3 className="text-4xl md:text-7xl font-serif text-white mb-8">Inscription</h3>
          <p className="text-luxuryTextGray font-light text-lg">
            Rejoignez le cercle restreint des décideurs de l'économie de demain.
          </p>
        </FadeIn>

        {isSubmitted ? (
          <FadeIn className="bg-luxuryBlack p-16 border border-luxuryGold/30 text-center shadow-2xl">
            <div className="w-20 h-20 bg-luxuryGold/10 border border-luxuryGold rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-luxuryGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h4 className="text-3xl font-serif text-white mb-6">Demande Enregistrée</h4>
            <p className="text-luxuryTextGray text-lg mb-10 font-light">
              Un email de confirmation vient d'être envoyé à <strong>{formData.email}</strong>.<br/>
              Notre service protocole reviendra vers vous pour valider votre invitation.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-luxuryGold tracking-ultra-widest text-[10px] font-bold uppercase border-b border-luxuryGold/30 pb-2 hover:border-luxuryGold transition-all"
            >
              Retour
            </button>
          </FadeIn>
        ) : (
          <FadeIn className="bg-luxuryBlack p-10 md:p-20 border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-medium">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group relative">
                  <label className="block text-[10px] tracking-ultra-widest text-luxuryGold uppercase mb-2 font-bold opacity-60">Nom Complet</label>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-luxuryGold transition-all duration-500 font-light text-lg disabled:opacity-30"
                    placeholder="Karim Benabdallah"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="group relative">
                  <label className="block text-[10px] tracking-ultra-widest text-luxuryGold uppercase mb-2 font-bold opacity-60">Email Pro</label>
                  <input
                    type="email"
                    required
                    disabled={isLoading}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-luxuryGold transition-all duration-500 font-light text-lg disabled:opacity-30"
                    placeholder="contact@entreprise.ma"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group relative">
                  <label className="block text-[10px] tracking-ultra-widest text-luxuryGold uppercase mb-2 font-bold opacity-60">Entreprise</label>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-luxuryGold transition-all duration-500 font-light text-lg disabled:opacity-30"
                    placeholder="Nom de la structure"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="group relative">
                  <label className="block text-[10px] tracking-ultra-widest text-luxuryGold uppercase mb-2 font-bold opacity-60">Fonction</label>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-luxuryGold transition-all duration-500 font-light text-lg disabled:opacity-30"
                    placeholder="CEO, Fondateur..."
                    value={formData.position}
                    onChange={e => setFormData({ ...formData, position: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 bg-luxuryGold text-luxuryBlack font-bold text-xs tracking-ultra-widest uppercase hover:bg-white transition-all duration-500 shadow-2xl shadow-luxuryGold/20 flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-luxuryBlack border-t-transparent rounded-full animate-spin"></div>
                  ) : "Confirmer mon inscription"}
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
