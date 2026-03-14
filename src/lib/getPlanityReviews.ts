export type PlanityReview = {
  text: string;
  date: string;
  rating: number;
  reply?: string;
};

export async function getPlanityReviews(): Promise<PlanityReview[]> {

    // 🚧 DEV MODE — retourne le fallback directement 
    // (Eviter de ton envoyer de requet en scrapping (Pour els avis planity) en mode Dev et  
    // on mode production pas de souci car c'est juste en mode dev)
    if (process.env.NODE_ENV === "development") {
        return FALLBACK_REVIEWS;
    }

  try {
    const url = new URL("https://app.scrapingbee.com/api/v1/");
    url.searchParams.set("api_key", process.env.SCRAPINGBEE_API_KEY!);
    url.searchParams.set("url", "https://www.planity.com/lymera-34830-jacou");
    url.searchParams.set("render_js", "true");
    url.searchParams.set("wait_for", ".business_reviews_card_reviews-blopa");
    url.searchParams.set("wait", "3000");

    const res = await fetch(url.toString(), {
      // next: { revalidate: 86400 }, // 24h
      next: { revalidate: 604800 }, // 7 jours
    });

    const html = await res.text();

    // Extraire les blocs d'avis
    const reviewBlocks = html.match(
      /class="business_review-module_review-[^"]+undefined"[^>]*>([\s\S]*?)(?=class="business_review-module_review-[^"]+undefined"|<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/g
    );

    if (!reviewBlocks?.length) return FALLBACK_REVIEWS;

    const reviews: PlanityReview[] = reviewBlocks.slice(0, 3).map((block) => {
      // Note
      const ratingMatch = block.match(/(\d+)[.,]0\s*★/);
      const rating = ratingMatch ? parseInt(ratingMatch[1]) : 5;

      // Texte
      // Texte — span direct après la div note
       const textMatch = block.match(/class="business_review-module_note-[^"]*"[^>]*>[\s\S]*?<\/div>\s*<span[^>]*>([\s\S]*?)<\/span>/);
       const text = textMatch ? textMatch[1].replace(/<[^>]+>/g, "").trim() : "";

      // Date
      const dateMatch = block.match(/class="business_review-module_date-[^"]*"[^>]*>([\s\S]*?)<\/span>/);
      const date = dateMatch ? dateMatch[1].trim() : "";

      // Réponse Lymera
       const replyMatch = block.match(/class="business_review-module_replyMsg-[^"]*"[^>]*>([\s\S]*?)<\/span>/);
       const reply = replyMatch ? replyMatch[1].replace(/<[^>]+>/g, "").trim() : undefined;

      return { text, date, rating, reply };
    }).filter((r) => r.text.length > 0);

    return reviews.length > 0 ? reviews : FALLBACK_REVIEWS;

  } catch {
    return FALLBACK_REVIEWS;
  }
}

// Fallback si le scraping échoue
const FALLBACK_REVIEWS: PlanityReview[] = [
  { text: "Super expérience ! Farah est très professionnelle et à l'écoute. Je recommande vivement.", date: "17/02/2026", rating: 5 },
  { text: "Très bonne expérience pour les séances de laser. L'équipe est professionnelle et à l'écoute.", date: "10/02/2026", rating: 5 },
  { text: "Expérience super génial. Salon au top, prestation impeccable. Un énorme merci à Farah et Nassima.", date: "09/02/2026", rating: 5 },
];