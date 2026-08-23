import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const gleanersProductionCaseVerification = {
  scenarioId: "scenario_the_gleaners_and_i_2000",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "The Gleaners and I is verified conservatively as Agnès Varda's 1999-2000 French documentary produced and distributed by Ciné-Tamaris. Ciné-Tamaris provides the principal production/post credits, an 82-minute duration, 35mm/1.33/color presentation metadata, the Ciné-Tamaris production/distribution record, and the later 2018 2K restoration boundary. La Cinémathèque française explicitly identifies the original film as shot in DV and preserves the five-person image credit. In a contemporaneous Sight and Sound interview, Varda describes the DV camera and Avid as tools that let her get closer to people, shoot alone and shorten the interval between wanting to film and filming; she also states that editing took ten months and that she edited at home as part of an established artisan workflow. The same interview documents the unplanned shot in which one hand films her other aging hand, which is retained only as a bounded example of intuitive first-person discovery. Cannes independently confirms Varda's direction/writing, the collective cinematography credits, Varda/Laurent Pineau editing and Joanna Bruzdowicz music, but lists 76 minutes rather than the 82 minutes carried by Ciné-Tamaris, Criterion and Janus; that discrepancy is preserved rather than converted into an invented cut history. Ciné-Tamaris's later educational project makes nearly sixty hours of original rushes available with the finished edit and separate mix, supporting the scale of the editorial source pool without establishing a shooting ratio, complete schedule or exact chronology. Exact camera model, lens, recording medium, codec, data rate, microphone/recorder package, lighting equipment, Avid version, storage architecture, conform/film-out/lab path, budget and complete route remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Les Glaneurs et la Glaneuse (2000)",
      publisher: "Ciné-Tamaris",
      url: "https://cine-tamaris.fr/agnes-varda/les-glaneurs-et-la-glaneuse-2000/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Rights-holder/production-company record for the 1999-2000 documentary: 82 minutes, Ciné-Tamaris production and distribution, collective image credits, Emmanuel Soland sound, Varda/Laurent Pineau editing, Nathalie Vidal mix, music credits, 35mm/1.33/color presentation metadata, post-production credits and the separate 2018 2K restoration."
    },
    {
      title: "Refuseniks: Agnès Varda on The Gleaners and I",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/refuseniks-agnes-varda-gleaners-i",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Contemporaneous January 2001 Varda interview describing the wandering road-documentary form, DV and Avid as tools for proximity/solo shooting, ten months of home editing, artisan production practice and the specifically unplanned hand self-portrait shot."
    },
    {
      title: "Les Glaneurs et la Glaneuse",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/68649.html",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional record explicitly describing the film as shot in DV and listing Ciné-Tamaris, the five cinematography credits, Emmanuel Soland/Nathalie Vidal sound roles, Joanna Bruzdowicz and Varda/Laurent Pineau editing."
    },
    {
      title: "Les Glaneurs et la Glaneuse",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/les-glaneurs-et-la-glaneuse/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Independent institutional credit and 2000 Out of Competition record. Cannes lists 76 minutes, so its duration is kept as a catalogue variance beside the 82-minute Ciné-Tamaris/Criterion/Janus record."
    },
    {
      title: "The Gleaners and I – Revisiting Agnès Varda's edit",
      publisher: "Ciné-Tamaris",
      url: "https://www.glaneursglaneuse.com/en/home/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "Ciné-Tamaris educational archive making nearly sixty hours of original rushes, the completed film and separate mix available for study; used as evidence for the editorial source pool, not as an exact shooting ratio or schedule."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
