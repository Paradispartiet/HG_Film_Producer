import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const alamarFilmHistoryProfile = {
  scenarioId: "scenario_alamar_2009",
  period: "Late-2000s Mexican hybrid cinema joining family fiction, reef observation and micro-crew digital production",
  traditions: ["Latin American hybrid fiction-documentary", "Family journey film", "Ecological observational cinema"],
  before: "Family separation and return stories often rely on scripted conflict, while documentary ethnography and nature cinema observe labor, habitat and daily duration. Small digital crews made it possible to combine these traditions without separating staged narrative from spontaneous encounter.",
  moment: "Pedro González-Rubio writes, directs, photographs, edits, designs and co-produces a 73-minute feature around a real father, son and grandfather at Banco Chinchorro. A tiny crew works from stilt houses and fishing boats, prepares a simple fictional spine and allows weather, fishing labor, animals and the arrival of a wild bird to reshape scenes. HDCAM capture, Emmanuel and Rodolfo Romero's sound design and the performers' own relationships keep the production mobile enough to observe reef life while maintaining a clear farewell story.",
  after: "The Rotterdam Tiger Award and continuing museum, archive and festival circulation established Alamar as a durable example of how a modest hybrid production can treat ecology, family intimacy and location as the same dramatic system.",
  historyQuestion: "Which production system explains how Alamar combines a simple father-son fiction, real family relationships, a tiny reef-based crew, spontaneous animal encounters, HDCAM observation and restrained editing?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "IFFR, UCLA and filmmaker interviews place the film at Banco Chinchorro within concern for a protected coral ecosystem, fishing labor and a child divided between Mexico and Italy." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film joins Latin American hybrid cinema, observational documentary, family journey narrative and ecological location filmmaking." },
    { area: "industry_and_production_context", status: "source_verified", note: "IFFR records Mantarraya Producciones and Xcalakarma, while interviews document a deliberately small mobile production built around the director's multiple craft roles." },
    { area: "reception_and_legacy", status: "source_verified", note: "IFFR records the Tiger competition context, and UCLA, BAMPFA and international festival archives preserve the film as an important family and hybrid-cinema work." },
    { area: "screenplay", status: "source_verified", note: "A minimal fictional spine—the child's last visit before moving to Italy—organizes real relationships and daily reef activity without forcing conventional dramatic escalation." },
    { area: "directing", status: "source_verified", note: "González-Rubio prepares situations and camera positions but remains open to spontaneous actions, environmental changes and animal encounters that become part of the story." },
    { area: "performance", status: "source_verified", note: "Jorge, Natan and Nestór draw on their real relationships and work, allowing affection, instruction and separation to emerge through practical activity rather than performed exposition." },
    { area: "production_design", status: "mapped", note: "The stilt house, fishing boat and tools are real working environments rather than a conventional design build, although IFFR credits González-Rubio with production design." },
    { area: "costume_makeup", status: "mapped", note: "Everyday fishing clothes and bodies shaped by sun, salt and labor support authenticity, but no separate costume, hair or makeup workflow is documented." },
    { area: "cinematography", status: "source_verified", note: "González-Rubio photographs from within boats, water, huts and reef routines, balancing composed fictional setups with responsiveness to weather, animals and family behavior." },
    { area: "lighting", status: "mapped", note: "The image relies heavily on available tropical daylight and practical night conditions, but the inspected sources do not document a dedicated lighting package." },
    { area: "camera_format", status: "source_verified", note: "IFFR identifies HDCAM as the production and presentation medium, while UCLA documents later 35 mm exhibition circulation." },
    { area: "editing", status: "source_verified", note: "The director's own editing shapes repeated labor, meals, dives, play and quiet observation into a gentle countdown toward separation rather than a plot-heavy journey." },
    { area: "sound_design", status: "source_verified", note: "Emmanuel Romero and Rodolfo Romero's credited sound design centers water, wind, engines, birds, tools and close family speech as the material rhythm of the reef." },
    { area: "music", status: "mapped", note: "Diego Benlliure is credited, but the production's dominant musical structure comes from environmental rhythm and no detailed score-process source was located." },
    { area: "effects_animation", status: "not_central", note: "The production depends on real family, labor, animals, boats, water and weather rather than effects construction." },
    { area: "documentary_method", status: "source_verified", note: "The director explicitly describes a fiction made with documentary spirit: real people and place, a small crew, prepared situations and openness to unrepeatable events." },
  ],
} as const satisfies FilmHistoryProfile;

const donorScenarioIds = [
  "scenario_stranger_than_paradise_1984",
  "scenario_paris_texas_1984",
  "scenario_nebraska_2013",
] as const;

export function getAlamarFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === alamarFilmHistoryProfile.scenarioId ? alamarFilmHistoryProfile : undefined;
}

export function getAlamarDonorScenarioIds(profile: FilmHistoryProfile): readonly string[] | undefined {
  return profile.scenarioId === alamarFilmHistoryProfile.scenarioId ? donorScenarioIds : undefined;
}
