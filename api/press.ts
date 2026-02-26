/**
 * URL DE DÉPLOIEMENT GOOGLE POUR LA PRESSE
 */
const GOOGLE_PRESS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfeIzV1-TspiKpQ-qPI74-D8Fs5J40ZHZ_EUs-eOjAj_W2XfCc9T64VoV0SQpf4MWX/exec"; // À REMPLIR PAR L'UTILISATEUR

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, media, position, phone, message } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: 'Email manquant' });
    }

    if (!GOOGLE_PRESS_SCRIPT_URL) {
      return res.status(500).json({ success: false, error: 'URL Google Script Presse non configurée' });
    }

    await fetch(GOOGLE_PRESS_SCRIPT_URL, {
      method: 'POST',
      redirect: 'follow', 
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({ name, email, media, position, phone, message }),
    });

    return res.status(200).json({ success: true });

  } catch (error: any) {
    console.error("Erreur Presse -> Google:", error);
    return res.status(200).json({ success: true, note: "Transmission asynchrone" });
  }
}
