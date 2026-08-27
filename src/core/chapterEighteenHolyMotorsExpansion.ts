import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenHolyMotorsExpansionDefinitions = [
  {
    id: "scenario_holy_motors_2012",
    title: "Holy Motors",
    originalTitle: "Holy Motors",
    aliases: [],
    year: 2012,
    titleType: "Movie",
    runtimeMins: 115,
    directors: ["Leos Carax"],
    genres: ["Drama", "Fantasy"],
    sourceId: "cannes_holy_motors_2012",
    sourceUrl: "https://www.festival-cannes.com/en/f/holy-motors/",
    scenarioType: "france_germany_low_budget_fast_digital_paris_multi_role_red_epic_night_location_limousine_makeup_motion_capture_datamoshing_vfx_2012",
    premise: "Build Holy Motors as a source-first Chapter 18 Production Case about how Leos Carax converted financing constraints and a desire to return quickly to feature filmmaking into a modular digital production system built around Denis Lavant, Paris, a stretch limousine and multiple radically different performance worlds. Festival de Cannes anchors the 2012 competition version at 115 minutes and credits Carax as writer-director, Caroline Champetier for cinematography, Florian Sanson for production design, Nelly Quettier for editing and Erwan Kerzanet for sound; the official press kit additionally credits Yves Cape for photography, Bernard Floch for make-up/hair supervision, Jean-Christophe Spadaccini and Denis Gastou for SFX make-up, Eugénie Deplus as post-production manager, Diane Sorin for cybermonster design, Jacques Perconte for datamoshing, Thierry Delobel as visual-effects director, Alexandre Bon as VFX supervisor, Bérengère Dominguez as VFX producer and Olivier Marci as 3D supervisor. The press kit documents a French-German co-production between Pierre Grise Production, Théo Films, Arte France Cinéma, Pandora Film and WDR-Arte, with Canal+, CNC, the EU MEDIA programme, Région Île-de-France, PROCIREP/ANGOA, FFA Mini-Traité and Medienboard Berlin-Brandenburg among the participation/support layers. Carax says the film grew out of failed foreign projects blocked by casting and cash, so he effectively commissioned himself to make an inexpensive film quickly in France for a pre-selected actor, enabled by digital cameras he otherwise disliked. In separate interviews he describes the practical production rules as Paris, little money, digital, Denis Lavant and no dailies. La Cinémathèque française identifies RED Epic acquisition and connects the film's image manipulation to datamoshing and motion capture. A later academic study quoting Caroline Champetier's 2012 AFC interview reports that film and Super 16 were considered, but RED Epic was chosen in part because much of the work was nocturnal and the camera's low-light rendering could be pushed; it reproduces Champetier's reported 640 ISO night / 800 ISO day operating choices. Those ISO values are retained as attributed testimony, not universal exposure settings for every shot. Film and Digital Times independently identifies an Angénieux 25-250 HR zoom on Holy Motors, while secondary technical references also associate Zeiss primes with the production; the case therefore verifies the Angénieux zoom as title-specific equipment but keeps exact prime set and shot-to-lens allocation bounded unless a stronger primary source is available. The film's ten-appointment structure turns the limousine into a mobile dressing room and continuity hub: costume, SFX make-up, props, script state and performance identity must reset repeatedly while the unit moves across Paris. The motion-capture appointment deliberately exposes marker-based performance capture and a cybermonster pipeline, while the datamoshing passage makes image corruption an authored post-production process rather than an accidental codec failure. The player must coordinate fast low-budget scheduling, location permissions and public-space contingencies, nighttime RED acquisition, mobile transformation logistics, practical/in-frame lighting, performer safety, makeup/prosthetic continuity, motion-capture handoff, VFX/datamoshing ownership, editorial segmentation and sound continuity while refusing unsupported exact budget totals, shooting-day counts, RED submodel/sensor claims beyond RED Epic, exact codec/recording-media claims, complete lens maps, exact exposure settings outside the attributed ISO testimony, undocumented VFX software, undocumented motion-capture hardware or assumptions that every episode used the same production method.",
    requiredChoicesSeed: {
      screenplay: ["appointment_structure", "paris_location_logic", "limousine_transition_hub", "multi_role_performance", "genre_switches"],
      camera: ["red_epic", "night_low_light", "attributed_iso_boundary", "public_space_agility", "angenieux_zoom", "prime_set_unknowns", "no_dailies_director_rule"],
      editing: ["nelly_quettier", "appointment_segmentation", "digital_image_manipulation", "datamoshing_handoff", "vfx_handoff", "codec_media_unknowns"],
      sound: ["erwan_kerzanet", "multi_world_sound_continuity", "limousine_transitions", "live_music_boundary", "sound_equipment_unknowns"],
      themes: ["film_history", "2012", "holy_motors", "leos_carax", "denis_lavant", "caroline_champetier", "yves_cape", "france_germany", "low_budget", "fast_production", "paris", "red_epic", "night", "limousine", "makeup", "prosthetics", "motion_capture", "datamoshing", "vfx", "digital_convergence", "public_funding", "performance_transformation"]
    },
    learningGoals: [
      "Explain Holy Motors as a coordinated low-budget digital, location, performance, make-up, VFX, editorial and sound system rather than only as a film about cinematic identity.",
      "Use the Festival de Cannes 115-minute 2012 competition version as the canonical case anchor.",
      "Identify Leos Carax as writer-director and separate his authorship from the craft and production responsibilities distributed across the crew.",
      "Identify Caroline Champetier as the principal credited cinematographer while preserving Yves Cape's additional photography credit from the official press kit and Cinémathèque record.",
      "Identify Florian Sanson as production designer, Nelly Quettier as editor and Erwan Kerzanet as the principal Cannes-listed sound credit.",
      "Identify Pierre Grise Production, Théo Films, Arte France Cinéma, Pandora Film and WDR-Arte as the documented French-German co-production structure.",
      "Keep Canal+, CNC, EU MEDIA, Région Île-de-France, PROCIREP/ANGOA, FFA Mini-Traité and Medienboard Berlin-Brandenburg as distinct participation or support layers rather than treating them as one generic financier.",
      "Explain how casting and cash constraints pushed Carax toward a deliberately smaller, faster French production after several unrealized foreign projects.",
      "Explain Carax's self-imposed production brief: inexpensive film, quick execution and a pre-selected actor.",
      "Explain why Denis Lavant's availability and range were production infrastructure, not merely casting, when one performer had to sustain radically different identities across the schedule.",
      "Explain why shooting in Paris with little money and a small digital footprint could reduce some barriers while increasing location, continuity and reset pressure.",
      "Treat Carax's no-dailies rule as a documented directing/workflow choice while keeping technical QC and data-integrity review as separate production responsibilities rather than evidence that Carax watched recorded material.",
      "Identify RED Epic as the documented digital camera platform and keep unsupported RED submodel, sensor and firmware claims outside the verified layer.",
      "Explain why the RED Epic's low-light capability mattered to a production with extensive nocturnal work.",
      "Preserve the reported 640 ISO night and 800 ISO day choices as attributed Champetier testimony rather than universal settings for every Holy Motors shot.",
      "Explain why a lower reported nighttime ISO could be used to manage noise while still exploiting the digital sensor's sensitivity.",
      "Distinguish a title-level camera choice from exact shot-level exposure, shutter, filtration and color-temperature settings.",
      "Identify the Angénieux 25-250 HR zoom as independently documented title-specific equipment without assigning it to unsupported individual shots.",
      "Keep the exact Zeiss prime package and shot-to-lens map as lower-confidence technical metadata unless stronger title-specific primary evidence is recovered.",
      "Explain how a camera package for Holy Motors had to tolerate fast changes between streets, interiors, staged tableaux, motion capture and night work.",
      "Explain why the limousine functions operationally as transport, mobile dressing room, prop/costume store, continuity reset zone and narrative transition space.",
      "Map each appointment as its own mini-production with a discrete role, costume, make-up, props, location, performance mode, camera strategy and sound world.",
      "Explain how the appointment structure allows radically different genres and image strategies without losing whole-film schedule control.",
      "Identify Bernard Floch as make-up/hair design and supervision and Jean-Christophe Spadaccini and Denis Gastou as credited SFX make-up artists.",
      "Explain why repeated transformations require strict prosthetic, wardrobe, hair, continuity-photo and application/removal scheduling.",
      "Treat the physical strain on Denis Lavant as a production-safety and recovery problem across multiple high-intensity roles.",
      "Explain why public-space performance can require contingency planning for uncontrolled passersby, traffic, crowd behavior and limited reset opportunities.",
      "Use Carax's location-driven method as evidence that finding a place can shape an appointment rather than treating location scouting as a late decorative step.",
      "Explain why La Samaritaine and other distinct Paris spaces create separate access, movement, lighting and sound constraints.",
      "Distinguish documentary-style filming among passersby from documentary authorship: Holy Motors remains a staged fiction using real public space.",
      "Identify the motion-capture appointment as a deliberate representation of marker-based performance capture rather than assuming the entire film used motion capture.",
      "Identify Diane Sorin's cybermonster design and Olivier Marci's 3D supervision as documented parts of the motion-capture/VFX production layer.",
      "Explain the handoff from live body performance to tracked movement data and computer-generated creature imagery at a conceptual production level without inventing hardware or software.",
      "Keep exact motion-capture camera arrays, marker specifications, tracking software and render pipeline unresolved unless title-specific evidence establishes them.",
      "Identify Jacques Perconte as the credited datamoshing artist and distinguish authored datamoshing from accidental digital corruption.",
      "Explain why datamoshing requires controlled post-production ownership of compression artifacts, image transitions and delivery-safe source versions.",
      "Identify Thierry Delobel as visual-effects director, Alexandre Bon as VFX supervisor and Bérengère Dominguez as VFX producer.",
      "Explain why motion capture, conventional VFX and datamoshing must remain distinct pipelines even when they meet in one film.",
      "Keep undocumented VFX software, render-farm configuration, file formats and exact shot counts outside the verified layer.",
      "Explain how practical and in-frame light sources can support a mobile nighttime production while also becoming visible parts of the image design.",
      "Separate the film's broad low-light strategy from unsupported fixture-by-fixture lighting diagrams for individual appointments.",
      "Explain why night location work increases dependencies among permits, transport, performer hours, power, noise control and camera sensitivity.",
      "Identify Nelly Quettier as editor and explain how the appointment structure creates a modular assembly problem joined by limousine transitions and recurring performance identity.",
      "Explain how editorial continuity must preserve deliberate discontinuity between genres while maintaining the day's forward movement.",
      "Treat datamoshing and motion-capture outputs as versioned post assets whose provenance should remain traceable through editorial and finishing.",
      "Keep exact offline editing system, conform path, DI resolution and mastering software unresolved unless title-specific sources establish them.",
      "Identify Eugénie Deplus as post-production manager and explain why a film mixing camera originals, VFX, datamoshing, music and multiple episode styles needs centralized post ownership.",
      "Identify Erwan Kerzanet and the additional press-kit sound crew without inventing microphone, recorder or track-layout details.",
      "Explain why each appointment needs its own sound-world plan while limousine ambience and recurring motifs provide whole-film continuity.",
      "Distinguish live musical performance, playback, original song production and final sound mix as separate possible workflow layers.",
      "Use the official press kit's DCP and Dolby SRD notation as release/delivery evidence rather than evidence for the complete production-recording chain.",
      "Explain how small-budget speed depends on preparation and role clarity rather than simply reducing crew or technical standards.",
      "Maintain an uncertainty register for exact budget, shooting days, RED submodel, recording media, prime-lens set, shot-lens assignments, most exposure settings, motion-capture hardware, VFX software, sound equipment and DI details.",
      "Explain Holy Motors' Chapter 18 significance as a case where digital acquisition made a deliberately heterogeneous, performance-heavy, nocturnal urban film feasible under constrained production conditions.",
      "Contrast Holy Motors with technology-forward spectacle cases: here digital convergence supports mobility, transformation and image instability as much as polish or scale.",
      "Explain how the film turns normally hidden production processes—make-up, performance assignment, motion capture, visual manipulation and transport—into both production infrastructure and visible subject matter.",
      "Build a closing production audit that checks co-production provenance, location access, actor transformation load, RED low-light boundaries, lens evidence, motion-capture/VFX/datamoshing ownership, editorial lineage and sound evidence before verification."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the Holy Motors evidence hierarchy", player_task: "Separate Cannes metadata and press-kit credits, Carax production testimony, Cinémathèque technical documentation, attributed Champetier camera testimony and lower-confidence lens metadata before promoting claims." },
      { id: "released_version", label: "Lock the Cannes release anchor", player_task: "Use the 115-minute 2012 Cannes competition version and preserve DCP/Dolby SRD as delivery metadata rather than production-recording proof." },
      { id: "coproduction_map", label: "Map the French-German production", player_task: "Assign Pierre Grise, Théo, Arte France Cinéma, Pandora and WDR-Arte responsibilities without collapsing every partner into the same role." },
      { id: "funding_layers", label: "Separate participation and support", player_task: "Track Canal+, CNC, EU MEDIA, Région Île-de-France, PROCIREP/ANGOA, FFA Mini-Traité and Medienboard support as distinct institutional layers." },
      { id: "constraint_brief", label: "Turn constraints into a production brief", player_task: "Translate casting/cash failures into the documented inexpensive, fast, France-based, Denis-Lavant-centered digital strategy." },
      { id: "appointment_breakdown", label: "Break down the appointments", player_task: "Treat each role-world as a mini-production with its own location, costume, make-up, props, performance, camera, light and sound requirements." },
      { id: "limousine_hub", label: "Configure the limousine hub", player_task: "Use the stretch limousine as transport, dressing room, continuity-reset space and storage hub while protecting travel and transformation time." },
      { id: "paris_locations", label: "Lock Paris locations", player_task: "Match appointments to real spaces and build permissions, access, crowd, traffic, power and sound contingencies for each location." },
      { id: "public_space", label: "Plan uncontrolled public space", player_task: "Prepare documentary-style street setups for unpredictable passersby without confusing the staged fiction with documentary production." },
      { id: "red_epic", label: "Configure RED Epic acquisition", player_task: "Use the verified RED Epic platform while keeping unsupported submodel, sensor, firmware, codec and media claims outside the locked layer." },
      { id: "night_strategy", label: "Design the nocturnal strategy", player_task: "Exploit RED Epic low-light capability for extensive night work while preserving noise, contrast, practical-light and location constraints." },
      { id: "iso_boundary", label: "Record the attributed ISO choices", player_task: "Track Champetier's reported 640 night and 800 day values as attributed operating evidence, not automatic settings for every shot." },
      { id: "lens_evidence", label: "Separate lens evidence", player_task: "Verify the documented Angénieux 25-250 HR title-level use and keep exact prime inventory and shot-to-lens assignments provisional." },
      { id: "no_dailies", label: "Implement the director's no-dailies rule", player_task: "Respect Carax's documented choice not to watch dailies while maintaining technical QC and data-integrity responsibilities elsewhere in the production chain." },
      { id: "performance_load", label: "Schedule Denis Lavant's transformations", player_task: "Balance physical intensity, prosthetic time, costume changes, recovery and location travel across the multi-role day." },
      { id: "makeup_hair", label: "Coordinate make-up and hair", player_task: "Give Bernard Floch's department repeatable continuity records across radically different Oscar identities." },
      { id: "sfx_makeup", label: "Build SFX make-up handoffs", player_task: "Coordinate prosthetic design, application, removal, camera tests and actor safety with the credited SFX make-up team." },
      { id: "wardrobe_props", label: "Reset wardrobe and props", player_task: "Package each appointment's costume and prop state so transformations can happen reliably inside a fast mobile schedule." },
      { id: "mocap_stage", label: "Stage the motion-capture appointment", player_task: "Capture the actor's marked body performance and preserve a clean handoff to the cybermonster/3D team without inventing undocumented hardware." },
      { id: "cybermonster", label: "Build the cybermonster layer", player_task: "Coordinate Diane Sorin's design and Olivier Marci's 3D supervision with tracked performance data and editorial timing." },
      { id: "vfx_pipeline", label: "Separate conventional VFX", player_task: "Give Thierry Delobel, Alexandre Bon and Bérengère Dominguez clear shot ownership independent of motion capture and datamoshing." },
      { id: "datamoshing", label: "Author the datamoshing passage", player_task: "Treat Jacques Perconte's image corruption as a controlled creative asset with protected source versions and deliberate transition outputs." },
      { id: "asset_provenance", label: "Protect digital asset provenance", player_task: "Track camera originals, motion data, VFX versions, datamosh variants and editorial references as distinct versioned assets." },
      { id: "lighting", label: "Adapt light across worlds", player_task: "Build appointment-specific natural, practical or controlled light strategies while preserving the larger low-light night-production logic." },
      { id: "sound_worlds", label: "Map appointment sound worlds", player_task: "Give each role-world a distinct sound-continuity plan while preserving limousine and recurring whole-film motifs." },
      { id: "music_boundary", label: "Separate musical workflow layers", player_task: "Keep live performance, playback, original songs, pre-existing music and final mix responsibilities distinct unless direct evidence joins them." },
      { id: "editorial_modules", label: "Assemble the appointment modules", player_task: "Let Nelly Quettier shape discrete genres and durations while preserving the forward movement of Oscar's workday." },
      { id: "post_management", label: "Centralize post-production ownership", player_task: "Use the post-production manager role to control camera, VFX, datamosh, music, sound and delivery dependencies across heterogeneous material." },
      { id: "delivery_boundary", label: "Lock delivery evidence", player_task: "Treat DCP and Dolby SRD as documented release outputs without reverse-engineering undocumented acquisition, mix or mastering systems." },
      { id: "unknowns_register", label: "Maintain the Holy Motors unknowns register", player_task: "Track budget, shooting days, RED submodel, recording media, prime lenses, shot-lens maps, exposure values, mocap hardware, VFX software, sound gear and DI details explicitly." },
      { id: "chapter18_position", label: "Position Holy Motors in Chapter 18", player_task: "Explain how digital convergence enabled a fast, nocturnal, heterogeneous urban production whose technology is simultaneously tool, constraint and subject." },
      { id: "delivery_review", label: "Audit the complete production system", player_task: "Verify co-production provenance, location logistics, transformation load, camera boundaries, makeup continuity, motion-capture/VFX/datamosh handoffs, editorial lineage and sound evidence before closure." }
    ]
  }
] as const;

export function mergeChapterEighteenHolyMotorsExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenHolyMotorsExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_holy_motors_verified",
      source: { list_id: "manual_chapter_eighteen_holy_motors_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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