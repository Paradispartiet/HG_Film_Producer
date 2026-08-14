export type FilmHistoryBookSource = {
  readonly title: string;
  readonly publisher: string;
  readonly url: string;
};

export type FilmHistoryBookSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export type FilmHistoryBookFilmReference = {
  readonly title: string;
  readonly year: number;
  readonly note: string;
};

export type FilmHistoryBookChapter = {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly period: string;
  readonly summary: string;
  readonly status: "full" | "outline";
  readonly learningObjectives: readonly string[];
  readonly keyTerms: readonly string[];
  readonly sections: readonly FilmHistoryBookSection[];
  readonly filmReferences: readonly FilmHistoryBookFilmReference[];
  readonly sources: readonly FilmHistoryBookSource[];
};

export type FilmHistoryBookPart = {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly period: string;
  readonly thesis: string;
  readonly chapters: readonly FilmHistoryBookChapter[];
};

const outline = (
  id: string,
  number: number,
  title: string,
  period: string,
  summary: string,
  learningObjectives: readonly string[],
  keyTerms: readonly string[],
): FilmHistoryBookChapter => ({
  id,
  number,
  title,
  period,
  summary,
  status: "outline",
  learningObjectives,
  keyTerms,
  sections: [],
  filmReferences: [],
  sources: [],
});

