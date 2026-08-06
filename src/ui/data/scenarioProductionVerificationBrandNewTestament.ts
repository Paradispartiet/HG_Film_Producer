import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const brandNewTestamentProductionCaseVerification = {
  scenarioId: "scenario_the_brand_new_testament_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "The Brand New Testament's six-month co-written screenplay, child-led episodic fairytale, Belgium-France-Luxembourg production, Brussels locations, frontal sacred symmetry, award-winning real-surreal design, Sony F65/F55 and Leica Summilux camera system, mobile theatrical lighting, associative edit, tactile sound, apostle-specific music and practical-digital fantasy effects are supported by ten inspectable filmmaker, cinematography, institutional and awards sources from ten publishers.",
  sources: [
    {
      title: "The Brand New Testament press kit",
      publisher: "Unifrance",
      url: "https://medias.unifrance.org/medias/159/76/150687/presse/the-brand-new-testament-presskit-english.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Van Dormael explains the six-month collaboration with Thomas Gunzig, episodic fairytale construction, child viewpoint, direct address, frontal symmetry, Brussels locations, Kiss & Cry-inspired miniatures, practical gorilla, associative cuts, tactile sound, apostle-specific source music and An Pierlé's piano score."
    },
    {
      title: "The Brand New Testament — Christophe Beaucarne interview",
      publisher: "Belgian Society of Cinematographers",
      url: "https://www.sbcine.be/?p=6277",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Beaucarne documents the apostle colour systems, mobile light, pocket torches, studio and location units, Sony F65/F55 cameras, Leica Summilux lenses, 2.39 framing, S-Log2 workflow and Baselight colour finish."
    },
    {
      title: "Jaco van Dormael • Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/293162/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Van Dormael describes the film as perception through Ea's eyes, the gospel-like episodes, the secular-religious mixture and the front-facing symmetrical design jointly developed with Beaucarne and Sylvie Olivé."
    },
    {
      title: "The Brand New Testament",
      publisher: "Film Fund Luxembourg",
      url: "https://filmfund.lu/en/catalogue/film/the-brand-new-testament/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official fund record confirms the Luxembourg-Belgium-France co-production, selective financing, producers, screenplay, principal cast and Luxembourg production, editorial, sound, costume and grip personnel."
    },
    {
      title: "The Brand New Testament",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-brand-new-testament/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Academy records the writers, producers, cinematographer, editor, production designer, costume designer, sound team and original composer, plus Sylvie Olivé's 2015 European Production Designer award."
    },
    {
      title: "The Brand New Testament",
      publisher: "Flanders Image",
      url: "https://www.flandersimage.com/titles/the-brand-new-testament",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "The Flemish institutional record documents the co-production partners, public and tax-shelter support, Cannes Directors' Fortnight selection, international festival path and Belgian and European awards."
    },
    {
      title: "9 Foreign Language Films Advance in Oscar Race",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/news/9-foreign-language-films-advance-oscarr-race-1",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy's official announcement confirms The Brand New Testament as Belgium's entry on the nine-film shortlist for the 88th Academy Awards."
    },
    {
      title: "Sylvie Olivé elected European Production Designer 2015",
      publisher: "Association des Décorateurs de Cinéma",
      url: "https://www.adcine.com/news/sylvie-olive-elue-european-production-designer-2015",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "The professional association records Olivé's European award and the jury's recognition of a design that supports the drama by mixing reality and surrealism with ironic fantasy."
    },
    {
      title: "The Brand New Testament",
      publisher: "New Zealand International Film Festival",
      url: "https://www.nziff.co.nz/2015/archive/the-brand-new-testament/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The festival record confirms the Directors' Fortnight provenance, CinemaScope DCP presentation and principal writing, photography, editing, production design, costume and music credits."
    },
    {
      title: "Interview with Jaco van Dormael on The Brand New Testament",
      publisher: "epd Film",
      url: "https://www.epd-film.de/meldungen/2015/interview-mit-jaco-van-dormael-zu-seinen-film-das-brandneue-testament",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Van Dormael discusses the nested episodic structure and distinguishes its preplanned construction from the rhythm Hervé de Luze refined through small editorial changes over six months."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
