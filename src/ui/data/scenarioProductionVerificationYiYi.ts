import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const yiYiProductionCaseVerification = {
  scenarioId: "scenario_yi_yi_2000",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Yi Yi is verified as a 2000 Edward Yang production case whose documented 35mm basis, Taiwan/Japan production context, credited camera-lighting-design-editing-sound team, reflective/architectural image construction and later preservation record can be kept distinct instead of blended into one generic realism claim. Criterion documents the 173-minute film and credits Yang Wei-han for photography, Lee Lung-yue for lighting, Chen Po-wen for editing, Tu Duu-chih for sound, Kaili Peng for music and production design, Wang Cheng-kai as art director, and Shinya Kawai with Naoko Tsukeda as producers. New Zealand International Film Festival independently records the film as Japan/Taiwan, 173 minutes and 35mm, with Atom Films, Pony Canyon and Omega Project among its production companies. Criterion's formal-analysis material identifies reflections, rear projection and superimposition as visible techniques in the finished film; this is treated as formal evidence rather than a blanket production-method claim for every layered image. Cannes Classics 2025 states that the later 4K restoration digitized the original 35mm acetate negative and a Hi8 sound source stored in Taiwan, with sound restoration by Tu Duu-chih and restoration/color supervision by Kaili Peng. Those restoration facts are not projected backward as proof of an original digital intermediate or of the exact on-set recording format. Verification therefore supports a production exercise in architectural framing, ensemble blocking, long-duration performance, urban/multilingual sound perspective and preservation provenance while refusing unsupported claims about lenses, film stock, microphones, ADR procedures or technological novelty.",
  sources: [
    {
      title: "Yi Yi",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/781-yi-yi",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional release and credits record supporting 173 minutes, Taiwan/2000, Edward Yang, producers Shinya Kawai and Naoko Tsukeda, Yang Wei-han, Lee Lung-yue, Chen Po-wen, Tu Duu-chih, Kaili Peng and Wang Cheng-kai, plus preservation of the original theatrical 2.0 surround soundtrack."
    },
    {
      title: "Yi Yi",
      publisher: "New Zealand International Film Festival",
      url: "https://www.nziff.co.nz/2008/archive/yi-yi/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Festival record independently supporting Japan/Taiwan production context, 173-minute runtime, 35mm format, production companies and the principal cinematography, editing, production-design/music and sound credits."
    },
    {
      title: "Reflections In and On YI YI",
      publisher: "The Criterion Channel / Observations on Film Art",
      url: "https://www.criterionchannel.com/reflections-in-and-on-yi-yi/season:1/videos/reflections-in-and-on-yi-yi",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Finished-film formal analysis identifying Yang's use of framing, reflections, rear projection and superimposition. Used as formal evidence, not as a universal behind-the-scenes account of how every layered image was produced."
    },
    {
      title: "Cannes Classics 2025",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/cannes-classics-2025/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "Official restoration record supporting digitization from the original 35mm acetate negative, sound digitization from a Hi8 source stored in Taiwan, sound restoration by Tu Duu-chih and restoration/color supervision by Kaili Peng. These are preservation facts, not proof of the original on-set recorder or an original digital-intermediate workflow."
    },
    {
      title: "Yi Yi: Time and Space",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/1516-yi-yi-time-and-space",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Critical essay used only for contextual analysis of the film's relationship between character, environment, time and space; it does not replace technical production documentation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
