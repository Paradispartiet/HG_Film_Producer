import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterEighteenCollateralExpansionDefinitions = [
  {
    id: "scenario_collateral_2004",
    title: "Collateral",
    originalTitle: "Collateral",
    year: 2004,
    titleType: "Movie",
    runtimeMins: 120,
    directors: ["Michael Mann"],
    genres: ["Crime", "Drama", "Thriller"],
    premise: "Build Collateral as a Chapter 18 anchor for hybrid early-digital feature production rather than flattening it into a claim that the movie was simply shot digitally. American Cinematographer documents Michael Mann's decision to use high-definition capture for Los Angeles night work because he wanted the available-light city to remain visible as a dramatic presence. Paul Cameron spent weeks testing the Thomson Grass Valley Viper, Sony/Panavision F900 and Sony F950 against pushed high-speed Kodak 35mm stocks and film-outs. The production rejected the F950 for this job, used the F900 as a reliable workhorse and pushed the Viper outside the workflow its designers had expected. Crucially, the Viper's celebrated uncompressed FilmStream mode was not the final practical choice for Mann's desired look: Cameron found the monitor image difficult to judge and gain behavior unsuitable, so the production used VideoStream mode, accepting compression in exchange for controllable matrix/gain response and better tested film-out results. The Viper itself lacked an onboard recorder, forcing a tethered recording system; prototype Sony SRW5000 decks were used, and camera accessories including base plates, rods, matteboxes and balance modifications had to be built or changed while production was underway. The camera strategy evolved during the twelve-week shoot. Cameron prepped and photographed roughly the first three weeks before Dion Beebe took over; dual F900s became the practical main cameras at the beginning, later dual Vipers became A and B cameras once accessories were ready, while F900s remained preferable for run-and-gun work because the Viper tether restricted mobility. Preserve the hybrid boundary. Beebe states that the big controlled interiors, about twenty percent of the picture, were photographed on 35mm; film was also used for day exteriors and stunt situations needing variable frame rates, slow motion or expanded camera coverage. One stunt used twelve cameras simultaneously: eight film cameras, two Vipers and two F900s. Matching those systems required deliberate exposure and film-processing choices rather than assuming a digital intermediate could erase every acquisition difference automatically. The taxi is a production system of its own. Mann wanted almost source-less ambient illumination inside a real moving cab. Cameron and chief lighting technician Phil Walker commissioned custom electroluminescent display panels, which took about four weeks to manufacture and left about one week for installation. Four functional taxis and three sliced trailer rigs created seven cab sets; roughly thirty ELD panels were used in each cab, with custom dimming and flexible placement. The trailers used Plexiglas to reduce wind noise while preserving available light, turning moving vehicles into mobile soundstages. Jamie Foxx's glasses created reflection problems that required additional Mini Flo fixtures. HD sensitivity also imposed new discipline: faces had to remain above tested waveform/IRE thresholds so gain noise would not become unacceptable after transfer to 35mm, meaning close-ups could look overlit on set and then be brought down digitally in color correction. Beebe and Mann reviewed calibrated HD-projected dailies designed to emulate the Laser Pacific 35mm laser-out. Viper and F900 images differed in color, highlights and aspect-ratio handling, and remote focus from sharp HD monitors became a practical response to handheld HD operation. The nighttime schedule imposed its own operational clock, with the crew racing sunrise. Beebe describes available city light, mixed sodium/mercury/tungsten/neon/fluorescent color, minimally directional augmentation and the final glass-office sequence at levels barely visible to the naked eye. Preserve the cinematographer transition as a documented production fact without speculating beyond the cited creative-differences account. Preserve physical and digital crafts together: AFI credits Stuart Beattie as the onscreen writer, Michael Mann and Julie Richardson as producers, Dion Beebe and Paul Cameron as cinematographers, Jim Miller and Paul Rubell as editors, David Wasco as production designer, Lee Orloff as production sound mixer, Elliot Koretz as sound designer/supervisor, Michael Minkler and Myron Nettinga as re-recording mixers, James Newton Howard for music, and DreamWorks SKG/Edge City Films as production companies. AFI dates production from 13 October through late December 2003 and records a 120-minute release; BFI independently records 120 minutes. Mann's DGA account frames the film as a deliberately compressed microcosm of roughly one night and describes intensive character preparation for Foxx and Cruise, while the contemporary DGA festival discussion records Cruise's view that the digital process and special taxi rigs let the actors work continuously without planning to loop all of the cab performance later. Do not invent a single exact percentage for total digital-versus-film footage, an exact universal sensor sensitivity, a claim that FilmStream raw was the final Viper mode, a claim that every night shot was digital, an exact lens on every setup, an undocumented codec/data-rate, a complete camera-serial inventory, an exact number of shooting nights, a simplified reason for the cinematographer change, or a claim that the digital intermediate made the mixed acquisition media visually identical by default.",
    sourceId: "asc_collateral_2004",
    sourceUrl: "https://theasc.com/articles/hell-on-wheels-collateral",
    scenarioType: "hybrid_hd_35mm_viper_f900_available_light_taxi_eld_di_filmout_2004",
    requiredChoicesSeed: {
      screenplay: ["stuart_beattie_credited_screenplay", "one_night_mobile_hostage_structure", "mann_character_preparation"],
      camera: ["viper_videostream_and_f900_night_capture", "35mm_controlled_interiors_day_stunts", "digi_primes_and_film_primos", "remote_focus_hd_monitoring", "no_false_all_digital_claim"],
      editing: ["jim_miller_paul_rubell_editing", "calibrated_hd_dailies", "company3_digital_intermediate", "laser_pacific_35mm_filmout", "mixed_capture_matching"],
      sound: ["lee_orloff_production_sound", "elliot_koretz_sound_design", "minkler_nettinga_rerecording", "mobile_cab_wind_control", "no_invented_sound_topology"],
      themes: ["film_history", "2000s", "collateral", "michael_mann", "paul_cameron", "dion_beebe", "los_angeles_night", "digital_cinematography", "hybrid_capture", "thomson_viper", "sony_f900", "videostream", "filmstream_boundary", "35mm", "kodak_5218", "digi_prime", "available_light", "gain", "signal_to_noise", "waveform_monitor", "ire", "remote_focus", "eld_panels", "taxi_rig", "plexiglas", "mini_flo", "mixed_color_temperature", "company_3", "laser_pacific", "digital_intermediate", "filmout", "david_wasco", "stuart_beattie", "jim_miller", "paul_rubell", "lee_orloff", "elliot_koretz", "james_newton_howard", "hybrid_workflow"],
    },
    learningGoals: [
      "Place Collateral as a major early-2000s hybrid digital/35mm production case rather than describing the entire feature as digitally captured.",
      "Explain why Mann chose HD for extensive Los Angeles night work: the format could retain ambient city information and make the nocturnal environment a dramatic presence.",
      "Treat Cameron's weeks of Viper, F900, F950, film-stock and film-out testing as a preproduction decision system rather than assuming newer digital hardware automatically won.",
      "Distinguish the Viper's FilmStream capability from the actual production choice: Cameron rejected FilmStream mode for this use and selected VideoStream behavior that could be monitored, gained and matrix-adjusted for the intended result.",
      "Keep the F900 as a practical workhorse alongside the more experimental Viper instead of turning the camera history into a single-model milestone.",
      "Model the Viper's lack of onboard recording as a mobility and engineering problem requiring tethered prototype recording decks and custom accessories.",
      "Preserve the camera-package evolution: dual F900s were practical main cameras early; later Vipers became A/B cameras once accessories matured; F900s remained useful for run-and-gun work.",
      "Keep Paul Cameron's prep/first roughly three weeks and Dion Beebe's subsequent photography roles explicit without speculating beyond the documented creative-differences transition.",
      "Use Beebe's statement that big controlled interiors comprised about twenty percent of the picture as a bounded figure, not as proof of an exact overall 80/20 digital-versus-film split.",
      "Preserve 35mm for controlled interiors, day exteriors and selected stunt/variable-frame-rate needs rather than falsely making every night/day or interior/exterior decision absolute.",
      "Use the twelve-camera stunt setup—eight film cameras, two Vipers and two F900s—as evidence that hybrid capture could multiply matching and exposure problems inside one event.",
      "Explain why pushed 35mm stocks, digital gain and fast lenses created radically different exposure conditions that had to be reconciled shot by shot.",
      "Treat the taxi as a designed production environment: four functional taxis plus three trailer sections created seven distinct mobile shooting rigs.",
      "Use the roughly four-week ELD-panel manufacturing period and one-week installation margin as a real scheduling dependency rather than lighting trivia.",
      "Keep roughly thirty custom ELD panels per cab as a source-backed lighting solution for low-level, flexible, dimmable interior illumination.",
      "Connect the Plexiglas trailer design to both sound and cinematography: it reduced wind noise while admitting ambient exterior light.",
      "Treat reflections in Jamie Foxx's glasses as an interaction between performance, camera movement and practical lighting that forced a Mini Flo workaround.",
      "Explain the tested IRE/gain discipline: actor faces needed enough signal to survive the eventual film-out even when that meant close-ups appeared overlit on the set monitor.",
      "Keep digital color correction distinct from exposure: faces could be brought down later, but post could not recover information never captured above the unacceptable noise threshold.",
      "Use calibrated HD-projected dailies that emulated the 35mm laser-out as evidence that the intended theatrical endpoint shaped on-set digital decisions.",
      "Distinguish Viper and F900 handling of color, highlights and 2.37/2.40 framing rather than treating all HD cameras as interchangeable.",
      "Treat remote focus from sharp HD monitors as a workflow adaptation to handheld digital cinematography, not a universal replacement for traditional focus practice.",
      "Model sunrise as a hard night-production deadline and mixed Los Angeles practical lighting as both an aesthetic resource and a color-management problem.",
      "Use the final glass-office sequence as a bounded example of extreme low-light digital capture where reflections made conventional added lighting especially difficult.",
      "Keep 35mm film-out and the digital intermediate visible as separate downstream processes: digital acquisition did not mean digital-only theatrical delivery.",
      "Preserve AFI's 13 October–late December 2003 production window and 120-minute release duration without inventing an exact count of shooting nights.",
      "Connect Mann's detailed character preparation and long digital takes to the cab drama without claiming technology alone produced performance authenticity.",
      "Keep production sound, sound design, re-recording and James Newton Howard's music as independent craft systems rather than folding every department into the camera transition.",
      "Do not invent a single exact overall digital percentage, universal ISO, exact lens per setup, codec/data-rate, camera serial inventory, simplified cinematographer-change narrative or automatic mixed-media match.",
    ],
    phases: [
      { id: "format_tests", label: "Test HD systems against pushed 35mm and the final film-out", player_task: "Compare Viper, F900 and F950 behavior with high-speed Kodak film under the actual low-light target and judge results at the intended 35mm projection endpoint." },
      { id: "viper_mode_boundary", label: "Reject the prestigious raw mode when it does not serve the production", player_task: "Choose the documented Viper VideoStream workflow over FilmStream for Mann's gain/matrix/monitoring needs, preserving the tradeoff rather than assuming raw capture is automatically superior." },
      { id: "prototype_recording", label: "Make a tethered experimental camera production-ready", player_task: "Support Vipers with prototype SRW5000 recording, fiber connections and custom physical accessories while protecting mobility, monitoring and reliability." },
      { id: "camera_transition", label: "Carry visual continuity through a cinematographer change", player_task: "Preserve the tested exposure and color discipline when Dion Beebe takes over after Cameron's opening weeks while allowing Beebe to solve later scenes rather than mechanically copying every earlier choice." },
      { id: "hybrid_capture_map", label: "Assign HD and 35mm where each system serves the scene", player_task: "Use HD for extensive low-light night work and retain 35mm for controlled interiors, day work, variable-frame-rate and selected stunt requirements without creating a false all-digital rule." },
      { id: "multi_camera_stunt", label: "Match twelve cameras across radically different capture conditions", player_task: "Coordinate eight film cameras, two Vipers and two F900s in one stunt while managing gain, lens speed, frame rate and pushed film so coverage remains editorially usable." },
      { id: "taxi_rig_build", label: "Turn seven cab configurations into mobile stages", player_task: "Coordinate four functioning taxis and three lightweight sliced trailer rigs so camera, actors, available light, road movement and production sound can work together." },
      { id: "eld_schedule", label: "Build custom low-level taxi lighting against a tight deadline", player_task: "Protect the four-week ELD fabrication and final installation window, then distribute roughly thirty flexible panels per cab with dimming and rapid repositioning." },
      { id: "glasses_reflection", label: "Keep low-level cab lighting out of reflective eyewear", player_task: "Rebalance ELD and Mini Flo placement around Jamie Foxx's moving eyelines so the face remains photographable without filling the glasses with obvious fixtures." },
      { id: "signal_noise", label: "Expose faces for the film-out, not just the attractive monitor image", player_task: "Hold actor faces above tested waveform thresholds at elevated gain even when the on-set close-up looks too bright, then reserve digital darkening for captured information rather than noise rescue." },
      { id: "remote_focus", label: "Move critical focus judgment to calibrated HD monitoring", player_task: "Use sharp monitors and remote focus where the handheld HD system benefits from it while accounting for squeeze, processing delay and other camera-specific viewing problems." },
      { id: "night_color", label: "Shape mixed Los Angeles practical color without erasing the city", player_task: "Balance sodium, mercury, tungsten, neon and fluorescent sources with minimal supplementary light so the city remains visible but excessive mixed saturation does not break Mann's intended mood." },
      { id: "sunrise_clock", label: "Finish night work before the city becomes day", player_task: "Treat dawn as a non-negotiable production deadline, prioritizing pivotal material and keeping camera/lighting changes fast enough to preserve the night's continuity." },
      { id: "glass_office", label: "Shoot near-darkness inside a reflective office maze", player_task: "Use Viper/F900 sensitivity, silhouettes and hidden low-level fixtures while preventing every added source from multiplying through the glass reflections." },
      { id: "di_filmout", label: "Unify hybrid sources through DI without pretending they began identical", player_task: "Carry HD and 35mm material through Company 3 color work and Laser Pacific film-out while retaining source-specific exposure, grain, noise and framing constraints." },
      { id: "performance_preparation", label: "Let preparation and long takes support the two-person drama", player_task: "Use Mann's researched character histories, Cruise/Foxx preparation and the mobile cab system to sustain performance continuity without claiming digital cameras substitute for rehearsal or direction." },
      { id: "sound_music", label: "Protect production sound, design, re-recording and music as distinct crafts", player_task: "Coordinate Lee Orloff's location sound, Elliot Koretz's sound design, Minkler/Nettinga's re-recording and James Newton Howard's music alongside the hybrid image workflow without inventing undocumented track topology." },
    ],
  },
] as const;

export function mergeChapterEighteenCollateralExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterEighteenCollateralExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_eighteen_collateral_verified",
      source: { list_id: "manual_chapter_eighteen_collateral_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
