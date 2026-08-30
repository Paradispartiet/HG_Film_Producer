import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const collectiveProductionCaseVerification = {
  scenarioId: "scenario_collective_2020",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Collective is verified as Chapter 19's nonfiction/hybrid production case under the balanced-production scheduler. The European Film Academy records a 109-minute Romania/Luxembourg film under the original title Colectiv, directed and photographed by Alexander Nanau, scripted by Antoaneta Opris and Nanau, edited by Nanau, George Cragg and Dana Bunescu, and explicitly described by Nanau as observational filmmaking with no interviews and no voice-over. IDFA independently records the 2019 festival object at 109 minutes, Nanau and Bianca Oana for production, HBO Europe and Samsa Film for co-production, Nanau for cinematography, Nanau/Cragg/Bunescu for editing, and Michel Schillings, Mihai Grecea and Angelo Dos Santos for sound. Magnolia's official production notes state that the project discussion began in November 2015, filming ran for 14 months, editing for another 18 months, and the whole transnational co-production involved about 60 people from several European countries. BFI's interview with Nanau documents a non-intervention method in which he does not ask people to perform or reenact actions, and describes trust as a long-duration production relationship that lets subjects become less aware of the camera over time. Interviews and reporting support an unusually small field presence, often Nanau with one camera and at times one sound collaborator, because newsroom and ministry access depended on low disruption. Reverse Shot documents Nanau's adaptive sound approach: beginning with a recorder placed in the room and a camera boom where necessary, adding body microphones only after subjects became comfortable, and working closely with Colectiv survivor and filmmaker Mihai Grecea as a reactive sound collaborator. Film Inquiry documents a title-specific footage-security response under perceived surveillance risk: every evening the production copied material to four separate destinations, dispersed the copies with different people and periodically moved material outside Romania. The production also incorporates pre-existing footage of the Colectiv fire; that archive/source layer must remain distinct from Nanau's later observational photography and requires separate provenance, rights and harm analysis. Filmmaker Magazine and Hyperallergic document the long editorial workflow: Nanau first edited alone for months, George Cragg then performed a short structural pass that could radically reshuffle story arcs, Nanau resumed editing, and Dana Bunescu later helped remove ballast and consolidate the final film. Cineuropa documents production by Alexander Nanau Production, Samsa Film and HBO Europe and support from Romanian Film Centre, Film Fund Luxembourg, Sundance Documentary Fund and participating broadcasters. Exact budget and financing shares, participant releases and access agreements, newsroom confidentiality protocols, legal-review memoranda, insurance, complete shoot calendar, camera body/lens/codec/frame-rate settings, exact microphone/recorder package, encryption implementation, all backup locations, complete archive-rights chain, translation/subtitle workflow, edit software/version, storage and assistant-editor topology, color pipeline, mix chain and distribution contracts remain outside the verified layer.",
  sources: [
    {
      title: "COLLECTIVE",
      publisher: "European Film Academy",
      url: "https://vod.europeanfilmacademy.org/videos/collective",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record supporting 109-minute runtime, Romania/Luxembourg production countries, principal credits and Nanau's explicit observational method with no interviews and no voice-over."
    },
    {
      title: "Collective",
      publisher: "IDFA",
      url: "https://www.idfa.nl/en/film/6cb9b849-ad1c-470a-9d4c-5eb7de45fa5b/collective/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Documentary-festival archive supporting 2019 chronology, 109-minute runtime, production/co-production entities and named cinematography, editing and sound credits."
    },
    {
      title: "Collective - Complete Press Kit and Production Notes",
      publisher: "Magnolia Pictures",
      url: "https://magpictures.com/resources/presskits/COLLECTIVE/COLLECTIVEfinalnotes.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official distributor production notes supporting November-2015 project development, 14 months of shooting, 18 months of editing and a roughly 60-person multi-country co-production."
    },
    {
      title: "Incompetence was killing the victims: Alexander Nanau on his health-service expose Collective",
      publisher: "BFI / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/alexander-nanau-collective-expose-romanian-nightclub-fire-health-service-corruption",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Nanau interview supporting non-intervention, long-term trust, observational character access, the film's three-part evolving structure and the separation of documentary observation from manufactured action."
    },
    {
      title: "Interviews: Alexander Nanau on Collective",
      publisher: "Reverse Shot / Museum of the Moving Image",
      url: "https://www.reverseshot.org/interviews/entry/2731/collective_nanau",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Nanau interview supporting minimal field presence, room recorder/camera-boom strategy, gradual use of body microphones and Mihai Grecea's close reactive sound collaboration."
    },
    {
      title: "Incendiary: Director Alexander Nanau on His Explosive Investigative Documentary, Collective",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/109368-incendiary/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Filmmaker interview supporting Nanau's long self-edit, George Cragg's short structural intervention, return to solo editing and Dana Bunescu's later consolidation work."
    },
    {
      title: "DXFF2020: Interview with Collective director Alexander Nanau",
      publisher: "Film Inquiry",
      url: "https://www.filminquiry.com/alexander-nanau-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Nanau interview supporting title-specific security planning under perceived surveillance risk: four nightly footage copies, physical dispersion and periodic movement of material outside the country."
    },
    {
      title: "Collective (Colectiv)",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/film/376616/",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "European industry record supporting core production/co-production entities, editors, music and public/broadcaster backing including Romanian Film Centre, Film Fund Luxembourg and Sundance Documentary Fund."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
