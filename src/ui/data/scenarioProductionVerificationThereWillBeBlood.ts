import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const thereWillBeBloodProductionCaseVerification = {
  scenarioId: "scenario_there_will_be_blood_2007",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "There Will Be Blood is verified as a 2007 US Production Case anchored by a 158-minute institutional record, Paul Thomas Anderson's direction and adapted screenplay, Robert Elswit's anamorphic 35mm cinematography, Jack Fisk's physical period-world construction, Dylan Tichenor's editing, Christopher Scarabosio and Matthew Wood's sound-editing credit, and Jonny Greenwood's score. BFI and AFI establish the principal identity, runtime, producing context and credits. American Cinematographer supplies the decisive technical evidence: Panaflex Platinum and Millennium XL cameras; modified Panavision C-Series and E-Series anamorphic lenses, Super High Speed lenses, anamorphized SP lenses and a vintage 43mm Pathé-derived option; Kodak Vision2 50D 5201 for day scenes and Vision2 200T 5217 for night scenes; printed dailies; and a photochemical finish with no digital intermediate. ASC also documents Marfa, Texas as the main period landscape and the practical oil-derrick fire as a controlled special-effects operation using an approximately 80-foot pine derrick, protected and unattended camera positions, practical fuel, remote pumping, environmental soil testing and a same-night collapse after the structure could not safely be preserved for a second planned night. ILM's contribution is bounded to the documented initial explosion and selected digital cleanup/augmentation rather than treated as the basis of the sequence. Jack Fisk interviews support the constructed geography of Little Boston, the derrick/church relationship and the use of period research to build functional physical space. The Academy confirms downstream recognition for cinematography, art direction, film editing and sound editing, while Nonesuch's direct Greenwood interview establishes a score process built from substantial music written to story, scenery, menace and religion rather than only scene-specific cues. Exact per-shot focal lengths, T-stops, filters, exposure indexes, camera-body assignments, total VFX count and generalized claims about all period filmmaking remain outside the high-confidence boundary unless title-specific evidence establishes them.",
  sources: [
    {
      title: "There Will Be Blood (2007)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/a36f4303-906f-55a0-a906-c4116a9faebe/there-will-be-blood",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional record supporting 2007, USA, the 158-minute runtime, Paul Thomas Anderson, the principal producers and Robert Elswit's cinematography."
    },
    {
      title: "There Will Be Blood (2007)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/55177-THERE-WILL-BE-BLOOD",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional production record supporting the 158-159 minute public record, Anderson's direction and screenplay, producing context and contemporary production-history notes."
    },
    {
      title: "Blood for Oil: There Will Be Blood",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/article/there-will-be-blood-cinematography-robert-elswit/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Primary craft source supporting anamorphic 35mm, Panaflex Platinum and Millennium XL, modified Panavision lens families, Kodak Vision2 50D/200T, printed dailies, no DI, Marfa production geography, the mine/set split, and the practical derrick-fire workflow including environmental controls and ILM's bounded contribution."
    },
    {
      title: "Designing for the Screen: An Interview with Jack Fisk",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/3923-designing-for-the-screen-an-interview-with-jack-fisk",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct production-designer testimony supporting the Marfa/railroad observation that informed Little Boston and Fisk's physical, story-led design process."
    },
    {
      title: "Inside the enduring movie homes of Jack Fisk, production design legend",
      publisher: "Associated Press",
      url: "https://apnews.com/article/90c5b0a569ae9653985252176d7ead7a",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Later direct Fisk account supporting the selected Marfa knoll, the built oil derrick and the deliberate spatial relationship between commerce and religion."
    },
    {
      title: "Paul Thomas Anderson's There Will Be Blood",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/archives/issues/winter2008/blood.php",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Contemporary Anderson interview supporting the Texas location-production culture, local extras and the integration of Mark Bridges' costume work with background performance."
    },
    {
      title: "Nonesuch Journal Exclusive: An Interview with Jonny Greenwood",
      publisher: "Nonesuch Records",
      url: "https://www.nonesuch.com/journal/nonesuch-journal-exclusive-interview-jonny-greenwood",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Greenwood account supporting a score process based on script, scenery, story, menace and religion, with substantial music written for Anderson to place rather than a one-cue-per-scene method."
    },
    {
      title: "The 80th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2008/A--E",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional reception record confirming the cinematography win and nominations for art direction, film editing, sound editing, directing, picture and adapted screenplay; used as downstream credit/reception evidence, not as a substitute for production-method evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
