import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const yeelenProductionCaseVerification = {
  scenarioId: "scenario_yeelen_1987",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "BFI, Festival de Cannes, La Cinémathèque française, filmportal.de, Indiana University Press research and a later Souleymane Cissé interview support Yeelen as a Malian-led 1987 feature built through international co-production, Bambara-language authorship, a mixed Malian/international crew and a long disrupted production. BFI identifies Mali–Burkina Faso–France–West Germany, Films Cissé/Atriascop/Midas, governmental and institutional assistance, producer Souleymane Cissé, Jean-Noël Ferragut cinematography, a broad multi-editor team, Daniel Ollivier/Michel Mellier sound, Kossa Mody Keita design/costume, Michel Portal/Salif Keita music and specialist effects/camera/production labor. Cinémathèque adds overlapping company records including Les Films Cissé, Atriascop, CNC, Les Films du Carrosse, Mamo Films and WDR, producer Cissé, production director Bertrand Van Effenterre, both Ferragut and Jean-Michel Humeau in cinematography, broader editing credits and special-effects coordination. Cannes independently confirms Cissé direction/screenplay, Ferragut/Humeau cinematography, Michel Portal music, Andrée Davanture editing and the 1987 Jury Prize. Indiana University Press research based on Cissé interviews, production materials and crew interviews documents a release roughly three and a half years after the first take, a sandstorm five weeks into an early filming period, France-based crew departure, Ismaila Sarr's death, Cissé's rewrite around surviving footage, a seven-month search for Niamanto Sanogo, Ferragut replacing Humeau as principal cameraman, and Ferragut's use of September–November and morning/late-afternoon exterior light windows. The same scholarship stresses that Cissé's presentation of Komo is selective and authored rather than a full disclosure of restricted knowledge. Cissé's later interview rejects reducing Yeelen to magic, initiation or exoticism and recalls funding, natural conditions and the lead actor's death as central production difficulties. BFI, Cinémathèque and filmportal converge on 105 minutes/35mm; trigon-film records 106 minutes, retained only as catalog provenance. No unsupported camera body, lens package, stock emulsion, exposure values, artificial-light package, sound hardware, effects formula, ritual procedure, precise financing percentages or invented single co-production hierarchy is asserted.",
  sources: [
    {
      title: "Yeelen (Brightness) – BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/in%20the%20black%20fantastic/2022/07/03/yeelen/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BFI records Mali–Burkina Faso–France–West Germany, Films Cissé/Atriascop/Midas, institutional assistance, producer/writer/director Cissé, 35mm/105 minutes and detailed camera, editing, sound, design, costume, music, effects and production labor."
    },
    {
      title: "Yeelen (La Lumière)",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/38127.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cinémathèque supplies overlapping production-company records, Souleymane Cissé as producer, Bertrand Van Effenterre production direction, Ferragut/Humeau cinematography, Ollivier/Mellier sound, Portal/Salif Keita music, Kossa Mody Keita design/costume, multi-editor credits and 105 minutes."
    },
    {
      title: "Yeelen",
      publisher: "Festival de Cannes",
      url: "https://cinemadedemain.festival-cannes.com/en/f/yeelen/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes independently confirms Cissé direction/screenplay, Jean-Noël Ferragut and Jean-Michel Humeau cinematography, Michel Portal music, Andrée Davanture editing, Mali attribution and the 1987 Jury Prize."
    },
    {
      title: "Komo on Screen, in Seeing the Unseen",
      publisher: "Indiana University Press",
      url: "https://publish.iupress.indiana.edu/read/seeing-the-unseen/section/5f7b3e8c-2d24-4f9f-8925-8d350ebd521e",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Peer-reviewed research drawing on Cissé interviews, production materials and crew interviews documents the multi-year production, sandstorm interruption, Ismaila Sarr's death, screenplay rewrite, delayed recasting, Humeau/Ferragut production chronology, Ferragut's seasonal/daily light constraints and the need to treat Komo representation as selective rather than total disclosure."
    },
    {
      title: "Yeelen - Das Licht",
      publisher: "filmportal.de / DFF",
      url: "https://www.filmportal.de/en/movie/yeelen-das-licht_",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "German institutional record corroborates Les Films Cissé/Atriascop/Les Films du Carrosse/Midas, WDR co-production, producer Cissé, Ferragut/Humeau photography, design/costume, editing, sound, music, 35mm, color, mono, 1.66 and 105 minutes."
    },
    {
      title: "Souleymane Cissé: The Work, the Wind, and the Light",
      publisher: "MUBI Notebook",
      url: "https://mubi.com/de/notebook/posts/souleymane-cisse-the-work-the-wind-and-the-light",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Cissé recalls Yeelen's funding and natural-production difficulties and the death of the lead actor, while discussing his image-centered filmmaking practice; used only as firsthand retrospective evidence, not to fill undocumented technical details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
