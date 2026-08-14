import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const rescuedByRoverProductionCaseVerification = {
  scenarioId: "scenario_rescued_by_rover_1905",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Rescued by Rover's Hepworth/Fitzhamon production, Blair's animal performance, route-based causal geography, silent format and replacement-version history are supported by BFI Screenonline, Screen Archive South East, the Danish Film Institute and Science Museum sources.",
  sources: [
    {
      title: "Rescued by Rover (1905)",
      publisher: "BFI Screenonline",
      url: "https://www.screenonline.org.uk/film/id/514859/index.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "BFI Screenonline identifies the film as a major British cinema breakthrough and documents its clear route-based multi-shot storytelling, Hepworth production context, Fitzhamon direction and exceptional popularity."
    },
    {
      title: "Rescued by Rover",
      publisher: "Screen Archive South East",
      url: "https://screenarchive.brighton.ac.uk/detail/8407/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The regional film archive records the 1905 Hepworth production, Lewin Fitzhamon direction, May Clark casting, black-and-white silent format and the dog-led recovery of the kidnapped child."
    },
    {
      title: "Rescued by Rover",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/120019",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "The Danish Film Institute catalogues the 1905 British Hepworth short as silent fiction and supplies an institutional cross-check for production company, direction and surviving-film identity."
    },
    {
      title: "A dog detective, fairies, and Sherlock Holmes’ dressing gown",
      publisher: "Science Museum",
      url: "https://blog.sciencemuseum.org.uk/dog-detective-fairies-sherlock-holmes-dressing-gown/",
      sourceKind: "archive_feature",
      supports: ["overall", "performance", "editing"],
      note: "Science Museum history identifies Blair as the canine lead and records that exceptional popularity forced Rescued by Rover to be re-shot multiple times after negatives wore out, making version history a material production issue."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
