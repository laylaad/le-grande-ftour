import { Resend } from 'resend';

const SHEETMONKEY_URL = "https://api.sheetmonkey.io/form/on2PJggAGsNcThhrJtkmkd";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) {
      return res.status(400).json({ success: false, error: 'Format JSON invalide' });
    }
  }
  
  const { name, email, company, position } = body;

  try {
    let sheetSuccess = false;
    let sheetErrorMessage = "";
    
    // Récupérer l'origin de la requête entrante pour la passer à SheetMonkey
    const originHeader = req.headers.origin || req.headers.referer || "https://legrandftour.com";

    try {
      const sheetResponse = await fetch(SHEETMONKEY_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Origin': originHeader, // CRITIQUE : Ajout de l'Origin pour SheetMonkey
          'Referer': originHeader
        },
        body: JSON.stringify({
          "Nom": name || "Inconnu",
          "Email": email || "Inconnu",
          "Entreprise": company || "Inconnu",
          "Poste": position || "Inconnu",
          "Date": new Date().toLocaleString('fr-FR'),
          "Source": "Site Web Vercel"
        }),
      });
      sheetSuccess = sheetResponse.ok;
      if (!sheetResponse.ok) {
        const textError = await sheetResponse.text();
        sheetErrorMessage = textError.includes('<!DOCTYPE') ? "Erreur de configuration SheetMonkey (En-tête Origin manquant)" : textError;
      }
    } catch (e: any) {
      sheetErrorMessage = e.message;
    }

    if (sheetSuccess) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: sheetErrorMessage });
    }
  } catch (globalError: any) {
    return res.status(500).json({ success: false, error: globalError.message });
  }
}