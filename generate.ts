import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { prompt } = req.body;

  try {
    // Simuleer AI afbeelding genereren (vervang dit met echte OpenAI API aanroep)
    const imageUrl = `https://via.placeholder.com/400?text=${encodeURIComponent(
      prompt
    )}`;

    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: "Fout bij genereren afbeelding." });
  }
}