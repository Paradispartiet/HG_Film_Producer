import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theSocialNetworkProductionCaseVerification = {
  scenarioId: "scenario_the_social_network_2010",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "The Social Network is verified conservatively as a mature file-based RED production whose historical importance lies in workflow integration rather than a camera-brand milestone. American Cinematographer's title-specific account, preserved by RED, identifies RED One cameras with beta Mysterium-X sensors and Fincher/Cronenweth's effort to simplify and advance the data workflows developed on Zodiac and Benjamin Button. Contemporary workflow reporting records predominantly 4K 2:1 4096x2048 REDCODE 42 acquisition, duplicate LTO-4 camera-media archives, near-real-time ProRes editorial transcodes, FileMaker-based footage/VFX metadata, DPX generation from original R3D media, Final Cut editorial, an editorial-owned After Effects conform and Light Iron/Quantel Pablo finishing to a 2K DCP. This verification therefore keeps camera originals, proxies, VFX/finishing DPX and release outputs separate. Contemporary post reports describe nearly 1,000 VFX shots, while an HPA presentation reports roughly 1,200; both are retained as source-specific counts. The Winklevoss construction is verified as a combination of Armie Hammer, Josh Pence, face reprojection/replacement and split-screen techniques, preserving Pence's physical performance rather than erasing it. Later editor reporting records an 85-day shoot, 324 hours captured and 281 hours printed/selected for editorial. Ren Klyce's interview verifies that Fincher deliberately let the opening bar environment compete with dialogue and that Klyce researched music for the Henley sequence before photography, leading to Reznor/Ross's electronic treatment of 'In the Hall of the Mountain King.' AFI and BFI converge on a 120-minute release and principal credits. The verification does not call REDCODE uncompressed, does not treat ProRes proxies as masters, does not confuse 35mm release prints with film-origin photography and does not claim the production invented its component technologies.",
  sources: [
    {
      title: "The Social Network - American Cinematographer production account (RED archive)",
      publisher: "American Cinematographer / RED archive",
      url: "https://cms.red.com/blog/stg-250103-1122/articles/social-network-help-beta-test-red-mysterium-x-chip.frag.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific Michael Goldman production account identifying RED One/Mysterium-X digital capture and Fincher's deliberate evolution of the data-based workflows used on Zodiac and Benjamin Button."
    },
    {
      title: "Workflow Innovations for The Social Network",
      publisher: "Digital Cinema Report",
      url: "https://www.digitalcinemareport.com/workflow-innovations-for-the-social-network/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Documents Joe Wolcott's portable multi-location workflow, multiple RED One cameras, duplicate LTO-4 archive tapes, real-time ProRes editorial transcodes, Final Cut/Xsan and the relationship to earlier Fincher Viper workflows."
    },
    {
      title: "The Social Network",
      publisher: "Computer Graphics World",
      url: "https://www.cgw.com/Press-Center/News/2010/The-Social-Network.aspx",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Detailed Tyler Nelson workflow account: mostly 4K 2:1 4096x2048 REDCODE 42, ProRes 422 LT offline, FileMaker tracking, R3D-to-DPX pulls and After Effects conform."
    },
    {
      title: "The Social Network's Image Experts",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2010/October-1-2010/The-Social-Networks-Image-Experts.aspx",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Ian Vertovec/Light Iron account confirming editorial-owned conform, DPX handoff, Red-log debayer choices, extensive split-screen/stabilization coordination, Quantel Pablo grading and 2K DCP output."
    },
    {
      title: "Helping Fincher Build His Social Network",
      publisher: "Animation World Network / VFXWorld",
      url: "https://www.awn.com/vfxworld/helping-fincher-build-his-social-network",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "VFX account supporting the Winklevoss construction with Josh Pence, tracked facial work, 3D face projection/replacement and additional split-screen shots, plus selective-focus work for Henley."
    },
    {
      title: "Q&A With Ren Klyce, Sound Editor for The Social Network",
      publisher: "OurStage Magazine",
      url: "https://blog.ourstage.com/2010/10/17/qa-with-ren-klyce-sound-editor-for-the-social-network/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Klyce explains preproduction sound/music collaboration, the Henley 'In the Hall of the Mountain King' research and Fincher's deliberate decision to let the opening bar sound-pressure level compete strongly with dialogue."
    },
    {
      title: "The Social Network",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/66175-THE-SOCIAL-NETWORK",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming 120 minutes, RED digital photography, David Fincher, Aaron Sorkin, Jeff Cronenweth, Angus Wall, Kirk Baxter, Donald Graham Burt and principal production credits."
    },
    {
      title: "The Social Network (2010)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/f6410738-e0d4-5af7-ac32-6f68a50ae3c8/the-social-network",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Independent institutional confirmation of David Fincher, principal cast/producers and 120-minute running time."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
