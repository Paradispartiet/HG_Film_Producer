import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";
import { brazilFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsBrazil";
import { dogvilleFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsDogville";
import { moonriseKingdomFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsMoonriseKingdomCatalog";

export const brandNewTestamentFilmHistoryProfile = {
  scenarioId: "scenario_the_brand_new_testament_2015",
  period: "Mid-2010s Belgian-French-Luxembourg absurdist fantasy comedy turning Brussels, sacred iconography and theatrical fabrication into a child-led constructed world",
  traditions: ["Belgian surrealist comedy", "Child-centred religious fairytale", "Theatrical constructed-world cinema", "European absurdist fantasy"],
  before: "Jaco Van Dormael's films and theatre had long treated childhood, perception, chance and invented worlds as physical production problems. The miniature-hand theatre of Kiss & Cry, Belgian surrealism, religious storytelling and the frontal artificiality of stage design converge here instead of being hidden beneath naturalistic fantasy spectacle.",
  moment: "Van Dormael and Thomas Gunzig write an episodic fairytale in six months around God's daughter Ea, six new apostles and the release of every person's death date. Brussels locations, a deliberately ugly divine apartment, frontal church-like symmetry, Sylvie Olivé's award-winning real-surreal design, Christophe Beaucarne's Sony F65/F55 and Leica Summilux system, mobile theatrical lighting, direct-address portraits, Hervé de Luze's associative rhythm, tactile sound, An Pierlé's piano score, Baroque source music, miniature clouds, a practical gorilla and selective digital effects make perception rather than realism the governing production rule.",
  after: "The Directors' Fortnight selection, European Production Designer award and placement on the Academy's nine-film foreign-language shortlist established the film as a major European example of production design, camera, performance, music and modest theatrical effects operating as one comic metaphysical world rather than as separate fantasy departments.",
  historyQuestion: "Which production system explains a Brussels fantasy comedy where God's ten-year-old daughter recruits six apostles, frontal sacred symmetry organizes ordinary spaces, theatrical miniatures and a practical gorilla coexist with digital effects, and each episode receives its own colour, music and perceptual logic?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "Institutional records place the Belgium-France-Luxembourg co-production in the 2015 Directors' Fortnight and on the Academy's nine-film foreign-language shortlist." },
    { area: "movement_and_tradition", status: "source_verified", note: "Van Dormael explicitly connects the film to fairytale, childhood perception, Belgian Brussels life, theatrical fabrication, sacred imagery and the hand-performed cinema of Kiss & Cry." },
    { area: "industry_and_production_context", status: "source_verified", note: "Film Fund Luxembourg, Flanders Image and Unifrance document the multinational producers, public funds, sales structure and principal craft departments behind the production." },
    { area: "reception_and_legacy", status: "source_verified", note: "The film screened in Directors' Fortnight, reached the Academy shortlist and won the European Production Designer award for Sylvie Olivé's real-surreal environments." },
    { area: "screenplay", status: "source_verified", note: "Van Dormael and Thomas Gunzig wrote the screenplay together in six months, using an episodic fairytale chain whose six apostles function as nearly independent coloured and musical chapters." },
    { area: "directing", status: "source_verified", note: "Van Dormael directs the world through frontal portraits, direct address, symmetry recalling churches, theatrical disbelief and concrete associations that reproduce thought rather than conventional realism." },
    { area: "performance", status: "source_verified", note: "Pili Groyne's screen-tested emotional authority anchors a mixed Belgian, French, Flemish and Luxembourg ensemble; Poelvoorde supplies uncontrolled comic energy while Damiens works in a deliberately dark restrained register." },
    { area: "production_design", status: "source_verified", note: "Sylvie Olivé's design joins God's cramped apartment, computer room, launderette tunnel, Brussels locations, miniature city and stylized apostle spaces into an award-winning blend of ordinary material and surreal invention." },
    { area: "costume_makeup", status: "mapped", note: "Caroline Koener and Kaatje Van Damme are institutionally credited, and clothes distinguish God, family and apostles, but the inspected sources do not provide a dedicated costume-and-makeup process account." },
    { area: "cinematography", status: "source_verified", note: "Christophe Beaucarne uses frontal symmetry, animated portraiture, mobile camera-light choreography, half-opaque glass and close wide-angle proximity to give each apostle a specific visual grammar." },
    { area: "lighting", status: "source_verified", note: "The lighting moves from simple ugliness in God's apartment to character colours, pocket torches, moving spots, Source Fours, fluorescent buckets, Arrimax units and tungsten studio light." },
    { area: "camera_format", status: "source_verified", note: "The documented camera system combines Sony F65 capture in 2.39 with Sony F55 for Stab One and shoulder work, Leica Summilux spherical lenses, S-Log2 dailies and a Baselight grade." },
    { area: "editing", status: "source_verified", note: "Hervé de Luze shapes rhythm inside a preplanned episodic structure, while associative cuts, direct-address monologues and independent apostle chapters reproduce nonlinear thought without losing the fairytale progression." },
    { area: "sound_design", status: "source_verified", note: "Van Dormael describes sound as a tactile extension of the fabricated image, designed to make parks, rooms and impossible transitions feel physically sensed rather than merely illustrated." },
    { area: "music", status: "source_verified", note: "Each apostle receives distinct Handel, Rameau, Purcell, Schubert or popular material, while An Pierlé's first film score uses simple piano writing as the characters' inner music and a bridge to the pre-existing repertoire." },
    { area: "effects_animation", status: "mapped", note: "The film combines miniature cardboard Brussels, cotton clouds, a life-size operated gorilla, the dancing-hand idea from Kiss & Cry and selective visual effects, but a complete vendor-level effects breakdown remains unavailable." },
    { area: "documentary_method", status: "not_central", note: "Brussels locations and observed accents ground the world, but the production is a scripted, designed and effects-supported fairytale rather than a documentary-method work." },
  ],
} as const satisfies FilmHistoryProfile;

const donors = [
  brazilFilmHistoryProfile,
  dogvilleFilmHistoryProfile,
  moonriseKingdomFilmHistoryProfile,
] as const satisfies readonly FilmHistoryProfile[];

export function getBrandNewTestamentFilmHistoryProfile(
  scenarioId: string,
): FilmHistoryProfile | undefined {
  return scenarioId === brandNewTestamentFilmHistoryProfile.scenarioId
    ? brandNewTestamentFilmHistoryProfile
    : undefined;
}

export function getBrandNewTestamentFilmHistoryDonors(
  profile: FilmHistoryProfile,
): readonly FilmHistoryProfile[] | undefined {
  return profile.scenarioId === brandNewTestamentFilmHistoryProfile.scenarioId
    ? donors
    : undefined;
}
