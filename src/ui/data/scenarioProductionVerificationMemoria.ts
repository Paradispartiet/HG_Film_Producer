import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const memoriaProductionCaseVerification = {
  scenarioId: "scenario_memoria_2021",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "Memoria is verified as Chapter 19's auteur/festival case through Cannes institutional records and direct filmmaker, cinematography and sound-team testimony connecting transnational co-production, Colombian physical production, 35mm long-take constraints and a sound-first editorial/post workflow. Cannes records a 136-minute feature, production year 2020 and production countries Colombia, Thailand, United Kingdom, Mexico and France, with Apichatpong Weerasethakul, Sayombhu Mukdeeprom, Lee Chatametikool, Angélica Perea, César López, Akritchalerm Kalayanamitr and Richard Hocks among principal credits. The Chapter 19 candidate remains canonically grouped under 2021, its festival/release year, while the Cannes production-year field is preserved rather than overwritten. Kodak's direct Weerasethakul/Mukdeeprom testimony documents a 40-day Colombia shoot, 1.85:1 framing, 35mm acquisition entirely on KODAK VISION3 500T 5219, one ARRICAM LT, Cooke S4 lenses, a tendency to stay at 50mm or wider, mostly 1000-foot reels, a seven-to-eight-minute handheld take, a reported 230-metre dolly move and a roughly twelve-minute riverbank shot. Kodak also documents natural/fluctuating-light strategy, HMIs and occasional 20K tungsten, and Mukdeeprom's preference to light spaces rather than individual shots. The Thai Film Archive records the director's concern with continuity and film quantity and a roughly 14 minute 50 second roll duration that materially constrained long-take planning. Mukdeeprom's Filmmaker Magazine interview documents a largely Colombian crew, producer Diana Bustamante's local crew assembly, difficult Bogotá/Pijao weather, tunnel access, national-scale dolly-track sourcing, dense-forest camera logistics and repeated physical hand-carry of exposed film while protecting it from airport scanning. Because the interviewer frames the processing destination differently from Mukdeeprom's remembered answer, the exact laboratory route remains unresolved. Filmmaker Magazine's sound-team interview identifies production mixer Raúl Locatelli, Mexico-based supervising sound editor Javier Umpierrez, Thailand-based editor Lee Chatametikool, sound designer Akritchalerm Kalayanamitr and re-recording mixer Richard Hocks. It documents location surround ambiences being developed alongside dailies, a COVID-driven move of the planned final mix from Mexico to Thailand, a 7.1 sound handoff, approximately two weeks of final mixing and delivery of 7.1, 5.1 and Atmos versions. The same testimony explains that the signature bang predated the feature through Fever Room experimentation and required repeated design passes rather than stock-effect selection. BFI/Sight and Sound confirms Apichatpong's unusually sound-centered conception and his treatment of language, ambience and theatrical playback as part of the film's form. These sources do not establish a complete audited budget, exact co-production financing shares, public-support or incentive amounts, insurance, payroll, complete 40-day call sheets, all permits, total negative purchase/wastage, every lens/load/support assignment, full filtration/exposure record, exact development/scan/DI route, complete lighting package, production-sound hardware, dialogue replacement/foley architecture, editorial NLE/storage/versioning, exact sound-track count in each session, music recording/licensing economics, mastering costs or territory-by-territory recoupment. Those remain unresolved.",
  sources: [
    {
      title: "Memoria",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/memoria/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting 136 minutes, 2020 production-year metadata, Colombia/Thailand/UK/Mexico/France country record, principal creative credits and production/co-production contacts."
    },
    {
      title: "Seeing the world through film and Memoria",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/memoria/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Direct Weerasethakul/Mukdeeprom testimony supporting 40 shooting days, 35mm, VISION3 500T 5219, single ARRICAM LT, Cooke S4, 1.85:1, 1000-foot reels, long takes, lighting strategy and theatrical sound emphasis."
    },
    {
      title: "Uncle Boonmee: 10 Years Later — quarantine talk with Apichatpong Weerasethakul",
      publisher: "Thai Film Archive",
      url: "https://fapot.or.th/main/information/article/view/298/1",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct director testimony supporting Colombia as the first non-Thai feature production, 35mm continuity/negative-quantity discipline, approximately 14:50 per roll, long-take planning and natural-light collaboration with Mukdeeprom."
    },
    {
      title: "Even If the Wind Blows It Gives Us Something To Work With: DP Sayombhu Mukdeeprom on Shooting Memoria",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/112726-even-if-the-wind-blows-it-gives-us-something-to-work-with-dp-sayombhu-mukdeeprom-on-shooting-apichatpong-weerasethakuls-memoria/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct DP testimony supporting Colombian crew/local producer practice, scouting, weather adaptation, tunnel and forest logistics, long-dolly track sourcing, space-based lighting and exposed-negative hand-carry/X-ray protection."
    },
    {
      title: "In the Quiet Moments: The Memoria Sound Team of Akritchalerm Kalayanamitr, Richard Hocks and Javier Umpierrez",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/112910-interview-akritchalerm-kalayanamitr-richard-hocks-javier-umpierrez-sound-designer-memoria/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct sound-team testimony supporting Raúl Locatelli location ambience, Mexico/Thailand editorial handoffs, COVID mix relocation, two-week final mix, 7.1/5.1/Atmos delivery and the iterative signature-bang process."
    },
    {
      title: "Apichatpong on Memoria, his odyssey into the soundscapes of Colombia",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/apichatpong-memoria-his-odyssey-into-soundscapes-colombia",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Direct Apichatpong testimony supporting sound-centered authorship, Colombia/language as sonic experience and the intended theatrical relation between sound, space and screen."
    },
    {
      title: "Interview with the Director",
      publisher: "Memoria official film site",
      url: "https://memoriathefilm.com/apichatpong-weerasethakul/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Official film-site interview supporting Colombia's landscapes/memory research, the physical conception of the bang and the relation among sound waves, silence, historical memory and location."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
