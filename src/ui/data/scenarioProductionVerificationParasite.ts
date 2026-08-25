import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const parasiteProductionCaseVerification = {
  scenarioId: "scenario_parasite_2019",
  status: "verified",
  verifiedAt: "2026-08-25",
  summary: "Parasite is verified as a 2019 South Korean production case whose class drama was constructed through a tightly integrated live-action system: Bong Joon-ho and Han Jin-won's screenplay, Lee Ha-jun's purpose-built spaces, Hong Kyung-pyo's ALEXA 65/Prime DNA capture, controlled set lighting, storyboard-led shooting, Yang Jin-mo's editorial timing and Ralph Tae-young Choi's Dolby Atmos sound workflow. Cannes supplies an institutional 132-minute festival record and the principal craft credits, while KOFIC identifies Barunson E&A as the production company, CJ Entertainment as international sales and catalogs the Korean release at 131 minutes. The one-minute runtime difference is retained as an explicit source discrepancy rather than normalized away. ARRI documents the ALEXA 65 and Prime DNA package and separately records Hong's controlled-lighting strategy with SkyPanels and a practitioner estimate that 97 percent of the film's visual environment was produced or installed on set. Screen Daily's interview with Lee Ha-jun documents the Park house's Jeonju build, separate stage spaces, the constructed semi-basement neighborhood, flood/reset requirements and production-design decisions driven by camera, blocking and vertical spatial logic. Yang Jin-mo's direct editorial interviews establish Bong's unusually storyboard-dependent, low-coverage method while preserving editorial authorship through performance selection, timing, jump cuts, take-stitching, newly discovered cross-cutting and temp-sound notes. Choi's direct sound interview places post sound at Live Tone Studios, distinguishes dialogue/effects/backgrounds/ADR/Foley from pre-dub and final mix, and documents a Dolby Atmos finish plus Bong's emphasis on differentiated Park-house door sounds. Verification therefore does not claim that large format, vertical sets, no-coverage shooting, flood construction or Atmos automatically create class meaning; does not collapse symbolic interpretation into physical production fact; and does not use Cannes or Academy awards as evidence for how a shot, set, edit or sound cue was made.",
  sources: [
    {
      title: "GISAENGCHUNG (PARASITE)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/gisaengchung/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional festival record supporting the 2019 South Korean production, 132-minute Cannes runtime and principal credits including Bong Joon-ho, Han Jin-won, Hong Kyung-pyo, Lee Ha-jun, Yang Jin-mo, Choi Tae-young and Jung Jae-il."
    },
    {
      title: "PARASITE (2019)",
      publisher: "Korean Film Council / KoreanFilm.org",
      url: "https://www.koreanfilm.or.kr/eng/films/index/filmsView.jsp?movieCd=20183782",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "KOFIC catalog record supporting the Korean release, Barunson E&A production, CJ Entertainment international sales and a 131-minute runtime, retained beside the Cannes 132-minute record as an explicit metadata discrepancy."
    },
    {
      title: "The Oscar for Best Picture goes to … Parasite",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-equipment-and-services-support-oscar-winners/the-oscar-for-best-picture-goes-to-parasite--194804",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Manufacturer production record supporting Hong Kyung-pyo's use of ARRI Rental's ALEXA 65 camera and Prime DNA lenses. The awards framing is not used as production evidence."
    },
    {
      title: "ARRI SkyPanel shines in Academy Award-winning film Parasite",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-skypanel-shines-in-academy-award-winning-film-parasite-",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Hong Kyung-pyo lighting account supporting the use of SkyPanels across major locations and the production's unusually high degree of installed/set-based visual and lighting control; the reported 97 percent figure is kept as a practitioner estimate, not generalized beyond the title."
    },
    {
      title: "How Parasite production designer Lee Ha Jun built the film's iconic house",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/features/how-parasite-production-designer-lee-ha-jun-built-the-films-iconic-house/5146742.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct Lee Ha-jun interview supporting camera/blocking-led set design, the Park-house garden and first-floor build in Jeonju, constructed semi-basement neighborhood, flood-and-reset requirements, salvaged/aged material and vertical spatial design."
    },
    {
      title: "Parasite Editor Jinmo Yang Teaches Us How to Edit Without Coverage",
      publisher: "No Film School",
      url: "https://nofilmschool.com/parasite-editor-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Direct Yang Jin-mo interview supporting storyboard-heavy preparation, the absence of conventional coverage and masters, performance/timing decisions, stitching different takes and the flood/basement cross-cut discovered in editorial."
    },
    {
      title: "ART OF THE CUT with the editor of 2019 Cannes Palme d'Or winner Parasite",
      publisher: "ProVideo Coalition",
      url: "https://www.provideocoalition.com/aotc-parasite/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Yang Jin-mo interview supporting on-set/assembly workflow, temp sound work, director/editor sound notes, timing refinement and the handoff from editorial sound intention to specialist mixing."
    },
    {
      title: "Perfecting Parasite's award-winning sound - with Ralph Tae-Young Choi",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/parasite-sound/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Choi account supporting Live Tone Studios, dialogue/effects/background editing, ADR and Foley, the post schedule, two-week pre-dub, two-week Dolby Atmos final mix and Bong's emphasis on distinct Park-house door sounds and location-specific acoustic storytelling."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
