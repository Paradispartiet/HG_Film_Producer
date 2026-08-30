import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const everythingEverywhereAllAtOnceProductionCaseVerification = {
  scenarioId: "scenario_everything_everywhere_all_at_once_2022",
  status: "verified",
  verifiedAt: "2026-08-30",
  summary: "Everything Everywhere All at Once is verified as Chapter 19's independent/low-mid-budget production case. SXSW records the 139-minute Daniels feature with cinematographer Larkin Seiple, editor Paul Rogers, production designer Jason Kisvarday, sound designer Andrew Twite and A24 as distributor. Producer Jonathan Wang describes an approximately $14 million independent movie and a concentrated location strategy: the former Founders Bank/call-center building in Simi Valley became a mini-studio lot for about five weeks, followed by roughly one week across other locations. Daniels describe 38 days of principal photography, while Seiple says roughly 30 days were spent in the IRS building. The cinematography record establishes a common ALEXA Mini camera platform with deliberately different optical languages across universes: anamorphic for the Action Verse, Baltars and hard light for the Hot Dog Verse, Master Primes for the rock universe, older Todd-AO anamorphics for the dawn-of-man parody, additional Atlas/Scorpio anamorphics and a Laowa probe lens for a macro hand-bridge view. Aspect-ratio, lighting and colour shifts were preplanned as audience-navigation tools. Action production was similarly prepared: the Le brothers/Martial Club shot and edited fight previs before photography, allowing performance, camera and edit to share a concrete blueprint. Practical and digital effects were intentionally interdependent. Jason Hamer built the articulated Raccacoonie puppet; practical rock movement was digitally cleaned up; and VFX supervisor Zak Stoltz describes a five-person core completing most effects around photographed bases with After Effects and selective Blender work. Post-production was integrated into creative testing: editor Paul Rogers cut in Premiere Pro, used Frame.io for remote review and built temporary sound design before lock to determine whether sequences worked. Sound supervisor/re-recording mixer Brent Kiser and sound designer Andrew Twite developed the verse-jump radio/static language and recorded ordinary materials as effects sources; Alexandra Fehrman and Kiser completed a native Dolby Atmos mix at Signature Post. The verified production model is therefore constrained-scale filmmaking that converts location concentration, optical switching, previs, practical fabrication, small-team compositing, editorial iteration, remote collaboration and sound design into apparent multiverse scale. Exact daily camera reports, full budget/payroll records, every lens/focal length by shot, complete VFX shot/vendor counts, full stunt-risk documentation, production-design ledgers, complete costume/hair/makeup continuity, exact final color transforms, detailed music-recording workflow and recoupment remain outside the verified layer.",
  sources: [
    {
      title: "Everything Everywhere All At Once @ Paramount Theatre",
      publisher: "SXSW",
      url: "https://schedule.sxsw.com/2022/events/FS14356",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Festival record supporting the 139-minute runtime, Daniels, Larkin Seiple, Paul Rogers, Jason Kisvarday, Andrew Twite, A24 distribution and the 2022 world-premiere context."
    },
    {
      title: "Everything Everywhere All at Once Producer Jonathan Wang on Making an Oscar Juggernaut",
      publisher: "The Credits / Motion Picture Association",
      url: "https://www.motionpictures.org/2023/01/everything-everywhere-all-at-once-producer-jonathan-wang-on-making-an-oscar-juggernaut/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Producer interview supporting the approximately $14 million independent scale, Founders Bank mini-studio strategy, five weeks in Simi Valley plus one week elsewhere, laundromat/location choices and COVID shutdown context."
    },
    {
      title: "The Silliest Use of IMAX in the History of IMAX: DP Larkin Seiple on Everything Everywhere All at Once",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/114590-interview-cinematographer-larkin-seiple-everything-everywhere-all-at-once/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "DP interview supporting the ALEXA Mini platform, mixed lens/aspect-ratio universe grammar, IRS-building resource strategy, Martial Club previs, practical Raccacoonie, rock cleanup, high-speed insert and remote Paris pickup lighting replication."
    },
    {
      title: "All These Different Michelles Are the Stars of Their Different Stories: The Daniels on Everything Everywhere All At Once",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/113871-everything-everywhere-all-at-once/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Directors' interview supporting the 38-day principal-photography account, office-building production concentration and the deliberate use of aspect ratios, lens language, colour and process to distinguish universes."
    },
    {
      title: "The 2023 Oscar for Best Picture goes to Everything Everywhere All at Once",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/arri-cameras-lenses-and-lighting-shine-behind-2023-oscar-winners/the-2023-oscar-for-best-picture-goes-to-everything-everywhere-al-312720",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Manufacturer record confirming ALEXA Mini capture, Master Prime use for the rock universe and ARRI SkyPanel lighting on set."
    },
    {
      title: "The invisible VFX of Everything Everywhere All at Once",
      publisher: "befores & afters",
      url: "https://beforesandafters.com/2022/08/03/magazine-preview-the-invisible-vfx-of-everything-everywhere-all-at-once/",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "Zak Stoltz interview supporting the five-person core VFX model, After Effects-centered workflow, selective Blender work and practical-base compositing strategy."
    },
    {
      title: "Everything Everywhere All at Once - Editing a Movie Made of Movies",
      publisher: "Frame.io",
      url: "https://blog.frame.io/2022/04/13/art-of-the-cut-everything-everywhere-all-at-once/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Paul Rogers interview supporting Premiere Pro, Frame.io remote screenings/notes and temporary editorial sound design used before lock to test multiverse transitions."
    },
    {
      title: "Inside The Sound of Everything Everywhere All At Once",
      publisher: "Mix",
      url: "https://www.mixonline.com/news/everything-everywhere-all-at-once",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Sound-team reporting supporting Brent Kiser, Andrew Twite, practical source recording, the verse-jump radio/static language and the native Dolby Atmos mix by Kiser and Alexandra Fehrman at Signature Post."
    },
    {
      title: "Adobe Video and 3D Technologies take center stage at the 2023 Oscars",
      publisher: "Adobe",
      url: "https://blog.adobe.com/en/publish/2023/03/13/adobe-video-3d-tech-center-stage-2023-oscars",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "Vendor record independently confirming Paul Rogers and Parallax Post's use of Premiere Pro, After Effects and Frame.io on the film."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
