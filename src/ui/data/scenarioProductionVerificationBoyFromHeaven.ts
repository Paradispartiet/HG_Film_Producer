import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const boyFromHeavenProductionCaseVerification = {
  scenarioId: "scenario_boy_from_heaven_2022",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Boy from Heaven / Walad Min Al Janna is verified as a new source-first Chapter 19 Production Case for the Cannes major-prizes reconciliation only after title, alias, branch and PR reuse checks found no pre-existing scenario, Film Study or Production Verification identity. Festival de Cannes locks the 2022 Competition and Best Screenplay cycle, Tarik Saleh direction/screenplay, Pierre Aïm cinematography, Roger Rosenberg production design, Theis Schmidt editing, production year 2022 and a 126-minute runtime. Atmo records a €6.5 million Sweden/France/Finland/Denmark coproduction and states that the film was shot in Turkey and Gothenburg in 2021, largely in Istanbul. Producer Kristina Åberg directly states that Covid postponed the film by one year and that the summer production was mostly in Istanbul at the Süleymaniye Mosque and surroundings, with outdoor filming aided by Turkey's vaccination programme. Film i Väst records a 25 June to 20 September 2021 production window in Turkey, Gothenburg and Cairo and the wider coproduction/funding network. ARRI identifies the ALEXA LF. Pierre Aïm's direct Cannes cinematography survey records 4K ARRIRAW, the ARRI LF and a single Scorpio 40mm scope lens, explaining that the one-lens system supported a documentary-like proximity to Adam as he enters an unfamiliar world. Danish Film Institute and European Film Academy records support the editing, music, costume, makeup, sound and VFX credit layers. The playable scenario uses the Cannes/DFI 126-minute runtime while preserving shorter institutional/festival catalogue listings as unresolved version metadata. Exact shooting-day count, department-level Covid protocols, camera-body count, filtration and exposure settings, media/data topology, complete lighting package, sound equipment chain, editorial software/storage, grading system, VFX shot census, mastering lineage, financing percentages, recoupment and legal terms remain unresolved.",
  sources: [
    {
      title: "WALAD MIN AL JANNA (BOY FROM HEAVEN)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/walad-min-al-janna/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Official Cannes record supporting the 2022 Competition and Best Screenplay cycle, production year 2022, 126-minute runtime, Tarik Saleh direction/screenplay, Pierre Aïm cinematography, Roger Rosenberg production design and Theis Schmidt editing."
    },
    {
      title: "Boy from Heaven",
      publisher: "Atmo",
      url: "https://www.atmo.se/films/boy-from-heaven",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Lead producer-company record supporting the €6.5 million budget, Sweden/France/Finland/Denmark coproduction structure, principal creative credits, largely Istanbul-based production and the explicit statement that the film was shot in Turkey and Gothenburg in 2021."
    },
    {
      title: "Boy from Heaven producer Kristina Åberg on working with Tarik Saleh",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/stories/boy-from-heaven-producer-kristina-aberg-on-working-with-tarik-saleh",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Direct producer testimony supporting Covid as the largest production challenge, the one-year postponement, a summer shoot mostly in Istanbul at the Süleymaniye Mosque and surroundings, extensive outdoor filming and the choice to finance through traditional European public/coproduction structures rather than a streamer."
    },
    {
      title: "Four co-productions competing for Palme d’Or in Cannes",
      publisher: "Film i Väst",
      url: "https://filmivast.com/news-press/news/four-co-productions-competing-for-palme-dor-in-cannes",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Regional film-fund record supporting the 25 June to 20 September 2021 production window, Turkey/Gothenburg/Cairo shooting geography, Süleymaniye substitution for Al-Azhar and the wider production, broadcaster, sales and public-funding network."
    },
    {
      title: "ARRI technology behind the scenes of Cannes 2022",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-technology-in-cannes-2022",
      sourceKind: "manufacturer_case_study",
      supports: ["overall", "cinematography"],
      note: "Manufacturer record identifying Boy from Heaven, director Tarik Saleh, DP Pierre Aïm and the ALEXA LF camera platform."
    },
    {
      title: "Cannes Cinematography: Here Are the Cameras and Lenses Used to Shoot 49 Films",
      publisher: "IndieWire",
      url: "https://www.indiewire.com/features/general/cannes-2022-cinematography-cameras-lenses-1234725082/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer survey supporting 4K ARRIRAW, ARRI LF, the single Scorpio 40mm scope lens and Pierre Aïm's explanation that the one-lens system pursued documentary-like proximity to the main character."
    },
    {
      title: "Walad min al-Janna",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/116834",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "National film-institute record supporting the 126-minute feature, Sweden/France/Finland/Denmark production geography, producer/coproducer network, Theis Schmidt editing, Krister Linder music, Roger Rosenberg production design, Denise Östholm costume, Pia Cornelius hair/makeup, Peter Hjorth VFX supervision and post-production personnel."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
