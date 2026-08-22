import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const toyStoryProductionCaseVerification = {
  scenarioId: "scenario_toy_story_1995",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "Toy Story is verified as Pixar's 1995 first feature and the first feature-length computer-animated film, produced through a Disney/Pixar feature agreement and a multi-layer production system in which story development, design, proprietary animation tools, technical direction, rendering, editing, sound and music remain separate evidentiary layers. Pixar's institutional chronology records Marionette/Menv and RenderMan entering Pixar's pipeline in the late 1980s, commercial work refining pitching/storytelling/production practice, the 1990-91 Disney/Pixar agreement to make and distribute at least one computer-generated animated movie, Toy Story's 22 November 1995 release and the later 1999 Toy Story 2 milestone as the first film entirely created, mastered and exhibited digitally. AFI records John Lasseter, producers Ralph Guggenheim and Bonnie Arnold, screenplay by Joss Whedon/Andrew Stanton/Joel Cohen/Alec Sokolow, original story by Lasseter/Pete Docter/Stanton/Joe Ranft, Ralph Eggleston art direction, Robert Gordon/Lee Unkrich editing, Randy Newman music, William Reeves supervising technical direction, Pete Docter supervising animation, Pixar Animation Studios/Walt Disney Pictures, Dolby Spectral Recording and 80-81 minutes. BFI independently corroborates director, producers and screenplay credits. The Academy's 20th-anniversary production event documents the Tin Toy-related feature-development path, the early abrasive Woody/storyboard direction, a two-week rethink before renewed studio approval, Joe Ranft storyboard pitching, Galyn Susman and Ralph Eggleston's visual-development contribution, colorscripts, and new hardware/software work for needs including motion blur. The Walt Disney Company's 30th-anniversary history independently names the pre-animation crisis the Black Friday screening and records the same two-week turnaround. Pixar's current RenderMan history states that REYES-era RenderMan enabled Toy Story; the case keeps that renderer distinct from Menv/Marionette animation and does not invent undocumented render settings, machine counts or render times. Sound is kept separate from image computation: AFI records Dolby Spectral Recording and Randy Newman, while Skywalker Sound's official Toy Story project page identifies Gary Rydstrom as sound designer and re-recording mixer. Runtime evidence is version-sensitive: AFI gives 80-81 minutes, Danish Film Institute and Library of Congress give 81 minutes, and Disney+'s current streaming entry gives 89 minutes. The game therefore uses 81 minutes as the convergent archival runtime while retaining 80-81/89 as archival-versus-current-streaming variance. Later 3-D/reframed/remastered releases and Toy Story 2's end-to-end digital milestone remain downstream and must not be projected backward onto the 1995 production pipeline.",
  sources: [
    {
      title: "Our Story",
      publisher: "Pixar Animation Studios",
      url: "https://www.pixar.com/our-story",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Pixar's institutional chronology for Marionette/Menv, RenderMan, commercials/shorts, the 1990-91 Disney/Pixar feature agreement, Toy Story's 1995 release, Toy Story 2's 1999 end-to-end digital milestone and Menv's later retirement."
    },
    {
      title: "Toy Story (1995)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/55210-TOY-STORY",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Institutional credits and physical-properties record for Lasseter, Guggenheim/Arnold, screenplay and original-story teams, Eggleston, Gordon/Unkrich, Newman, Reeves, Docter, Pixar/Walt Disney Pictures, Dolby Spectral Recording and 80-81 minutes."
    },
    {
      title: "Toy Story (1995)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/123fc4c0-eb47-574f-921d-1db6d9365425/toy-story",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Independent institutional corroboration for 1995, John Lasseter, Ralph Guggenheim/Bonnie Arnold and the credited screenplay team."
    },
    {
      title: "Toy Story: 20 Years of Being an Animation Game-Changer",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/events/toy-story-20-years-being-animation-game-changer",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Academy production retrospective documenting the Tin Toy-related development path, two-week story rethink, Joe Ranft storyboard pitch, Galyn Susman/Ralph Eggleston design work, colorscripts and hardware/software invention for needs including motion blur."
    },
    {
      title: "'Toy Story' Turns 30: A Look Back at the Groundbreaking Film",
      publisher: "The Walt Disney Company",
      url: "https://thewaltdisneycompany.com/news/toy-story-30th-anniversary/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Disney's institutional 30th-anniversary history independently names the pre-animation Black Friday screening and records the two-week turnaround before the project continued."
    },
    {
      title: "The Evolution of RenderMan",
      publisher: "Pixar RenderMan",
      url: "https://renderman.pixar.com/the-evolution-of-renderman",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Pixar's renderer history states that the REYES-era RenderMan system enabled the first fully computer-animated feature, Toy Story. The case uses this only to identify the renderer family and does not infer undocumented settings or compute infrastructure."
    },
    {
      title: "Toy Story",
      publisher: "Skywalker Sound",
      url: "https://www.skysound.com/projects/toy-story/",
      sourceKind: "archive_feature",
      supports: ["sound"],
      note: "Official project record identifying Gary Rydstrom as sound designer and re-recording mixer for the 1995 Pixar feature."
    },
    {
      title: "Toy Story",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/toy-story",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Institutional record for 81 minutes, Lasseter, screenplay team, Gordon/Unkrich and Randy Newman. Its production-credit presentation differs from AFI and is not used to overwrite AFI's producer credits."
    },
    {
      title: "Toy Story (1995)",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/item/event-419004/toy-story-1995/2026-01-16/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Library of Congress screening record identifying Toy Story as the first full-length computer-animated feature and giving an 81-minute runtime."
    },
    {
      title: "Toy Story",
      publisher: "Disney+",
      url: "https://www.disneyplus.com/browse/entity-f6174ebf-cb92-453c-a52b-62bb3576e402",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Current Disney streaming entry gives 1h29m (89 minutes). Preserved as current-platform runtime evidence rather than allowed to overwrite convergent 80-81/81-minute archival records for the original feature."
    },
    {
      title: "The 68th Academy Awards Memorable Moments",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1996/memorable-moments",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Academy record for John Lasseter's Special Achievement Award recognizing leadership of the Pixar Toy Story team resulting in the first feature-length computer-animated film. Awards are treated as downstream historical recognition, not proof of undocumented workflow details."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
