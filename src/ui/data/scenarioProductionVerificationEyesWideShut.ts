import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const eyesWideShutProductionCaseVerification = {
  scenarioId: "scenario_eyes_wide_shut_1999",
  status: "verified",
  verifiedAt: "2026-07-24",
  summary: "The film's decades-long Schnitzler adaptation, prolonged British production, reconstructed Manhattan, controlled marital performances, wide-angle pushed-35mm image, practical-source lighting, masked ritual, extended edit, recurring score and release-version digital intervention are supported by ten inspectable production, archive and institutional sources.",
  sources: [
    {
      title: "A Sword in the Bed: Eyes Wide Shut",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/a-sword-in-the-bed-eyes-wide-shut",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Larry Smith details Arriflex and Moviecam cameras, Zeiss Super Speeds, wide-angle framing, Steadicam, practical lighting, Pinewood street construction, colour control and two-stop force development."
    },
    {
      title: "Eyes Wide Shut — BFI Southbank Programme Notes",
      publisher: "British Film Institute",
      url: "https://bfidatadigipres.github.io/big%20screen%20classics/2024/12/14/eyes-wide-shut/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The programme supplies extensive production credits and Jan Harlan's account of the modern-hell concept, ritual design, Venetian mask sourcing and the decision to use full masks."
    },
    {
      title: "Eyes Wide Shut",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/61145-EYES-WIDE-SHUT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI confirms Pole Star, Warner Bros., Kubrick and Raphael, Larry Smith, Nigel Galt, Roy Walker, Leslie Tomkins, Jocelyn Pook, the 159-minute release and principal cast."
    },
    {
      title: "Eyes Wide Shut — Production",
      publisher: "University of the Arts London",
      url: "https://archives.arts.ac.uk/calmview/Record.aspx?id=SK%2F17%2F3&src=CalmView.Catalog",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The Stanley Kubrick Archive describes forty-nine boxes of 1996–1998 production material covering daily progress, locations, continuity, costumes, props, masks, transparencies and negatives."
    },
    {
      title: "They Absolutely Took Their Skin Off: The Production of Eyes Wide Shut",
      publisher: "Oxford University Press",
      url: "https://academic.oup.com/book/35062/chapter-abstract/298998344",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Archive-based scholarship documents the exceptionally long shoot, repeated performance construction, actor replacements, abandoned locations, meticulous ritual choreography and Kubrick's production scrutiny."
    },
    {
      title: "Eyes Wide Shut",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/34534-eyes-wide-shut",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion's edition records the principal credits, 1.85:1 colour presentation, restoration and supplements devoted to Kubrick, the production, cast, composer and the film's critical afterlife."
    },
    {
      title: "That Cut Is Stanley's Cut: Nigel Galt on Editing Eyes Wide Shut with Kubrick",
      publisher: "The Film Stage",
      url: "https://thefilmstage.com/that-cut-is-stanleys-cut-nigel-galt-on-editing-eyes-wide-shut-and-kubricks-intent/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Editor Nigel Galt describes roughly fifteen months working directly with Kubrick and defends the released structure as the director's cut rather than a posthumously reconstructed edit."
    },
    {
      title: "Film and TV — Eyes Wide Shut",
      publisher: "Jocelyn Pook",
      url: "https://www.jocelynpook.com/dance-theatre",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "The composer's official site identifies her original score, soundtrack release and contemporary recognition, and preserves an interview about creating the film's distinctive musical system."
    },
    {
      title: "How They Got the Look",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-1999-nov-07-ca-30747-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Production designer Roy Walker recounts Kubrick drawing him back to the project, his long involvement and eventual shared credit with Leslie Tomkins, documenting the demanding design process."
    },
    {
      title: "Eyes Digitally Shut",
      publisher: "Wired",
      url: "https://www.wired.com/1999/07/eyes-digitally-shut",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "Contemporary release reporting documents the digitally inserted foreground figures used to obscure sexual activity in the United States version and Jan Harlan's account of Kubrick's approval."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
