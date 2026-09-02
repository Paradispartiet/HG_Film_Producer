import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const thePowerOfTheDogProductionCaseVerification = {
  scenarioId: "scenario_the_power_of_the_dog_2021",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "The Power of the Dog is verified as an award-priority Chapter 19 production case through BAFTA/BBFC/BFI institutional records plus first-party and direct craft testimony from ARRI, Netflix, Filmmaker Magazine, Post Magazine, the Society of Camera Operators, Screen Daily, Frame.io, the Motion Picture Association and Befores & Afters. BAFTA establishes the 2022 Best Film win and Jane Campion's Director win; awards establish case priority and reception, not workflow. BBFC classifies the 2021 cinema version at exactly 127 minutes while BFI lists 125 minutes, so the playable case uses 127 minutes and preserves the variance. Ari Wegner documents roughly a year of prep with Campion, weeks studying South Island light and a final month storyboarding the entire film near the location while testing blocking against sets under construction. ARRI and SOC establish ALEXA LF as principal capture, ALEXA Mini LF for Steadicam/support, two LF bodies plus one Mini LF, Ultra Panatar 1.25x anamorphic primes and the documented long zoom. Post Magazine independently records 4K ALEXA LF capture and the Ultra Panatar selection. Filmmaker documents CRLS reflectors redirecting New Zealand sun, HMI stage sunlight, printed panoramic location backdrops, stage/location continuity and the distinction between extensive planning and on-day visual discovery. Netflix and Grant Major document the physical ranch build and weathering; Screen Daily documents several weeks of photography followed by an approximately four-month COVID shutdown and a later safe restart, with Campion using the pause to review existing footage and alter her understanding of the second half. Peter Sciberras documents editing in isolation during the shutdown, Avid, layered selects, perspective/tension work, a quick rough cut after wrap and an exploratory Kodi Smit-McPhee voice session during the COVID break. Netflix documents production sound mixer Richard Flynn and supervising sound editor Robert Mackenzie building the house soundscape and piano/banjo intimidation as psychological action. Mackenzie documents sound-design mixdowns and Jonny Greenwood score sketches circulating through the cutting room during editing. Befores & Afters and Wegner document invisible VFX including environment extensions, CG cattle and the mountain-dog pareidolia effect planned before photography. Kirsty Cameron documents natural-fiber, distressed, character-specific costume construction. Current locked sources do not establish an audited final negative cost, full financing waterfall, exact total shooting days, exhaustive crew census, complete camera/lens/lighting ledgers, complete animal/stunt records, full costume/makeup duplicate ledgers, complete VFX vendor/shot ledger, full editorial version history, full production-sound/ADR/Foley/premix/stem architecture, complete score-session ledger or distribution recoupment; those remain unresolved.",
  sources: [
    {
      title: "Film Awards 2022 Results",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2022",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional record establishing The Power of the Dog as 2022 Best Film winner and Jane Campion as Director winner."
    },
    {
      title: "The Power Of The Dog",
      publisher: "BBFC",
      url: "https://www.bbfc.co.uk/release/the-power-of-the-dog-q29sbgvjdglvbjpwwc01mzm0otg",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional version record establishing the 2021 2D cinema classification at exactly 127m00s and later home-entertainment variants."
    },
    {
      title: "The Power of the Dog (2021)",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/film/646e60f4-d3a9-51d9-8a51-cd402c76c971/the-power-of-the-dog",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional film record listing Jane Campion, producers, principal cast, adaptation context and a 125-minute runtime, preserved as a provenance variance against BBFC."
    },
    {
      title: "2022 Oscar winners rely on ARRI cameras and lenses",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/2022-oscar-winners-rely-on-arri-cameras-and-lenses",
      sourceKind: "trade_feature",
      supports: ["cinematography", "overall"],
      note: "First-party camera record establishing ALEXA LF as main camera and ALEXA Mini LF as Steadicam/support, with direct Ari Wegner testimony."
    },
    {
      title: "SOC Creative Spotlight: The Power of the Dog",
      publisher: "Society of Camera Operators",
      url: "https://soc.org/project/soc-creative-spotlight-the-power-of-the-dog/",
      sourceKind: "film_institute",
      supports: ["cinematography", "overall"],
      note: "Operator/craft record establishing two ALEXA LF bodies, one Mini LF, Ultra Panatar 1.25 anamorphic prime focal lengths, long zoom and focus/rangefinder support."
    },
    {
      title: "The Power of the Dog cinematographer Ari Wegner",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2021/September-October-2021/-I-The-Power-of-the-Dog-I-cinematographer-Ari-We.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall"],
      note: "Direct Wegner testimony establishing 4K ALEXA LF capture and Panavision Ultra Panatar lens selection after spherical/anamorphic testing."
    },
    {
      title: "The Best Way to Fight the Sun is With the Sun: DP Ari Wegner on The Power of the Dog",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/112712-dp-ari-wegner-the-power-of-the-dog/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall", "editing"],
      note: "Direct Wegner account supporting year-long prep, complete storyboarding, on-day discovery, location/stage split, printed panoramic backdrops, HMI sunlight, CRLS reflectors and quarantine-fed visual observations."
    },
    {
      title: "The Power of the Dog Production Designers Built a House from Scratch",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/articles/the-power-of-the-dog-production-designers-built-a-house-from-scratch",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Netflix production-design record supporting Grant Major's ranch build, weathering, three-story construction challenge and the house's narrative role."
    },
    {
      title: "The Power Of The Dog director Jane Campion talks casting Benedict Cumberbatch, switching shoot to New Zealand",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/features/the-power-of-the-dog-director-jane-campion-talks-casting-benedict-cumberbatch-switching-shoot-to-new-zealand/5166334.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Direct Campion record supporting Central Otago/New Zealand production, several weeks of filming before COVID shutdown, approximately four-month pause, quarantine/restart and review of first-half material during the break."
    },
    {
      title: "Art of the Cut: Cutting the Tension in The Power of the Dog",
      publisher: "Frame.io Insider",
      url: "https://blog.frame.io/2022/01/19/art-of-the-cut-the-power-of-the-dog/",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "overall", "sound"],
      note: "Direct Peter Sciberras interview supporting layered selects, editorial perspective/tension decisions and the COVID-break Kodi Smit-McPhee voice-recording exploration."
    },
    {
      title: "The Power of the Dog Editor Peter Sciberras on Dailies, Pandemic Curveballs",
      publisher: "Below the Line",
      url: "https://mande.net/btl/awards/power-of-the-dog-editor-peter-sciberras-interview",
      sourceKind: "filmmaker_interview",
      supports: ["editing", "overall"],
      note: "Direct Sciberras account supporting editing with dailies during shutdown, Avid use and the roughly one-to-one-and-a-half-week post-wrap rough-cut estimate."
    },
    {
      title: "The Oscar-Nominated Sounds of The Power of the Dog",
      publisher: "Netflix Tudum",
      url: "https://www.netflix.com/tudum/articles/oscar-nominated-sounds-of-the-power-of-the-dog",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing", "overall"],
      note: "Direct Richard Flynn and Robert Mackenzie testimony supporting the Burbank-house soundscape, piano/banjo tension and sound as a tool for isolation and psychological threat."
    },
    {
      title: "Exploring Audio with Robert Mackenzie in The Power of the Dog",
      publisher: "PremiumBeat",
      url: "https://www.premiumbeat.com/blog/power-of-the-dog-robert-mackenzie/",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing"],
      note: "Direct Mackenzie testimony supporting parallel development of sound design and Jonny Greenwood's score through stereo mixdowns and musical sketches exchanged during editing."
    },
    {
      title: "The Power of the Dog Costume Designer Kirsty Cameron on Highlighting Harsh Beauty",
      publisher: "The Credits / Motion Picture Association",
      url: "https://www.motionpictures.org/2021/12/the-power-of-the-dog-costume-designer-kirsty-cameron/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct costume-designer account supporting natural fibers, character-specific materials, physical distress methods, limited suitcase wardrobes and light-aware costume choices."
    },
    {
      title: "The invisible effects of The Power of the Dog",
      publisher: "Befores & Afters",
      url: "https://beforesandafters.com/2022/08/24/the-invisible-effects-of-the-power-of-the-dog/",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "overall"],
      note: "Direct VFX supervisor Jay Hawkins account supporting environment extensions, CG cattle and the shadow/hill construction of the dog pareidolia effect."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
