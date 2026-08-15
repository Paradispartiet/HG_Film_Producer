import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theLastLaughProductionCaseVerification = {
  scenarioId: "scenario_the_last_laugh_1924",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "filmportal, BFI and Deutsche Kinemathek support The Last Laugh / Der letzte Mann as F. W. Murnau's 1924 UFA production from Carl Mayer's screenplay, photographed by Karl Freund with Emil Jannings as the hotel porter and Robert Herlth/Walter Röhrig responsible for the sets. filmportal records the original as 2315 metres of 35 mm, 1.33:1 black-and-white silent film, credits Giuseppe Becce for premiere music and separates later digitized/version music. Its dedicated history of the 'unchained camera' documents Freund's unusually mobile, body/apparatus-assisted camera practice while explicitly warning that he was not the first ever to detach a camera from a tripod. The Production Case therefore teaches Kammerspielfilm, visual narration, UFA collaboration and motivated mobile-camera subjectivity without an invention myth, while keeping the ironic coda and later presentation versions historically distinct.",
  sources: [
    {
      title: "Der letzte Mann",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/der-letzte-mann_ea43d4a6d0975006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official German record identifying Murnau, Carl Mayer, Karl Freund, UFA/Union-Film, Erich Pommer, Herlth/Röhrig, Ernst Kunstmann, 1924 studio locations, original 2315m 35mm 1.33 silent format, premiere, the exceptional intertitle/coda and version-specific music records."
    },
    {
      title: "Die entfesselte Kamera",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/thema/die-entfesselte-kamera",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "filmportal documents Freund's body-mounted/apparatus-assisted mobile-camera methods and subjective use in Der letzte Mann, while explicitly stating that he was not the first to remove a camera from a tripod and treating the achievement as unusually systematic mobility rather than a first-ever invention."
    },
    {
      title: "Dream Factory and State Enterprise – The History of Ufa",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/topic/dream-factory-and-state-enterprise-the-history-of-ufa",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Institutional UFA history identifies Pommer's 1924 Murnau-Mayer-Freund-Herlth-Röhrig collaboration, places Der letzte Mann inside UFA's Babelsberg organization and international strategy, and connects the mobile-camera practice to a wider production partnership."
    },
    {
      title: "10 great films of 1924",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-films-1924",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "BFI describes the UFA film's visual-form experiment, Jannings' doorman performance, Karl Freund's roaming camera, distortion, subjective angles, jarring edits, near-absence of intertitles and the satirical happy-ending coda."
    },
    {
      title: "F. W. Murnaus Tabu – Die Edition der Outtakes",
      publisher: "Deutsche Kinemathek",
      url: "https://www.deutsche-kinemathek.de/de/sammlungen-archive/sammlung-digital/murnaus-tabu",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Deutsche Kinemathek identifies Der letzte Mann as the film that established Murnau's international career and records his January 1925 contract with William Fox, supporting the transatlantic reception/industry context without turning later Hollywood work into a 1924 production fact."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
