import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { clockersFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirClockers";
import { mesrineKillerInstinctFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirMesrineKillerInstinct";
import { outOfThePastFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirOutOfThePast";

export const aProphetFilmHistoryProfile = {
  scenarioId: "scenario_a_prophet_2009",
  period: "Late-2000s French prison cinema, multilingual gangster apprenticeship and social-institutional realism",
  traditions: ["French prison film", "Gangster apprenticeship narrative", "Multilingual social realism"],
  before: "Gangster films often chart ascent through external action, while prison dramas turn architecture, routine and affiliation into compressed political worlds. French social cinema adds questions of migration, language and institutional exclusion.",
  moment: "Jacques Audiard, Thomas Bidegain, Abdel Raouf Dafri and Nicolas Peufaillit build Malik's transformation through six years of prison time, divided languages and changing access to knowledge. Because functioning contemporary prisons could not be used, Michel Barthélémy's team constructs a full prison in an industrial zone at Gennevilliers. Tahar Rahim develops Malik through research, physical reserve and rapid learning; Niels Arestrup trains for months in Corsican; Stéphane Fontaine's camera and Juliette Welfling's editing move between confinement, observation, visions and temporary release while Alexandre Desplat's music and a detailed sound field sustain institutional pressure.",
  after: "The Cannes Grand Prix, nine César awards and international circulation established the film as a major modern prison and gangster work, especially influential as a model of social ascent told through language, space, performance and institutional procedure.",
  historyQuestion: "Which production system explains how A Prophet turns a purpose-built prison, multilingual group boundaries, a newcomer performance, shifting institutional access and episodic time into a gangster apprenticeship?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Cannes and Cineuropa place the film within contemporary French prison conditions, migration, racialized group structure and the international afterlife of the gangster genre." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production combines prison realism, gangster apprenticeship, social metaphor and moments of subjective or spiritual rupture." },
    { area: "industry_and_production_context", status: "source_verified", note: "DFI and Cannes document the French-Italian production, Why Not Productions, the principal departments and the decision to build a complete working prison environment." },
    { area: "reception_and_legacy", status: "source_verified", note: "Cannes records the Grand Prix, the César academy records nine wins, and institutional circulation preserves the film as a defining late-2000s French work." },
    { area: "screenplay", status: "source_verified", note: "The four credited writers organize six years as escalating access to languages, labor, alliances, literacy and movement between the prison and outside networks." },
    { area: "directing", status: "source_verified", note: "Audiard coordinates social detail, genre momentum and subjective visions while treating prison rules, multilingual secrecy and spatial access as dramatic action." },
    { area: "performance", status: "source_verified", note: "Tahar Rahim builds Malik from watchful physical restraint toward strategic confidence, while Niels Arestrup trained with a coach for months to inhabit Corsican speech and authority." },
    { area: "production_design", status: "source_verified", note: "Michel Barthélémy's full prison construction in Gennevilliers provides cells, corridors, yards and institutional circulation as a coherent pressure system rather than modular studio fragments." },
    { area: "costume_makeup", status: "mapped", note: "Prison clothing, civilian transitions and bodily changes track status and time, but the inspected sources do not provide a complete costume, hair and makeup workflow." },
    { area: "cinematography", status: "source_verified", note: "Stéphane Fontaine's image moves between close institutional observation, wider group geography, surveillance-like distance and Malik's exceptional subjective moments." },
    { area: "lighting", status: "mapped", note: "The constructed prison permits controlled daylight, institutional practicals and night work, but a detailed fixture, stock or exposure account was not located in the inspected sources." },
    { area: "camera_format", status: "source_verified", note: "Institutional production records identify Stéphane Fontaine's photochemical feature cinematography and widescreen presentation across the prison and exterior material." },
    { area: "editing", status: "source_verified", note: "Juliette Welfling compresses years into repeated procedures, sudden reversals, outside missions and associative visions while keeping Malik's accumulation of knowledge legible." },
    { area: "sound_design", status: "source_verified", note: "Language, doors, keys, corridors, distant voices and group-specific speech make institutional access and exclusion audible; the sound work was part of the film's César recognition." },
    { area: "music", status: "source_verified", note: "Alexandre Desplat's credited score supports transformation and subjective lift without replacing the prison's dense procedural sound field." },
    { area: "effects_animation", status: "not_central", note: "Selective effects support visions and continuity, but the defining production system is built from set, performance, language, camera, editing and sound." },
    { area: "documentary_method", status: "source_verified", note: "Prison visits, performer research, dialect coaching and the purpose-built institution give the fiction researched procedural authority without claiming documentary status." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  clockersFilmHistoryProfile,
  mesrineKillerInstinctFilmHistoryProfile,
  outOfThePastFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getAProphetFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === aProphetFilmHistoryProfile.scenarioId ? aProphetFilmHistoryProfile : undefined;
}

export function getAProphetFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === aProphetFilmHistoryProfile.scenarioId ? donors : undefined;
}