const chapterOne: FilmHistoryBookChapter = {
  id: "motion-before-cinema",
  number: 1,
  title: "Motion before cinema",
  period: "1870s–1905",
  summary: "Cinema did not arrive in one instant or from one inventor. It emerged when photography, motion analysis, flexible film, cameras, viewing machines, projection systems, exhibition practices and paying audiences became linked into a reproducible public medium.",
  status: "full",
  learningObjectives: [
    "Explain why film history should not reduce cinema's emergence to a single inventor or birthday.",
    "Distinguish between motion-picture capture, individual viewing, projection and the institution of public cinema.",
    "Describe how Edison and Dickson's Kinetograph/Kinetoscope system differed from projected systems such as the Cinématographe.",
    "Recognize actuality, staged performance and trick film as major early forms rather than treating narrative feature cinema as the medium's inevitable starting point.",
    "Explain why so-called silent cinema was commonly accompanied by music, speech, effects or audience participation.",
  ],
  keyTerms: [
    "chronophotography",
    "celluloid film",
    "Kinetograph",
    "Kinetoscope",
    "projection",
    "Cinématographe",
    "actuality",
    "trick film",
    "exhibition",
    "programme",
  ],
  sections: [
    {
      id: "no-single-invention",
      title: "There was no single invention called cinema",
      paragraphs: [
        "Film history often needs a convenient beginning, but the historical process is messier than a single date. Moving-image entertainment depended on several problems being solved at once: how to record successive images quickly, how to move a strip of photographic material intermittently through a camera, how to reproduce the recorded movement, and how to turn the result into an experience audiences would repeatedly pay to see. Different inventors and companies solved different parts of that system in different places.",
        "This is why claims about the 'first film show' depend on criteria. A peep-show viewer, a laboratory demonstration, a projected image, a public presentation and a ticketed commercial programme are not the same event. The Lumière screening in Paris on 28 December 1895 became an especially influential landmark, but projection experiments and paid presentations also occurred elsewhere during 1895. A rigorous history therefore treats cinema as an emerging network of apparatus, business and spectatorship rather than a device switched on in one room on one night.",
      ],
    },
    {
      id: "motion-analysis",
      title: "Photography learns to divide movement",
      paragraphs: [
        "Late-nineteenth-century motion studies helped make movement analyzable as a succession of photographic instants. Chronophotographic practices associated with figures such as Étienne-Jules Marey belong to a wider culture of scientific measurement, photography and visual entertainment. At the same time, flexible photographic film made it increasingly practical to record sequences on a moving strip rather than on separate plates.",
        "These developments mattered because cinema requires both continuity and interruption. A camera has to expose one frame, advance the material, stop it briefly, expose the next frame and repeat the cycle with enough regularity that projection can later reconstruct an impression of motion. Early cinema technology was therefore as much about transport mechanisms, perforation, shutters and standardization as it was about the camera lens itself.",
      ],
    },
    {
      id: "edison-dickson",
      title: "Edison, Dickson and moving pictures as a machine business",
      paragraphs: [
        "At Thomas Edison's laboratory, much of the practical motion-picture work was carried out by W. K. L. Dickson. The laboratory developed the Kinetograph camera and Kinetoscope viewer during the early 1890s. The Kinetoscope was not a theatre projector: one customer looked into a cabinet and watched a short moving-image loop. By 1894, Kinetoscope parlours had turned the device into a commercial attraction.",
        "The production system grew around the machine. Edison's Black Maria studio in West Orange was designed to use available sunlight, with an opening roof and a building that could be reoriented toward the sun. Early subjects included performers, athletes, celebrities and brief comic actions. These films show that the new medium initially drew heavily from existing entertainment forms rather than beginning with the storytelling grammar later associated with classical cinema.",
      ],
    },
    {
      id: "projection-race",
      title: "Projection changes the social form of the medium",
      paragraphs: [
        "Projection transformed moving pictures from an individual viewing machine into a collective event. During 1895 and 1896, several systems competed internationally. The Lumière Cinématographe was especially influential because it combined camera, printer and projector functions in a compact apparatus and because Lumière operators carried programmes across many countries. In the United States, systems including the Eidoloscope and later the Vitascope also helped establish projected film as a theatrical attraction.",
        "The economic consequences were substantial. Projection allowed many spectators to watch the same strip of film at once. It also encouraged the growth of exhibitors who assembled programmes from films made by different producers. In this period the exhibitor could be as important to the audience's experience as the producer: films were selected, ordered, accompanied and presented as parts of a programme rather than necessarily consumed as self-contained works in the later feature-film sense.",
      ],
    },
    {
      id: "early-forms",
      title: "Actuality, performance and impossible images",
      paragraphs: [
        "A large share of early production consisted of what historians call actualities: brief views of people, places, work, travel, ceremonies, newsworthy events and everyday activity. Their attraction lay partly in seeing movement and distant reality reproduced. The camera could make an ordinary event newly remarkable because photographic motion itself was still a spectacle.",
        "At the same time, filmmakers quickly discovered that the apparatus could show what had never existed in front of an audience. Georges Méliès brought experience from stage magic and theatre into cinema, developing substitution effects, multiple exposures, painted scenery and elaborate fantasy tableaux. A Trip to the Moon (1902) is therefore important not because cinema suddenly learned to tell stories in 1902, but because it demonstrates how rapidly screen space became a designed world of transformation, spectacle and fiction.",
      ],
    },
    {
      id: "not-silent",
      title: "Silent film was rarely a silent experience",
      paragraphs: [
        "The absence of synchronized recorded dialogue should not be confused with an absence of sound in exhibition. Early films could be accompanied by musicians, lecturers, narrators, sound effects, songs and audience response. The exact soundscape varied by venue, city, country and budget. What survives in an archive as an image strip was only one component of a historical performance event.",
        "This distinction matters methodologically. Film history is not only the history of texts preserved on film stock; it is also the history of exhibition, technologies, labor, institutions and audiences. The medium's meaning changed depending on where a film was shown, what surrounded it in the programme and how the event was presented.",
      ],
    },
    {
      id: "chapter-conclusion",
      title: "The historical problem established by early cinema",
      paragraphs: [
        "By the opening years of the twentieth century, moving pictures had become more than an invention. Producers needed a regular supply of subjects, exhibitors needed programmes, audiences developed expectations, and companies competed over equipment, patents and distribution. Fictional films and more complex editing would grow in importance, but they developed inside this already active culture of actualities, attractions, performances and public exhibition.",
        "The central lesson is that film form and film industry develop together. A change in camera technology can alter where films are shot; a change in projection can alter audience size; a change in distribution can alter how many films are required; and a change in exhibition can encourage new forms of storytelling. The rest of this book follows those interactions rather than treating style, technology and business as separate histories.",
      ],
    },
  ],
  filmReferences: [
    { title: "A Trip to the Moon", year: 1902, note: "A compact case for early trick film, theatrical mise-en-scène, fantasy and transformation effects." },
  ],
  sources: [
    {
      title: "Origins of Motion Pictures",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/origins-of-motion-pictures/",
    },
    {
      title: "Early Motion Picture Productions",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/early-motion-picture-productions/",
    },
    {
      title: "Shift to Projectors and the Vitoscope",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-motion-pictures/shift-to-projectors-and-the-vitoscope/",
    },
    {
      title: "A very short history of cinema",
      publisher: "National Science and Media Museum",
      url: "https://www.scienceandmediamuseum.org.uk/objects-and-stories/very-short-history-of-cinema",
    },
    {
      title: "In the beginning: cinema's murky origin story",
      publisher: "BFI / Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/origins-cinema-early-inventors-pioneers",
    },
    {
      title: "Georges Méliès on his early struggles in cinema",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/features/georges-melies-autobiography",
    },
  ],
};

