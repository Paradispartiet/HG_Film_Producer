import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const grandTourProductionCaseVerification = {
  scenarioId: "scenario_grand_tour_2024",
  status: "verified",
  verifiedAt: "2026-09-07",
  summary: "Grand Tour is verified as a genuinely new Chapter 19 source-first Production Case after exact-main branch/PR checks and canonical Cannes audit establish no pre-existing scenario, Film Study or Production Verification identity on the locked 609/609 baseline. Festival de Cannes records the 129-minute 2024 Competition feature, Miguel Gomes direction, Best Director award, screenplay by Mariana Ricardo, Telmo Churro, Maureen Fazendeiro and Gomes, cinematography by Rui Poças, Sayombhu Mukdeeprom and Gui Liang, production design by Thales Junqueira and Marcos Pedrozo, editing by Telmo Churro and Pedro Filipe Marques, and sound by Vasco Pimentel and Kelan Li. Uma Pedra no Sapato independently identifies the Portugal/France/Italy fiction production as 16mm and supplies the principal production, costume, makeup, hair, SFX, sound-design/mix, color and producer chain. Gomes' Film Comment interview documents the split method: a 2020 Asia journey interrupted by COVID-19, a remotely directed 2022 phase, and a China unit directed from Lisbon through live-feed monitoring, while the actors were always intended to be photographed separately on soundstages. Rui Poças states that his narrative actor material was photographed in two large Lisbon studios and three larger Rome studios on black-and-white 16mm, using only incandescent-filament studio lighting inspired by Hollywood practice of the 1930s and 1940s. Cannes independently describes the project beginning with a five-week Southeast Asia journey in early 2020 with a 16mm camera, continuing remotely during the pandemic and ultimately recreating Asia in studio without digital trickery. The Match Factory locks the 2024 production/co-production chain and craft credits plus DCP and 5.1 delivery; its aspect-ratio field is unresolved and remains unresolved here. The locked sources do not establish exact camera bodies, lens models, film stocks, stock-to-unit allocation, laboratory/scan resolution, exposure/shutter/filtration, a complete lighting inventory, exact sound-recording hardware, editorial software/storage/proxy/conform, a sufficiently complete music/score production chain, VFX shot counts, total budget, financing percentages, insurance, exact studio shooting dates, a complete location itinerary or final aspect ratio; those details remain unresolved rather than inferred.",
  sources: [
    {
      title: "GRAND TOUR",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/grand-tour/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes film record supporting the 2024 Competition entry, 129-minute runtime, Portugal/Italy/France production countries and principal director, screenplay, cinematography, production-design, editing and sound credits."
    },
    {
      title: "The 77th Festival de Cannes winners' list",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/press/press-releases/the-77th-festival-de-cannes-winners-list/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Official award record supporting Miguel Gomes' Best Director award for Grand Tour; the award is used only as a corrective-selection obligation."
    },
    {
      title: "Grand Tour",
      publisher: "Uma Pedra no Sapato",
      url: "https://www.umapedranosapato.com/film/grand-tour/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official production-company record supporting 16mm, 129 minutes, principal cast and the screenplay, cinematography, production-design, scenography, costume, makeup, hair, SFX, editing, sound, color and producer/co-producer chain."
    },
    {
      title: "Interview: Miguel Gomes on Grand Tour",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/interview-miguel-gomes-on-grand-tour-dennis-lim/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Direct director interview supporting the 2020 and remotely directed 2022 Asia phases, Lisbon-to-China live-feed direction, the intended split between Asian location photography and Portuguese-DP studio actors, and the relationship between location images, later screenplay work and montage."
    },
    {
      title: "Grand Tour, or the romantic escapades of a free-spirited director",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2024/grand-tour-or-the-romantic-escapades-of-a-free-spirited-director/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Official Cannes production feature supporting the five-week early-2020 Southeast Asia journey with a 16mm camera, pandemic interruption, remote continuation and later studio recreation of Asia without digital trickery."
    },
    {
      title: "Rui Poças: O que mais conta no cinema são as ideias",
      publisher: "C7nema",
      url: "https://c7nema.net/entrevistas/item/126583-rui-pocas-o-que-mais-conta-no-cinema-sao-as-ideias.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Direct cinematographer interview supporting the division of cinematography among Poças, Sayombhu Mukdeeprom and Gui Liang, two Lisbon plus three Rome studios, black-and-white 16mm actor photography, and an incandescent-filament-only studio-lighting strategy inspired by 1930s-1940s Hollywood practice."
    },
    {
      title: "Grand Tour",
      publisher: "The Match Factory",
      url: "https://www.the-match-factory.com/catalogue/films/grand-tour.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "International sales/technical record supporting the production/co-production chain, principal craft credits, 129-minute duration, DCP format and 5.1 sound. Its aspect-ratio field is not populated, so no final aspect ratio is inferred."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
