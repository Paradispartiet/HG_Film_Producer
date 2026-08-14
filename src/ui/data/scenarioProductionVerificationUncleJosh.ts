import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const uncleJoshProductionCaseVerification = {
  scenarioId: "scenario_uncle_josh_at_the_moving_picture_show_1902",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Uncle Josh at the Moving Picture Show is verified as a 1902 Edison/Porter spectator comedy starring Charles Manley, built around three projected attractions, escalating rube reactions and a final screen/operator reveal; Library of Congress, AFI and Rutgers University Press sources support the film-specific production and the safeguard against treating its fictional spectator as documentary evidence of universally naïve early audiences.",
  sources: [
    {
      title: "Uncle Josh at the moving picture show",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/00694324/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The Library identifies the 1902 Edison Manufacturing Company film, Charles Manley as Uncle Josh and Edwin S. Porter with production/camera work; its synopsis records the dancing girl, express train and country-couple projections, Josh's physical reactions and the final destruction of the screen that exposes the projectionist/operator situation."
    },
    {
      title: "Comedy — Edison motion pictures",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/genres/comedy/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Library's Edison genre history places Uncle Josh within the popular rube-comedy tradition, grounding the character's misunderstanding of projected pictures as an established comic stereotype about rural encounters with modern life rather than anonymous documentary observation."
    },
    {
      title: "Uncle Josh at the Moving Picture Show",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/28980-UNCLE-JOSH-AT-THE-MOVING-PICTURE-SHOW",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "AFI independently records the 1902 Edison comedy, approximately 120–125 feet of film and Edwin S. Porter as photographer, and describes the comic progression in which Josh responds to the projected dancer, train and romantic scene before attacking the screen."
    },
    {
      title: "Viewing Positions: Ways of Seeing Film",
      publisher: "Rutgers University Press",
      url: "https://www.rutgersuniversitypress.org/viewing-positions/9780813521336",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Rutgers University Press documents the scholarly volume containing Tom Gunning's essay 'An Aesthetic of Astonishment: Early Film and the (In)Credulous Spectator.' The historiographic framework supports the case's permanent safeguard: comic representations of astonished or confused spectators should not be flattened into literal proof of a universally credulous early audience."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
