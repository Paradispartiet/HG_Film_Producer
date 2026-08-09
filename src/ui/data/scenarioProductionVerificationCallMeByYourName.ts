import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const callMeByYourNameProductionCaseVerification = {
  scenarioId: "scenario_call_me_by_your_name_2017",
  status: "verified",
  verifiedAt: "2026-08-09",
  summary: "Call Me by Your Name's James Ivory adaptation, 1983 Northern Italian location system, performance preparation, material period design, Kodak 35 mm single-stock and single-lens image strategy, sensual Walter Fasano edit and piano/period-pop/Sufjan Stevens music construction are supported by twelve inspectable sources from twelve publishers.",
  sources: [
    {
      title: "Call Me By Your Name",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/film/callmebyyourname",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official distributor record confirms Luca Guadagnino's direction, James Ivory's screenplay from André Aciman's novel, the 1983 Northern Italian setting, principal cast and core production credits."
    },
    {
      title: "Call Me by Your Name – a sun-drenched masterpiece made with one filmstock and one lens in heavy rain",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/call-me-by-your-name/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Sayombhu Mukdeeprom and Luca Guadagnino describe shooting on Kodak 35 mm with one VISION3 500T 5219 stock and one lens, deriving the image from Crema's light, locations and natural colour rather than digital reconstruction."
    },
    {
      title: "On the Cut",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/104116-on-the-cut/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Editor Walter Fasano characterizes the film's cutting strategy as sensual, documenting an editorial approach designed around performance, landscape, breath and precisely controlled transitions rather than conspicuous cutting."
    },
    {
      title: "Vogue Meets Costume Designer Giulia Piersanti",
      publisher: "British Vogue",
      url: "https://www.vogue.co.uk/article/call-me-by-your-name-costume-designer-giulia-piersanti-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Piersanti explains the deliberately non-showy early-1980s wardrobe, local family-photo research, vintage sourcing, custom pieces and character-specific styling used to keep the period intimate and credible."
    },
    {
      title: "Luca Guadagnino on the Music of His Movies, and Why He Had to Have Sufjan Stevens for Call Me by Your Name",
      publisher: "Pitchfork",
      url: "https://pitchfork.com/thepitch/luca-guadagnino-interview-call-me-by-your-name-sufjan-stevens-music-of-his-movies/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Guadagnino describes piano as Elio's interior and exterior dialogue, commissioning Sufjan Stevens, coordinating period dance movement and playing 'Visions of Gideon' to Chalamet while shooting the final fire scene."
    },
    {
      title: "AFI Movie Club: Call Me by Your Name",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/afi-movie-club-call-me-by-your-name/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "AFI records Samuel Deshors's added fountain, orchard and pergola at the villa, the one-take WWI-memorial confession and Timothée Chalamet's preparation in Italian, piano and guitar."
    },
    {
      title: "Q&A with Luca Guadagnino, Michael Stuhlbarg and Timothée Chalamet",
      publisher: "National Board of Review",
      url: "https://nationalboardofreview.org/2017/12/qa-luca-guadagnino-michael-stuhlbarg-timothee-chalamet/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Guadagnino, Stuhlbarg and Chalamet discuss the performances and the late-production father-son scene, documenting how relationships accumulated across the shoot and informed the film's emotional continuity."
    },
    {
      title: "Armie Hammer, Timothée Chalamet, Luca Guadagnino talk Call Me by Your Name",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/news/armie-hammer-timothee-chalamet-luca-guadagnino-talk-call-me-by-your-name/5122213.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The director and actors discuss casting, rehearsal, the Crema-area shoot and the villa production, supporting the film's location-immersive performance method and gradual calibration of intimacy."
    },
    {
      title: "Legendary Filmmaker James Ivory on Call Me by Your Name, the Year's Most Talked-About Movie",
      publisher: "Town & Country",
      url: "https://www.townandcountrymag.com/leisure/arts-and-culture/a13454615/james-ivory-interview-call-me-by-your-name/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "James Ivory explains the project's long development, his initial executive-producer and proposed co-director roles, his condition that he write the adaptation himself and his effort to preserve André Aciman's tone."
    },
    {
      title: "The 90th Academy Awards – 2018",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2018",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "The Academy records Call Me by Your Name as a Best Picture nominee, Timothée Chalamet as a leading-actor nominee, James Ivory as the adapted-screenplay winner and 'Mystery of Love' as an original-song nominee."
    },
    {
      title: "Armie Hammer on the making of Call Me by Your Name",
      publisher: "ABC News",
      url: "https://abcnews.com/Entertainment/armie-hammer-making-call/story?id=52411138",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Hammer discusses working with Chalamet for the first time and Guadagnino's rehearsal process, supporting the deliberate breaking of actor distance before the romance was staged on location."
    },
    {
      title: "Call Me by Your Name Costume Designer on How the Film Nailed 1983 Style",
      publisher: "GQ",
      url: "https://www.gq.com/story/call-me-by-your-name-costume-designer-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Giulia Piersanti details local-photo and period research, vintage clothing and character-led wardrobe decisions that distinguish Elio, Oliver and the provincial Italian setting without turning the costumes into overt nostalgia."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
