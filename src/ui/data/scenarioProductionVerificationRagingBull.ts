import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const ragingBullProductionCaseVerification = {
  scenarioId: "scenario_raging_bull_1980",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "Raging Bull is verified as a Chartoff-Winkler Productions film released by United Artists whose production history is unusually well documented across adaptation, performance preparation, two separated 1979 shooting periods, monochrome cinematography, color home-movie inserts, makeup, editing and expressive sound. AFI credits Paul Schrader and Mardik Martin as screenwriters and separately records modern interviews describing later De Niro/Scorsese dialogue and characterization revision; those layers are not collapsed into one authorship claim. AFI records principal photography beginning at MGM/Culver City on 16 April 1979, moving to New York in June, pausing in early August, resuming in the Los Angeles area on 3 December and wrapping in New York in late December. It also records conflicting reports of De Niro's boxing training as six, eight or more than twelve months and conflicting reports of his weight gain as 40, 50, 55 and 60 pounds. These are preserved as source variance, not normalized into a false single fact or converted into a training, diet, dehydration, weight-gain or weight-cutting protocol. AFI documents Michael Westmore's makeup transformation separately. American Cinematographer records Michael Chapman's explanation that the black-and-white system drew on televised boxing, Life magazine and earlier boxing movies; it distinguishes comparatively naturalistic domestic scenes from balletic ring photography and records the color home-movie material as 16mm reversal footage. AFI records a purpose-built multi-flashbulb device for the ringside flash effect but does not support invented electrical, lens or exposure specifications. AFI's physical-properties record describes black and white with color sequences, Dolby Stereo and a 127-129 minute duration, while BFI lists 129 minutes; the case retains that as institutional runtime/version variance. AFI describes the expressive sound pattern of overpowering background noise, silence and selective bursts and records later music-rights/clearance complications. AFI and the Academy establish Thelma Schoonmaker's editorial authorship, post-production delay and Film Editing Oscar; the Academy also records Michael Chapman's Cinematography nomination and the Sound nomination. Historical actor-performed boxing and extreme physical transformation are retained as production history only and are explicitly not contemporary safety recommendations.",
  sources: [
    {
      title: "Raging Bull",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/54882-RAGING-BULL",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents Chartoff-Winkler/United Artists production and release identity, screenplay credits and later revision history, 16 April-to-early-August and 3 December-to-late-December 1979 production blocks, New York/Los Angeles geography, conflicting training and weight-gain reports, Michael Westmore makeup, Chapman's period flash effect, expressive sound design, post-production delay, 127-129 minute duration, Dolby Stereo and the film's Academy Award record."
    },
    {
      title: "In Memoriam: Michael Chapman, ASC (1935-2020)",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/news/in-memoriam-michael-chapman-asc/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC preserves Chapman's first-person account of the black-and-white rationale, the naturalistic domestic-versus-balletic ring distinction, monochrome lighting logic and the separate 16mm reversal color home-movie material."
    },
    {
      title: "Raging Bull (1980)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/0caff9bf-8c22-568b-b70e-c211b22dba41/raging-bull",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "BFI independently records Scorsese direction, Chartoff/Winkler production, Schrader/Martin adaptation credit, Chapman's mobile black-and-white cinematography, Schoonmaker's editing and a 129-minute running time."
    },
    {
      title: "The 53rd Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1981",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Academy records Raging Bull's eight nominations, Thelma Schoonmaker's Film Editing win, Robert De Niro's Actor win, Michael Chapman's Cinematography nomination and the Sound nomination. Awards are downstream evidence rather than proof of undocumented technique."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;