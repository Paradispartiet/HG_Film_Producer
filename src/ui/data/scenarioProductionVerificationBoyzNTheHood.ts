import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const boyzNTheHoodProductionCaseVerification = {
  scenarioId: "scenario_boyz_n_the_hood_1991",
  status: "verified",
  verifiedAt: "2026-08-22",
  summary: "Boyz n the Hood is verified as John Singleton's 1991 Columbia Pictures feature debut, produced by Steve Nicolaides and made through a documented combination of studio greenlighting, South Central Los Angeles location/community production and differentiated professional craft departments. AFI records Singleton as writer-director, Nicolaides as producer, Charles Mills as director of photography, Bruce Cannon as editor, Bruce Bellamy as art director/production designer, Columbia Pictures as production/distribution company, 108 minutes, and a production start of 1 October 1990. AFI's production history documents Singleton's Columbia internship route through Stephanie Allain and Frank Price, his refusal of a $100,000 walk-away offer and insistence on directing, plus a reported $5.7-$6 million budget range. Production notes preserved by AFI describe three local gang members consulting on wardrobe, vocal emphasis and dialogue changes, a predominantly African-American crew, LAPD/Fruit of Islam security and many neighborhood locals as background performers. Singleton's Television Academy oral history independently discusses writing/selling/casting the film, real-life inspirations, filming in his old neighborhood and his intent to build a Black-led crew. These facts are production history, not automatic proof of factual accuracy or a contemporary community-engagement protocol. AFI's craft record credits Mills and camera operator Tony Gaudioz, chief lighting technician Eli Harris, and Arriflex cameras/lenses supplied by Clairmont; it does not establish exact camera models, focal lengths, stock, filters, exposure or lab process, so those remain unset. AFI further separates Bruce Bellamy art direction, Darryle Johnson/Shirlene Williams wardrobe, Bruce Cannon editing, Veda Campbell production sound, Patrick Drummond supervising sound editing and Stanley Clarke's score, and records Dolby Stereo in selected theatres plus Technicolor prints. Cannes' 1991 record independently corroborates Singleton, Mills, Clarke, Cannon and Bellamy and the Un Certain Regard selection; its later restored-print listing gives 108 minutes. Academy records Singleton's 1992 directing and original-screenplay nominations. Library of Congress records Boyz N the Hood's 2002 National Film Registry selection. USC records the student-screenplay/USC context and Singleton's insistence on directing a story rooted in his own life. Festival success, awards, preservation status and later release controversy remain downstream from production and are never used as proof of undocumented technique. The case also explicitly treats New Black cinema/Black American filmmaking as plural rather than as one gang-film or realist template, and requires present-day community/location work to use informed consent, clearly scoped consultation, compensation, safeguarding, privacy and qualified safety/location planning.",
  sources: [
    {
      title: "Boyz N the Hood (1991)",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/58786-BOYZ-N-THE-HOOD",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Primary institutional production record for 108 minutes, Columbia, Singleton/Nicolaides/Mills/Cannon/Bellamy, production start, South Central production notes, crew/community consultation, reported $5.7-$6m budget range, Arriflex/Clairmont supply credit and detailed sound/craft credits."
    },
    {
      title: "John Singleton",
      publisher: "Television Academy Interviews",
      url: "https://interviews.televisionacademy.com/interviews/john-singleton",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Singleton's first-person oral history covers writing, selling and casting Boyz n the Hood, insisting on directing, filming in his old neighborhood, real-life inspirations and his Black-led crew intent."
    },
    {
      title: "Boyz N the Hood",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/boyz-n-the-hood/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Official 1991 Un Certain Regard record corroborating Singleton direction/screenplay, Charles Mills cinematography, Stanley Clarke music, Bruce Cannon editing and Bruce Bellamy production design."
    },
    {
      title: "Boyz N' the Hood - restored print",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/boyz-n-the-hood-2/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Cannes' later restored-print presentation records 1991 production, United States and 108 minutes. Restoration is used only for runtime/canonization corroboration, never original technical workflow."
    },
    {
      title: "1992 Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/1992/M",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Primary Academy record for John Singleton's nominations in Directing and Writing (Screenplay Written Directly for the Screen); used as downstream recognition, not production-method evidence."
    },
    {
      title: "BOYZ N THE HOOD 25th Anniversary Celebration and Conversation",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/events/boyz-n-hood-25th-anniversary-screening-and-conversation",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "Academy anniversary record identifies the production-history conversation with Singleton, Columbia executive Stephanie Allain, producer Steve Nicolaides, editor Bruce Cannon, composer Stanley Clarke and cast; used as corroborating archival context."
    },
    {
      title: "Complete National Film Registry Listing",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Official preservation record listing Boyz N the Hood (1991) as selected to the National Film Registry in 2002; strictly downstream legacy evidence."
    },
    {
      title: "John Singleton: A Celebration",
      publisher: "USC Visions & Voices / School of Cinematic Arts",
      url: "https://visionsandvoices.usc.edu/wp-content/uploads/2022/09/JohnSingleton_ThemeGuide.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "USC institutional context for Singleton's screenwriting education, student screenplay roots, feature debut and later historical significance."
    },
    {
      title: "AFI Movie Club: Boyz N the Hood",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/afi-movie-club-boyz-n-the-hood/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "AFI archival summary independently restating the Columbia internship/Allain/Price/directing-control history, South Central filming and neighborhood-background casting."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
