import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aMonsterCallsProductionCaseVerification = {
  scenarioId: "scenario_a_monster_calls_2016",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "A Monster Calls' Siobhan Dowd-to-Patrick Ness adaptation, child-restricted grief structure, Lewis MacDougall and Liam Neeson performance system, Eugenio Caballero design, Alexa-Hawk anamorphic image, evolving watercolor tales, MPC yew-monster pipeline, award-winning sound, score and practical-digital effects are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "A Monster Calls",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/cb56d45f-7d8d-50e7-8eaf-aedc0438dd01/a-monster-calls",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "BFI verifies the 2016 Spain-US production, 108-minute runtime, director J.A. Bayona, producer Belén Atienza, Patrick Ness screenplay and principal cast."
    },
    {
      title: "The Movies of My Life: Patrick Ness",
      publisher: "Focus Features",
      url: "https://www.focusfeatures.com/article/a_monster_calls_movies_of_my_life_patrick_ness",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Ness explains Siobhan Dowd's original opening and idea, his completion of the novel and Bayona's response to its loss, love and imagination themes."
    },
    {
      title: "Behind the Design of Liam Neeson's Tree Creature in A Monster Calls",
      publisher: "Participant",
      url: "https://participant.com/behind-the-design-of-liam-neesons-tree-creature-in-a-monster-calls/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Participant documents Bayona and Eugenio Caballero's hundreds of creature-design iterations and their return to the illustrated novel's ancient, wise and physically powerful yew-tree conception."
    },
    {
      title: "A Monster Calls: MPC's Character Work",
      publisher: "fxguide",
      url: "https://www.fxguide.com/featured/a-monster-calls-mpcs-character-work/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Fxguide details MPC's 180-plus shots, lidar scan of the practical head, rigid sliding facial plates, humanized eyes, keyframed Liam Neeson reference performance, transformations, environments and destruction."
    },
    {
      title: "A Monster Calls: Telling Stories from the Treetops",
      publisher: "WIRED",
      url: "https://www.wired.com/story/a-monster-calls-tree-tales",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Bayona explains how the tales progress from watercolor and simple 2D animation toward stop-motion-like dimensionality and reality as fantasy becomes more real to Conor."
    },
    {
      title: "A Monster Calls – Preview Making Of",
      publisher: "Glassworks",
      url: "https://vimeo.com/191029769",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Glassworks' official making-of identifies its two-year collaboration on the embedded animated stories and their function as metaphorical fables for realities traditional narration cannot explain."
    },
    {
      title: "Un monstruo viene a verme",
      publisher: "Premios Goya",
      url: "https://www.premiosgoya.com/pelicula/un-monstruo-viene-a-verme",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Goya record verifies twelve nominations and nine wins for direction, cinematography, editing, production direction, art direction, makeup and hair, sound, score and special effects."
    },
    {
      title: "A Monster Calls",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/a-monster-calls/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA verifies the principal writing, production, cinematography, editing, design, costume, makeup, sound and score credits and records Oriol Tarragó's European Sound Designer award."
    },
    {
      title: "Patrick Ness A Monster Calls Interview",
      publisher: "Female.com.au",
      url: "https://www.female.com.au/patrick-ness-a-monster-calls-interview.htm",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Ness describes repeated Barcelona script meetings, continuing dialogue consultation, the child-limited shooting schedule, Neeson's two weeks of performance capture, the practical Monster head and constructed graveyard."
    },
    {
      title: "Director J.A. Bayona on Exploring Destruction and Storytelling in A Monster Calls",
      publisher: "/Film",
      url: "https://www.slashfilm.com/548579/a-monster-calls-ja-bayona-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Bayona discusses the film's storytelling and destruction motifs, child-centred emotional design, silence and the use of music during production to align performance and fantasy with Conor's grief."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
