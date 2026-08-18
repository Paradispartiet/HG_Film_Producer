import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const draculaProductionCaseVerification = {
  scenarioId: "scenario_dracula_1931",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, the Academy, Library of Congress and BFI support Dracula as a paired Universal studio-system case with two distinct 1931 language productions sharing infrastructure. AFI records Tod Browning directing the English version, Carl Laemmle Jr. producing, Garrett Fort scripting, Karl Freund photographing, Charles D. Hall designing, Milton Carruth editing under Maurice Pivar, C. Roy Hunter supervising recording and Jack Pierce handling makeup; it documents Western Electric sound, a 74–75 minute runtime and production from 29 September to 15 November 1930 with later scenes and retakes. AFI separately records George Melford directing Spanish-language Drácula with Enrique Tovar Ávalos as dialogue director, Carl Laemmle Jr. and Paul Kohner producing, Baltasar Fernández Cué adapting the Spanish version, George Robinson photographing, Hall designing, Arthur Tavares editing under Pivar, Hunter supervising sound and Pierce doing makeup; it records Western Electric sound and a 103-minute runtime. AFI and Academy sources establish that the versions shared sets and that most Spanish-version work was shot at night after the English unit's daytime work. AFI explicitly warns that Karl Freund must not be credited with photographing the Spanish version. Library of Congress records both versions separately in the National Film Registry. The case therefore preserves distinct crews, language, runtime and version history and does not invent lenses, stock, exact lighting units, microphone models or unsupported claims that every Spanish shot copied English dailies.",
  sources: [
    {
      title: "Dracula (1931)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/7690-DRACULA",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies the English-version Universal production/distribution, Browning/Laemmle/Fort/Freund/Hall/Carruth-Pivar/Hunter/Pierce credits, Western Electric sound, 74–75 minute runtime and production dates. Its history also documents the simultaneous Spanish version and explicitly states that sources crediting Freund with Spanish-version photography are erroneous."
    },
    {
      title: "Drácula (1931)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Catalog/moviedetails/1306",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI verifies the Spanish-version Universal production/distribution, Melford/Tovar Ávalos/Laemmle-Kohner/Fort-Fernández Cué/Robinson/Hall/Tavares-Pivar/Hunter/Pierce credits, Western Electric sound, 103-minute runtime, production dates and same-set/night-shift relationship to the English version."
    },
    {
      title: "DRÁCULA (1931)",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://pstlala.oscars.org/event/dracula-1931/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The Academy describes Hollywood's early-sound Spanish-language version strategy, identifies Melford, Laemmle Jr. and Fernández Cué, and states that Drácula was filmed at night on the same sets used by the English Bela Lugosi production."
    },
    {
      title: "From the National Film Registry: Drácula (1931)",
      publisher: "Library of Congress / National Audio-Visual Conservation Center",
      url: "https://blogs.loc.gov/now-see-hear/2022/10/from-the-national-film-registry-drcula-1931/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The Registry essay places the paired production in the multiple-language-version economy, documents shared sets and night/day scheduling, and discusses how the Spanish version could diverge in mise-en-scène and duration rather than functioning as a mechanical copy."
    },
    {
      title: "Where to begin with the Universal horror cycle",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/where-begin-universal-horror-cycle",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "BFI places Dracula inside Universal's early-1930s horror cycle and identifies George Melford's Spanish version as a same-set after-hours production with George Robinson's photography distinct from the English-language version."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
