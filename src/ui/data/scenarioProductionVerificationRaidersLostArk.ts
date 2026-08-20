import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const raidersLostArkProductionCaseVerification = {
  scenarioId: "scenario_raiders_of_the_lost_ark_1981",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "AFI, American Cinematographer, Industrial Light & Magic, the Academy and Lucasfilm support Raiders of the Lost Ark as a Lucasfilm production distributed by Paramount and built through tightly coordinated development, a 73-day multi-location shoot, an experienced British large-scale production workforce, extensive storyboarding, second-unit stunt work, Douglas Slocombe cinematography, Norman Reynolds production design, Michael Kahn editing, Ben Burtt/Richard L. Anderson sound-effects editing, a separate final-sound team, John Williams's score and ILM optical/matte effects. AFI documents Lucas's early concept, Lucas-Spielberg-Kasdan development, principal photography beginning 23 June 1980, La Rochelle/Elstree/Tunisia/Kauai and other locations, 73 filming days and a reported final $22.8 million budget. Spielberg's 1981 American Cinematographer account documents the compressed schedule, storyboards, British Star Wars-era crew continuity, Michael D. Moore's second-unit truck-chase work and his collaboration with Slocombe on backlit color and controlled shadow. ILM documents the Ark finale's gossamer puppets filmed in water, optical work, matte paintings and more than fifty passes on some shots. The Academy confirms the principal editing, sound, sound-effects-editing and visual-effects credits and awards. Lucasfilm separately documents Burtt's layered source recording for snake movement. Later 4K restoration and Dolby Atmos remixing are retained only as downstream version history, not original 1981 production evidence. No unsupported camera body, lens package, negative-stock emulsion, exposure ratios, microphone chain or day-by-day schedule is invented.",
  sources: [
    {
      title: "Raiders of the Lost Ark",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/67250-RAIDERS-OF-THE-LOST-ARK",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents the Lucas-Spielberg-Kasdan development history, Lucasfilm production and Paramount distribution arrangement, principal production credits, production start, multi-country locations, 73 filming days, reported final budget, 115-minute runtime, Dolby Stereo and theatrical release history."
    },
    {
      title: "Of Narrow Misses and Close Calls: Raiders of the Lost Ark — Directing",
      publisher: "American Cinematographer",
      url: "https://theasc.com/article/flashback-raiders-of-the-lost-ark-directing/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Spielberg's production account documents the 73-day strategy, extensive storyboarding, British crew continuity, Douglas Slocombe and Michael Kahn collaboration, Michael D. Moore's second-unit truck chase, production-design preparation and the negotiated backlit/color lighting style."
    },
    {
      title: "Raiders of the Lost Ark",
      publisher: "Industrial Light & Magic",
      url: "https://www.ilm.com/vfx/raiders-of-the-lost-ark/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "ILM documents the Ark finale's gossamer puppets filmed in a water tank, optical effects, matte paintings, extensive multi-pass compositing and Richard Edlund's visual-effects supervision."
    },
    {
      title: "The 54th Academy Awards | 1982",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1982",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The Academy confirms Michael Kahn's editing win, Bill Varney/Steve Maslow/Gregg Landaker/Roy Charman's sound win, Ben Burtt/Richard L. Anderson's sound-effects-editing award, Richard Edlund/Kit West/Bruce Nicholson/Joe Johnston's visual-effects win, Douglas Slocombe's cinematography nomination and John Williams's score nomination."
    },
    {
      title: "Inside the World of Indiana Jones",
      publisher: "Lucasfilm",
      url: "https://www.lucasfilm.com/news/inside-the-world-of-indiana-jones/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Lucasfilm documents Ben Burtt's use of layered source recording to construct the Well of Souls snake movement, supporting film-specific sound-design practice without inventing a broader undocumented signal chain."
    },
    {
      title: "All Four Indiana Jones Movie Adventures on 4K Ultra HD for the First Time",
      publisher: "Lucasfilm",
      url: "https://www.lucasfilm.com/news/all-four-indiana-jones-movie-adventures-on-4k-ultra-hd-for-the-first-time/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Lucasfilm documents the later 4K picture work and Dolby Atmos remix supervised with original sound elements; this source is used only to separate downstream restoration/remix from the original 1981 Dolby Stereo production."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
