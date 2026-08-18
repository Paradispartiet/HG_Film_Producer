import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const jazzSingerProductionCaseVerification = {
  scenarioId: "scenario_the_jazz_singer_1927",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, BFI, Museum of the Moving Image, Library of Congress and the Smithsonian support The Jazz Singer as a 1927 Warner Bros./Vitaphone feature whose historically important novelty is a mostly silent film with selected synchronized music, speech and effects rather than a fully spoken feature. AFI records production in June–July 1927, the 6 October New York premiere, Alan Crosland directing, Al Cohn adapting Samson Raphaelson, Hal Mohr and Frank Zucker in photography, Harold McCord editing, Louis Silvers for score/Vitaphone orchestra direction, George R. Groves for sound and Nugent Slaughter for engineering effects; AFI explicitly classifies the picture as 'Silent with sound sequences.' BFI and Museum of the Moving Image document Vitaphone as separate sound-on-disc technology using 16-inch records synchronized mechanically with film projection, making disc/reel alignment and compatible theatre equipment part of the case rather than background trivia. AFI also cautions that the film was not the first talking picture or first synchronized-sound film, while its success materially accelerated industrial conversion. Library of Congress and Smithsonian evidence documents Jolson's blackface performance, so the case treats racist performance practice as a critical historical problem and never a gameplay objective. The film's Jewish family, cantorial and Yom Kippur context likewise remains specific rather than being reduced to accent, costume or stereotype.",
  sources: [
    {
      title: "The Jazz Singer (1927)",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/1535-THE-JAZZ-SINGER",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies production/release dates, Warner Bros. and Vitaphone production companies, Crosland/Cohn/Mohr/Zucker/McCord/Silvers/Groves/Slaughter credits, Raphaelson source history, 90-minute/nine-reel technical data and the crucial physical-property description 'Silent with sound sequences' with talking sequences, score and effects by Vitaphone. AFI also states that the film was not the first talking picture or first synchronized-sound film, while its success significantly accelerated industrial conversion."
    },
    {
      title: "All about film sound and how we restore it",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/all-about-film-sound-how-we-restore-it",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "BFI documents Vitaphone as a single-sided 16-inch shellac sound-disc system, roughly one film reel per disc, and identifies The Jazz Singer as using synchronized recorded music plus selected synchronized speech and singing rather than sound throughout. It also documents wear, breakage and transport problems that help explain the system's limits."
    },
    {
      title: "Western Electric Vitaphone System 35mm Universal Base Projector, ca. 1927",
      publisher: "Museum of the Moving Image",
      url: "https://movingimage.org/collection/motion-picture-projector-western-electric-vitaphone-system-35mm-universal-base-projector-ca-1927-2/",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "The museum documents Western Electric's sound-on-disc system, 16-inch discs at 33 1/3 rpm, mechanical synchronization by one drive shaft/motor, the Warner partnership and Vitaphone Corporation, Don Juan's earlier synchronized score/effects and The Jazz Singer's 6 October 1927 Warners' Theatre premiere."
    },
    {
      title: "Al Jolson in The Jazz Singer — Warner Bros. supreme triumph",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/resource/ppmsc.03756/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "The Library of Congress catalog describes the 1927 poster as showing a singer in blackface and indexes it under Blackface entertainers, providing direct primary-source evidence for the representation-ethics boundary in the Production Case."
    },
    {
      title: "You Ain't Heard Nothing Yet! Curator Dwight Blocker Bowers on the birth of motion picture sound",
      publisher: "National Museum of American History, Smithsonian Institution",
      url: "https://americanhistory.si.edu/blog/2012/07/you-aint-heard-nothing-yet-curator-dwight-blocker-bowers-on-the-birth-of-motion-picture-sound.html",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Smithsonian contextualizes the 6 October 1927 premiere and Vitaphone synchronized dialogue/song sequences inside a broader sound transition, reinforcing that the case should model industrial change and technology rather than a one-film invention myth."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
