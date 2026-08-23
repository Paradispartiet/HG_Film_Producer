import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const titanicProductionCaseVerification = {
  scenarioId: "scenario_titanic_1997",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "Titanic is verified as a 1997 Lightstorm/Twentieth Century Fox/Paramount production written and directed by James Cameron and produced by Cameron and Jon Landau, with a production system that deliberately keeps historical reconstruction, multiple photographic units, water-stage production, deep-sea wreck imagery, miniatures, practical effects, digital extensions/CG water/digital people, editing, sound and music distinct. AFI provides the core production/distribution structure and credits Russell Carpenter, Peter Lamont and editors Conrad Buff/James Cameron/Richard A. Harris; BFI and DFI corroborate principal credits and preserve runtime variance. American Cinematographer documents that Caleb Deschanel photographed the present-day/Nova Scotia material before Russell Carpenter handled the period/ship production at Fox Baja Studios, where Carpenter used a source-backed Panavision/Super 35/Primo package and primarily Kodak Vision 500T 5279. Those specifications are bounded to the work ASC documents and are not projected onto every unit. ASC separately records actual wreck imagery from Cameron's 1995 Mir dives as 35mm two-perf, so deep-sea acquisition remains distinct from Carpenter's dramatic live-action unit. ASC, Digital Domain and PBS/NOVA establish a mixed effects system using full-scale set pieces, physical ship miniatures/models, miniature/high-speed water work, CG set extensions, CG water and digital people. Rob Legato's NOVA account specifically describes digital stunt figures used for some dangerous long falls, illustrating an effects/safety interface without proving that every stunt was digital. Historical water, flood, fall, breakaway, wire and destructive-set practices are retained only as historical production evidence; any present-day equivalent requires independent qualified stunt/aquatic-safety leadership, rescue capability, engineered and inspected materials, fatigue/hypothermia controls, rehearsals, exclusion zones, medical/emergency planning, certified rigging where applicable and current labor/permitting rules. Academy records the film's eleven wins, including Carpenter's cinematography, Lamont/Michael Ford art direction-set decoration, Buff/Cameron/Harris editing, Gary Rydstrom/Tom Johnson/Gary Summers/Mark Ulano sound, Tom Bellfort/Christopher Boyes sound-effects editing and the Robert Legato/Mark Lasoff/Thomas L. Fisher/Michael Kanfer visual-effects team. Awards remain downstream recognition rather than undocumented workflow proof. AFI records 194 or 197 minutes, BFI 195 and DFI 194; gameplay uses 194 while preserving 194/195/197 as institutional/version variance. Later 3-D, 4K and premium-format rereleases are downstream version history and are not evidence for the 1997 acquisition/finishing pipeline.",
  sources: [
    {
      title: "Titanic (1997)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/55202-TITANIC",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Primary institutional record for Cameron/Landau, Carpenter, Lamont, Buff/Cameron/Harris, Lightstorm/Fox/Paramount structure, release sound formats, Kodak/Panavision/CFI notes and 194-or-197-minute duration."
    },
    {
      title: "Titanic (1997)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/aa4a1930-21de-51ce-9700-6acaf2d59437/titanic",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional corroboration for 1997, Cameron/Landau and a 195-minute record, retained as runtime/version variance."
    },
    {
      title: "Titanic",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/titanic",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional corroboration for Carpenter, Buff/Cameron/Harris, Peter Lamont, James Horner and 194 minutes."
    },
    {
      title: "Titanic: All Hands on Deck",
      publisher: "American Cinematographer",
      url: "https://theasc.com/magazine/dec97/titanic/ahod/pg2.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary production record for Carpenter's Super 35 choice, Panavision/Primo optics and primarily Kodak Vision 500T 5279. Used only within the photographic scope documented by ASC."
    },
    {
      title: "Titanic 20th Anniversary — Russell Carpenter, ASC",
      publisher: "American Cinematographer",
      url: "https://theasc.com/podcasts/titanic-20th-anniversary-russell-carpenter-asc",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "First-person Carpenter retrospective distinguishing Caleb Deschanel's present-day work from Carpenter's period production at Fox Baja and discussing the water-stage production context."
    },
    {
      title: "True Luminaries: Russell Carpenter, ASC",
      publisher: "American Cinematographer",
      url: "https://theasc.com/magazine/jun98/lumin/pg3.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Period trade record confirming Deschanel shot the modern-day section first and Carpenter joined the Fox Baja period production with a short preparation period."
    },
    {
      title: "Titanic: Epic Effects",
      publisher: "American Cinematographer",
      url: "https://theasc.com/magazine/dec97/titanic/eect/pg5.htm",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary effects-cinematography record distinguishing effects-unit photography from actual wreck footage, including 35mm two-perf imagery captured during Cameron's 1995 Mir dives."
    },
    {
      title: "Titanic",
      publisher: "Digital Domain",
      url: "https://digitaldomain.com/work/titanic/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Studio/VFX-company project record for Robert Legato supervision and the mixed use of CG water, extensive CG set extensions, models and miniatures."
    },
    {
      title: "NOVA Online: Special Effects — Rob Legato Q&A",
      publisher: "PBS NOVA",
      url: "https://www.pbs.org/wgbh/nova/specialfx2/wizardlegato1203.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Legato's first-person account of combining live action, models and computer extensions and using motion-capture-derived digital stunt people for some dangerous long falls."
    },
    {
      title: "The 70th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1998/A",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Primary awards record naming recipients in cinematography, art direction/set decoration, editing, sound, sound-effects editing, visual effects, costume and music. Used as downstream recognition only."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
