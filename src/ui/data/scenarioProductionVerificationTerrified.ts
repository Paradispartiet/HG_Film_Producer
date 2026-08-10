import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const terrifiedProductionCaseVerification = {
  scenarioId: "scenario_terrified_2017",
  status: "verified",
  verifiedAt: "2026-08-11",
  summary: "Terrified's long development, Ciudad Jardín block, rehearsal-led verisimilitude, Mariano Suárez RED/Leica 6K night system, Marcos Berta practical effects, Lionel Cornistein edit/VFX/color work and offscreen-sound construction are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Aterrados: la luz al servicio del horror",
      publisher: "ADF – Autores de Fotografía Cinematográfica Argentina",
      url: "https://adfcine.org/aterrados-la-luz-al-servicio-del-horror/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Cinematographer Mariano Suárez documents Ciudad Jardín, the linked-house location problem, Rugna's decision not to operate camera, RED Epic Dragon and Leica R lenses, 6K capture, three camera regimes, low-resource night lighting, physical make-up and props, the rebuilt bathroom effect, Cornistein's VFX/color work and principal technical credits."
    },
    {
      title: "Entrevista a Demián Rugna",
      publisher: "CineFreaks",
      url: "https://cinefreaks.net/2018/05/07/entrevista-a-demian-rugna-mi-camino-hacia-la-comedia-fantastica-fue-consecuencia-de-que-no-pasaba-nada-con-mis-proyectos-de-terror/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Rugna describes the project's long gestation, everyday-situation origin, his horror influences, the need for story and tension to sustain scares, and the bathroom sequence as the production's largest formal risk, planned with fallbacks and shot across three days to protect realism."
    },
    {
      title: "Entrevista a Demian Rugna, director de Aterrados",
      publisher: "Perro Blanco",
      url: "https://www.perroblanco.net/entrevista-a-demian-rugna-director-de-aterrados/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Rugna explains that the impossible should not be over-explained, that the ordinary neighborhood is a crack between two realities, and that depth of field, defocus, chiaroscuro and offscreen ambient sound were narrative decisions originating in the screenplay rather than budget accidents."
    },
    {
      title: "Especial Argentina Comic Con: entrevista a Demián Rugna, director de Aterrados",
      publisher: "NegroWhite",
      url: "https://negrowhite.net/especial-argentina-comic-con-entrevista-a-demian-rugna-director-de-aterrados/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Rugna, producer Fernando Díaz and effects artist Marcos Berta describe the need to rent an entire connected block, rehearsals for credible horror performance, years of script development, preplanned physical make-up and props, the articulated child body, the window creature and CGI used as support rather than replacement."
    },
    {
      title: "Terrified",
      publisher: "New Zealand International Film Festival",
      url: "https://www.nziff.co.nz/2018/wellington/terrified/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The official festival programme confirms the 2017 Argentine feature, 87-minute DCP presentation, Demián Rugna as director, screenwriter and composer, Fernando Díaz as producer, Mariano Suárez as cinematographer, Lionel Cornistein as editor, Laura Aguerrebehere as production designer and Pheonia Veloz and Gabriela Varela Laciar as costume designers."
    },
    {
      title: "Terrified",
      publisher: "Shudder",
      url: "https://www.shudder.com/movies/watch/terrified/4436477?pp=1",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Shudder's official catalogue records the 87-minute release as a Shudder Original and frames the story around an ordinary suburban Buenos Aires street whose sinks, houses and bodies become one neighborhood-scale nightmare."
    },
    {
      title: "Morbido 2017: TERRIFIED (ATERRADOS) World Premieres At Mexican Genre Fest",
      publisher: "ScreenAnarchy",
      url: "https://screenanarchy.com/2017/10/morbido-2017-terrified-aterrados-world-premieres-at-mexican-genre-fest-gallery.html",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "The genre-trade report documents Terrified's Mórbido world-premiere launch and international festival positioning, supporting the film's transition from Argentine independent production into the wider Latin American and global horror circuit."
    },
    {
      title: "Hora Cero presenta Aterrados",
      publisher: "INCAA",
      url: "https://www.argentina.gob.ar/noticias/hora-cero-presenta-aterrados",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Argentina's national film institute later programmed Aterrados inside its Hora Cero genre initiative, documenting the film's continuing place within national horror exhibition and Argentine genre-cinema culture after its original release."
    },
    {
      title: "Terrified",
      publisher: "Strasbourg European Fantastic Film Festival",
      url: "https://strasbourgfestival.com/terrified/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The festival record identifies the Argentine production, Rugna's direction and screenplay, Fernando Díaz's production, Mariano Suárez's cinematography, Lionel Cornistein's editing and Aura Films world sales, corroborating the principal production structure and international circulation."
    },
    {
      title: "Terrified",
      publisher: "Box Office Mojo",
      url: "https://www.boxofficemojo.com/title/tt7549892/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "The release record independently identifies Terrified/Aterrados, its Argentine theatrical release context, Demián Rugna and principal cast, providing a commercial-release cross-check distinct from the production and festival sources."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
