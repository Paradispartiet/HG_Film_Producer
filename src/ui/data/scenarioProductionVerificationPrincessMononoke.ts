import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const princessMononokeProductionCaseVerification = {
  scenarioId: "scenario_princess_mononoke_1997",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Princess Mononoke is verified as Studio Ghibli's 1997 Japanese feature written and directed by Hayao Miyazaki, produced by Toshio Suzuki, scored by Joe Hisaishi and distributed theatrically in Japan by Toho, with an original runtime of approximately 133 minutes. The key production finding is not a simple analog-versus-digital label. Studio Ghibli's own contemporaneous 1997 production diary documents a predominantly hand-drawn, storyboard-led feature that incorporated a limited but materially important digital transition. In January Miyazaki's storyboard reached a provisional completion at more than 130 minutes and was immediately revised, demonstrating that storyboard functioned as active production control rather than a frozen preproduction artifact. February and May entries document Japanese voice recording under sound director Kazuhiro Wakabayashi and later final group sessions. April entries state that part of animation finishing/painting was changed to digital paint while effects work needed separate cels, and record the arrival of Silicon Graphics equipment for digital-paint work; these entries establish digital infrastructure but do not justify inventing machine models/counts, software, scan resolutions, network architecture or color-space parameters. May records keep digital paint, CG, photography, editing/original assembly, voice and orchestral music visibly separate: Takeshi Seyama appears in editing/final-schedule and original-assembly discussions; Miyazaki attends orchestral recording; digital-paint DR work finishes; and the digital-paint, CG and photography departments remain active while final compositing still remains. September diary entries then describe the next production as a move toward full-scale computerization through digital paint, which is strong internal evidence that Princess Mononoke itself should be modeled as a hybrid transitional workflow rather than either fully analog or fully digital. Atsushi Okui is preserved as the photography/cinematography lead from surviving Japanese-version credit records and Ghibli diary context, but no unsupported animation-camera stand, lens, film-stock, scan/record-out or laboratory specification is invented. Studio Ghibli's official page and BFI converge at roughly/precisely 133 minutes, so gameplay uses 133 without manufacturing a false runtime discrepancy. Miyazaki's later Academy remarks about having worked in an era of 'paper, pencil and film' are treated as retrospective framing and cannot erase Ghibli's contemporary evidence for partial digital paint, CG and compositing. The later Miramax English-language release, Neil Gaiman adaptation and English voice cast are localization/distribution history rather than evidence about the original Japanese performance or production workflow. Modern 4K/IMAX presentations are likewise downstream remaster/version history.",
  sources: [
    {
      title: "Princess Mononoke / もののけ姫",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/works/mononoke/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "sound"],
      note: "Official studio record for Miyazaki original story/screenplay/direction, Toshio Suzuki production, Joe Hisaishi music, Yoshikazu Mera theme song, Toho distribution, 12 July 1997 Japanese release and approximately 133 minutes."
    },
    {
      title: "Studio Ghibli production diary — January 1997",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/diary_m/971.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Contemporaneous studio diary documenting provisional storyboard completion above 130 minutes, immediate revision and production/sound scheduling tied to the evolving storyboard."
    },
    {
      title: "Studio Ghibli production diary — February 1997",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/diary_m/972.html",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "Contemporaneous record of Japanese voice recording and Kazuhiro Wakabayashi's sound-direction/studio choice. Used without inferring undocumented recording hardware."
    },
    {
      title: "Studio Ghibli production diary — April 1997",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/diary_m/974.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Primary process evidence that part of finishing moved to digital paint, effects work used separate cels, digital-paint scheduling involved Atsushi Okui and Silicon Graphics equipment entered the workflow. No software/model/count inference is made."
    },
    {
      title: "Studio Ghibli production diary — May 1997",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/diary_m/975.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Primary record for Takeshi Seyama editing/original-assembly planning, active digital-paint work, final Japanese voice sessions, orchestral recording and concurrent digital-paint/CG/photography work with compositing still remaining."
    },
    {
      title: "Studio Ghibli production diary — September 1997",
      publisher: "Studio Ghibli",
      url: "https://www.ghibli.jp/diary_m/979.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Primary boundary evidence describing full-scale computerization via digital paint as a challenge for the next work, supporting a hybrid-transition reading of Princess Mononoke rather than a fully digital one."
    },
    {
      title: "Princess Mononoke (1997)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/83d016f7-82b0-5d6a-a2ad-3fe8cbbded15/princess-mononoke",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Independent institutional corroboration for 1997 Japan and principal Miyazaki/Suzuki production identity and 133-minute record."
    },
    {
      title: "Princess Mononoke Japanese-version credits archive",
      publisher: "Nausicaa.net",
      url: "https://nausicaa.net/wiki/Princess_Mononoke_%28credits%29",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Surviving Japanese-version credit archive supporting Takeshi Seyama editing, animation leadership and production/camera-related departmental credits. Used as supporting evidence below Studio Ghibli's primary records."
    },
    {
      title: "Hayao Miyazaki — 2014 Governors Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/governors-awards/2014/hayao-miyazaki",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Retrospective Miyazaki context about the paper/pencil/film era. It is explicitly subordinated to contemporaneous Ghibli diary evidence showing partial digital paint, CG and compositing."
    },
    {
      title: "Five reasons why Princess Mononoke is Hayao Miyazaki's masterpiece",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/five-reasons-princess-mononoke-hayao-miyazaki-ghibli",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "sound"],
      note: "Supporting context for the later Miramax/Neil Gaiman English-language adaptation and voice/localization layer, kept downstream from the original Japanese production."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
