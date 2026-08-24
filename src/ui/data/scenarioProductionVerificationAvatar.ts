import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const avatarProductionCaseVerification = {
  scenarioId: "scenario_avatar_2009",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Avatar is verified conservatively as a 2009 virtual-production integration case rather than as an invented-firsts catalogue. American Cinematographer documents Cameron's tracked handheld virtual camera, which was not an optical camera but a tracked interface into the digital scene; SimulCam, which registered a physical live-action camera into the CG world and composited virtual environments/characters into the onset view; MotionBuilder environments used for virtual tech scouting, blocking and lighting planning before practical construction; the Fusion 3-D stereoscopic live-action rig with variable interocular and convergence control; roughly 18 months of motion capture followed by Wellington live-action photography; and Mauro Fiore's bounded statement that about 70 percent of the movie was motion capture. Joe Letteri independently describes the historical shift from inserting a CG character into a live-action plate toward performers working in an entirely virtual world with camera decisions made during capture. Post Magazine documents Cameron's own explanation of the virtual camera and Simulcamera logic. Mix documents Chris Boyes, Gary Summers and Andy Nelson as distinct effects/dialogue/music re-recording responsibilities and James Horner's score within the final immersive sound system. AFI and BFI converge on 161 minutes and the principal credits: Cameron, Jon Landau, Mauro Fiore, Stephen Rivkin, John Refoua, Rick Carter and Robert Stromberg. The verification does not claim Avatar invented motion capture, facial capture, CGI, stereo cinema or virtual cameras; it treats production-scale integration of these systems as the historically significant fact.",
  sources: [
    {
      title: "Conquering New Worlds: Avatar",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/article/avatar/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific production account covering tracked virtual camera, SimulCam, MotionBuilder virtual scouting, virtual lighting/blocking, Fusion 3-D camera controls, roughly 18 months of motion capture, Wellington live-action photography and the bounded about-70-percent motion-capture account."
    },
    {
      title: "Director's Chair: James Cameron - Avatar",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2010/January-1-2010/DIRECTORS-CHAIR-JAMES-CAMERON-AVATAR.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Cameron explains the virtual camera as a non-optical tracked object and the Simulcamera concept as a way to see live actors and CG world together during photography."
    },
    {
      title: "Joe Letteri on the Visual Effects of Avatar",
      publisher: "Below the Line / Media & Entertainment",
      url: "https://mande.net/btl/crafts/post-production/joe-letteri-on-the-visual-effects-of-avatar",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Letteri describes Avatar's performance-capture/facial-capture workflow and the shift from adding CG characters to live plates toward actors performing in a virtual world with camera choices made during capture."
    },
    {
      title: "Avatar",
      publisher: "Mix",
      url: "https://www.mixonline.com/the-wire/avatar-369250",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Sound-team account separating Chris Boyes' effects mix/sound design, Gary Summers' dialogue mix and Andy Nelson's music mix, with James Horner's score and Cameron's stereoscopic spatial-sound review."
    },
    {
      title: "Avatar (2009)",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/55800-AVATAR",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming 161 minutes and principal credits including James Cameron, Jon Landau, Mauro Fiore, Stephen Rivkin, John Refoua, Rick Carter, Robert Stromberg and James Horner."
    },
    {
      title: "Avatar (2009)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/4c436e08-63d4-57ed-96c3-e97fc65cfadc/avatar",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Independent institutional confirmation of James Cameron, James Cameron/Jon Landau production and 161-minute running time."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
