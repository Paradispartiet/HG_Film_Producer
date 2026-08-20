import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const yellowEarthProductionCaseVerification = {
  scenarioId: "scenario_yellow_earth_1984",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Harvard Film Archive, BFI, UCLA Film & Television Archive, Hong Kong Film Archive, IFFR, ChinaCulture and Zhao Jiping's firsthand recollections support Yellow Earth as a 1984 Mainland Chinese Guangxi Film Studio production that became a signature early Fifth Generation work through a specific state-studio opening rather than by operating outside state production. ChinaCulture documents the Guangxi studio context and the 1983 establishment of a Youth Production Unit by recently assigned filmmakers; UCLA and HKFA identify Guangxi Film Studio as production company. BFI records Chen Kaige as director, Guo Keqi as producer, Zhang Ziliang as writer and an 89-minute runtime, while HKFA labels Guo Keqi production manager and credits Chen Kaige plus Zhang Ziliang for screenplay with Ke Lan as original-story source. This role and screenplay-credit variance is preserved rather than silently normalized. Harvard records 35 mm, color and 89 minutes and describes stationary camera, natural lighting, a limited color palette, rural topography, costume texture and songs as the film's visual-sonic system; UCLA likewise documents Chen and cinematographer Zhang Yimou's break with Seventeen Years-style socialist realism through poetic symbolism, landscape composition and traditional folk music. HKFA credits Pei Xiaonan for editing. Zhao Jiping recounts being recruited by Chen Kaige, Zhang Yimou and art director He Qun in late 1983 and spending more than a month in northern Shaanxi in early 1984 discussing the film and researching regional musical culture; he specifically describes drawing on northern-Shaanxi and Ansai folk material. Runtime catalogs vary: IFFR lists 86 minutes, Harvard and BFI 89, and HKFA a later 91-minute DCP. The case uses 89 minutes canonically because Harvard and BFI converge and keeps 86/89/91 only as catalog or presentation provenance. No unsupported camera body, lens package, film-stock emulsion, exposure ratio, sound-recorder or microphone model, production budget, exact shooting chronology, lab process or detailed censorship chronology is invented.",
  sources: [
    {
      title: "Yellow Earth",
      publisher: "Harvard Film Archive",
      url: "https://harvardfilmarchive.org/programs/yellow-earth-by-chen-kaige/1",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Harvard records Chen Kaige, Zhang Yimou, China 1984, 35 mm, color and 89 minutes and describes stationary camera, natural lighting, limited color, rural topography, costume texture and songs as coordinated elements of the film's modernist language."
    },
    {
      title: "Huang Tudi (1984)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/af92655b-324c-559c-9869-c6735545a5c2/huang-tudi",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI records the People's Republic of China, 1984, Chen Kaige as director, Guo Keqi as producer, Zhang Ziliang as writer and an 89-minute runtime."
    },
    {
      title: "Yellow Earth / Red Sorghum",
      publisher: "UCLA Film & Television Archive",
      url: "https://cinema.ucla.edu/events/yellow-earth-mainland-china-1984-red-sorghum-mainland-china-1987-2013-11-15/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "UCLA identifies Guangxi Film Studio, producer Guo Keqi and screenwriter Zhang Ziliang and describes Chen Kaige and Zhang Yimou's use of poetic symbolism, scroll-painting-like composition and traditional folk music to challenge Seventeen Years-style socialist realism."
    },
    {
      title: "Yellow Earth",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2016-10-1-10.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "HKFA credits Chen Kaige, screenplay by Chen Kaige and Zhang Ziliang, original story by Ke Lan, photography by Zhang Yimou, editing by Pei Xiaonan, Guo Keqi as production manager and Guangxi Film Studio as production company; its later DCP catalog is 91 minutes."
    },
    {
      title: "Zhang Yimou -- An Internationally Acclaimed Filmmaker",
      publisher: "ChinaCulture.org",
      url: "https://en.chinaculture.org/library/2008-01/18/content_38459.htm",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "The cultural-institution history documents Zhang Yimou's assignment to Guangxi Film Studio, the studio's openness to proposals from new recruits and the accepted 1983 proposal to establish a Youth Production Unit, providing the institutional context for the Fifth Generation production opening."
    },
    {
      title: "赵季平：影视配乐不是‘嫁鸡随鸡，嫁狗随狗’的艺术",
      publisher: "People.cn",
      url: "https://yn.people.com.cn/n2/2020/0708/c372315-34141930.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Zhao Jiping recalls Chen Kaige approaching him for Yellow Earth, more than a month of northern-Shaanxi field research and the use of regional folk elements, including Ansai material, as foundations for the film's music."
    },
    {
      title: "Yellow Earth",
      publisher: "International Film Festival Rotterdam",
      url: "https://iffr.com/en/iffr/1986/films/yellow-earth",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "IFFR catalogs Yellow Earth as China 1984, 35 mm, Guangxi Film Studio, Chen Kaige direction, Zhang Yimou cinematography and Zhao Jiping music, while listing an 86-minute presentation; that runtime is retained only as catalog provenance."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
