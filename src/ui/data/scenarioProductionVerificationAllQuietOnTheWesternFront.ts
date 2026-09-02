import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const allQuietOnTheWesternFrontProductionCaseVerification = {
  scenarioId: "scenario_all_quiet_on_the_western_front_2022",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "All Quiet on the Western Front is verified as an award-priority Chapter 19 production case through BAFTA and BBFC institutional records, ARRI first-party technical documentation, Netflix production documentation and direct craft testimony from cinematography, sound, editing, makeup and VFX personnel. BAFTA establishes the film as the 2023 Best Film winner; that award is used only for priority and reception, not as workflow evidence. BBFC records a 147m15s 2022 cinema version and a later 148m48s VOD version, so the playable case uses 147 minutes while preserving the version boundary. ARRI documents James Friend ASC BSC shooting mainly on ALEXA 65 and ALEXA Mini LF with DNA and Prime 65 S lenses, supported by ARRI Rental Prague, Orbiter/SkyPanel lighting and the HEXATRON all-terrain crane vehicle. Netflix documents Christian Goldbeck and Edward Berger spending roughly two months planning the battlefield/trench layout, performer bootcamp under heavy period gear, multiple distress states for Paul Baeumer's uniform, roughly 800-900 extra costumes and makeup continuity built around distinct mud/blood/injury states. Production sound mixer Viktor Prasil and supervising sound editor Frank Kruse document unusually extensive preplanned production-sound capture: helmet radio mics, dedicated recorder/microphone packages, acoustic workarounds, more than 40 GB of edited mono/stereo/five-channel material and eight-plus hours of wild tracks in overlapping descriptions. Kruse and Markus Stemler describe a subjective sound-design strategy built from production recordings plus designed layers rather than wholesale replacement. Frank Petzold documents practical/digital VFX integration, including background aircraft and the tank-over-trench combination of photographed A/B elements with digital corrections. Editor Sven Budelmann documents a documentary-like realism, an opening ten-to-fifteen-minute tonal contract and close interaction with Volker Bertelmann's score. Current locked sources do not establish a single audited final negative cost, complete financing waterfall, exact total shoot-day count, exhaustive crew census, full camera/lens/light allocation, complete stunt/SFX paperwork, complete costume or makeup ledger, complete VFX shot/vendor ledger, full edit-system/version history, exact per-scene production-sound channel map, complete ADR/Foley/premix/stem architecture, complete score-session ledger or distribution recoupment; those remain unresolved.",
  sources: [
    {
      title: "Film Awards 2023 Results",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film?award-year=2023",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Institutional award record establishing All Quiet on the Western Front as 2023 Best Film winner and recording its major craft wins. Awards establish priority/reception, not production method."
    },
    {
      title: "All Quiet On The Western Front",
      publisher: "BBFC",
      url: "https://www.bbfc.co.uk/release/all-quiet-on-the-western-front-q29sbgvjdglvbjpwwc0xmda3njiw",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional version record supporting the 147m15s 2022 cinema classification and later 148m48s VOD classification."
    },
    {
      title: "Shot on ARRI equipment and serviced by ARRI Rental, All Quiet on the Western Front wins the Oscar for Cinematography",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-cameras-lenses-and-lighting-shine-behind-2023-oscar-winners/shot-on-arri-equipment-and-serviced-by-arri-rental-all-quiet-on-312722",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "First-party technical record supporting ALEXA 65/ALEXA Mini LF, DNA and Prime 65 S lenses, ARRI Rental support, Orbiter/SkyPanel lighting, HEXATRON and Friend's account of large format inside confined trenches."
    },
    {
      title: "How was All Quiet on The Western Front Made?",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/articles/making-of-all-quiet-on-the-western-front-bts",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Production-facing making-of record supporting roughly two months of battlefield layout planning, performer bootcamp and gear load, costume quantities/distress states, mud continuity and large-extra physical production."
    },
    {
      title: "Oscar-Nominated Sound Designer Frank Kruse Makes Some Noise on All Quiet on the Western Front",
      publisher: "The Credits / Motion Picture Association",
      url: "https://www.motionpictures.org/2023/03/oscar-nominated-sound-designer-frank-kruse-makes-some-noise-on-all-quiet-on-the-western-front/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Direct Kruse testimony supporting pre-shoot wild-track planning, eight-plus hours of production wild tracks, multiple character mics, production recordings as a base layer, subjective battlefield design and sound/music differentiation."
    },
    {
      title: "Filmmaking: Netflix's All Quiet on the Western Front",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2023/January-February-2023/Filmmaking-Netflixs-I-All-Quiet-on-the-Western-F.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Direct production-sound and post testimony supporting Viktor Prasil's recorder/microphone package, helmet mics, rubber-sole and acoustic-control workarounds, large wild-track capture and the sound team's layered tank strategy."
    },
    {
      title: "Feature Film Visual Effects on a Global Scale",
      publisher: "VFX Voice",
      url: "https://vfxvoice.com/feature-film-visual-effects-on-a-global-scale/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Frank Petzold testimony supporting background-aircraft augmentation, photographed A/B elements for the tank-over-trench shot and selective digital corrections within a practical-first VFX strategy."
    },
    {
      title: "All Quiet on the Western Front Editor Sven Budelmann on Cutting the Authentically German Take on World War I",
      publisher: "Awards Daily",
      url: "https://www.awardsdaily.com/2022/12/14/all-quiet-on-the-western-front-editor-sven-budelmann-on-cutting-the-authentically-german-take-on-world-war-i/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Budelmann testimony supporting documentary-like realism, the opening tonal contract, controlled pacing and collaboration with Volker Bertelmann's score."
    },
    {
      title: "Oscar-Nominated Makeup & Hair Designer Heike Merker Paints With Mud & Blood in All Quiet on the Western Front",
      publisher: "The Credits / Motion Picture Association",
      url: "https://www.motionpictures.org/2023/03/oscar-nominated-makeup-hair-designer-heike-merker-paints-with-mud-blood-in-all-quiet-on-the-western-front/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Direct Merker testimony supporting research-led scene breakdowns and continuity of mud, blood, cold, injury and physical deterioration."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
