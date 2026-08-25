import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const spiderVerseProductionCaseVerification = {
  scenarioId: "scenario_spider_man_into_the_spider_verse_2018",
  status: "verified",
  verifiedAt: "2026-08-25",
  summary: "Spider-Man: Into the Spider-Verse is verified as a 2018 Sony Pictures Animation/Sony Pictures Imageworks production case whose non-photoreal visual language required coordinated changes across story editorial, layout, character animation, line systems, rendering, FX and compositing rather than a single post-process. Imageworks documents artist-intention-first design, rigged facial line work, 2D hand-drawn effects, stepped animation/on-twos practice, print-derived halftoning and hatching, reduced conventional motion blur, graphic motion substitutes and a pipeline-wide workflow rethink. Animation World Network's practitioner reporting preserves the production scale and the distinction between volumetric 3D CG and hand-authored 2D/illustrative intervention, while its compositing reporting identifies an unusually comp-heavy Nuke workflow with more than twenty-five artist-facing tools, including Hatcher and Thresher, whose settings were still dialed per shot. Robert Fisher Jr.'s direct editorial interview establishes animation editing as an early story-development process spanning boards, layout, animation, version history, temp music and temp effects, and specifically preserves flexible modulation between ones and twos instead of a false blanket 12-fps claim. SoundWorks documents Geoffrey G. Rubay and Curt Schulkey's grounded-versus-fantastical sound strategy, Michael Semanick and Tony Lamberti's native Dolby Atmos final mix at Sony, character-specific sound identities, the multi-source collider design and Daniel Pemberton's orchestral score recorded at Air Studios. Sony's official project record establishes the three directors and principal producers, and the Australian Classification record independently supports the 117-minute original 2018 theatrical version. Verification therefore does not claim that the film invented comic-book aesthetics, non-photoreal CG, animation on twos, hand-drawn effects, Nuke compositing or immersive sound; does not describe the image as simply 2D or simply 3D; does not treat every element as animated at one cadence; does not reduce the look to a toon shader or automatic filter; and does not use awards or later influence as production evidence.",
  sources: [
    {
      title: "Spider-Man™: Into the Spider-Verse",
      publisher: "Sony Pictures Imageworks",
      url: "https://www.imageworks.com/node/1371",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Official Imageworks production record supporting the artist-intention-first visual language, pipeline/workflow changes, rigged and assisted line work, stepped animation/on twos, halftoning and hatching, reduced traditional motion blur, graphic motion solutions, hand-drawn FX combined with 3D simulation and multidimensional glitch rendering."
    },
    {
      title: "Creating A Stylized Universe for Sony's Spider-Man: Into the Spider-Verse",
      publisher: "Animation World Network",
      url: "https://www.awn.com/animationworld/creating-stylized-universe-sonys-spider-man-spider-verse",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Practitioner-led production feature supporting the CG/hand-drawn hybrid boundary, look-development effort, flexible frame cadence, no-motion-blur strategy, line work, cross-department pipeline changes and reported scale of more than 170 animators with nine leads."
    },
    {
      title: "Rewriting the Visual Rule Book on 'Spider-Man: Into the Spider-Verse'",
      publisher: "Animation World Network",
      url: "https://www.awn.com/animationworld/rewriting-visual-rule-book-spider-man-spider-verse",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Imageworks compositing-team reporting identifying the production as exceptionally compositing-heavy, extensive Nuke use, more than twenty-five compositor tools plus templates, Hatcher and Thresher, BlinkScript prototyping and shot-by-shot artist control."
    },
    {
      title: "ART OF THE CUT on editing Spider-Man: Into the Spider-Verse",
      publisher: "ProVideo Coalition",
      url: "https://www.provideocoalition.com/aotc-spiderverse/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Direct Robert Fisher Jr. interview supporting editorial involvement from story development onward, storyboard and layout iteration, version preservation, temp sound/music workflows, mixed ones/twos cadence and the need to protect character emotion through changing production representations."
    },
    {
      title: "The Sound of Spider Man: Into the Spider-Verse",
      publisher: "SoundWorks Collection",
      url: "https://next.soundworkscollection.com/posts/the-sound-of-spider-man-into-the-spiderverse",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct sound-team account supporting realistic environmental grounding, collider design from mechanical/electrical/electromagnetic sources, character-specific sonic signatures, native Dolby Atmos mixing at the Kim Novak Theater and Daniel Pemberton's orchestral score recorded at Air Studios."
    },
    {
      title: "SPIDER-MAN™: INTO THE SPIDER-VERSE",
      publisher: "Sony Pictures Animation",
      url: "https://www.sonypicturesanimation.com/projects/films/spider-man-spider-verse",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Official studio project record supporting the credited directors Bob Persichetti, Peter Ramsey and Rodney Rothman and the principal producing team; awards language is retained only as downstream reception, not production proof."
    },
    {
      title: "SPIDER-MAN: INTO THE SPIDER-VERSE",
      publisher: "Australian Classification",
      url: "https://www.classification.gov.au/titles/spider-man-spider-verse",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Government classification record independently supporting the 2018 production, original DCP public-exhibition version, 117-minute duration, three directors and principal producers."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
