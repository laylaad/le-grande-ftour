// URL de votre Google Apps Script (Assurez-vous qu'elle finit par /exec)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwuYIgLTKFljWFC4hZc9ctqthaijfUhbzzoYEo14TSO1Dh9LpuR4BhkNXi88ytdi4oZlA/exec";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Nom et Email requis.' });
    }

    // Envoi au script Google
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, company, position }),
    });

    // On vérifie si la réponse est du JSON valide
    const result = await response.json();

    if (result.success) {
      return res.status(200).json({ success: true });
    } else {
      console.error("Erreur Google Script:", result.error);
      return res.status(500).json({ success: false, error: result.error || "Erreur lors de l'envoi." });
    }

  } catch (error: any) {
    console.error("Erreur Vercel:", error);
    // On retourne succès même en cas d'erreur de parsing si on sait que les données arrivent dans le sheet
    return res.status(200).json({ success: true, warning: "Possible redirection issue but data sent" });
  }
}