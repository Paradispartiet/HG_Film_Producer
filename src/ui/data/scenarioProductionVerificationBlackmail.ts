import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const blackmailProductionCaseVerification = {
  scenarioId: "scenario_blackmail_1929",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "BFI sources support Blackmail as a 1929 British International Pictures/Hitchcock transition production made in distinct silent and sound versions, not one fixed text. BFI records Alfred Hitchcock directing, John Maxwell producing, Charles Bennett's play as the source, Anny Ondra starring and the sound version running about 82 minutes, while the Hitchcock 9 programme gives the silent version at about 75 minutes. BFI archive material places Hitchcock and Ondra at Elstree during spring 1929 sound experimentation and documents Joan Barry speaking Alice's lines off camera while Ondra mouthed them, so the case treats live dubbing as a specific production solution and keeps audible/visible performance attribution separate. BFI early-sound analysis also highlights the sound version's selective psychological use of repeated words and offscreen cues, while the silent version retains distinct visual fluidity. BFI on-set evidence documents cameraman Jack Cox during British Museum location work and explains that Hitchcock could not film inside the museum, requiring reconstructed/special-effects work for the climax. Science Museum Group documentation is used only for broader transition context: RCA Photophone existed as an optical variable-area sound-on-film system by this period, but this record does not prove that Blackmail used that exact system, so the case explicitly forbids unsupported hardware-brand claims.",
  sources: [
    {
      title: "Blackmail (1929)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/bc5f7958-d424-517f-b707-791d7bc8ed55/blackmail",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "directing", "performance", "editing", "sound"],
      note: "BFI identifies the film as made in both silent and sound versions; credits Hitchcock, John Maxwell and the principal writers/cast; lists the sound version at 82 minutes; describes it as Britain's first talkie; and records Joan Barry as the voice heard for Anny Ondra's heroine in the sound version."
    },
    {
      title: "Object of the week: 96-year-old footage of Alfred Hitchcock in a test take for his thriller Blackmail",
      publisher: "British Film Institute National Archive",
      url: "https://www.bfi.org.uk/features/object-week-alfred-hitchcock-sound-test-blackmail",
      sourceKind: "archive_feature",
      supports: ["overall", "performance", "sound"],
      note: "BFI National Archive documents the 1929 sound test, Elstree experimentation, British International Pictures provenance and the fact that Ondra did not provide Alice's audible English dialogue in the sound version."
    },
    {
      title: "10 great early sound films",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-early-sound-films",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound", "performance"],
      note: "BFI compares the silent and sound versions, emphasizes their formal differences, discusses the psychologically expressive repeated 'knife' cue and describes Joan Barry's live off-camera dialogue while Ondra mimed the lines."
    },
    {
      title: "The Hitchcock 9 – international touring programme",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/bfi-distribution/bfi-international-distribution/touring-programmes/hitchcock-9",
      sourceKind: "film_institute",
      supports: ["overall", "camera_format", "editing"],
      note: "BFI treats silent Blackmail as a distinct 75-minute late-silent film and describes the project as commissioned across silent and part-talkie/sound conditions, supporting explicit version separation."
    },
    {
      title: "On set with Alfred Hitchcock",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/set-alfred-hitchcock",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "effects_animation", "sound"],
      note: "BFI documents the production beginning as a silent in spring 1929, the later sound conversion, Joan Barry's off-camera speaking solution, cameraman Jack Cox at the British Museum and special-effects reconstruction because interior museum filming permission was unavailable."
    },
    {
      title: "Short length of Photophone film",
      publisher: "Science Museum Group Collection",
      url: "https://collection.sciencemuseumgroup.org.uk/objects/co18625/short-length-of-photophone-film",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Science Museum Group documents RCA Photophone as a 1927-era optical variable-area sound-on-film system and theatre-conversion option. It is used only to establish the competing technical context; the Blackmail case explicitly does not infer that this specific system was used without direct production evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
