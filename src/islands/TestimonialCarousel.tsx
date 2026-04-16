import { useCallback, useState } from "react";

export type CarouselQuote = {
  quote: string;
  fig: string;
  tag?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = { quotes: CarouselQuote[] };

export default function TestimonialCarousel({ quotes }: Props) {
  const [i, setI] = useState(0);
  const n = quotes.length;
  const prev = useCallback(() => setI((x) => (x - 1 + n) % n), [n]);
  const next = useCallback(() => setI((x) => (x + 1) % n), [n]);

  if (n === 0) return null;

  const t = quotes[i]!;

  const initials = t.fig
    .split(/\s+/)
    .map((w) => w.replace(/[^A-Za-z]/g, ""))
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "?";

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__controls">
        <button type="button" className="testimonial-carousel__btn" onClick={prev} aria-label="Previous testimonial">
          ‹
        </button>
        <button type="button" className="testimonial-carousel__btn" onClick={next} aria-label="Next testimonial">
          ›
        </button>
      </div>
      <figure className="testimonial-carousel__slide" aria-live="polite">
        <div className="testimonial-carousel__top">
          {t.imageSrc ? (
            <img className="testimonial-carousel__avatar" src={t.imageSrc} alt={t.imageAlt ?? ""} width={80} height={80} />
          ) : (
            <span className="testimonial-carousel__avatar testimonial-carousel__avatar--initials" aria-hidden="true">
              {initials}
            </span>
          )}
          <div>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>- {t.fig}</figcaption>
            {t.tag ? <p className="testimonial-carousel__tag">{t.tag}</p> : null}
          </div>
        </div>
      </figure>
    </div>
  );
}
