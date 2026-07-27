import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const granTorinoProductionCaseVerification = {
  scenarioId: "scenario_gran_torino_2008",
  status: "verified",
  verifiedAt: "2026-07-27",
  summary: "The film's factory-rooted first screenplay, Malpaso-Village Roadshow-Double Nickel production, Michigan-incentive relocation, Detroit locations, community search for Hmong American nonprofessionals, Eastwood performance method, Panavision image, credited design-editing-sound-music departments and contested regional legacy are supported by ten inspectable institutional, guild, government, community and critical sources.",
  sources: [
    {
      title: "Gran Torino",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/55490-GRAN-TORINO",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI documents Nick Schenk and Dave Johannson's story, the Minnesota-to-Detroit relocation, Michigan incentives, the Malpaso-Village Roadshow-Double Nickel companies, Detroit-area locations, community casting, Panavision production and principal craft credits."
    },
    {
      title: "AFI Awards 2008",
      publisher: "American Film Institute",
      url: "https://www.afi.com/award/afi-awards-2008/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "AFI names Gran Torino among its ten Movies of the Year and frames it as a late Eastwood landmark about crossing cultural boundaries, racism, poverty and neglected industrial cities."
    },
    {
      title: "Gran Torino (2008)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/1b197c93-14d8-5929-a738-a3a35159c738/gran-torino",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The BFI record confirms the Germany-USA-Australia production, Eastwood direction, producers, Nick Schenk screenplay, principal cast and 116-minute release identity."
    },
    {
      title: "Director Q&As in Los Angeles & New York",
      publisher: "Directors Guild of America",
      url: "https://www.dga.org/events/2009/02-february-2009/director-qas-in-los-angeles-new-york",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "The DGA records Eastwood's member screening and discussion of the combined challenge of directing and starring, placing the film inside his mature production practice and actor-director control."
    },
    {
      title: "Clint Eastwood shines up his Gran Torino",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/music/la-en-eastwood7-2009jan07-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Eastwood describes a fast and economical Detroit shoot, largely nonprofessional Hmong performers, early rolling cameras and limited repetition designed to preserve unrehearsed behaviour and first responses."
    },
    {
      title: "Governor Granholm Signs Film Incentive Package, Sets Stage for Growing Industry in Michigan",
      publisher: "State of Michigan",
      url: "https://www.michigan.gov/formergovernors/recent/granholm/press-releases/2008/04/07/granholm-signs-film-incentive-package-sets-stage-for-growing-industry-in-michigan",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official state record documents the April 2008 film-production incentive package that shaped Michigan's production environment immediately before Gran Torino moved its setting and shoot to Detroit."
    },
    {
      title: "Gran Torino",
      publisher: "Golden Globes",
      url: "https://goldenglobes.com/film/gran-torino/",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "The official awards record confirms the 2009 Best Original Song nomination and credits Clint Eastwood, Jamie Cullum, Kyle Eastwood and Michael Stevens for the title-song system."
    },
    {
      title: "A Better Life",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/magazine/2008/12/22/a-better-life-david-denby",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The contemporary review places the preserved Ford car, retired auto-worker body, Detroit decline, Hmong refugee neighbourhood and Eastwood's armed persona inside the film's argument about immigration, violence and responsibility."
    },
    {
      title: "Hmong actors making history: The bad guys of Gran Torino",
      publisher: "Twin Cities Daily Planet",
      url: "https://www.tcdailyplanet.net/hmong-actors-making-history-bad-guys-gran-torino/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The community production report documents open casting calls in Fresno, Detroit and Minnesota, key roles given to mostly first-time Hmong actors and participation by Hmong extras, production assistants and local artists."
    },
    {
      title: "Hmong get a mixed debut in new Eastwood film",
      publisher: "MPR News",
      url: "https://www.mprnews.org/story/2008/12/19/grantorino",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "MPR records the film's unprecedented Hmong American visibility and the immediate mixed community response, supporting both the community-casting context and the continuing debate about language, stereotype and narrative ownership."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
