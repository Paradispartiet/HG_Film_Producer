import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const cacheProductionCaseVerification = {
  scenarioId: "scenario_cache_2005",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Caché is verified as a 2005 France/Austria/Germany/Italy Production Case built around deliberate image-provenance ambiguity, early feature-HD production, static long-duration framing, reflected-light practice and a digital-to-35mm finish. Festival de Cannes supplies the 117-minute four-country competition record and Michael Haneke's writer-director credit. Les Films du Losange supplies the producer/coproducer network and a separate 1h55 distributor runtime, preserved as version provenance. Christian Berger's American Cinematographer production account documents the rejected film/digital mixture, all-digital acquisition on Sony HDW-750 and HDW-F900 bodies with Zeiss DigiPrimes, 16:9 capture, 1.85 35mm film-out, five weeks in Paris plus four in Vienna, repeated HD equipment failures, six camera bodies, da Vinci 2K grading, Éclair video safeties and Listo Film and Video color correction/final transfer. BFI Sight and Sound supports the formal purpose of Haneke's first HD feature: surveillance tapes and narrative reality can become visually indistinguishable. BFI programme notes preserve a wider department map across lighting, VFX, art direction, editing, color, laboratories, production sound, effects and re-recording. Exact recording codec, tape stock, per-shot focal lengths, camera menu settings, sound equipment, shot-specific VFX methods and lab calibration values remain outside the high-confidence boundary unless title-specific evidence establishes them.",
  sources: [
    {
      title: "CACHÉ (HIDDEN)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/cache/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional festival record supporting 2005, France/Austria/Germany/Italy, 117 minutes, Michael Haneke direction and screenplay, and the film's Cannes competition context."
    },
    {
      title: "Hidden",
      publisher: "Les Films du Losange",
      url: "https://filmsdulosange.com/en/film/hidden/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Producer/distributor record supporting the producer and coproducer network, Christian Berger cinematography, Michael Hudecek/Nadine Muse editing, art direction, costume, sound credits, 1h55 distributor duration and Dolby DTS exhibition record."
    },
    {
      title: "Lives on Tape",
      publisher: "American Cinematographer, vol. 87 no. 1 (January 2006)",
      url: "https://www.scribd.com/document/63868874/American-Cinematographer-Magazine-January-2006",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific interview with Christian Berger documenting the rejected film/digital test, all-digital Sony HDW-750/F900 acquisition, Zeiss DigiPrimes, 16:9 capture, 35mm 1.85 film-out, five-week Paris/four-week Vienna schedule, camera failures and six bodies, da Vinci 2K grade, Éclair video safeties, Listo color correction/final transfer and CRLS lighting practice."
    },
    {
      title: "Secrets, Lies & Videotape",
      publisher: "BFI Sight and Sound",
      url: "https://old.bfi.org.uk/sightandsound/feature/49266",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "BFI formal analysis supporting Caché as Haneke's first use of high-definition video and the deliberate blurring between surveillance-tape images and narrative reality."
    },
    {
      title: "Hidden - BFI Southbank Programme Notes",
      publisher: "BFI Documentation Unit / Sight and Sound",
      url: "https://bfidatadigipres.github.io/re-releases/2025/06/19/hidden/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Compiled production credits supporting Christian Berger, gaffers, VFX/special effects, Michael Hudecek and Nadine Muse, French/Austrian art direction, costume, color timing/colorist, Listo-Film/Éclair/CinePostproduktion Geyer laboratories, Jean-Paul Mugel production sound, Jean-Pierre LaForce re-recording and Pascal Chauvin sound effects."
    },
    {
      title: "Christian Berger interview",
      publisher: "HollywoodChicago",
      url: "https://www.hollywoodchicago.com/news/9728/interview-cinematographer-christian-berger-unravels-the-white-ribbon",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Berger interview recalling Caché's detached visual plan, the HD choice, Haneke's exact preparation and the severe technical breakdowns of the early-HD production."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
