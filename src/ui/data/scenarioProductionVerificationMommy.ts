import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const mommyProductionCaseVerification = {
  scenarioId: "scenario_mommy_2014",
  status: "verified",
  verifiedAt: "2026-07-29",
  summary: "The case's Québécois independent production, fictional mother-son-care screenplay, Anne Dorval-Antoine Olivier Pilon-Suzanne Clément performance system, André Turpin colour 35 mm 1:1 portrait photography, Colombe Raby design, Xavier Dolan costume and editing, François Grenon-led sound, character-owned pop music and Cannes-to-Canadian reception are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Mommy",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/mommy/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes records the 2014 Competition selection and Jury Prize and supplies the principal credits for Dolan's screenplay, direction and editing, André Turpin cinematography, Eduardo Noya music and François Grenon-Sylvain Brassard sound work."
    },
    {
      title: "Mommy",
      publisher: "Metafilms",
      url: "https://www.metafilms.ca/en/film/mommy/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The production company documents producers Nancy Grant and Xavier Dolan, the 35 mm 1:1 presentation and credits for André Turpin, Colombe Raby, Dolan's costumes and editing, Maïna Militza makeup and François Grenon's sound department."
    },
    {
      title: "Xavier Dolan grows up with Mommy",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/la-et-mn-ca-xavier-dolan-20150118-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Dolan explains that the square image was designed as photographic portraiture and direct eye contact rather than a social-media reference, and connects its emotional and visual intent to Nan Goldin-like character images."
    },
    {
      title: "Xavier Dolan talks about his Oedipal drama Mommy",
      publisher: "LAist",
      url: "https://laist.com/shows/the-frame/xavier-dolan-talks-about-his-oedipal-drama-mommy",
      sourceKind: "filmmaker_interview",
      supports: ["screenplay", "cinematography", "editing"],
      note: "Dolan describes deciding on 1:1 before writing after the College Boy video, using the square for portrait-scale intimacy and planning the format as part of the mother-son-neighbour dramatic construction."
    },
    {
      title: "Interview: Xavier Dolan for Mommy",
      publisher: "Movies.ie",
      url: "https://www.movies.ie/interview-xavier-dolan-for-mommy/",
      sourceKind: "filmmaker_interview",
      supports: ["screenplay", "cinematography", "sound"],
      note: "Dolan discusses André Turpin's interest in the square format and distinguishes songs that play inside the characters' world from conventional music placed over scenes, supporting the image-and-pop release system."
    },
    {
      title: "Interview: writer-director Xavier Dolan and producer Nancy Grant on Mommy",
      publisher: "Scannain",
      url: "https://www.scannain.com/interview/interview-writerdirector-xavier-dolan-producer-nancy-grant-on-mommy/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Dolan and Grant discuss their production partnership, the College Boy precursor and a writing process in which the director imagines the completed scene, music and edit while constructing the screenplay."
    },
    {
      title: "Cannes 2014: Mommy",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/cannes-2014-mommy-xavier-dolan-anne-dorval-suzanne-clement/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The contemporary Cannes account places Mommy as Dolan's fifth feature and first main-competition film and examines its maternal viewpoint, strong female performances and volatile family-neighbour structure."
    },
    {
      title: "Mommy",
      publisher: "La Cinémathèque québécoise",
      url: "https://www.cinematheque.qc.ca/en/cinema/mommy/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "The Cinémathèque records the original 35 mm presentation and 1:1 format and preserves the film's Cannes, Jutra and Canadian Screen Award history, including recognition for cinematography, editing and makeup."
    },
    {
      title: "Mommy",
      publisher: "REEL CANADA",
      url: "https://canfilmday.ca/film/mommy/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "REEL CANADA's National Canadian Film Day record confirms the French-language Canadian drama, Dolan's authorship, the central cast and the film's major national and international awards profile."
    },
    {
      title: "Telefilm Canada awards the 2014 Guichet d'or to Xavier Dolan, writer-director of Mommy",
      publisher: "Telefilm Canada",
      url: "https://www.newswire.ca/news-releases/telefilm-canada-awards-the-2014-guichet-dor-to-xavier-dolan-writer-director-of-mommy-517333731.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Telefilm's official announcement records Mommy as the year's highest-grossing French-language Canadian feature in domestic theatres and documents its publicly supported national production and distribution context."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
