import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theIdiotsProductionCaseVerification = {
  scenarioId: "scenario_the_idiots_1998",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "The Idiots (Idioterne) is verified conservatively as Lars von Trier's 1998 Danish feature and Dogme 95 film #2, with Vibeke Windeløv credited as producer and Molly Malene Stensgaard as editor. The production case uses the Dogme 95 Vow of Chastity as a primary normative document for the movement's stated restrictions—location shooting, synchronized image/sound, handheld camera, color/no special lighting, rejection of optical work/filters and other anti-artifice rules—but it explicitly refuses to treat those statements as automatic proof that every film-specific production choice complied perfectly. Stable institutional/catalog histories identify The Idiots with handheld, video-origin, location-driven production, making it a key contrast to conventional 1990s polished feature workflows. The case separates acquisition from theatrical presentation and later restoration/mastering: no exact camera model, lens, tape/codec, frame rate, transfer facility, 35mm stock, laboratory or later scan specification is asserted without direct production documentation. It similarly leaves microphone/recorder/mixer, number of cameras, shooting ratio, edit system, budget, schedule and take counts unset. Stensgaard's editorial credit is crucial because Dogme immediacy does not eliminate editing; selection, duration, ordering and continuity remain authored. The sound rule is modeled as a synchronized-production constraint rather than proof that postproduction sound decisions disappeared. Gameplay uses 117 minutes for the 1998 feature case. Cannes 1998 and later Dogme retrospectives are treated as circulation and legacy evidence, not as evidence for acquisition hardware or technical compliance.",
  sources: [
    {
      title: "Idioterne",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/idioterne",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film-database anchor for the 1998 Danish feature, principal credits and production identity. Technical parameters are not extended beyond what the institutional record supports."
    },
    {
      title: "The Vow of Chastity — Dogme 95",
      publisher: "Dogme 95",
      url: "https://www.dogme95.dk/the-vow-of-chastity/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Primary normative movement document for the stated Dogme rules. It is used as evidence of prescribed constraints, never as automatic proof of film-specific perfect compliance."
    },
    {
      title: "Idioterne / The Idiots — Festival de Cannes archive",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/idioterne/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official festival-history anchor for the film's 1998 Cannes circulation. Festival presentation is kept separate from original production hardware."
    },
    {
      title: "The Idiots (1998) — title and credit record",
      publisher: "IMDb",
      url: "https://www.imdb.com/title/tt0154421/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Supporting catalog cross-check for title, year, 117-minute runtime and principal credits. It is not used to invent camera, sound or postproduction specifications."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
