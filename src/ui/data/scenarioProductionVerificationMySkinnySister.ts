import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const mySkinnySisterProductionCaseVerification = {
  scenarioId: "scenario_my_skinny_sister_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's child-centred eating-disorder screenplay, personal and clinical research, year-long paired casting, protected newcomer performance, family improvisation, figure-skating and domestic production spaces, Swedish-German co-production, credited image-edit-sound-music departments and youth-festival legacy are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Sanna Lenken • Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/290053/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Lenken explains the six-year development, personal anorexia experience, shift from the ill sister to the younger sister's viewpoint, year-long casting of hundreds of girls, paired chemistry, family improvisation and seven-hour child working day."
    },
    {
      title: "Talking with Swedish Director Sanna Lenken About Girlhood, Eating Disorders, and Her New Film",
      publisher: "VICE",
      url: "https://www.vice.com/en/article/my-skinny-sister-interview-119/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Lenken describes combining her own experience with interviews, family testimony and clinic research, making the short Eating Lunch as a funding bridge and treating anorexia as a disease that reorganizes the entire family."
    },
    {
      title: "My Skinny Sister",
      publisher: "Story",
      url: "https://story.se/film/my-skinny-sister/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The production page verifies Sanna Lenken, producer Annika Rogell, Catrin Wideryd's casting, Moritz Schultheiß's cinematography, Ellen Oseng's design, Hanna Lejonqvist's editing, the full sound and music teams and the Swedish-German co-production partners."
    },
    {
      title: "Min lilla syster vinner Kristallbjörnen i Berlin",
      publisher: "Swedish Film Institute",
      url: "https://www.filminstitutet.se/sv/om-oss/press/pressmeddelanden/2015/min-lilla-syster-vinner-kristallbjornen-i-berlin/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official Swedish record documents the Generation Kplus Crystal Bear for best feature, the first-feature context and the film's position in Swedish children and youth cinema."
    },
    {
      title: "My Skinny Sister",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/my-skinny-sister/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA verifies the Sweden-Germany production, Young Audience Award nomination and principal producer, screenplay, cinematography, editing, design, score, casting and cast credits."
    },
    {
      title: "My Skinny Sister",
      publisher: "Fortune Cookie Film",
      url: "https://www.fortunecookiefilm.com/?p=1960",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The German co-producer verifies the child-centred premise, full principal cast and production crew and the Tangy-SVT-SFI-Film i Väst-ZDF-Arte co-production and funding structure."
    },
    {
      title: "Kritikerna lovordar Sanna Lenkens Min lilla syster",
      publisher: "Film i Väst",
      url: "https://filmivast.se/nyheter-press/nyheter/kritikerna-hyllar-sanna-lenkens-min-lilla-syster",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The regional co-producer records the Swedish release and contemporary reception emphasizing warmth, humour, close sister chemistry and the film's unsensational handling of eating disorder and family pressure."
    },
    {
      title: "Nordisk Film & TV Fond Back Pernilla August's Serious Game",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/stories/nordisk-film-tv-fond-back-pernilla-augusts-serious-game",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "The fund records NOK 1.2 million support, Sanna Lenken's feature debut, the family-and-eating-disorder premise and principal photography beginning on 9 June 2014."
    },
    {
      title: "En samtale med regissør Sanna Lenken og Amy Deasismont om Min lille søster",
      publisher: "Montages",
      url: "https://montages.no/2015/09/en-samtale-med-regissor-sanna-lenken-og-amy-deasismont-om-min-lille-soster/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The interview examines Lenken and Deasismont's handling of sisterhood, bodily control, figure skating, performance preparation, humour and the decision to keep the film emotionally close without making illness imagery exploitative."
    },
    {
      title: "Generation 2015: 16 Feature Films for Children and Young People",
      publisher: "Berlin International Film Festival",
      url: "https://www.berlinale.de/media/download/presse/pressemitteilungen/65_berlinale/42_pressrelease_generation_14_1_15.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official Generation selection record verifies My Skinny Sister as a Sweden-Germany feature by Sanna Lenken in the 2015 Kplus programme, establishing its intended young-audience exhibition context."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
