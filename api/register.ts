// URL de votre Google Apps Script
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxOhkXzWAWt8lcb_a9qAppFicd636x009FQ8gRMUHzHTy6vd9rnxtJmU9OAToW-lr6dEw/exec";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Nom et Email requis.' });
    }

    // Appel au Google Apps Script avec mode: 'no-cors' pour éviter les blocages de redirection
    // Mais on utilise fetch standard pour Vercel côté serveur
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, company, position }),
    });

    // Si on arrive ici sans erreur d'exception, c'est que la requête est partie vers Google
    return res.status(200).json({ success: true });

  } catch (error: any) {
    console.error("Erreur API:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Service momentanément indisponible." 
    });
  }
}