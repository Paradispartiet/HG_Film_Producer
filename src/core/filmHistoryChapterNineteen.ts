import type { FilmHistoryBookChapter, FilmHistoryBookFilmReference, FilmHistoryBookHistoricalObject, FilmHistoryBookSource, FilmHistoryBookSection } from "./filmHistoryBook.js";

/** Canonical BOOK Chapter 19: European new waves and new cinemas, 1955–1968.
 * Substantial sourced editorial draft; not independently approved, no film-specific Atlas audit yet.
 * Legacy Atlas chapter numbers must never be used to assert the canonical book's coverage.
 */
export const filmHistoryChapterNineteenSources: readonly FilmHistoryBookSource[] = [
  {
    "id": "ch19_french_bfi",
    "title": "10 great French New Wave films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-french-new-wave-films"
  },
  {
    "id": "ch19_critic",
    "title": "The Reinventions of Jean-Luc Godard",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7924-the-reinventions-of-jean-luc-godard"
  },
  {
    "id": "ch19_wave_contemporary",
    "title": "Views of the New Wave: Godard and Rohmer's first features",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/features/views-new-wave-godard-rohmers-first-features"
  },
  {
    "id": "ch19_fourhundred",
    "title": "The 400 Blows (1959)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/8803865c-9135-5c8f-b36f-6e50ffcb4873/the-400-blows"
  },
  {
    "id": "ch19_breathless",
    "title": "Breathless Then and Now",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/526-breathless-then-and-now"
  },
  {
    "id": "ch19_breathless_film",
    "title": "Breathless (1960)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/268"
  },
  {
    "id": "ch19_resnais",
    "title": "Hiroshima mon amour: Time Indefinite",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/291-hiroshima-mon-amour-time-indefinite"
  },
  {
    "id": "ch19_resnais_film",
    "title": "Hiroshima mon amour (1959)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/217"
  },
  {
    "id": "ch19_varda",
    "title": "Cléo from 5 to 7: Passionate Time",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/499"
  },
  {
    "id": "ch19_varda_women",
    "title": "A Woman's Truth",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7047-a-woman-s-truth"
  },
  {
    "id": "ch19_demy",
    "title": "The Umbrellas of Cherbourg: A Finite Forever",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/3235-the-umbrellas-of-cherbourg-a-finite-forever"
  },
  {
    "id": "ch19_demy_restore",
    "title": "Restoring The Umbrellas of Cherbourg",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/3232-restoring-the-umbrellas-of-cherbourg"
  },
  {
    "id": "ch19_rivette",
    "title": "Truffaut, Rivette, Berto",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7649-truffaut-rivette-berto"
  },
  {
    "id": "ch19_free_cinema",
    "title": "Free Cinema (3-DVD box set)",
    "publisher": "British Film Institute",
    "url": "https://shop.bfi.org.uk/free-cinema-3-dvd-box-set/"
  },
  {
    "id": "ch19_anderson",
    "title": "O Dreamlands: why Lindsay Anderson was never the realist he claimed to be",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/o-dreamlands-why-lindsay-anderson-was-never-realist-he-claimed-be"
  },
  {
    "id": "ch19_kitchen",
    "title": "Where to begin with kitchen sink drama",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-with-kitchen-sink-drama"
  },
  {
    "id": "ch19_woodfall",
    "title": "Night animals: the women of Woodfall",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/night-animals-women-woodfall"
  },
  {
    "id": "ch19_taste",
    "title": "A Taste of Honey at 60",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/taste-honey-shelagh-delaney-tony-richardson"
  },
  {
    "id": "ch19_loach",
    "title": "Where to begin with Ken Loach",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-to-begin-ken-loach"
  },
  {
    "id": "ch19_cathy",
    "title": "100 BBC TV gamechangers",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/100-bbc-tv-gamechangers"
  },
  {
    "id": "ch19_if",
    "title": "In search of the locations for Lindsay Anderson's If….",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/search-locations-lindsay-andersons-if"
  },
  {
    "id": "ch19_if_movie",
    "title": "If.... (1968)",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/film/84ab5d37-8ee8-597a-b8de-3490e4335de5/if"
  },
  {
    "id": "ch19_wajda",
    "title": "Where to begin with Andrzej Wajda",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/features/where-begin-andrzej-wajda"
  },
  {
    "id": "ch19_ashes",
    "title": "Ashes and Diamonds: What Remains",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7506-ashes-and-diamonds-what-remains"
  },
  {
    "id": "ch19_polish",
    "title": "10 great Polish films of the 1960s",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-polish-films-1960s"
  },
  {
    "id": "ch19_knife",
    "title": "Knife in the Water",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/298-knife-in-the-water"
  },
  {
    "id": "ch19_czech",
    "title": "Eclipse Series 32: Pearls of the Czech New Wave",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/2269-eclipse-series-32-pearls-of-the-czech-new-wave"
  },
  {
    "id": "ch19_slovak",
    "title": "10 great Slovak New Wave films",
    "publisher": "British Film Institute",
    "url": "https://www.bfi.org.uk/lists/10-great-slovak-new-wave-films"
  },
  {
    "id": "ch19_loves",
    "title": "Loves of a Blonde (1965)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/246-loves-of-a-blonde"
  },
  {
    "id": "ch19_daisies",
    "title": "Daisies: Giggling Generals; One and Two",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/7979-daisies-giggling-generals-one-and-two"
  },
  {
    "id": "ch19_menzel",
    "title": "Jiří Menzel obituary: the last of the Czech New Wave greats",
    "publisher": "BFI Sight and Sound",
    "url": "https://www.bfi.org.uk/sight-and-sound/news/obituaries/jiri-menzel-czech-new-wave-great"
  },
  {
    "id": "ch19_trains",
    "title": "Closely Watched Trains (1966)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/212-closely-watched-trains"
  },
  {
    "id": "ch19_shop",
    "title": "The Shop on Main Street (1965)",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/films/669-the-shop-on-main-street"
  },
  {
    "id": "ch19_shop_maker",
    "title": "The Shop on Main Street: Not the Six Million but the One",
    "publisher": "The Criterion Collection",
    "url": "https://www.criterion.com/current/posts/139-the-shop-on-main-street-not-the-six-million-but-the-one"
  }
];
export const filmHistoryChapterNineteenSections: readonly FilmHistoryBookSection[] = [
  {
    "id": "ch19_plural",
    "title": "1. New waves were not one movement with one style",
    "paragraphs": [
      "The phrase New Wave suggests a clean break: younger directors discard studios, carry lightweight cameras into streets and discover modern cinema. It describes part of the European filmmaking upheaval between the mid-1950s and the late 1960s, but it is too neat as a universal history. French filmmakers attacked established prestige production through criticism and new forms; British directors challenged the social worlds absent from mainstream drama; filmmakers in Poland and Czechoslovakia worked through shifting state institutions, memories of war and different censorship practices. Their films shared restlessness, not a single governing aesthetic.",
      "The production circumstances could be radically different. A French debut made by friends and colleagues with modest means cannot be equated with a project developed through a state-supported studio or a British television drama. Some artists embraced discontinuity, others ordinary observation, satire, fantasy or staged theatricality. A celebrated festival premiere often determined what audiences abroad called a national movement, even if the country had a thriving contemporary popular cinema not represented by that selection.",
      "An introductory film-history chapter must therefore ask practical questions. Who could obtain cameras, scripts, film stock and screening opportunities? Which critics and festivals made the works visible? How did political restrictions and the promises of public funding shape artistic freedom? The answer will be different in Paris, Salford, Warsaw, Prague and Bratislava. These variations are more historically useful than awarding every unexpected jump cut a badge of modernity."
    ],
    "sourceIds": [
      "ch19_french_bfi",
      "ch19_kitchen",
      "ch19_slovak",
      "ch19_polish"
    ]
  },
  {
    "id": "ch19_critics",
    "title": "2. Critics become filmmakers: journals, cineclubs and the auteur debate",
    "paragraphs": [
      "In France, young cinephiles learned to argue about films before they had the means to direct them. The journal Cahiers du cinéma helped consolidate a critical culture that scrutinized the director's expressive choices and challenged the cultural prestige of certain literary adaptations. François Truffaut's criticisms of the established 'Tradition of Quality' became emblematic. Yet these disputes concerned a particular industry, contemporary films and the boundaries of authorship; they were not a timeless declaration that a director alone creates every image.",
      "Godard, Chabrol, Truffaut, Rohmer and Rivette did not make identical films simply because they had shared criticism. They made different bargains with production companies and collaborators, and they responded differently to actors, locations, popular genres and historical events. BFI's contemporary reporting shows an eruption of new directors that was already difficult for critics to survey as it occurred. Retrospective histories can make this many-sided moment look much more orderly than audiences experienced.",
      "The auteur debate is most productive when it prompts a question about how a choice was made, rather than suppressing other creative workers. The work of cinematographers, editors, performers, writers and producers was crucial to making experiments technically and financially possible. FilmWork should encourage comparisons between a director's writings and a finished scene, while distinguishing a stated intention from the evidence available in the film itself."
    ],
    "sourceIds": [
      "ch19_critic",
      "ch19_wave_contemporary",
      "ch19_rivette"
    ]
  },
  {
    "id": "ch19_400",
    "title": "3. The 400 Blows (1959): childhood, institutions and an unfinished escape",
    "paragraphs": [
      "François Truffaut's The 400 Blows follows Antoine Doinel through a Paris defined as much by school discipline and family misunderstandings as by familiar landmarks. Its youthful viewpoint does not automatically make it an unmediated autobiography. Truffaut used personal experience and crafted incidents to build a character whose efforts to avoid punishment repeatedly put him at odds with adults. The film's locations and adolescent energy contributed to the international recognition of a younger French cinema at the end of the 1950s.",
      "Movement through streets gives Antoine intervals of apparent freedom, but the film also insists on institutions that classify and confine him. A classroom, police custody or a correctional setting acquires different emotional force according to how the camera shares or restricts the boy's knowledge. The ending famously resists the reassurance that escape is the same as a solved life. Its expressive uncertainty cannot be reduced to a camera technique; it derives from the ethical relationship between spectator and character.",
      "BFI places The 400 Blows alongside the wave of films appearing around 1959–1960, when distinct filmmakers attracted new attention. The film should be compared with later Truffaut work without treating his debut as an unchanging recipe. A reader can identify which events feel documentary and then ask what editing, casting and screenplay structure produced that impression. Such analysis respects both the film's historical immediacy and its deliberate artistry."
    ],
    "sourceIds": [
      "ch19_fourhundred",
      "ch19_french_bfi",
      "ch19_critic"
    ]
  },
  {
    "id": "ch19_breathless",
    "title": "4. Breathless (1960): a crime movie that exposes its own making",
    "paragraphs": [
      "Jean-Luc Godard's Breathless follows Michel, a petty criminal fascinated by American movie images, and Patricia, a young American woman in Paris. Its crime story is deliberately casual and unstable; viewers may be less sure about the characters' purposes than about their gestures, references and shifting relation to the camera. The film takes recognizable ingredients from popular American genre cinema and rearranges them into a portrait of people who seem to watch themselves perform.",
      "Jump cuts and portable location work became the shorthand for the French New Wave, but Godard's editing was not an automatic consequence of using a lightweight camera. It was an artistic solution that created compressed, unsettled time. Criterion's historical essay treats the film as an event of criticism, production and reception as well as form. Its apparent spontaneity relied on decisions by performers and the cinematographer Raoul Coutard, among others, whose labor should not disappear behind the term genius.",
      "Comparing Breathless with The 400 Blows reveals different meanings of youth and movement. Truffaut's film asks how a child's social world narrows, while Godard's draws attention to surfaces, talk, genre fantasies and spectatorship. Neither picture invented location shooting or a new grammar from nothing. Their historical importance lies partly in how earlier practices were combined, circulated and argued over by a new international audience."
    ],
    "sourceIds": [
      "ch19_breathless",
      "ch19_breathless_film",
      "ch19_wave_contemporary"
    ]
  },
  {
    "id": "ch19_hiroshima",
    "title": "5. Hiroshima mon amour (1959): memory cannot be told in one straight line",
    "paragraphs": [
      "Alain Resnais's Hiroshima mon amour arose from a plan for a film connected to the atomic bombing and became a fiction made in collaboration with writer Marguerite Duras. Its relationship between a French woman and a Japanese man opens onto war, personal memory and the difficulty of representing destruction. The film does not promise that one private romance can explain the historical catastrophe. Instead it repeatedly questions what pictures, testimony and recollection can make knowable.",
      "Resnais constructs movement between times through images, voices and sonic continuities that refuse a simple chronological account. Memories of Nevers and experiences in Hiroshima are brought into contact without becoming equivalent historical sufferings. Criterion's essay explains how rhythm, dialogue, performance and editing create a cinema in which past events interrupt the present. The film's modernism belongs as much to sound design and writing as to its visual montage.",
      "It is tempting to fold Resnais uncritically into the group around Cahiers, but his collaborative and documentary background followed a different trajectory. The comparison with Godard becomes richer when the films' distinct institutions and political questions are preserved. A responsible lesson must not treat archival footage as a magical window onto the whole past, and must not infer that the film speaks for all survivors. Its drama is partly about the limits of cinematic knowledge."
    ],
    "sourceIds": [
      "ch19_resnais",
      "ch19_resnais_film",
      "ch19_french_bfi"
    ]
  },
  {
    "id": "ch19_cleo",
    "title": "6. Cléo from 5 to 7 (1962): a woman's time in a city of spectators",
    "paragraphs": [
      "Agnès Varda's Cléo from 5 to 7 follows a singer through Paris while she awaits medical information that may alter her life. Clocks, streets, music and changing encounters give the picture a legible progression, but the film is not simply one continuous documentary shot. Varda cuts and rearranges experience, making the passage of time a structure through which her protagonist's relation to herself and others can change.",
      "The film initially places Cléo amid people who watch, style, advise and admire her. Her movement through the city eventually enables different forms of observation. She looks at strangers, hears their problems and becomes less fully contained by the image she has learned to perform for an audience. Criterion's essays emphasize the feminist questions in this structure without restricting it to one theory of liberation. Corinne Marchand's performance and Michel Legrand's music are integral creative contributions.",
      "Film History should avoid presenting Varda as an optional corrective inserted after an otherwise male movement has been explained. Her work developed through distinctive photography, documentary sensibilities and thematic interests. Comparing Cléo with The 400 Blows or Breathless reveals how a city can organize dramatic time for very different characters. The same streets do not produce the same modernism, and the actor's point of view is central to what viewers are invited to notice."
    ],
    "sourceIds": [
      "ch19_varda",
      "ch19_varda_women",
      "ch19_french_bfi"
    ]
  },
  {
    "id": "ch19_demy",
    "title": "7. The Umbrellas of Cherbourg (1964): popular melodrama is a modernist possibility",
    "paragraphs": [
      "Jacques Demy's The Umbrellas of Cherbourg tells a story of young love, separation and changed futures in a world where dialogue is sung. It uses vivid color and music as basic dramatic material, not as occasional decorative relief. The film's ordinary concerns with work, obligations and class remain present while the musical form gives them an unusual intensity. A history that defines the French New Wave exclusively through rough black-and-white street photography would have difficulty explaining this achievement.",
      "The collaboration of Demy and composer Michel Legrand shaped the film's continuous music, while costume design, locations, staging and cinematography made its color world emotionally coherent. Criterion's historical discussion explores how romantic possibility can coexist with everyday compromise. Its restoration account also makes clear that later viewing is affected by technical intervention and surviving materials. Film History must keep the version under discussion distinct from the original production circumstances.",
      "The film is an ideal comparator for Varda's Cléo because music and commercial performance matter to both works, but the connection does not erase their different strategies. Demy uses an almost entirely sung dialogue structure; Varda lets particular songs emerge within a textured city portrait. Modernism can make old genres newly expressive rather than simply reject them. We should ask what the form reveals about choices the characters cannot control."
    ],
    "sourceIds": [
      "ch19_demy",
      "ch19_demy_restore",
      "ch19_varda"
    ]
  },
  {
    "id": "ch19_other_france",
    "title": "8. Chabrol and Rivette: the French New Wave was larger than two famous debuts",
    "paragraphs": [
      "The international story of French cinema often jumps from Truffaut to Godard and leaves the impression that all other directors were supporting figures. Yet Claude Chabrol had released features before Breathless, and Jacques Rivette developed a markedly different practice of collaboration, performance and uncertainty. Their emergence makes the movement harder to describe as a single aesthetic. One filmmaker could turn toward suspense and provincial social observation while another created labyrinthine accounts of theater, community and conspiracy.",
      "Rivette's Paris Belongs to Us was filmed in the late 1950s and released in 1961, an instructive gap between production and reception. Criterion's account of Rivette and his colleagues shows how film history can mislead when it treats theatrical release order as the entire story of development. Chabrol's work similarly demonstrates that the new generation did not abandon genre narratives or commercial storytelling. Their critical positions translated into different practices, not a fixed school curriculum.",
      "The reader should track collaborations and actual production histories, then examine how each film invites or frustrates narrative certainty. An atmospheric location, an actor's hesitation and a genre expectation can be used to distinct ends. The important question is not which picture appears most revolutionary, but why its makers chose a particular way to organize knowledge and character. The New Wave is better understood as overlapping arguments than a uniform front."
    ],
    "sourceIds": [
      "ch19_rivette",
      "ch19_french_bfi",
      "ch19_critic"
    ]
  },
  {
    "id": "ch19_free",
    "title": "9. Free Cinema (1956): documentary attention before the British features",
    "paragraphs": [
      "Britain's Free Cinema screenings brought together short films at the National Film Theatre in 1956, associated with Lindsay Anderson, Karel Reisz, Tony Richardson and Lorenza Mazzetti. The work attended to ordinary public places, entertainment, work and the expressive possibilities of everyday faces. It was not a single production company or a promise that every image was unstaged. Its filmmakers claimed an independent attitude toward commissioned documentary traditions even while drawing upon available institutions and funds.",
      "BFI's account identifies the Experimental Film Fund as important for many of the shorts. Looking closely at these means of production complicates the legend of filmmakers simply taking cameras and escaping all organizational limits. Anderson's later autobiographical accounts also shaped the memory of the movement, which BFI scholarship warns against accepting without scrutiny. Political sympathy and formal ambition could coexist with stylization, selective framing and playful editing.",
      "The link from documentary shorts to feature social realism is therefore historical but not automatic. Similar people and ideas reappeared, but the screenplay, stars and theatrical distribution of later fiction films required different working relationships. Film History should show actual screenings, budgets and film institutions when the evidence exists. A choice to photograph a fairground or public gathering can be expressive without claiming that the camera captured an unaltered piece of social reality."
    ],
    "sourceIds": [
      "ch19_free_cinema",
      "ch19_anderson",
      "ch19_kitchen"
    ]
  },
  {
    "id": "ch19_saturday",
    "title": "10. Saturday Night and Sunday Morning (1960): work, leisure and a rebellious voice",
    "paragraphs": [
      "Karel Reisz's Saturday Night and Sunday Morning follows Arthur Seaton through industrial work, weekend drinking and romantic entanglements. Its working-class setting matters not as a picturesque alternative to middle-class fiction but as a system of labor, money, expectation and social surveillance. The film's central character can be attractive and destructive at the same time, resisting easy admiration. His defiance raises the question of what a young man can refuse when the structure of his working life remains largely unchanged.",
      "Location photography in and around Nottingham helps make the film's environment legible, but the social force of the story also comes from dialogue, performance and carefully chosen situations. Albert Finney's Arthur is not a transparent spokesperson for every worker. The film's women have their own needs and constraints, though their experiences can be pushed aside if analysis follows only the hero's rhetoric. BFI's history of Woodfall's women provides a necessary counterweight to accounts centered on angry young men.",
      "Compared with Free Cinema shorts, the film shows how attention to working lives could be adapted into commercial dramatic storytelling. It should also be compared with contemporary French productions without assuming similar streets imply similar politics. In one case an industrial city frames specific class divisions and gender roles; in another a mobile camera might explore the performance of selfhood. The distinctive social institutions behind each narrative deserve the same care as its style."
    ],
    "sourceIds": [
      "ch19_kitchen",
      "ch19_woodfall",
      "ch19_free_cinema"
    ]
  },
  {
    "id": "ch19_honey",
    "title": "11. A Taste of Honey (1961): the city and the people melodrama often overlooks",
    "paragraphs": [
      "Tony Richardson's A Taste of Honey, adapted from Shelagh Delaney's play, centers on a young woman's strained relation to family, pregnancy and the changing people around her. It draws much of its texture from Salford and Manchester streets, housing and waterfront environments. The work is especially valuable because its view of class is not organized exclusively around a young male rebel. Characters' vulnerabilities include gender, race and sexuality, and their relationships resist the certainty of moral sermonizing.",
      "BFI's production history emphasizes Delaney's youth and her collaboration on the film adaptation, as well as the unusual degree of location work. That gives the chapter an opportunity to discuss the responsibilities of writers and collaborators, not merely the signature of a director. The placement of actors in real spaces makes social context tangible, but the film's emotional effect is also the result of carefully shaped scenes and performances by Rita Tushingham and Dora Bryan.",
      "Comparing A Taste of Honey with Saturday Night and Sunday Morning reveals why a category such as kitchen sink realism needs internal distinctions. Both offer recognizable northern locations, yet they give different weight to friendship, motherhood, social expectations and a person's sense of belonging. The reader should examine who gets to articulate a need and whose work is treated as invisible. A location is a resource for a story, not a guarantee of social truth."
    ],
    "sourceIds": [
      "ch19_taste",
      "ch19_woodfall",
      "ch19_kitchen"
    ]
  },
  {
    "id": "ch19_cathy",
    "title": "12. Cathy Come Home (1966): television belongs in the history of new cinema",
    "paragraphs": [
      "Ken Loach's Cathy Come Home is a BBC television drama about homelessness and the vulnerability of a young family. Its public impact challenges the assumption that new film cultures mattered only on the theatrical screen. Television production brought urgent social storytelling into homes, and broadcast scheduling affected both the immediate audience and subsequent discussion. Fiction could draw on documentary conventions to make institutions such as housing services and temporary accommodation appear as active elements of a family's crisis.",
      "The film's directness is carefully produced, not identical to nonfiction footage. Editing, performance and location choices create the impression that an ordinary life is being followed without the safety net of a conventional dramatic resolution. BFI describes the program's importance to social consciousness and to the public history of homelessness, but its influence should not be confused with proof that one broadcast singlehandedly changed housing policy. Public reception is a historical question requiring evidence.",
      "Placing Cathy Come Home after the British theatrical New Wave expands what counts as an institutional pathway for new cinema. Writer, producer, director, broadcaster and audience all matter. Its relation to later Loach feature films helps explain a continuity of concern, while reminding the reader that television developed distinctive storytelling and distribution possibilities. The educational goal is to read a dramatized social problem critically rather than mistake representation for direct testimony."
    ],
    "sourceIds": [
      "ch19_loach",
      "ch19_cathy",
      "ch19_kitchen"
    ]
  },
  {
    "id": "ch19_if",
    "title": "13. If.... (1968): British rebellion becomes surreal and institutional",
    "paragraphs": [
      "Lindsay Anderson's If.... stages rebellion at an English boarding school as a collision of adolescent rage, institutional ritual and increasingly unstable fantasy. The building's corridors and ceremonies are not a neutral background; they make discipline visible as a system of space and repetition. The film's abrupt changes in tone, including its shifts between monochrome and color, frustrate an easy division between what is realistic and what is imagined. Its imaginative violence needs interpretation rather than celebration.",
      "BFI's account of the locations shows how the school environment became a major production resource. The film's relation to 1968 is important, yet it should not be treated as a literal record of a particular protest. Malcolm McDowell's performance and the film's staging render a generation's frustrations dramatically, while also showing the dangers of mistaking a charismatic rebel for a complete political argument. Anderson drew on earlier documentary interests without confining himself to observational realism.",
      "If.... makes a useful end point for the British strand because it breaks the rule that new cinema must be plainspoken kitchen sink drama. Satire, spectacle and fantasy become ways to interrogate authority. Comparing it with Cathy Come Home or Free Cinema highlights changes of genre, medium and relationship to the public. The continuity is not a style uniform; it is an insistence that British institutions could be questioned through different cinematic forms."
    ],
    "sourceIds": [
      "ch19_if",
      "ch19_if_movie",
      "ch19_anderson"
    ]
  },
  {
    "id": "ch19_ashes",
    "title": "14. Ashes and Diamonds (1958): Poland's war refuses a clean ending",
    "paragraphs": [
      "Andrzej Wajda's Ashes and Diamonds is set at the end of World War II, when competing political allegiances and memories make the promise of peace unstable. Its young protagonist Maciek moves through a country whose future cannot be settled by an individual act of courage. The film's charged hotel interiors, visual patterns and performances bring the political question close to private longing. The Polish School was shaped by a history of occupation and the conditions of making art in a state that sought to control public memory.",
      "BFI and Criterion both place the film in Wajda's sequence of war-related works while stressing its specific conflict of loyalties. The celebrated images and expressive camera work are not separate from the ethical ambiguity of the narrative. Viewers need enough historical context to distinguish the German occupation, wartime resistance, the Soviet-backed postwar order and later memories of these events. The film cannot be treated as a universally transparent tale of good rebels versus bad authorities.",
      "A useful comparison with the French New Wave shows that not every new cinema arose primarily out of disdain for a prestige film tradition. For Wajda, a recent war and the ability to represent its aftermath were essential pressures. The movie also became a major international cultural object, and critics' comparisons of its young star Zbigniew Cybulski to James Dean are worth studying as an act of reception rather than a substitute for describing his performance."
    ],
    "sourceIds": [
      "ch19_wajda",
      "ch19_ashes",
      "ch19_polish"
    ]
  },
  {
    "id": "ch19_knife",
    "title": "15. Knife in the Water (1962): Polish modernism inside a small boat",
    "paragraphs": [
      "Roman Polanski's Knife in the Water brings a married couple and a younger stranger onto a sailboat, narrowing the story to a space where social privilege, gender and rivalry become difficult to escape. The film uses apparently simple production resources to create an elaborate pattern of looks, threats and shifting physical positions. The lake setting is open, but the people are trapped by their need to perform status and control. This tension gives the picture its force beyond any summary of who is right.",
      "The camerawork and sound allow changes in dominance to occur within a scene, while the water and weather become practical hazards. Criterion's examination situates the picture within the earlier development of a Polish cinematic revolution rather than describing it as the single birth of modern Polish film. Wajda and other filmmakers had already opened difficult subjects. Polanski brought a different, compressed strategy that was internationally noticed while being controversial to domestic authorities.",
      "Comparing Knife in the Water with Ashes and Diamonds reveals different uses of national history. One explicitly stages a politically fraught moment after the war; the other turns social friction into a confined contemporary drama. Both depend on choices about actors and space, but their claims on the spectator differ. FilmWork should resist generic claims that all new cinema equals location shooting, since these locations become expressive only through the crafted relation among bodies, camera and narrative."
    ],
    "sourceIds": [
      "ch19_knife",
      "ch19_polish",
      "ch19_ashes"
    ]
  },
  {
    "id": "ch19_czechoslovak",
    "title": "16. Prague and Bratislava: the Czechoslovak New Wave was more than Czech films",
    "paragraphs": [
      "The Czechoslovak New Wave flourished in film cultures shaped by the state, studios, schools and a changing political climate. International summaries often use the shorter label Czech New Wave, but BFI's survey of Slovak cinema documents a substantial film culture connected to the Koliba Studios in Bratislava alongside productions associated with Prague's Barrandov Studios. Failing to make that distinction can erase the industrial and linguistic plurality of Czechoslovak filmmaking.",
      "The movement's approaches ranged from gently observational comedy to surreal montage and confrontations with historical atrocities. The prominence of a handful of award-winning films abroad should not lead us to describe the entire industry as one dissident movement. Directors operated within changing opportunities, restrictions and expectations about how films could address public life. Some could use humor or allegory to approach difficult questions; others built pictures from ordinary relationships or historical memory.",
      "The chapter needs therefore to include Czech and Slovak works, not simply replace a national list with a longer list of celebrated Prague directors. Film school training, script approval, studios and exhibition are relevant historical objects. Production contexts varied, and the political consequences after 1968 must be explained without treating every release from the early 1960s as a prediction of the invasion. We can understand artistic risk without turning it into a simplified heroic fable."
    ],
    "sourceIds": [
      "ch19_czech",
      "ch19_slovak",
      "ch19_menzel"
    ]
  },
  {
    "id": "ch19_loves",
    "title": "17. Loves of a Blonde (1965): a young woman learns what romance promises",
    "paragraphs": [
      "Miloš Forman's Loves of a Blonde centers on Andula, a young factory worker whose expectations of affection and freedom are shaped by work, social arrangements and a disappointing encounter with romance. The film's attention to awkward gestures and everyday talk gives its characters an apparent spontaneity, but its scenes are carefully organized around mismatched hopes. This is a social comedy with moments of pain, not a direct survey of the private lives of actual factory workers.",
      "Criterion's account places the film within the Czech New Wave while acknowledging its observant and humane form. Forman uses music, dance and community occasions to show how institutions attempt to organize personal life, often with comic and uncomfortable consequences. The film also invites viewers to ask who controls a young woman's opportunities. Andula's perspective should not be reduced to a narrative device that allows men to reveal themselves through amusing failures.",
      "The contrast with Polanski's Knife in the Water is instructive. Both films explore gendered power without the scale of a historical epic, but Forman's work gives more room to social awkwardness and the behavior of groups. Their different framing, performances and sense of humor explain why labels such as New Wave cannot do the work of close analysis. The ordinary is always being selected and shaped by a filmmaker."
    ],
    "sourceIds": [
      "ch19_loves",
      "ch19_czech",
      "ch19_slovak"
    ]
  },
  {
    "id": "ch19_daisies",
    "title": "18. Daisies (1966): Věra Chytilová turns anarchic play against conformity",
    "paragraphs": [
      "Věra Chytilová's Daisies follows two young women through a series of games, provocations and extravagant encounters that undermine narrative respectability. Its collage-like form, changing color processes and deliberately disruptive behavior refuse to reward the viewer with a neat moral lesson. The film's politics are bound to its expressive form, but this does not mean every image can be decoded into a single hidden sentence about communist rule or youthful freedom.",
      "Criterion's analysis describes Chytilová's allegorical strategies within a period of political constraint. The film's humor and formal excess challenge expectations about how young women should behave both within narrative cinema and in society. Performers are not simply symbols of an abstract revolt. Their actions create unease about appetite, waste and privilege; the film can be playful and troubling at once. Distinctive production choices in montage and sound intensify these contradictions.",
      "Placing Daisies alongside French and British New Waves makes the field less predictable. It neither follows Ozu-like restraint nor a straightforward documentary realism. A film-history article should ask which image and sound discontinuities matter, how viewers respond to contradictory actions, and which interpretive limits are imposed by historical evidence. The fact that a work resists straightforward meaning is an invitation to carefully argued readings, not permission to invent one."
    ],
    "sourceIds": [
      "ch19_daisies",
      "ch19_czech",
      "ch19_slovak"
    ]
  },
  {
    "id": "ch19_trains",
    "title": "19. Closely Watched Trains (1966): comedy and occupation on a rural station",
    "paragraphs": [
      "Jiří Menzel's Closely Watched Trains takes place at a railway station during the German occupation of Czechoslovakia. Its young railway employee is interested in romance and adult identity even as wartime institutions shape the daily life around him. The film's humor does not trivialize the occupation; it gives viewers an unstable relation to the ordinary behavior of people living under coercion. Resistance and private embarrassment coexist within a deceptively modest setting.",
      "Menzel's work drew upon Bohumil Hrabal's writing and a tradition of warm but often sharp observation. BFI's account of Menzel places him in a Czech cultural landscape different from Chytilová's formal provocations and Forman's young-adult comedy. Criterion's film edition gives the work its historical title and period. The railway setting is especially useful for showing how a confined institution can reveal an entire society through arrivals, interruptions and competing forms of authority.",
      "A comparative analysis could follow the ways movement through a limited physical space creates knowledge. The station has windows, platforms, offices and tracks whose positions matter to the action; a viewer becomes familiar with where characters can see or hide. The period context must still be preserved. A 1966 film about a wartime station is also an act of later remembrance, made under different political constraints from the ones represented in its story."
    ],
    "sourceIds": [
      "ch19_trains",
      "ch19_menzel",
      "ch19_czech"
    ]
  },
  {
    "id": "ch19_shop",
    "title": "20. The Shop on Main Street (1965): Slovak history and the danger of passive complicity",
    "paragraphs": [
      "Ján Kadár and Elmar Klos's The Shop on Main Street places a Slovak man in a position of authority over the shop of an elderly Jewish widow under the Nazi-allied wartime regime. As social pressure grows, the protagonist's evasions become a devastating portrait of how ordinary cowardice can support persecution. The film's tragicomic structure confronts viewers with a moral problem that cannot be solved by the claim that one character simply meant well.",
      "Kadár's own account, preserved by Criterion, connects the work to intimate memories of family and people affected by fascist violence. This primary testimony is essential to the film's historical context, yet it must be distinguished from the finished fiction and the contributions of Klos, writer Ladislav Grosman and the performers. Ida Kaminská's role as the widow and Jozef Kroner's conflicted protagonist give individual lives to the political situation. The use of comedy makes the later harm more distressing rather than less serious.",
      "BFI's account of Slovak cinema shows why the film should not be swallowed by a Prague-centered history. The Shop on Main Street belongs to a Czechoslovak industry but deals with a specifically Slovak wartime past. An educational article should explain the 'Aryanization' policy historically and ethically, analyze the protagonist's choices without gamifying atrocity, and ask how a story about an individual can expose an institution built around collective persecution."
    ],
    "sourceIds": [
      "ch19_shop",
      "ch19_shop_maker",
      "ch19_slovak"
    ]
  },
  {
    "id": "ch19_ending",
    "title": "21. Modern cinemas across borders: production, translation and an unfinished political decade",
    "paragraphs": [
      "European new cinemas after 1955 did not proceed along a single line from realism toward abstraction or from commercial film toward artistic independence. Resnais's essayistic treatments of memory, Chytilová's experimental montage, Demy's musical melancholy, Wajda's wartime reckonings and Loach's television social drama emerged under different financial and political conditions. Shared words such as freedom and modernism can obscure the distinct questions each work asked of viewers. What counts as new depends on institutions and historical pressures as much as image style.",
      "International reception reshaped these histories through festival selection, criticism, subtitling and restoration. A film first seen by a national audience under censorship could later become an emblem of resistance for foreign critics, while other local films remained unseen. Some movements were remembered through a tiny director-centered canon that minimized writers, women performers, Slovak studios or television work. The chapter's method is therefore to keep the social life of films in view: who made them, who saw them and why later audiences could see different versions or none at all.",
      "By 1968, political movements and state repression were changing the possibilities of filmmaking again. The next chapter will address decolonization and Third Cinema, whose anti-colonial production and distribution strategies were not merely European New Wave techniques exported elsewhere. Their histories demand attention to different political struggles and institutions. The appropriate transition is a question: how do filmmakers develop a public cinema when funding, exhibition and cultural sovereignty are themselves contested?"
    ],
    "sourceIds": [
      "ch19_french_bfi",
      "ch19_resnais",
      "ch19_slovak",
      "ch19_free_cinema",
      "ch19_wajda"
    ]
  }
];
const filmReferences: readonly FilmHistoryBookFilmReference[] = [
  {
    "title": "The 400 Blows",
    "year": 1959,
    "note": "Childhood, education and open-ended movement through Paris.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Breathless",
    "year": 1960,
    "note": "Genre reference, self-performance and expressive jump editing.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Hiroshima mon amour",
    "year": 1959,
    "note": "Memory, sound, historical representation and literary collaboration.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Cléo from 5 to 7",
    "year": 1962,
    "note": "A woman's time, city geography and the gaze.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Umbrellas of Cherbourg",
    "year": 1964,
    "note": "Sung melodrama and color as contemporary modernist form.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Paris Belongs to Us",
    "year": 1961,
    "note": "Rivette, theater, collective uncertainty and release chronology.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Saturday Night and Sunday Morning",
    "year": 1960,
    "note": "British labor, class and social realism.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "A Taste of Honey",
    "year": 1961,
    "note": "Gender and class, Salford locations and adaptation.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Cathy Come Home",
    "year": 1966,
    "note": "British broadcast drama, housing and social institutions.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "If....",
    "year": 1968,
    "note": "Surreal protest, school institutions and color/monochrome.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Ashes and Diamonds",
    "year": 1958,
    "note": "Polish postwar political memory and divided allegiances.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Knife in the Water",
    "year": 1962,
    "note": "Polish modernism, class conflict and intimate space.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Loves of a Blonde",
    "year": 1965,
    "note": "Czechoslovak studio comedy, youth and factory work.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Daisies",
    "year": 1966,
    "note": "Chytilová's disruptive montage and feminist provocation.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Closely Watched Trains",
    "year": 1966,
    "note": "Occupation memory, Czech social comedy and railway space.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Shop on Main Street",
    "year": 1965,
    "note": "Slovak Holocaust memory and ethical compromise.",
    "role": "anchor_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Room at the Top",
    "year": 1958,
    "note": "Class aspiration, cinema realism and the British new wave.",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Jules and Jim",
    "year": 1962,
    "note": "Truffaut, time and narrative mobility beyond a youthful debut.",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "Vivre sa vie",
    "year": 1962,
    "note": "Godard's tableaux, philosophical conversations and performance.",
    "role": "comparative_film",
    "atlasDecision": "P2"
  },
  {
    "title": "The Firemen's Ball",
    "year": 1967,
    "note": "Forman's social satire at the late Czechoslovak New Wave.",
    "role": "comparative_film",
    "atlasDecision": "P2"
  }
];
const historicalObjects: readonly FilmHistoryBookHistoricalObject[] = [
  {
    "label": "French cine-clubs, Cahiers du cinéma, and politique des auteurs debates",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Film festival selection, subtitling and international distribution of new cinema",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Portable cameras, film stock, post-synchronization and location permit practices",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Collaborative screenplay, music and cinematography in French new wave cinema",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "British Free Cinema screenings and BFI Experimental Film Fund",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Woodfall Films, British regional industries and theatrical labor relations",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "BBC The Wednesday Play and social television broadcast infrastructure",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Polish film schools and the state-supported national cinema",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Polish postwar memory, Stalinism and political censorship structures",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Prague Barrandov and Bratislava Koliba studio infrastructures",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Czech and Slovak-language cinema under Czechoslovakia's state institutions",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Nazi occupation, antisemitic persecution and Slovak Aryanization policy",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "1968 political movements, Warsaw Pact invasion and the changing film environment",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  },
  {
    "label": "Restoration, print variation and feminist reassessment of early New Waves",
    "note": "Historical institution, practice or political context. Do not fabricate a playable film-production scenario for this object.",
    "role": "historical_object",
    "atlasDecision": "no_production_case"
  }
];
const sourceIds = new Set(filmHistoryChapterNineteenSources.map(source => source.id));
for (const section of filmHistoryChapterNineteenSections) {
  if (section.paragraphs.length !== 3 || section.sourceIds.length < 2 || section.sourceIds.some(id => !sourceIds.has(id))) {
    throw new Error(`Chapter 19 lacks source provenance: ${section.id}`);
  }
}
if (new Set(filmHistoryChapterNineteenSections.flatMap(section => section.sourceIds)).size !== sourceIds.size) {
  throw new Error("Chapter 19 has unused sources");
}
export const filmHistoryChapterNineteen: FilmHistoryBookChapter = {
  id: "new-waves-europe",
  number: 19,
  title: "New Waves and new cinemas",
  period: "1955–1968",
  summary: "Twenty-one source-attributed essays compare France's New Wave, British Free Cinema and social realism, Poland's postwar modernisms and Czech and Slovak work within the Czechoslovak New Wave. Film schools, state institutions, television, gendered authorship, censorship and international circulation matter alongside film form. Editorial draft, awaiting independent factual and Atlas verification.",
  status: "draft",
  learningObjectives: [
    "Explain why European New Waves should be compared as distinct industrial and artistic formations rather than one style.",
    "Describe French criticism, cineclubs, auteur debates and the role of collaborators in film production.",
    "Analyze editing, voice, performance and location work in The 400 Blows, Breathless and Hiroshima mon amour.",
    "Compare Varda, Demy, Rivette and Chabrol beyond the usual two-director French canon.",
    "Trace British Free Cinema from documentary screenings to theatrical social realism without claiming a single fixed realism.",
    "Analyze women and class in A Taste of Honey alongside Saturday Night and Sunday Morning.",
    "Explain why the BBC drama Cathy Come Home belongs in histories of new film and public cultures.",
    "Relate Polish cinematic transformations to the memory of war, political conditions and the specific films of Wajda and Polanski.",
    "Recognize Czech and Slovak production centers and avoid using Czech as shorthand for Czechoslovak film culture.",
    "Compare Forman, Chytilová, Menzel and Kadár/Klos through satire, historical memory and formal choices.",
    "Distinguish national reception and contemporary production from international canon, festival selection and later restoration.",
    "Connect the new cinemas of 1968 to changing political circumstances without turning them into a deterministic prehistory of Third Cinema."
  ],
  keyTerms: ["French New Wave","Cahiers du cinéma","politique des auteurs","cineclub","festival circuit","jump cut","location shooting","left bank","film essay","Free Cinema","British New Wave","kitchen sink drama","Woodfall","The Wednesday Play","Polish School","state production","postwar memory","censorship","Czechoslovak New Wave","Barrandov","Koliba","Slovak cinema","allegory","montage","restoration","modernism","feminist film","television drama","subtitling","decolonization"],
  sections: filmHistoryChapterNineteenSections,
  filmReferences,
  historicalObjects,
  sources: filmHistoryChapterNineteenSources,
};
