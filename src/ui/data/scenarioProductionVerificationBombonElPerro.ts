import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const bombonElPerroVerificationRecords = [
  {
    scenarioId: "scenario_bombon_el_perro_2004",
    status: "verified",
    verifiedAt: "2026-07-27",
    summary: "The case's Argentine-Spanish coproduction, Patagonian location system, unemployment context, months-long nonprofessional casting, performer-character overlap, reserved dog performance, flexible screenplay, simultaneous digital editing, 35mm photography, restrained regional sound and international festival afterlife are supported by filmmaker interviews and institutional, festival, distributor, trade and contemporary press records.",
    sources: [
      {
        title: "Bombón, el perro / Bombón, the dog",
        publisher: "San Sebastián International Film Festival",
        url: "https://www.sansebastianfestival.com/2004/sections_and_films/official_section/7/520631/in",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The official 2004 festival record confirms the Argentina-Spain production, Carlos Sorín's direction, the Sorín-Roselli-Calori screenplay, Hugo Colace photography, Nicolás Sorín music, principal nonprofessional cast and official-section context."
      },
      {
        title: "Bombón - el perro",
        publisher: "trigon-film",
        url: "https://trigon-film.org/en/films/bombon-el-perro/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The distributor and film-foundation record documents Mohamed Rajid's editing, Nicolás Sorín's score, Hugo Colace's photography, Óscar Kramer and the Argentina-Spain coproduction companies, 35mm format, principal performers and the San Sebastián and Nantes awards."
      },
      {
        title: "Bombón, el perro",
        publisher: "Instituto de la Cinematografía y de las Artes Audiovisuales",
        url: "https://infoicaa.mcu.es/CatalogoICAA/Peliculas/Detalle?Pelicula=13404",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The Spanish institutional database records the 2004 certification, fiction-comedy classification, 80-percent Argentine and 20-percent Spanish coproduction structure, runtime, release and commercial exhibition in Spain."
      },
      {
        title: "Carlos Sorín regresa al árido paisaje de la Patagonia con 'Bombón'",
        publisher: "El País",
        url: "https://elpais.com/diario/2004/06/04/cine/1086300010_850215.html",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "This contemporary end-of-shoot report identifies the Patagonian road-comedy design, the decision to avoid professional actors, months of casting in small towns and Sorín's stated effort to continue the regional production method of Historias mínimas."
      },
      {
        title: "Entrevista con Carlos Sorin",
        publisher: "Cinencuentro",
        url: "https://www.cinencuentro.com/entrevista-carlos-sorin/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "editing"],
        note: "Sorín explains that nonactors must closely resemble the characters, that the screenplay functions as a guide, that he adjusts scenes to discoveries during filming and that simultaneous computer editing lets captured reality rewrite the remaining production."
      },
      {
        title: "El perro",
        publisher: "FIPRESCI",
        url: "https://fipresci.org/awards/el-perro/",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The International Federation of Film Critics records Bombón: El Perro as the Argentina-Spain 2004 winner associated with the San Sebastián festival, documenting the film's principal international critical breakthrough."
      },
      {
        title: "Bombón the Dog",
        publisher: "Festival des 3 Continents",
        url: "https://www.3continents.com/en/film/bombon-le-chien/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "The official Nantes festival record confirms the 2004 competition selection, fiction and colour format, Sorín screenplay, Hugo Colace photography, Nicolás Sorín music and Juan Villegas and Walter Donado performances; the festival programme records Villegas's acting prize."
      },
      {
        title: "Bombon El Perro",
        publisher: "Screen International",
        url: "https://www.screendaily.com/bombon-el-perro/4020293.article",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The contemporary trade review records the FIPRESCI win, broad international sales, deliberately unglamorous minimalist form, vast Patagonian spaces and concentration on ordinary regional people rather than conventional star spectacle."
      },
      {
        title: "Bombón: El Perro: A quiet and understated masterpiece",
        publisher: "SBS",
        url: "https://www.sbs.com.au/whats-on/article/bombon-el-perro-a-quiet-and-understated-masterpiece/c0k8q4gja",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "SBS identifies the nonprofessional performers playing characters who share their names, the film's disenfranchised regional world and its old-school road structure built from random turns and character observation rather than formula plotting."
      },
      {
        title: "Bombon El Perro",
        publisher: "LondonNet",
        url: "https://www.londonnet.co.uk/cinema/cinema-interviews/bombon-el-perro/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "Sorín describes Juan and the dog as reserved rather than conventionally affectionate and explains that Gregorio was selected and directed for his quiet, ambiguous behavior, making animal unpredictability part of the film's performance and tonal system."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
