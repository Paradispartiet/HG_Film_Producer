import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenAttackOfTheClonesExpansionDefinitions = [
  {
    id: "scenario_star_wars_episode_ii_attack_of_the_clones_2002",
    title: "Star Wars: Episode II - Attack of the Clones",
    originalTitle: "Star Wars: Episode II - Attack of the Clones",
    year: 2002,
    titleType: "Movie",
    runtimeMins: 142,
    directors: ["George Lucas"],
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
    premise: "Build Star Wars: Episode II - Attack of the Clones as a Chapter 18 anchor for end-to-end digital convergence at blockbuster scale, while keeping its achievement historically precise rather than turning it into a vague claim that it was simply the first digital film. Lucasfilm and Panavision identify the 2002 feature as the first major blockbuster or major theatrical release captured entirely with 24p high-definition digital cinema cameras. The camera system emerged from years of Lucasfilm development with Sony and Panavision: Mike Blanchard describes roughly a year and a half between The Phantom Menace pick-ups and the Episode II shoot to make the new camera, ancillary equipment and workflow viable; the four principal prototype cameras used in Australia carried serial numbers 00001-00004 and arrived only about a week before principal photography. Panavision identifies the production cameras as Panavised Sony F900s, with two on main unit and two on second unit, and names the 6-27mm and 9.5-105mm Primo Digital zooms as Tattersall's principal optics. Preserve a documented source tension around physical film backup rather than flattening it: Lucasfilm's later retrospective repeats Rick McCallum's account that there were no film cameras held in reserve and contemporary production notes say the production proceeded without film backup, while a contemporary Mix article reports that Panavision 35mm cameras were present in Australia as backup before the final commitment to 24p HD. The stable fact is that principal photography was committed to 24p digital capture and Mix reports that not a frame of film was shot for the feature. The digital acquisition changed set operations as much as image capture. High-definition live feeds were visible on large monitors; makeup, hair and set-dressing departments could inspect details immediately; Fred Meyers became a dedicated high-definition engineering presence; safety copies were recorded in real time; standard-definition editorial copies were made from the camera masters with synchronization checks; and the editorial team could receive morning footage later the same day. Blanchard describes this as a new feedback loop between shooting and editing and recalls the first day ending with Fred Meyers saying there were only 70 more days to go. After Sydney, the system also had to survive location work in Tunisia, Italy and Spain. The image pipeline then fed a VFX-heavy post-production system rather than replacing it. Lucasfilm records more than 2,000 visual-effects shots, ILM's digital-character work including a fully digital Yoda, digital capture of elaborate miniature sets, digital dailies and in-house digital color timing. The digital source also had to serve two exhibition worlds: some theatres projected digitally while most still required film prints. Blanchard describes outputting each reel from digital files to continuous film negatives, taking roughly 45 hours per reel and running multiple film recorders for more than two months, which forced effects completion earlier in the schedule. Preserve craft departments inside that technical story. AFI credits David Tattersall as cinematographer, Gavin Bocquet as production designer, Ben Burtt as editor, John Williams as composer and Lucasfilm as production company. Trisha Biggar describes the costume department expanding from about 60 to roughly 120 people after the schedule changed, with seven-day weeks and some 14-hour days; she also records a yellow silk moire garment producing a strobing problem on the new digital cameras that had to be solved overnight by adding heavy beading. The film therefore demonstrates that digital capture could create new problems for costume, set finishing, monitoring, editorial synchronization, VFX scheduling, sound, color and theatrical delivery even while removing film processing from principal photography. Use the official 142-minute StarWars.com and AFI runtime for gameplay while preserving BFI's 143-minute catalogue record. Do not invent an exact universal claim of 'first digital feature', an undocumented prime-lens package, exact tape count for every take, codec/data-rate details beyond the documented 24p HD/HDCAM-era workflow, a single uncontested film-backup story, a complete VFX-tool genealogy, exact reshoot chronology, budget breakdown, or a claim that digital capture meant digital-only exhibition.",
    sourceId: "lucasfilm_attack_clones_digital_2022",
    sourceUrl: "https://www.starwars.com/news/saga-chronicles-star-wars-attack-of-the-clones-mike-blanchard",
    scenarioType: "all_digital_24p_hd_panavised_f900_same_day_editorial_ilm_vfx_digital_filmout_2002",
    requiredChoicesSeed: {
      screenplay: ["george_lucas_story", "lucas_jonathan_hales_screenplay", "previsualized_effects_structure"],
      camera: ["all_digital_24p_hd_capture", "panavised_sony_f900", "primo_digital_zoom_pair", "live_hd_monitoring", "backup_source_boundary"],
      editing: ["same_day_editorial_feedback", "sd_editorial_copies_from_hd_masters", "sync_quality_control", "digital_color_timing", "filmout_distribution_bridge"],
      sound: ["ben_burtt_sound_design", "gary_rydstrom_re_recording", "john_williams_score", "no_invented_track_topology"],
      themes: ["film_history", "2000s", "attack_of_the_clones", "star_wars", "george_lucas", "david_tattersall", "mike_blanchard", "fred_meyers", "sony", "panavision", "cinealta", "f900", "24p", "high_definition", "hdtape", "digital_cinematography", "live_monitoring", "same_day_editorial", "safety_copy", "sync_quality_control", "industrial_light_and_magic", "ilm", "digital_yoda", "digital_characters", "miniatures", "previsualization", "vfx", "digital_color_timing", "filmout", "digital_projection", "gavin_bocquet", "trisha_biggar", "ben_burtt", "gary_rydstrom", "john_williams", "digital_convergence", "source_discrepancy"],
    },
    learningGoals: [
      "Place Attack of the Clones as the first major blockbuster/major theatrical release captured entirely with 24p HD digital cinema cameras, without inflating that into the historically unsafe claim that it was the first digital feature of any kind.",
      "Explain why Lucasfilm pushed Sony toward 24 progressive frames per second: matching cinema's 24fps temporal basis made the new HD system more usable for theatrical motion and film-out than earlier 30fps video tests.",
      "Treat the Sony/Panavision camera package as a production-development project rather than an off-the-shelf purchase: the four principal prototype cameras carried serial numbers 00001-00004 and arrived only about a week before principal photography.",
      "Use Panavision's documented two-main-unit/two-second-unit F900 deployment and 6-27mm plus 9.5-105mm Primo Digital zooms without inventing a full prime-lens package that the reviewed sources do not establish.",
      "Preserve the backup-source discrepancy: later Lucasfilm accounts describe no film cameras in reserve while contemporary Mix reporting says Panavision 35mm cameras were present as backup before the final digital commitment; do not erase either source.",
      "Keep the strongest invariant separate from that disagreement: the feature's principal photography was committed to 24p digital capture and contemporary reporting states that no film footage was used for the movie.",
      "Model Fred Meyers's high-definition engineering role as a new production dependency that helped camera assistants, monitoring, capture and downstream post work function together.",
      "Treat large live HD monitors as a cross-department tool: cinematography, makeup, hair, set dressing and direction could inspect image detail immediately instead of relying on low-quality video assist and next-day film dailies.",
      "Explain how real-time safety copies and standard-definition editorial copies of HD masters created both redundancy and new synchronization/quality-control work.",
      "Use the same-day editorial feedback loop as a production-management change: morning footage could be available to editors later that day, allowing pickup requests while sets and performances were still active.",
      "Keep Blanchard's first-day recollection of '70 more days' as an approximate production-scale indicator rather than converting it into an undocumented exact master schedule.",
      "Treat Tunisia, Italy and Spain as evidence that the prototype HD system had to survive location conditions outside the controlled Sydney stage environment.",
      "Connect digital acquisition to ILM's pipeline without collapsing capture and effects: more than 2,000 VFX shots, digital characters, miniature photography, compositing and color timing remained separate post-production systems.",
      "Use fully digital Yoda as a performance-animation problem, not simply a software milestone: ILM had to preserve the character identity established by Frank Oz's puppet while extending the character to full-body action.",
      "Treat digital capture of miniatures and digital dailies as workflow changes inside ILM, while keeping exact model counts or software versions unset unless title-specific sources establish them.",
      "Explain that in-house digital color timing is distinct from picture editing and from principal photography even though all three now shared digital source material.",
      "Preserve the exhibition boundary: some venues projected digitally, but most theatres still required film, so the production's end-to-end digital ambition still depended on a large film-out operation.",
      "Use Blanchard's roughly 45-hours-per-reel film-out and more-than-two-month recorder operation as evidence that digital source material did not eliminate physical distribution bottlenecks.",
      "Treat the need to finish VFX reels earlier for film-out as a scheduling dependency linking post-production, laboratory output and release delivery.",
      "Keep Trisha Biggar's costume-department expansion from about 60 to roughly 120 people as a response to a late schedule reordering, not as a generic claim about digital production efficiency.",
      "Use the yellow silk moire strobing incident as evidence that new digital capture technology could expose material/frequency interactions that costume teams had to solve immediately on set.",
      "Keep Gavin Bocquet's production design and the set-painters' extra touch-up burden visible: high-definition monitoring made construction and surface detail more inspectable, not less important.",
      "Connect Ben Burtt's picture editing and sound-design functions to the film's unusually integrated post workflow without assuming that picture editing and sound design were technically the same process.",
      "Use John Williams's score and Gary Rydstrom's re-recording work as evidence that a digital-image milestone still relied on large-scale conventional and digital sound crafts.",
      "Use 142 minutes for gameplay because StarWars.com and AFI agree on that duration, while preserving BFI's 143-minute record as a catalogue/version discrepancy rather than silently normalizing it.",
      "Do not equate digital capture with digital-only distribution, digital-only sets, or absence of physical craft; Attack of the Clones is historically useful precisely because digital and physical systems remained interdependent.",
      "Do not invent exact codec/data-rate, tape inventory, battery topology, full reshoot calendar, complete VFX-tool genealogy, budget breakdown or an uncontested film-backup narrative where reviewed sources do not establish them consistently.",
    ],
    phases: [
      { id: "camera_r_and_d", label: "Finish a cinema camera while the production clock is running", player_task: "Coordinate Lucasfilm, Sony, Panavision and engineering teams so a 24p HD system, optics, monitoring and downstream workflow are usable even though the principal prototype cameras arrive only about a week before shooting." },
      { id: "backup_boundary", label: "Commit to digital while preserving contradictory backup records", player_task: "Plan the production around 24p digital acquisition and teach the later Lucasfilm versus contemporary Mix disagreement about physical 35mm backup presence without inventing certainty." },
      { id: "camera_unit", label: "Operate two main-unit and two second-unit Panavised F900s", player_task: "Build conventional camera-team discipline around the documented F900 deployment and Primo Digital zooms while supporting the new engineering layer." },
      { id: "hd_engineering", label: "Add high-definition engineering to the camera system", player_task: "Use Fred Meyers's role to manage signal integrity, camera-assistant transition, monitoring and the connection between capture and post rather than assuming familiar film-lab routines still apply." },
      { id: "live_monitoring", label: "Turn live HD monitoring into a department-wide review surface", player_task: "Let direction, cinematography, makeup, hair and set dressing inspect the full-color image immediately and correct detail before sets are struck." },
      { id: "safety_copy_sync", label: "Record safety copies and protect editorial sync", player_task: "Create real-time backup copies and standard-definition editorial versions of the HD masters, then check synchronization so faster access does not create invisible data or sound errors." },
      { id: "same_day_editorial", label: "Feed the morning's material to editorial the same day", player_task: "Use the accelerated ingest loop to request pickups while the scene, actors and set are still available instead of waiting on processed film dailies." },
      { id: "location_robustness", label: "Take prototype digital acquisition into harsh locations", player_task: "Carry the system from Sydney to Tunisia, Italy and Spain and treat environmental reliability, monitoring and data discipline as production risks rather than assuming studio tests guarantee field performance." },
      { id: "previs_vfx_design", label: "Use previsualization to design effects-heavy sequences before final photography", player_task: "Coordinate digital animatics, live-action capture and ILM requirements so camera coverage and effects construction are planned as one production system without pretending previs is the finished shot." },
      { id: "digital_character_animation", label: "Replace puppet-era limits with a fully digital Yoda", player_task: "Preserve Frank Oz's established performance identity while giving ILM enough animation latitude for full-body acting and combat, treating character continuity as a creative constraint on new technology." },
      { id: "ilm_pipeline", label: "Move more than 2,000 effects shots through a digital pipeline", player_task: "Coordinate live action, miniatures, digital characters, compositing and reviews while keeping capture, VFX and color timing as distinct stages with their own owners and failure modes." },
      { id: "digital_color_timing", label: "Finish color inside the digital pipeline", player_task: "Use ILM-supervised digital color timing to shape the completed image while preserving the distinction between color decisions, editorial cuts and VFX composites." },
      { id: "costume_hd_response", label: "Adapt costume materials to unforgiving HD capture", player_task: "Respond to schedule upheaval and image-specific problems such as the documented moire strobing incident with enough staffing, testing and last-minute craft capacity to keep continuity intact." },
      { id: "sound_music", label: "Keep sound design, mix and score independent inside digital convergence", player_task: "Coordinate Ben Burtt's sound-design work, Gary Rydstrom's re-recording and John Williams's score without turning the digital-image pipeline into a false claim that every department shared one technical workflow." },
      { id: "filmout_release", label: "Bridge a digital master to a mostly photochemical exhibition market", player_task: "Finish effects reels early enough for the documented long film-out process, create film negatives from the digital source and preserve simultaneous digital-projection delivery where available." },
      { id: "runtime_source_boundary", label: "Keep catalogue runtime disagreement inspectable", player_task: "Use the 142-minute StarWars.com/AFI runtime for gameplay while retaining BFI's 143-minute record as a source/version boundary rather than forcing one catalogue to overwrite another." },
    ],
  },
] as const;

export function mergeChapterEighteenAttackOfTheClonesExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenAttackOfTheClonesExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_attack_of_the_clones_verified",
      source: { list_id: "manual_chapter_eighteen_attack_of_the_clones_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
