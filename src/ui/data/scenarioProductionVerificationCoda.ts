import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const codaProductionCaseVerification = {
  scenarioId: "scenario_coda_2021",
  status: "verified",
  verifiedAt: "2026-08-31",
  summary: "CODA is verified as Chapter 19's independent low/mid-budget case through institutional records and direct filmmaker/craft testimony connecting independent financing, authentic Deaf casting, ASL translation and set access, Gloucester fishing logistics, Sony VENICE large-format cinematography, live production sound and singing, ASL-aware editorial infrastructure and pandemic-adjusted finishing. AFI records the 111-minute feature and principal crew: Siân Heder, Paula Huidobro, Geraud Brisson, Diane Lederman, the named producers and production/sound personnel. Heder explains that the project was developed at Lionsgate but moved outside the studio when its star-driven financing model conflicted with her insistence on Deaf actors and an unknown teenage lead; Vendôme/Pathé and partners financed the film independently without a distributor in place. AFI and Heder/Huidobro interviews document Deaf collaborators and ASL masters Alexandria Wailes and Anne Tomasetti, with translation, actor work and on-set monitoring shaping dialogue, blocking and framing. Huidobro documents Sony VENICE 6K with ARRI Signature LF primes, frequent 40mm use, large-format landscape/portrait goals, high-ISO night capability and the practical constraints of shooting on Gloucester fishing boats. Sound reporting identifies production mixer Jared Detsikas, supervising sound editor Martin Pinsonnault and final re-recording mixer Alexandra Fehrman, and documents clean live capture of expressive signing/vocalizations, live singing, location ambience and perspective-based transitions into silence. Heder documents a separate interpreter guide track for editor Geraud Brisson, ASL-master notes, an initial cut around three hours, removal of roughly thirty-plus shot scenes, editing at Flashcut, remote color finishing with Mels and final sound at Formosa Group after COVID altered the original post plan. Apple records the later Sundance-era acquisition/release context and Vendôme/Pathé credits. These sources do not establish a complete audited production budget, exact equity/debt/pre-sale shares, insurance, payroll, complete shooting calendar, all permits and fishing-safety documentation, full camera/media/data and lighting packages, interpreter/accessibility cost breakdown, complete editorial NLE/storage architecture, ADR/foley/stem routing, music licensing economics, color-transform chain or distribution recoupment. Those remain unresolved.",
  sources: [
    {
      title: "CODA",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/coda-4",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film record supporting the 111-minute runtime and principal writer/director, producers, cinematographer, editor, production design, production sound and post-sound credits."
    },
    {
      title: "AFI Alumni Siân Heder and Paula Huidobro on their Sundance Award-Winning Film CODA",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/afi-alumni-sian-heder-and-paula-huidobro-on-their-sundance-award-winning-film-coda/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct Heder/Huidobro testimony supporting Alexandria Wailes and Anne Tomasetti as ASL masters, Deaf/CODA collaboration, Gloucester/fishing research, visible-hand/sightline framing and naturalistic visual goals."
    },
    {
      title: "Filmmaker Interview: SIÂN HEDER, director of CODA",
      publisher: "SAGindie",
      url: "https://www.sagindie.org/interviews/sian-heder-coda/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Direct writer/director testimony supporting the move from studio development to independent Pathé/Vendôme financing and the use of Deaf collaborators from writing through post."
    },
    {
      title: "Siân Heder on CODA success: I hope it means more stories like this get told",
      publisher: "Screen International",
      url: "https://www.screendaily.com/features/sian-heder-on-coda-success-i-hope-it-means-more-stories-like-this-get-told/5166340.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Heder describes the star-driven studio financing conflict, Wachsberger/Rousselet/Pathé independent financing without a distributor in place, and the later Apple acquisition as a separate circulation event."
    },
    {
      title: "The Complexities of Being a Hearing Child in a Deaf Family: DP Paula Huidobro on CODA",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/111174-the-complexities-of-being-a-hearing-child-in-a-deaf-family-dp-paula-huidobro-on-coda/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer testimony supporting Sony VENICE 6K, ARRI Signature LF primes, large-format landscape/portrait goals, high-ISO night capability, Deaf/ASL framing constraints and fishing-boat logistics."
    },
    {
      title: "Shot on VENICE: How DP Paula Huidobro Won Best Picture of the Year with CODA",
      publisher: "Sony Cine",
      url: "https://sony-cinematography.com/articles/shot-on-venice-how-dp-paula-huidobro-created-the-visual-language-that-won-best-picture-of-the-year/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Huidobro testimony supporting the ASL-driven blocking/coverage problem, ARRI Signature primes and frequent 40mm use with the VENICE system."
    },
    {
      title: "Director's Chair: Sian Heder — CODA",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2021/July-August-2021/Directors-Chair-Sian-Heder-i-CODA-i-.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Direct Heder testimony supporting VENICE/ARRI capture, the ASL interpreter guide track and ASL-master notes for editorial, Flashcut editing, remote Mels color, Formosa final sound and limited cleanup VFX."
    },
    {
      title: "How the subtlety of sound swells emotional intimacy in Coda",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment-arts/awards/story/2021-12-14/how-the-subtlety-of-sound-swells-the-emotional-intimacy-behind-coda",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Sound-team testimony supporting Jared Detsikas's live production recording, costume/mic coordination, live singing, location response capture, Martin Pinsonnault's sound edit and Alexandra Fehrman's perspective-based final mix."
    },
    {
      title: "Apple Original Films announce multiple Sundance Award winner CODA to premiere in theaters and on Apple TV+ on Friday Aug. 13",
      publisher: "Apple TV Press",
      url: "https://www.apple.com/tv-pr/news/2021/04/apple-original-films-announce-multiple-sundance-award-winner-coda-to-premiere-in-theaters-and-on-apple-tv-on-friday-aug-13/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Official distributor record supporting Vendôme Pictures/Pathé production credits, principal cast and the later August 13, 2021 Apple theatrical/streaming release context."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
