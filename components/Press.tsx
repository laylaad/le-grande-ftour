import React from 'react';
import { FadeIn } from './FadeIn';
import { Download, FileText, Camera, Newspaper } from 'lucide-react';

export const Press: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    media: '',
    position: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/press', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', media: '', position: '', phone: '', message: '' });
    } catch (err: any) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const pressReleases = [
    {
      date: "15 Février 2026",
      title: "Lancement officiel de la 5ème édition du Grand Ftour à Agadir",
      type: "Communiqué de Presse",
      url: "#" // REMPLACEZ PAR VOTRE LIEN GOOGLE DRIVE
    },
    {
      date: "02 Janvier 2026",
      title: "L'agence Affairino annonce un partenariat stratégique pour l'excellence",
      type: "Annonce",
      url: "#" // REMPLACEZ PAR VOTRE LIEN GOOGLE DRIVE
    }
  ];

  return (
    <section id="presse" className="py-32 bg-luxuryBlack relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxuryGold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-luxuryGold tracking-[0.5em] uppercase text-[11px] font-bold mb-6">Relations Médias</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
            ESPACE <span className="gold-gradient-text italic font-normal">PRESSE</span>
          </h3>
          <p className="text-luxuryTextGray max-w-2xl mx-auto text-sm md:text-base font-light italic opacity-60">
            Accédez aux ressources officielles et demandez votre accréditation média pour le Grand Ftour 2026.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Info & Downloads */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Newspaper className="text-luxuryGold" size={24} />
                <h4 className="text-xl font-serif text-white uppercase tracking-wider">Communiqués de Presse</h4>
              </div>
              <div className="space-y-4">
                {pressReleases.map((release, idx) => (
                  <div key={idx} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-luxuryGold/30 transition-all duration-500 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <span className="text-[10px] text-luxuryGold uppercase tracking-widest font-bold block mb-2">{release.date}</span>
                      <h5 className="text-white text-lg font-light group-hover:text-luxuryGold transition-colors">{release.title}</h5>
                    </div>
                    <a 
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold border border-white/10 px-4 py-2 rounded-full group-hover:border-luxuryGold/50 whitespace-nowrap"
                    >
                      <Download size={14} /> PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Camera className="text-luxuryGold" size={24} />
                <h4 className="text-xl font-serif text-white uppercase tracking-wider">Kit Média</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="#" // REMPLACEZ PAR VOTRE LIEN GOOGLE DRIVE
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 bg-gradient-to-br from-luxuryGold/10 to-transparent border border-luxuryGold/20 rounded-3xl group cursor-pointer hover:bg-luxuryGold/20 transition-all duration-500 block"
                >
                  <FileText className="text-luxuryGold mb-6" size={32} />
                  <h6 className="text-white text-lg font-serif mb-2">Dossier de Presse</h6>
                  <p className="text-white/40 text-xs font-light mb-6">Présentation, chiffres clés et vision.</p>
                  <span className="text-[10px] text-luxuryGold uppercase tracking-widest font-bold flex items-center gap-2">Télécharger <Download size={12} /></span>
                </a>
                <a 
                  href="#" // REMPLACEZ PAR VOTRE LIEN GOOGLE DRIVE
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl group cursor-pointer hover:border-luxuryGold/30 transition-all duration-500 block"
                >
                  <Camera className="text-luxuryGold mb-6" size={32} />
                  <h6 className="text-white text-lg font-serif mb-2">Photothèque HD</h6>
                  <p className="text-white/40 text-xs font-light mb-6">Visuels haute résolution pour publications.</p>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold flex items-center gap-2">Accéder <Download size={12} /></span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Accreditation Form */}
          <div className="lg:col-span-5">
            <div className="bg-luxuryBlackElevated p-8 md:p-10 border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxuryGold to-transparent opacity-30"></div>
              
              <h4 className="text-2xl font-serif text-white mb-2">Accréditation Presse</h4>
              <p className="text-white/40 text-xs font-light mb-10 uppercase tracking-widest">Demande d'accès média</p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-luxuryGold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-luxuryGold/20">
                    <svg className="w-8 h-8 text-luxuryGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h5 className="text-white text-xl mb-2 font-serif italic">Demande Reçue</h5>
                  <p className="text-luxuryTextGray text-sm mb-8 font-light italic">Notre service presse reviendra vers vous sous 24h.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-luxuryGold text-[10px] uppercase font-bold tracking-[0.2em] border-b border-luxuryGold/30 hover:text-white hover:border-white transition-all">Nouvelle demande</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <div className="p-3 bg-red-900/20 border border-red-500/50 text-red-200 text-[10px] text-center italic">{error}</div>}
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">Nom & Prénom</label>
                      <input 
                        type="text" required 
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all outline-none text-sm font-light"
                        value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">Média / Organisme</label>
                      <input 
                        type="text" required 
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all outline-none text-sm font-light"
                        value={formData.media} onChange={e => setFormData({...formData, media: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">Email Professionnel</label>
                      <input 
                        type="email" required 
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all outline-none text-sm font-light"
                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">Téléphone</label>
                      <input 
                        type="tel" required 
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all outline-none text-sm font-light"
                        value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-white/30 mb-2 font-bold">Message / Précisions (Optionnel)</label>
                      <textarea 
                        rows={2}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-luxuryGold transition-all outline-none text-sm font-light resize-none"
                        value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" disabled={isLoading}
                    className="w-full py-4 bg-luxuryGold text-luxuryBlack font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all hover:brightness-110 disabled:opacity-50 mt-4"
                  >
                    {isLoading ? "Envoi..." : "Envoyer ma demande"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
