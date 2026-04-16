import { useState } from "react";

export type FaqCategory = {
  id: string;
  label: string;
  items: { q: string; a: string }[];
};

type Props = { categories: FaqCategory[] };

export default function HomeFaq({ categories }: Props) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const current = categories.find((c) => c.id === active) ?? categories[0];

  if (!current) return null;

  return (
    <div className="home-faq">
      <div className="home-faq__chips" role="tablist" aria-label="FAQ topics">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={active === c.id}
            className={active === c.id ? "home-faq__chip home-faq__chip--active" : "home-faq__chip"}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="home-faq__panel" role="tabpanel">
        {current.items.map((item, idx) => (
          <details key={idx} className="home-faq__item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
