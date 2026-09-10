import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const dontLookUpProductionCaseVerification = {
  scenarioId: "scenario_don_t_look_up_2021",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Don't Look Up's climate-communication screenplay, improvisation-friendly ensemble direction, political-thriller 35mm foundation, mixed media formats, naturalistic-versus-broadcast lighting split, collage editing and awards-recognized score are supported by filmmaker interviews and Academy records. Producer Kevin Messick documents that Paramount balked at the production scale implied by the reported USD 75 million budget, while Netflix supplied the necessary budget and global distribution reach; this is retained as a platform-backed feature-production economics case without inferring undisclosed rights or recoupment terms.",
  sources: [
    { title: "Adam McKay Wants to Make Movies for The Now", publisher: "Netflix Tudum", url: "https://www.netflix.com/tudum/articles/adam-mckay-dont-look-up-interview", sourceKind: "filmmaker_interview", supports: ["overall", "screenplay", "editing"], note: "McKay explains the climate-crisis origin, title and communication theme, DiCaprio's detailed script-and-tone discussions, improvised media fragments and the editorial development of the accelerating social-media montage with Hank Corwin and Picturemill." },
    { title: "How DP Linus Sandgren FSF ASC used Kodak 35mm to capture Adam McKay's apocalyptic satire 'Don't Look Up'", publisher: "Kodak", url: "https://www.kodak.com/en/motion/blog-post/dont-look-up/", sourceKind: "filmmaker_interview", supports: ["overall", "cinematography", "editing"], note: "Sandgren documents the 1970s political-thriller references, anamorphic 35mm foundation, multiple-camera improvisation coverage, Boston and Red Sky Studios production, COVID protocols, film stocks, Atlas Orion and Kowa lens strategies, mixed smartphone/TV formats and naturalistic-versus-high-key lighting split." },
    { title: "Art of the Cut: All-Star Comedy ‘Don't Look Up’ Pulls No Punchlines", publisher: "Frame.io Insider", url: "https://blog.frame.io/2022/01/12/art-of-the-cut-dont-look-up-dicaprio-laurence-streep/", sourceKind: "filmmaker_interview", supports: ["overall", "editing"], note: "Editor Hank Corwin describes the director-editor collaboration, performance selection, tonal calibration and associative collage method used to combine large amounts of improvised and global reaction material." },
    { title: "2022 Academy Awards", publisher: "Academy of Motion Picture Arts and Sciences", url: "https://www.oscars.org/oscars/ceremonies/2022/A--E", sourceKind: "film_institute", supports: ["overall", "screenplay", "editing", "sound"], note: "The Academy records Don't Look Up as a Best Picture nominee, Adam McKay and David Sirota in Original Screenplay, Hank Corwin in Film Editing and Nicholas Britell in Original Score." },
    { title: "How ‘Don't Look Up’ Film Editor's Wedding Video Ended Up in the Movie's Final Montage", publisher: "TheWrap", url: "https://www.thewrap.com/dont-look-up-ending-wedding-video-editor-hank-corwin/", sourceKind: "filmmaker_interview", supports: ["overall", "editing", "sound"], note: "Corwin explains the final sequence as an emotionally structured juxtaposition of fragmentary images, including the interaction of montage, music, faith, cynicism and catastrophe rather than a conventional continuous scene." },
    {
      title: "Kevin Messick on his thriving filmmaking relationship with ‘Don’t Look Up’ director Adam McKay",
      publisher: "Screen International",
      url: "https://www.screendaily.com/features/kevin-messick-on-his-thriving-filmmaking-relationship-with-dont-look-up-director-adam-mckay/5168483.article",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Direct producer interview documenting Paramount's reluctance at the reported budget level, Netflix stepping in with the necessary production budget and desired global reach, and the pandemic-era production burden."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
