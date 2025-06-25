import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { imageUrl } = req.body;

  try {
    // Hier moet je de Gelato API call maken om de kaart te bestellen.
    // Voor nu simuleren we een succesvolle bestelling:
    console.log("Bestelling ontvangen voor kaart:", imageUrl);

    res.status(200).json({ message: "Bestelling succesvol geplaatst" });
  } catch (error) {
    res.status(500).json({ error: "Fout bij bestelling plaatsen." });
  }
}