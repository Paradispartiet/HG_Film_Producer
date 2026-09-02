import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const resurrectionProductionCaseVerification = {
  scenarioId: "scenario_resurrection_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "Resurrection is verified as Chapter 19's next award-priority auteur/festival production case through Festival de Cannes, BBFC and multiple direct Bi Gan interviews. Cannes records the 2025 Special Prize and credits Bi Gan as director/screenwriter/co-editor, Dong Jingsong as cinematographer, Liu Qiang and Tu Nan as production designers, Bai Xue as co-editor, Li Danfeng in sound and M83 in music. Awards establish reception priority rather than workflow. Runtime provenance is versioned: Cannes lists 160 minutes, BBFC records a 155m41s UK cinema master and a later 159m29s physical/VOD master, so the playable record rounds the cinema master to 156 minutes. Direct interviews establish shooting over more than a year with two pauses/three broad cycles; repeated chapter-specific resets of sets, props and design; selective period-material reuse; precise script/storyboard architecture coexisting with improvisation; a two-camera strategy in which the cameras served different narrative functions; a final continuous-take system requiring concentrated locations, long rehearsal/preparation, nightly complete attempts and real Chongqing weather/sunrise; rough editing during production pauses; incomplete VFX-related material at Cannes followed by post-festival completion and story reorganization; subjective sound design for the hearing chapter; and M83 music beginning before screenplay completion and evolving through final edit. Exact financing/restart, shooting-day, camera/lens/format, lighting, art/costume procurement, VFX vendor/shot, editorial system, sound session and release-master lineage ledgers remain unresolved.",
  sources: [
    {
      title: "KUANG YE SHI DAI (RESURRECTION)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/kuang-ye-shi-dai/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional festival record supporting the 2025 Special Prize, 160-minute Cannes listing, China production attribution and principal credits for Bi Gan, Dong Jingsong, Liu Qiang, Tu Nan, Bai Xue, Li Danfeng and M83."
    },
    {
      title: "Resurrection",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/resurrection-q29sbgvjdglvbjpwwc0xmdmzmza3",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional version record supporting the UK cinema runtime of 155m41s and later physical/VOD runtime of 159m29s, preserving version provenance against the Cannes 160-minute listing."
    },
    {
      title: "Interview: Bi Gan on Resurrection",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-bi-gan-on-resurrection/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Cannes interview supporting the unexpectedly long shoot, more-than-a-year production span, two pauses, April 2025 completion pressure and the film being deep in post-production close to its Cannes premiere."
    },
    {
      title: "Exclusive Interview | Bi Gan on Creating Resurrection",
      publisher: "UK-China Film Collab",
      url: "https://www.ukchinafilm.com/bi-gan-resurrection/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Direct Bi Gan interview supporting post-Cannes VFX completion/re-editing, the chapter-by-chapter set/prop/design reset burden, selective period-material reuse, five-films-inside-one-production framing and production order decisions."
    },
    {
      title: "A Conversation with Bi Gan (RESURRECTION)",
      publisher: "Hammer to Nail",
      url: "https://www.hammertonail.com/interviews/bi-gan/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Direct Bi Gan interview supporting the two-camera strategy with distinct narrative functions, improvisation arising from designed sets and intentional hearing-chapter soundscape transformation."
    },
    {
      title: "The Dream Machine: Bi Gan on Resurrection",
      publisher: "MUBI Notebook",
      url: "https://mubi.com/en/notebook/posts/the-dream-machine-bi-gan-on-resurrection",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Bi Gan interview supporting the story-driven continuous-take decision and the production-design advantage of concentrating the long take in one coordinated location system."
    },
    {
      title: "World-Building: Bi Gan on Resurrection",
      publisher: "Screen Slate",
      url: "https://www.screenslate.com/articles/world-building-bi-gan-resurrection",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Bi Gan interview supporting roughly one month of preparation/shooting for the final long-take system, one complete take per night during the final week and Chongqing weather/sunrise dependence."
    },
    {
      title: "How charming it is to make a silent film: Bi Gan on Resurrection",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/how-charming-it-make-silent-film-bi-gan-resurrection",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct Bi Gan interview supporting silent-era mindset/performance research, chapter-specific historical film languages and a consistent framework across changing visual systems."
    },
    {
      title: "Cinema Will Not Come to an End: Bi Gan on Resurrection",
      publisher: "The Film Stage",
      url: "https://thefilmstage.com/cinema-will-not-come-to-an-end-bi-gan-on-resurrection/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Bi Gan reporting supporting real sunrise/weather pressure and M83/Anthony Gonzalez entering before screenplay completion, collaborating through production and continuing adjustments during final editing."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
