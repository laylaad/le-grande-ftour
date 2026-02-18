const SHEETMONKEY_URL = "https://api.sheetmonkey.io/form/on2PJggAGsNcThhrJtkmkd";

// Fix: Removed the PagesFunction type annotation which was causing a build error as it is not globally defined.
// Using 'any' for the context parameter to maintain the correct function signature for Cloudflare Pages.
export const onRequestPost = async (context: any) => {
  try {
    const body: any = await context.request.json();
    const { name, email, company, position } = body;

    const sheetResponse = await fetch(SHEETMONKEY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Nom": name || "Non spécifié",
        "Email": email || "Non spécifié",
        "Entreprise": company || "Non spécifié",
        "Poste": position || "Non spécifié",
        "Date": new Date().toLocaleString('fr-FR'),
        "Source": "Cloudflare Pages"
      }),
    });

    if (sheetResponse.ok) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: false, error: "Erreur de base de données" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}