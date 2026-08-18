import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const broadwayMelodyProductionCaseVerification = {
  scenarioId: "scenario_the_broadway_melody_1929",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "AFI, Library of Congress, BFI, George Eastman Museum and the Academy support The Broadway Melody as a 1929 Metro-Goldwyn-Mayer early-sound musical whose production system combined Movietone sound-on-film, dialogue, singing, orchestra, ensemble dance, a separate silent release and an original two-strip Technicolor production number. AFI records production beginning 19 October 1928; Harry Beaumont directing; Edmund Goulding, Sarah Y. Mason, Norman Houston, James Gleason and Earl Baldwin in distinct writing functions; John Arnold photography; Cedric Gibbons art direction; Sam S. Zimbalist editing the sound version; William LeVanway editing the silent version; David Cox wardrobe; Douglas Shearer as recording engineer; George Cunningham staging ensemble numbers; and MGM/Loew's production-distribution. AFI identifies ten reels/9,372 feet, Movietone and a separate 5,943-foot silent version for theatres without sound, while contemporary reporting cited by AFI praised dialogue remaining intelligible amid dance-floor movement and audible chorus tapping. BFI documents MGM's live orchestra/sound-balancing difficulties and the use of playback when the Painted Doll number was reworked. AFI also records the original two-strip Technicolor sequence and states that its color element is lost, so the case separates original production state from surviving black-and-white presentation. LOC preserves the 1929 copyright cutting continuity, George Eastman Museum preserves excerpt material, and the Academy records the film's Outstanding Picture win; those archival/reception facts support provenance and legacy but are not used as substitute evidence for undocumented craft details.",
  sources: [
    {
      title: "The Broadway Melody (1929)",
      publisher: "AFI Catalog of Feature Films",
      url: "https://catalog.afi.com/Film/3068-THE-BROADWAY-MELODY",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI supplies production/release dates, MGM/Loew's provenance, Beaumont/Goulding/Mason/Houston/Gleason/Arnold/Gibbons/Zimbalist/LeVanway/Cox/Shearer/Cunningham credits, Movietone, sound and silent version footage, Technicolor/color-sequence provenance, songs and contemporary sound-production observations."
    },
    {
      title: "10 great early sound films — The Broadway Melody",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-early-sound-films",
      sourceKind: "film_institute",
      supports: ["overall", "sound", "editing"],
      note: "BFI describes MGM's lack of a ready soundstage/in-house orchestra, live recording and balance difficulties, and playback/synchronization developed for the reworked Wedding of the Painted Doll number under Douglas Shearer's supervision."
    },
    {
      title: "The Broadway Melody, 1929 — Motion Picture Copyright Descriptions Collection",
      publisher: "Library of Congress",
      url: "https://findingaids.loc.gov/repositories/5/archival_objects/307629",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "LOC preserves the 1929 cutting continuity under registration LP 183 and identifies Metro-Goldwyn-Mayer Distributing Corporation as copyright claimant, grounding version/provenance work in a period production document."
    },
    {
      title: "The Broadway Melody — film excerpts",
      publisher: "George Eastman Museum",
      url: "https://collections.eastman.org/search/%2A/objects?filter=people%3ABessie+Love",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "George Eastman Museum collection records identify multiple preserved film excerpts from Harry Beaumont's 1929 The Broadway Melody, supporting archive-survival provenance without treating an excerpt as a complete original release state."
    },
    {
      title: "1930 Academy Awards — The Broadway Melody",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1930",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy records The Broadway Melody as the Outstanding Picture winner and lists Bessie Love and Harry Beaumont in the period awards record. This source is used for reception/legacy only, not to infer production technique."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
