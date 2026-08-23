import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const spiritedAwayProductionCaseVerification = {
  scenarioId: "scenario_spirited_away_2001",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Spirited Away is verified conservatively as Studio Ghibli's 2001 approximately 125-minute feature written/directed from an evolving storyboard process by Hayao Miyazaki, produced by Toshio Suzuki and scored by Joe Hisaishi. Studio Ghibli's official work record supplies original-story/screenplay/director, producer, music, Toho distribution and runtime. Miyazaki's late-2001/2002 interviews establish that production began while the storyboards and story were still developing, that the final film contained 1,415 shots, and that the fundamental animation/drawings were hand- and pencil-drawn. Animation World Network records Miyazaki distinguishing that hand-drawn base from selective digital effects such as wave patterns and bubbling water and explicitly defending the production as a two-dimensional film. Studio Ghibli's contemporaneous production diaries independently document scanning, cleanup/dust removal and digital paint, including high-volume scan/cleanup/paint work in May, while Ghibli's October 2001 publishing diary states that traditional cels and physical paint were no longer used on Spirited Away and that Michiyo Yasuda made color decisions on computer. These sources are reconciled as different pipeline layers: hand/pencil drawing as source animation; digital paint/compositing and selected effects as finishing. A Japanese Disney/Ghibli record preserves Masashi Ando, Kitaro Kosaka and Ai Kagawa as animation directors, Yoji Takeshige as art director, Michiyo Yasuda as color designer and Atsushi Okui as image director. Ghibli's May and June diaries document cutting during active animation work, May 28 orchestra recording, final sound mixing, audio-negative handling and DTS mastering before studio completion. The Academy's historical record places the later Animated Feature win downstream from production. Exact software versions, scanners, workstations, compositing packages, color transforms, render infrastructure, shot assignments, film-recording parameters, sound hardware, budget, full schedule and alternate-version/restoration genealogy remain unset where reviewed title-specific sources do not establish them.",
  sources: [
    {
      title: "Spirited Away (2001)",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/works/chihiro/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Official Studio Ghibli title record for Miyazaki original story/screenplay/direction, Toshio Suzuki production, Joe Hisaishi music, Toho distribution, July 20 2001 release and approximately 125-minute duration."
    },
    {
      title: "Hayao Miyazaki's Spirited Trip to the U.S.",
      publisher: "Animation World Network",
      url: "https://www.awn.com/animationworld/hayao-miyazakis-spirited-trip-us",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Contemporary report of Miyazaki's direct statements that drawings/artwork and fundamental animation were hand/pencil-drawn, with selective digital effects such as wave patterns and bubbling water, and an explicit 2D rather than 3D production philosophy."
    },
    {
      title: "Midnight Eye interview: Hayao Miyazaki",
      publisher: "Midnight Eye",
      url: "https://www.midnighteye.com/interviews/hayao-miyazaki/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Miyazaki's late-2001 account of starting production before story/storyboards were finished and the final 1,415-shot structure compared with an initial expectation of roughly 1,200."
    },
    {
      title: "Studio Ghibli Production Diary — April/May/June 2001",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/storage/diary/000082/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Contemporaneous studio log documenting scan/cleanup/digital-paint workload, cutting, continued hand-drawn key/in-between animation handling and May orchestra recording; companion June log records final mix, audio-negative handling and DTS mastering."
    },
    {
      title: "Studio Ghibli Publishing Diary — October 2001",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/shuppan/old/diary/d_list_10.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Studio account stating that Spirited Away used a digital finishing production without traditional cels/physical paint and that color designer Michiyo Yasuda made color decisions on computer."
    },
    {
      title: "Spirited Away — Studio Ghibli / Disney official",
      publisher: "Walt Disney Studios Japan",
      url: "https://www.waltdisneystudios.jp/studio/ghibli/0252",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Official Japanese credit record for Miyazaki, Suzuki, animation directors Masashi Ando/Kitaro Kosaka/Ai Kagawa, art director Yoji Takeshige, color designer Michiyo Yasuda, image director Atsushi Okui, Joe Hisaishi and Studio Ghibli production."
    },
    {
      title: "The 75th Academy Awards — Animated Feature Film",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2003/J",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Historical awards record confirming Spirited Away/Hayao Miyazaki as Animated Feature Film winner; used only for downstream reception history."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
