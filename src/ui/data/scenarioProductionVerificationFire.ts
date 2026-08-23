import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fireProductionCaseVerification = {
  scenarioId: "scenario_fire_1996",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Fire is verified as Deepa Mehta's 1996 India/Canada production centered on contemporary middle-class New Delhi and built through a transnational production/craft network rather than through its later censorship controversy. TIFF's Canadian Film Encyclopedia records 35mm colour, 104 minutes, Trial by Fire Films, writer/director/producer Deepa Mehta, producer Bobby Bedi, executive producers Suresh Bhalla and David Hamilton, cinematographer Giles Nuttgens, editor Barry Farrell, sound by Konrad Skreta and music by A.R. Rahman. BFI independently lists Bobby Bedi, Deepa Mehta and Anne Masson as producers. UCLA confirms 35mm/104 minutes and adds Aradhana Seth as production designer. FemFilm records Trial by Fire Films Inc. together with Kaleidescope India (Pvt.) and gives 108 minutes, so those company/runtime differences are preserved as catalogue/credit variance rather than silently normalized. A contemporary December 1996 report quotes Mehta saying that a planned Hindi version was changed back to her original English just before shooting; current Mongrel Media metadata lists both Hindi and English, so the case retains this as a documented pre-production language decision rather than claiming one universal language track. The same contemporary report quotes Mehta on deliberately choosing Nuttgens and Bobby Bedi. Mehta's distributor press-kit statement says she wanted to demystify exotic images of India through a contemporary middle-class family, while a later first-person interview says she visualizes colour, set design and lighting in script detail and identifies reds with Fire. These sources support visual intention, not an invented camera/lens/stock/exposure/lighting/lab recipe. Later violent protests, withdrawals and censorship disputes in India are circulation/reception evidence only and do not establish original production technique. Modern sensitive-performance work requires explicit consent and applicable professional/labor safeguards; no undocumented historical protocol is invented. 104 minutes is canonical because TIFF, UCLA, Mongrel Media and contemporary festival records converge there, while FemFilm's 108-minute record is retained as version/catalogue variance.",
  sources: [
    {
      title: "Fire",
      publisher: "TIFF Canadian Film Encyclopedia",
      url: "https://cfe.tiff.net/canadianfilmencyclopedia/content/films/fire",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Primary institutional production record for Trial by Fire Films, 35mm colour, 104 minutes, Mehta/Bedi, Nuttgens, Farrell, Skreta and Rahman."
    },
    {
      title: "Fire (1996)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/49060fbb-208d-5185-b48c-606ffacfc009/fire",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Independent BFI record for Deepa Mehta, Bobby Bedi and Anne Masson producer credits and principal authorship/cast."
    },
    {
      title: "Fire",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/fire-2016-03-19",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Archive screening record confirming Trial By Fire Films, 35mm colour, 104 minutes, Nuttgens, Aradhana Seth, Farrell and Rahman."
    },
    {
      title: "Fire",
      publisher: "Mongrel Media",
      url: "https://www.mongrelmedia.com/index.php/filmlink?id=1b517cc4-dad6-495d-b006-c4eeed152447",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Current distributor record for Hindi/English languages, 104 minutes and 1996 release metadata."
    },
    {
      title: "CINEMA-INDIA: 'Fire' Brings Another Taboo Subject to Screen",
      publisher: "Inter Press Service",
      url: "https://www.ipsnews.net/1996/12/cinema-india-fire-brings-another-taboo-subject-to-screen/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Contemporary 1996 interview/report preserving Mehta's late language decision and first-person comments on choosing Giles Nuttgens and Bobby Bedi."
    },
    {
      title: "Fire director's statement",
      publisher: "Deepa Mehta / Mongrel Media press materials",
      url: "https://cdn.filmtrackonline.com.s3.amazonaws.com/mongrelmedia/starcm_vault_root/images%2Ffiles%2F32%2F32ad1565-58fc-46f7-99a3-b5c5b10d2a1f.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Mehta's own statement on contemporary middle-class India and her anti-exoticizing purpose; used as authorial intent, not documentary proof."
    },
    {
      title: "Maps and Movies: Talking with Deepa Mehta",
      publisher: "Bright Lights Film Journal",
      url: "https://brightlightsfilm.com/maps-and-movies-talking-with-deepa-mehta/",
      sourceKind: "filmmaker_interview",
      supports: ["screenplay", "cinematography"],
      note: "First-person interview describing Mehta's detailed visualization of colour, set design and lighting and identifying reds with Fire."
    },
    {
      title: "Fire",
      publisher: "Canadian Women Film Directors Database (FemFilm)",
      url: "https://femfilm.ca/film_search.php?film=mehta-fire&lang=e",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Academic database preserving Canada/India, Trial by Fire Films Inc./Kaleidescope India (Pvt.), core credits and a 108-minute record retained as catalogue/version variance."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
