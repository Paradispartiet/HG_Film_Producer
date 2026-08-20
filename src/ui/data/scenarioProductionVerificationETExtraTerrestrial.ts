import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const etExtraTerrestrialProductionCaseVerification = {
  scenarioId: "scenario_et_the_extra_terrestrial_1982",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "E.T. the Extra-Terrestrial is verified as a 1982 Universal Pictures / Amblin' Entertainment production using AFI for development history, credited departments, Sep 1981–Feb 1982 production chronology, California locations/stages, mechanical-creature and performer contributions, sound/voice credits, ILM visual-effects credits, physical presentation and runtime records; contemporary American Cinematographer reporting for Allen Daviau's photographic system and Spielberg's production-planning account; and the Academy Awards Database only for downstream craft recognition. AFI identifies Steven Spielberg and Kathleen Kennedy as producers, Melissa Mathison as credited writer, Spielberg as director, Allen Daviau as director of photography, James D. Bissell as production designer, Carol Littleton as editor, Carlo Rambaldi as E.T. creator, Dennis Muren as visual-effects supervisor, Kenneth F. Smith as optical-photography supervisor, Gene Cantamessa as sound mixer, Charles L. Campbell as supervising sound editor, Ben Burtt as E.T. voice designer and John Williams as composer. AFI records principal photography beginning 8 September 1981, work at a Culver City high school, Northridge and Tujunga, forty-two days across three Laird International Studios stages, six final forest days near Crescent City, December 1981 completion and additional January–February 1982 scenes. It also records Northridge/Tujunga locations edited into one neighborhood and explicitly separates Rambaldi's mechanical bodies from movement performed by Pat Bilon, Tamara De Treaux and Matthew De Meritt. Contemporary ASC reporting documents Daviau's low child-perspective camera height, ceiling-muslin diffusion, practical-heavy lighting, smoke/fog, selective backlight and silhouette, spherical photography framed for 1.85 with a 1.66 hard matte, Eastman 5247 throughout, normal processing, no pushing and no flashing. Spielberg's ASC interview states that ordinary dramatic material was intentionally not storyboarded while roughly forty-five ILM effects shots were storyboarded for precise cost/frame planning; his roughly $10.5 million / 58-day statement is retained as a contemporary stated production target/result rather than an independently audited final budget. AFI records Panaflex/Panavision, Technicolor prints, Dolby Stereo in selected theaters and 115/120-minute runtime records. The verification model therefore does not collapse mechanical creature work, performer movement, ILM optical effects, voice design, production sound, rerecording and score into a single effects category, does not invent unsupported hardware/lens/focal-length/exposure data, and does not encode AFI's internally anomalous postproduction date wording where it conflicts with the documented production chronology.",
  sources: [
    {
      title: "E.T.: The Extra-Terrestrial",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/67140-ET-THEEXTRA-TERRESTRIAL",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies development history, Universal/Amblin companies and credits, Sep 1981–Feb 1982 production chronology, Northridge/Tujunga/Culver City/Laird/Crescent City geography, Rambaldi creature construction and movement performers, sound/voice/VFX credits, physical presentation and runtime variants."
    },
    {
      title: "The Cinematography of E.T.",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/flashback-the-cinematography-of-e-t-1",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Originally published January 1983; Allen Daviau details child-height camera strategy, Bissell collaboration, stage/location construction, muslin diffusion, practical lighting, smoke/fog, spherical 1.85/1.66 hard-matte framing, Eastman 5247 and normal no-push/no-flash processing."
    },
    {
      title: "Steven Spielberg and E.T. the Extra-Terrestrial",
      publisher: "American Cinematographer",
      url: "https://theasc.com/articles/spielberg-et-the-extraterrestrial",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Originally published January 1983; Spielberg describes collaboration with Daviau and Muren, selective E.T. silhouette/backlight, ordinary scenes intentionally left unstoryboarded versus roughly forty-five precisely storyboarded ILM effects shots, and the contemporary budget/schedule target."
    },
    {
      title: "E.T. The Extra-Terrestrial — 1982 (55th Academy Awards)",
      publisher: "Academy Awards Database",
      url: "https://awardsdatabase.oscars.org/search/getresults?query=%7B%22FilmTitle%22%3A%22e.t.%22%2C%22Sort%22%3A%222-Film%20Title-Alpha%22%2C%22AwardShowNumberFrom%22%3A0%2C%22AwardShowNumberTo%22%3A0%2C%22Search%22%3A30%7D",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Used downstream to corroborate credited craft recognition: wins for original score, sound, sound-effects editing and visual effects, plus nominations including cinematography, directing, editing, picture and original screenplay."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
