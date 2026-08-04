import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fortyFiveYearsProductionCaseVerification = {
  scenarioId: "scenario_45_years_2015",
  status: "verified",
  verifiedAt: "2026-08-04",
  summary: "The film's Constantine adaptation, five-day anniversary countdown, Kate-centred point of view, BFI-Film4-backed British independent production, Rampling-Courtenay performance, Norfolk domestic geography, 35 mm Panavision image, long-take blocking, editorial sound motifs, script-selected songs and international awards are supported by ten sources from ten publishers.",
  sources: [
    {
      title: "45 Years: ‘The UK has a blind spot for dramas about middle-class emotions’",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/45-years-we-have-blind-spot-uk-dramas-about-middle-class-emotions",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Andrew Haigh and Tristan Goligher document the David Constantine source, love-and-choice themes, the film's relation to Weekend, its position between sentimental and gritty British cinema and BFI Film Fund backing."
    },
    {
      title: "45 Years",
      publisher: "Film4",
      url: "https://www.film4productions.com/productions/2015/45-years",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Film4's production record confirms the Film4-backed The Bureau feature, Andrew Haigh's screenplay and direction, David Constantine source, producer Tristan Goligher and principal cast."
    },
    {
      title: "The AFI FEST Interview: 45 YEARS Director Andrew Haigh",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/the-afi-fest-interview-45-years-director-andrew-haigh/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Haigh explains expanding a ten-page story with the anniversary party, lowering the characters' ages, shifting viewpoint to Kate and filming the final party as one planned extended take after six weeks."
    },
    {
      title: "Andrew Haigh interview on 45 Years",
      publisher: "Seventh Row",
      url: "https://seventh-row.com/2016/01/21/andrew-haigh-45-years/",
      sourceKind: "filmmaker_interview",
      supports: ["screenplay", "cinematography", "editing", "sound"],
      note: "Haigh details exact blocking, long takes, Kate-favoured camera placement, repeated walks, unrehearsed performance and the editor's discovery of the slide-carousel sound as a recurring structural motif."
    },
    {
      title: "Natural Revelations: Andrew Haigh & Tom Courtenay on 45 Years",
      publisher: "RogerEbert.com",
      url: "https://www.rogerebert.com/interviews/natural-revelations-andrew-haigh-and-tom-courtenay-on-45-years",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Haigh and Courtenay discuss the absence of conventional rehearsal, scripted couple routines, two-shots, naturalistic Norfolk environments, character backstory and the importance of music, books and politics to the marriage."
    },
    {
      title: "45 YEARS",
      publisher: "The Match Factory",
      url: "https://www.the-match-factory.com/catalogue/films/a-45-years.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The sales catalogue supplies the principal writer, producer, cast, cinematography, editing, production-design, sound-design, costume and makeup credits and records 35 mm, 1.85:1 colour and 5.1 release specifications."
    },
    {
      title: "The Making of 45 YEARS",
      publisher: "The Criterion Channel",
      url: "https://www.criterionchannel.com/45-years/videos/the-making-of-45-years",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Criterion's production documentary assembles Andrew Haigh, Tristan Goligher, Charlotte Rampling, Tom Courtenay, editor Jonathan Alberts and cinematographer Lol Crawley around the film's performance and craft process."
    },
    {
      title: "The Brutalist Cinematographer Lol Crawley on VistaVision, the 70mm Experience, and Brady Corbet’s Flexibility",
      publisher: "The Film Stage",
      url: "https://thefilmstage.com/the-brutalist-cinematographer-lol-crawley-on-vistavision-the-70mm-experience-and-brady-corbets-flexibility/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "In a retrospective account of format economics, Crawley identifies 45 Years as a one-to-two-million-pound production photographed on 35 mm with Panavision cameras."
    },
    {
      title: "Film Awards 2016",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2016",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BAFTA's official 2016 film-awards record lists 45 Years among the nominees for Outstanding British Film and credits producer Tristan Goligher and writer-director Andrew Haigh."
    },
    {
      title: "The 88th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2016",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy's official ceremony record confirms Charlotte Rampling's leading-actress nomination for 45 Years, documenting the performance's international awards recognition."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
