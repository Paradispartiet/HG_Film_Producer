import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const siratProductionCaseVerification = {
  scenarioId: "scenario_sirat_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "Sirāt is verified as Chapter 19's next award-priority auteur/festival production case through Festival de Cannes, the Academy, BBFC, Kodak, Film Comment, Dolby Creator Lab, Filmmaker Magazine and production-design reporting. Cannes records the 2025 Jury Prize ex aequo and credits Óliver Laxe/Santiago Fillol, Mauro Herce, Laia Ateca, Cristóbal Fernández, Kangding Ray and Laia Casanovas; the Academy records 2026 nominations for Spain in International Feature and Amanda Villavieja, Laia Casanovas and Yasmina Praderas in Sound. Awards establish priority/reception rather than production method. Runtime provenance is versioned: Cannes lists 120 minutes, BBFC records a 114m12s UK cinema master and a later 114m23s physical/VOD master, so the playable record rounds the BBFC cinema version to 114 minutes while the discrepancy remains unresolved. Kodak's direct Herce account records a published €6.5m budget figure; principal photography between May and June 2024; roughly one month in Aragón/Spain followed by four weeks around Errachidia/Erfoud in Morocco; an abandoned 35mm-anamorphic preference due cost/logistics/optics risk; Super 16 ARRIFLEX 416 cameras, ARRI Zeiss Ultra Primes, 1.85:1 framing, KODAK VISION3 250D 7207 and 500T 7219; Paris processing and 2K scans at TransPerfect Media; grading at Cube Barcelona by Rafa Marmodoro; restrained long-take coverage; Steadicam/handheld/tripod, Black Arm, camera-car arm and crane strategies; available-light day work with bounce/diffusion/negative fill; HMI, Creamsource Vortex, ARRI SkyPanel, Astera Titan and vehicle-practical night lighting; extreme heat/dust, old-vehicle repairs, a physically cut quarry road, selective green screens and opportunistic sandstorm capture. Film Comment independently records Laxe insisting on real truck speed, broken lenses, repeated sequences and lost shooting days. Production-design reporting supports real free-party-community participation and the large speaker-wall system while the case keeps scripted fiction distinct from documentary. Dolby directly identifies Villavieja, Casanovas and Praderas and the immersive/visceral sound goal, with Atmos exhibition where available. Kangding Ray's direct interviews establish unusually early score development, with most of the musical architecture existing before photography and later refinement during picture editing. Complete finance/subsidy/co-production/recoupment, permits, day-by-day schedule, crew/safety/insurance, vehicle, camera/negative/lab, VFX, editorial, production-sound/ADR/Foley/stem, score/session/licensing and festival/cinema/home master-lineage ledgers remain unresolved.",
  sources: [
    {
      title: "SIRÂT",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/sirat/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional festival record supporting the 2025 Jury Prize ex aequo, 120-minute Cannes listing, Spain/France production context and principal credits for direction/writing, cinematography, production design, editing, music and sound."
    },
    {
      title: "The 98th Academy Awards | 2026",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2026",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Institutional award record supporting Spain's International Feature nomination and the Sound nomination for Amanda Villavieja, Laia Casanovas and Yasmina Praderas; awards establish reception, not workflow."
    },
    {
      title: "Sirat",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/sirat-q29sbgvjdglvbjpwwc0xmdmzmjqw",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional version record supporting the UK cinema runtime of 114m12s and later physical-media/VOD runtime of 114m23s, preserving version provenance against the Cannes 120-minute listing."
    },
    {
      title: "KODAK Super 16mm proves a sure-fire winner for DP Mauro Herce AEC on Óliver Laxe's hypnotic and existential desert odyssey 'Sirāt'",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/sirat/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Mauro Herce production account supporting the published €6.5m figure, May-June 2024 Spain/Morocco shoot, 35mm-to-Super-16 decision, ARRIFLEX 416/Ultra Prime/1.85 package, 250D/500T stocks, 2K scan/grade chain, camera movement, lighting, heat/dust, vehicle repairs, quarry road/green-screen work and opportunistic sandstorm capture."
    },
    {
      title: "Interview: Oliver Laxe on Sirât",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-oliver-laxe-on-sirat/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Direct Laxe interview supporting 16mm desert/driving production, insistence on real truck speed, lens breakage, repeated sequences, lost days, sandstorms and the intended integration of image, distorted noise and Kangding Ray's musical world."
    },
    {
      title: "The Sound of Sirât, with Director Óliver Laxe",
      publisher: "Dolby Creator Lab",
      url: "https://www.dolby.com/creator-lab/podcast/sound-sirat-director-oliver-laxe/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct panel with Laxe, sound designer/supervising sound editor Laia Casanovas, re-recording mixer Yasmina Praderas and production sound mixer Amanda Villavieja supporting the immersive, visceral and bodily sound strategy plus Atmos exhibition context."
    },
    {
      title: "Existential Rave: Kangding Ray on Scoring Sirāt",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/132234-interview-composer-kangding-ray-sirat/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Kangding Ray interview supporting more than a year of pre-shoot collaboration, roughly 80 percent of the music existing before photography, a real three-day rave and later score refinement against the edit."
    },
    {
      title: "How Spanish Oscar hopeful 'Sirât' threw the year's hottest rave",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment-arts/awards/story/2025-12-03/sirat-rave-scene-explained",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Production-design reporting supporting Laia Ateca's research with free-party collectives and the large speaker-wall construction used to embed scripted fiction in a credible rave environment."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
