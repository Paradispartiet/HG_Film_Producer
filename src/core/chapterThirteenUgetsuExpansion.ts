import type { HistoricalFilmScenario } from "./earlyCinemaExpansion.js";
import { normalizeEarlyCinemaTitle } from "./earlyCinemaExpansion.js";

export const chapterThirteenUgetsuExpansionDefinitions = [
  {
    id: "scenario_ugetsu_1953",
    title: "Ugetsu",
    originalTitle: "Ugetsu monogatari",
    aliases: ["Ugetsu Monogatari", "Tales of Moonlight and Rain"],
    year: 1953,
    titleType: "Feature",
    runtimeMins: 97,
    directors: ["Kenji Mizoguchi"],
    genres: ["Drama", "Fantasy", "Jidaigeki"],
    premise: "Build Ugetsu as a Daiei postwar period production in which literary adaptation, historical reconstruction, studio craft, mobile camera staging and supernatural transitions form one production system. Institutional records identify Daiei and producer Masaichi Nagata; Kenji Mizoguchi directing; Matsutaro Kawaguchi and Yoshikata Yoda writing from Akinari Ueda with an additional Maupassant source; Kazuo Miyagawa as director of photography; Kisaku Ito as art director; Uichiro Yamamoto as set designer; Shima Yoshimi and Tadaoto Kainosho on costumes; Fumio Hayasaka on music; Iwao Otani and Akira Suzuki on sound; Mitsuzo Miyata editing; Zenya Fukuyama on makeup; and Ritsu Hanai on hair. La Biennale records the film as a 35 mm black-and-white Daiei feature at 97 minutes, while Criterion lists a 96-minute 1.37:1 black-and-white form; preserve that one-minute institutional runtime variance rather than inventing a single universal print history. Criterion's production scholarship records Mizoguchi and Yoda combining two Ueda tales with Maupassant's Decoré!, explicitly centering the violence of civil war against ordinary people, and Kazuo Miyagawa's account that a crane was used for roughly seventy percent of the filming. Treat the famous lake passage, Lady Wakasa material, bath-to-field transition, village warfare and final return as designed movements between physical and spectral space rather than as effects detached from performance, sound, architecture and camera movement. Preserve the international festival layer separately: Venice awarded Mizoguchi the Silver Lion in 1953, helping circulate Japanese cinema abroad, but festival recognition remains downstream from production. Do not invent camera bodies, lenses, film stock, crane models, exact lighting ratios, fog machines, optical-printer recipes, exact tank dimensions, exact shooting dates or unsupported location assignments.",
    sourceId: "criterion_ugetsu_1953",
    sourceUrl: "https://www.criterion.com/films/369-ugetsu",
    scenarioType: "daiei_postwar_jidaigeki_literary_adaptation_crane_camera_supernatural_war_festival_circulation",
    requiredChoicesSeed: {
      screenplay: ["kawaguchi_yoda_ueda_maupassant_fusion", "war_violence_on_common_people", "gendered_ambition_and_supernatural_consequence"],
      camera: ["miyagawa_flowing_crane_camera", "physical_to_spectral_space_continuity", "no_invented_camera_lens_stock_package"],
      editing: ["miyata_long_take_cut_rhythm", "bath_to_field_and_return_transition_logic", "preserve_96_97_runtime_provenance"],
      sound: ["otani_suzuki_sound_labor", "hayasaka_music_and_noh_inflection", "no_invented_microphones_or_mix_workflow"],
      themes: ["film_history", "postwar_japan", "daiei", "jidaigeki", "war", "gender", "literary_adaptation", "supernatural", "camera_movement", "period_reconstruction", "festival_circulation", "preservation"],
    },
    learningGoals: [
      "Model Ugetsu as a Daiei production system under producer Masaichi Nagata rather than reducing the film to Mizoguchi as an isolated auteur.",
      "Preserve Kawaguchi and Yoda's screenplay labor and the fusion of two Akinari Ueda tales with Maupassant as a deliberate adaptation architecture.",
      "Use Mizoguchi's documented instruction about war's physical and moral violence against ordinary people to connect historical setting to production choices rather than treating civil war as decorative atmosphere.",
      "Keep Kazuo Miyagawa's cinematography separately attributable and use his account of extensive crane work to explain the film's moving spatial viewpoint without inventing hardware or lens packages.",
      "Treat the lake passage, Lady Wakasa sequences and return home as transitions between physical and spectral worlds coordinated across camera, performance, sound, design and editing.",
      "Keep Kisaku Ito's art direction and Uichiro Yamamoto's set-design labor visible so period reconstruction is not mistaken for untouched historical reality.",
      "Preserve Shima Yoshimi and Tadaoto Kainosho's costume work, Zenya Fukuyama's makeup and Ritsu Hanai's hair work as active components of class, period and supernatural characterization.",
      "Model Machiko Kyo, Masayuki Mori, Kinuyo Tanaka, Eitaro Ozawa and Mitsuko Mito as an ensemble whose performance differences organize ambition, suffering and the uncanny.",
      "Keep Mitsuzo Miyata's editor credit distinct while connecting cutting decisions to Mizoguchi's long-take staging instead of falsely implying that long takes eliminate editorial construction.",
      "Preserve Fumio Hayasaka's music and Iwao Otani/Akira Suzuki sound credits while refusing unsupported microphone, recording-stage or effects-chain claims.",
      "Preserve 35 mm black-and-white presentation and institutional 96/97-minute runtime variation as source provenance, not as a reason to invent a lost or alternate cut.",
      "Place the 1953 Venice Silver Lion and later international canonization/restoration downstream from the production itself, while using them to teach how postwar Japanese cinema circulated globally.",
    ],
    phases: [
      { id: "pitch", label: "Turn wartime ambition into a Daiei ghost tragedy", player_task: "Frame a period film in which war, profit, military aspiration and domestic abandonment create the conditions for the supernatural rather than merely surrounding it." },
      { id: "research", label: "Build period history without nostalgia", player_task: "Ground the Sengoku-era world in material reconstruction and Mizoguchi's anti-war emphasis while separating historical setting from later festival mythology." },
      { id: "screenplay", label: "Fuse Ueda and Maupassant into one moral architecture", player_task: "Coordinate Kawaguchi and Yoda's adaptation so Genjuro, Tobei, Miyagi, Ohama and Lady Wakasa belong to one causal structure rather than three disconnected source stories." },
      { id: "casting", label: "Balance realism, ritual and apparition", player_task: "Direct Mori, Tanaka, Kyo, Ozawa and Mito so ordinary labor, military fantasy, domestic suffering and spectral seduction occupy distinct performance registers." },
      { id: "production_design", label: "Make period space carry class and instability", player_task: "Coordinate Ito, Yamamoto, costume, makeup and hair across village, market, warfare and aristocratic interiors without treating period detail as museum display." },
      { id: "cinematography", label: "Move through the border between worlds", player_task: "Use Miyagawa's mobile camera and documented heavy crane practice to reveal space progressively while keeping exact camera and lens technology unclaimed." },
      { id: "editing", label: "Cut around long-take continuity", player_task: "Use Miyata's editing to preserve extended spatial staging while shaping transitions such as the bath-to-field passage and the revelation embedded in Genjuro's return." },
      { id: "sound", label: "Let music and sound carry the uncanny", player_task: "Coordinate Hayasaka with Otani and Suzuki so war, water, ritual and ghostly presence remain audible without inventing an unsupported recording workflow." },
      { id: "release", label: "Separate Daiei production from Venice canonization", player_task: "Track the film's domestic production, 1953 Venice Silver Lion, international circulation and later restoration as successive layers rather than retrospective causes." },
    ],
  },
] as const;

export function mergeChapterThirteenUgetsuExpansion(baseScenarios: readonly HistoricalFilmScenario[]): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of chapterThirteenUgetsuExpansionDefinitions) {
    const acceptedTitles = [definition.title, definition.originalTitle, ...definition.aliases].map(normalizeEarlyCinemaTitle);
    const exists = merged.some((scenario) => scenario.id === definition.id || (scenario.film.year === definition.year && [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle).some((title) => acceptedTitles.includes(title))));
    if (exists) continue;
    merged.push({
      id: definition.id,
      status: "manual_chapter_thirteen_ugetsu_verified",
      source: { list_id: "manual_chapter_thirteen_ugetsu_expansion_2026", position: nextPosition, imdb_id: definition.sourceId, url: definition.sourceUrl },
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
