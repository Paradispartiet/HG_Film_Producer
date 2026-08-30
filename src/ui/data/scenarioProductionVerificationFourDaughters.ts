import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fourDaughtersProductionCaseVerification = {
  scenarioId: "scenario_four_daughters_2023",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Four Daughters is verified as Chapter 19's next nonfiction/hybrid production case. Festival de Cannes records Kaouther Ben Hania's 2023 France-Tunisia-Germany-Saudi Arabia feature at 107 minutes, with Ben Hania as director/screenwriter, Farouk Laaridh as cinematographer, Bessem Marzouk as production designer, Amine Bouhafa as composer, and Jean-Christophe Hym and Qutaiba Barhamji among the editors. The official Cannes press kit documents a longer project chronology beginning with observational filming in 2016 and 2017, the abandonment of that method, and a lockdown-era reconception as a documentary about preparing a fake fiction. Professional actors meet the real participants, stand in for absent family members, receive direction and questions from them, and make reenactment itself available for reflection. Hend Sabri becomes Olfa's fictional double and interlocutor, while Majd Mastoura plays the male roles as an explicit formal compression. Ben Hania describes an open, nonchronological script of key scenes without locked dialogue; the production therefore uses a scaffold for experimentation rather than a predetermined fiction screenplay. Cannes and the press kit place the later shoot in an old Tunis hotel transformed into a stripped-back film studio. Ben Hania states that the crew was minimized, mostly female, and collectively wrote a constitution or code of conduct to create a safer, more empathetic set for difficult memory work. Los Angeles Times reporting describes a memory-per-day process that begins with a real participant recounting a memory and moves into reenactment, while The Guardian reports roughly four weeks at the same Tunisian location and the need for off-camera discussion, stopping and redirection when material became overwhelming. Filmmaker Magazine records that Olfa, Eya and Tayssir were offered participation in the edit and declined, trusting Ben Hania while recognizing that each could otherwise seek a different personal version. The press kit also records Ben Hania's decision-making around a scene Majd Mastoura wanted to stop, including Eya's expressed need for the material, supporting a production model in which participant agency and performer limits remain active editorial evidence. The press kit lists 1.85 and 5.1 presentation data and names the sound team, but complete production-sound and final-mix hardware/workflow remain unresolved. The Cannes page lists 107 minutes while the press kit lists 110; 107 is used as the canonical playable runtime while the discrepancy remains explicit. Exact budget and financing shares, participant releases, psychological-support documentation, legal review, insurance, exact call sheets, complete camera/lens/exposure/lighting records, edit software and storage architecture, color transforms, full sound-post chain and distribution contracts remain outside the verified layer.",
  sources: [
    {
      title: "LES FILLES D'OLFA (FOUR DAUGHTERS)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/les-filles-d-olfa/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting the 2023 production, 107-minute runtime, four-country production context and principal writing/directing/cinematography/design/music/editing credits."
    },
    {
      title: "Four Daughters Press Kit",
      publisher: "Festival de Cannes / Tanit Films / The Party Film Sales",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/05/159327.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production notes supporting the 2016/2017 development chronology, lockdown reconception, fake-fiction preparation method, open key-scene script, actor/participant dialogue, old Tunis hotel studio, mostly female crew, collective set constitution, ethical stop/restart discussion, production entities, 1.85/5.1 presentation and the 110-minute press-kit duration."
    },
    {
      title: "Kaouther Ben Hania employs a unique approach In Competition",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2023/kaouther-ben-hania-employs-a-unique-approach-in-competition/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Festival feature supporting the hybrid documentary/fiction method, professional actor doubles, Hend Sabri as Olfa's double and the specially created Tunis hotel setting."
    },
    {
      title: "A Journey That Allowed Us to Harness the Power of Storytelling: Kaouther Ben Hania on Four Daughters",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/123431-interview-four-daughters-kaouther-ben-hania/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Director interview supporting the minimized majority-female crew, pre-shoot safe-space discussions/code of conduct and the offer to Olfa, Eya and Tayssir to participate in editing, which they declined."
    },
    {
      title: "Kaouther Ben Hania - Director of Four Daughters",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/442834/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Director interview supporting the failed initial documentary approach, reenactment 'hack', actors as mirrors, real participants directing actors, Brechtian distance and an open scene-based script left available to experimentation."
    },
    {
      title: "In Four Daughters, a shattered Tunisian family triumphs over trauma",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment-arts/awards/story/2024-02-13/doc-four-daughters",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Production reporting supporting the one-memory-per-day shooting structure, the Eiffel Tower hotel set in Tunis, the minimized majority-female crew/safe-space contract and direct-to-camera interview approach."
    },
    {
      title: "A very emotional shoot: behind Four Daughters, an unusual, Oscar-tipped film",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2024/jan/10/a-very-emotional-shoot-behind-four-daughters-an-unusual-oscar-tipped-film",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Production feature supporting roughly four weeks at the same Tunisian location and the need for off-camera discussion, stopping, restarting and redirection during emotionally difficult material."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
