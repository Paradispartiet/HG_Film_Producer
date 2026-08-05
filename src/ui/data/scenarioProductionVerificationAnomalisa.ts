import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const anomalisaProductionCaseVerification = {
  scenarioId: "scenario_anomalisa_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's 2005 sound-play origin, Kickstarter-seeded Starburns and Snoot feature production, eighteen-stage miniature workflow, Canon 7D raw-still cinematography, 3D-printed replacement faces, visible seams, three-actor voice system, production design, editing, Foley-derived sound, Carter Burwell music, Venice prize and Academy nomination are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "The AFI FEST Interview: ANOMALISA Directors Charlie Kaufman and Duke Johnson",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/charlie-kaufman-anomalisa-duke-johnson-interview-afi-fest-2015/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Kaufman and Johnson trace the 2005 sound play, its three original actors, Dino Stamatopoulos and Starburns' 2012 approach, Kickstarter seed financing and the translation of a deliberately nonvisual work into stop-motion cinema."
    },
    {
      title: "Charlie Kaufman and Duke Johnson Talk Anomalisa",
      publisher: "Animation World Network",
      url: "https://www.awn.com/animationworld/charlie-kaufman-and-duke-johnson-talk-anomalisa",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The co-directors explain why Starburns' stop-motion form suited the material, how miniature scale, nuanced performance and cinematic lighting create the dreamlike result and how directing decisions were shared across the long animation process."
    },
    {
      title: "Puppets and Pantyhose: DP Joe Passarelli on Anomalisa",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/97174-puppets-and-pantyhose-dp-joe-passarelli-on-anomalisa/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Passarelli documents the nearly two-year continuous shoot, eighteen miniature stages, limited seconds of animation per day, more than one hundred thousand frames and the continuity risks created by tiny sets, lights, furniture and motion-control equipment."
    },
    {
      title: "Anomalisa",
      publisher: "La Biennale di Venezia",
      url: "https://asac.labiennale.org/attivita/cinema/257213",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official archive verifies the 2015 competition selection and Grand Jury Prize, Snoot Entertainment and Starburns Industries production, Kaufman screenplay, Joe Passarelli cinematography, Garret Elkins editing, Carter Burwell music and principal voice cast."
    },
    {
      title: "The 88th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2016",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy records Anomalisa as an Animated Feature nominee for Charlie Kaufman, Duke Johnson and Rosa Tran, establishing the feature's major institutional reception and production credit."
    },
    {
      title: "Anomalisa",
      publisher: "Carter Burwell",
      url: "https://www.carterburwell.com/projects/Anomalisa.shtml",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Burwell explains the Theater of the New Ear sound-play origin, three-performer staged form, Foley-and-music structure, surprise at its feature adaptation and the instrumental personnel used for the film score."
    },
    {
      title: "Directors Close-Up Recap: Anomalisa's Charlie Kaufman and Duke Johnson Explore Heartbreak in Miniature",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/blog/directors-close-up-recap-anomalisas-charlie-kaufman-and-duke-johnson-explore-heartbreak-in-miniature/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The directors discuss the independent path from sound play to adult stop-motion, miniature emotional performance, collaborative direction and the formal relationship among identical faces, voices and Michael's restricted viewpoint."
    },
    {
      title: "Film of the week: Anomalisa",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-anomalisa",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Sight and Sound verifies the 2005 UCLA sound-play origin, the retained Thewlis-Leigh-Noonan cast, the 2.35:1 presentation and the identical-face and identical-voice system through which Michael experiences nearly everyone around him."
    },
    {
      title: "Interview: John Joyce (Anomalisa)",
      publisher: "Interiors",
      url: "https://www.intjournal.com/interview/john-joyce",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Production designer John Joyce describes joining the Starburns team, the creative independence enabled by initial crowdfunding and the specialised process of constructing controlled miniature architecture for stop-motion photography."
    },
    {
      title: "Charlie Kaufman's Anomalisa",
      publisher: "Kickstarter",
      url: "https://www.kickstarter.com/projects/anomalisa/charlie-kaufmans-anomalisa",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The original campaign records the proposed independent stop-motion adaptation, its initial forty-minute scale, the two-hundred-thousand-dollar goal and the campaign that raised 406,237 dollars from 5,770 backers before the project expanded into a feature."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
