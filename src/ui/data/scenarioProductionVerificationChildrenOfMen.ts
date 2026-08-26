import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const childrenOfMenProductionCaseVerification = {
  scenarioId: "scenario_children_of_men_2006",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Children of Men is verified as a 2006 USA/United Kingdom/Japan Production Case built around 35mm capture, documentary-influenced handheld staging, long-duration blocking, specialized mechanical camera rigs, photochemical dailies, digital intermediate finishing and selective invisible VFX. BFI supplies the 114-minute institutional record, production countries, director, producers and principal craft credits. AFI independently preserves camera, editing and supervising-sound credits. American Cinematographer provides the title-specific production account: Kodak Vision2 Expression 500T 5229, Arricam Lite and Arri 235 use, early Master Primes with an Ultra Prime retained when weight mattered, an 18mm preference with explicit exceptions, minimal traditional lighting, constant exposure changes, 30-percent Deluxe ACE treatment for 35mm dailies, EFilm DI work with colorist Steve Scott, and the Doggicam Two-Axis Dolly/Sparrow Head car rig. The same source explicitly states that the apparent car one-shot contains seamless cuts. Framestore documents the birth-sequence workflow: roughly three and a half minutes of handheld imagery assembled from two invisibly joined sections, a partial physical baby stand-in, a photoreal CG infant, 32 Framestore shots of which 20 feature the baby, and Maya/RenderMan/MatchMover-Boujou/Commotion/Shake handoffs. Institutional and guild records support Jim Clay and Geoffrey Kirkland as production designers, Jennifer Williams as set decorator, Jany Temime as costume designer, and Alfonso Cuarón/Alex Rodríguez as editors. Exact camera serials, per-shot focal lengths beyond the documented 18mm preference, shutter angles, scan/output resolution, sound-recorder and microphone models, total VFX count beyond Framestore's contribution, and final release-print details remain outside the high-confidence boundary unless a title-specific source establishes them.",
  sources: [
    {
      title: "Children of Men (2006)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/aca1e8dc-9c0d-51fa-abf1-83b68192d3c9/children-of-men",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional film record supporting 2006, USA/United Kingdom/Japan, 114 minutes, Alfonso Cuarón direction, producer group, screenwriters, Emmanuel Lubezki cinematography and principal cast."
    },
    {
      title: "Children of Men: Humanity's Last Hope",
      publisher: "American Cinematographer / American Society of Cinematographers",
      url: "https://theasc.com/article/children-of-men-humanitys-last-hope/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Title-specific Emmanuel Lubezki production account documenting Kodak 5229, Arricam Lite, Arri 235, Master Prime/Ultra Prime use, 18mm preference with exceptions, minimal lighting, live exposure changes, ACE dailies, EFilm DI, documentary-inspired staging, Two-Axis Dolly/Sparrow Head car rig and seamless cuts in the apparent one-shot."
    },
    {
      title: "AC Gallery: Children of Men",
      publisher: "American Cinematographer / American Society of Cinematographers",
      url: "https://theasc.com/articles/ac-gallery-children-of-men",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Production-still archive confirming the handheld production context, Arricam/Arri 235 use, the roof-duplexed car rig, Sparrow Head/Two-Axis Dolly configuration, stage lighting examples and camera-department personnel."
    },
    {
      title: "Children of Men",
      publisher: "Framestore",
      url: "https://www.framestore.com/work/children-men",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Vendor case study documenting the CG-baby sequence, two invisibly joined sections, partial practical stand-in, 32 Framestore shots with 20 baby shots, tracking/paint/animation/compositing work and the Maya, RenderMan, MatchMover/Boujou, Commotion and Shake toolchain."
    },
    {
      title: "Children of Men",
      publisher: "American Film Institute",
      url: "https://watch.afi.com/movie/children-of-men",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credit record supporting Alfonso Cuarón, Emmanuel Lubezki, editors Alex Rodríguez/Alfonso Cuarón, supervising sound editors David Evans/Richard Beggs and the producer/screenwriter structure."
    },
    {
      title: "Children of Men",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/children-men",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "National film-institute record independently supporting direction, cinematography, editors Alex Rodríguez/Alfonso Cuarón, production designers Jim Clay/Geoffrey Kirkland, producers and widescreen/Dolby/SRD release metadata."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
