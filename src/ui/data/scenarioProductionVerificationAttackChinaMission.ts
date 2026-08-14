import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const attackChinaMissionProductionCaseVerification = {
  scenarioId: "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Attack on a China Mission - Bluejackets to the Rescue is verified as a 1900 James Williamson Brighton topical-fiction case depicting an attack on a Christian mission and a British naval rescue. BFI and Screen Archive South East establish identity, fiction status, action, maker and racist characterisation; Dulac and Gaudreault's peer-reviewed archival study demonstrates that the rediscovered copies and later reconstructed multi-shot version cannot be collapsed into one certain original cross-cutting structure. Comparative BFI, Oxford and Cambridge sources place the film within topical reconstruction and British imperial Boxer-Rebellion culture. The runtime case therefore makes provenance, reconstruction uncertainty and racial/imperial representation inseparable from its formal analysis.",
  sources: [
    {
      title: "Attack on a China Mission - Bluejackets to the Rescue",
      publisher: "British Film Institute",
      url: "https://replay.bfi.org.uk/video/bd0d85a8-9027-5da8-b23c-3a2687695135",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "BFI identifies the Brighton 1900 silent one-minute film as fictional treatment of a Boxer-Rebellion mission attack, explicitly warns that it contains racist characterisation, and describes a single-position version followed by additional opening scenes and a reverse rescue view. The version description is retained as BFI's archival account, not treated as the final word over conflicting artefact scholarship."
    },
    {
      title: "Attack on a China Mission (Bluejackets to the Rescue) — Title ID 8382",
      publisher: "Screen Archive South East",
      url: "https://screenarchive.brighton.ac.uk/detail/8382/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The regional archive dates the film to 1900, classifies it as professional fiction, credits production and direction to James Williamson, identifies Lepard as the missionary and describes gate, mission-house, gunfire, naval rescue, horse and smoke action across the surviving material."
    },
    {
      title: "Cross-cutting in the face of history: The case of Attack on a China Mission",
      publisher: "Early Popular Visual Culture / Taylor & Francis",
      url: "https://www.tandfonline.com/doi/abs/10.1080/17460650902775328",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Nicolas Dulac and André Gaudreault's peer-reviewed archival study reports that two copies discovered in 1950 and 1985 did not match the alternating editing structure known from sales-catalogue description and examines a later reconstructed archive version whose modifications can project a comparatively classical conception of editing onto early material."
    },
    {
      title: "Attack on a Mission Station",
      publisher: "British Film Institute",
      url: "https://replay.bfi.org.uk/video/cfff90b5-19e3-5c01-b33d-e28bbd09b7f4",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "BFI's Mitchell and Kenyon comparison identifies topical Boxer-Rebellion mission attacks as staged reconstructions common in early film and says competing filmmaker Williamson made his version more dramatic with gunshots and explosions. The record also warns about outdated and racist stereotypes and confirms that audiences were watching reconstructed fiction rather than authentic China footage."
    },
    {
      title: "All England Was Present at that Siege: Imperial Defences and Island Stories in British Culture",
      publisher: "Oxford Academic / History Workshop Journal",
      url: "https://academic.oup.com/hwj/article/93/1/159/6555067",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The scholarly article places Attack on a China Mission inside British imperial-siege culture and Yellow-Peril rhetoric surrounding the Boxer Rebellion. Its own formal 'first cross-cutting' formulation is not adopted because the film-specific artefact study by Dulac and Gaudreault materially complicates that claim."
    },
    {
      title: "Peking Plots: Fictionalizing the Boxer Rebellion of 1900",
      publisher: "Cambridge University Press",
      url: "https://www.cambridge.org/core/journals/victorian-literature-and-culture/article/abs/peking-plots-fictionalizing-the-boxer-rebellion-of-1900/967087D1D32D8AE004692F99DD50EA8E",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Ross G. Forman's scholarly study documents the rapid British fictionalization of the Boxer Rebellion and the conflict's importance to imperial self-conception. It provides cultural context for why a Brighton filmmaker could stage a mission-rescue narrative around current events without that reconstruction becoming documentary actuality."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
