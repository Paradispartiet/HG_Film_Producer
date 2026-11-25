import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import candidate from "../../../data/film/candidates/pulse-2001.json";
import type { SourceBackedCaseWorkshop, WorkshopQuestion } from "../data/scenarioProductionSourceWorkshops";
import { ScenarioProductionSourceWorkshop } from "./ScenarioProductionSourceWorkshop";

export const PULSE_CANDIDATE_SLUG = "candidate-pulse-2001";
export const pulseCandidateMatches = (title: string, year: number) =>
  year === 2001 && ["pulse", "kairo"].includes(title.trim().toLowerCase());

const labels = {
  en: { badge: "Editorial candidate", open: "Explore Pulse (2001) — candidate article and workshop", back: "Return to Film Atlas", history: "Open Film History", notice: "A study and interactive practice workshop, not a verified playable Production Case. The canonical catalogue, scoring and saved progress are unchanged.", article: "Individual film article (English)", profile: "Production profile (English)", sources: "Sources", intro: "Explore early internet culture, selective colour and period sound in this optional lesson." },
  nb: { badge: "Redaksjonell kandidat", open: "Utforsk Pulse (2001) – kandidatartikkel og verksted", back: "Tilbake til Film Atlas", history: "Åpne Film History", notice: "En filmstudie og et interaktivt øvingsverksted, ikke et kildegodkjent produksjonsscenario. Katalog, poeng og lagret framgang er uendret.", article: "Individuell filmartikkel (engelsk)", profile: "Produksjonsprofil (engelsk)", sources: "Kilder", intro: "Utforsk tidlig internettkultur, selektiv fargebruk og tidsriktige lyder i denne frivillige øvelsen." },
  fr: { badge: "Candidat éditorial", open: "Découvrir Pulse (2001) — article et atelier candidat", back: "Retour à Film Atlas", history: "Ouvrir Film History", notice: "Étude et atelier interactif, non un cas de production validé. Le catalogue, les scores et la progression restent inchangés.", article: "Article individuel (anglais)", profile: "Profil de production (anglais)", sources: "Sources", intro: "Explorez les débuts d'internet, les couleurs sélectives et les sons d'époque dans cet exercice facultatif." },
  pt: { badge: "Candidato editorial", open: "Explorar Pulse (2001) — artigo e oficina candidata", back: "Voltar ao Film Atlas", history: "Abrir Film History", notice: "Estudo e oficina interativa, não um caso de produção validado. O catálogo, a pontuação e o progresso guardado não mudam.", article: "Artigo individual (inglês)", profile: "Perfil de produção (inglês)", sources: "Fontes", intro: "Explore a internet inicial, a cor seletiva e os sons de época neste exercício facultativo." },
} satisfies Record<FilmWorkLanguage, Record<string, string>>;

export function pulseCandidateLinkLabel(language: FilmWorkLanguage) {
  return labels[language].open;
}

const questions: WorkshopQuestion[] = candidate.questions.map(q => {
  const [first, second, third] = q.options;
  if (!first || !second || !third || q.options.length !== 3) throw new Error("Invalid Pulse workshop options");
  const area = q.area;
  if (area !== "camera" && area !== "sound" && area !== "research" && area !== "animation") throw new Error("Invalid Pulse workshop area");
  return { ...q, area, options: [first, second, third] };
});
const candidateWorkshop: SourceBackedCaseWorkshop = {
  scenarioId: candidate.candidateId,
  status: "editorial_learning_exercise_not_case_verified",
  introduction: { en: labels.en.intro, nb: labels.nb.intro, fr: labels.fr.intro, pt: labels.pt.intro },
  sources: candidate.sources,
  questions,
};

export function PulseCandidatePage({ language, onBack, onHistory }: {
  readonly language: FilmWorkLanguage;
  readonly onBack: () => void;
  readonly onHistory: () => void;
}) {
  const ui = labels[language];
  return (
    <main className="filmverket-page atlas-page pulse-candidate-page">
      <section className="filmverket-page-heading">
        <div><span className="filmverket-kicker">{ui.badge}</span><h1>Pulse (2001) / Kairo</h1></div>
        <p>{ui.notice}</p>
      </section>
      <nav className="film-atlas-tabs">
        <button className="film-atlas-tab" type="button" onClick={onBack}>{ui.back}</button>
        <button className="film-atlas-tab" type="button" onClick={onHistory}>{ui.history}</button>
      </nav>
      <article className="film-analysis">
        <header><h2>{ui.article}</h2><p>Kiyoshi Kurosawa · Japan · 2001</p></header>
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
        <ScenarioProductionSourceWorkshop scenarioId={candidate.candidateId} language={language} workshopOverride={candidateWorkshop} />
        <details><summary>{ui.sources} ({candidate.sources.length})</summary><ul>{candidate.sources.map(s => <li key={s.id}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> — {s.publisher}</li>)}</ul></details>
      </article>
    </main>
  );
}
