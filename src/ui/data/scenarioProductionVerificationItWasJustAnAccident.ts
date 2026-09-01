import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const itWasJustAnAccidentProductionCaseVerification = {
  scenarioId: "scenario_it_was_just_an_accident_2025",
  status: "verified",
  verifiedAt: "2026-09-01",
  summary: "It Was Just an Accident is verified as an award-priority Chapter 19 auteur/festival production case through Festival de Cannes and European Film Academy institutional records plus direct testimony from director Jafar Panahi, cinematographer Amin Jafari and editor Amir Etminan. Cannes establishes Panahi's 2025 Palme d'Or, Iran-France-Luxembourg production countries, Panahi/Jafari/Leila Naghdi craft credits and a 105-minute current listing; EFA and production-facing materials record approximately 102 minutes, so the runtime variance remains explicit. Awards establish significance, not workflow. Jafari directly states that the film was made without official permits with a tiny crew and a low-profile production method built around safety, mobility and physical invisibility. He documents RED Komodo with Samyang lenses as the principal camera system and ARRI Alexa Mini with Ultra Primes as an opening-sequence exception. He also documents a compact battery-powered lighting package built around Astera Helios tubes plus two or three portable softboxes, extensive natural/available light, and the car's rear lights as the principal visible source in the prolonged nighttime interrogation sequence. Panahi explains that the opening road shot could not be photographed conventionally on public streets because a larger process vehicle and visible camera rig risked police attention; it was instead created in a studio with multiple image components combined into an apparently continuous movement. Jafari documents the quiet east-Tehran interrogation location, rehearsal-led discovery of the final mise-en-scene, defined actor movement zones and a long largely static eye-level take. Editor Amir Etminan documents editing during photography, immediate take feedback, a mobile DIT/proxy workflow in his car using a small MacBook Air and SSDs, nightly transfer/backup/proxy generation, and his 'invisible editing' philosophy. He also documents constant collaboration with cinematography and production sound from the shoot onward. CineMontage further records the car as DIT/wardrobe/makeup/prop support, daily camera/sound card handling and the compact take-approval loop among Panahi, editor, cinematographer and sound recordist. EFA credits Panahi's screenplay collaboration with Nader Saeivar, Shadmehr Rastin and Mehdi Mahmoudian and documents the Iran-France-Luxembourg producer/company structure and principal sound/VFX credits. Panahi states that Mahmoudian's prison and human-rights experience informed dialogue and judicial detail and that he was brought to the difficult night shoot after an earlier attempt failed. Current locked sources do not establish an audited final budget, complete financing percentages, total crew census, exact shoot-day count, complete camera/codec/media or lighting inventories, all permit/security procedures, full VFX shot/vendor ledger, complete edit software/version history, full production-sound microphone/channel plan, ADR/Foley/stem/mix architecture, music-session documentation or distribution economics; those remain unresolved.",
  sources: [
    {
      title: "Un simple accident",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/un-simple-accident/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record supporting 2025 Palme d'Or, 105-minute listing, Iran-France-Luxembourg countries and Panahi/Jafari/Naghdi principal credits."
    },
    {
      title: "It Was Just an Accident",
      publisher: "European Film Academy",
      url: "https://vod.europeanfilmacademy.org/videos/it-was-just-an-accident",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound", "editing"],
      note: "Institutional craft/production record supporting approximately 102 minutes, screenplay collaborators, producers/companies, editor, sound team and VFX credits."
    },
    {
      title: "Amin Jafari / It Was Just an Accident",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/amin-jafari-it-was-just-an-accident/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall", "editing"],
      note: "Direct DP testimony supporting no-permit/tiny-crew operation, RED Komodo + Samyang principal capture, Alexa Mini + Ultra Primes opening exception, compact battery lighting, east-Tehran location and long-take performance method."
    },
    {
      title: "Notes on It Was Just an Accident",
      publisher: "Definition Magazine",
      url: "https://definitionmagazine.com/features/notes-on-it-was-just-an-accident/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall"],
      note: "Direct Jafari account supporting production without official permits, tiny crew, real-location realism and stripped-down low-profile shooting as both necessity and visual method."
    },
    {
      title: "We Should Narrate Exactly What We See: Jafar Panahi on It Was Just an Accident",
      publisher: "The Film Stage",
      url: "https://thefilmstage.com/we-should-narrate-exactly-what-we-see-jafar-panahi-on-it-was-just-an-accident/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall"],
      note: "Direct Panahi testimony supporting the opening studio/composite workaround, police-visibility constraint and natural/available-light philosophy."
    },
    {
      title: "My Method is Invisible Editing: Editor Amir Etminan on It Was Just an Accident",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/132619-interview-editor-amir-etminan-it-was-just-an-accident/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "overall", "sound"],
      note: "Direct editor testimony supporting on-set collaboration, minimal coverage decisions, invisible editing and the extended unbroken interrogation sequence."
    },
    {
      title: "Courage & Conviction: Editor Amir Etminan on It Was Just an Accident",
      publisher: "CineMontage",
      url: "https://cinemontage.org/courage-conviction-neither-police-interrogation-nor-tech-limitations-could-stop-the-editor-of-the-oscar-nominated-iranian-film-it-was-just-an-accident/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "overall", "sound"],
      note: "Direct Etminan account supporting car-based DIT, MacBook Air/SSD proxy creation, daily backup, parallel editing and take approval with cinematographer and sound recordist."
    },
    {
      title: "It Was Just an Accident co-writer Mehdi Mahmoudian",
      publisher: "Variety Australia",
      url: "https://au.variety.com/2026/film/news/it-was-just-an-accident-co-writer-arrested-iran-32570/",
      sourceKind: "filmmaker_interview",
      supports: ["screenplay", "overall"],
      note: "Panahi's direct statement supporting Mahmoudian's prison/judicial consultation and his contribution to the difficult nighttime interrogation shoot."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
