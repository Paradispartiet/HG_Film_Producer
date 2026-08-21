import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const terminatorProductionCaseVerification = {
  scenarioId: "scenario_the_terminator_1984",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "The Terminator is verified as a 1984 Hemdale-led low-budget Los Angeles science-fiction/action production using AFI for development history, production companies/text, February 1984 start, ten-week principal shoot with eight weeks of nights, fifteen days of second unit, three weeks of process/special-effects photography, credited camera/editorial/art/costume/sound/music/effects departments, 107-minute release record and downstream home-video/sequel history; the April 1985 American Cinematographer interview with Adam Greenberg for the sourced hard-contrast/backlight/handheld/low-angle approach, actor-specific lighting, moving dimmer-car-light speed illusion and ground-level 'Adam Camera' support; and James Cameron's BFI interview for the dream/treatment origin and the distinct endoskeleton builds, including explodable, crushable, hero full figure, quarter-scale stop-motion miniature and Shane Mahan backpack puppet. AFI credits James Cameron and Gale Anne Hurd as writers, William Wisher Jr. for additional dialogue, Hurd as producer, John Daly and Derek Gibson as executive producers, Adam Greenberg as director of photography, Mark Goldblatt as editor, George Costello for art direction/production design, Maria Rebman Caso as set decorator, Hilary Wright as costume designer, Brad Fiedel for music, Richard Lightstone for production sound, David Campling as supervising sound editor, Robert Garrett for synthesized sound effects, and separate rerecording personnel. AFI also distinguishes Stan Winston's special Terminator effects from Fantasy II special visual effects, Gene Warren Jr.'s visual-effects supervision, Peter Kleinow and Doug Beswick stop-motion work, mechanical effects, process/rear-screen photography and pyrotechnics. The model keeps Schwarzenegger live performance, prosthetic/mechanical effects, multiple full-scale or destructible endoskeleton units, backpack puppetry, stop-motion miniature work, Fantasy II/model/optical work, process/rear-screen photography and pyrotechnics as separate production techniques. AFI reports a $6.5 million budget while the contemporary ASC article describes a $6 million production, so the case preserves a roughly $6–6.5 million contemporary record instead of teaching one figure as an independently audited absolute. It does not invent camera body, film-stock emulsion, lens package, focal lengths, shutter angles, exposure ratios, sound-recorder/microphone/mix-console hardware or an unsupported edit-room chronology, and it keeps theatrical success, home video and later franchise history downstream from the 1984 production.",
  sources: [
    {
      title: "The Terminator",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/57224-THE-TERMINATOR",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies development history, Hemdale/Pacific Western/Euro Film Funding/Orion production context, February 1984 start, principal/second-unit/process-effects chronology, Los Angeles geography, department credits, 107-minute release record and downstream home-video/sequel history."
    },
    {
      title: "Adam Greenberg on The Terminator",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/the-terminator/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Originally published April 1985; Greenberg describes the low-budget night/noir strategy, hard contrast and backlight, handheld/low-angle work, character-specific lighting, dimmer-light speed illusions and the ground-level 'Adam Camera' support."
    },
    {
      title: "The Terminator came to me in a dream: a new interview with James Cameron",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/terminator-james-cameron",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Cameron recounts the dream/treatment origin, early story development, production-control context and Stan Winston's distinct endoskeleton systems: explodable, crushable, hero full figure, quarter-scale stop-motion miniature and Shane Mahan backpack puppet."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
