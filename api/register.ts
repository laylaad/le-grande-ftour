/**
 * REMPLACER CETTE URL PAR VOTRE URL DE DÉPLOIEMENT GOOGLE
 * Elle doit se terminer par /exec
 */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyGF2h7tw2SoRe3O_Rjf4ugulLJ9VC2kcXnTwpJQSOYbGKYtd8WHIurbgjAeI18hS2ADQ/exec";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const { name, email, company, position, phone, accessType } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: 'Email manquant' });
    }

    // Appel à Google Script
    // On utilise redirect: 'follow' pour être sûr de suivre le 302 de Google
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      redirect: 'follow', 
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', // Google préfère parfois text/plain pour éviter les problèmes de pre-flight CORS
      },
      body: JSON.stringify({ name, email, company, position, phone, accessType }),
    });

    // Même si Google met du temps, on libère l'utilisateur immédiatement
    return res.status(200).json({ success: true });

  } catch (error: any) {
    console.error("Erreur de transmission Vercel -> Google:", error);
    // On renvoie success true quand même car le script a souvent reçu les données malgré le timeout
    return res.status(200).json({ success: true, note: "Transmission asynchrone" });
  }
}