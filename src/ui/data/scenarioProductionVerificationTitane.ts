import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const titaneProductionCaseVerification = {
  scenarioId: "scenario_titane_2021",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Titane is verified as Chapter 19's auteur/festival production case. Cannes records Julia Ducournau's 2021 France-Belgium feature at 108 minutes and as the Palme d'Or winner, with Kazak Productions as the production contact. Ruben Impens SBC and the camera team document an ARRI ALEXA Mini LF / ZEISS Supreme Prime spherical large-format approach, a deliberately saturated and contrasty visual system, detailed scene-by-scene planning of light, angles and colour, selective two-camera use and a rehearsed Ronin-to-Technocrane opening-shot transfer using an electronic magnet. Cinematography World records a forty-day summer-2020 shoot, chiefly on French locations, including an old squat building redressed as the fire station, followed by roughly two weeks of colour grading with Peter Bernaers at M141 in Paris. Ducournau's production testimony establishes Olivier Afonso and Atelier 69 as the practical-prosthetics collaborators, with silicone/latex testing, extensive end-stage prosthetics covering Agathe Rousselle from face to thighs and application/repair demands that materially affected the daily schedule. Her interviews also establish selective digital collaboration with Mac Guff and Martial Vallanchon, including VFX in the final transformation and a nose-breaking gag built from separately photographed actions, prosthetic aftermath and a digital join. Editorial development is similarly source-backed: Ducournau identifies editor Jean-Christophe Bouzy as a long-term collaborator brought into early structural discussion and describes abandoning a conventional three-act framework for a layered form whose music, montage and visual density gradually shed excess. The verified production model is therefore one of authored precision across large-format spherical cinematography, choreographed movement, location transformation, practical prosthetics, performer embodiment, selective digital intervention, structural editing and final grading. Complete camera reports, daily focal-length/exposure/codec/media metadata, full prosthetic recipes/application logs, complete VFX shot/vendor counts, exact grading transforms, department-level production-sound and final-mix metadata, detailed score-recording workflow, financing/recoupment and pandemic safety documentation remain outside the verified layer.",
  sources: [
    {
      title: "TITANE",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/titane/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Festival record supporting 2021, France-Belgium, 108 minutes, Julia Ducournau as director/screenwriter, Kazak Productions and the Palme d'Or context."
    },
    {
      title: "The cinematography of Titane",
      publisher: "British Cinematographer / ZEISS",
      url: "https://britishcinematographer.co.uk/zeiss-talking-cinematography-the-cinematography-of-titane/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Camera-team interview supporting ALEXA large-format/Supreme Prime choices, spherical lensing, selective two-camera work and the rehearsed Ronin-to-Technocrane magnetic handoff."
    },
    {
      title: "Belgian DP Ruben Impens SBC and director Julia Ducournau push the boundaries on 2021's most shocking movie Titane",
      publisher: "Cinematography World",
      url: "https://www.cinematography.world/titane/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Impens interview supporting ALEXA Mini LF, Supreme Primes, planned light/colour, forty shooting days, French locations, fire-station redressing and two weeks of grading with Peter Bernaers at M141."
    },
    {
      title: "Breaking Bodies: Julia Ducournau on Titane",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/112369-breaking-bodies-julia-ducournau-on-titane/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Director interview supporting extensive prosthetic development/application and the layered editorial/music structure that replaced a conventional three-act form."
    },
    {
      title: "TITANE: Julia Ducournau talks one of 2021's most celebrated horror films",
      publisher: "Rue Morgue",
      url: "https://rue-morgue.com/titane-julia-ducournau-talks-one-of-2021s-most-celebrated-horror-films/",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Director interview supporting Olivier Afonso/Atelier 69 as prosthetics collaborators and Mac Guff/Martial Vallanchon as visual-effects collaborators, including final-scene work."
    },
    {
      title: "Julia Ducournau on broken noses, The Macarena and that Palme d'Or mishap",
      publisher: "Time Out",
      url: "https://www.timeout.com/film/julia-ducournau-on-broken-noses-the-macarena-and-that-palme-dor-mishap",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Director interview supporting the nose-breaking effect as two separately photographed actions joined with VFX, with a prosthetic nose used for the aftermath."
    },
    {
      title: "Julia Ducournau on the Transformative Arc of Titane and Empathetic Values of Dark Humor",
      publisher: "The Film Stage",
      url: "https://thefilmstage.com/julia-ducournau-on-the-transformative-arc-of-titane-and-empathetic-values-of-dark-humor/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Director interview supporting Jean-Christophe Bouzy's editor/structure-consultant role during writing and the distinction between consultation and screenplay authorship."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
