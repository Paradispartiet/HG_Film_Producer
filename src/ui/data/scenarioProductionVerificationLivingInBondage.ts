import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const livingInBondageProductionCaseVerification = {
  scenarioId: "scenario_living_in_bondage_1992",
  status: "verified",
  verifiedAt: "2026-09-11",
  summary: "Living in Bondage is verified as a 1992 Nigerian video-film production that supplies the previously absent exact Nollywood industry-system case. Peer-reviewed SAGE research identifies Okechukwu Ogunjiofor as story originator/writer-producer, Kenneth Nnebue as financier, Chris Obi Rapu as director, an approximately 150,000-naira production cost, Super VHS capture and a straight-to-home consumption blueprint. A companion SAGE study explains that high celluloid costs constrained Nigerian production, that Nnebue's videocassette business and prior video-film financing/distribution supplied the required funds, and that the 1992 project emerged from this video-market infrastructure. Jonathan Haynes's Oxford/Chicago scholarship states that Living in Bondage opened the market for Nigerian video films and that its collaborators embodied the new industry's informal-sector and West African marketing base. UNESCO's African film-industry report places the film in the early-1990s collapse of viable celluloid production and theatrical access, records that it was shot on video and distributed through this circuit, and describes the resulting popular low-cost cinema as formative for Nollywood. BFI independently identifies the film as Nollywood's first major success and VHS as the accessible technology of the period. Together the sources establish production scale, financing, video infrastructure, distribution and audience-system evidence while leaving exact camera, lens, lighting, edit, sound, crew, schedule, rights, recoupment and sales quantities unset where not securely established.",
  sources: [
    {
      title: "From Living in Bondage to Queen Amina: An Aesthetic Evaluation of Contemporary Nollywood",
      publisher: "SAGE Open",
      url: "https://journals.sagepub.com/doi/10.1177/21582440211032620",
      sourceKind: "academic_research",
      supports: ["overall", "cinematography"],
      note: "Peer-reviewed research identifies Ogunjiofor, Nnebue and Obi Rapu; reports the approximately 150,000-naira cost, limited-budget and straight-to-home model; and identifies Super VHS capture as the cheaper alternative to declining celluloid production."
    },
    {
      title: "The New Nollywood: Professionalization or Gentrification of Cultural Industry",
      publisher: "SAGE Open",
      url: "https://journals.sagepub.com/doi/full/10.1177/2158244020940994",
      sourceKind: "academic_research",
      supports: ["overall"],
      note: "Peer-reviewed research records video filmmaking as a response to prohibitive celluloid costs and identifies Kenneth Nnebue, a videocassette businessman and prior video-film financier/distributor, as the source of funding for Living in Bondage."
    },
    {
      title: "Living in Bondage: Money and Values",
      publisher: "Oxford Academic / University of Chicago Press",
      url: "https://academic.oup.com/chicago-scholarship-online/book/18664/chapter-abstract/176869060",
      sourceKind: "academic_research",
      supports: ["overall", "screenplay"],
      note: "Jonathan Haynes documents Living in Bondage as opening the Nigerian video-film market and identifies Nnebue as informal-sector marketer, Obi Rapu as television director and Ogunjiofor as writer/producer, tying the production to West African marketing structures."
    },
    {
      title: "The African Film Industry: Trends, Challenges and Opportunities for Growth",
      publisher: "UNESCO",
      url: "https://www.unesco.org/creativity/sites/default/files/medias/fichiers/2023/01/379165eng.pdf",
      sourceKind: "institutional_report",
      supports: ["overall"],
      note: "UNESCO records the economic decline of celluloid production and cinemas, Living in Bondage being shot on video and distributed through the emerging circuit, and the home-video boom that followed."
    },
    {
      title: "Around the world in melodrama: 9 countries, 45 essential films",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/around-world-melodrama-9-countries-45-essential-films",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "BFI identifies Living in Bondage as Nollywood's first major success, links the early boom to low-budget production and records VHS as the accessible distribution technology of the period."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
