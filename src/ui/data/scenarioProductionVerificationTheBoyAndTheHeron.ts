import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theBoyAndTheHeronProductionCaseVerification = {
  scenarioId: "scenario_the_boy_and_the_heron_2023",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "The Boy and the Heron is verified as Chapter 19's next award-priority animation production case through Academy and BBFC institutional records, Studio Ghibli production documentation, the Cannes/NHK making-of record and direct craft interviews with producer Toshio Suzuki, supervising animator Takeshi Honda, digital imaging/cinematography lead Atsushi Okui and composer Joe Hisaishi. The Academy records Hayao Miyazaki and Toshio Suzuki as the 2024 Animated Feature Film winners. Studio Ghibli documents production beginning around 2016 and taking approximately seven years, with Miyazaki developing the story organically through hand-drawn storyboards rather than beginning from a finished screenplay; the film was produced primarily through traditional hand-drawn animation with digital compositing for effects/background integration. Suzuki and Honda describe a no-fixed-deadline environment, Honda's supervising-animation role, return-to-Miyazaki approval and the unusual time demanded by dense bird animation. Honda separately describes analog-era methods and the exacting labor of hand-drawn everyday behavior, while identifying Shinya Ohira's distinctive opening-fire animation. Atsushi Okui documents the analog-to-digital imaging boundary: animators and background artists begin with pencil/paint on paper; characters are not produced through 3D character rendering; digital compositing and selective CGI/3D layers are nevertheless used, including hybrid texture work and the collapsing-tower effect. Okui also documents digitally deepened blacks and subjective instability/softness in the opening fire sequence. BBFC records multiple 2D cinema versions around 123m42s-123m48s and later home variants around 123m50s-123m55s, so the playable case rounds to 124 minutes while preserving version provenance. Hisaishi describes seeing a nearly complete film in July 2022, receiving unusually broad discretion from Miyazaki and choosing a minimalist score with sparse piano for the more realistic first half and broader orchestral writing in the fantasy second half. Cannes documents Kaku Arakawa's NHK making-of film as a multi-year record made with exclusive Studio Ghibli access across the production period. Locked sources do not establish a single audited production budget, financing waterfall, exact total crew, complete animator-per-shot assignment, exact drawing/frame count, full storyboard/layout revision ledger, complete background inventory, all software/plugin versions, compositing node graph, color-management specification, full dialogue/ADR/foley/sound-edit/mix/master chain, complete score-session ledger, dubbing-production ledgers or distribution recoupment. Those remain unresolved.",
  sources: [
    {
      title: "The 96th Academy Awards | 2024",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2024",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional award record supporting The Boy and the Heron as Animated Feature Film winner, credited to Hayao Miyazaki and Toshio Suzuki. Award status supports priority/reception, not production workflow."
    },
    {
      title: "The Boy and the Heron",
      publisher: "Studio Ghibli",
      url: "https://studioghibli.jp/films/the-boy-and-the-heron/",
      sourceKind: "studio_source",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Studio production background supporting production beginning around 2016, approximately seven years of work, hand-drawn storyboards, organic story development without a finished-script-first process, primarily hand-drawn animation and digital compositing."
    },
    {
      title: "The Boy And The Heron",
      publisher: "BBFC",
      url: "https://www.bbfc.co.uk/release/the-boy-and-the-heron-q29sbgvjdglvbjpwwc0xmde3mtkz",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional version record supporting the 2023 film and 2D cinema runtimes around 123m42s-123m48s plus later home-entertainment variants, preserved as runtime provenance."
    },
    {
      title: "The Boy and the Heron - BFI Southbank Programme Notes",
      publisher: "British Film Institute / Sight and Sound",
      url: "https://bfidatadigipres.github.io/new%20releases/2023/12/27/boy-and-the-heron/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Toshio Suzuki interview supporting Miyazaki storyboard authorship, Takeshi Honda supervising animation, no fixed deadline/plenty of time, animator-to-Honda-to-Miyazaki review and the labor implied by dense bird animation; also supports the minimalist Hisaishi score context."
    },
    {
      title: "The Boy and the Heron Animator on Miyazaki's Most Personal Film",
      publisher: "Backstage",
      url: "https://www.backstage.com/magazine/article/boy-and-the-heron-animation-interview-takeshi-honda-76868/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "cinematography"],
      note: "Direct Takeshi Honda testimony supporting orthodox analog-era methods, hand-drawn priority, exact everyday motion, close supervisory communication with Miyazaki and Shinya Ohira's distinctive opening-fire animation."
    },
    {
      title: "Art and Craft: Atsushi Okui on The Boy and the Heron",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/art-and-craft-atsushi-okui-on-the-boy-and-the-heron/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Atsushi Okui interview supporting paper/paint source elements, analog-to-digital conversion, no 3D character rendering, selective CGI/3D layers, digital compositing, hybrid texture/tower effects and deliberate black-level choices."
    },
    {
      title: "Why Boy and the Heron May Not Be Miyazaki's Last Film",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/the-boy-and-the-heron-hayao-miyazaki-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Producer Toshio Suzuki testimony corroborating the no-deadline production environment, Honda's frame-revision supervision and hand-drawn bird crowds without CG for the cited sequence."
    },
    {
      title: "Joe Hisaishi Interview: Ghibli Composer on The Boy and the Heron",
      publisher: "The A.V. Club",
      url: "https://www.avclub.com/joe-hisaishi-interview-studio-ghiblis-legendary-composer-on-the-boy-and-the-heron",
      sourceKind: "filmmaker_interview",
      supports: ["sound", "editing"],
      note: "Direct Hisaishi testimony supporting his July 2022 viewing of a nearly completed film, unusually broad musical discretion, limited conventional spotting direction and the minimalist piano-to-orchestra strategy."
    },
    {
      title: "HAYAO MIYAZAKI AND THE HERON",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/hayao-miyazaki-and-the-heron/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Cannes Classics record supporting Kaku Arakawa's NHK documentary as a long-duration making-of record with exclusive Studio Ghibli access across the production period."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
