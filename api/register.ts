
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SHEETMONKEY_URL = "https://api.sheetmonkey.io/form/on2PJggAGsNcThhrJtkmkd";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, company, position } = req.body;

  try {
    // 1. Envoi des données vers SheetMonkey (Sauvegarde CSV/Google Sheets)
    const sheetResponse = await fetch(SHEETMONKEY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "Nom": name,
        "Email": email,
        "Entreprise": company,
        "Poste": position,
        "Date": new Date().toLocaleString('fr-FR'),
        "Source": "Site Web Officiel"
      }),
    });

    if (!sheetResponse.ok) {
      console.error("Erreur SheetMonkey");
    }

    // 2. Envoi de l'email de confirmation via Resend
    // Remarque : Si vous n'avez pas de domaine vérifié, utilisez 'onboarding@resend.dev'
    await resend.emails.send({
      from: 'Le Grand Ftour <onboarding@resend.dev>',
      to: email,
      subject: 'Confirmation d\'inscription - Le Grand Ftour 2026',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #D4AF37; padding: 40px; color: #0A0A0A;">
          <h1 style="color: #D4AF37; text-align: center; font-family: serif;">Le Grand Ftour 2026</h1>
          <p>Bonjour <strong>${name}</strong>,</p>
          <p>Nous avons bien reçu votre demande de participation pour l'événement institutionnel <strong>Le Grand Ftour</strong> qui se tiendra à <strong>Agadir en Mars 2026</strong>.</p>
          <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #D4AF37; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Entreprise :</strong> ${company}</p>
            <p style="margin: 5px 0;"><strong>Fonction :</strong> ${position}</p>
          </div>
          <p>Notre service protocole examinera votre demande et reviendra vers vous avec votre invitation officielle sous peu.</p>
          <br>
          <p style="text-align: center; color: #A0A0A0; font-size: 12px;">Produit par l'agence Affairino • Agadir, Maroc</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Inscription réussie' });
  } catch (error) {
    console.error("Erreur Backend:", error);
    return res.status(500).json({ success: false, error: "Erreur lors de l'inscription" });
  }
}
