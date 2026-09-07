import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const emiliaPerezProductionCaseVerification = {
  scenarioId: "scenario_emilia_perez_2024",
  status: "verified",
  verifiedAt: "2026-09-07",
  summary: "Emilia Pérez is verified as a genuinely new Chapter 19 source-first Production Case only after exact-main branch/PR/seed checks and tree-wide diagnostic run 34097267911 found no pre-existing canonical scenario, Film Study or Production Verification identity under the accented title, ASCII title or plausible scenario IDs; all Jacques Audiard hits resolved to earlier films such as Dheepan and A Prophet. Festival de Cannes records the 130-minute 2024 Competition feature, Jacques Audiard direction/screenplay, Paul Guilhaume cinematography, Emmanuelle Duplay production design, Juliette Welfling editing, Camille and Clément Ducol music, Cyril Holtz/Erwan Kerzanet/Aymeric Devoldère sound, Jury Prize and shared Best Actress award. Pathé separately records production year 2023, drama/musical, Spanish original language and the principal production/support structure, so Pathé 2023 and Cannes 2024 production-year records remain separate provenance rather than being silently normalized. AFC/TSF prove photography underway in 2023 and document Sony VENICE 1 and VENICE 2; Guilhaume describes roughly three years of preparation, four Mexico scouting trips, a 55-day shoot comprising 45 studio days in Paris and 10 Mexico City days photographed in an almost documentary style, full-frame 8K capture, frequent 2500 ISO studio work, broad optics from 12mm to very long lenses, and editorial reframing/pan-and-scan/digital zoom/varispeed enabled by the acquisition format. ARRI's Thomas Garreau interview independently describes 95% of the film at Bry Studios across all seven stages, about 20 sets, a rotating lighting/pre-rig system and up to 130 SkyPanels; that percentage remains source provenance alongside the AFC 45-plus-10-day schedule rather than being forced into one arithmetic model. The official press kit locks Damien Jalet choreography, Virginie Montel artistic direction/costume creation, Julia Floch Carbonel and Simon Livet makeup, Jane Brizard and Emmanuel Janvier hair, Erwan Kerzanet production sound, Aymeric Devoldère sound editing, Cyril Holtz sound supervision/mix, Pierre-Marie Dru music supervision/executive music production, Cédric Fayolle effects supervision, Eugénie Deplus post-production direction and the production/co-production network. AFC documents approximately 500 effects shots including set extensions, blue screens and full 3D, with Mikros/MPC in the effects chain and Arthur Paux grading. The sources do not establish total budget/negative cost, exact financing percentages, exact first/final shoot dates or full call-sheet schedule, camera body use by day, codec/media/data-management topology, a complete lens-to-scene ledger, full lighting/grip package beyond sourced equipment, production-sound hardware, editorial software/storage/proxy/conform, shot-by-shot VFX allocation, original DI resolution, color-management transforms, music licensing/recording details, insurance or final mastering/delivery lineage; all remain unresolved rather than inferred.",
  sources: [
    {
      title: "EMILIA PÉREZ",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/emilia-perez/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting the 2024 Competition entry, 130-minute runtime and principal director, screenplay, cinematography, production-design, music, editing and sound credits."
    },
    {
      title: "The 77th Festival de Cannes winners' list",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/the-77th-festival-de-cannes-winners-list/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official award record supporting the Jury Prize and shared Best Actress award for Adriana Paz, Zoe Saldaña, Karla Sofía Gascón and Selena Gomez; awards are used only as corrective-selection obligations."
    },
    {
      title: "Emilia Pérez",
      publisher: "Pathé Films",
      url: "https://www.pathefilms.com/fr/films/emilia-perez/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Official distributor/production record supporting 130 minutes, drama/musical, Spanish original language, production year 2023, the Boris Razon adaptation basis, executive production and principal production/support network."
    },
    {
      title: "Emilia Perez press kit",
      publisher: "Why Not Productions / Page 114 / Unifrance",
      url: "https://medias.unifrance.org/medias/126/75/281470/presse/emilia-perez-presskit-french.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press-kit credit chain supporting Jacques Audiard, Paul Guilhaume, Damien Jalet, Emmanuelle Duplay, Virginie Montel, Juliette Welfling, Erwan Kerzanet, Aymeric Devoldère, Cyril Holtz, Clément Ducol, Camille, Pierre-Marie Dru, Cédric Fayolle, Eugénie Deplus and the production/co-production network."
    },
    {
      title: "Paul Guilhaume, AFC, looks back at the technical challenges of shooting Jacques Audiard's Emilia Perez",
      publisher: "AFC",
      url: "https://www.afcinema.com/Paul-Guilhaume-AFC-looks-back-at-the-technical-challenges-of-shooting-Jacques-Audiard-s-Emilia-Perez.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct cinematographer interview supporting the long preparation and Mexico scouting, 45 Paris studio plus 10 Mexico City shoot days, full-frame 8K, 2500 ISO strategy, broad focal-length range, editor reframing/pan-and-scan/digital zoom/varispeed, effects workflow and grade/lab credits."
    },
    {
      title: "Les sorties cinéma du mois de juin 2023 et les tournages produits avec les moyens techniques de TSF",
      publisher: "AFC / TSF",
      url: "https://www.afcinema.com/Les-sorties-cinema-du-mois-de-juin-2023-et-les-tournages-produits-avec-les-moyens-techniques-de-TSF.html",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporaneous June 2023 production notice supporting that Paul Guilhaume was shooting Emilia Perez with Sony VENICE 1 and VENICE 2, Black Wing/Tribe-style T-Tuned and Sigma FF lens packages and TSF Grip."
    },
    {
      title: "Gaffer Thomas Garreau lights up Emilia Pérez with ARRI",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/gaffer-thomas-garreau-lights-up-emilia-perez-with-arri",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct gaffer interview supporting the evolution from Mexico-location planning to Bry studio reconstruction, the independent 95%-Bry account, all seven sound stages, about 20 sets, pre-rig workflow, lighting previs and up to 130 SkyPanels."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
