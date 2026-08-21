import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aliensProductionCaseVerification = {
  scenarioId: "scenario_aliens_1986",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "Aliens is verified as a Brandywine / Twentieth Century Fox sequel produced through a centralized British production system at Pinewood Studios and Acton Lane Power Station. AFI documents James Cameron's forty-two-page 1983 treatment, Fox's hesitation, the later revival after The Terminator, and Gale Anne Hurd's decision to keep the production centered in London. AFI preserves a start-date discrepancy between studio notes giving 30 September 1985 and Screen International giving 5 October; the case keeps that discrepancy explicit rather than inventing one exact date. AFI also records the replacement of James Remar by Michael Biehn as Hicks, which is modeled as casting, continuity and schedule evidence rather than gossip. Adrian Biddle is director of photography; AFI records Moviecam camera and lenses supplied by Cinefocus London, Eastman Kodak color and Rank Film Laboratories processing, while leaving exact Moviecam bodies, lens series, focal-length assignments and exposure settings unspecified. Peter Lamont is production designer, Ray Lovejoy editor and James Horner composer. Academy technical and awards records keep effects authorship plural: creature-effects coordinators Alec Gillis, Shane Mahan, John Rosengrant and Tom Woodruff Jr.; miniatures technical supervisor Pat McClung; visual-effects supervisors Robert and Dennis Skotak; and Academy Visual Effects recipients Robert Skotak, Stan Winston, John Richardson and Suzanne Benson. The Academy retrospective characterizes much of the work as in-camera/original-negative problem solving involving practical tricks such as wires and mirrors, but this is not generalized into a false claim that no optical compositing was used. AFI's record of a March 1986 Pinewood explosion injuring two special-effects technicians is preserved only as safety history, never as an effects recommendation. The 137-minute release runtime, 70mm-print strategy and later Academy recognition remain downstream from original production.",
  sources: [
    {
      title: "Aliens",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/68347-ALIENS",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents the 1983 treatment and development path, Brandywine/Twentieth Century Fox production, Pinewood and Acton Lane locations, the 30 September / 5 October start-date discrepancy, Remar-to-Biehn recast, Adrian Biddle, Moviecam/Cinefocus, Eastman/Rank, principal departments, runtime and release history."
    },
    {
      title: "Aliens Lands at Academy to Inaugurate Prime Tech Series",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://digitalcollections.oscars.org/digital/api/collection/p15759coll4/id/3819/download",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Academy technical retrospective separates creature-effects coordinators, miniature supervision and visual-effects supervision and describes extensive in-camera/original-negative effects problem solving alongside optical compositing."
    },
    {
      title: "The 59th Academy Awards (1987)",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1987",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "Official Academy record confirms Aliens' seven nominations, the Visual Effects win for Robert Skotak, Stan Winston, John Richardson and Suzanne Benson, the Sound Effects Editing win for Don Sharpe, and nominations for Weaver, art direction, editing, score and sound."
    },
    {
      title: "Aliens (1986)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/f6770cd5-0ccb-5c65-be26-b5a920c05edf/aliens",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "BFI independently identifies the 1986 US/UK film, James Cameron, Gale Anne Hurd and the principal cast, and situates the sequel's shift from the first film's horror emphasis toward action without substituting reception for production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
