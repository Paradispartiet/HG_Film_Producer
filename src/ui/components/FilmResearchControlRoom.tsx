import { useMemo, useState, type ChangeEvent } from "react";

import { getClassicFilmScenarios } from "../data/filmScenarios";
import {
  createFilmResearchQueue,
  labelFilmResearchStatus,
  summarizeFilmResearch,
  type FilmResearchStatus,
} from "../data/filmResearchStatus";

const statusOptions: readonly { readonly id: FilmResearchStatus | "all"; readonly label: string }[] = [
  { id: "all", label: "All" },
  { id: "needs_research", label: "Needs research" },
  { id: "seeded", label: "Seeded" },
  { id: "verified", label: "Verified" },
];

export function FilmResearchControlRoom() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<FilmResearchStatus | "all">("all");
  const queue = useMemo(() => createFilmResearchQueue(getClassicFilmScenarios()), []);
  const summary = useMemo(() => summarizeFilmResearch(queue), [queue]);
  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return queue.filter((item) => {
      const matchesStatus = status === "all" || item.status === status;
      const searchableText = [item.title, item.year, ...item.directors].join(" ").toLocaleLowerCase();
      return matchesStatus && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [query, queue, status]);

  return (
    <>
      <button className="research-control-trigger" onClick={() => setOpen(true)} type="button">
        <span>Editorial system</span>
        <strong>Research control</strong>
      </button>

      {open && (
        <div className="research-control-backdrop" onMouseDown={() => setOpen(false)} role="presentation">
          <section aria-label="Film research control room" aria-modal="true" className="research-control-panel" onMouseDown={(event) => event.stopPropagation()} role="dialog">
            <header className="research-control-header">
              <div>
                <span>Filmverket editorial control</span>
                <h2>Research control room</h2>
                <p>Keep verified film knowledge separate from provisional seeds and unfinished research.</p>
              </div>
              <button aria-label="Close research control room" onClick={() => setOpen(false)} type="button">×</button>
            </header>

            <section className="research-summary-grid" aria-label="Research status summary">
              <article><small>Total catalogue</small><strong>{summary.total}</strong><span>films</span></article>
              <article><small>Verified</small><strong>{summary.verified}</strong><span>{summary.completionPercent}% complete</span></article>
              <article><small>Seeded</small><strong>{summary.seeded}</strong><span>provisional</span></article>
              <article><small>Needs research</small><strong>{summary.needsResearch}</strong><span>priority queue</span></article>
            </section>

            <div className="research-progress" aria-label={`${summary.completionPercent}% verified`}>
              <span style={{ width: `${summary.completionPercent}%` }} />
            </div>

            <div className="research-control-tools">
              <label>
                <span>Search film, year, or director</span>
                <input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Example: 1970, Bergman, Bicycle…" type="search" value={query} />
              </label>
              <div aria-label="Filter research status" className="research-status-filters">
                {statusOptions.map((option) => (
                  <button className={status === option.id ? "research-status-button research-status-button--active" : "research-status-button"} key={option.id} onClick={() => setStatus(option.id)} type="button">
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="research-queue-summary"><strong>{visibleItems.length}</strong> films shown · unfinished work appears first</div>

            <div className="research-queue">
              {visibleItems.map((item, index) => (
                <article className={`research-queue-row research-queue-row--${item.status}`} key={item.scenarioId}>
                  <span className="research-queue-number">{String(index + 1).padStart(3, "0")}</span>
                  <div className="research-film-identity">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.directors.join(", ") || "Director not registered"}</p>
                  </div>
                  <div className="research-film-density">
                    <span><strong>{item.craftStatementCount}</strong> craft statements</span>
                    <span><strong>{item.learningGoalCount}</strong> learning goals</span>
                  </div>
                  <strong className="research-status-label">{labelFilmResearchStatus(item.status)}</strong>
                </article>
              ))}
              {visibleItems.length === 0 && <p className="research-empty">No films match this research filter.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
