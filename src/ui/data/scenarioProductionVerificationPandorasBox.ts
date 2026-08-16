import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const pandorasBoxProductionCaseVerification = {
  scenarioId: "scenario_pandoras_box_1929",
  status: "verified",
  verifiedAt: "2026-08-16",
  summary: "filmportal and BFI support Pandora's Box / Die Büchse der Pandora as a 1928/1929 Nero-Film production directed by G. W. Pabst, produced by Seymour Nebenzahl, adapted by Ladislaus Vajda from Frank Wedekind's Lulu plays, photographed by Günther Krampf and designed by Andrej Andrejew and Bohumil Heš. filmportal records October-November 1928 production at Filmwerke Staaken, Südfilm distribution, an eight-act 4255-metre 35 mm 1.33:1 black-and-white silent original and the 9 February 1929 Berlin premiere. Its Pabst biography places his socially critical realism and Neue Sachlichkeit reputation in explicit contrast to Expressionist fantasy, while its Louise Brooks biography documents the American actor's distinctive physical lightness in German silent cinema. Version records distinguish the German original, Joseph R. Fieseler's documented American-version work, later television and inspection versions, and the 1997 reconstruction with Peer Raben-related music. The Production Case therefore teaches performance-centered modernity, social space, transatlantic stardom and representation-aware adaptation without reducing Weimar cinema to Expressionism or turning sexuality and queer identity into player scoring.",
  sources: [
    {
      title: "Die Büchse der Pandora",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/die-buchse-der-pandora_ea43d4a69b2c5006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "German institutional film record identifying Pabst, Vajda, Wedekind source plays, Krampf, Andrejew, Heš, Nero-Film, Seymour Nebenzahl, Filmwerke Staaken, Südfilm, original 4255m 35mm 1.33 black-and-white silent format, 1929 premiere, censorship history, Joseph R. Fieseler's American-version work and later reconstruction/version records."
    },
    {
      title: "G. W. Pabst",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/person/g-w-pabst_c5b49311e6c44fafa3c1329cc833aca4",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Institutional biography placing Pabst's socially critical realism and Neue Sachlichkeit reputation in explicit opposition to Expressionist fantasy, documenting his Pandora's Box collaboration with Louise Brooks and keeping that tendency broader than one film."
    },
    {
      title: "Louise Brooks",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/person/louise-brooks_f92cd465f41c417095f57586b2bf6181",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Institutional biography documenting Brooks's American-to-German star circulation, her casting by Pabst in Pandora's Box and the unusual physical lightness she brought to German silent film, supporting a performance lesson without appearance scoring."
    },
    {
      title: "Where to begin with G.W. Pabst",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/where-begin-gw-pabst",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI emphasizes Brooks's performance, Pabst's direction toward naturalism and the way the camera follows her through changing relationships and social spaces, useful as institutional critical context rather than a substitute for filmportal's production record."
    },
    {
      title: "Availability — Die Büchse der Pandora",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/node/10095/availability",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "Archive/distribution record documenting Deutsche Kinemathek and Bundesarchiv holdings, later digitisation and a modern 133-minute home-video presentation, reinforcing that modern access copies are later presentation objects rather than an untouched 1929 master."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
