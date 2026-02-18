const SHEETMONKEY_URL = "https://api.sheetmonkey.io/form/on2PJggAGsNcThhrJtkmkd";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position } = req.body;
    const originHeader = req.headers.origin || req.headers.referer || "https://legrandftour.com";

    const sheetResponse = await fetch(SHEETMONKEY_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Origin': originHeader
      },
      body: JSON.stringify({
        "Nom": name || "Inconnu",
        "Email": email || "Inconnu",
        "Entreprise": company || "Inconnu",
        "Poste": position || "Inconnu",
        "Date": new Date().toLocaleString('fr-FR'),
        "Source": "Vercel Build Fix"
      }),
    });

    if (sheetResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorText = await sheetResponse.text();
      return res.status(500).json({ success: false, error: errorText });
    }
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}