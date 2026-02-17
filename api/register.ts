
import { Resend } from 'resend';

const SHEETMONKEY_URL = "https://api.sheetmonkey.io/form/on2PJggAGsNcThhrJtkmkd";

export default async function handler(req: any, res: any) {
  // 1. Autoriser CORS et vérifier la méthode
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  // 2. Récupérer les données (Gestion du cas où req.body est une chaîne)
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ success: false, error: 'Format JSON invalide' });
    }
  }
  
  const { name, email, company, position } = body;

  try {
    // 3. Étape CRITIQUE : Sauvegarde sur SheetMonkey
    // On le fait en premier pour ne pas perdre le contact même si l'email bugge
    let sheetSuccess = false;
    let sheetErrorMessage = "";
    
    try {
      const sheetResponse = await fetch(SHEETMONKEY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "Nom": name || "Inconnu",
          "Email": email || "Inconnu",
          "Entreprise": company || "Inconnu",
          "Poste": position || "Inconnu",
          "Date": new Date().toLocaleString('fr-FR'),
          "Source": "Site Web Officiel"
        }),
      });
      sheetSuccess = sheetResponse.ok;
      if (!sheetResponse.ok) sheetErrorMessage = await sheetResponse.text();
    } catch (e: any) {
      console.error("Erreur SheetMonkey:", e);
      sheetErrorMessage = e.message;
    }

    // 4. Étape OPTIONNELLE : Envoi de l'email via Resend
    let emailSent = false;
    let emailError = null;

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        // Note: Resend onboarding@resend.dev n'envoie QUE vers l'email du compte.
        // On tente quand même, mais on ne bloque pas si ça échoue.
        await resend.emails.send({
          from: 'Le Grand Ftour <onboarding@resend.dev>',
          to: email,
          subject: 'Confirmation d\'inscription - Le Grand Ftour 2026',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #D4AF37; padding: 40px; color: #0A0A0A;">
              <h1 style="color: #D4AF37; text-align: center; font-family: serif;">Le Grand Ftour 2026</h1>
              <p>Bonjour <strong>${name}</strong>,</p>
              <p>Nous avons bien reçu votre demande pour l'événement à <strong>Agadir en Mars 2026</strong>.</p>
              <p>Notre service protocole examinera votre demande prochainement.</p>
              <br>
              <p style="text-align: center; color: #A0A0A0; font-size: 12px;">Produit par l'agence Affairino</p>
            </div>
          `,
        });
        emailSent = true;
      } catch (e: any) {
        console.error("Erreur Resend:", e);
        emailError = e.message;
      }
    }

    // 5. Réponse finale : Si SheetMonkey a réussi, c'est un succès pour l'utilisateur
    if (sheetSuccess) {
      return res.status(200).json({ 
        success: true, 
        message: 'Inscription enregistrée.',
        debug: { emailSent, emailError }
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        error: `Erreur de sauvegarde: ${sheetErrorMessage}` 
      });
    }

  } catch (globalError: any) {
    console.error("Erreur Serveur:", globalError);
    return res.status(500).json({ 
      success: false, 
      error: globalError.message || "Erreur interne du serveur" 
    });
  }
}
