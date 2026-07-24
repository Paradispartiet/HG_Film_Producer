import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const priorityIndieFinalVerificationRecords = [
  {
    scenarioId: "scenario_ghost_world_2001",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's alternative-comics adaptation, deadpan teen-film revision, researched consumer environments, thrift-store identity design, documentary-derived observation, exact comic timing and vintage-record soundtrack are supported by AFI, BFI and Criterion records.",
    sources: [
      {
        title: "Ghost World",
        publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/62025-GHOST-WORLD",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI verifies Terry Zwigoff, Daniel Clowes, Mr. Mudd, Affonso Beato, production designer Edward T. McAvoy, editors Carole Kravetz-Aykanian and Michael R. Miller, composer David Kitay and the 2001 release record."
      },
      {
        title: "Ghost World",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/28687-ghost-world",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "Criterion identifies the Daniel Clowes adaptation, post-graduation structure, Oscar-nominated screenplay, eclectic soundtrack, cult legacy and intended colour 1.85:1 presentation."
      },
      {
        title: "The misfits of Zwigoff: a visit to the set of Ghost World",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/sight-and-sound/features/misfits-zwigoff-visit-set-ghost-world",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The contemporary set report documents the financing struggle, Zwigoff-Clowes collaboration, researched teenage rooms, collector culture, production-design detail, documentary background and the importance of exact editing tone."
      },
      {
        title: "On the Music of Ghost World",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/4614-on-the-music-of-ghost-world",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "sound"],
        note: "Terry Zwigoff explains how vintage recordings and deliberately commercial contemporary music were chosen to sustain nuanced deadpan comedy, alienation, paranoia and cynicism."
      }
    ]
  },
  {
    scenarioId: "scenario_columbus_2017",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's architectural modernism, balanced framing, site-specific Indiana production, restrained two-character dramaturgy, offscreen speech, contemplative rhythm and Sundance-supported independent distribution are supported by Sundance and BFI records.",
    sources: [
      {
        title: "Distribution Case Study: Columbus",
        publisher: "Sundance Institute",
        url: "https://www.sundance.org/case-studies/creative-distribution/columbus",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Sundance documents the 2017 NEXT premiere, first-feature context, producer team, Elisha Christian photography, audience strategy and Creative Distribution Fellowship release model."
      },
      {
        title: "2017 Sundance Film Festival: Competition and NEXT Lineup Announced",
        publisher: "Sundance Institute",
        url: "https://www.sundance.org/blogs/2017-sundance-film-festival-competition-and-next-lineup-announced-3/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The official programme records Kogonada as director and screenwriter, the world premiere, principal cast and the story's deliberate relationship among Casey, Jin, family obligation and surrounding architecture."
      },
      {
        title: "Columbus",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/d56f30a0-f249-5b87-a31e-4f617d672b4e/columbus",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "BFI verifies the American production, Kogonada's authorship, John Cho and Haley Lu Richardson, running time and the principal producers behind the site-specific drama."
      },
      {
        title: "BFI Recommends: Columbus",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/bfi-recommends-columbus",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "BFI analyses the rigorous framing, contemplative pacing, gesture-based performance, Ozu and Linklater affinities, unheard dialogue and architecture used as an emotionally active rather than decorative system."
      }
    ]
  },
  {
    scenarioId: "scenario_red_rocket_2021",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Texas City regional method, antihero social comedy, local and nontraditional casting, 23-day mobile production, 16mm anamorphic image system, controlled coverage, location sound and Cannes reception are supported by Cannes, A24 and Kodak records.",
    sources: [
      {
        title: "Red Rocket",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/red-rocket/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official Competition record verifies Sean Baker and Chris Bergoch's screenplay, Drew Daniels photography, Stephonik Youth design, Baker's editing, Alex Altman's sound and the principal cast."
      },
      {
        title: "Red Rocket: back on home turf",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/2021/red-rocket-back-on-home-turf/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Cannes describes the Texas hometown premise, Baker's social focus, collaboration with Chris Bergoch and Drew Daniels, Simon Rex casting and preference for performers found beyond conventional routes."
      },
      {
        title: "Red Rocket",
        publisher: "A24",
        url: "https://a24films.com/films/red-rocket",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "A24 identifies the 2021 release, Sean Baker's direction, Baker and Bergoch's screenplay, Simon Rex, Bree Elrod and Suzanna Son, and the darkly funny American-hustler production premise."
      },
      {
        title: "Director Sean Baker and DP Drew Daniels on embracing the organic aesthetic of 16mm for Red Rocket",
        publisher: "Kodak",
        url: "https://www.kodak.com/en/motion/blog-post/red-rocket.",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing"],
        note: "Baker and Daniels document the Arriflex 16SR3, 1.44x anamorphic lenses, 2.39 image, 23-day shoot, minimal mobile crew, tripod-led coverage, shot listing, colour strategy and edit-conscious camera planning."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
