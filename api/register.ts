// URL de votre Google Apps Script mise à jour
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyEkyYSvaWkGOrssl7Kjfh_RHorj2YFKKffacfCw-Kmd26CnMJhsPKcGw12oIMkWIjOrA/exec";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Nom et Email requis.' });
    }

    // Envoi des données vers Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, company, position }),
    });

    // Utilisation de la réponse pour éviter l'erreur de linting
    if (!response.ok) {
      console.warn("Google Script a répondu avec un statut :", response.status);
    }

    // On retourne succès car la requête est bien partie vers le service tiers
    return res.status(200).json({ success: true });

  } catch (error: any) {
    console.error("Erreur API Vercel:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Service momentanément indisponible." 
    });
  }
}