export const filmHistoryBookParts: readonly FilmHistoryBookPart[] = [
  {
    id: "emergence",
    number: 1,
    title: "The medium emerges",
    period: "1870s–1914",
    thesis: "Cinema becomes a reproducible public medium through intertwined changes in apparatus, exhibition, film form, production and distribution.",
    chapters: [
      chapterOne,
      outline("projection-programmes-audiences", 2, "Projection, programmes and audiences", "1895–1907", "How itinerant exhibition, fairgrounds, music halls, storefront theatres and early purpose-built cinemas turned moving pictures into a recurring public habit.", ["Compare major early exhibition settings.", "Explain how programmes shaped meaning before feature-film dominance.", "Relate exhibition economics to demand for film production."], ["exhibitor", "programme", "fairground cinema", "music hall", "nickelodeon"]),
      outline("fiction-editing-narrative", 3, "From views to stories", "1896–1912", "The growth of staged fiction, trick film, multi-shot construction, continuity devices and more sustained narrative organization.", ["Identify major steps in multi-shot storytelling.", "Distinguish attraction from later continuity norms.", "Explain how editing became a narrative system."], ["tableau", "continuity", "cross-cutting", "match", "narrative integration"]),
      outline("industry-feature-transition", 4, "Companies, patents and the feature transition", "1905–1914", "How expanding companies, rental systems, patents, purpose-built theatres and longer films reorganized production and distribution.", ["Explain the shift from selling prints to rental and distribution networks.", "Connect industrial organization to feature-length production.", "Compare competing national industries before World War I."], ["film exchange", "rental", "patent", "feature film", "vertical integration"]),
      outline("global-before-wwi", 5, "Cinema becomes international", "1907–1914", "France, Italy, Denmark, the United States and other production centers compete as stars, genres and feature films travel across borders.", ["Map leading prewar production centers.", "Explain why national cinema was international from the beginning.", "Connect star, genre and feature systems to export markets."], ["national cinema", "export market", "star system", "genre", "feature"]),
    ],
  },
  {
    id: "silent-systems",
    number: 2,
    title: "Silent cinema as a global system",
    period: "1914–1929",
    thesis: "During and after World War I, industrial consolidation and radical modernist alternatives transform what films look like, how they are edited and how national cinemas define themselves.",
    chapters: [
      outline("classical-hollywood", 6, "Classical continuity and the Hollywood system", "1914–1929", "Hollywood consolidates an industrial and stylistic system built around stars, genres, continuity editing, studios and national distribution.", ["Describe classical continuity as a system.", "Explain studio organization and vertical integration.", "Relate stars and genres to industrial planning."], ["continuity editing", "studio system", "vertical integration", "star system", "genre"]),
      outline("weimar-expressionism", 7, "Weimar cinema and Expressionism", "1919–1929", "German studios, Expressionist design, chamber drama and mobile camera work turn instability, architecture and subjectivity into film form.", ["Distinguish Expressionism from other Weimar tendencies.", "Analyze production design as narrative form.", "Explain UFA's industrial importance."], ["Expressionism", "Kammerspielfilm", "UFA", "unchained camera", "mise-en-scène"]),
      outline("french-avant-gardes", 8, "French Impressionism, Surrealism and the avant-gardes", "1918–1930", "French filmmakers and artists pursue photogénie, subjective vision, abstraction, Surrealism and alternatives to commercial narrative norms.", ["Define photogénie in historical context.", "Compare Impressionist and Surrealist strategies.", "Connect avant-garde production to alternative institutions."], ["photogénie", "French Impressionism", "Surrealism", "pure cinema", "avant-garde"]),
      outline("soviet-montage", 9, "Revolution and Soviet Montage", "1917–1930", "Kuleshov, Eisenstein, Vertov, Pudovkin and others make editing a site of political theory, perception and formal experiment.", ["Compare major montage theories.", "Analyze editing as argument rather than continuity alone.", "Place Soviet production inside revolutionary institutions."], ["montage", "Kuleshov effect", "collision", "kino-eye", "constructivism"]),
      outline("silent-beyond-west", 10, "Silent cinemas beyond the usual canon", "1910s–1929", "Japan, China, India, Scandinavia and other film cultures develop distinctive performance, exhibition, genre and production traditions while exchanging forms internationally.", ["Compare at least three silent-era film cultures outside Hollywood and central Europe.", "Explain the role of local exhibition practices.", "Recognize uneven archival survival as a historiographic problem."], ["benshi", "studio culture", "mythological", "archival survival", "transnational cinema"]),
    ],
  },
  {
    id: "sound-states-studios",
    number: 3,
    title: "Sound, studios and state power",
    period: "1927–1945",
    thesis: "Synchronized sound reorganizes film form and industry while depression, authoritarian states and world war reshape cinema's institutions and political uses.",
    chapters: [
      outline("sound-transition", 11, "The sound transition", "1927–1934", "Recorded dialogue, music and effects alter acting, camera practice, editing, exhibition, language markets and industrial power.", ["Explain why sound was an industrial transition, not just a technical addition.", "Analyze early sound space and off-screen sound.", "Compare multilingual and dubbing/subtitling strategies."], ["synchronization", "sound-on-film", "sound-on-disc", "dubbing", "multilingual version"]),
      outline("hollywood-genres", 12, "Hollywood genres in the studio era", "1930s–1945", "Musicals, horror, gangster films, screwball comedy, animation, melodrama and other genres become coordinated studio products and laboratories of style.", ["Relate genre cycles to studio organization.", "Compare genre conventions and variation.", "Analyze sound, performance and production design as genre systems."], ["genre cycle", "production unit", "backlot", "B picture", "house style"]),
      outline("europe-crisis", 13, "European cinemas between crisis and dictatorship", "1930–1945", "Poetic realism, British documentary, German state cinema, Italian production and other traditions respond to economic crisis and authoritarian politics.", ["Compare state and commercial film institutions.", "Analyze realism and stylization across national contexts.", "Explain how exile redistributed film labor."], ["poetic realism", "state cinema", "exile", "documentary movement", "co-production"]),
      outline("documentary-animation-experiment", 14, "Documentary, animation and experimental film", "1920s–1945", "Nonfiction, animation and experimental practices develop their own industrial pipelines, political functions and aesthetic possibilities.", ["Distinguish major documentary modes before 1945.", "Describe feature animation as an industrial system.", "Connect experimental film to artistic and political networks."], ["documentary", "animation pipeline", "city symphony", "sponsored film", "experimental cinema"]),
      outline("war-propaganda", 15, "Cinema at war", "1939–1945", "Feature films, newsreels, documentaries, animation and military production become instruments of morale, persuasion, information and memory across combatant states.", ["Differentiate propaganda, information and entertainment functions.", "Compare wartime film institutions.", "Analyze how war accelerates technical and organizational change."], ["propaganda", "newsreel", "morale", "wartime documentary", "state sponsorship"]),
    ],
  },
  {
    id: "postwar-modern",
    number: 4,
    title: "Postwar reconstruction and modern cinema",
    period: "1945–1968",
    thesis: "Postwar cinema combines industrial reconstruction, new realism, changing audiences, decolonization and a wave of modernist challenges to classical storytelling.",
    chapters: [
      outline("italian-neorealism", 16, "Italian Neorealism", "1943–1954", "Location shooting, social crisis, nonprofessional performers and open narrative forms become central to a highly influential postwar movement.", ["Identify Neorealist production conditions and stylistic tendencies.", "Avoid reducing the movement to a single visual formula.", "Trace its international influence."], ["Neorealism", "location shooting", "nonprofessional actor", "open form", "postwar realism"]),
      outline("postwar-japan-asia", 17, "Postwar Japan and Asian modernisms", "1945–1960s", "Japanese studio masters and emerging Asian cinemas combine local traditions, genre systems and modernist experimentation amid rapid social change.", ["Compare major Japanese studio and auteur practices.", "Connect postwar institutions to film form.", "Situate Asian modernisms within transnational festival culture."], ["Japanese studio system", "jidaigeki", "gendaigeki", "festival circuit", "modernism"]),
      outline("hollywood-after-war", 18, "Hollywood after the studio peak", "1945–1960", "Antitrust decisions, television, widescreen, color, location production, film noir and changing stars alter classical Hollywood's business and style.", ["Explain the Paramount decision's structural significance.", "Relate television competition to widescreen and spectacle.", "Analyze noir and melodrama within postwar culture."], ["Paramount decision", "widescreen", "film noir", "television", "package-unit production"]),
      outline("new-waves-europe", 19, "New Waves and new cinemas", "1955–1968", "French, British, Czech, Polish and other new cinemas challenge studio norms through location work, new performers, reflexive style and generational politics.", ["Compare several New Wave movements rather than treating them as one style.", "Connect lightweight production to formal change.", "Analyze criticism, cinephilia and film schools as institutions."], ["French New Wave", "Free Cinema", "Czech New Wave", "cinephilia", "reflexivity"]),
      outline("decolonization-third-cinema", 20, "Decolonization and Third Cinema", "1950s–1970s", "Filmmakers in Latin America, Africa and other decolonizing contexts develop new production networks and political theories of cinema.", ["Explain Third Cinema historically and distinguish it from a geographic label.", "Connect anti-colonial politics to production and distribution.", "Identify key African and Latin American institutions and filmmakers."], ["Third Cinema", "decolonization", "anti-colonial cinema", "collective production", "alternative distribution"]),
    ],
  },
  {
    id: "late-century",
    number: 5,
    title: "New Hollywood and global art cinema",
    period: "1968–1989",
    thesis: "The collapse of older production assumptions produces both intensified blockbuster economics and new political, independent, experimental and transnational film cultures.",
    chapters: [
      outline("new-hollywood", 21, "New Hollywood", "1967–1980", "A generation of filmmakers works between countercultural audiences, genre revision, location production, auteur discourse and renewed corporate control.", ["Explain New Hollywood as an industrial as well as stylistic change.", "Analyze genre revision and youth audiences.", "Trace the shift toward blockbuster economics."], ["New Hollywood", "auteurism", "counterculture", "road movie", "blockbuster"]),
      outline("feminist-queer-political", 22, "Feminist, queer and political counter-cinemas", "1960s–1980s", "Filmmakers, theorists and collectives challenge dominant representation, authorship and spectatorship through new institutions and forms.", ["Connect film form to feminist and queer critique.", "Identify alternative production/distribution networks.", "Distinguish counter-cinema from a single visual style."], ["counter-cinema", "feminist film", "queer cinema", "collective", "spectatorship"]),
      outline("popular-asian-cinemas", 23, "Popular cinemas across Asia", "1960s–1980s", "Indian popular cinema, Hong Kong action, Japanese genre production and other industries build powerful regional and diasporic audiences.", ["Compare industrial models across major Asian industries.", "Analyze music, action and star systems as production forms.", "Explain regional circulation beyond festival canons."], ["popular Hindi cinema", "Hong Kong action", "star system", "martial arts", "regional market"]),
      outline("blockbuster-home-video", 24, "Blockbusters, conglomerates and home video", "1975–1989", "Event films, saturation marketing, multiplexes, cable and home video change how films are financed, released, watched and valued.", ["Explain the economics of event-film release.", "Connect home video to catalog value and audience behavior.", "Analyze effects technology inside blockbuster production."], ["saturation booking", "multiplex", "home video", "conglomerate", "high concept"]),
      outline("festival-art-cinema", 25, "Global auteurs and festival networks", "1960s–1989", "Festivals, art-house distribution, state funding and co-production support filmmakers whose work circulates across national borders and critical institutions.", ["Explain the festival circuit as an institution.", "Relate state funding and co-production to art cinema.", "Avoid equating auteur cinema with national isolation."], ["festival circuit", "art-house", "state funding", "co-production", "auteur"]),
    ],
  },
  {
    id: "contemporary",
    number: 6,
    title: "Global and digital cinema",
    period: "1989–present",
    thesis: "Digital tools, transnational finance, new national movements, franchise economics and platform distribution reorganize both cinema's aesthetics and the institutions through which films reach audiences.",
    chapters: [
      outline("post-cold-war", 26, "Post-Cold War transnational cinema", "1989–2005", "Co-productions, migration, new funding systems and revived national industries reshape films that move between languages, countries and markets.", ["Define transnational cinema without erasing national institutions.", "Connect migration and co-production to film form.", "Map major post-1989 production shifts."], ["transnational cinema", "co-production", "diaspora", "regional fund", "world cinema"]),
      outline("digital-production", 27, "Digital production and the transformed image", "1990s–2010s", "Digital editing, digital intermediate workflows, CGI, motion capture and digital cinematography change what can be photographed, constructed and revised.", ["Distinguish major stages of digital workflow change.", "Analyze CGI as integrated production rather than a post-production add-on.", "Explain the digital intermediate's importance."], ["digital intermediate", "CGI", "motion capture", "digital cinematography", "nonlinear editing"]),
      outline("east-asian-turn", 28, "East Asian new waves and global genre cinema", "1980s–2010s", "Hong Kong, Taiwan, mainland China, South Korea and Japan become major centers of art cinema, action, horror and genre reinvention with worldwide influence.", ["Compare several East Asian industrial contexts.", "Trace genre circulation and remake cultures.", "Connect festival prestige to commercial regional markets."], ["Hong Kong New Wave", "Taiwan New Cinema", "Korean New Wave", "J-horror", "genre circulation"]),
      outline("platform-era", 29, "Franchises, streaming and platform distribution", "2000s–present", "Franchise filmmaking, global day-and-date release, streaming services and data-driven platforms alter theatrical windows, financing and audience access.", ["Explain changing release windows and distribution models.", "Distinguish franchise logic from genre alone.", "Analyze how streaming changes production and circulation."], ["franchise", "streaming", "release window", "platform", "day-and-date"]),
      outline("contemporary-forms", 30, "Contemporary forms and the unfinished present", "2000s–present", "Hybrid documentary, essay film, low-cost digital production, virtual production, expanded animation and new exhibition contexts show a medium still being redefined.", ["Analyze contemporary cinema as multiple overlapping production cultures.", "Connect low-cost tools to new authorship and distribution possibilities.", "Treat the present as historically unfinished rather than as a settled endpoint."], ["hybrid documentary", "essay film", "virtual production", "desktop cinema", "digital exhibition"]),
    ],
  },
];

export const filmHistoryBookChapters = filmHistoryBookParts.flatMap((part) => part.chapters);

export function getFilmHistoryBookChapter(chapterId: string): FilmHistoryBookChapter | undefined {
  return filmHistoryBookChapters.find((chapter) => chapter.id === chapterId);
}
