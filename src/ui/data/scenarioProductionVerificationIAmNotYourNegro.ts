import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const iAmNotYourNegroProductionCaseVerification = {
  scenarioId: "scenario_i_am_not_your_negro_2016",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "I Am Not Your Negro is verified as a 2016 Chapter 18 Production Case in which literary rights, James Baldwin Estate trust, Remember This House provenance, archival search and acquisition, Fair Use/legal review, paid licensing, text-first montage, contemporary photography, voice performance, sound and transnational co-production operate as one documentary production system. Artémis Productions anchors a 93-minute version, color/black-and-white, 1.85 presentation and 5.1 DCP metadata and identifies Henry Adebonojo plus Bill and Turner Ross for cinematography, Alexandra Strauss for picture editing, Valérie Le Docte for sound editing, David Gillain for sound mixing and Alexei Aigui for music. PBS Independent Lens documents Velvet Film with Artémis Productions and Close Up Films, additional co-production with ARTE France, RTS, RTBF and Shelter Prod, producers Rémi Grellety, Raoul Peck and Hébert Peck, co-producers Patrick Quinet and Joëlle Bertossa, Samuel L. Jackson as the voice and full Baldwin Estate collaboration. Peck and Hébert Peck describe roughly ten years of development and unusually broad access to Baldwin's published/unpublished work, letters and photographs. Remember This House's roughly thirty pages became the structural entry point after years of formal experimentation. Peck describes a text-first manuscript/libretto, broad archival research, physical/spatial arrangement of material and a layer-by-layer edit. His POV account documents a Fair Use lawyer working across edit versions for about a year, some clips requiring paid licensing, and legal constraints changing montage decisions rather than functioning as a blanket clearance. AFI documents Jackson joining near the final editing phase and recording the voice in a Sofia studio after receiving a cut; other Peck interviews document a temporary voice during editing. Contemporary footage by Adebonojo and the Ross brothers is kept distinct in provenance from historical film, television, photographs and graphics. Exact total budget, per-clip fees, complete archive inventory, camera/lens/codec chains for contemporary units, archive scanner/restoration settings, edit/graphics software, voice microphone/recorder chain, music stems and exact final-mix specifications remain outside the verified layer unless stronger title-specific records establish them.",
  sources: [
    {
      title: "I Am Not Your Negro",
      publisher: "Artémis Productions",
      url: "https://www.artemisproductions.com/en/films/I_Am_Not_Your_Negro",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Producer/co-producer page supporting 93 minutes, color/black-and-white, 1.85, 5.1 DCP and key cinematography, picture-editing, sound and music credits."
    },
    {
      title: "I Am Not Your Negro",
      publisher: "PBS Independent Lens",
      url: "https://www.pbs.org/independentlens/documentaries/i-am-not-your-negro/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Public-broadcast record documenting Velvet Film, Artémis, Close Up, ARTE France, RTS, RTBF and Shelter Prod co-production layers; producers/co-producers; Baldwin Estate collaboration; Jackson voice; Strauss editing; archive research; DPs; music and sound credits."
    },
    {
      title: "I Am Not Your Negro Press Kit",
      publisher: "Magnolia Pictures",
      url: "https://www.magpictures.com/presskit.aspx?id=9f588349-a711-4eb6-8150-210b7bb6eb80",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Distributor press materials and production notes supporting the production team, Baldwin-image provenance context and the film's research/writing/editing process."
    },
    {
      title: "The AFI FEST Interview: I AM NOT YOUR NEGRO Director Raoul Peck",
      publisher: "American Film Institute",
      url: "https://www.afi.com/news/the-afi-fest-interview-i-am-not-your-negro-director-raoul-peck/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Peck explains Baldwin-centered authorship, text-first structure, archive gathering and the late choice/recording of Samuel L. Jackson in Sofia."
    },
    {
      title: "The POV Interview: Raoul Peck Talks I Am Not Your Negro",
      publisher: "POV Magazine",
      url: "https://povmagazine.com/i-am-not-your-negro-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Peck documents broad Estate access, Fair Use and paid-license distinctions, about a year of lawyer review across edits, production control and the long layer-building process."
    },
    {
      title: "How Editor Alexandra Strauss Cut an Impossible Film",
      publisher: "No Film School",
      url: "https://nofilmschool.com/2017/02/i-am-not-your-negro-oscar-editor-alexandra-strauss-interview",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Strauss describes the challenge of creating cinematic structure from Baldwin's words and heterogeneous image material, supporting editing as core documentary authorship/craft."
    },
    {
      title: "I Am Not Your Negro Remixes James Baldwin with America's Tradition of On-Screen Racism",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/i-am-not-your-negro-james-baldwin-tradition-on-screen-racism/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Production feature supporting late contemporary photography by Henry Adebonojo and Bill/Turner Ross in New York and the American South and the deliberate intercutting of newly shot and archival material."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
