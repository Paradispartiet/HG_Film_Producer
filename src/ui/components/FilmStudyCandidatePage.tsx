import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import { createCandidateWorkshop, type FilmStudyCandidate } from "../data/filmStudyCandidates";
import { ScenarioProductionSourceWorkshop } from "./ScenarioProductionSourceWorkshop";

const labels = {
  en: { badge: "Editorial candidate", open: "Explore", back: "Return to Film Atlas", history: "Open Film History", notice: "A study and interactive practice workshop, not a verified playable Production Case. The canonical catalogue, scoring and saved progress are unchanged. Historical claims and source links remain subject to independent editorial review.", article: "Individual film article (English)", profile: "Production profile (English)", sources: "Sources" },
  nb: { badge: "Redaksjonell kandidat", open: "Utforsk", back: "Tilbake til Film Atlas", history: "Åpne Film History", notice: "En filmstudie og et interaktivt øvingsverksted, ikke et kildegodkjent produksjonsscenario. Katalog, poeng og lagret framgang er uendret. Historiske påstander og kildehenvisninger avventer uavhengig redaksjonell kontroll.", article: "Individuell filmartikkel (engelsk)", profile: "Produksjonsprofil (engelsk)", sources: "Kilder" },
  fr: { badge: "Candidat éditorial", open: "Découvrir", back: "Retour à Film Atlas", history: "Ouvrir Film History", notice: "Étude et atelier interactif, non un cas de production validé. Le catalogue, les scores et la progression restent inchangés. Les affirmations historiques et les liens restent soumis à une révision éditoriale indépendante.", article: "Article individuel (anglais)", profile: "Profil de production (anglais)", sources: "Sources" },
  pt: { badge: "Candidato editorial", open: "Explorar", back: "Voltar ao Film Atlas", history: "Abrir Film History", notice: "Estudo e oficina interativa, não um caso de produção validado. O catálogo, a pontuação e o progresso guardado não mudam. As afirmações históricas e as fontes aguardam revisão editorial independente.", article: "Artigo individual (inglês)", profile: "Perfil de produção (inglês)", sources: "Fontes" },
} satisfies Record<FilmWorkLanguage, Record<string, string>>;

export function candidateLinkLabel(language: FilmWorkLanguage, candidate: FilmStudyCandidate) {
  return labels[language].open + " " + candidate.identity.title + " (" + candidate.identity.year + ") — " + labels[language].badge;
}

const phaseHeading: Record<FilmWorkLanguage, string> = { en: "Production phases — practice brief", nb: "Produksjonsfaser – øvingsoppdrag", fr: "Phases de production — exercice", pt: "Fases de produção — exercício" };

export function FilmStudyCandidatePage({ candidate, language, onBack, onHistory }: {
  readonly candidate: FilmStudyCandidate;
  readonly language: FilmWorkLanguage;
  readonly onBack: () => void;
  readonly onHistory: () => void;
}) {
  const ui = labels[language];
  const candidateWorkshop = createCandidateWorkshop(candidate);
  return (
    <main className="filmverket-page atlas-page film-study-candidate-page" data-candidate-id={candidate.candidateId}>
      <section className="filmverket-page-heading">
        <div><span className="filmverket-kicker">{ui.badge}</span><h1>{candidate.identity.title} ({candidate.identity.year}){candidate.identity.originalTitle !== candidate.identity.title ? " / " + candidate.identity.originalTitle : ""}</h1></div>
        <p>{ui.notice}</p>
      </section>
      <nav className="film-atlas-tabs">
        <button className="film-atlas-tab" type="button" onClick={onBack}>{ui.back}</button>
        <button className="film-atlas-tab" type="button" onClick={onHistory}>{ui.history}</button>
      </nav>
      <article className="film-analysis">
        <header><h2>{ui.article}</h2><p>{candidate.identity.directors.join(", ")} · {candidate.identity.country} · {candidate.identity.year}</p></header>
        <section lang="en">
          <h3>{candidate.article.title}</h3>
          {candidate.article.paragraphs.map((p, i) => (
            <div key={i}><p>{p.text}</p><ul>{p.sourceIds.map(id => {
              const source = candidate.sources.find(s => s.id === id);
              return source ? <li key={id}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></li> : null;
            })}</ul></div>
          ))}
          <h3>{ui.profile}</h3>
          <dl>{Object.entries(candidate.production).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
          <p>{candidate.identity.runtimeNote}</p>
        </section>
        <section className="candidate-production-phases">
          <h3>{phaseHeading[language]}</h3>
          <ol>{candidate.phases.map(phase => <li key={phase.id}><strong>{phase.title[language]}</strong><p>{phase.deliverable[language]}</p></li>)}</ol>
        </section>
        <ScenarioProductionSourceWorkshop key={candidate.candidateId} scenarioId={candidate.candidateId} language={language} workshopOverride={candidateWorkshop} />
        <details><summary>{ui.sources} ({candidate.sources.length})</summary><ul>{candidate.sources.map(s => <li key={s.id}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> — {s.publisher}</li>)}</ul></details>
      </article>
    </main>
  );
}
