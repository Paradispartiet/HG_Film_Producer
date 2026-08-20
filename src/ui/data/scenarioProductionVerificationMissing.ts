import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const missingProductionCaseVerification = {
  scenarioId: "scenario_missing_1982",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "The AFI Catalog provides unusually detailed production evidence for Missing and supports treating it as a 1981 Mexico-based Universal/PolyGram political production rather than as a retrospective awards object or an unqualified transcript of Chilean history. AFI traces Edward Lewis's 1979 option of Thomas Hauser's The Execution of Charles Horman: An American Sacrifice, an early Warner Bros. development plan and the later move to Universal Pictures and PolyGram Pictures. It identifies Edward and Mildred Lewis producing, Peter Guber/Jon Peters executive producing and Terry Nelson associate producing; Costa-Gavras directing; Costa-Gavras and Donald Stewart receiving the final screenplay credit; and Ivan Moffat/John Nichols appearing in the development record without final onscreen screenplay credit. AFI dates principal photography from 13 April through the week of 8 June 1981 in Mexico and, using AMPAS production notes, identifies Mexico City, Acapulco and Churubusco Studio as the core production system. Acapulco stood in for Viña del Mar, Mexico City for Santiago, private mansions for public buildings including the U.S. Embassy, and Plaza de Toros for the National Stadium, with additional sourced locations including Santo Domingo Plaza, the Christopher Columbus monument, Del Prado Hotel roof and Gran Hotel lobby. Ricardo Aronovich is director of photography; Philippe Brun camera operator; Daniel Letterier and Pablo Rios camera assistants; Gabriel Castro gaffer; Bill Taylor matte photographer. AFI explicitly records Panaflex camera and lenses by Panavision and Technicolor prints, allowing those equipment/process facts while leaving unsupported stock emulsion, focal-length package, exposure ratios and lighting recipes unset. Peter Jamison, Lucero Isaac, Agustin Ytuarte, Linda Spheeris, props and Joe I. Tompkins anchor design/costume; Françoise Bonnot and four assistant editors anchor editing; Daniel Brisseau/Jose Garcia, Stephanie Van Den Bergh, Claude Villand, Michèle Boehm, loop-dialogue editors and Jean-Pierre Lelong anchor sound/dubbing/effects; Vangelis is composer/arranger; Albert Whitlock, Laurencio Cordero/Jesus Duran and Euro-Titres anchor special visual, special and optical/title effects. AFI also records the initial R rating and successful PG appeal, later State Department dispute, litigation and Academy outcome; Cannes independently records the 1982 competition, shared Palme d'Or and Best Actor prize; the Academy database confirms the adapted-screenplay award to Costa-Gavras and Donald Stewart. All reception/legal history remains downstream from the 1981 production. The case does not use the film's allegation of U.S. complicity as production evidence and does not invent exact finance shares, unsupported Chile photography, film stock, focal lengths, lighting recipes, sound hardware, crowd totals stronger than the source wording or a stronger France-editing claim than AFI's report that Costa-Gavras planned to edit there.",
  sources: [
    {
      title: "Missing",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/56847-MISSING",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies the development history, Warner-to-Universal/PolyGram transition, full credited production departments, 13 Apr–week of 8 Jun 1981 production dates, Mexico City/Acapulco/Churubusco substitution system, Panaflex/Panavision and Technicolor record, release/rating history and later political/legal context."
    },
    {
      title: "Missing",
      publisher: "Festival de Cannes",
      url: "https://cinemadedemain.festival-cannes.com/en/f/missing/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Cannes independently confirms Costa-Gavras direction, Costa-Gavras/Donald Stewart screenplay, Ricardo Aronovitch cinematography and Vangelis music; the shared Palme d'Or and Best Actor prize are kept strictly as downstream reception."
    },
    {
      title: "Academy Awards Database – Costa-Gavras",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://awardsdatabase.oscars.org/Search/GetResults?query=%7B%22Nominee%22%3A%22Costa-Gavras%22%2C%22Sort%22%3A%221-Nominee-Alpha%22%2C%22Search%22%3A%22Basic%22%7D",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy database confirms that Missing won the 1982/55th Academy Award for Writing (Screenplay Based on Material from Another Medium), credited to Costa-Gavras and Donald Stewart. This is reception history, not production-process evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
