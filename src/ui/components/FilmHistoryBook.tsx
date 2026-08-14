import { useMemo, useState } from "react";

import {
  filmHistoryBookChapters,
  filmHistoryBookParts,
  getFilmHistoryBookChapter,
} from "../../core/filmHistoryBook";
import type { FilmScenarioSeed } from "../data/filmScenarios";

export function FilmHistoryBook({
  onOpenFilm,
  scenarios,
}: {
  readonly onOpenFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
}) {
  const [activeChapterId, setActiveChapterId] = useState("motion-before-cinema");
  const activeChapter = getFilmHistoryBookChapter(activeChapterId) ?? filmHistoryBookChapters[0];
  const fullChapterCount = filmHistoryBookChapters.filter((chapter) => chapter.status === "full").length;

  const filmLookup = useMemo(() => new Map(
    scenarios.map((scenario) => [`${scenario.film.title}::${scenario.film.year}`, scenario] as const),
  ), [scenarios]);
  const scenarioLookup = useMemo(() => new Map(scenarios.map((scenario) => [scenario.id, scenario] as const)), [scenarios]);

  if (!activeChapter) return null;

  const sourceLookup = new Map(activeChapter.sources.map((source) => [source.id, source] as const));

  return (
    <main className="filmverket-page film-history-book-page">
      <section className="film-history-book-hero">
        <div>
          <span className="filmverket-kicker">The Filmverket textbook</span>
          <h1>Film History</h1>
          <p>A global history of cinema as form, technology, industry, institution and culture. The book is built from a thirty-chapter canonical structure and connects historical argument directly to films in Film Atlas.</p>
        </div>
        <aside>
          <span><strong>6</strong> parts</span>
          <span><strong>30</strong> chapters</span>
          <span><strong>{fullChapterCount}</strong> full chapter</span>
          <span><strong>{scenarios.length}</strong> Atlas films</span>
        </aside>
      </section>

      <section className="film-history-book-layout">
        <nav className="film-history-book-toc" aria-label="Film History chapters">
          <div className="film-history-book-toc-heading">
            <span className="filmverket-card-kicker">Contents</span>
            <strong>Film History</strong>
          </div>
          {filmHistoryBookParts.map((part) => (
            <section className="film-history-book-part" key={part.id}>
              <header>
                <span>Part {part.number}</span>
                <strong>{part.title}</strong>
                <small>{part.period}</small>
              </header>
              <div>
                {part.chapters.map((chapter) => (
                  <button
                    className={chapter.id === activeChapter.id ? "film-history-book-chapter-link film-history-book-chapter-link--active" : "film-history-book-chapter-link"}
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    type="button"
                  >
                    <span>{String(chapter.number).padStart(2, "0")}</span>
                    <strong>{chapter.title}</strong>
                    <small>{chapter.status === "full" ? "Full chapter" : "Canonical outline"}</small>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </nav>

        <article className="film-history-book-reader">
          <header className="film-history-book-chapter-hero">
            <span className="film-history-book-chapter-number">Chapter {String(activeChapter.number).padStart(2, "0")}</span>
            <div>
              <span className="filmverket-kicker">{activeChapter.period}</span>
              <h2>{activeChapter.title}</h2>
              <p>{activeChapter.summary}</p>
            </div>
            <strong className={activeChapter.status === "full" ? "film-history-book-status film-history-book-status--full" : "film-history-book-status"}>
              {activeChapter.status === "full" ? "Full chapter" : "Canonical outline"}
            </strong>
          </header>

          <section className="film-history-learning-objectives">
            <div><span className="filmverket-card-kicker">Learning objectives</span><h3>After this chapter</h3></div>
            <ol>{activeChapter.learningObjectives.map((objective) => <li key={objective}>{objective}</li>)}</ol>
          </section>

          {activeChapter.status === "full" ? (
            <>
              <div className="film-history-book-prose">
                {activeChapter.sections.map((section) => (
                  <section id={`history-${section.id}`} key={section.id}>
                    <h3>{section.title}</h3>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <small>
                      Sources:{" "}
                      {section.sourceIds.map((sourceId, index) => {
                        const source = sourceLookup.get(sourceId);
                        if (!source) return null;
                        return (
                          <span key={sourceId}>
                            {index > 0 ? " · " : ""}
                            <a href={source.url} rel="noreferrer" target="_blank">{source.publisher}</a>
                          </span>
                        );
                      })}
                    </small>
                  </section>
                ))}
              </div>

              {activeChapter.filmReferences.length > 0 && (
                <section className="film-history-atlas-links">
                  <div><span className="filmverket-card-kicker">Film Atlas audit</span><h3>Study the films — and see which Production Cases are still missing</h3></div>
                  <div>
                    {activeChapter.filmReferences.map((reference) => {
                      const scenario = reference.atlasScenarioId
                        ? scenarioLookup.get(reference.atlasScenarioId)
                        : filmLookup.get(`${reference.title}::${reference.year}`);
                      const roleLabel = reference.role === "anchor_film" ? "Anchor Film" : reference.role === "comparative_film" ? "Comparative Film" : "Historical Object";
                      const atlasLabel = reference.atlasDecision === "use_existing_atlas_case" ? "Existing Atlas case" : `${reference.atlasDecision} Atlas gap`;
                      return (
                        <article key={`${reference.title}-${reference.year}`}>
                          <span>{reference.year} · {roleLabel} · {atlasLabel}</span>
                          <strong>{reference.title}</strong>
                          <p>{reference.note}</p>
                          {scenario ? <button onClick={() => onOpenFilm(scenario)} type="button">Open Film Atlas analysis →</button> : <small>No standalone Production Case is linked yet.</small>}
                        </article>
                      );
                    })}
                  </div>
                </section>
              )}

              {activeChapter.historicalObjects.length > 0 && (
                <section className="film-history-key-terms">
                  <div><span className="filmverket-card-kicker">Historical objects</span><h3>Essential context, deliberately not Production Cases</h3></div>
                  <div>{activeChapter.historicalObjects.map((item) => <span key={item.label}>{item.label}</span>)}</div>
                </section>
              )}

              <section className="film-history-key-terms">
                <div><span className="filmverket-card-kicker">Key terms</span><h3>Vocabulary</h3></div>
                <div>{activeChapter.keyTerms.map((term) => <span key={term}>{term}</span>)}</div>
              </section>

              <section className="film-history-sources">
                <div><span className="filmverket-card-kicker">Research basis</span><h3>Sources for this chapter</h3></div>
                <ol>{activeChapter.sources.map((source) => <li key={source.id}><a href={source.url} rel="noreferrer" target="_blank"><strong>{source.title}</strong><span>{source.publisher}</span></a></li>)}</ol>
              </section>
            </>
          ) : (
            <section className="film-history-outline-note">
              <span className="filmverket-card-kicker">Editorial status</span>
              <h3>This chapter is structurally locked, not yet written as full textbook prose.</h3>
              <p>The scope, period, learning objectives and vocabulary are canonical. Full prose, film cases and source apparatus will be materialized chapter by chapter so Film History never presents an outline as finished scholarship.</p>
              <div>{activeChapter.keyTerms.map((term) => <span key={term}>{term}</span>)}</div>
            </section>
          )}

          <nav className="film-history-chapter-navigation" aria-label="Previous and next Film History chapter">
            <ChapterStep
              chapter={filmHistoryBookChapters[activeChapter.number - 2]}
              direction="Previous"
              onOpen={setActiveChapterId}
            />
            <ChapterStep
              chapter={filmHistoryBookChapters[activeChapter.number]}
              direction="Next"
              onOpen={setActiveChapterId}
            />
          </nav>
        </article>
      </section>
    </main>
  );
}

function ChapterStep({
  chapter,
  direction,
  onOpen,
}: {
  readonly chapter: (typeof filmHistoryBookChapters)[number] | undefined;
  readonly direction: "Previous" | "Next";
  readonly onOpen: (chapterId: string) => void;
}) {
  if (!chapter) return <span />;
  return (
    <button onClick={() => onOpen(chapter.id)} type="button">
      <small>{direction}</small>
      <strong>{String(chapter.number).padStart(2, "0")} · {chapter.title}</strong>
    </button>
  );
}
