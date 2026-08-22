import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const banditQueenProductionCaseVerification = {
  scenarioId: "scenario_bandit_queen_1994",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "Bandit Queen is verified as a 1994 India-UK Film Four/Kaleidoscope biographical production directed by Shekhar Kapur, produced by Bobby/Sundeep S. Bedi and adapted by Mala Sen from her writing on Phoolan Devi. BFI records Kapur, Bedi, Sen, Seema Biswas, UK/India and 120 minutes. A contemporary India Now! programme records Film Four International/Kaleidoscope, Sundeep S. Bedi, Mala Sen screenplay, Ashok Mehta cinematography, Renu Saluja editing, Ashok Bhagat art direction, Robert Taylor and Tom Lewiston sound, Nusrat Fateh Ali Khan music, Hindi, colour/35mm and 119 minutes. Danish Film Institute independently records Channel Four Films/Kaleidoscope and 119 minutes but lists Ketan Mehta as director of photography; because contemporary programme evidence, Kapur's own first-person recollection and Ashok Mehta's own cinematography interview converge on Ashok Mehta, the case uses Ashok Mehta as canonical DP while preserving the DFI listing as catalogue variance. Kapur later described fast, instinctive production in the Chambal ravines; no exact location list, schedule, permit, unit-size or unsafe guerrilla method is inferred. Ashok Mehta's 1996 interview discusses director-cinematographer collaboration and different visual treatment of a consensual love scene and a rape scene without establishing a full camera/lens/stock/lighting recipe. Renu Saluja's editing and Nusrat Fateh Ali Khan's music are also supported by Kapur's first-person retrospective commentary. Seema Biswas has later stated that she was uncomfortable with frontal nudity, discussed this with Kapur and agreed to use a body double for the nude-parade material. That is performer-level retrospective testimony and is kept separate from Phoolan Devi's living-subject rights dispute. Delhi High Court records establish that an agreement existed which defendants relied on for adaptation rights, while Devi argued that the film distorted material beyond that agreement, violated privacy and that she had not been shown a rough or final edited version despite requests. The same court record preserves competing claims over the sources for several depicted sexual-violence events. The case therefore does not claim either that the film had no authorization whatsoever or that the existence of an agreement proves factual accuracy or final-cut approval. CBFC/court litigation separately records the proposed replacement of the film's 'true story' card with wording that it was based on the book Bandit Queen and prison papers and was not claimed to be an authentic version of Devi's life, plus proposed cuts/modifications to violent and sexual material. These are certification/version records, not original-production instructions. Contemporary Los Angeles Times reporting describes a $1.4-million production; that figure is retained as contemporary reporting rather than an audited ledger. Runtime records vary between 119 and 120 minutes; 119 is canonical because a contemporary retrospective, DFI and contemporary U.S. release reporting converge there. Present-day scenes involving nudity or sexual violence require independent consent, intimacy/closed-set practice, trauma-informed safeguards and applicable labor/safety rules; historical testimony is never used as a present-day staging recipe.",
  sources: [
    {
      title: "Bandit Queen (1994)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/7f0293b4-b962-58de-a051-d7ae2e2493b5/bandit-queen",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record for 1994 UK/India, Shekhar Kapur direction, Bobby Bedi production, Mala Sen writing, Seema Biswas and 120-minute runtime."
    },
    {
      title: "India Now! Retrospective: Bandit Queen",
      publisher: "India Now! / Noah Cowan programme archive",
      url: "https://www.noahcowanfilm.com/south-asian-cinema/india-now-retrospective",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Contemporary programme record for Film Four International/Kaleidoscope, Sundeep S. Bedi, Mala Sen, Ashok Mehta, Renu Saluja, Ashok Bhagat, Robert Taylor/Tom Lewiston, Nusrat Fateh Ali Khan, Hindi, colour/35mm and 119 minutes."
    },
    {
      title: "Bandit queen",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/bandit-queen",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Institutional record for Channel Four Films/Kaleidoscope, 119 minutes, Mala Sen, Renu Saluja, Nusrat Fateh Ali Khan/Roger White and production-country data. Its Ketan Mehta photography listing is preserved as a catalogue anomaly against convergent Ashok Mehta evidence."
    },
    {
      title: "A film of less doubt and more courage: Bandit Queen",
      publisher: "Shekhar Kapur",
      url: "https://shekharkapur.com/blog/2009/11/a-film-of-less-doubt-and-more-courage-bandit-queen/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Kapur's first-person account of fast instinct-led filmmaking in the Chambal ravines and explicit identification/praise of Ashok Mehta as DP. It is process testimony, not a camera or safety specification."
    },
    {
      title: "The History and Practice of Cinematography in India: Ashok Mehta interview",
      publisher: "Raqs Media Collective archive",
      url: "https://works.raqsmediacollective.net/wp-content/uploads/2022/11/ashok_mehta.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography"],
      note: "Ashok Mehta's 1996 first-person interview identifies Bandit Queen as his work with Kapur and discusses visual differentiation and director-cinematographer collaboration without supplying a complete camera/lens/stock/lighting recipe."
    },
    {
      title: "Seema Biswas: After watching Bandit Queen...",
      publisher: "The Times of India",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/seema-biswas-after-watching-bandit-queen-my-father-told-my-mother-meera-only-our-daughter-seema-could-have-done-this-exclusive/articleshow/112636670.cms",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Biswas's retrospective first-person account of reservations about frontal nudity and agreement with Kapur to use a body double. Preserved as performer-consent testimony, not a complete historical safeguarding protocol."
    },
    {
      title: "Phoolan Devi vs Shekhar Kapoor And Ors., 1 December 1994",
      publisher: "Delhi High Court via Indian Kanoon",
      url: "https://indiankanoon.org/doc/793946/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Primary legal record for Devi's injunction/privacy claims, the existence and disputed scope of an adaptation agreement, her contention that she had not been shown rough/final cut, and competing claims over sources for depicted events."
    },
    {
      title: "Om Pal Singh Hoon vs Union Of India, 7 March 1996",
      publisher: "Delhi High Court via Indian Kanoon",
      url: "https://indiankanoon.org/doc/1931568/",
      sourceKind: "archive_feature",
      supports: ["overall", "editing"],
      note: "Primary certification/litigation record preserving CBFC's proposed non-authenticity disclaimer and proposed cuts/modifications; used only for version/censorship history, not original shooting technique."
    },
    {
      title: "'The Bandit Queen' Still an Outcast in India",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-1994-10-20-ca-52584-story.html",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Contemporary reporting on the 1994 legal/censor dispute and a reported $1.4-million production figure. The budget figure is retained as reporting, not an audited production ledger."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
