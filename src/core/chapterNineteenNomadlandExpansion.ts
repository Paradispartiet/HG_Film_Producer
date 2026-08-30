import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenNomadlandExpansionDefinitions = [
  {
    id: "scenario_nomadland_2020",
    title: "Nomadland",
    originalTitle: "Nomadland",
    aliases: [],
    year: 2020,
    titleType: "Movie",
    runtimeMins: 108,
    directors: ["Chloé Zhao"],
    genres: ["Drama"],
    sourceId: "biennale_nomadland_2020",
    sourceUrl: "https://www.labiennale.org/en/cinema/2020/venezia-77-competition/nomadland",
    scenarioType: "independent_low_mid_budget_location_real_people_nonprofessional_performance_available_light_small_crew_road_production_hybrid_fiction_nonfiction_self_editing_landscape_sound_searchlight_acquisition_2020",
    premise: "Build Nomadland as the first production case under Chapter 19's balanced-rotation scheduler and treat small-crew location production, relationships with real participants, natural-light cinematography, self-editing, landscape-specific sound and later studio acquisition/distribution as separate evidence layers. La Biennale di Venezia anchors Chloé Zhao as director, screenwriter and editor, Joshua James Richards as cinematographer, a 108-minute running time, the Highwayman Films/Hear-Say/Cor Cordium production structure with Mollye Asher and Dan Janvey, Sergio Diaz for sound and the adaptation from Jessica Bruder's nonfiction book. Searchlight's film record identifies real nomads Linda May, Swankie and Bob Wells alongside Frances McDormand, while contemporaneous acquisition reporting shows Fox Searchlight acquiring worldwide rights in February 2019 after McDormand and Peter Spears had optioned Bruder's book and after the independently structured production had been assembled; distribution ownership must therefore not be back-projected into unsupported claims about who originated every production decision. American Cinematographer documents an approximately 25-person key crew, a broad shot-list that still left room for responsive camera work, available light and practicals for roughly 90 percent of the film, Arri Alexa Mini and Amira cameras with Arri/Zeiss Ultra Prime lenses, close work commonly built around a 32mm lens, and the absence of a makeup artist on set as part of the filmmakers' naturalistic approach. Filmmaker Magazine's interview with Richards describes a crew of roughly 25 to 30 people, filming at the Rubber Tramp Rendezvous, a beet harvest and an Amazon fulfillment center, an Alexa Mini on a Ronin 2 plus an Amira on EasyRig or shoulder, mostly wide Ultra Primes no longer than 35mm, practical-heavy lighting and an ethical method in which relationships were developed before filming and participants such as Swankie could set boundaries on camera placement in their own vans. That testimony supports a production model based on mobility, trust and responsiveness, but it does not license a claim that every apparently spontaneous scene was unscripted, that every real participant had identical contractual terms, or that observational style makes the film a documentary. BAFTA records Zhao discussing editing Nomadland herself and treating tonal variation captured on set as material to be judged in the edit rather than automatically removed for consistency. SoundWorks documents a four-month fall-2018 road production in which McDormand, Zhao and other crew members lived in vans, and identifies supervising sound editor Sergio Diaz and re-recording mixer Zach Seivers; Zhao describes a sound strategy tailored to the specific landscapes Fern travels through and resistant to manipulative sonic cues. The player must coordinate adaptation research, participant relationships and consent boundaries, route and seasonal logistics, van-scale production, real workplaces and gatherings, small-crew department overlap, broad shot planning, natural-light windows, Alexa Mini/Amira mobility, wide-angle proximity, practical interior lighting, production design restraint, costume/makeup minimalism without erasing craft labor, location sound, landscape-specific sound design, self-editing, fiction/nonfiction boundaries, festival circulation, later Searchlight acquisition and evidence uncertainty while refusing unsupported exact budget figures, full deal terms, participant compensation schedules, private consent documents, complete call sheets, every location date, complete lens-by-shot metadata, camera serials, exact exposure values, full lighting inventories, complete production-sound kit, editorial storage topology, color-management transforms, sound plug-in chains or claims that awards prove production authorship.",
    requiredChoicesSeed: {
      screenplay: ["jessica_bruder_adaptation", "fern_composite_character", "real_people_playing_versions_of_themselves", "work_and_route_structure", "fiction_nonfiction_boundary", "108_minute_runtime"],
      camera: ["joshua_james_richards", "alexa_mini", "alexa_amira", "ultra_primes", "wide_angle_proximity", "available_light", "practicals", "ronin_2", "easyrig_shoulder", "shot_parameters_unknown"],
      editing: ["chloe_zhao_editor", "broad_shot_list", "responsive_coverage", "tone_in_edit", "performance_observation", "road_structure", "editorial_infrastructure_unknown"],
      sound: ["sergio_diaz", "zach_seivers", "landscape_specific_sound", "experiential_not_manipulative", "location_sound", "mix_chain_unknown"],
      themes: ["film_history", "2020", "nomadland", "chloe_zhao", "frances_mcdormand", "joshua_james_richards", "small_crew", "independent_production", "location_production", "real_participants", "nonprofessional_performance", "natural_light", "available_light", "road_movie", "hybrid_fiction_nonfiction", "self_editing", "soundscape", "festival_circulation", "searchlight_acquisition", "balanced_rotation", "chapter19"]
    },
    learningGoals: [
      "Explain Nomadland as the first Chapter 19 case selected by the balanced-production rotation rather than by a P0-first commercial queue.",
      "Use La Biennale di Venezia's 108-minute record as the canonical playable runtime anchor while recognizing that later territorial versions can have different classified runtimes.",
      "Identify Chloé Zhao as director, screenwriter and editor from the Venice record.",
      "Identify Joshua James Richards as cinematographer and Sergio Diaz as the credited sound lead in the Venice record.",
      "Identify Highwayman Films, Hear/Say Productions, Cor Cordium Production, Mollye Asher and Dan Janvey as the production entities/producers recorded by Venice without collapsing them into later distribution ownership.",
      "Explain the adaptation from Jessica Bruder's nonfiction book as a source relationship rather than proof that the finished film is a documentary.",
      "Explain Fern as a fictional central character placed among real nomads who play versions of themselves, preserving the fiction/nonfiction boundary.",
      "Identify Linda May, Swankie and Bob Wells as real nomads featured by Searchlight without treating any one participant as representative of all nomadic people.",
      "Explain why participant relationships built before shooting are a production resource but do not substitute for consent, contracts or ethical review.",
      "Explain Richards' principle that participants are experts on their own experience and how this can shape camera behavior without romanticizing access.",
      "Explain why asking a participant where the camera may be placed inside their own van is a concrete production-boundary decision, not merely an aesthetic preference.",
      "Keep private consent forms, compensation details and complete participant agreements unresolved unless title-specific public sources establish them.",
      "Explain the approximately 25-to-30-person crew as evidence of a deliberately compact production footprint without claiming an invariant headcount every day.",
      "Explain how a small road crew changes transport, lodging, department overlap, equipment footprint and reaction time compared with a large studio unit.",
      "Use the documented four-month fall-2018 road production as a schedule-scale anchor without inventing a complete day-by-day calendar.",
      "Explain the production significance of McDormand, Zhao and other crew members living in vans during the road shoot without claiming every crew member did so.",
      "Identify the Rubber Tramp Rendezvous, beet harvest and Amazon fulfillment center as documented production environments rather than generic reconstructed sets.",
      "Explain why filming in functioning workplaces and gatherings imposes access, scheduling, safety, privacy and available-light constraints.",
      "Explain Zhao's broad shot-list as preplanning that coexists with responsive observation rather than proving the film had no shot design.",
      "Explain how Richards could keep the camera running or move quickly between framings because the director and cinematographer shared a defined visual language.",
      "Identify Arri Alexa Mini and Arri Amira as the documented camera bodies used on Nomadland.",
      "Identify Arri/Zeiss Ultra Prime lenses as the documented lens family and preserve lens-by-shot metadata as unresolved unless sourced.",
      "Explain the 32mm Ultra Prime close-up strategy as a way to stay physically close while retaining environmental context.",
      "Explain the Filmmaker-documented preference for wide lenses no longer than 35mm without converting that interview statement into a complete lens inventory.",
      "Explain the Alexa Mini on Ronin 2 and Amira on EasyRig/shoulder as complementary mobility configurations for an unpredictable location workflow.",
      "Explain why roughly 90 percent available light and practicals requires schedule flexibility around sun position, dusk and existing interior sources rather than meaning no lighting department was needed.",
      "Explain the difference between available light, practical fixtures and supplemental film lighting in the title's naturalistic system.",
      "Explain why campsite practicals and small LEDs can be authored lighting choices even when they appear motivated by ordinary objects.",
      "Explain the no-makeup-artist-on-set testimony as one title-specific naturalistic decision without generalizing it into an anti-makeup rule or erasing costume/hair/appearance labor.",
      "Explain production design restraint as coordination with real locations, vans and workplaces rather than the absence of design authorship.",
      "Explain why the naturalistic image depends on deliberate framing, lens choice, timing and controlled supplementation rather than camera neutrality.",
      "Explain Zhao's self-editing role as a continuation of directing decisions into post-production rather than proof that no other post collaborators contributed.",
      "Explain Zhao's BAFTA-described approach to tonal variation: material captured on set can remain heterogeneous until tested in the edit.",
      "Explain how editing a road structure can create continuity from geographically dispersed encounters without falsifying the production route.",
      "Keep exact editorial software, storage, proxy, backup and conform topology unresolved unless directly documented.",
      "Identify Sergio Diaz and Zach Seivers as documented principal sound collaborators for supervising sound editing and re-recording mixing.",
      "Explain the landscape-specific sound strategy as an authored response to changing environments rather than a generic ambience library approach.",
      "Explain Zhao's stated resistance to sonic 'tricks' as a mixing and sound-design principle, not evidence that the soundtrack is unprocessed or purely documentary.",
      "Keep exact microphones, recorders, wireless systems, DAWs, plug-ins, stems and mix routing outside the verified layer unless title-specific sources establish them.",
      "Explain why Searchlight's February 2019 worldwide-rights acquisition is a distribution/ownership event that must be kept separate from the film's earlier production authorship.",
      "Explain why McDormand and Peter Spears optioning Bruder's book is development evidence but not a complete financing history.",
      "Distinguish production companies, financiers, rights holders, sales/distribution entities and festival exhibitors instead of treating 'studio' as one role.",
      "Explain Venice/Toronto/New York/Telluride pandemic-era festival collaboration as circulation context after production, not evidence for how the 2018 shoot was organized.",
      "Reject the inference that awards or critical success prove that a small crew, natural light or hybrid casting method is universally superior.",
      "Maintain an uncertainty register for budget, financing shares, acquisition terms, participant contracts, compensation, complete schedule, every location, camera/lens metadata, exposure, lighting inventory, production-sound kit, editorial infrastructure, color transforms and mix-chain details.",
      "Explain Nomadland's Chapter 19 importance as a counter-history to technology-led blockbuster narratives: mobility, trust, real environments, small crews and post-production judgment are themselves production systems.",
      "Build a closing production audit that checks metadata provenance, independent-production-versus-distribution boundaries, participant ethics, small-crew logistics, camera/light evidence, editing authorship, soundscape authorship and unresolved claims before production verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Nomadland evidence hierarchy", player_task: "Separate Venice metadata, Searchlight film records, ASC craft testimony, Filmmaker production interviews, BAFTA editing testimony, SoundWorks sound reporting and acquisition reporting before promoting claims." },
      { id: "runtime_credits", label: "Lock runtime and principal credits", player_task: "Use the Venice 108-minute festival record and its director/editor/cinematographer/producer/sound credits as the institutional metadata anchor." },
      { id: "adaptation_boundary", label: "Separate book research from film form", player_task: "Map Jessica Bruder's nonfiction source to Zhao's fictional Fern without reclassifying the finished feature as documentary." },
      { id: "participant_relationships", label: "Build relationships before access", player_task: "Treat real participants as collaborators with their own experience and boundaries before planning intimate filming." },
      { id: "consent_boundaries", label: "Negotiate camera boundaries", player_task: "Use documented participant control over camera placement as an ethical production constraint while keeping private agreements unresolved." },
      { id: "crew_scale", label: "Design the compact road crew", player_task: "Plan for an approximately 25-to-30-person footprint with department overlap, mobility and limited equipment without assuming the count was identical each day." },
      { id: "route_schedule", label: "Build the four-month road schedule", player_task: "Coordinate seasonal travel, gatherings, jobs and landscape windows across the fall-2018 production without inventing unsourced daily chronology." },
      { id: "van_living", label: "Align lodging with production mobility", player_task: "Use the documented van-living experience of McDormand, Zhao and some crew as production context without universalizing it to the whole team." },
      { id: "real_locations", label: "Work inside real environments", player_task: "Prepare access and safety for RTR, beet-harvest, fulfillment-center and road locations while preserving their functioning-world constraints." },
      { id: "shot_language", label: "Define a simple visual grammar", player_task: "Use broad shot planning and shared framing rules so the camera can respond quickly without losing editorial coherence." },
      { id: "camera_package", label: "Keep the camera package mobile", player_task: "Use Alexa Mini and Amira with Ultra Primes as the documented core while leaving serials and full accessory inventories unresolved." },
      { id: "gimbal_shoulder", label: "Switch between gimbal and body-operated modes", player_task: "Deploy the Mini/Ronin 2 and Amira/EasyRig-or-shoulder configurations according to access, movement and intimacy needs." },
      { id: "wide_angle_proximity", label: "Stay physically close with wide lenses", player_task: "Use the documented wide-lens language and 32mm close-up practice to keep faces and surrounding environment in relationship." },
      { id: "sun_windows", label: "Schedule around natural light", player_task: "Protect dawn, dusk, backlight and sky-bounce windows when the image depends on available light rather than large relighting setups." },
      { id: "practical_interiors", label: "Motivate interiors from practicals", player_task: "Shape van and campsite interiors with existing fixtures and compact LED supplementation while preserving a believable source." },
      { id: "workplace_constraints", label: "Adapt to functioning workplaces", player_task: "Treat available industrial lighting, worker movement, permissions and safety as constraints rather than redesigning the location into a conventional set." },
      { id: "appearance_restraint", label: "Protect naturalistic appearance", player_task: "Use the documented absence of a makeup artist as a title-specific choice while still tracking costume, continuity and performer-care responsibilities." },
      { id: "production_design_restraint", label: "Design through selection and restraint", player_task: "Coordinate real vans, camps, workplaces and small modifications so design authorship supports rather than overwhelms lived environments." },
      { id: "performance_observation", label: "Capture performance without over-directing reality", player_task: "Let professional and nonprofessional performers contribute lived behavior while preserving the fictional scene's dramatic purpose." },
      { id: "work_as_action", label: "Film labor as lived action", player_task: "Stage camera access around actual work processes so labor is visible without claiming the film documents every condition of those workplaces." },
      { id: "location_sound", label: "Record changing environments", player_task: "Gather production sound and environmental material appropriate to road, camp, workplace and landscape conditions while keeping exact kit unresolved." },
      { id: "soundscape_design", label: "Differentiate each landscape sonically", player_task: "Build location-specific sound worlds that support experience without using generic emotional cues as a substitute for place." },
      { id: "edit_route", label: "Construct the road in the edit", player_task: "Use Zhao's self-editing role to shape geographic encounters into an intelligible journey without pretending the edit reproduces literal chronology." },
      { id: "tone_in_edit", label: "Test tonal variation instead of flattening it", player_task: "Evaluate heterogeneous moments in post and retain variation when it serves the film rather than enforcing consistency mechanically." },
      { id: "fiction_nonfiction_audit", label: "Audit hybrid boundaries", player_task: "For each encounter, distinguish fictional Fern, real participants, adapted source material and observational production method." },
      { id: "independent_production", label: "Map the production entities", player_task: "Keep Highwayman, Hear/Say, Cor Cordium and named producers distinct from later rights acquisition and distribution." },
      { id: "rights_acquisition", label: "Separate later Searchlight acquisition", player_task: "Record the February 2019 worldwide-rights acquisition as a post-production/distribution event instead of rewriting it as proof of initial studio authorship." },
      { id: "festival_circulation", label: "Map pandemic-era festival circulation", player_task: "Track Venice and coordinated autumn-festival exhibition as release context after the 2018 shoot, not as production-method evidence." },
      { id: "unknowns_register", label: "Maintain the Nomadland unknowns register", player_task: "Track budget, financing, rights terms, participant agreements, schedule detail, gear metadata, exposure, lighting, sound kit, editorial infrastructure, color and mix-chain unknowns explicitly." },
      { id: "delivery_review", label: "Audit the complete Nomadland production system", player_task: "Verify metadata, participant ethics, route logistics, compact-crew practice, camera/light evidence, editing and sound authorship, rights separation and remaining unknowns before production verification." }
    ]
  }
] as const;

export function mergeChapterNineteenNomadlandExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenNomadlandExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_nomadland_verified",
      source: { list_id: "manual_chapter_nineteen_nomadland_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
