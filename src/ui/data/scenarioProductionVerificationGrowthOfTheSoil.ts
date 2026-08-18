import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const growthOfTheSoilProductionCaseVerification = {
  scenarioId: "scenario_growth_of_the_soil_1921",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "Nasjonalbiblioteket and the Danish Film Institute support Markens grøde / Growth of the Soil as a 1921 Norwegian Norrøna Film feature directed and scripted by Gunnar Sommerfeldt, photographed by George Schnéevoigt and accompanied by music composed by Leif Halvorsen. Nasjonalbiblioteket records Sommerfeldt as production leader, a 26 December 1921 premiere, silent presentation and tinting/toning; DFI records 35 mm black-and-white silent format and Nordland location shooting. Nasjonalbiblioteket preserves Halvorsen's 1921 original film music and its orchestral instrumentation while separately documenting later arrangement work. DFI and later Norwegian presentation records establish that the film was long treated as lost and reconstructed from incomplete archive materials, so surviving/restored runtimes and later performances are not collapsed into one immutable original version. The Production Case therefore teaches Norwegian literary adaptation, location production, tinting/toning, orchestral cinema music and restoration provenance while keeping later political/ethical readings of Hamsun distinct from causal claims about 1921 production and blocking stigmatizing or colonial assumptions as gameplay rewards.",
  sources: [
    {
      title: "Markens grøde (1921) – Norsk filmografi",
      publisher: "Nasjonalbiblioteket",
      url: "https://www.nb.no/filmografi/show?id=793756",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "National filmography record identifying Norway, Gunnar Sommerfeldt as director/screenwriter/production leader, Knut Hamsun as literary source, George Schnéevoigt as cinematographer, Leif Halvorsen as composer, Norrøna Film, the principal cast, 26 December 1921 premiere, 117-minute catalog length, and silent plus tinted/toned classification."
    },
    {
      title: "Markens Grøde – Originalmusikken til filmen",
      publisher: "Nasjonalbiblioteket",
      url: "https://www.nb.no/sheet-music/product/markens-grode-originalmusikken-til-filmen-less1921greater/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Nasjonalbiblioteket sheet-music catalog preserving Leif Halvorsen's film music with composition year 1921, orchestral instrumentation and duration, while separately naming 1994/2004 adaptation/arrangement work by Bodvar Drotninghaug Moe with Ivar Roger Hansen."
    },
    {
      title: "Markens Grøde – Filmdatabasen",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/markens-grode",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "DFI film-database record confirming Gunnar Sommerfeldt, George Schnéevoigt, Leif Halvorsen, Norrøna Film, Norwegian production, 35 mm black-and-white silent technical format and Danish theatrical circulation in 1922."
    },
    {
      title: "Markens Grøde – Cinemateket",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/cinemateket/biograf/alle-film/film/markens-grode",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "DFI Cinemateket contextualizes the production's Nordland location shooting and Schnéevoigt's landscape photography and records the later lost-film status and restoration made possible by archive finds in New York and Amsterdam, with a 117-minute DCP presentation."
    },
    {
      title: "Storstreik, flytragedie og fotballfeber – slik var nyhetsåret 1921",
      publisher: "Nasjonalbiblioteket",
      url: "https://www.nb.no/historier-fra-samlingen/nyttarskavalkade-1921/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Nasjonalbiblioteket's 1921 retrospective identifies Markens grøde as a highly anticipated Christmas release, notes its unusual length, mixed newspaper reception and likely strong holiday attendance, grounding contemporary reception separately from later canon status."
    },
    {
      title: "Markens grøde (1921)",
      publisher: "Filmweb",
      url: "https://www.filmweb.no/film/EDI20260263",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Current Norwegian presentation record describes expressive tinting, digital restoration after an earlier incomplete reconstruction, missing/reordered material in prior versions and later re-recording/adaptation of Halvorsen's orchestral score, supporting explicit separation of 1921 evidence from restoration-era presentation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
