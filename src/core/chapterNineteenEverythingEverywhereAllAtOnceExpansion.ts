import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterNineteenEverythingEverywhereAllAtOnceExpansionDefinitions = [
  {
    id: "scenario_everything_everywhere_all_at_once_2022",
    title: "Everything Everywhere All at Once",
    originalTitle: "Everything Everywhere All at Once",
    aliases: ["EEAAO"],
    year: 2022,
    titleType: "Movie",
    runtimeMins: 139,
    directors: ["Daniel Kwan", "Daniel Scheinert"],
    genres: ["Action", "Comedy", "Sci-Fi"],
    sourceId: "sxsw_everything_everywhere_all_at_once_2022",
    sourceUrl: "https://schedule.sxsw.com/2022/events/FS14356",
    scenarioType: "independent_low_mid_budget_14m_multiverse_38_day_shoot_simi_valley_mini_studio_alexa_mini_multi_lens_multi_aspect_ratio_martial_club_previs_practical_vfx_five_artist_after_effects_premiere_frameio_atmos_2022",
    premise: "Build Everything Everywhere All at Once as Chapter 19's independent/low-mid-budget rotation case by making resource conversion, not apparent spectacle, the production problem. SXSW records Daniels' 139-minute feature with cinematographer Larkin Seiple, editor Paul Rogers, production designer Jason Kisvarday, sound designer Andrew Twite and A24 as distributor. Producer Jonathan Wang describes a roughly $14 million independent production that turned the former Founders Bank/call-center building in Simi Valley into a mini-studio lot, spending about five weeks there and one week across other locations; Daniels separately describe principal photography as 38 days. Seiple says roughly 30 days were spent in the IRS building and explains how departments designed for constrained resources: Kisvarday dressed foreground desks fully while distant cubicles could reduce to paper and colour, the camera department worked around an atrium they could not afford to light conventionally, and the crew reused one building as a flexible production base. The image system deliberately makes each universe legible through format, lens, lighting and colour changes rather than expensive world-building alone. Seiple confirms the whole movie was photographed on ALEXA Minis; the Action Verse shifted to anamorphic, the Hot Dog Verse used Baltars and hard light, the rock universe used Master Primes, the dawn-of-man parody used older Todd-AO anamorphics, and other work incorporated Atlas and Scorpio anamorphics plus a Laowa probe lens. Aspect-ratio changes participate in the same navigation system. Action is equally preplanned: the Le brothers/Martial Club built and cut fight previs before photography, giving the Daniels and camera team an editable action blueprint under tight schedule pressure. Practical ingenuity and digital work remain interdependent. The raccoon was built as a practical articulated puppet by Jason Hamer; the rock sequence used practical movement followed by cleanup; and VFX supervisor Zak Stoltz describes a five-person core doing most effects with After Effects, occasional Blender and a deliberately practical base rather than a miniature studio pipeline. Post-production was not deferred problem solving. Editor Paul Rogers cut in Premiere Pro, used Frame.io for remote review and built temporary sound design early enough to test whether sequences worked before lock; Adobe separately confirms Premiere Pro, After Effects and Frame.io in the workflow. Sound supervisor/re-recording mixer Brent Kiser and sound designer Andrew Twite developed verse-jump radio-tuning language and a dense practical-recording-based effects vocabulary, while Alexandra Fehrman and Kiser completed a native Dolby Atmos mix at Signature Post. The film therefore teaches how a $14 million independent feature can produce multiverse scale through concentration of locations, cross-department previs, rapid lens/format switching, practical builds, small-team compositing, editorial iteration, remote collaboration and sound-led continuity. Exact daily camera reports, complete lens-by-shot logs, full payroll and cost reports, every VFX shot/vendor allocation, complete stunt-risk documentation, all production-design build ledgers, full costume/hair/makeup breakdowns, final color transforms, detailed music-recording workflow and recoupment remain outside the verified layer unless stronger title-specific evidence is added.",
    requiredChoicesSeed: {
      screenplay: ["family_story_inside_multiverse", "resource_aware_world_switching", "139_minute_sxsw_anchor", "independent_14m_constraint"],
      camera: ["alexa_mini", "multi_lens_universe_languages", "multi_aspect_ratio", "anamorphic_action_verse", "master_prime_rock_verse", "laowa_probe_macro"],
      editing: ["paul_rogers", "premiere_pro", "frameio_remote_review", "temporary_sound_before_lock", "rapid_multiverse_readability"],
      sound: ["brent_kiser", "andrew_twite", "verse_jump_radio_language", "practical_recording", "dolby_atmos_signature_post"],
      themes: ["film_history", "2022", "everything_everywhere_all_at_once", "daniels", "larkin_seiple", "independent_low_mid_budget", "14m_indie", "simi_valley_mini_studio", "martial_club", "five_person_vfx", "practical_digital_hybrid", "chapter19"]
    },
    learningGoals: [
      "Explain why Everything Everywhere All at Once is Chapter 19's independent/low-mid-budget rotation case rather than an industrial-scale multiverse case.",
      "Use SXSW to anchor the film at 139 minutes with Daniels as directors and the principal craft credits.",
      "Use producer Jonathan Wang's approximately $14 million figure as a production-scale anchor without converting it into an unsourced final cost ledger.",
      "Explain how Founders Bank in Simi Valley became a mini-studio lot rather than merely one location.",
      "Distinguish the five-week Simi Valley concentration from the additional week of scattered locations described by Wang.",
      "Use the 38-day principal-photography account as a schedule anchor while keeping day-by-day call sheets unresolved.",
      "Explain why spending roughly 30 shooting days in the IRS building made reuse and reblocking central production strategies.",
      "Explain Jason Kisvarday's resolution-aware cubicle dressing as an example of production design allocating detail to what the camera can see.",
      "Explain how the crew worked around an atrium they could not afford to light conventionally.",
      "Identify ALEXA Mini as the camera platform documented by Larkin Seiple and ARRI.",
      "Explain why universe differentiation depended on a coordinated lens, aspect-ratio, colour and lighting grammar.",
      "Explain the Action Verse shift to anamorphic as a deliberate 1990s action-film cue.",
      "Identify Baltars and hard light as part of the documented Hot Dog Verse look.",
      "Identify Master Primes as the documented rock-universe lens choice after the abandoned IMAX idea.",
      "Identify older Todd-AO anamorphics in the dawn-of-man parody without treating them as the film's universal lens package.",
      "Explain the use of Atlas and Scorpio anamorphics as part of a mixed-lens strategy.",
      "Identify the Laowa probe lens as a practical solution for the hand-bridge macro point of view.",
      "Explain why high-frame-rate work forced a switch to spherical lenses for the 200 fps fanny-pack insert.",
      "Treat aspect-ratio shifts as navigation information for the audience, not decorative novelty.",
      "Explain how preproduction camera tests at the laundromat and IRS building established the normal-world baseline.",
      "Explain the Le brothers/Martial Club fight previs as an editable production blueprint rather than an informal rehearsal.",
      "Explain how action previs reduced risk when the fanny-pack fight pushed the schedule into overtime.",
      "Distinguish stunt choreography, camera choreography and editorial rhythm while showing how they had to interlock.",
      "Identify Jason Hamer's articulated Raccacoonie puppet as a practical-effects foundation.",
      "Explain the rock-universe movement as photographed practical manipulation plus digital cleanup rather than a fully CG shot.",
      "Identify Zak Stoltz as VFX supervisor and the five-person core team as the main small-team effects model.",
      "Explain why After Effects and a practical base were appropriate to the team's skills, turnaround needs and aesthetic.",
      "Keep occasional Blender use distinct from a conventional large 3D-CG pipeline.",
      "Explain why small-team VFX required responsive compositing decisions close to the filmmakers rather than a long vendor chain.",
      "Identify Paul Rogers as editor and Premiere Pro as the documented NLE.",
      "Explain how Frame.io supported remote screenings and frame-specific notes during the extended post period.",
      "Explain why Rogers built temporary sound design before picture lock to test whether multiverse transitions worked.",
      "Treat editorial sound as provisional storytelling work while keeping final sound authorship credited to the sound team.",
      "Identify Brent Kiser and Andrew Twite as central sound collaborators and explain the verse-jump radio-tuning motif.",
      "Explain how field recordings, radios, tubing, breath and manipulated everyday materials became multiverse sound components.",
      "Identify Alexandra Fehrman and Brent Kiser's native Dolby Atmos final mix at Signature Post as the documented finishing layer.",
      "Explain how the rock universe uses restraint and spatially specific wind as a contrast to the film's dense sonic passages.",
      "Explain how COVID shutdown and later Paris pickup photography converted continuity into a remote technical replication problem.",
      "Explain the Paris greenscreen pickup as lighting-plan replication and compositing rather than an unqualified reshoot claim.",
      "Separate the $14 million budget, production methods and later box-office/reception outcomes as different evidence categories.",
      "Keep exact camera serials, codec/media/exposure reports and every focal length by shot unresolved.",
      "Keep complete VFX shot counts, all vendor allocations and full render/compositing logs unresolved beyond the documented core-team model.",
      "Keep full stunt-risk paperwork, production-design ledgers, costume/makeup continuity, color transforms, music-session data and recoupment outside the verified layer unless stronger sources are added.",
      "Build a closing audit that shows how location concentration, previs, optical variation, practical fabrication, small-team VFX, editing and sound converted limited resources into apparent scale."
    ],
    phases: [
      { id: "evidence_hierarchy", label: "Map the EEAAO evidence hierarchy", player_task: "Separate SXSW metadata, producer testimony, cinematography interviews, VFX reporting, editor workflow and sound-team reporting before promoting claims." },
      { id: "budget_anchor", label: "Lock the independent-scale anchor", player_task: "Use the producer's approximately $14 million figure as a scale constraint while keeping the complete budget ledger unresolved." },
      { id: "schedule_anchor", label: "Lock the 38-day shoot", player_task: "Plan around the documented 38-day principal-photography window without inventing daily call sheets." },
      { id: "mini_studio", label: "Convert Founders Bank into a mini-studio", player_task: "Concentrate IRS, apartment, RV and other work around the Simi Valley base so location reuse becomes production capacity." },
      { id: "resolution_design", label: "Dress only what resolution needs", player_task: "Allocate full cubicle detail near camera and simplify distant desks into paper, shape and colour." },
      { id: "atrium_daylight", label: "Protect the IRS daylight illusion", player_task: "Shoot the atrium-facing direction while daylight is available, then simulate its return with a bounced HMI after sunset." },
      { id: "normal_world_tests", label: "Establish the normal-world baseline", player_task: "Test the laundromat and IRS building in prep before assigning stronger optical signatures to alternate universes." },
      { id: "camera_platform", label: "Standardize the camera body", player_task: "Use ALEXA Minis as the common capture platform while letting lenses, frame shapes and lighting carry universe changes." },
      { id: "universe_grammar", label: "Assign each universe a visual grammar", player_task: "Coordinate aspect ratio, lens family, colour, lighting and movement so rapid cuts remain legible." },
      { id: "action_verse", label: "Build the anamorphic Action Verse", player_task: "Shift to anamorphic optics to evoke the intended 1990s action-star language without applying that look to every universe." },
      { id: "hot_dog_verse", label: "Build the Hot Dog Verse", player_task: "Use Baltars, hard light and a purpose-built colour reference so the verse reads instantly." },
      { id: "rock_verse", label: "Build the rock universe", player_task: "Use Master Primes and practical rock manipulation, then remove hands, tracks and unwanted elements in post." },
      { id: "dawn_of_man", label: "Build the dawn-of-man parody", player_task: "Use older Todd-AO anamorphics, two performers and duplication in post instead of scaling the physical shoot to the apparent crowd." },
      { id: "macro_probe", label: "Solve the hand-bridge macro", player_task: "Use the Laowa probe lens and performer movement to create the traveling macro perspective without overengineering camera motion." },
      { id: "high_speed_insert", label: "Capture the 200 fps fanny-pack insert", player_task: "Switch to spherical optics when the ALEXA Mini high-speed requirement exceeds the anamorphic setup's practical limit." },
      { id: "fight_previs", label: "Lock Martial Club previs", player_task: "Use the Le brothers' shot-and-cut fight previs as the shared blueprint for performance, camera and edit." },
      { id: "fanny_pack_fight", label: "Execute the fanny-pack fight", player_task: "Preserve comic action beats under time pressure while protecting safe choreography and editorial geography." },
      { id: "practical_raccacoonie", label: "Build Raccacoonie practically", player_task: "Use Jason Hamer's articulated puppet as the photographed base before any cleanup or enhancement." },
      { id: "small_vfx_team", label: "Design for a five-person VFX core", player_task: "Choose effects methods that a small responsive team can execute instead of imitating a large-studio pipeline." },
      { id: "after_effects_base", label: "Composite from practical bases", player_task: "Favor After Effects compositing and photographed elements, using occasional Blender work only where it solves a specific problem." },
      { id: "greenscreen_pickups", label: "Rebuild interrupted pickups remotely", player_task: "Replicate lighting plans in Paris and composite Michelle's greenscreen photography into previously designed sequences after the COVID shutdown." },
      { id: "editorial_system", label: "Build the multiverse in Premiere", player_task: "Use Paul Rogers' Premiere workflow to manage rapid universe switching while preserving emotional continuity." },
      { id: "remote_review", label: "Review through Frame.io", player_task: "Run remote screenings and frame-specific note passes so the extended post period remains collaborative." },
      { id: "temp_sound", label: "Prove transitions before lock", player_task: "Build temporary sound cues early enough to test verse jumps and scene duration before picture lock." },
      { id: "verse_jump_sound", label: "Design the radio-tuning language", player_task: "Use Andrew Twite and Brent Kiser's tuning/static vocabulary as a repeatable sonic cue for multiverse connection." },
      { id: "practical_sound", label: "Record strange sounds from ordinary objects", player_task: "Build effects from radios, tubing, breath, food and other recorded materials before relying on abstract synthesis." },
      { id: "atmos_mix", label: "Finish in native Dolby Atmos", player_task: "Use spatial movement selectively at Signature Post so sonic scale clarifies rather than obscures story information." },
      { id: "resource_audit", label: "Audit resource conversion", player_task: "For each spectacular beat, identify which part came from location reuse, performance, choreography, optics, practical fabrication, compositing, edit or sound." },
      { id: "unknowns", label: "Maintain bounded unknowns", player_task: "Keep detailed budget lines, call sheets, full VFX census, stunt paperwork, color transforms and music-session records unresolved unless stronger evidence is added." },
      { id: "delivery_review", label: "Audit the complete EEAAO system", player_task: "Verify the 139-minute festival anchor, $14 million scale, 38-day schedule, mini-studio strategy, ALEXA Mini visual grammar, Martial Club previs, practical/VFX hybrid, Premiere/Frame.io edit and Atmos sound before Production Verification." }
    ]
  }
] as const;

export function mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterNineteenEverythingEverywhereAllAtOnceExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_nineteen_everything_everywhere_all_at_once_verified",
      source: { list_id: "manual_chapter_nineteen_everything_everywhere_all_at_once_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
