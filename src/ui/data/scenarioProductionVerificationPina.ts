import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const pinaProductionCaseVerification = {
  scenarioId: "scenario_pina_2011",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Pina is verified as a 2011 Chapter 18 Production Case in which native stereoscopic acquisition, dance staging, live-performance constraints, location solos, sparse 2D archive material and a stereo post pipeline were designed as one production system. Criterion anchors the released film at 103 minutes and records the long-planned Wenders-Bausch collaboration being reconceived after Bausch died in 2009. Road Movies confirms Wim Wenders as director, Pina Bausch as choreographer, Gian-Piero Ringel as producer, Alain Derobe as stereographer, Hélène Louvart and Jörg Widmer as cinematographers and Erwin M. Schmidt as 3D producer. Filmportal documents the four works selected for the project—Café Müller, Le Sacre du printemps, Vollmond and Kontakthof—the fact that Bausch died two days before a planned Wuppertal test shoot, and the posthumous redesign around those works, sparse 2D archive imagery and dancer solos in and around Wuppertal. Schmidt's title-specific production account documents extensive testing, Derobe's prototype mirror rigs, Sony HDC-1500 studio cameras on a telescopic crane, smaller Sony HDC-P1 systems for Steadicam, Transvideo stereoscopic monitoring, floor-grid/camera-height/crane planning and a reduced tested DigiPrime package of 10, 14 and 20 mm because lens changes required stereo recalibration. Wenders separately states that the finished film was photographed almost entirely with a 10 mm Zeiss prime and only very few closer shots on 14 mm; the current evidence therefore does not support assigning 20 mm to any final shot. Schmidt also records four dance works captured during live sold-out performances and location work around Wuppertal. TVBEurope documents several hour-long stereo takes during four-hour live performances, HDCAM-SR plus Codex recording, OMFI/Codex editorial interchange in Avid, and conform from HDCAM-SR at Pictorion Das Werk. These sources support a high-confidence native-stereo production and post case while leaving exact shot-level focal-length maps, exact interaxial/convergence values, stereo budget, reshoot counts, complete lighting plots, detailed exposure settings and a full title-specific sound-post chain outside the verified layer.",
  sources: [
    {
      title: "Pina",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28404-pina",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional release record supporting Germany/2011/103 minutes/1.85:1 and the key development boundary: the Wenders-Bausch collaboration was in preproduction when Bausch died and the finished 3D film was reconceived as a posthumous homage."
    },
    {
      title: "Pina",
      publisher: "Road Movies",
      url: "https://roadmovies.com/film/pina/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Official production-company record confirming the 3D dance-film identity, Tanztheater Wuppertal ensemble, Wenders direction, Bausch choreography, Ringel production, Derobe stereography, Louvart/Widmer cinematography, Schmidt 3D production and the principal co-production partners."
    },
    {
      title: "Pina: Infos zur Produktion",
      publisher: "film-tv-video.de",
      url: "https://www.film-tv-video.de/productions/2011/02/25/pina-infos-zur-produktion/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific account by 3D producer Erwin M. Schmidt documenting Derobe prototype rigs, Sony HDC-1500 crane and HDC-P1 Steadicam systems, Transvideo calibration, extensive tests, the floor-grid/camera-height/crane plan, live-performance capture and the reduced 10/14/20 mm tested DigiPrime package."
    },
    {
      title: "Interview: Wim Wenders about PINA & 3D",
      publisher: "thefilmbook / American Cinematographer interview material",
      url: "https://thefilmbook.net/2013/08/wim-wenders-about-pina-3d/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Wenders explains 3D as a mise-en-scène and bodily-presence problem, describes live Transvideo monitoring for dancer portraits, and states that Sony 1500 photography used a 10 mm Zeiss prime for almost the entire film with only very few closer 14 mm shots."
    },
    {
      title: "Das Werk completes 3D Pina",
      publisher: "TVBEurope",
      url: "https://www.tvbeurope.com/production-post/das-werk-completes-3d-pina",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Contemporary postproduction report documenting hour-long stereo takes inside four-hour live performances, Sony HDC-1500 stereo rigs, simultaneous HDCAM-SR and Codex recording, OMFI/Codex editorial interchange in Avid and conform from HDCAM-SR at Pictorion Das Werk."
    },
    {
      title: "Pina",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/pina_780cc75bfb1ce05ae040007f01001bcf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "German institutional film record documenting the four Bausch-selected works, Bausch's death two days before a planned test shoot, the subsequent project redesign, sparse 2D archive material, Wuppertal/Bergisches Land location solos and principal craft credits including Froschhammer, Rigaut and Lempert."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
