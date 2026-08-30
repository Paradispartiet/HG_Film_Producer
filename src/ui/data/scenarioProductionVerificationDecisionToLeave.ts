import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const decisionToLeaveProductionCaseVerification = {
  scenarioId: "scenario_decision_to_leave_2022",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Decision to Leave is verified as Chapter 19's regional/global production case through a source set that joins official Korean and festival records to department-level craft testimony. Festival de Cannes records Park Chan-wook's 2022 Republic of Korea feature at 138 minutes and credits Park and Chung Seo-kyung for screenplay, Kim Ji-yong for cinematography, Ryu Seong-hie for production design, Kim Sang-bum for editing, Cho Young-wuk for music and Kim Suk-won for sound. BFI Southbank production notes identify Moho Film as production company, CJ ENM as presenter, Baek Ji-sun as producer, Ko Dae-seok as co-producer, Shin Sang-yeul as gaffer, Lee Jeon-hyeong as VFX supervisor, 4th Creative Party as VFX company and Jung Gun as production sound mixer. Kim Ji-yong's cinematography interviews document August-November 2020 prep, roughly two months of shot-by-shot storyboarding, a deliberately restricted first-part camera grammar, ARRI ALEXA Mini capture, Cooke anamorphic lenses, a mostly T4-oriented approach, a 76-day shoot completed in March 2021, extensive location work around South Korea with limited Busan Cinema Studios work, and the finale's construction from three Korean beaches. The crucial national-park beach required high tide at sunset, leaving two roughly ten-minute windows; a small floating platform was built so the crane could survive the tide change. Day exteriors were commonly shaped through natural light, negative fill and butterflies, while location nights used practicals and selected LED/HMI tools. The production also planned deliberately impossible viewpoints, including monitor/object perspectives, as part of its surveillance grammar. British Cinematographer documents the wider lens package, single-camera emphasis, location-first strategy, production-design/costume coordination and DI's role in joining the final beaches. VFX Voice records about 580 VFX shots created over roughly six months by Lee Jeon-hyeong and 4th Creative Party, including extensive invisible environmental and evidence-detail work rather than spectacle-only effects. CJ ENM and Korean Film Council records support the film's Korean industrial/distribution context and international circulation. The official source layer establishes 4K, Dolby Atmos / 5.1 presentation and principal post credits, but it does not establish the complete production-sound hardware chain, ADR/foley architecture, mix-stage routing, editorial software/storage system, full camera reports, complete VFX shot database, exact DI transforms, budget, financing shares, insurance, permits, all call sheets, music-recording workflow or distribution economics. Those remain explicitly unresolved rather than inferred.",
  sources: [
    {
      title: "HEOJIL KYOLSHIM (DECISION TO LEAVE)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/heojil-kyolshim/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting the 2022 Republic of Korea production, 138-minute runtime, Competition/Best Director history and principal writing, cinematography, design, editing, music and sound credits."
    },
    {
      title: "Decision to Leave - BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/new%20releases/2022/10/17/decision-to-leave/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional production notes supporting Moho Film/CJ ENM, producer and co-producer credits, gaffer, VFX supervisor/company, editor, production designer, costume/makeup, composer, sound supervisor and production sound mixer."
    },
    {
      title: "Kim Ji-yong / Heojil Kyolshim • Decision To Leave",
      publisher: "Cinematography World",
      url: "https://www.cinematography.world/come-what-may-kim-ji-yong-heojil-kyolshim-decision-to-leave/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Kim Ji-yong interview supporting August-November 2020 prep, two months of shot-by-shot storyboarding, camera-ground rules, ALEXA Mini, Cooke anamorphics, T4-oriented photography, 76 shooting days, nationwide locations, limited Busan stage work, three-beach finale, two short tide windows, floating crane platform and restrained natural-light strategy."
    },
    {
      title: "Kim Ji-yong / Decision to Leave",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/kim-ji-yong-decision-to-leave/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Park Chan-wook and Kim Ji-yong testimony supporting the restricted-first-part camera concept, location-first production, ALEXA Mini and mixed lens package, practical/LED/HMI lighting logic, planned mist/VFX integration, DI-assisted three-location beach construction and color/design coordination."
    },
    {
      title: "DECISION TO LEAVE LEAVES THE VISUAL EFFECTS DECISIONS TO LEE JOEN-HYOUNG",
      publisher: "VFX Voice",
      url: "https://vfxvoice.com/decision-to-leave-leaves-the-visual-effects-decisions-to-lee-joen-hyoung/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Interview with 4th Creative Party CEO/VFX supervisor Lee Joen-hyoung supporting approximately 580 VFX shots over six months and the film's extensive invisible digital mise-en-scène."
    },
    {
      title: "Decision To Leave",
      publisher: "Korean Film Council",
      url: "https://koreanfilm.or.kr/eng/news/newfilm.jsp?mode=VIEW&seq=477",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "National film-agency record supporting the Korean release identity, 138-minute runtime, director/cast and CJ ENM contact/distribution context."
    },
    {
      title: "Leading Entertainment Company CJ ENM Films Broker and Decision To Leave Announced as the Official Selection of the 75th Cannes Film Festival",
      publisher: "CJ ENM",
      url: "https://cjenm.com/en/news/leading-entertainment-company-cj-enm-films--broker-and-decision-to-leave-announced-as-the-official-selection-of-the-75th-cannes-film-festival/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Corporate archive supporting CJ ENM's financing/distribution role and the film's placement within a mature Korean production-distribution company with international festival reach."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
