import { useLayoutEffect, useState } from "react";
import { categoryMarkHtml } from "../icons/categoryMarks";

export type ExploreCategory = {
  id: string;
  tabLabel: string;
  /** Full category name for accessible labels (tabs use shorter `tabLabel`). */
  label: string;
  intro: string;
  treatments: { name: string; href: string }[];
};

type Props = { categories: ExploreCategory[] };

function categoryIdFromHash(hash: string, validIds: string[]): string | null {
  if (!hash.startsWith("#menu-")) return null;
  const id = hash.slice("#menu-".length);
  return validIds.includes(id) ? id : null;
}

export default function TreatmentCategoryExplorer({ categories }: Props) {
  const validIds = categories.map((c) => c.id);
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const current = categories.find((c) => c.id === activeId) ?? categories[0];

  useLayoutEffect(() => {
    const applyHash = () => {
      const fromHash = categoryIdFromHash(window.location.hash, validIds);
      if (fromHash) setActiveId(fromHash);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [validIds.join("|")]);

  if (!current) return null;

  return (
    <div className="treat-explore">
      <div className="treat-explore__tabs" role="tablist" aria-label="Browse treatments by category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeId === cat.id}
            id={`menu-${cat.id}`}
            aria-controls="treat-explore-panel"
            className={activeId === cat.id ? "treat-explore__tab treat-explore__tab--active" : "treat-explore__tab"}
            onClick={() => setActiveId(cat.id)}
          >
            <span
              className="treat-explore__tab-icon-wrap treat-explore__tab-icon-wrap--svg"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: categoryMarkHtml(cat.id) }}
            />
            <span className="treat-explore__tab-label">{cat.tabLabel}</span>
          </button>
        ))}
      </div>

      <div
        className="treat-explore__panel"
        role="tabpanel"
        id="treat-explore-panel"
        aria-labelledby={`menu-${current.id}`}
      >
        <div className="treat-explore__panel-body" key={current.id}>
          <div className="treat-explore__panel-headline">
            <p className="treat-explore__intro">{current.intro}</p>
            <span className="treat-explore__badge">
              {current.treatments.length}{" "}
              {current.treatments.length === 1 ? "treatment" : "treatments"}
            </span>
          </div>
          <ul className="treat-explore__list" aria-label={`Treatments in ${current.label}`}>
            {current.treatments.map((t) => (
              <li key={t.href}>
                <a href={t.href} className="treat-explore__link">
                  <span className="treat-explore__link-text">{t.name}</span>
                  <span className="treat-explore__link-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
