import { SITE } from "@/lib/constants";
import { getPlanityRating } from "@/lib/getPlanityRating";
import { getPlanityReviews } from "@/lib/getPlanityReviews";

export default async function Reviews() {
  const [rating, reviews] = await Promise.all([
    getPlanityRating(),
    getPlanityReviews(),
  ]);

  return (
    <section className="py-20 lg:py-24 bg-beige dark:bg-night-surface transition-colors duration-300">
      <div className="max-w-container mx-auto px-6 md:px-2 lg:px-0">

        <div className="text-center mb-6">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-brown dark:text-night-accent mb-4">
            Ce qu&apos;elles disent
          </p>
          <h2 className="font-serif font-light text-dark dark:text-night-text text-3xl md:text-4xl lg:text-5xl">
            {rating.count} clientes satisfaites
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="font-serif font-light text-dark dark:text-night-text text-6xl leading-none">
            {rating.score}
          </span>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brown dark:text-night-accent text-xl">★</span>
              ))}
            </div>
            <p className="font-sans text-xs text-muted dark:text-night-text2">
              sur {rating.count} avis Planity
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {reviews.map((review, i) => (
            <div key={i}
              className="bg-cream dark:bg-night-bg
                border border-border dark:border-night-border
                rounded-2xl p-7 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-brown dark:text-night-accent text-sm">★</span>
                  ))}
                </div>
                <span className="font-sans text-xs text-muted dark:text-night-text2">{review.date}</span>
              </div>
              <p className="font-serif font-light italic text-dark dark:text-night-text text-lg leading-relaxed mb-5">
                « {review.text} »
              </p>
              {review.reply && (
                <div className="mt-4 p-3 rounded-lg bg-beige dark:bg-night-surface border border-border dark:border-night-border">
                  <p className="font-sans text-xs text-muted dark:text-night-text2">
                    <span className="font-medium text-brown dark:text-night-accent">Réponse de Lymera</span>
                    <br />{review.reply}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={SITE.planityUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Voir tous les avis →
          </a>
        </div>
      </div>
    </section>
  );
}