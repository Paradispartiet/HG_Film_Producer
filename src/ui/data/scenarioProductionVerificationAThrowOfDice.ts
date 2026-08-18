import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aThrowOfDiceProductionCaseVerification = {
  scenarioId: "scenario_a_throw_of_dice_1929",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "BFI and filmportal.de support A Throw of Dice / Prapancha Pash / Schicksalswürfel as a 1929 India–Germany–United Kingdom silent feature directed by Franz Osten and produced by Himansu Rai. BFI credits W.A. Burton and Max Jungk as writers and Seeta Devi, Charu Roy and Rai among the principal cast; filmportal.de records Himansu Rai Film, UFA and British Instructional Films as production companies, India as the shooting location, Emil Schünemann as cinematographer, Promode Nath as production designer, and 35mm black-and-white silent 1.33:1 exhibition. BFI's account of the Rai–Osten trilogy confirms the India-location production model and explicitly distinguishes its later Nitin Sawhney commission from the historical silent work. The Production Case therefore teaches transnational co-production without assigning national purity, preserves Indian producer/performance/location agency alongside German technical collaboration, treats the Mahabharata dice episode as adaptation rather than cultural totality, and keeps modern restoration music outside claims about synchronized 1929 production sound.",
  sources: [
    {
      title: "Schicksalswürfel (1929)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/9331d899-b4d1-5f45-9aa0-4a5736b697b4/schicksalswurfel",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI film record identifying 1929 Germany/United Kingdom/India production, Franz Osten as director, Himansu Rai as producer, W.A. Burton and Max Jungk as writers, Seeta Devi/Charu Roy/Himansu Rai as principal cast, and a 74-minute running time."
    },
    {
      title: "Schicksalswürfel",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/film/schicksalswuerfel_6e66091243ed403ebca68a3491428bf9",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "German film-heritage record crediting Emil Schünemann for cinematography, Promode Nath for design, UFA/British Instructional Films/Himansu Rai Film as production companies, India as shooting location, 35mm 1.33:1 black-and-white silent format, original 2523-metre length, and distinct music credits for Willy Schmidt-Gentner and later Nitin Sawhney presentation."
    },
    {
      title: "Faith and creation: Anoushka Shankar on her score for Shiraz",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/faith-creation-anoushka-shankar-her-score-shiraz",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "BFI contextualizes A Throw of Dice as the third Rai–Osten silent collaboration, states that the trilogy was shot on location in India, and explicitly identifies the Nitin Sawhney Throw of Dice score as a later BFI commission."
    },
    {
      title: "A Throw of Dice",
      publisher: "San Francisco Silent Film Festival",
      url: "https://silentfilm.org/a-throw-of-dice/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Silent-film archival essay situating the Rai–Pal–Osten collaboration, Indian location shooting, Indian cast, German technical assistance, the Mahabharata-derived story, and the rarity of surviving Indian silent cinema; used for contextual triangulation rather than as sole authority for crew claims."
    },
    {
      title: "Bombay Talkies",
      publisher: "Australian Centre for the Moving Image",
      url: "https://artsandculture.google.com/story/bombay-talkies-australian-centre-for-the-moving-image/uAVR3NfKZE3JKw?hl=en",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "ACMI collection story records Himansu Rai's producer-star role across The Light of Asia, Shiraz and A Throw of Dice, their India shooting with German director/crew, and BFI restoration of A Throw of Dice with a new Nitin Sawhney soundtrack."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
