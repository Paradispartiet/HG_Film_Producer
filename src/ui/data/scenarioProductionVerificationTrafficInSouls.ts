import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const trafficInSoulsProductionCaseVerification = {
  scenarioId: "scenario_traffic_in_souls_1913",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "AFI, UCLA, the Library of Congress and BFI records support Traffic in Souls as a 1913 IMP production directed by George Loane Tucker, written by Tucker and Walter MacNamara, distributed by Universal and released at feature scale. UCLA documents secret production, real New York locations, a six-reel post-production cut and exceptional contemporary returns; AFI records a six-to-seven-reel silent release and the film's cast, narrative and advertising controversy. The Production Case keeps production separate from distribution, the staged melodrama separate from documentary evidence, contemporary reform rhetoric separate from verified institutional approval, and the Library of Congress preservation object separate from an asserted uniquely complete original release version.",
  sources: [
    {
      title: "Traffic in Souls / Where Are My Children?",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/traffic-in-souls-1913-where-are-my-children-1916-2012-05-10/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional programme note documenting an 88-minute black-and-white silent 35 mm print preserved by the Library of Congress, George Loane Tucker, IMP production, real New York locations, secret filming, Jack Cohn/Walter MacNamara's six-reel completion, reported $5,700 cost/$450,000 returns, simultaneous New York bookings and live accompaniment at the 2012 screening."
    },
    {
      title: "Traffic in Souls",
      publisher: "American Film Institute Catalog",
      url: "https://catalog.afi.com/Film/2111-TRAFFIC-IN-SOULS",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "AFI identifies IMP as production company, Universal as distributor, Tucker as director, Walter MacNamara and Tucker as scenario writers, a November 1913 release, six-to-seven reels, silent black-and-white presentation, principal cast and narrative. Its history section also records promotional claims invoking Rockefeller investigations and John D. Rockefeller Jr.'s denial of authorization or approval."
    },
    {
      title: "Traffic in Souls — Motion picture copyright descriptions collection",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/s1229l01767/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Primary copyright-deposit metadata identifying Universal Film Manufacturing Company as claimant, 1913 creation/publication, registration LU 1767 and the surviving motion-picture-play description in the Library's Motion Picture, Broadcasting and Recorded Sound Division."
    },
    {
      title: "The long take: Great footage",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/long-take-great-footage",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "BFI places the film among the earliest American features, emphasizes its non-literary contemporary subject, street-level realism and emotional investment, and situates it inside the wider international transition from one-reel programmes to concentrated feature production and booking risk."
    },
    {
      title: "National Film Registry 2006",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/loc/lcib/07012/film.html",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official Library of Congress announcement listing Traffic in Souls (1913) among the 25 works added to the National Film Registry in 2006, supporting its preservation and American film-history significance without validating the film's own social claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
