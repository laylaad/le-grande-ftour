// Votre URL Google Apps Script personnalisée
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxOhkXzWAWt8lcb_a9qAppFicd636x009FQ8gRMUHzHTy6vd9rnxtJmU9OAToW-lr6dEw/exec";

export default async function handler(req: any, res: any) {
  // Autoriser uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position } = req.body;

    // Validation rapide
    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Le nom et l\'email sont obligatoires.' });
    }

    // Envoi des données vers Google Apps Script
    // On utilise fetch car Vercel supporte fetch nativement en Node.js 18+
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        position,
        date: new Date().toLocaleString('fr-FR'),
        source: "Vercel Production"
      }),
    });

    // Google Apps Script répond avec un succès même s'il y a une redirection
    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: "Erreur lors de l'enregistrement." });
    }
  } catch (error: any) {
    console.error("Erreur API Register:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}