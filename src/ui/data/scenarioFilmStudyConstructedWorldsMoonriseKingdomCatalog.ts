import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { coreConstructedWorldsProfiles } from "./scenarioFilmStudyConstructedWorldsCoreCatalog";
import { hugoFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsHugoCatalog";

export const moonriseKingdomFilmHistoryProfile = {
  scenarioId: "scenario_moonrise_kingdom_2012",
  period: "Early-2010s American auteur period comedy building a hand-made 1965 island world around child escape, maps, performance and approaching weather",
  traditions: ["Wes Anderson constructed worlds", "Child-runaway romance", "1960s New England storybook and scout iconography"],
  before: "Child-adventure films often separated youthful fantasy from adult social reality, while period comedies treated props, costume and location as historical background rather than as competing systems of order.",
  moment: "Wes Anderson and Roman Coppola write Sam and Suzy's escape across fictional New Penzance as a production system of maps, records, letters, scout procedure and hand-made refuge. Rhode Island locations, Adam Stockhausen's precisely altered buildings and camps, Kasia Walicka Maimone's researched uniforms and family silhouettes, Robert Yeoman's Super 16 photography, Andrew Weisblum's diagrammatic editing, Alexandre Desplat's score and Benjamin Britten source music make the island feel both materially inhabited and designed from the children's point of view.",
  after: "Opening Cannes and receiving an Academy Award nomination for original screenplay confirmed the film as a central modern example of Anderson's ability to join rigorous visual construction, young performance, weather spectacle and emotional vulnerability without reducing the world to decorative whimsy.",
  historyQuestion: "Which production system explains a 1965 island romance where maps, scout equipment, handmade costumes, lateral camera movement, Super 16 texture, Britten records and an approaching storm turn two children's escape into a complete constructed world?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes and Focus Features place the story in 1965 on a fictional New England island and document the production's research into period camps, families, clothing, objects and coastal communities." },
    { area: "movement_and_tradition", status: "source_verified", note: "The film combines Anderson's theatrical storybook construction with child-runaway romance, island adventure, scout ritual, deadpan ensemble comedy and Benjamin Britten's music for young performers." },
    { area: "industry_and_production_context", status: "source_verified", note: "Cannes records American Empirical Pictures and Indian Paintbrush with producers Wes Anderson, Scott Rudin, Steven Rales and Jeremy Dawson, and the production was filmed across Rhode Island locations." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film opened the 2012 Cannes Film Festival and received an Academy Award nomination for Anderson and Coppola's original screenplay." },
    { area: "screenplay", status: "source_verified", note: "Anderson and Coppola structure the escape through letters, narrated island history, maps, scout searches and adult pursuit while keeping Sam and Suzy's private imaginative logic emotionally primary." },
    { area: "directing", status: "source_verified", note: "Anderson coordinates frontal staging, lateral movement, exact entrances, young actors and abrupt shifts into danger so formal control and emotional instability coexist in the same scene." },
    { area: "performance", status: "source_verified", note: "Jared Gilman and Kara Hayward perform direct, self-invented seriousness against an adult ensemble whose clipped behavior and delayed emotional recognition expose the children's isolation." },
    { area: "production_design", status: "source_verified", note: "Adam Stockhausen's first Anderson feature builds and alters camps, houses, church spaces, maps, tents, canoes and the elevated treehouse as one readable island geography." },
    { area: "costume_makeup", status: "source_verified", note: "Kasia Walicka Maimone researched 1960s photographs, scout systems and family collages, then designed uniforms and repeated silhouettes that make each social unit immediately legible." },
    { area: "cinematography", status: "source_verified", note: "Robert Yeoman's Super 16 image uses centered tableaux, lateral pans, zooms, overhead plans and compressed coastal landscapes to make the island resemble both lived place and illustrated map." },
    { area: "lighting", status: "source_verified", note: "Natural coastal daylight, warm domestic practicals, theatrical church illumination and the darkening storm preserve the handmade palette while changing the island's emotional pressure." },
    { area: "camera_format", status: "source_verified", note: "American Cinematographer documents the Super 16 production, whose grain, compact camera system and depth characteristics support the period storybook texture." },
    { area: "editing", status: "source_verified", note: "Andrew Weisblum's editing preserves diagrammatic geography, comic timing and parallel search parties, then accelerates the storm, flood and steeple climax without losing spatial clarity." },
    { area: "sound_design", status: "source_verified", note: "Radio reports, scout calls, record players, waves, wind, thunder, bells and carefully separated dialogue make communication systems and approaching weather part of the island's organization." },
    { area: "music", status: "source_verified", note: "Alexandre Desplat's score, Hank Williams songs and Benjamin Britten recordings connect childhood instruction, private listening, adult melancholy and the film's layered ensemble structure." },
    { area: "effects_animation", status: "mapped", note: "Miniatures, storm augmentation, lightning, flood work and selected animal or environmental effects support the climax, but the inspected sources do not document the complete effects pipeline." },
    { area: "documentary_method", status: "not_central", note: "Period and location research ground the island, but the film is governed by overtly constructed fiction, theatrical framing and authored design rather than documentary method." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  hugoFilmHistoryProfile,
  coreConstructedWorldsProfiles.scenario_midnight_in_paris_2011,
  coreConstructedWorldsProfiles.scenario_the_truman_show_1998,
] as const satisfies readonly FilmHistoryProfile[];

export function getMoonriseKingdomFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === moonriseKingdomFilmHistoryProfile.scenarioId ? moonriseKingdomFilmHistoryProfile : undefined;
}

export function getMoonriseKingdomFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === moonriseKingdomFilmHistoryProfile.scenarioId ? donors : undefined;
}
