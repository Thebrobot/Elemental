import { useCallback, useRef } from "react";

export type CarouselQuote = {
  quote: string;
  fig: string;
  tag?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = { quotes: CarouselQuote[] };

const PER_PAGE = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function initialsFromFig(fig: string): string {
  return (
    fig
      .split(/\s+/)
      .map((w) => w.replace(/[^A-Za-z]/g, ""))
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() ?? "")
      .join("") || "?"
  );
}

export default function TestimonialCarousel({ quotes }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pages = chunk(quotes, PER_PAGE);

  const scrollPage = useCallback((dir: -1 | 1) => {
    const el = viewportRef.current;
    if (!el) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    el.scrollBy({ left: dir * el.clientWidth, behavior });
  }, []);

  if (quotes.length === 0) return null;

  return (
    <div className="testimonial-strip" role="region" aria-label="Patient testimonials">
      {pages.length > 1 ? (
        <div className="testimonial-strip__controls">
          <button type="button" className="testimonial-strip__btn" onClick={() => scrollPage(-1)} aria-label="Previous group of testimonials">
            ‹
          </button>
          <button type="button" className="testimonial-strip__btn" onClick={() => scrollPage(1)} aria-label="Next group of testimonials">
            ›
          </button>
        </div>
      ) : null}
      <div ref={viewportRef} className="testimonial-strip__viewport" tabIndex={0}>
        {pages.map((page, pageIndex) => (
          <div key={pageIndex} className="testimonial-strip__page">
            {page.map((t, i) => (
              <figure key={`${pageIndex}-${i}`} className="testimonial-strip__card">
                <div className="testimonial-strip__top">
                  {t.imageSrc ? (
                    <img
                      className="testimonial-strip__avatar"
                      src={t.imageSrc}
                      alt={t.imageAlt ?? ""}
                      width={80}
                      height={80}
                    />
                  ) : (
                    <span className="testimonial-strip__avatar testimonial-strip__avatar--initials" aria-hidden="true">
                      {initialsFromFig(t.fig)}
                    </span>
                  )}
                  <div className="testimonial-strip__body">
                    <blockquote>“{t.quote}”</blockquote>
                    <figcaption>- {t.fig}</figcaption>
                    {t.tag ? <p className="testimonial-strip__tag">{t.tag}</p> : null}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
