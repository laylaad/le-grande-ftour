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
      // Vercel servira automatiquement api/register.ts sur cette route
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
      setFormData({ name: '', email: '', company: '', position: '' });
    } catch (err: any) { 
      console.error("Submission error:", err);
      setError(err.message || "Service momentanément indisponible. Veuillez réessayer plus tard."); 
    } finally { 
      setIsLoading(false); 
    }
  };

  return (
    <section id="inscription" className="py-32 bg-luxuryBlack relative">
      <div className="section-divider absolute top-0 left-0 w-full opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-luxuryGold tracking-[0.5em] uppercase text-[11px] font-bold mb-6">Conciergerie & Protocole</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter">Demande d'Invitation</h3>
        </FadeIn>
        
        {isSubmitted ? (
          <FadeIn className="bg-luxuryBlackElevated p-16 border border-luxuryGold/30 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-luxuryGold/5 blur-[60px] rounded-full"></div>
            
            <div className="w-20 h-20 bg-luxuryGold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-luxuryGold/20">
              <svg className="w-10 h-10 text-luxuryGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h4 className="text-white text-3xl mb-4 font-serif italic">Requête Transmise</h4>
            <p className="text-luxuryTextGray text-lg mb-10 font-light italic">Votre demande a été enregistrée avec succès. Notre service protocole l'étudiera avec la plus grande attention.</p>
            <button onClick={() => setIsSubmitted(false)} className="text-luxuryGold text-xs uppercase font-bold tracking-[0.3em] border-b-2 border-luxuryGold/30 hover:text-white hover:border-white transition-all duration-500">Retour au formulaire</button>
          </FadeIn>
        ) : (
          <FadeIn className="bg-luxuryBlackElevated p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxuryGold to-transparent opacity-50"></div>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {error && (
                <div className="p-5 bg-red-900/20 border border-red-500/50 text-red-200 text-sm text-center italic font-light animate-pulse">
                  <span className="font-bold uppercase not-italic mr-3">Erreur :</span>
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { id: 'name', label: 'Nom & Prénom', type: 'text', placeholder: 'Ex: Meryem Alaoui' },
                  { id: 'email', label: 'Email Institutionnel', type: 'email', placeholder: 'Ex: direction@entreprise.ma' },
                  { id: 'company', label: 'Organisation / Entreprise', type: 'text', placeholder: 'Ex: Agence Souss-Massa' },
                  { id: 'position', label: 'Titre de Fonction', type: 'text', placeholder: 'Ex: Directrice Générale' },
                ].map((field) => (
                  <div key={field.id} className="relative group">
                    <label className="text-[10px] uppercase tracking-widest text-luxuryGold/70 mb-3 block font-bold transition-colors group-focus-within:text-luxuryGold">
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      required 
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-luxuryGold transition-all duration-500 text-base font-light outline-none placeholder:text-white/20 placeholder:italic" 
                      value={formData[field.id as keyof typeof formData]} 
                      onChange={e => setFormData({ ...formData, [field.id]: e.target.value })} 
                    />
                  </div>
                ))}
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading} 
                className="group relative w-full py-6 bg-luxuryGold text-luxuryBlack font-bold text-sm uppercase tracking-[0.5em] overflow-hidden transition-all duration-700 disabled:opacity-50"
              >
                <span className="relative z-10">{isLoading ? "Transmission en cours..." : "Confirmer ma demande d'accès"}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <p className="text-center text-[10px] text-luxuryTextGray/40 italic font-light uppercase tracking-widest">
                Votre demande sera traitée sous 48h par notre comité de sélection.
              </p>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
};