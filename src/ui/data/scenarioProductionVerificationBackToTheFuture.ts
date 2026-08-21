import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const backToTheFutureProductionCaseVerification = {
  scenarioId: "scenario_back_to_the_future_1985",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "Back to the Future is verified as an Amblin Entertainment / Universal Pictures studio production built from Robert Zemeckis and Bob Gale's screenplay, whose development AFI dates to fall 1980 and whose financing emerged only after years of rejection and Zemeckis's later commercial success. AFI documents Eric Stoltz as the original Marty McFly, five weeks of filming before he was replaced by Michael J. Fox, the scrapping of that footage, and Fox's subsequent daytime Family Ties / nighttime feature schedule. This is modeled as a casting, continuity, reshoot and production-management event rather than gossip or a license to infer that every department repeated every shot. AFI and official production notes document Universal Studios and Los Angeles-area location work, plus three 1981 DeLoreans modified for filming; Kevin Pike's practical-effects team added four firejets. Official notes trace the time-machine design/construction through Ron Cobb, Andrew Probert, Lawrence G. Paull, Mike Scheffe and Pike, keeping design, vehicle construction and practical effects distinct. ILM's official retrospective documents a selective visual-effects package of 27 / fewer-than-thirty shots and details blue-screen work, animation, live-action plates, a one-fifth-scale DeLorean miniature and the VistaCruiser motion-control system for specific effects shots. Dean Cundey is director of photography; Lawrence G. Paull production designer; Deborah L. Scott costume designer; Arthur Schmidt and Harry Keramidas editors; William B. Kaplan production sound mixer; Alan Silvestri composer; Industrial Light & Magic the visual-effects facility. ILM also documents roughly eight weeks of postproduction after principal photography and schedule pressure when the release moved forward to 3 July 1985. The case does not invent a principal camera body, lens package, stock emulsion, focal lengths, exposure ratios, lighting recipe, recorder, microphone, mixing console, optical-printer setup, lab process, unsupported total reshoot count or unsupported unit/budget details. Later box office, awards, sequels, home-video changes, restoration and franchise status remain downstream from the 1985 production.",
  sources: [
    {
      title: "Back to the Future",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/55763-BACK-TO-THE-FUTURE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents fall-1980 screenplay development, Amblin/Universal financing, the Stoltz-to-Fox replacement after five weeks, Fox's television/feature schedule, three modified 1981 DeLoreans, Kevin Pike's firejets, major locations, credits, runtime and release history."
    },
    {
      title: "Dean Cundey Remembers Back to the Future",
      publisher: "Industrial Light & Magic",
      url: "https://www.ilm.com/back-to-the-future-dean-cundey-interview-ilm-vfx/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "ILM's official retrospective documents its 27 / fewer-than-thirty VFX scope, Twin Pines blue-screen work, clock-tower effects, the one-fifth-scale flying DeLorean, VistaCruiser motion control, live-action/effects collaboration and roughly eight-week postproduction finish."
    },
    {
      title: "Back to the Future Production Notes",
      publisher: "Universal City Studios / Amblin Entertainment official Back to the Future site",
      url: "https://www.backtothefuture.com/movies/production-notes-1985",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Official 1985 production notes document Fox's overlapping schedule, the Los Angeles/Universal production base, old-age makeup, DeLorean concept/design and construction, three purchased cars and Kevin Pike's four firejets."
    },
    {
      title: "Back to the Future Credits",
      publisher: "Universal City Studios / Amblin Entertainment official Back to the Future site",
      url: "https://www.backtothefuture.com/movies/credits-1985",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official credits confirm Zemeckis, Gale, Cundey, Paull, Schmidt, Keramidas, Silvestri, Deborah L. Scott, William B. Kaplan, Kevin Pike, the sound-editorial structure and Industrial Light & Magic as the visual-effects facility."
    },
    {
      title: "Back to the Future (1985)",
      publisher: "Amblin",
      url: "https://amblin.com/movie/back-to-the-future/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Amblin's official film page independently confirms the principal creative credits, including Cundey, Paull, Scott, Ken Ralston, Schmidt, Keramidas and Silvestri."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;