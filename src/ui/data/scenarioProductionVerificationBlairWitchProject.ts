import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const blairWitchProjectProductionCaseVerification = {
  scenarioId: "scenario_the_blair_witch_project_1999",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "The Blair Witch Project is verified conservatively as a 1999 Haxan Films independent horror feature co-written and directed by Daniel Myrick and Eduardo Sanchez. Their contemporaneous Filmmaker Magazine interview documents the core production system directly: three improvisational performers using their real first names were trained to operate film/video equipment and field sound, spent eight days in the woods with film and video cameras, and were steered by filmmakers working outside the visible crew space through tracking/navigation, notes, supplies and controlled encounters. Myrick and Sanchez describe an outline, fictional world, character profiles and required plot constraints rather than a conventional shooting script. Phase 1 combined black-and-white 16mm with Hi-8 video and generated about 18 hours of material; a separately shot Phase 2 pseudo-documentary layer was ultimately excluded from the finished feature. The same interview documents actor camera training and Michael Williams's DAT-level training. AFI identifies the 87-minute released feature, Haxan Films, producers Gregg Hale and Robin Cowie, cinematographer Neal Fredericks, production designer Ben Rock, editors Myrick and Sanchez, composer Tony Cora and distributor Artisan Entertainment. The actor-operated Phase 1 method is therefore kept distinct from the credited cinematography department rather than falsely assigning every image to Neal Fredericks or erasing his overall production credit. Sundance history verifies the 1999 festival premiere and reality-ruse internet promotion; Filmmaker's later festival report records Artisan's Sundance acquisition and relatively minor post-Sundance trims/clarifying inserts. These marketing, acquisition and version facts are downstream from capture. Exact budget, camera bodies, lenses, film stock, Hi-8 model, DAT recorder, microphones, exposure settings, navigation hardware, edit system, sound-post chain, lab/transfer route and release-print provenance remain unset where the reviewed sources do not establish them.",
  sources: [
    {
      title: "Into the Woods: Eduardo Sanchez and Daniel Myrick's The Blair Witch Project",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/archives/issues/winter1999/into_the_woods.php",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Contemporaneous first-person production interview documenting the outline/improvisation system, eight-day woods phase, actor-operated film/video cameras, Hi-8 decision, roughly 18 hours of Phase 1 footage, unused Phase 2 pseudo-documentary material, camera training, DAT-level training and off-screen navigation/supply direction."
    },
    {
      title: "The Blair Witch Project",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/60908-THE-BLAIR-WITCH-PROJECT",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credit and release anchor for the 1999, 87-minute feature: Myrick/Sanchez direction and writing, Gregg Hale/Robin Cowie producing, Neal Fredericks photography, Ben Rock production design, Myrick/Sanchez editing, Tony Cora music, Haxan Films production and Artisan distribution."
    },
    {
      title: "From The Blair Witch Project to Hereditary: How the Sundance Film Festival Defined Modern Horror",
      publisher: "Sundance Institute",
      url: "https://www.sundance.org/blogs/from-the-blair-witch-project-to-hereditary-how-the-sundance-film-festival-defined-modern-horror/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Institutional festival history verifying the 1999 Sundance debut and the pre-Festival internet campaign that promoted the found footage as real. Used for circulation/marketing history, not original production hardware."
    },
    {
      title: "Festival Roundup: Florida Film Festival",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/archives/issues/summer1999/fests.php",
      sourceKind: "trade_feature",
      supports: ["overall", "editing"],
      note: "Contemporaneous trade reporting that Artisan acquired the film at Sundance, that Split Screen production money helped jump-start the project, and that the post-Sundance version was trimmed slightly with a few clarifying inserts."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
