import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const napoleonProductionCaseVerification = {
  scenarioId: "scenario_napoleon_1927",
  status: "verified",
  verifiedAt: "2026-08-16",
  summary: "La Cinémathèque française and the British Film Institute support Napoléon as Abel Gance's large-scale French silent production whose formal experimentation depended on unusually broad specialist labor, camera apparatus and exhibition infrastructure. Cinémathèque credits Société du Film Napoléon and Société Générale de Films, cinematographers Jules Krüger, Jean-Paul Mundviller and Léonce-Henri Burel, Gance and Marguerite Beaugé as editors, multiple designers, makeup artists and special-effects coordinators, and a large assistant-director ensemble. Its machine archive documents eight cameramen and eighteen cameras and explains the patented triple-screen process as three adjacent projections capable of independent images or a stitched panorama. BFI documents sequence-specific rigs including toboggan, rotating, chest-mounted, vehicle, horse, overhead-track and pendulum-like camera solutions plus in-camera split/multiple exposures. Cinémathèque's version research distinguishes the 7 April 1927 Opéra presentation, the much longer May Apollo assembly, later MGM export cuts, Gance's 1934–1935 sound re-edit and modern restoration histories; its current Grande Version is screened in two DCP parts of 220 and 205 minutes. The Production Case therefore teaches epic logistics, multi-camera experimentation, Polyvision capture/projection and rigorous version criticism without treating 425 minutes as a single untouched 1927 original or crediting every technique as Gance's first invention.",
  sources: [
    {
      title: "Napoléon vu par Abel Gance",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/48685.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional catalog record for Gance, production companies, Krüger/Mundviller/Burel cinematography, Gance/Beaugé editing, Honegger music, designers, makeup, script continuity, casting, special-effects coordinators, assistant directors and the extensive cast. Its legacy runtime label is treated as catalog/version evidence, not the sole canonical 1927 length."
    },
    {
      title: "The Napoléon Comet: The Expert Appraisal of a Collection",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/article/662.html",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "Archival expert appraisal distinguishing the 1927 Opéra and Apollo states, MGM/export recutting and later version history while documenting rhythmic editing and lost/recovered triple-screen relations. It makes version criticism a primary production-history requirement."
    },
    {
      title: "Machines — Le triple écran d'Abel Gance",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/exposition-machines-guide.html",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Cinémathèque technical exhibit documenting eight cameramen, eighteen cameras, multiple superimpositions and distorted views, the Brachyscope and Gance's patented triple-screen system with three adjacent projections, supporting both capture and exhibition-infrastructure gameplay."
    },
    {
      title: "Napoleon: 10 unmissable highlights from Abel Gance's five-and-a-half-hour masterpiece",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/features/napoleon-highlights-abel-gance-silent-film",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "BFI technical overview documenting sequence-specific camera rigs, in-camera split/multiple exposures, overhead tracks, pendulum movement and the three-camera/three-projector Polyvision finale. Used as institutional technical context rather than as a source for a single canonical runtime."
    },
    {
      title: "Napoléon vu par Abel Gance — current Grande Version parts 1 and 2",
      publisher: "La Cinémathèque française",
      url: "https://www.cinematheque.fr/film/154798.html",
      sourceKind: "film_institute",
      supports: ["overall", "editing", "sound"],
      note: "Current Cinémathèque presentation record identifying the restored Grande Version as 220-minute and 205-minute DCP parts under Georges Mourier's reconstruction. The combined 425 minutes is used only as the representative runtime stored by the scenario, explicitly not as an untouched original 1927 master."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
