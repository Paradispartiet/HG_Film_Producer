import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { coreConstructedWorldsProfiles } from "./scenarioFilmStudyConstructedWorldsCoreCatalog";
import { walleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsWalleCatalog";

export const herFilmHistoryProfile = {
  scenarioId: "scenario_her_2013",
  period: "Early-2010s American speculative romance constructing a warm near-future Los Angeles through disembodied voice, humane interfaces and urban solitude",
  traditions: ["Near-future romantic science fiction", "Voice-led chamber romance", "Soft urban speculative design"],
  before: "Screen romances normally organize intimacy through two visible bodies, while artificial-intelligence cinema often externalizes technology as hardware, spectacle or threat. Her instead inherits intimate relationship drama, city melancholy and speculative design while removing one partner from the image.",
  moment: "Spike Jonze builds Theodore and Samantha's relationship through Joaquin Phoenix's embodied listening and Scarlett Johansson's post-produced voice performance. K.K. Barrett and Gene Serdena combine Los Angeles with Shanghai architecture, Casey Storm removes familiar contemporary fashion cues, Hoyte van Hoytema uses warm colour and close observation, Eric Zumbrunnen and Jeff Buchanan edit around an unseen partner, Ren Klyce makes the operating system audible but unobtrusive, and Arcade Fire's music joins memory, loneliness and connection inside a future designed to feel pleasant rather than dystopian.",
  after: "Jonze's Academy Award and Writers Guild Award for original screenplay, together with Academy nominations for Best Picture, Production Design, score and song, established Her as a central early-2010s case in making artificial intelligence emotionally legible through writing, voice, performance, design, editing and sound rather than technological spectacle.",
  historyQuestion: "Which production system best explains a near-future romance where one partner is never seen, yet voice performance, close observation, warm colour, city architecture, discreet interfaces, editing, sound and music make the relationship feel physically present?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Institutional and contemporary production records place the film inside early-2010s American concern with personalized operating systems, digital mediation and loneliness while deliberately rejecting the cold dystopian surface common to screen futures." },
    { area: "movement_and_tradition", status: "source_verified", note: "The production joins romantic drama, city melancholy, near-future science fiction and a voice-led chamber form in which the absent partner must be constructed without conventional reverse shots." },
    { area: "industry_and_production_context", status: "source_verified", note: "Danish Film Institute and Academy records identify the Annapurna production, Spike Jonze's first solo feature screenplay, producers Megan Ellison, Jonze and Vincent Landay, and the principal image, design, editing, sound and music departments." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records Jonze's original-screenplay win and four additional nominations, while the Writers Guild records Her as its original-screenplay winner, fixing the film's immediate historical position as both speculative cinema and relationship writing." },
    { area: "screenplay", status: "source_verified", note: "Jonze centers a professional letter writer whose operating system develops from assistant to lover and finally beyond a single human relationship; dialogue was repeatedly rewritten during the long edit so Samantha's changing intelligence remained emotionally playable rather than mechanically explained." },
    { area: "directing", status: "source_verified", note: "Jonze organizes the production around intimate performance and precise emotional revision, first staging Theodore's exchanges with Samantha Morton live and later directing Scarlett Johansson closely in recording sessions while reshaping scenes around the new voice." },
    { area: "performance", status: "source_verified", note: "Joaquin Phoenix carries listening, embarrassment, desire and loss largely through face, posture and private speech, while Johansson builds Samantha entirely through vocal timing and tonal change; the final relationship is therefore a coordinated live-action, recording and editorial performance." },
    { area: "production_design", status: "source_verified", note: "K.K. Barrett and Gene Serdena create a tactile, inviting future from enlarged domestic spaces, car-light elevated circulation, restrained devices and a digital combination of Los Angeles with Shanghai's Pudong skyline rather than conventional futuristic hardware." },
    { area: "costume_makeup", status: "source_verified", note: "Casey Storm removes ties, belts, denim and familiar science-fiction uniforms, combines references from several decades and uses high-waisted trousers, natural fabrics and warm colours to make the future distinct without turning clothing into spectacle." },
    { area: "cinematography", status: "source_verified", note: "Hoyte van Hoytema rejects blue-and-steel futurism in favour of warm reds, yellows and browns, close observation of Phoenix and periodic wide city views that contrast Theodore's loneliness with a functioning, attractive social world." },
    { area: "lighting", status: "mapped", note: "Soft interiors, warm practical sources and bright urban exteriors sustain the film's welcoming future, but the inspected sources do not provide a complete scene-by-scene lighting or exposure account." },
    { area: "camera_format", status: "source_verified", note: "The Academy's production record identifies a 35 mm presentation, supporting the film's photochemical texture and the decision to make the future feel tactile and inhabited rather than clinically digital." },
    { area: "editing", status: "source_verified", note: "Eric Zumbrunnen and Jeff Buchanan avoid cutting repeatedly to the device, remove an attempted physical visualization of Samantha, rebuild Johansson's rewritten performance in postproduction and intercut the final letter with the relationship's aftermath." },
    { area: "sound_design", status: "source_verified", note: "Ren Klyce's credited sound system keeps Samantha's voice, earpiece communication, interface cues, city ambience and private room tone clear enough that an invisible character can occupy scenes without a visible body or loud technological effects." },
    { area: "music", status: "source_verified", note: "Arcade Fire's credited score and the film's songs move between private composition, shared listening and emotional memory; editorial testimony documents music being tested against footage and reassigned to the ending during postproduction." },
    { area: "effects_animation", status: "source_verified", note: "Digital skyline melding, discreet screen graphics and selective environmental alteration extend Los Angeles into the near future while remaining subordinate to architecture, costume, performance and sound rather than announcing themselves as effects spectacle." },
    { area: "documentary_method", status: "not_central", note: "Contemporary observation and recognizable urban behaviour make the world plausible, but documentary or nonfiction method is not central to this scripted speculative romance." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  coreConstructedWorldsProfiles.scenario_the_truman_show_1998,
  coreConstructedWorldsProfiles.scenario_moon_2009,
  walleFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getHerFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === herFilmHistoryProfile.scenarioId ? herFilmHistoryProfile : undefined;
}

export function getHerFilmHistoryDonors(profile: FilmHistoryProfile): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === herFilmHistoryProfile.scenarioId ? donors : undefined;
}
