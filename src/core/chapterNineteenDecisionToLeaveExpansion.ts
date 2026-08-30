import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenDecisionToLeaveExpansionDefinitions = [
  {
    id: "scenario_decision_to_leave_2022",
    title: "Decision to Leave",
    originalTitle: "Heojil Kyolshim",
    aliases: ["Decision to Leave", "Heojil Kyolshim", "Heojil Gyeolsim"],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 138,
    directors: ["Park Chan-wook"],
    genres: ["Crime", "Drama", "Mystery", "Romance", "Thriller"],
    sourceId: "festival_de_cannes_decision_to_leave_2022",
    sourceUrl: "https://www.festival-cannes.com/en/f/heojil-kyolshim/",
    scenarioType: "regional_global_south_korean_industry_police_procedural_romance_moho_film_cj_enm_korean_chinese_language_two_month_storyboard_shot_by_shot_august_november_2020_prep_alexa_mini_cooke_anamorphic_2_39_1_location_heavy_76_day_shoot_busan_cinema_studios_three_beach_finale_tide_window_crane_float_platform_natural_light_negative_fill_hidden_leds_bodycam_pov_object_camera_580_vfx_shots_six_month_vfx_4th_creative_party_digital_mise_en_scene_4k_dolby_atmos_5_1_di_colorist_jin_young_park_2022",
    premise: "Build Decision to Leave as Chapter 19's regional/global production case by treating Park Chan-wook's film as a mature South Korean industrial system rather than reducing it to auteur reputation or Cannes recognition. Festival de Cannes records the 2022 Republic of Korea feature at 138 minutes, directed and co-written by Park Chan-wook with Chung Seo-kyung, photographed by Kim Ji-yong, designed by Ryu Seong-hie, edited by Kim Sang-bum, scored by Cho Young-wuk and supervised for sound by Kim Suk-won. The official international press kit identifies Moho Film as production company, CJ ENM as presenter and international sales company, Korean and Chinese as the film's languages, 2.39:1 as the screen ratio, and 4K with Dolby Atmos / 5.1 as delivery formats. BFI production notes additionally identify producer Baek Ji-sun, co-producer Ko Dae-seok, gaffer Shin Sang-yeul, visual-effects supervisor Lee Jeon-hyeong, 4th Creative Party as VFX company and Jung Gun as production sound mixer. Park and Chung describe the screenplay's genesis as the merger of two ideas: Park's long-standing attachment to the Korean song The Mist and his desire for a gentle, polite detective influenced by the Martin Beck novels. Chung proposed making the female lead Chinese in hopes of casting Tang Wei, so language, translation and outsider status belong to the authored premise rather than being incidental casting trivia. Kim Ji-yong documents pre-production from August to November 2020, including two full months of shot-by-shot storyboarding and visual ground rules. The first part deliberately restricts camera movement except where needed, while handheld POV and later release of those restrictions participate in the relationship's changing perspective. Kim chose the ARRI ALEXA Mini after testing lenses and paired it primarily with Cooke anamorphic lenses, generally around T4.0 while selectively opening wider for softer close-ups. The production wrapped a 76-day shoot in March 2021. Most work was on locations across South Korea, with limited studio work at Busan Cinema Studios, so the player must model travel, geography and continuity as industrial constraints rather than treating South Korea as one interchangeable backlot. The finale is the clearest example: its final geography combines three Korean beaches hundreds of kilometres apart. The most time-critical beach was in a national park and needed high tide at sunset; Kim describes high tide occurring for only two days every three months, giving the crew two roughly ten-minute windows. A crane could not simply remain on the beach as the tide changed, so the team built a small floating platform and recovered it rapidly. Lighting strategy was intentionally restrained: day exteriors often used natural light controlled through negative fill or butterflies, with PAR HMIs only for punch; day interiors hid LEDs with production-design collaboration; night exterior work used portable LED systems, including ARRI SkyPanel 360 units, Astera Titan Tubes and a large soft source for the snowy mountain sequence. A rooftop chase, shot over three days, used BodyCam and modified practical street lighting to place the viewer inside the pursuit without turning the sequence into generic spectacle. Park and Kim also planned technically impossible or non-naturalistic perspectives—inside a computer monitor, from a dead person's point of view and through other inanimate-object viewpoints—to make surveillance, desire and evidence visually unstable. Production design follows the same mountain/sea system: the press kit says Ryu Seong-hie used meandering mountain shapes and rippling waves to differentiate Seo-rae's and Hae-joon's spaces, including homes, police station and interrogation rooms. Costume color, framing and grading are coordinated as narrative information. Kim says the DI with long-term colorist Jin Young Park became an active extension of prep, with Park Chan-wook present for roughly 60 percent of the grade to discuss light, color and contrast. The film's polished naturalism also depends on extensive invisible digital work. 4th Creative Party CEO and VFX supervisor Lee Jeon-hyeong describes roughly 580 VFX shots completed over about six months, followed by additional detailing before Cannes. The VFX layer includes pervasive mist control, insects, evidence details such as Seo-rae's palm callus, mountain silhouettes echoed in the lie-detector graph, and repeated whirl motifs in water, fog and ashes. These effects should be treated as digital mise-en-scène integrated with production design and cinematography, not as a separate spectacle department. The official press kit and BFI lock 4K, Dolby Atmos / 5.1 delivery and the principal sound credits, but the current locked sources do not establish the complete microphone package, recorder, wireless plan, foley/ADR architecture, re-recording stages, stem layout or exact Atmos authoring workflow. Likewise Kim Sang-bum is the credited editor, but exact editing software, assistant-editor structure, turnover cadence, storage architecture and scene ownership are not established here. Exact budget, financing shares, recoupment, insurance, full location-permit package, day-by-day call sheets, all lens/focal-length/exposure/media metadata, stunt paperwork, complete VFX vendor suballocation and shot database, color transforms, music recording details and distribution economics remain unresolved. The player must therefore coordinate a South Korean studio-distributor-production network, bilingual performance, long previsualization, 76 days of geographically dispersed location work, anamorphic ALEXA Mini imaging, restrictive-to-liberated camera grammar, time-critical tide scheduling, practical location lighting, production-design/costume/color integration, extensive invisible VFX, 4K/Dolby Atmos finishing and global festival/sales circulation while preserving an explicit unknowns register.",
    requiredChoicesSeed: {
      screenplay: ["park_chung_screenplay", "the_mist_song_genesis", "martin_beck_detective_reference", "chinese_lead_authored_premise", "bilingual_korean_chinese_dialogue", "subtle_police_procedural_romance"],
      camera: ["alexa_mini", "cooke_anamorphic", "2_39_1", "two_month_storyboard", "restricted_first_part_camera", "handheld_pov", "location_heavy_76_day_shoot", "three_beach_finale", "tide_window", "natural_light_negative_fill", "hidden_leds", "bodycam_rooftop_chase", "object_pov"],
      editing: ["kim_sang_bum_edit", "planned_transitions", "perspective_discontinuity", "geographic_continuity", "editorial_software_unknown"],
      sound: ["kim_suk_won_sound", "jung_gun_production_sound", "dolby_atmos", "5_1_delivery", "production_sound_package_unknown", "final_mix_chain_unknown"],
      themes: ["film_history", "2022", "decision_to_leave", "heojil_kyolshim", "park_chan_wook", "south_korean_cinema", "regional_global", "moho_film", "cj_enm", "korean_industry", "location_production", "anamorphic", "digital_mise_en_scene", "4th_creative_party", "festival_circulation", "chapter19"]
    },
    learningGoals: [
      "Explain Decision to Leave as Chapter 19's regional/global rotation case after Four Daughters.",
      "Use Festival de Cannes's 138-minute record as the canonical playable runtime anchor.",
      "Identify the Republic of Korea as the country of production without collapsing Korean cinema into a generic East Asian production model.",
      "Identify Moho Film as production company and CJ ENM as presenter and international-sales company while keeping exact financing shares unresolved.",
      "Identify Park Chan-wook and Chung Seo-kyung as screenwriters and distinguish script authorship from later department-level elaboration.",
      "Explain the screenplay's two documented genesis strands: The Mist and the Martin Beck-inspired detective.",
      "Explain Chung Seo-kyung's proposal for a Chinese female lead as an authored production decision tied to Tang Wei rather than incidental casting.",
      "Treat Korean and Chinese dialogue as production requirements for performance, communication and post rather than as flavor text.",
      "Identify Kim Ji-yong as cinematographer and his first feature collaboration with Park Chan-wook.",
      "Explain the August-to-November 2020 prep period as a distinct production phase.",
      "Explain two months of shot-by-shot storyboarding as a major previsualization investment rather than a loose reference-board exercise.",
      "Explain why a highly storyboarded production can still leave room for on-set spontaneity.",
      "Explain the first-part restriction on camera movement as a planned visual rule whose later removal has narrative meaning.",
      "Explain handheld POV as one controlled exception to the early camera restriction.",
      "Identify ARRI ALEXA Mini as the verified camera body without inventing unverified backup bodies, codecs or media.",
      "Identify Cooke anamorphic lenses as the verified primary lens choice and connect edge distortion and controlled softness to the visual plan.",
      "Explain Kim Ji-yong's typical T4.0 approach while keeping scene-by-scene exposure logs unresolved.",
      "Explain selectively opening wider for close-ups as an image-softening choice rather than a universal aperture rule.",
      "Explain the 76-day shoot as a substantial location-production commitment that wrapped in March 2021.",
      "Explain why limited Busan Cinema Studios work does not make the film a stage-dominant production.",
      "Explain geographically dispersed South Korean locations as scheduling, transport, crew and continuity constraints.",
      "Explain the final beach as a constructed screen geography assembled from three real Korean beaches.",
      "Explain why combining three beaches is not the same as replacing location production with CGI.",
      "Explain the national-park high-tide sunset requirement as a natural-event scheduling constraint.",
      "Explain the two roughly ten-minute tide windows as a case where preparation must absorb environmental risk.",
      "Explain the crane's floating platform as a grip/logistics solution to tide change rather than a visual-effects substitution.",
      "Explain natural-light day exteriors controlled with negative fill and butterflies as deliberate lighting design.",
      "Explain PAR HMI use as selective augmentation rather than a default daylight strategy.",
      "Explain how production design and cinematography cooperated to hide LEDs for moving interior shots.",
      "Explain ARRI SkyPanel 360 and Astera Titan Tube use in the night mountain sequence without generalizing that package to every scene.",
      "Explain the three-day rooftop chase and BodyCam choice as an embodied Korean-city action strategy rather than generic action coverage.",
      "Explain modified street practicals as part of maintaining real urban background texture.",
      "Explain computer-monitor POV and dead-person POV as deliberately impossible perspectives that make viewers complicit in surveillance and uncertainty.",
      "Explain the distinction between a planned subjective viewpoint and a literal documentary camera position.",
      "Identify Ryu Seong-hie as production designer and explain mountain/sea shapes as recurring spatial design principles.",
      "Explain how homes, police spaces and interrogation rooms were differentiated to externalize character psychology.",
      "Explain costume color as coordinated with cinematography and grading rather than a department operating in isolation.",
      "Identify Jin Young Park as Kim Ji-yong's long-term colorist for the DI and explain Park Chan-wook's extensive grade participation as collaborative finishing.",
      "Explain why DI decisions can extend ideas developed in prep instead of merely correcting photography.",
      "Identify Lee Jeon-hyeong and 4th Creative Party as the verified VFX leadership/company.",
      "Explain approximately 580 VFX shots over roughly six months as extensive invisible digital work inside a non-spectacle romance-thriller.",
      "Explain controlled mist as a digital-atmosphere continuity task rather than assuming all fog was photographed practically.",
      "Explain CG insects, palm-callus detail and motif work as evidence-oriented digital mise-en-scène.",
      "Explain mountain silhouettes in the lie-detector graph and repeated whirl motifs as design continuity across practical and digital departments.",
      "Explain why extensive VFX does not negate the production's location-heavy physical method.",
      "Identify Kim Sang-bum as editor while keeping software, assistant-editor staffing and exact scene ownership unresolved.",
      "Identify Kim Suk-won as sound supervisor and Jung Gun as production sound mixer.",
      "Use the press kit's 4K, Dolby Atmos and 5.1 data as delivery facts without reverse-engineering an unsupported sound-post chain.",
      "Identify Cho Young-wuk as composer and keep recording-session, orchestration and score-mix specifics unresolved unless separately sourced.",
      "Explain Cannes Best Director as reception/circulation history rather than proof that individual production claims are true.",
      "Separate Moho Film/CJ ENM industrial infrastructure from international festival circulation and world-sales outcomes.",
      "Maintain an uncertainty register for budget, financing shares, insurance, permits, call sheets, detailed camera reports, complete VFX shot database, edit infrastructure, color transforms, sound-post chain, music sessions and distribution economics.",
      "Explain Decision to Leave's Chapter 19 value as evidence that contemporary regional/global cinema can combine mature national infrastructure, precise previsualization, location logistics and high-end post without becoming a Hollywood production model.",
      "Build a closing production audit that checks industry context, bilingual performance, prep, camera rules, location geography, tide logistics, lighting, design, VFX, post, delivery and unresolved claims before Production Verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Decision to Leave evidence hierarchy", player_task: "Separate Cannes/press-kit records, BFI documentation, cinematographer testimony and Korean-industry/VFX interviews before promoting claims." },
      { id: "industry_map", label: "Map the Korean production network", player_task: "Track Moho Film, CJ ENM and the named Korean department heads without collapsing production, presentation and international sales into one role." },
      { id: "screenplay_genesis", label: "Trace the screenplay genesis", player_task: "Connect The Mist and the Martin Beck detective idea to Park and Chung's development process without treating references as copied story material." },
      { id: "bilingual_premise", label: "Plan the Korean-Chinese character system", player_task: "Treat Tang Wei's Chinese lead and bilingual dialogue as authored performance and production requirements." },
      { id: "prep_calendar", label: "Lock the prep calendar", player_task: "Model August-November 2020 as a preparation period distinct from the later 76-day shoot." },
      { id: "storyboard_two_months", label: "Storyboard shot by shot", player_task: "Spend the documented two months establishing shot logic and visual ground rules before photography." },
      { id: "camera_rule_part_one", label: "Restrict the first-part camera", player_task: "Keep movement limited unless story pressure justifies it, while preserving handheld POV as a planned exception." },
      { id: "camera_package", label: "Lock the verified camera package", player_task: "Use ALEXA Mini and Cooke anamorphics without inventing backup bodies, codecs, media or complete focal-length logs." },
      { id: "anamorphic_aperture", label: "Control anamorphic texture", player_task: "Use the documented T4-oriented approach and selectively wider close-ups without pretending every shot shares one stop." },
      { id: "location_route", label: "Plan the South Korean location route", player_task: "Schedule geographically dispersed locations as transport and continuity work rather than one generic Korean setting." },
      { id: "busan_stage", label: "Use Busan studio work selectively", player_task: "Keep limited Busan Cinema Studios work distinct from the predominantly location-based production." },
      { id: "three_beach_finale", label: "Assemble the three-beach finale", player_task: "Coordinate three real Korean beaches into one screen geography while tracking continuity and travel." },
      { id: "tide_window", label: "Schedule the high-tide sunset window", player_task: "Treat the two short natural windows as a hard environmental dependency with no casual reshoot assumption." },
      { id: "crane_float", label: "Protect the crane against the tide", player_task: "Use the documented floating platform and recovery plan as grip/logistics engineering." },
      { id: "day_exterior_light", label: "Shape natural day exteriors", player_task: "Control ambience with negative fill and butterflies, adding HMI punch only when justified." },
      { id: "hidden_leds", label: "Hide interior LEDs with design", player_task: "Coordinate lighting and production design so moving shots retain practical spatial freedom." },
      { id: "night_mountain", label: "Build the night mountain exposure", player_task: "Use the documented SkyPanel/Astera/soft-source solution for the snowy night sequence without generalizing it to the entire film." },
      { id: "rooftop_chase", label: "Shoot the rooftop chase", player_task: "Use three days, BodyCam and modified city practicals to preserve embodied pursuit and real urban background." },
      { id: "object_pov", label: "Design impossible object POVs", player_task: "Plan monitor, dead-person and other non-naturalistic viewpoints as authored story devices rather than accidental coverage." },
      { id: "production_design", label: "Build mountain-and-sea spaces", player_task: "Let Ryu Seong-hie's design distinguish character spaces through mountain curves, wave forms and differentiated police/interrogation architecture." },
      { id: "costume_color", label: "Coordinate costume color", player_task: "Treat ambiguous blue-green costume intensity as part of image storytelling shared across costume, camera and grade." },
      { id: "location_continuity", label: "Maintain geographic continuity", player_task: "Track weather, direction, performance and design continuity across locations that may be hundreds of kilometres apart." },
      { id: "vfx_plan", label: "Map invisible VFX", player_task: "Plan 4th Creative Party's digital mise-en-scène as integrated image work rather than a separate spectacle reel." },
      { id: "mist_continuity", label: "Control the mist", player_task: "Track the amount and behavior of atmospheric mist across outdoor scenes using practical and digital evidence separately." },
      { id: "evidence_vfx", label: "Build evidence details digitally", player_task: "Use insects, palm callus and other subtle VFX only where the verified production record supports them." },
      { id: "motif_vfx", label: "Repeat mountain and whirl motifs", player_task: "Coordinate digital motifs across lie-detector graphics, fog, water and ashes without confusing motif analysis with literal geography." },
      { id: "vfx_schedule", label: "Sustain the six-month VFX phase", player_task: "Plan roughly 580 shots and later detailing without inventing unsupported vendor suballocation or shot-status records." },
      { id: "editing", label: "Protect editorial authorship", player_task: "Credit Kim Sang-bum and preserve planned transitions/perspective changes while keeping software and assistant-editor workflow unresolved." },
      { id: "production_sound", label: "Map production sound", player_task: "Credit Jung Gun and record dialogue/location constraints without inventing an unsupported microphone or wireless package." },
      { id: "sound_finish", label: "Separate capture from Atmos delivery", player_task: "Use Kim Suk-won's sound credit and 4K/Dolby Atmos/5.1 delivery facts without fabricating the final mix architecture." },
      { id: "music", label: "Integrate Cho Young-wuk's score", player_task: "Treat music as part of suspense/romance balance while leaving session-level recording details unresolved." },
      { id: "di_grade", label: "Extend prep into the DI", player_task: "Work with Jin Young Park and Park Chan-wook's documented grade participation to refine color and contrast from photographed material." },
      { id: "festival_sales", label: "Separate festival and sales circulation", player_task: "Track Cannes recognition and CJ ENM international sales as distribution history rather than production-proof shortcuts." },
      { id: "unknowns_register", label: "Maintain the Decision to Leave unknowns register", player_task: "Track finance, permits, call sheets, exact camera/media logs, stunt records, VFX database, edit infrastructure, color transforms, sound-post, music and distribution economics explicitly." },
      { id: "delivery_review", label: "Audit the complete Decision to Leave production system", player_task: "Verify Korean industry context, bilingual premise, prep, camera grammar, location/tide logistics, lighting, design, VFX, post, delivery and unresolved claims before Production Verification." }
    ]
  }
] as const;

export function mergeChapterNineteenDecisionToLeaveExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenDecisionToLeaveExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_decision_to_leave_verified",
      source: { list_id: "manual_chapter_nineteen_decision_to_leave_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
      film: { title: definition.title, original_title: definition.originalTitle, year: definition.year, title_type: definition.titleType, runtime_mins: definition.runtimeMins, directors: definition.directors, genres: definition.genres, genre_keys: definition.genres.map((genre) => genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")), imdb_rating: 0, user_rating: 0 },
      scenario_type: definition.scenarioType,
      production_challenge: definition.premise,
      required_choices_seed: definition.requiredChoicesSeed,
      phases: definition.phases,
      learning_goals_seed: definition.learningGoals,
      manual_enrichment_needed: [],
    });
    nextPosition += 1;
  }
  return merged;
}
