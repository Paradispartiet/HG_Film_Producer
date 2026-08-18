import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const applauseProductionCaseVerification = {
  scenarioId: "scenario_applause_1929",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, Library of Congress, MoMA and Museum of the Moving Image support Applause as a 1929 Paramount Famous Lasky early-sound production whose significance lies in active negotiation of synchronized-sound constraints rather than passive acceptance of static staging. AFI credits Rouben Mamoulian, Garrett Fort, George Folsey, John Bassler and recording engineer Ernest F. Zatorsky; identifies Beth Brown's novel as the source; records Paramount Astoria interiors and New York exteriors; and lists the physical properties as Movietone sound with a silent version also available. AFI also records Mamoulian's use of two simultaneous sound tracks. The Library of Congress Mamoulian Papers preserve a production artifact showing large soundproof booths enclosing cameras/cameramen to prevent camera noise entering microphone recordings and identify additional crew including art director Sam Corso and cameramen George Hinners and Frank G. Kirby. MoMA describes extensive use of New York street/subway ambience and genuine camera fluidity, while Museum of the Moving Image anchors the production at Astoria and emphasizes the film's effort to break free from early-sound constraints. The case therefore distinguishes Movietone from sound-on-disc, treats simultaneous tracks as period recording/composition rather than modern digital multitracking, and avoids unsupported microphone-model or camera-model claims.",
  sources: [
    {
      title: "Applause",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/2614-APPLAUSE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies production company, Astoria/New York locations, Mamoulian/Fort/Folsey/Bassler/Zatorsky credits, Beth Brown source, Movietone physical property, approximately 80-minute runtime, documented silent alternative and the historical note about two simultaneous sound tracks."
    },
    {
      title: "Of Note: Lessons from a Director's Chair",
      publisher: "Library of Congress, Manuscript Division",
      url: "https://blogs.loc.gov/manuscripts/2022/02/of-note-lessons-from-a-directors-chair/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "LOC's Rouben Mamoulian Papers preserve a 1929 Applause production artifact whose drawing shows soundproof booths enclosing cameras/cameramen to keep camera noise out of microphone recordings and whose signatures identify crew including Folsey, Sam Corso, George Hinners and Frank G. Kirby."
    },
    {
      title: "Rouben Mamoulian's Applause",
      publisher: "Museum of Modern Art, Department of Film",
      url: "https://www.moma.org/explore/inside_out/2010/07/06/rouben-mamoulians-applause/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "MoMA's film-curatorial notes place production mainly at Paramount Astoria, emphasize the use of New York street and subway ambience and describe genuine fluidity in Mamoulian/Folsey camera movement against early-sound engineering constraints."
    },
    {
      title: "Librarian of Congress Adds Home Movie, Silent Films and Hollywood Classics to Film Preservation List",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/prn-06-234/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "The 2006 National Film Registry announcement identifies Applause as an early sound-era work remembered especially for Mamoulian's audacious style and a camera that moved through backstage space when many contemporary sound films were comparatively static."
    },
    {
      title: "Applause",
      publisher: "Museum of the Moving Image",
      url: "https://movingimage.org/?p=13202",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Museum of the Moving Image confirms the 1929, 80-minute Astoria production and frames its expressive camerawork as breaking free of early-sound technological constraints."
    },
    {
      title: "The Astoria Studio",
      publisher: "Museum of the Moving Image",
      url: "https://movingimage.org/feature/the-astoria-studio/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "The museum's studio history places Applause among the talking features and musicals made during Astoria's concentrated early-sound production period, supporting the industrial/studio context without substituting generic studio history for film-specific technical claims."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
