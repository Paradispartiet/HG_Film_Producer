import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const topGunMaverickProductionCaseVerification = {
  scenarioId: "scenario_top_gun_maverick_2022",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Top Gun: Maverick is verified as Chapter 19's industrial-scale/technical production case. Paramount records Joseph Kosinski's 131-minute feature; BBFC records distinct 130-minute 2D and 2D IMAX cinema versions, so runtime and exhibition variants remain explicitly versioned. American Cinematographer documents Claudio Miranda ASC's Sony VENICE 6K production, a six-camera F/A-18F cockpit system combining VENICE bodies and Rialto extensions, compact E-mount lenses, internal ND, NAVAIR-approved custom mounting, ejection-path clearance, shock/vibration/wind-tunnel validation, exterior aircraft cameras and multiple dedicated aerial platforms. NAVAIR independently documents Fleet Readiness Center Southwest engineering support for the interior and exterior camera-installation design. Production and crew reporting document a months-long performer flight-training program and an airborne handoff in which actors, seated behind Navy pilots, had to execute rehearsed scenes and trigger the camera system because the directing/camera team could not ride with them. Production sound mixer Mark Weingarten documents a Navy-approved path through the survival-vest/oxygen-mask communications connection and Lectrosonics PDR recorders synchronized to picture; his account states that the in-flight dialogue came from this production system rather than being looped later. Joseph Kosinski and editor Eddie Hamilton describe roughly 800 hours of footage and an editorial workflow embedded close to the aerial unit so captured material could be reviewed and feed back into later sorties. Kosinski and VFX supervisor Ryan Tudhope make clear that real aerial photography was the photographic foundation but not a no-VFX workflow: Method Studios led substantial digital aircraft and complex-sequence work, with other vendors handling additional effects, cleanup, graphics and cosmetic work. Lockheed Martin documents Skunk Works collaboration with the production on the fictional Darkstar design/build, while Company 3 credits Stefan Sonnenfeld for color and finishing. ASC records 2.39:1 and 1.90:1 IMAX framing. The case is therefore verified as a tightly coupled system of Navy operational constraints, flight-safety engineering, actor preparation, real-flight capture, production sound, massive editorial volume, practical-digital VFX integration, concept-aircraft fabrication and premium-format delivery. Exact sortie logs, every body/lens serial, full codec/frame-rate/media settings, all actor training hours, unpublished NAVAIR engineering documents, complete VFX shot/vendor allocation, asset topology, exact DI transforms for every master, full-film ADR ledger beyond the documented in-flight claim, detailed music-recording workflow, Navy reimbursement structure, insurance and financing/recoupment remain outside the verified layer.",
  sources: [
    {
      title: "Top Gun: Maverick",
      publisher: "Paramount Pictures",
      url: "https://www.paramountpictures.com/movies/top-gun-maverick",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official studio record supporting the 131-minute runtime, director Joseph Kosinski and the film's Paramount release identity."
    },
    {
      title: "Top Gun: Maverick",
      publisher: "BBFC",
      url: "https://www.bbfc.co.uk/release/top-gun-maverick-q29sbgvjdglvbjpwwc00odcwote",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Classification record supporting distinct 130-minute 2D and 2D IMAX cinema versions and a 130m32s home-entertainment version, preserving runtime/version boundaries."
    },
    {
      title: "Taking Flight with Top Gun: Maverick",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/article/top-gun-maverick/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Primary craft feature supporting Sony VENICE, Rialto, the six-camera F/A-18F cockpit configuration, compact lenses, internal ND, NAVAIR safety validation, exterior mounts, aerial platforms, backlight/exposure planning and 2.39:1/1.90:1 IMAX framing."
    },
    {
      title: "FRCSW Goes to the Movies: Top Gun: Maverick",
      publisher: "NAVAIR",
      url: "https://www.navair.navy.mil/news/FRCSW-Goes-Movies-Top-Gun-Maverick/Tue-05312022-0924",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Official Navy/NAVAIR record supporting Fleet Readiness Center Southwest engineering work on cockpit and exterior A/V installation design and aircraft preparation."
    },
    {
      title: "How the Top Gun: Maverick Sound Team Ingeniously Captured Raw Emotion Mid-Flight",
      publisher: "The Credits / Motion Picture Association",
      url: "https://www.motionpictures.org/2022/08/how-the-top-gun-maverick-sound-team-ingeniously-captured-raw-emotion-mid-flight-2/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "Production-sound interview supporting the survival-vest/mask microphone path, Lectrosonics recording, timecode synchronization, actor-triggered recording and the claim that in-flight dialogue was captured in production."
    },
    {
      title: "Top Gun: Maverick Director Joe Kosinski — Post, VFX and More",
      publisher: "postPerspective",
      url: "https://postperspective.com/top-gun-maverick-tom-cruise-director-joe-kosinski-talks-post-and-workflow/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Director interview supporting roughly 800 hours of footage, Eddie Hamilton's aerial-unit editorial role, the long assembly burden, the real-plate-plus-VFX strategy and Method/Lola/other vendor task separation."
    },
    {
      title: "Top Gun: Maverick VFX Supe Ryan Tudhope on How the U.S. Navy Ended Up Being His Team's Greatest Resource",
      publisher: "Below the Line",
      url: "https://mande.net/btl/awards/top-gun-maverick-vfx-ryan-tudhope-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "cinematography"],
      note: "Overall VFX-supervisor interview supporting Method as lead vendor, digital jet assets, editorial/VFX interdependence and additional vendor work including aircraft conversion and hidden environment/composite effects."
    },
    {
      title: "Top Engineers Influence Top Gun",
      publisher: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/en-us/careers/life-at-lm/2023/top-gun-movie.html",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Manufacturer record supporting Skunk Works collaboration with the film's creative team on Darkstar concept design and build."
    },
    {
      title: "Top Gun: Maverick",
      publisher: "Company 3",
      url: "https://www.company3.com/videos/top-gun-maverick-3/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Post facility credit record supporting Stefan Sonnenfeld as colorist, Company 3 finishing, Eddie Hamilton/Chris Lebenzon editorial credit and Method Studios VFX credit."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
