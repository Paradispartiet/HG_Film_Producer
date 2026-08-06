import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const taxiProductionCaseVerification = {
  scenarioId: "scenario_taxi_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "Taxi's production under Jafar Panahi's filmmaking ban, dashboard-camera mobile studio, Tehran passenger structure, self-performance, unstable fiction-documentary boundary, digital image circulation, direct traffic sound, absent approved credits and 2015 Golden Bear are supported by ten independent institutional, distributor and critical sources.",
  sources: [
    {
      title: "Taxi Tehran review",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/taxi-tehran-review",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Sight and Sound documents the 20-year ban, semi-clandestine production, dash-mounted camera, digital devices, niece's assignment, absent approved credits and image ownership as the film's political-formal system."
    },
    {
      title: "Film of the Week: Taxi",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/blog/film-of-the-week-taxi/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "directing", "performance"],
      note: "The essay analyses Panahi's self-performance, the uncertain status of passengers, the relation to Kiarostami's Ten and the film's movement between realist observation and self-reflexive construction."
    },
    {
      title: "Jafar Panahi's Remarkable Taxi",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/culture/richard-brody/jafar-panahis-remarkable-taxi",
      sourceKind: "archive_feature",
      supports: ["overall", "directing", "cinematography", "documentary_method"],
      note: "The New Yorker describes the clandestine conditions, long windshield opening, dashboard camera and Panahi's transformation of legal constraint into a political modernist production method."
    },
    {
      title: "Berlin 2015 first-look review: Taxi",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2015/feb/06/berlin-2015-film-review-taxi-banned-iran-jafar-panahi",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "production_design", "performance"],
      note: "The review identifies the locked dashboard position, anti-theft-camera pretext, taxi as private-public Iranian cinema space and passengers as a moving cross-section of contemporary Iran."
    },
    {
      title: "Taxi: A Banned Filmmaker Works From the Road",
      publisher: "NPR",
      url: "https://www.capradio.org/news/npr/story?storyid=444742781",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The NPR review records two dashboard-mounted cameras, the single-day Tehran route and the way compact production expands Panahi's post-ban filmmaking beyond domestic confinement."
    },
    {
      title: "Jafar Panahi's Taxi",
      publisher: "Kino Lorber",
      url: "https://kinolorber.com/film/jafarpanahistaxi",
      sourceKind: "distributor_record",
      supports: ["overall", "reception"],
      note: "The distributor record confirms the 2015 Iranian feature, Panahi's writer-director-performer role, its taxi-passenger premise and international release identity."
    },
    {
      title: "Jafar Panahi's Taxi movie review",
      publisher: "RogerEbert.com",
      url: "https://www.rogerebert.com/reviews/taxi-2015",
      sourceKind: "archive_feature",
      supports: ["overall", "historical_context", "directing"],
      note: "The review places Taxi after This Is Not a Film and Closed Curtain and explains how the loss of conventional production access led Panahi toward increasingly compact and openly self-reflexive methods."
    },
    {
      title: "Review: Taxi by censored Iran filmmaker Jafar Panahi takes a tour of Tehran society",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-et-mn-taxi-movie-review-20151009-story.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "performance", "reception"],
      note: "The review characterises the film as an outward-looking social tour made under censorship and records its Berlin top prize and passenger-led portrait of Tehran society."
    },
    {
      title: "Taxi Tehran",
      publisher: "Time Out",
      url: "https://www.timeout.com/movies/taxi-tehran",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "documentary_method"],
      note: "Time Out analyses the film as a compact act of defiance whose playful passenger episodes and reality-fiction ambiguity turn censorship into both comic material and production structure."
    },
    {
      title: "Tehran Taxi pressbook",
      publisher: "New Wave Films",
      url: "https://www.newwavefilms.co.uk/assets/1112/Taxi_Tehran_pressbook_with_cert.pdf",
      sourceKind: "press_kit",
      supports: ["overall", "industry", "screenplay", "cinematography", "sound"],
      note: "The distributor pressbook records the 82-minute Iranian feature, Panahi's authorship, production context, taxi apparatus, principal encounters, formal absence of credits and international festival positioning."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
