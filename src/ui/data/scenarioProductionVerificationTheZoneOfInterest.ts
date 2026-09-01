import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theZoneOfInterestProductionCaseVerification = {
  scenarioId: "scenario_the_zone_of_interest_2023",
  status: "verified",
  verifiedAt: "2026-09-01",
  summary: "The Zone of Interest is verified as an award-priority Chapter 19 auteur/festival production case through Festival de Cannes and Academy institutional records plus direct testimony from cinematographer Lukasz Zal, editor Paul Watts, production designer Chris Oddy, sound designer Johnnie Burn, production mixer Tarn Willers and colorist Gareth Bishop. Cannes establishes the 106-minute film, Jonathan Glazer as director/screenwriter, Zal/Oddy/Watts/Burn/Mica Levi as principal craft leads, and the 2023 Grand Prix plus CST Award; the Academy establishes the later International Feature Film and Sound wins. Those awards establish reception and priority, not undocumented workflow. Zal documents the central production method: a reconstructed Hoss house near Auschwitz wired for up to ten simultaneously controlled hidden cameras, with remote focus/playback and crew watching outside the live performance space. Sony VENICE with Rialto extensions and compact Leitz M 0.8 lenses supported the unobtrusive network; practical/available light, ISO 3200 operation and day/night LUT testing supported the crisp 21st-century image. A separate FLIR thermal-imaging system was used for the black-and-white night passages, with roughly 1K source resolution and later AI-assisted upscaling; this remains sequence-specific and is not generalized to the main capture format. Oddy documents repeated research visits to the real Hoss house and the need to reconstruct both historical geography and a technically penetrable set capable of concealing camera/control infrastructure. Burn documents months of Auschwitz archival and witness research, a roughly 600-page sound bible and a deliberate two-film concept: domestic life visible in the house versus atrocities constructed as historically and geographically plausible off-screen sound. Tarn Willers documents radio microphones on performers, plant microphones throughout house/garden and external monitoring because boom operators and ordinary sound crews could not occupy the live house. Paul Watts documents multi-camera events captured simultaneously rather than conventional coverage, enabling unusually fine editorial calibration; British Cinematographer records an edit extending for almost two years. A24 testimony establishes concurrent interaction among edit, VFX, sound design and Mica Levi's music rather than a simple lock-and-handoff post chain. Gareth Bishop documents a naturalistic Baselight grade that avoided routine face shaping, vignettes and nostalgic period treatment while using sharpening to preserve the intended pin-sharp modern image. Current locked sources do not establish an audited total budget, complete financing percentages, full shooting-day ledger, exact camera count per scene, full lens/lighting/control topology, exact thermal-camera configuration, complete VFX vendor/shot ledger, full edit software/storage/version architecture, wireless frequency plan, all field-recording locations, final stem routing or complete score-session documentation; those remain unresolved.",
  sources: [
    {
      title: "The Zone of Interest",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/the-zone-of-interest/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional film record supporting 106 minutes, Jonathan Glazer, principal craft credits, 2023 Grand Prix and CST recognition."
    },
    {
      title: "The 96th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2024",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Institutional awards record supporting International Feature Film and Sound wins; used for reception context only."
    },
    {
      title: "Lukasz Zal PSC / The Zone of Interest",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/lukasz-zal-psc-the-zone-of-interest/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall", "editing"],
      note: "Direct DP testimony supporting up-to-ten hidden cameras, hardwired remote focus/playback, Sony VENICE/Rialto, Leitz M 0.8, ISO 3200 practical-light work, day/night LUTs, FLIR thermal imaging and the extended edit context."
    },
    {
      title: "A Note from The Zone of Interest Creative Team",
      publisher: "A24",
      url: "https://a24films.com/notes/2024/02/jonathan-glazer-collaborator-letter",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound", "cinematography"],
      note: "Direct Paul Watts, Chris Oddy and Johnnie Burn testimony supporting multi-camera editorial calibration, concurrent edit/VFX/sound/music development, historical house research and the archival sound-research method."
    },
    {
      title: "Director Jonathan Glazer and the Sound of The Zone of Interest",
      publisher: "Dolby Creator Lab",
      url: "https://www.dolby.com/creator-lab/podcast/zone-of-interest/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall"],
      note: "Direct Glazer/producer James Wilson/Johnnie Burn discussion supporting the film's hear-rather-than-see construction and sound's central production role."
    },
    {
      title: "Sounds that Cannot Be Unheard: Sound Designer Johnnie Burn on The Zone of Interest",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/123965-interview-sound-designer-johnnie-burn-the-zone-of-interest/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall"],
      note: "Direct Burn testimony supporting year-scale historical research, a roughly 600-page sound bible, geographic sound logic and construction of the camp's industrial rumble."
    },
    {
      title: "Production Mixer Details The Zone of Interest's Sound Challenges",
      publisher: "Mixonline",
      url: "https://www.mixonline.com/post-and-broadcast/production-mixer-details-the-zone-of-interests-sound-challenges",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall"],
      note: "Direct Tarn Willers testimony supporting radio mics, plant mics, no boom operators in the live house, remote receiving/monitoring and RF reliability across house and garden."
    },
    {
      title: "The Zone of Interest Sound Designer Johnnie Burn on Creating the Soundscape From Hell",
      publisher: "Motion Picture Association – The Credits",
      url: "https://www.motionpictures.org/2024/01/the-zone-of-interest-sound-designer-johnnie-burn-on-creating-the-soundscape-from-hell/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "overall", "production_design"],
      note: "Direct Burn testimony supporting the replica house near Auschwitz, two-film sound concept, long hidden-camera takes and the historically researched off-screen camp layer."
    },
    {
      title: "Crafting authenticity through a naturalistic grade on The Zone of Interest",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/crafting-authenticity-through-a-naturalistic-grade-on-the-zone-of-interest/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "editing", "overall"],
      note: "Direct Gareth Bishop finishing testimony supporting available/practical-light preservation, minimal image shaping, Baselight sharpening and multi-camera matching."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
