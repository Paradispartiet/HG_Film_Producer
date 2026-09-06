import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fallenLeavesProductionCaseVerification = {
  scenarioId: "scenario_fallen_leaves_2023",
  status: "verified",
  verifiedAt: "2026-09-06",
  summary: "Fallen Leaves / Kuolleet lehdet / Les Feuilles mortes is verified as a new source-first Chapter 19 Production Case only after branch/PR checks, filename-tree scans and the assembled filmScenarios source showed no pre-existing canonical scenario, Film Study or Production Verification identity under the English, Finnish or French titles. Festival de Cannes locks the film to the 2023 Competition, Jury Prize, Finland, Cannes production year 2023 and 81 minutes, crediting Aki Kaurismäki for direction and screenplay, Timo Salminen for cinematography, Samu Heikkilä for editing, Ville Grönroos for production design and Pietu Korhonen for sound. Physical chronology is kept separate: Yle reported on June 10, 2022 that shooting would begin in the second half of August with Helsinki's Kallio district as its center, so principalPhotographyYear is 2022 rather than being collapsed into Cannes' 2023 production-year field. Cannes, Bufo, The Match Factory and Pandora establish Sputnik Oy and Bufo as the Finnish production base with Pandora Film as the German secondary/co-production partner, and identify Aki Kaurismäki, Misha Jaari, Mark Lwoff and Reinhard Brundig in producer/co-producer roles. The Match Factory records 81 minutes, 1.85:1, DCP and 35 mm formats, Dolby Digital 5.1, Timo Salminen cinematography, Olli Varja lighting, Ville Grönroos set design, Tiina Kaukanen costumes, Samu Heikkilä editing and Pietu Korhonen sound design. ARRI's official 2023 Cannes equipment list identifies Fallen Leaves as ARRI Analog with Ultra Primes and ARRI Fresnels; this is retained at family level and is not expanded into an unsupported exact camera-body, focal-length, stock or lamp inventory. Alma Pöysti's direct production account independently confirms 35mm capture and describes Kaurismäki's one-take preference, with almost the whole film made in one and only take and little conventional rehearsal; this is bounded testimony about the production method, not a claim that every single setup used one take. Finna/KAVI records Finnish Film Foundation production support of EUR 650,000 together with Yle, ZDF/ARTE, ARTE G.E.I.E., FFA and Film- und Medienstiftung NRW participation. That support record is not treated as total budget or as evidence of exact financing shares. The locked sources do not establish exact ARRI body, camera body count, film stock/emulsion, laboratory, magazine/loading system, filtration, exposure index, complete lighting/grip package, production-sound recorder/microphone/wireless chain, editorial software/storage/proxy/conform, VFX shot census/vendors/techniques, total negative cost, financing shares, recoupment, insurance, permits, color-management transforms, negative/DI pathway or DCP/audio mastering lineage, all of which remain unresolved rather than inferred.",
  sources: [
    {
      title: "KUOLLEET LEHDET (FALLEN LEAVES)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/kuolleet-lehdet/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting 2023 Competition, Jury Prize, Finland, Cannes production year 2023, 81-minute runtime, Aki Kaurismäki direction/screenplay, Timo Salminen cinematography, Samu Heikkilä editing, Ville Grönroos production design, Pietu Korhonen sound, and Sputnik/Bufo/Pandora production contacts."
    },
    {
      title: "The 76th Festival de Cannes winners' list",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/the-76th-festival-de-cannes-winners-list/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official awards record supporting Fallen Leaves / Kuolleet lehdet as the 2023 Jury Prize obligation."
    },
    {
      title: "Aki Kaurismäki työstää uutta elokuvaa – päärooleissa nähdään Alma Pöysti ja Jussi Vatanen",
      publisher: "Yle",
      url: "https://yle.fi/a/3-12487604",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "June 10, 2022 production report supporting the working-class romantic premise and the plan to begin shooting in the second half of August 2022 with Helsinki's Kallio district as the production center."
    },
    {
      title: "Fallen Leaves",
      publisher: "Bufo",
      url: "https://bufo.fi/films/fallen-leaves/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer record supporting Finnish title, 2023 production year, Finland/Germany production countries, Aki Kaurismäki direction/writing, Timo Salminen cinematography, Ville Grönroos set design, Tiina Kaukanen costumes, Samu Heikkilä editing, Pietu Korhonen sound design, and the producer roles of Kaurismäki, Misha Jaari and Mark Lwoff."
    },
    {
      title: "Fallen Leaves",
      publisher: "The Match Factory",
      url: "https://www.the-match-factory.com/catalogue/films/fallen-leaves.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "International sales/production record supporting 81 minutes, 1.85:1, DCP and 35 mm formats, Dolby Digital 5.1, production companies, producers, Timo Salminen cinematography, Olli Varja lighting, Ville Grönroos set design, Tiina Kaukanen costumes, Samu Heikkilä editing and Pietu Korhonen sound design."
    },
    {
      title: "Festival de Cannes productions 2023 shot with ARRI equipment",
      publisher: "ARRI",
      url: "https://www.arri.com/resource/blob/322248/c73bcfde53aeec99162df0696e1a65ea/2023-05-26a-arri-cannes-filmlist-preview-data.pdf",
      sourceKind: "manufacturer_case_study",
      supports: ["overall", "cinematography"],
      note: "ARRI's official Cannes equipment list identifies Fallen Leaves / Timo Salminen with ARRI Analog, Ultra Primes and ARRI Fresnels. It does not identify the exact camera body, stock, focal-length set or full lighting inventory."
    },
    {
      title: "Kuolleet lehdet",
      publisher: "KAVI / Finna",
      url: "https://www.finna.fi/Record/kavi.elonet_elokuva_1635429",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Finnish institutional catalogue record supporting EUR 650,000 Finnish Film Foundation production support plus Yle, ZDF/ARTE, ARTE G.E.I.E., FFA and Film- und Medienstiftung NRW participation, without establishing total budget or exact financing shares."
    },
    {
      title: "Interview with Alma Pöysti about Fallen Leaves",
      publisher: "neol.jp",
      url: "https://www.neol.jp/movie-2/125285/2/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Alma Pöysti set testimony supporting 35mm capture, Kaurismäki's one-take preference, the statement that almost the whole movie was made in one and only take, limited rehearsal and the resulting need for simultaneous precision across performance, light, props and camera."
    },
    {
      title: "Fallen Leaves",
      publisher: "Pandora Film Produktion",
      url: "https://www.pandorafilm.com/filmography/fallen-leaves.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "German co-producer record supporting Finland/Germany production, Sputnik/Bufo/Pandora structure, 81 minutes, 2K DCP and 35mm, 1:1.85, 5.1 sound, Finland shooting location and the credited producer/craft team."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
