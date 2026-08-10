import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const onBodyAndSoulProductionCaseVerification = {
  scenarioId: "scenario_on_body_and_soul_2017",
  status: "verified",
  verifiedAt: "2026-08-10",
  summary: "On Body and Soul's decade-long development, Inforg-M&M/Hungarian Film Fund production, real slaughterhouse procedure, restrained mixed-background performances, Máté Herbai image system, Károly Szalai pacing and Péter Benjámin Lukács sound construction are supported by twelve inspectable sources from twelve publishers.",
  sources: [
    {
      title: "We All Carry Wounds",
      publisher: "National Film Institute Hungary",
      url: "https://nfi.hu/en/national-film-institute/news/we-all-carry-wounds.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Enyedi dates the first draft to 2006, explains the interrupted financing history and later Film Fund revival, says the main storyline survived the long development, and describes the shared dream as a reversal of waking isolation and common unconscious connection."
    },
    {
      title: "Ildikó Enyedi is back with On Body and Soul",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/294490/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The 2015 production report documents the April-June Budapest and Hajdúnánás shoot, remaining winter work, Enyedi's return to cinema, Inforg-M&M producers, Hungarian Film Fund backing and the sleeping/waking, mind/matter premise."
    },
    {
      title: "Interview: Ildiko Enyedi",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-ildiko-enyedi/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Enyedi explains the body-soul relation, her refusal to turn slaughter into horror, Mária's bodily route toward emotional openness, Károly Szalai's equal-paced edit, Géza Morcsányi's non-professional casting and Alexandra Borbély's long character search."
    },
    {
      title: "Testről és lélekről (On Body and Soul): An interview with director Ildikó Enyedi",
      publisher: "The Upcoming",
      url: "https://www.theupcoming.co.uk/2017/02/13/ildiko-enyedi-an-interview-with-the-director-of-testrol-es-lelekrol-on-body-and-soul/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Enyedi confirms that the slaughterhouse killing and butchering were not staged: the crew left the work itself untouched, adjusted the light bars and documented the real process with two cameras."
    },
    {
      title: "Foreign Contenders: Ildikó Enyedi Aligns Framing and Sound for the Dreamy Romance in Hungary's On Body and Soul",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/foreign-contender-ildiko-enyedi-aligns-framing-sound-dreamy-romance-hungarys-body-soul/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "sound"],
      note: "Enyedi describes Máté Herbai's framing collaboration and a deliberately transparent sonic world in which realistic wind, birds, distant city murmur and other sounds carry concrete dramaturgical functions across waking and dream experience."
    },
    {
      title: "Oscar-nominated 'On Body and Soul' wonders if love in a dream can survive the real world",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-ca-ildiko-enyedi-film-20180208-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Enyedi describes the film as a distillation designed to make its labour disappear into apparent simplicity and credits Herbai's patient attention to changing light and tiny physical moments that define the relationship."
    },
    {
      title: "ON BODY AND SOUL",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/on-body-and-soul/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The EFA record confirms Enyedi, Máté Herbai, Károly Szalai, Imola Láng, Judit Sinkovics, Péter Benjámin Lukács and Ádám Balázs in the principal creative departments and records Alexandra Borbély's 2017 European Actress award."
    },
    {
      title: "The 90th Academy Awards – 2018",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2018",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy's official ceremony record lists Hungary's On Body and Soul among the five nominees for Foreign Language Film at the 90th Academy Awards."
    },
    {
      title: "32nd Annual ASC Awards",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/awards/2018",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The ASC's official awards record lists Máté Herbai, HSC and On Body and Soul among the three 2018 Spotlight Award nominees, independently confirming the cinematography's professional recognition."
    },
    {
      title: "CAMERIMAGE 2017 WINNERS!",
      publisher: "Camerimage",
      url: "https://archive.camerimage.pl/en/laureaci-camerimage-2017/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "The festival's official archive records the 2017 Main Competition Golden Frog for On Body and Soul, naming cinematographer Máté Herbai and director Ildikó Enyedi."
    },
    {
      title: "On Body and Soul",
      publisher: "New Zealand International Film Festival",
      url: "https://www.nziff.co.nz/2017/film/on-body-and-soul/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The festival record confirms the 116-minute CinemaScope/DCP presentation and principal credits for Enyedi, Herbai, Szalai, Imola Láng, Judit Sinkovics and Ádám Balázs around the modern-abattoir production."
    },
    {
      title: "Golden Bear for Best Film: Testről és lélekről (On Body and Soul)",
      publisher: "Berlin International Film Festival",
      url: "https://www.berlinale.de/en/archive/photos-videos/photo-detail.html?id=200799",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Berlinale archive identifies On Body and Soul as the 2017 Golden Bear for Best Film and records Enyedi with producers Ernő Mesterházy, Mónika Mécs and András Muhi at the award presentation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
