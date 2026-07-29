import { clockersFilmHistoryProfile } from "./scenarioFilmStudyCrimeNoirClockers";
import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { dogDayAfternoonFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodNewYorkDogDayAfternoon";
import { taxiDriverFilmHistoryProfile } from "./scenarioFilmStudyNewHollywoodNewYorkTaxiDriver";

export const nightcrawlerFilmHistoryProfile = {
  scenarioId: "scenario_nightcrawler_2014",
  period: "Post-recession American independent neo-noir, local-news satire and hybrid Alexa/35 mm Los Angeles night cinema",
  traditions: ["Urban neo-noir and antihero cinema", "Media satire and crime-image critique", "Digital available-light location filmmaking"],
  before: "Classical noir made the night city a market of compromised looking, postwar crime photographers such as Weegee raced police to violent scenes, and New Hollywood antihero films turned mobile urban work into unstable first-person experience. Television satire later exposed how ratings could convert suffering into a commodity.",
  moment: "Dan Gilroy's directorial debut places an aggressively self-invented freelance videographer inside Los Angeles local-news economics. Field research with real nightcrawlers, Jake Gyllenhaal's gaunt coyote-like performance, Robert Elswit's Alexa night photography and 35 mm day material, Kevin Kavanaugh's working station and apartment environments, John Gilroy's taut Avid edit, police-scanner movement and James Newton Howard's falsely triumphant Lou-point-of-view score make entrepreneurial success and criminal image-making the same escalating production system.",
  after: "The original-screenplay Oscar nomination, four BAFTA nominations and Film Independent recognition established the film as a defining post-recession American neo-noir about precarious labour, self-branding, local-news fear markets and the camera's movement from witness to active participant.",
  historyQuestion: "Which production system explains a crime thriller where a self-trained cameraman treats Los Angeles violence as inventory, races a police scanner through available-light nights, edits evidence into marketable exclusives and hears his own moral collapse as heroic success?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "DGA, Film Independent, BFI and contemporary interviews place the film in post-recession Los Angeles, where precarious work, self-help corporate language and ratings-driven local news allow Lou to convert violent images into a growing business." },
    { area: "movement_and_tradition", status: "source_verified", note: "Gilroy traces the idea through Weegee's scanner-equipped crime photography, while Film Comment, BFI and ASC place the result within urban neo-noir, media satire, subjective antihero cinema and digital night filmmaking." },
    { area: "industry_and_production_context", status: "source_verified", note: "BFI and AFI document the Bold Films and Open Road production and principal producers; ASC records a compressed 26-day shoot, 24 nights and dozens of rapidly changing Los Angeles locations." },
    { area: "reception_and_legacy", status: "source_verified", note: "The Academy records Dan Gilroy's original-screenplay nomination, BAFTA recorded four nominations and Film Independent awarded Best First Feature, preserving the film as a major 2014 American independent debut." },
    { area: "screenplay", status: "source_verified", note: "Gilroy built Lou without explanatory backstory or a redemption arc, joined the character to the real nightcrawler trade, made footage a negotiable commodity and escalated him from observer to manipulator and producer of events." },
    { area: "directing", status: "source_verified", note: "DGA documents Gilroy's feature debut and his collaboration with Gyllenhaal, Elswit and Howard to withhold normal moral guidance, align craft with Lou's self-image and keep the audience inside his forward-moving success narrative." },
    { area: "performance", status: "source_verified", note: "Gyllenhaal lost substantial weight and developed Lou as a nocturnal coyote with angular, light-catching features; Russo, Ahmed and Paxton embody the station market, disposable labour and existing freelance trade around him." },
    { area: "production_design", status: "source_verified", note: "ASC documents Kevin Kavanaugh's single built apartment set and use of KCET's old, slightly rundown station facility, while found fluorescent interiors, cars, scanners and editing equipment make the news economy materially credible." },
    { area: "costume_makeup", status: "mapped", note: "AFI records the costume, makeup and hair departments and the film carefully shapes Lou's gaunt body, cheap clothes and increasingly controlled business image, but the inspected sources do not provide a department-specific Nightcrawler process account." },
    { area: "cinematography", status: "source_verified", note: "Robert Elswit and ASC document a location-led visual system that avoids the usual downtown iconography, photographs the Valley and West Hollywood as a predatory ecosystem and keeps Lou, his camera and the audience within the same searching gaze." },
    { area: "lighting", status: "source_verified", note: "Elswit and gaffer Michael Bauman selected locations for existing illumination, augmented distant practical and fluorescent backgrounds and concentrated resources on foreground faces, vehicles and crime scenes during the fast night schedule." },
    { area: "camera_format", status: "source_verified", note: "ASC documents Arri Alexa XT cameras recording ArriRaw to Codex for night work, Kodak Vision3 200T 5213 for day interiors and exteriors and a 2K DaVinci Resolve grade that maintained a deliberate day-night material difference." },
    { area: "editing", status: "source_verified", note: "Post Magazine documents John Gilroy's taut, aggressive Avid DX and Unity workflow across an eight-month post schedule; the cut turns scanner calls, arrivals, camera footage, sales and escalating interventions into an efficient business rhythm." },
    { area: "sound_design", status: "source_verified", note: "AFI credits supervising sound designer Scott Martin Gershin and the dialogue, Foley and mix teams, while the production's real-nightcrawler research fixed police codes and jargon and makes scanners, engines, sirens, television playback and newsroom speech the route through Los Angeles." },
    { area: "music", status: "source_verified", note: "DGA and the James Newton Howard account document a score conceived from Lou's own perspective: optimistic, aspirational and falsely heroic music accompanies conduct that an external moral score would normally condemn." },
    { area: "effects_animation", status: "mapped", note: "AFI records visual-effects, stunt and digital-intermediate departments supporting crashes, pursuit material, image playback and finishing, but effects remain subordinate to location photography, practical driving, editing and performance." },
    { area: "documentary_method", status: "source_verified", note: "Gilroy, Gyllenhaal and Elswit rode with real nightcrawler Howard Raishbrook, observed rapid crime-scene capture, editing and sales, retained him as technical adviser and used accurate scanner codes and jargon inside a controlled fictional escalation." },
  ],
} as const satisfies FilmHistoryProfile;

const nightcrawlerDonors = [
  taxiDriverFilmHistoryProfile,
  dogDayAfternoonFilmHistoryProfile,
  clockersFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getNightcrawlerFilmHistoryProfile(scenarioId: string): FilmHistoryProfile | undefined {
  return scenarioId === nightcrawlerFilmHistoryProfile.scenarioId
    ? nightcrawlerFilmHistoryProfile
    : undefined;
}

export function getNightcrawlerFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === nightcrawlerFilmHistoryProfile.scenarioId
    ? nightcrawlerDonors
    : undefined;
}
