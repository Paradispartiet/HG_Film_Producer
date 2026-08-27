import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theRevenantProductionCaseVerification = {
  scenarioId: "scenario_the_revenant_2015",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "The Revenant is verified as a 2015 Chapter 18 Production Case in which remote-location logistics, chronological seasonal continuity, natural-light scheduling, ALEXA M/XT and selected ALEXA 65 capture, wide-lens immersive choreography, historically grounded production design, stunt safety, invisible VFX, on-location editorial and layered sound functioned as one production system. BFI anchors a 156-minute version and principal writing, directing, producing and cast metadata. ARRI documents ALEXA XT, ALEXA M and ALEXA 65 use with Master Primes and Prime 65 lenses, while explicitly describing ALEXA 65 as selected/significant rather than universal. American Cinematographer documents chronological shooting, natural light and period-correct firelight, a short Canadian winter daylight window and the later Argentina move when warm weather reduced usable snow. British Cinematographer preserves the tested film-to-digital decision, ALEXA M handheld use, ALEXA XT Steadicam use and controlled firelight exceptions inside the overwhelmingly natural-light strategy. The Society of Camera Operators documents handheld, Steadicam and crane/dolly as the core single-perspective movement modes and describes cold-weather operational constraints. ILM documents the bear attack as a continuous-seeming six-minute sequence assembled from multiple plates and performances with a digital bear, cubs, wounds, blood, scars, weather and environment work. MPC documents the opening attack as more than 100 photographed elements reduced to 39 extended shots using stitching, retiming, 2.5D projection, sky replacement, CG arrows and horses plus smoke, fire and mud. Stephen Mirrione's Post Magazine account places editorial in preproduction and on location, using rehearsal/video-tap material to test rhythm and turning over major VFX sequences while principal photography continued. Jack Fisk's interviews document period journals and Karl Bodmer paintings, extensive scouting and real local materials used to make sets withstand wide-angle proximity. BAFTA records the sound team including Lon Bender, Chris Duesterdiek, Martín Hernández, Frank A. Montaño, Jon Taylor and Randy Thom. Exact total budget, exact shooting-day count, exact ALEXA 65 percentage, complete lens/shot mapping, universal exposure values, exact recording-media configuration, complete artificial-light inventory, stunt-rig geometry, total VFX shot count across all vendors, software stack, production-sound hardware and DI node/mastering settings remain outside the verified layer unless stronger title-specific evidence establishes them.",
  sources: [
    {
      title: "The Revenant (2015)",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/film/cecebfa8-c26d-587f-8de7-b34f52b21086/the-revenant",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalogue anchoring 2015, 156 minutes, Alejandro González Iñárritu direction, Mark L. Smith/Iñárritu writing and producer metadata."
    },
    {
      title: "ALEXA XT and ALEXA 65 on The Revenant",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/alexa-xt-and-alexa-65-on-the-revenant-",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Manufacturer production record supporting ALEXA XT, ALEXA M, ALEXA 65, Master Primes, Prime 65 lenses, low-light/natural-light use, remote Canada/Argentina work and cold-weather equipment observations."
    },
    {
      title: "Wrap Shot: The Revenant",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/articles/wrap-shot-the-revenant",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC account supporting chronological production, natural light, period-correct firelight, short winter daylight windows and the move to Argentina for snow continuity."
    },
    {
      title: "Emmanuel Lubezki AMC ASC / The Revenant",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/emmanuel-lubezki-amc-asc-the-revenant/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Lubezki interview supporting film-versus-digital testing, ALEXA M/XT operating roles, ALEXA 65 adoption, wide lenses, natural-light strategy and bounded controlled-light exceptions."
    },
    {
      title: "The Revenant: Shooting In the Elements",
      publisher: "Society of Camera Operators",
      url: "https://soc.org/project/the-revenant-shooting-in-the-elements/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Camera-operator production account supporting remote-location movement, handheld/Steadicam/crane grammar, cold-weather logistics and the move to Tierra del Fuego for the final snowbound battle geography."
    },
    {
      title: "The Revenant",
      publisher: "Industrial Light & Magic",
      url: "https://www.ilm.com/vfx/the-revenant/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Vendor record supporting the six-minute continuous-seeming bear attack, multiple plates/performances, digital bear and cubs, wounds, blood, scars, weather and environmental VFX."
    },
    {
      title: "The Revenant",
      publisher: "MPC",
      url: "https://www.mpcvfx.com/en/filmography/revenant/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Vendor record supporting the opening attack's more-than-100 photographed elements reduced to 39 extended shots using stitches, retiming, 2.5D projection, sky replacement, CG horses/arrows and environmental effects."
    },
    {
      title: "Editing: The Revenant",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2016/January-1-2016/Editing-The-Revenant.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "cinematography"],
      note: "Stephen Mirrione interview documenting preproduction involvement, an editorial trailer on location, rehearsal/video-tap rhythm tests and early VFX turnover while shooting continued."
    },
    {
      title: "Designing for the Screen: An Interview with Jack Fisk",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/3923-designing-for-the-screen-an-interview-with-jack-fisk",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Production-design interview supporting hands-on location research and design practice; used with Fisk's Revenant-specific reporting to bound the design methodology."
    },
    {
      title: "The Revenant - Sound",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/sound/",
      sourceKind: "film_institute",
      supports: ["sound", "overall"],
      note: "Institutional awards record identifying the credited BAFTA-winning sound team: Lon Bender, Chris Duesterdiek, Martín Hernández, Frank A. Montaño, Jon Taylor and Randy Thom."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
