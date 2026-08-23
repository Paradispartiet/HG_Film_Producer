import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const attackOfTheClonesProductionCaseVerification = {
  scenarioId: "scenario_star_wars_episode_ii_attack_of_the_clones_2002",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Star Wars: Episode II - Attack of the Clones is verified conservatively as a 2002 Lucasfilm production and a landmark in all-digital 24p HD acquisition at blockbuster scale. Lucasfilm's Mike Blanchard interview documents the Sony/Panavision development effort, four principal prototype cameras numbered 00001-00004, their arrival roughly a week before shooting, real-time safety copies, standard-definition editorial copies with synchronization checks, same-day editorial access, the high-definition engineering role, location deployment beyond Sydney, and the digital-to-film release-print workflow. Lucasfilm's anniversary production history records the live HD-monitoring system, more than 2,000 visual-effects shots, digital miniature photography, digital dailies and in-house color timing. Panavision identifies the Panavised Sony F900 deployment as two cameras on main unit and two on second unit, with 6-27mm and 9.5-105mm Primo Digital zooms. A source conflict about backup cameras remains explicit: later Lucasfilm accounts and contemporary production notes describe no film backup, while a contemporary Mix report says Panavision 35mm cameras were present in Australia as backup before the final commitment; the same Mix report states that no frame of film was shot for the feature. AFI confirms George Lucas as director, Lucas and Jonathan Hales as screenwriters, Rick McCallum as producer, David Tattersall as cinematographer, Gavin Bocquet as production designer, Ben Burtt as editor, John Williams as composer and a 142-minute duration. BFI records 143 minutes, preserved as a catalogue/version discrepancy. Trisha Biggar's Lucasfilm interview documents a costume department that expanded to roughly 120 people after a late schedule reordering and a silk-moire strobing problem discovered on the digital cameras. ILM confirms the principal visual-effects and animation leadership. The verification does not claim this was the first digital feature of any kind, does not erase the film-backup source disagreement, and does not invent codec/data-rate, tape-inventory, prime-lens, battery, reshoot-calendar, VFX-tool-genealogy or budget details beyond the reviewed sources.",
  sources: [
    {
      title: "Saga Chronicles: Lucasfilm's Mike Blanchard on the Digital Innovation Behind Star Wars: Attack of the Clones",
      publisher: "StarWars.com / Lucasfilm",
      url: "https://www.starwars.com/news/saga-chronicles-star-wars-attack-of-the-clones-mike-blanchard",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Lucasfilm post/technical supervisor Mike Blanchard documents the Sony/Panavision development path, four prototype camera serials, roughly week-before-shoot arrival, 24p rationale, real-time safety copies, SD editorial copies and sync checks, same-day editorial access, high-definition engineering, location deployment and digital-source film-out workflow."
    },
    {
      title: "Clones at 20: 4 Ways Star Wars: Attack of the Clones Helped Change Filmmaking",
      publisher: "StarWars.com / Lucasfilm",
      url: "https://www.starwars.com/news/clones-at-20-4-ways-star-wars-attack-of-the-clones-helped-change-filmmaking",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Official production history for the first-of-their-kind 24fps digital cinema prototypes, live HD set monitoring, same-day editorial transfer, more than 2,000 VFX shots, digital miniature capture, digital dailies, in-house color timing and mixed digital/film theatrical delivery."
    },
    {
      title: "The Circle Is Complete: The Cinematography of Star Wars",
      publisher: "Panavision",
      url: "https://www.panavision.com/highlights/highlights-detail/the-circle-is-complete",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Panavision's historical record identifies Attack of the Clones as the first major theatrical release captured entirely with 24p HD cameras, with two Panavised F900s on main unit, two on second unit and 6-27mm plus 9.5-105mm Primo Digital zooms as Tattersall's principal optics."
    },
    {
      title: "Star Wars Episode II: Attack of the Clones",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/62580-STAR-WARS-EPISODE-II-ATTACK-OF-THE-CLONES",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credit record confirming the 2002 film, 142-minute duration, Lucas direction/story, Lucas/Jonathan Hales screenplay, Rick McCallum production, David Tattersall cinematography, Gavin Bocquet production design, Ben Burtt editing and John Williams music."
    },
    {
      title: "Clones at 20: Costume Designer Trisha Biggar Reflects on Her Most Challenging Film",
      publisher: "StarWars.com / Lucasfilm",
      url: "https://www.starwars.com/news/clones-at-20-trisha-biggar-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Biggar documents the late schedule reordering, costume department growth from roughly 60 to around 120 people, seven-day and 14-hour work periods, and the yellow silk moire strobing problem revealed by the digital cameras and solved with overnight beading."
    },
    {
      title: "Star Wars: Episode II - Attack of the Clones",
      publisher: "Industrial Light & Magic",
      url: "https://www.ilm.com/vfx/star-wars-episode-ii-attack-of-the-clones/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "ILM's institutional project record confirms John Knoll, Dennis Muren, Pablo Helman and Ben Snow as visual-effects supervisors, Rob Coleman as animation director and the film's Academy Award nomination for visual effects."
    },
    {
      title: "Episode II: Attack of the Clones",
      publisher: "Mix Magazine",
      url: "https://www.worldradiohistory.com/Archive-All-Audio/Mix-Magazine/00s/2002/Mix-2002-06.pdf",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Contemporary production/post report documenting the 24p HDCAM decision, that no film footage was ultimately shot, the presence of Panavision 35mm cameras in Australia as backup before the commitment, camera-master redundancy/downconversion, Avid editorial flow and the Ben Burtt/Gary Rydstrom/John Williams sound and music system."
    },
    {
      title: "Star Wars Episode II Attack of the Clones",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/film/80146ec6-e72d-5795-95ac-46a5f3a8fd6c/star-wars-episode-ii-attack-of-the-clones",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Institutional catalogue record confirming George Lucas, Rick McCallum, Lucas/Jonathan Hales and the 2002 US production while recording 143 minutes, deliberately retained as a runtime discrepancy against the 142-minute Lucasfilm/AFI records."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
