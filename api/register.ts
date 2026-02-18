const SHEETMONKEY_URL = "https://api.sheetmonkey.io/form/on2PJggAGsNcThhrJtkmkd";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position } = req.body;
    
    // Fallback headers for security and logging
    const originHeader = req.headers?.origin || req.headers?.referer || "https://legrandftour.com";

    const sheetResponse = await fetch(SHEETMONKEY_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Origin': originHeader
      },
      body: JSON.stringify({
        "Nom": name || "Non spécifié",
        "Email": email || "Non spécifié",
        "Entreprise": company || "Non spécifié",
        "Poste": position || "Non spécifié",
        "Date": new Date().toLocaleString('fr-FR'),
        "Source": "Vercel Production"
      }),
    });

    if (sheetResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: "Erreur de transmission vers la base de données." });
    }
  } catch (error: any) {
    return res.status(500).json({ success: false, error: "Une erreur interne est survenue." });
  }
}