import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const corbettFitzsimmonsProductionCaseVerification = {
  scenarioId: "scenario_the_corbett_fitzsimmons_fight_1897",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "The Corbett–Fitzsimmons Fight's complete-event design, Rector/Stuart Veriscope production, three-camera wide-format capture, proprietary projection, live commentary, territorial exhibition and separation from Lubin's later facsimile are supported by Library of Congress, National Science and Media Museum, University of California Press scholarship and AFI catalog evidence used with an explicit credit-conflict safeguard.",
  sources: [
    {
      title: "Corbett-Fitzsimmons fight--excerpts",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/2023602024/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Library identifies Enoch J. Rector as producer/photographer, Dan Stuart as producer and the Veriscope Company as production company; records full fourteen-round capture, live expert commentary, territorial distribution, the special projector requirement and the 22 May 1897 New York premiere; and explicitly warns that William Brady was Corbett's manager rather than producer of the Veriscope original. It also separates Sigmund Lubin's later facsimile from the original."
    },
    {
      title: "From our archives: Corbett vs. Fitzsimmons, the fight of the century and the earliest feature film",
      publisher: "National Science and Media Museum",
      url: "https://blog.scienceandmediamuseum.org.uk/corbett-fitzsimmons-fight-film-fragment/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "The museum documents the 17 March 1897 Carson City event, three Veriscope cameras, continuous coverage through fourteen rounds, roughly 11,000 feet exposed, long-form duration, the 22 May premiere and the fragmentary survival of the original film."
    },
    {
      title: "Fight Pictures: A History of Boxing and Early Cinema — The Corbett-Fitzsimmons Fight",
      publisher: "University of California Press / JSTOR",
      url: "https://www.jstor.org/stable/10.1525/j.ctt1pnd60.9",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Dan Streible's scholarly history treats the film as a landmark event-cinema production whose importance joins prizefight promotion, complete-event recording, exhibition and spectatorship. It supplies the historiographic basis for analyzing the film as a production-exhibition system rather than a simple long actuality."
    },
    {
      title: "Corbett and Fitzsimmons Fight",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/28825-CORBETT-AND-FITZSIMMONS-FIGHT",
      sourceKind: "film_institute",
      supports: ["cinematography", "editing"],
      note: "AFI records the over-100-minute duration and Rector's use of three side-by-side cameras to maintain event coverage. Its producer/company metadata conflicts with the Library of Congress by folding later Lubin material into the entry, so this source is used only for the camera/duration evidence; LOC controls original-production attribution and the separation of Lubin's reproduction."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
