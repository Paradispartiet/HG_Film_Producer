import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const taxidermiaProductionCaseVerification = {
  scenarioId: "scenario_taxidermia_2006",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The film's three-generation Hungarian body-history adaptation, Sundance-supported Hungarian-Austrian-French co-production, 35 mm image, epoch-specific design, unusual casting, practical specimens, mask and makeup effects, triptych editing, sound and Amon Tobin score are supported by ten institutional, filmmaker, craft and scholarly sources.",
  sources: [
    {
      title: "Taxidermia",
      publisher: "Hungarian National Film Institute",
      url: "https://nfi.hu/en/films/taxidermia.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The national film record confirms Pálfi and Ruttkay's screenplay, Pohárnok photography, Lemhényi editing, Tobin music, Zányi sound, Asztalos and Szöllősi design, Patkós costumes, the international producers and production companies and the film's award history."
    },
    {
      title: "Taxidermia — Basic Film",
      publisher: "NFI Film Archive",
      url: "https://nfi.hu/alapfilmek-1/alapfilmek-filmek/jatekfilm/taxidermia2.html?accessibility=true",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The archival essay explains how two unrelated Lajos Parti Nagy stories became one family genealogy, documents the Austrian co-production casting, the nonprofessional competitive-eater performer, Szöllősi's fabricated specimens and the film's place in Hungarian grotesque cinema."
    },
    {
      title: "Taxidermia",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/taxidermia/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Un Certain Regard record confirms the 2006 Hungary-Austria-France production, 92-minute triptych premise and the principal screenplay, cinematography, design, music, editing and sound credits."
    },
    {
      title: "Taxidermia",
      publisher: "Austrian Film Institute",
      url: "https://filminstitut.at/filme/taxidermia",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Austrian institutional record documents Amour Fou, Eurofilm, Memento and La Cinefacture, Hungarian and Eurimages support, Vienna and Budapest locations, the April 2005 shoot and the principal camera, editing, sound, costume and production-design departments."
    },
    {
      title: "György Pálfi — Director of Taxidermia",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/64570/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Pálfi explains rewriting and unifying the source stories, the sperm-spit-blood triptych, body-identity-emotion concept, early Hungarian funding rejection, Sundance recognition, ARTE and Memento participation and the organizational burden of the co-production."
    },
    {
      title: "Giant Cats and Other Beasts",
      publisher: "Filmkultúra",
      url: "https://filmkultura.hu/regi/2006/articles/profiles/taxidermiaint.en.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "The contemporary interview with Adrien Asztalos, Iván Pohárnok, mask and makeup artist Hildegard Haide and animator Béla Klingl directly documents the integrated visual-effects, prosthetic, makeup, fabrication and animation work behind the film's bodily images."
    },
    {
      title: "György Pálfi on His Work",
      publisher: "East European Film Bulletin",
      url: "https://eefb.org/interviews/gyorgy-palfi-on-his-work/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Pálfi describes method as the organizing principle of each project and explains Taxidermia's central question of bodily beauty, treating flesh and blood as a complete visual universe rather than reducing the film to provocation."
    },
    {
      title: "György Pálfi over Taxidermia",
      publisher: "Filmkrant",
      url: "https://filmkrant.nl/interview/gyorgy-palfi-taxidermia/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The director traces the three-generation structure to a film-school question about origins and explains the taxidermist's self-transformation as an art-historical response to body modification, preservation and the conversion of life into an exhibit."
    },
    {
      title: "2009 Sundance/NHK International Filmmakers Award Winners Announced",
      publisher: "Sundance Institute",
      url: "https://www.sundance.org/blogs/2009-sundance-nhk-international-filmmakers-award-winners-announced-3/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Sundance's official retrospective list identifies György Pálfi and Taxidermia among prior Sundance/NHK International Filmmakers Award recipients, confirming the development recognition that helped unlock the later co-production."
    },
    {
      title: "Corporeal Exploration in György Pálfi's Taxidermia",
      publisher: "Oxford Academic",
      url: "https://academic.oup.com/edinburgh-scholarship-online/book/14788/chapter-abstract/169007027",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The scholarly chapter places the film within Eastern European body cinema and analyzes its triptych of corporeal need through carnivalesque grotesque, consumer-object theory, haptic surfaces and the final conversion of organic flesh into constructed display."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
