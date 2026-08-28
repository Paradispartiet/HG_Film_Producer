import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const soulProductionCaseVerification = {
  scenarioId: "scenario_soul_2020",
  status: "verified",
  verifiedAt: "2026-08-28",
  summary: "Soul is verified as the second Chapter 19 Production Case: a mature Pixar CG feature whose grounded New York world, abstract Great Before, Black cultural specificity, jazz-performance animation and final remote production weeks form distinct but coordinated systems. AFI anchors Pete Docter as director, Dana Murray as producer, Docter/Kemp Powers/Mike Jones as screenplay writers, Ian Megibben as director of photography, Steve Pilcher as production designer, Kevin Nolting as editor, Trent Reznor/Atticus Ross/Jon Batiste as music contributors and a 100-minute duration. Pixar's official history records that employees began working from home on March 16, 2020 with approximately seven weeks of Soul production remaining and completed the film the following month, establishing remote completion without recasting the whole production as remote. Pixar and Disney design reporting separates recognizable New York and jazz-club research from the invented Great Before and documents a new line-work technique for translucent souls plus the living-line counselor grammar. Pixar's RenderMan case study documents Ian Megibben's lighting leadership and Bradford Young's consultation on Black skin tones, including deliberate shading/lighting responses and Roy DeCarava photographic reference. Disney and D23 reporting document Jon Batiste's piano-performance reference, multiple-camera observation and an illuminated-key method used to improve fingering accuracy, while Batiste's jazz work remains distinct from Reznor/Ross's Great Before score. Kevin Nolting's editing account supports animation editorial from development through final mix and unusually early exploratory score material. SIGGRAPH testimony confirms effects work was active when the crew shifted home. Exact budget, full schedule, department headcount, renderer/tool versions, shader graphs, sample counts, asset/shot counts, render hours, remote-network/security architecture, exact MIDI implementation, edit software/version, recording chain, score stems and final mix topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "SOUL",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/71060-SOUL",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record supporting the 100-minute duration and credits for Pete Docter, Dana Murray, Kemp Powers, Mike Jones, Ian Megibben, Steve Pilcher, Kevin Nolting, Trent Reznor, Atticus Ross and Jon Batiste."
    },
    {
      title: "Our Story — 2020",
      publisher: "Pixar Animation Studios",
      url: "https://www.pixar.com/our-story",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "Pixar's institutional history records the March 16, 2020 work-from-home transition with approximately seven weeks of Soul production remaining and completion the following month."
    },
    {
      title: "Soul",
      publisher: "Pixar Animation Studios",
      url: "https://www.pixar.com/soul",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Official production feature supporting New York and jazz-club research, Steve Pilcher's design role, and the Great Before as a world created from scratch around the story's conceptual needs."
    },
    {
      title: "Cinematography with Soul",
      publisher: "Pixar RenderMan",
      url: "https://renderman.pixar.com/stories/cinematography-with-soul",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Pixar technical case study documenting Ian Megibben's lighting work, Bradford Young's consultation, deliberate Black-skin shading/lighting development and Roy DeCarava/live-action photographic reference."
    },
    {
      title: "An Inside Look at the Animation in Pixar's Soul",
      publisher: "Disney News",
      url: "https://news.disney.com/animators-of-pixar-soul",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Disney/Pixar production reporting documenting soul-character research, the new line-work technique for facial/hand clarity, cross-discipline technical collaboration, counselor living-line design and culturally specific character-animation research."
    },
    {
      title: "Soul",
      publisher: "Disney+ Press",
      url: "https://press.disneyplus.com/media-kits/soul",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official media kit anchoring Pete Docter, Kemp Powers, Dana Murray and the December 25, 2020 Disney+ release; distribution evidence is kept separate from production ownership and authorship."
    },
    {
      title: "Soul (film)",
      publisher: "D23",
      url: "https://d23.com/a-to-z/soul-film/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Disney archival entry supporting the 100-minute duration, 2.39:1 presentation, authentic piano-reference process, illuminated-key technology, Black skin/hair rendering work and the distinct Batiste versus Reznor/Ross music roles."
    },
    {
      title: "The Music Behind Pixar's Soul",
      publisher: "Disney News",
      url: "https://news.disney.com/music-for-soul",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Disney production feature supporting Jon Batiste's jazz compositions/arrangements and piano-reference footage plus Trent Reznor and Atticus Ross's separate score authorship for the Great Before."
    },
    {
      title: "A Behind-the-Scenes Look at the Heart and Soul of Pixar's Latest Feature",
      publisher: "ACM SIGGRAPH Blog",
      url: "https://blog.siggraph.org/2020/12/a-behind-the-scenes-look-at-the-heart-and-soul-of-pixars-latest-feature.html/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Interview with Pixar technical leads supporting the dual-world technical problem, effects work still being active at shutdown and distributed completion from home."
    },
    {
      title: "How Soul directors created Pixar's first Black protagonist",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment-arts/movies/story/2020-11-19/pixar-soul-pete-docter-kemp-powers",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Docter and Powers discuss Powers' expanded authorship and Pixar's internal culture trust and broader consultation process for culturally specific representation."
    },
    {
      title: "ART OF THE CUT on editing PIXAR's Soul with Kevin Nolting, ACE",
      publisher: "ProVideo Coalition",
      url: "https://www.provideocoalition.com/art-of-the-cut-soul/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Kevin Nolting describes animation editorial spanning development through final mix and the unusually early exploratory Reznor/Ross music used in the evolving cut."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
