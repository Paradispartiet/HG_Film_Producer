import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const onceUponATimeInHollywoodFilmHistoryProfile = {
  scenarioId: "scenario_once_upon_a_time_in_hollywood_2019",
  period: "Late-2010s period filmmaking reconstructing 1969 Los Angeles through locations, analogue capture and period media",
  traditions: ["Hollywood period film", "Los Angeles industry film", "Ensemble character comedy"],
  before: "Quentin Tarantino had already combined genre memory, film history and photochemical production across several features. This production turns those methods toward the American film and television industry at the end of the 1960s.",
  moment: "The production reconstructs 1969 Los Angeles through real streets, freeways, houses and studio spaces. Robert Richardson describes 35mm anamorphic celluloid as the main format, 35mm black-and-white spherical photography for television material, and 16mm Ektachrome plus Super 8 for home-movie passages. A roughly ninety-day shoot made location transformation, signage, vehicles, wardrobe, broadcast material, radio and music part of one coordinated historical world.",
  after: "The film competed at Cannes in 2019 and became a major example of large-scale practical period reconstruction joined to multiple photochemical formats. Its production lesson is the coordination of geography, media formats and character storytelling inside one historical environment.",
  historyQuestion: "How can a production make 1969 Hollywood feel like lived-in daily reality and remembered film history while preserving clear character storytelling across multiple media formats?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes and production records place the story in a changing 1969 Hollywood film and television industry." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film extends Tarantino's film-history and genre-collage practice into Hollywood self-history." },
    { area: "industry_and_production_context", status: "source_verified", note: "The production used an extended Los Angeles location schedule and extensive practical period resets." },
    { area: "reception_and_legacy", status: "source_verified", note: "Festival de Cannes records the film in the 2019 Competition." },
    { area: "screenplay", status: "source_verified", note: "Cannes credits Quentin Tarantino as writer and director; the screenplay interweaves several characters inside a fictionalised industry history." },
    { area: "directing", status: "source_verified", note: "The direction coordinates character scenes, period spectacle and recreated television footage inside one Los Angeles world." },
    { area: "performance", status: "source_verified", note: "The ensemble carries intersecting story strands, including acting performances staged inside recreated television productions." },
    { area: "production_design", status: "source_verified", note: "Cannes credits Barbara Ling; location work required extensive period transformation of Los Angeles streets and studio environments." },
    { area: "costume_makeup", status: "source_verified", note: "Period wardrobe and grooming distinguish film-industry, television and street environments across the 1969 reconstruction." },
    { area: "cinematography", status: "source_verified", note: "Robert Richardson describes a 1969-inspired visual language using zooms, rich colour and distinct looks for recreated television material." },
    { area: "lighting", status: "source_verified", note: "Richardson describes exposure choices designed partly around practical street and location light while retaining lens stop and colour density." },
    { area: "camera_format", status: "source_verified", note: "Kodak documents 35mm anamorphic as the principal format, 35mm black-and-white spherical television material, plus 16mm Ektachrome and Super 8 passages." },
    { area: "editing", status: "mapped", note: "Cannes credits Fred Raskin, but the inspected sources document capture and period-world construction more deeply than editorial workflow." },
    { area: "sound_design", status: "mapped", note: "Period radio, television playback and city sound are structurally important, while detailed recording and mix workflow remains insufficiently documented." },
    { area: "music", status: "source_verified", note: "Period music and radio programming connect cars, streets, homes and film-industry spaces as historical texture." },
    { area: "effects_animation", status: "mapped", note: "Effects support selected moments, but practical locations, period construction and photochemical capture dominate the verified production identity." },
    { area: "documentary_method", status: "not_central", note: "Historical research and recreated media are central, but the production remains scripted fiction rather than documentary." }
  ]
} as const satisfies FilmHistoryProfile;