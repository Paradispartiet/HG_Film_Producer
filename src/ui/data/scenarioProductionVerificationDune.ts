import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const duneProductionCaseVerification = {
  scenarioId: "scenario_dune_2021",
  status: "verified",
  verifiedAt: "2026-08-29",
  summary: "Dune is verified as the fourth Chapter 19 Production Case through an institutional credit/runtime anchor and title-specific craft testimony. Venice records Denis Villeneuve as director, Jon Spaihts/Villeneuve/Eric Roth as screenwriters, Greig Fraser as cinematographer, Patrice Vermette as production designer, Jacqueline West and Bob Morgan as costume designers, Hans Zimmer as composer, Mark Mangini and Theo Green in supervising sound, Paul Lambert in visual effects and a 155-minute running time. ARRI documents ALEXA LF capture with Panavision Ultra Vista and H-series large-format lenses plus later ALEXA Mini LF prototype use. American Cinematographer documents the hybrid FotoKem finish: a timed digital master was laser-recorded to Kodak Vision3 5254 DI film stock, scanned back to digital and finished with final grading touches, so film is a finishing medium here rather than camera-negative provenance. Vermette's production-design account supports a February 2018 start and roughly 125 to 130 illustrations after seven months functioning as a visual bible/cookbook. DNEG/Foundry reporting documents practical foundations for VFX, including helicopter reference for ornithopters, practical flames as lighting/reflection reference, sand-colored screens on Arrakis and Nuke-based compositing within DNEG's work. Joe Walker's editorial testimony supports an on-set Budapest start, later Los Angeles work and a pandemic-forced remote-post transition, plus active cross-talk with sound and music. Exact budget allocations, production-company shares, department headcounts, complete camera/lens and filtration ledgers, per-shot exposure, full vendor shot counts, whole-film software inventory, proprietary compositing infrastructure, unsourced DI parameters, recording chains, edit-system topology and final mix routing remain outside the verified layer.",
  sources: [
    {
      title: "Dune",
      publisher: "La Biennale di Venezia",
      url: "https://www.labiennale.org/en/cinema/2021/lineup/out-competition/dune",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional festival record supporting the 155-minute runtime, director, screenplay team, cinematographer, production designer, costume designers, music/sound/VFX credits and multinational production context."
    },
    {
      title: "ARRI ALEXA Mini LF camera ships and inspires cinematographers worldwide",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-alexa-mini-lf-camera-ships-and-inspires-cinematographers-worldwide",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "ARRI's production record documents Dune as primarily shot with ALEXA LF and Panavision Ultra Vista/H-series large-format lenses, with increasing ALEXA Mini LF prototype use late in production including aerial desert work."
    },
    {
      title: "Dune: Part One — Hybrid Finishing: Digital to Film (and Back)",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/dune-hybrid-finishing-digital-to-film-and-back/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Greig Fraser and FotoKem testimony documents the digital-versus-film testing and the final hybrid finishing path: timed digital master, laser film-out to Kodak Vision3 5254 DI stock, scan-back and final grading touches."
    },
    {
      title: "How production designer Patrice Vermette built the world of Dune",
      publisher: "Wix Studio",
      url: "https://www.wix.com/studio/blog/dune-production-designer-patrice-vermette",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Vermette's first-person account supports a February 2018 design start and a long preproduction process in which roughly 125–130 illustrations after seven months formed a visual bible/cookbook for the wider team."
    },
    {
      title: "How DNEG created the award-winning VFX of Dune",
      publisher: "Foundry",
      url: "https://www.foundry.com/insights/film-tv/how-dneg-created-vfx-of-dune",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "DNEG compositing/DFX testimony documents practical foundations for VFX, helicopter/ornithopter reference, practical fire reference, sandscreens, DNEG's Nuke compositing workflow, deep-data demands and selected shield-effect techniques."
    },
    {
      title: "Art of the Cut: Behind the Scenes of Dune with Editor Joe Walker, ACE",
      publisher: "Frame.io",
      url: "https://blog.frame.io/2021/10/27/art-of-the-cut-dune-joe-walker/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Walker documents editing beginning in Budapest/on set, continuing in Los Angeles, then shifting to distributed remote collaboration during the pandemic; he also describes iterative cross-talk among editorial, sound and music."
    },
    {
      title: "Designing Dune's Extraordinary Sound, with Mark Mangini and Theo Green",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/dunes-extraordinary-sound-a-sound-effect-podcast-17/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Long-form interview with supervising sound editors/sound designers Mangini and Green supporting treatment of the film's sonic world as a title-specific authored system without licensing unsupported recording-chain or final-mix details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
