import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const blueAngelProductionCaseVerification = {
  scenarioId: "scenario_the_blue_angel_1930",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "Filmportal.de and the Friedrich-Wilhelm-Murnau-Stiftung support The Blue Angel / Der blaue Engel as a 1929–30 UFA sound production under Erich Pommer and Josef von Sternberg whose production significance lies in integrated Tobis-Klangfilm recording, studio staging, cabaret music/performance and language-version management. Filmportal records the German version shooting at Ufa-Atelier Neubabelsberg from 4 November 1929 to 22 January 1930, 35mm black-and-white Tobis-Klangfilm, and detailed credits for Robert Liebmann, Karl Vollmoeller, Carl Zuckmayer, Günther Rittau, Otto Hunte, Emil Hasler, Tihamér Varady, Sam Winston, Walter Klee, Fritz Thiery, Friedrich Hollaender, Franz Wachsmann and the Weintraub Syncopators. Filmportal separately catalogues an English The Blue Angel with UFA/Pommer/Sternberg, English adaptation credit and its own camera/version metadata. Murnau-Stiftung likewise holds separate German and English records and places Der blaue Engel at a turning point in German sound production and Dietrich's international breakthrough. The case therefore teaches department coordination and multilingual-version control rather than a single generic talkie master. It keeps later star mythology, catalogue runtimes/aspect records and later access copies separate from original production decisions, and does not invent microphone models, recording channels, dubbing procedures or exact take-order claims unsupported by the institutional sources.",
  sources: [
    {
      title: "Der blaue Engel",
      publisher: "filmportal.de / Deutsches Filminstitut & Filmmuseum",
      url: "https://www.filmportal.de/en/movie/der-blaue-engel_ea43d4a69a155006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Filmportal documents UFA, producer Erich Pommer, Josef von Sternberg, the German writing/adaptation team, Rittau, Hunte/Hasler, Varady, Winston/Klee, Fritz Thiery, Hollaender/Wachsmann, Weintraub Syncopators, Neubabelsberg shooting dates, 35mm black-and-white and Tobis-Klangfilm."
    },
    {
      title: "The Blue Angel — English version",
      publisher: "filmportal.de / Deutsches Filminstitut & Filmmuseum",
      url: "https://www.filmportal.de/en/movie/the-blue-angel_ea43d4a75f475006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Filmportal separately catalogues the English-language UFA/Pommer/Sternberg version, including Carl Winston's English adaptation, camera/version credits, Tobis-Klangfilm and distinct runtime/aspect catalogue metadata."
    },
    {
      title: "Der Blaue Engel",
      publisher: "Friedrich-Wilhelm-Murnau-Stiftung",
      url: "https://www.murnau-stiftung.de/movie/78",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Murnau-Stiftung records the German feature as a 1929–30 production, identifies Sternberg, the principal writing/camera/music/sound/design credits and its German release provenance."
    },
    {
      title: "The Blue Angel",
      publisher: "Friedrich-Wilhelm-Murnau-Stiftung",
      url: "https://www.murnau-stiftung.de/movie/17173",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Murnau-Stiftung maintains a separate record for the English version, documenting UFA production, Sternberg, Carl Winston screenplay/adaptation credit, Rittau camera, Hollaender music, Thiery sound and Otto Hunte design."
    },
    {
      title: "1918–1933: Weimarer Kino",
      publisher: "Friedrich-Wilhelm-Murnau-Stiftung",
      url: "https://www.murnau-stiftung.de/filmbestand/geschichte/weimarer-kino",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Murnau-Stiftung places Der blaue Engel within the artistic and industrial shift to sound in Germany and explains the wider importance of music/operetta and multiple-language production for UFA's international sound-era strategy."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
