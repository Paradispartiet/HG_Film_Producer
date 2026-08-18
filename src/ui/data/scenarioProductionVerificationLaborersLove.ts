import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const laborersLoveProductionCaseVerification = {
  scenarioId: "scenario_laborers_love_1922",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "Hong Kong Film Archive, China Film Archive and Chinese Film Classics support Laborer's Love / Laogong zhi aiqing as a 1922 Mingxing silent short directed by Zhang Shichuan, written by Zheng Zhengqiu and photographed by Zhang Weitao, with Zheng Zhegu, Yu Ying and Zheng Zhengqiu in the principal cast. HKFA records 35mm black-and-white presentation with Chinese and English intertitles, while Chinese Film Classics treats those bilingual titles as original production evidence and analyzes the film's staircase, connection devices, trick cinematography and artisanal comic construction. China Film Archive documents Mingxing's 1922 Shanghai formation, identifies Laborer's Love as its earliest surviving Chinese fiction-film holding and records later digital and 4K restoration. The Production Case therefore teaches early Shanghai studio formation, physical gag mechanics, bilingual circulation and preservation bias while keeping live accompaniment and modern recorded scores outside claims about synchronized 1922 production sound and keeping 'earliest surviving complete' distinct from 'first Chinese film ever made'.",
  sources: [
    {
      title: "Labor's Love",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/en/web/hkfa/2009/early-chinese-films/pe-event-2009-early-chinese-films-fs-film01.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Official archive-program record crediting director Zhang Shichuan, screenwriter Zheng Zhengqiu, cinematographer Zhang Weitao, cast Zheng Zhegu/Yu Ying/Zheng Zhengqiu, Mingxing production, 1922 black-and-white 35mm silent presentation, Chinese and English intertitles and live accompaniment; it also situates the comedy against early Hollywood influence and urban Chinese settings."
    },
    {
      title: "Labourer's Love",
      publisher: "China Film Archive",
      url: "https://www.cfa.org.cn/cfaen/gz/dymlcx/dy/2023053114391333102/index.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "China Film Archive catalog record confirming Zhang Shichuan, Zheng Zhengqiu, the 1922 Chinese production, silent black-and-white presentation, Chinese/English subtitles and 1.33:1 framing while preserving a 24-minute catalog runtime."
    },
    {
      title: "Mingxing Film Company",
      publisher: "China Film Archive",
      url: "https://www.cfa.org.cn/eportal/ui?articleKey=faf3782c7d5447cb942f67d2220a74fb&columnId=aee8c2276575443880b0930ac8406c81&pageId=2a6abc370b534133aa7cc904b3be9db1",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Institutional company history places Mingxing's founding in Shanghai in March 1922 by Zhang Shichuan, Zheng Zhengqiu and collaborators and identifies short comedies as part of its first production phase, grounding the case in a specific new company rather than an abstract national origin story."
    },
    {
      title: "Laborer's Love (1922)",
      publisher: "Chinese Film Classics",
      url: "https://chinesefilmclassics.org/laborers-love-1922/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Christopher Rea's scholarly teaching archive identifies the film as the earliest-known surviving complete Chinese-made film, credits Zhang Shichuan/Zheng Zhengqiu/Mingxing and records original bilingual Chinese-English intertitles, including meaningful differences between language tracks."
    },
    {
      title: "Module 1: Laborer's Love (1922)",
      publisher: "Chinese Film Classics",
      url: "https://chinesefilmclassics.org/course/module-1-laborers-love-1922/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Scholarly course material focuses on cinema-of-attractions/narrative relations, international and Chinese comic conventions, the staircase and connection-device motifs, artisanal tools, visual puns, trick cinematography, experimentation and bilingual intertitles."
    },
    {
      title: "New 4K restoration of Laborer's Love premieres at Il Cinema Ritrovato",
      publisher: "China Film Archive",
      url: "https://www.cfa.org.cn/cfa/fy/dyjz26/gnjz/2025022409032510237/index.html",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "China Film Archive documents its new 4K restoration, a roughly 22-minute restored presentation and live accompaniment at Bologna, providing an explicit modern restoration layer that must remain distinct from claims about the 1922 photographed film."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
