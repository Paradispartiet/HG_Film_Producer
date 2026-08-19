import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const losOlvidadosProductionCaseVerification = {
  scenarioId: "scenario_los_olvidados_1950",
  status: "verified",
  verifiedAt: "2026-08-19",
  summary: "UNESCO, Filmoteca UNAM, Instituto Cervantes, the Film Foundation and Festival de Cannes support Los olvidados as a 1950 Mexican postwar production built from long social research, Estudios Tepeyac and Mexico City location work, professional craft, surrealist rupture and consequential version history. UNESCO records that Luis Buñuel spent two years researching and writing the project and persuading producer Óscar Dancigers to permit its stylistic and ideological direction; it also records Dancigers' concern about censorship and conservative rejection and the secretly filmed alternate ending that softened the tragedy. Filmoteca UNAM identifies Estudios Tepeyac and Mexico City locations. Instituto Cervantes identifies Ultramar Films; Buñuel directing; Luis Buñuel and Luis Alcoriza writing; Óscar Dancigers and Jaime Menasce in production; Gabriel Figueroa as director of photography; Ignacio Romero as camera operator; Edward Fitzgerald for scenography; Armando Meyer for makeup; Carlos Savage as editor with Buñuel also recorded as an uncredited editing participant; José B. Carles and Jesús González Gancy for sound; and Rodolfo Halffter's music using themes by Gustavo Pittaluga. The Film Foundation supports the 80-minute black-and-white form and documents restoration from preserved camera and soundtrack negatives, while institutional listings elsewhere preserve 81- and 88-minute variants that the case treats as provenance rather than contradiction. Cannes records the film in the 1951 competition and Buñuel's directing prize. The case does not invent camera bodies, lenses, film stock, lighting ratios, microphone models, sound-post workflow, exact shooting dates, exact scene-by-scene location assignments or a universal claim that every child performer was nonprofessional.",
  sources: [
    {
      title: "Original negative of Luis Buñuel's Los olvidados (1950)",
      publisher: "UNESCO Memory of the World",
      url: "https://www.unesco.org/en/memory-world/lac/original-negative-luis-bunuels-los-olvidados-1950",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "UNESCO documents the two-year research/writing period, Buñuel's negotiation with Óscar Dancigers over stylistic and ideological freedom, Dancigers' censorship/conservative-reaction fears, the secretly filmed alternate ending, survival of the original negative and Memory of the World recognition."
    },
    {
      title: "Tercer Ciclo Restaurados por el valor y la memoria audiovisual",
      publisher: "Filmoteca UNAM",
      url: "https://www.filmoteca.unam.mx/tercer-ciclo-restaurados-por-el-valor-y-la-memoria-audiovisual/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Filmoteca UNAM identifies Los olvidados as filmed at Estudios Tepeyac and on Mexico City locations and lists an 81-minute form, grounding the case's location-studio hybridity and one runtime variant."
    },
    {
      title: "Modernización en la gran ciudad. Los olvidados (Luis Buñuel, 1950)",
      publisher: "Instituto Cervantes / Centro Virtual Cervantes",
      url: "https://cvc.cervantes.es/artes/cine/mexico_ilustrado/olvidados.htm",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Centro Virtual Cervantes supplies the detailed production credits, including Ultramar Films, Buñuel/Alcoriza, Dancigers/Menasce, Figueroa, Romero, Fitzgerald, Meyer, Savage with Buñuel's uncredited editing participation, Carles/González Gancy, Halffter/Pittaluga, monaural sound and an 80-minute runtime."
    },
    {
      title: "Los Olvidados",
      publisher: "The Film Foundation / World Cinema Project",
      url: "https://www.film-foundation.org/world-cinema?page=4&sortBy=title&sortOrder=1",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "The Film Foundation records the 1950 Mexican 80-minute black-and-white film, credits Savage, Figueroa, Dancigers/Kogan/Menasce and Halffter, and documents the later 4K restoration from camera and soundtrack nitrate negatives preserved at Filmoteca UNAM."
    },
    {
      title: "LOS OLVIDADOS — 1951 Competition",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/los-olvidados-3/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Festival de Cannes records Los olvidados in the 1951 competition, credits Buñuel, Alcoriza and Figueroa, and records Luis Buñuel's Award for Best Director, preserving international reception as a downstream layer rather than a production cause."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
