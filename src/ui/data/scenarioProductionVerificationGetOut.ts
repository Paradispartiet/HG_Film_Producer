import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const getOutProductionCaseVerification = {
  scenarioId: "scenario_get_out_2017",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Get Out is verified as a 2017 Chapter 18 Production Case in which culturally specific social-horror authorship was realized through a low-budget specialty genre pipeline, a documented 23-day schedule, incentive-driven Alabama location production, practical-house constraints, compact digital capture, prebuilt LUTs, two-camera coverage, a practical/VFX Sunken Place handoff, performance-led editorial timing, alternate-ending version control and a culturally specific score concept. BFI and AFI support a 103-minute canonical version and the core credits, while other catalogues list 104- or 105-minute variants that remain version metadata. Toby Oliver documents ARRI Alexa Mini capture at 3.2K ProRes 4444 for a standard 2K cinema finish, Angénieux compact zooms, two cameras on every setup, four production LUT categories and extensive practical locations around Mobile/Fairhope after the California tax break did not work for the budget. The Sunken Place used a civic-center stage-like space, limited wire suspension, fans, 200-fps photography and camera/dolly cheats, with Gregory Plotkin documenting Avid resizing/temp wire cleanup before final CGI particulate/wire-removal work. Plotkin also documents long holds, negative space, performance-first suspense, alternate endings and audience-response context. Michael Abels documents Peele's request for a distinctly Black musical voice without stereotype, his 'gospel horror' response and Swahili choral warning material; Mix reporting supports a compressed score-mix schedule and 5.1-oriented music delivery. Exact department budgets, incentive amount, complete lens map, universal exposure values, full lighting package, LUT math, wire geometry, full VFX vendor/software ownership, production-sound hardware, DI node graph, complete test-screening score history and final-dub topology remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "Get Out",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/81a56239-4e69-56b1-b2f0-128204576ae9/get-out",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record supporting the 103-minute 2017 release and Jordan Peele's directing/writing authorship."
    },
    {
      title: "GET OUT",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/70923-GET-OUT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue supporting the 103-minute runtime and producer, cinematography, editing, production-design and music credits."
    },
    {
      title: "DP Toby Oliver on Get Out, Cheating the Sunken Place and Color Grading Trailers",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/102038-dp-toby-oliver-on-get-out-cheating-the-sunken-place-and-color-grading-trailers/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Oliver documents the 23-day schedule, California-to-Alabama move, practical locations, Alexa Mini, 3.2K ProRes 4444, 2K finish, Angénieux zooms, two-camera coverage, four LUTs, location-protection lighting and Sunken Place practical methods."
    },
    {
      title: "Get Out — Toby Oliver, ACS",
      publisher: "American Society of Cinematographers",
      url: "https://staging.ascmag.com/podcasts/get-out-toby-oliver-acs",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC production discussion supporting Oliver's visual strategy, compact digital camera/lens approach and the transition from naturalistic social space toward overt horror."
    },
    {
      title: "Editor Gregory Plotkin on Working With Jordan Peele on Get Out",
      publisher: "Yahoo Entertainment / Deadline",
      url: "https://www.yahoo.com/entertainment/editor-gregory-plotkin-working-jordan-180847198.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Plotkin describes suspense/comedy timing, longer holds, negative space, performance-first editing, Avid Sunken Place temp work, alternate endings and audience-response context."
    },
    {
      title: "John Rodd Scores Big-Time at C5's Hit Movie Get Out",
      publisher: "Mix Magazine",
      url: "https://www.mixonline.com/the-wire/john-rodd-scores-big-time-atc-150s-hit-movie-get-out-and-kennedy-space-centers-heroes-and-legends-429821",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Trade reporting supporting the compressed score-mix schedule and 5.1-oriented music delivery while leaving the complete final dub topology unresolved."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
