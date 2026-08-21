import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const salaamBombayProductionCaseVerification = {
  scenarioId: "scenario_salaam_bombay_1988",
  status: "verified",
  verifiedAt: "2026-08-21",
  summary: "Salaam Bombay! is verified as Mira Nair's first fiction feature: a transnational independent production built from documentary-informed research in Bombay, a disciplined paid theater workshop with street children, authored screenplay development with Sooni Taraporevala, location production and a multi-institution production network. Criterion documents Nair and Taraporevala's months of research across Kamathipura, railway platforms, street corners, brothels and remand homes; it also records a workshop intake of roughly 130 street children, paid day-rate participation and seventeen workshop participants ultimately cast. Nair's first-person interviews add that about twenty-four children were selected for an intensive seven-week workshop using physical exercise, mime, dance and improvisation, and that research/workshop material informed a line-by-line story structure which Taraporevala turned into scripted scenes. These figures are retained as stages in a workshop/casting funnel, not treated as contradictory totals. The finished film remains a deliberately constructed fiction rather than unmediated documentary testimony. Directors' Fortnight credits Nair and Taraporevala for screenplay, Sandi Sissel for image, Juan Rodriguez for sound, Barry Alexander Brown for editing and L. Subramaniam for music, and lists Mirabai Films, Channel Four, Cadrage SA, La Sept, the National Film Development Corporation and Doordarshan as production partners. Criterion additionally credits Mitch Epstein as production designer and coproducer. The Danish Film Institute records 35 mm, 1.66:1, color and sound as technical presentation data; this is not expanded into an invented camera body, lens, stock, focal, exposure or laboratory package. Institutional runtime records vary from 113 to 115 minutes, with BFI's film record at 114; the case preserves that as edition/catalog variance. Cannes records the 1988 Caméra d'Or and the Academy records the 1989 Foreign Language Film nomination for India. Awards, later restoration and the Salaam Baalak Trust are kept downstream from production technique. Because real children in precarious circumstances were central participants, the historical paid-workshop evidence is not used as permission to bypass contemporary guardianship, welfare, education, labor, privacy or safety requirements.",
  sources: [
    {
      title: "Salaam Bombay!: A View from the Streets",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/9008-salaam-bombay-a-view-from-the-streets",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion documents the Bombay social research, paid workshop with roughly 130 street children, seventeen workshop participants cast, difficult fundraising, nonprofessional performance, location naturalism and Sandi Sissel's crafted cinematography; it also distinguishes the film's fiction construction from mere exposition."
    },
    {
      title: "Mira Nair interview: street-child workshop and Salaam Bombay! development",
      publisher: "The Christian Science Monitor",
      url: "https://www.csmonitor.com/1988/1012/lfl07.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Nair describes roughly 130 children arriving, about twenty-four selected, a seven-week six-days-a-week workshop, and the physical exercise, mime, dance and improvisation methods used to develop material around the children's lives."
    },
    {
      title: "Salaam Bombay!",
      publisher: "Directors' Fortnight / Quinzaine des cinéastes",
      url: "https://www.quinzaine-cineastes.fr/en/film/salaam-bombay",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Directors' Fortnight record supplies screenplay, image, sound, editing and music credits and identifies Mirabai Films, Channel Four, Cadrage SA, La Sept, NFDC and Doordarshan as production partners."
    },
    {
      title: "Salaam Bombay",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/viden-om-film/filmdatabasen/film/salaam-bombay",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "DFI independently records India/UK/France production identity, NFDC/Cadrage/Channel 4 companies, Nair direction/production, Taraporevala screenplay, Sissel cinematography, Brown editing, Subramaniam music, Epstein production design and 35 mm / 1.66:1 / color / sound technical data."
    },
    {
      title: "Salaam Bombay! - 1988 Caméra d'or",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/salaam-bombay/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Cannes records the film as Mira Nair's 1988 Directors' Fortnight first feature and Caméra d'Or winner; this supports festival/reception history rather than undocumented production technique."
    },
    {
      title: "The 61st Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1989",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy records Salaam Bombay! as India's nominee in the Foreign Language Film category. This is downstream reception evidence, not a source for production hardware or workflow."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;