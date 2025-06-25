import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateCard() {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImageUrl(data.imageUrl);
    setLoading(false);
  }

  async function orderCard() {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl }),
    });
    if (res.ok) alert("Kaart besteld!");
    else alert("Bestelling mislukt.");
  }

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Maak je eigen kaart met AI</h1>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Typ hier wat voor kaart je wilt"
        className="max-w-md border p-2 rounded"
      />
      <button onClick={generateCard} disabled={loading} className="btn">
        {loading ? "Even wachten..." : "Genereer design"}
      </button>
      {imageUrl && (
        <div className="flex flex-col items-center gap-2">
          <Image src={imageUrl} alt="kaart ontwerp" width={400} height={400} />
          <button onClick={orderCard} className="btn">
            Bestel deze kaart
          </button>
        </div>
      )}
    </main>
  );
}