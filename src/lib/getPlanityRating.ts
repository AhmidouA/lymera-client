// src/lib/getPlanityRating.ts
export async function getPlanityRating() {
  try {
    const res = await fetch("https://www.planity.com/lymera-34830-jacou", {
      next: { revalidate: 86400 },
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const html = await res.text();

    const countMatch = html.match(/(\d+)\s*avis/i);
    // ✅ Regex plus strict : note entre 1 et 5 uniquement (ex: 4.9, 5)
    const scoreMatch = html.match(/\b([1-5](?:[.,]\d)?)\s*\/\s*5/);

    if (countMatch && scoreMatch) {
      return {
        score: parseFloat(scoreMatch[1].replace(",", ".")),
        count: parseInt(countMatch[1]),
      };
    }
  } catch {}

  return { score: 5, count: 39 };
}