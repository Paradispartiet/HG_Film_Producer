export type HistoricalFilmScenario = {
  readonly id: string;
  readonly status: string;
  readonly source: {
    readonly list_id: string;
    readonly position: number;
    readonly imdb_id: string;
    readonly url: string;
  };
  readonly film: {
    readonly title: string;
    readonly original_title: string;
    readonly year: number;
    readonly title_type: string;
    readonly runtime_mins: number;
    readonly directors: readonly string[];
    readonly genres: readonly string[];
    readonly genre_keys: readonly string[];
    readonly imdb_rating: number;
    readonly user_rating: number;
  };
  readonly scenario_type: string;
  readonly production_challenge: string;
  readonly required_choices_seed: Record<string, readonly string[]>;
  readonly phases: readonly {
    readonly id: string;
    readonly label: string;
    readonly player_task: string;
  }[];
  readonly learning_goals_seed: readonly string[];
  readonly manual_enrichment_needed: readonly string[];
};

export type EarlyCinemaExpansionDefinition = {
  readonly id: string;
  readonly title: string;
  readonly originalTitle: string;
  readonly aliases?: readonly string[];
  readonly year: number;
  readonly directors: readonly string[];
  readonly genres: readonly string[];
  readonly tradition: string;
  readonly tone: string;
  readonly premise: string;
  readonly screenplay: string;
  readonly image: string;
  readonly editing: string;
  readonly sound: string;
  readonly learning: string;
};

export const earlyCinemaExpansionDefinitions = [
  {
    id: "scenario_a_trip_to_the_moon_1902", title: "A Trip to the Moon", originalTitle: "Le voyage dans la lune", year: 1902,
    directors: ["Georges Méliès"], genres: ["Adventure", "Fantasy", "Sci-Fi"], tradition: "Early trick film and theatrical screen fantasy", tone: "Playful, artificial and spectacular",
    premise: "Build a short fantasy voyage where theatrical tableaux and handmade illusion turn a scientific expedition into spectacle.", screenplay: "Organize the journey as a chain of clear visual attractions rather than psychological realism.", image: "Use painted scenery, frontal staging, substitution effects and layered handmade imagery.", editing: "Cut between self-contained tableaux and let transformations provide the principal transitions.", sound: "Treat accompaniment and effects as support for visual rhythm while keeping the silent-era image primary.", learning: "Understand how early cinema joined theatre, magic and editing into screen fantasy."
  },
  {
    id: "scenario_the_cabinet_of_dr_caligari_1920", title: "The Cabinet of Dr. Caligari", originalTitle: "Das Cabinet des Dr. Caligari", year: 1920,
    directors: ["Robert Wiene"], genres: ["Horror", "Mystery", "Thriller"], tradition: "German Expressionist studio cinema", tone: "Distorted, theatrical and psychologically unstable",
    premise: "Construct a nightmare mystery where the designed world expresses fear, authority and unreliable perception.", screenplay: "Frame the mystery through testimony and uncertainty so the world itself appears suspect.", image: "Build painted angular sets, graphic shadows and stylized blocking instead of naturalistic space.", editing: "Preserve the tension between framed narration and the events it claims to explain.", sound: "Use score and silence to intensify the artificial visual world without naturalizing it.", learning: "Connect Expressionist production design to subjective storytelling and later horror imagery."
  },
  {
    id: "scenario_nosferatu_1922", title: "Nosferatu", originalTitle: "Nosferatu, eine Symphonie des Grauens", year: 1922,
    directors: ["F. W. Murnau"], genres: ["Fantasy", "Horror"], tradition: "German silent horror and location Expressionism", tone: "Uncanny, fatalistic and plague-haunted",
    premise: "Stage a vampire tale where real landscapes, distorted movement and shadow make supernatural infection feel physically present.", screenplay: "Build dread through travel, arrival and spreading consequence rather than constant confrontation.", image: "Combine location photography, stark silhouettes, negative imagery and unnatural movement.", editing: "Use parallel action and visual motifs to connect the vampire, the voyage and the threatened town.", sound: "Let musical accompaniment carry recurring dread while the silent image controls revelation.", learning: "See how silent horror can merge real locations with Expressionist threat."
  },
  {
    id: "scenario_battleship_potemkin_1925", title: "Battleship Potemkin", originalTitle: "Bronenosets Potemkin", year: 1925,
    directors: ["Sergei Eisenstein"], genres: ["Drama", "History"], tradition: "Soviet montage cinema", tone: "Collective, escalating and revolutionary",
    premise: "Build a historical uprising through collective action, repeated images and collision between shots.", screenplay: "Organize the film in movements where social pressure turns isolated grievance into mass action.", image: "Compose bodies, machines, crowds and symbols as graphic units designed for juxtaposition.", editing: "Use rhythmic montage, repetition and conflicting angles to create meaning beyond continuous space.", sound: "Treat musical rhythm as a partner to montage rather than naturalistic scene ambience.", learning: "Understand montage as a system for producing emotion, argument and collective scale."
  },
  {
    id: "scenario_the_general_1926", title: "The General", originalTitle: "The General", year: 1926,
    directors: ["Clyde Bruckman", "Buster Keaton"], genres: ["Action", "Adventure", "Comedy"], tradition: "Silent physical comedy and practical action", tone: "Dry, precise and mechanically escalating",
    premise: "Design a pursuit comedy where character intention, railway geography and real stunts remain readable at every step.", screenplay: "Escalate one practical objective through obstacles whose solutions create the next problem.", image: "Frame full-body performance, locomotives and landscape so action mechanics stay visible.", editing: "Cut for spatial clarity and causal payoff rather than hiding stunt construction.", sound: "Use accompaniment to support pace while leaving physical action and visual timing in control.", learning: "Connect practical stunt planning, geography and comic timing."
  },
  {
    id: "scenario_metropolis_1927", title: "Metropolis", originalTitle: "Metropolis", year: 1927,
    directors: ["Fritz Lang"], genres: ["Drama", "Sci-Fi"], tradition: "German Expressionist science fiction spectacle", tone: "Monumental, mechanized and mythic",
    premise: "Construct a divided future city where architecture, crowds, machines and effects embody social hierarchy.", screenplay: "Turn class conflict into large visual set pieces linked by a clear mythic structure.", image: "Coordinate monumental sets, miniatures, multiple exposure, graphic lighting and mass choreography.", editing: "Cross-cut social worlds and accelerate machinery, revolt and rescue into synchronized spectacle.", sound: "Use orchestral scale and mechanical rhythm to bind the city into one audiovisual system.", learning: "Understand how production design and effects can make social structure visible."
  },
  {
    id: "scenario_the_passion_of_joan_of_arc_1928", title: "The Passion of Joan of Arc", originalTitle: "La passion de Jeanne d'Arc", year: 1928,
    directors: ["Carl Theodor Dreyer"], genres: ["Biography", "Drama", "History"], tradition: "European silent modernism and performance cinema", tone: "Austere, intimate and spiritually intense",
    premise: "Stage a historical trial through faces, fragments and severe space rather than conventional pageantry.", screenplay: "Condense the historical record into a concentrated progression of interrogation and resistance.", image: "Use extreme close-ups, sparse sets, unusual angles and exposed facial detail.", editing: "Build pressure through discontinuous eyelines, facial contrasts and repeated interrogative rhythm.", sound: "Keep any accompaniment subordinate to the visual confrontation between faces.", learning: "Study how framing and editing can turn performance into the entire dramatic landscape."
  },
  {
    id: "scenario_man_with_a_movie_camera_1929", title: "Man with a Movie Camera", originalTitle: "Chelovek s kino-apparatom", aliases: ["The Man with a Movie Camera"], year: 1929,
    directors: ["Dziga Vertov"], genres: ["Documentary"], tradition: "Soviet city symphony and reflexive documentary", tone: "Energetic, analytical and self-revealing",
    premise: "Make a city film that records daily life while openly showing the camera, editor and construction of cinema.", screenplay: "Replace fictional plot with a structured day and a progression through work, leisure and filmmaking.", image: "Use mobile observation, unusual vantage points, split screens, superimposition and visible apparatus.", editing: "Create argument and momentum through association, acceleration, repetition and self-reflexive montage.", sound: "Use musical structure to organize silent documentary rhythms rather than imitate synchronized reality.", learning: "Understand documentary as both observation and constructed cinematic argument."
  },

  {
    id: "scenario_m_1931", title: "M", originalTitle: "M", aliases: ["M - Eine Stadt sucht einen Mörder"], year: 1931,
    directors: ["Fritz Lang"], genres: ["Crime", "Mystery", "Thriller"], tradition: "Early sound crime cinema and urban modernism", tone: "Procedural, anxious and morally unstable",
    premise: "Build a citywide hunt where sound, absence and parallel institutions make fear spread through everyday space.", screenplay: "Interweave police, criminal networks and public panic around one unseen threat.", image: "Use urban geometry, crowds, empty spaces and visual procedure rather than constant spectacle.", editing: "Cross-cut competing investigations and connect scenes through ideas as well as location.", sound: "Make a recurring whistle, offscreen sound and strategic silence carry identification and dread.", learning: "Study how early sound can create space and narrative information beyond the frame."
  },
  {
    id: "scenario_city_lights_1931", title: "City Lights", originalTitle: "City Lights", year: 1931,
    directors: ["Charles Chaplin"], genres: ["Comedy", "Drama", "Romance"], tradition: "Late silent comedy in the sound era", tone: "Tender, precise and socially comic",
    premise: "Tell a romantic city story through pantomime, visual misunderstanding and emotional restraint after synchronized dialogue had become standard.", screenplay: "Build comedy and pathos from clear physical objectives, mistaken identity and recurring encounters.", image: "Frame gesture and spatial relations so emotion and jokes remain legible without dialogue.", editing: "Hold actions long enough for setup, recognition and payoff while protecting performance rhythm.", sound: "Use composed music and selective effects while deliberately refusing conventional spoken dialogue.", learning: "Understand how silent visual storytelling survived and evolved inside the sound era."
  },
  {
    id: "scenario_frankenstein_1931", title: "Frankenstein", originalTitle: "Frankenstein", year: 1931,
    directors: ["James Whale"], genres: ["Drama", "Horror", "Sci-Fi"], tradition: "Universal studio horror", tone: "Gothic, tragic and electrically theatrical",
    premise: "Construct a studio horror world where laboratory design, makeup, performance and sound make creation both spectacle and tragedy.", screenplay: "Balance scientific transgression, public fear and the creature's limited understanding.", image: "Use monumental laboratory sets, angled light, smoke, machinery and iconic makeup.", editing: "Move from controlled experiment to escalating social consequence with clear suspense beats.", sound: "Build atmosphere from machinery, electrical effects, voices and strategic musical restraint.", learning: "Connect studio departments to the creation of a durable horror character and world."
  },
  {
    id: "scenario_king_kong_1933", title: "King Kong", originalTitle: "King Kong", year: 1933,
    directors: ["Merian C. Cooper", "Ernest B. Schoedsack"], genres: ["Adventure", "Fantasy", "Horror"], tradition: "Early sound-era effects spectacle", tone: "Pulp, awe-filled and tragic",
    premise: "Build an adventure spectacle where live action, miniature environments, stop-motion performance and sound share one dramatic world.", screenplay: "Escalate discovery, capture and urban catastrophe while preserving an emotional line for the creature.", image: "Integrate stop motion, rear projection, miniatures, matte work and full-scale elements.", editing: "Cut between effects scales and live-action reactions so geography and threat remain coherent.", sound: "Use creature vocalization, effects and orchestral scoring to give animated imagery weight and personality.", learning: "Understand effects integration as performance, design, photography, editing and sound working together."
  },
  {
    id: "scenario_modern_times_1936", title: "Modern Times", originalTitle: "Modern Times", year: 1936,
    directors: ["Charles Chaplin"], genres: ["Comedy", "Drama", "Romance"], tradition: "Silent comedy confronting industrial sound", tone: "Mechanical, humane and satirical",
    premise: "Turn factory discipline and economic insecurity into physical comedy while selectively using the technologies of sound film.", screenplay: "Link episodic jobs and social setbacks through one character's repeated struggle for dignity.", image: "Stage bodies against machines, assembly lines and institutional spaces with full-action clarity.", editing: "Match comic rhythm to mechanical repetition, interruption and escalating malfunction.", sound: "Reserve intelligible speech for machines and mediated authority while music and effects support pantomime.", learning: "Study how formal resistance to dialogue can become part of a film's social argument."
  },
  {
    id: "scenario_snow_white_and_the_seven_dwarfs_1937", title: "Snow White and the Seven Dwarfs", originalTitle: "Snow White and the Seven Dwarfs", year: 1937,
    directors: ["David Hand"], genres: ["Animation", "Family", "Fantasy", "Musical"], tradition: "Classical studio feature animation", tone: "Storybook, musical and emotionally direct",
    premise: "Build a feature-length animated fairy tale where character animation, color, music and effects sustain emotional continuity.", screenplay: "Organize songs, comedy, danger and character transformation into a clear feature arc.", image: "Coordinate character design, painted backgrounds, multiplane depth, color and effects animation.", editing: "Use scene rhythm, musical phrasing and visual continuity to unify work created across many departments.", sound: "Integrate voices, songs, score and effects from the start of production rather than as decoration.", learning: "Understand animation as an industrial pipeline joining drawing, design, performance, camera and sound."
  },
  {
    id: "scenario_the_rules_of_the_game_1939", title: "The Rules of the Game", originalTitle: "La règle du jeu", year: 1939,
    directors: ["Jean Renoir"], genres: ["Comedy", "Drama"], tradition: "French poetic realism and ensemble staging", tone: "Elegant, mobile and socially corrosive",
    premise: "Stage a country-house society where several relationships and class rules unfold simultaneously within shared spaces.", screenplay: "Build an ensemble web in which comedy, desire and social cruelty continually intersect.", image: "Use deep staging, mobile camera work, doors and layered rooms to keep multiple actions alive.", editing: "Preserve ensemble geography while shifting attention between parallel emotional and comic beats.", sound: "Layer dialogue, music and offscreen activity so the house feels socially crowded.", learning: "Study how mise-en-scène can organize an ensemble without reducing scenes to isolated close-ups."
  },
  {
    id: "scenario_stagecoach_1939", title: "Stagecoach", originalTitle: "Stagecoach", year: 1939,
    directors: ["John Ford"], genres: ["Adventure", "Drama", "Western"], tradition: "Classical Hollywood western and location action", tone: "Expansive, tense and character-driven",
    premise: "Carry a mixed ensemble through dangerous territory while balancing confined character conflict with large-scale exterior action.", screenplay: "Use the journey to expose social hierarchy, alliance and changing judgment within the group.", image: "Contrast the compressed coach interior with monumental landscape and readable action geography.", editing: "Cross-cut pursuit, passengers and obstacles while maintaining direction and spatial clarity.", sound: "Use hoofbeats, wheels, gunfire, dialogue and score to shift between intimacy and pursuit.", learning: "Connect genre storytelling, ensemble structure, landscape and classical action continuity."
  },
  {
    id: "scenario_the_wizard_of_oz_1939", title: "The Wizard of Oz", originalTitle: "The Wizard of Oz", year: 1939,
    directors: ["Victor Fleming"], genres: ["Adventure", "Family", "Fantasy", "Musical"], tradition: "Classical Hollywood Technicolor musical fantasy", tone: "Colorful, theatrical and emotionally clear",
    premise: "Create a studio fantasy where a change of visual world, musical storytelling and handcrafted departments make the journey tangible.", screenplay: "Build an episodic quest around repeated needs, companions and a return-home structure.", image: "Coordinate black-and-white framing, Technicolor design, sets, costumes, makeup and practical effects.", editing: "Move cleanly between musical numbers, encounters and escalating obstacles while preserving storybook momentum.", sound: "Integrate songs, dialogue, character motifs, orchestral score and effects as one narrative system.", learning: "Understand the classical studio as coordinated color, design, performance, music and effects production."
  },

  {
    id: "scenario_citizen_kane_1941", title: "Citizen Kane", originalTitle: "Citizen Kane", year: 1941,
    directors: ["Orson Welles"], genres: ["Drama", "Mystery"], tradition: "Classical Hollywood experimentation and modernist biography", tone: "Investigative, monumental and ambiguous",
    premise: "Construct a life through conflicting witnesses, expressive spaces and audiovisual transitions that never fully solve the central person.", screenplay: "Organize biography as nonlinear testimony whose accounts overlap, contradict and leave gaps.", image: "Use deep-focus staging, low angles, ceilings, miniatures, optical work and expressive lighting.", editing: "Move across decades through graphic, sound and conceptual transitions while preserving the investigative frame.", sound: "Use overlapping dialogue, acoustic perspective, radio-derived montage and musical motifs structurally.", learning: "Study how screenplay, image, editing and sound can jointly destabilize a classical biography."
  },
  {
    id: "scenario_the_maltese_falcon_1941", title: "The Maltese Falcon", originalTitle: "The Maltese Falcon", year: 1941,
    directors: ["John Huston"], genres: ["Crime", "Mystery", "Thriller"], tradition: "Early American film noir and detective adaptation", tone: "Hard-boiled, contained and suspicious",
    premise: "Stage a detective story where talk, objects, entrances and shifting alliances create danger inside controlled interiors.", screenplay: "Preserve hard-boiled dialogue while clarifying pursuit, deception and changing leverage.", image: "Use low-key interiors, layered blocking and object-centered compositions to make suspicion visible.", editing: "Cut around verbal reversals and reaction shifts without losing the chain of investigation.", sound: "Let dialogue lead while footsteps, doors, phones and restrained score sharpen threat.", learning: "Connect literary adaptation, performance and studio staging to early noir form."
  },
  {
    id: "scenario_casablanca_1942", title: "Casablanca", originalTitle: "Casablanca", year: 1942,
    directors: ["Michael Curtiz"], genres: ["Drama", "Romance", "War"], tradition: "Classical Hollywood studio melodrama", tone: "Romantic, politically pressured and bittersweet",
    premise: "Build a wartime crossroads where private love, public duty and a multinational ensemble converge inside one studio-created city.", screenplay: "Balance romance, political stakes, recurring characters and delayed backstory within a clear choice structure.", image: "Use studio atmosphere, controlled lighting, crowds and intimate close-ups to make Rick's café a complete world.", editing: "Maintain classical continuity while timing revelations, entrances and emotional reversals precisely.", sound: "Use multilingual dialogue, crowd texture, source music and recurring song memory as dramatic structure.", learning: "Study how the studio system coordinates writing, stars, sets, lighting, editing and music."
  },
  {
    id: "scenario_double_indemnity_1944", title: "Double Indemnity", originalTitle: "Double Indemnity", year: 1944,
    directors: ["Billy Wilder"], genres: ["Crime", "Drama", "Thriller"], tradition: "American film noir and fatalistic crime narration", tone: "Cynical, intimate and doomed",
    premise: "Build a crime story whose confession structure makes desire, planning and inevitable exposure unfold together.", screenplay: "Use retrospective narration, sharp dialogue and procedural detail to bind romance to self-destruction.", image: "Create low-key interiors, venetian-blind patterns, night streets and compressed domestic danger.", editing: "Let the known outcome intensify each step of the plan rather than remove suspense.", sound: "Use voice-over, verbal rhythm, office ambience and score to sustain fatalism.", learning: "Understand how noir joins narration, lighting, performance and plot mechanics."
  },
  {
    id: "scenario_brief_encounter_1945", title: "Brief Encounter", originalTitle: "Brief Encounter", year: 1945,
    directors: ["David Lean"], genres: ["Drama", "Romance"], tradition: "British wartime and postwar romantic melodrama", tone: "Restrained, intimate and morally conflicted",
    premise: "Build an impossible romance through repeated meetings, ordinary public space and an inner voice that cannot become public action.", screenplay: "Structure the relationship through returns to the station and the pressure of domestic responsibility.", image: "Use railway architecture, steam, reflections and close observation to externalize private emotion.", editing: "Shape memory, repetition and interrupted encounters around the framing confession.", sound: "Combine train noise, station announcements, interior voice-over and recurring music.", learning: "Study how repetition, place and sound can carry restrained melodrama."
  },
  {
    id: "scenario_the_lost_weekend_1945", title: "The Lost Weekend", originalTitle: "The Lost Weekend", year: 1945,
    directors: ["Billy Wilder"], genres: ["Drama", "Film-Noir"], tradition: "Postwar social-problem drama with noir expression", tone: "Claustrophobic, subjective and unsparing",
    premise: "Follow an alcoholic writer through a compressed urban descent where ordinary objects and spaces become instruments of obsession.", screenplay: "Build the weekend as escalating relapse, concealment and consequence rather than moral lecture.", image: "Use noir lighting, distorted subjective imagery and city locations to make addiction spatial.", editing: "Compress time around craving, search and breakdown while preserving the cycle of attempted control.", sound: "Use internal pressure, urban noise and expressive score to intensify subjective distress.", learning: "Connect social-problem storytelling to noir technique and subjective sound-image design."
  },
  {
    id: "scenario_rome_open_city_1945", title: "Rome, Open City", originalTitle: "Roma città aperta", aliases: ["Roma, Open City"], year: 1945,
    directors: ["Roberto Rossellini"], genres: ["Drama", "War"], tradition: "Italian neorealism emerging from wartime production", tone: "Urgent, communal and tragic",
    premise: "Reconstruct occupation and resistance through streets, ordinary interiors and a community under immediate pressure.", screenplay: "Interweave several lives so political violence is experienced through domestic and neighborhood stakes.", image: "Use Rome locations, available environments and uneven production resources as historical texture.", editing: "Move between resistance procedure, family life and sudden violence without polishing away urgency.", sound: "Let dialogue, streets, crowds and sparse music support a raw postwar immediacy.", learning: "Understand how material production conditions can become a new realist film language."
  },
  {
    id: "scenario_out_of_the_past_1947", title: "Out of the Past", originalTitle: "Out of the Past", year: 1947,
    directors: ["Jacques Tourneur"], genres: ["Crime", "Film-Noir", "Thriller"], tradition: "Classical American film noir", tone: "Fatalistic, shadowed and deceptive",
    premise: "Build a past-tense trap where memory, romance and criminal obligation pull a man back into a system he cannot escape.", screenplay: "Use flashback and layered deception to make information arrive as both explanation and danger.", image: "Contrast bright exteriors with low-key interiors while sustaining noir compositions and faces.", editing: "Shift between present and remembered past with clarity while tightening the sense of inevitability.", sound: "Use restrained score, dialogue and environmental quiet to keep menace beneath apparent calm.", learning: "Compare noir fatalism across narration, lighting, landscape and temporal structure."
  },
  {
    id: "scenario_gategutter_1949", title: "Gategutter", originalTitle: "Gategutter", year: 1949,
    directors: ["Arne Skouen"], genres: ["Drama"], tradition: "Norwegian postwar urban social cinema", tone: "Direct, youthful and socially grounded",
    premise: "Build a postwar city drama around boys, neighborhood pressure and institutions competing to define their future.", screenplay: "Let group dynamics and concrete social conditions drive conflict rather than abstract moralizing.", image: "Use Oslo streets and lived urban environments to root the story in recognizable place.", editing: "Balance ensemble episodes with a clear progression of consequence and possible change.", sound: "Use voices, street texture and restrained music to preserve social immediacy.", learning: "Place Norwegian postwar youth cinema beside European location realism."
  },
  {
    id: "scenario_the_third_man_1949", title: "The Third Man", originalTitle: "The Third Man", year: 1949,
    directors: ["Carol Reed"], genres: ["Film-Noir", "Mystery", "Thriller"], tradition: "British postwar noir in occupied Vienna", tone: "Oblique, ironic and morally ruined",
    premise: "Turn a divided city into a mystery where friendship, black-market survival and political occupation destabilize every encounter.", screenplay: "Reveal the absent central figure gradually through testimony, contradiction and pursuit.", image: "Use Vienna locations, canted frames, wet streets, ruins and deep shadow as active narrative forces.", editing: "Control delayed revelation and chase geography while allowing the city to interrupt the investigation.", sound: "Use the distinctive zither score, footsteps, echoes and multilingual city texture against noir expectation.", learning: "Study how location, postwar history and unconventional music can remake noir."
  },

  {
    id: "scenario_rashomon_1950", title: "Rashomon", originalTitle: "Rashōmon", aliases: ["Rashomon"], year: 1950,
    directors: ["Akira Kurosawa"], genres: ["Crime", "Drama", "Mystery"], tradition: "Postwar Japanese modernism and subjective narration", tone: "Elemental, contradictory and morally uncertain",
    premise: "Restage one violent event through incompatible accounts so performance, camera and editing expose the instability of testimony.", screenplay: "Use repeated narration to reveal motive and self-image rather than settle a single objective truth.", image: "Contrast forest movement, direct sunlight, rain and theatrical court testimony.", editing: "Repeat actions with altered emphasis and rhythm so each version becomes a distinct construction.", sound: "Use narration, environmental force, silence and score to separate testimony from present-time reflection.", learning: "Understand repetition as a tool for comparing perspective, performance and truth claims."
  },
  {
    id: "scenario_tokyo_story_1953", title: "Tokyo Story", originalTitle: "Tōkyō monogatari", aliases: ["Tokyo Monogatari"], year: 1953,
    directors: ["Yasujirō Ozu"], genres: ["Drama"], tradition: "Japanese domestic drama and Ozu's mature style", tone: "Quiet, observant and emotionally restrained",
    premise: "Build a family visit from ordinary rooms, pauses and small failures of attention rather than conventional dramatic escalation.", screenplay: "Let generational distance emerge through routine encounters, absences and what remains unsaid.", image: "Use low fixed camera positions, frontal rooms, precise objects and transitional city images.", editing: "Cut by spatial and emotional rhythm rather than strict continuity or dramatic emphasis.", sound: "Let domestic ambience, trains, city texture and restrained music carry time passing.", learning: "Study how a consistent camera and editing grammar can make ordinary life historically and emotionally precise."
  },
  {
    id: "scenario_la_strada_1954", title: "La Strada", originalTitle: "La strada", year: 1954,
    directors: ["Federico Fellini"], genres: ["Drama"], tradition: "Italian post-neorealism and poetic road cinema", tone: "Carnivalesque, lonely and tragic",
    premise: "Follow travelling performers through a sparse road story where physical performance and recurring music carry emotional transformation.", screenplay: "Build the relationship through repeated acts, departures and encounters rather than dense plotting.", image: "Use roads, coastlines, performance spaces and expressive faces to join realism with fable.", editing: "Let episodic travel accumulate emotional consequence around recurring motifs.", sound: "Make the central musical theme, circus sound and open landscapes part of character memory.", learning: "Trace the movement from neorealist environments toward Fellini's poetic performance cinema."
  },
  {
    id: "scenario_seven_samurai_1954", title: "Seven Samurai", originalTitle: "Shichinin no samurai", year: 1954,
    directors: ["Akira Kurosawa"], genres: ["Action", "Drama"], tradition: "Japanese period action and ensemble epic", tone: "Human, strategic and physically dynamic",
    premise: "Build a defense story where recruitment, training, geography, weather and group character make action understandable.", screenplay: "Give each phase of preparation and battle a clear objective while developing a large ensemble.", image: "Use multiple cameras, long lenses, weather, movement and mapped village geography.", editing: "Cross-cut tactical positions and reactions while retaining direction, stakes and emotional consequence.", sound: "Layer rain, horses, weapons, voices and score to distinguish preparation, chaos and aftermath.", learning: "Connect ensemble writing and spatial planning to modern action clarity."
  },
  {
    id: "scenario_pather_panchali_1955", title: "Pather Panchali", originalTitle: "Pather Panchali", year: 1955,
    directors: ["Satyajit Ray"], genres: ["Drama"], tradition: "Indian parallel cinema and location humanism", tone: "Observant, lyrical and materially grounded",
    premise: "Build a rural family story from seasons, labor, childhood discovery and economic pressure rather than melodramatic plotting.", screenplay: "Let episodes of daily life accumulate into a clear emotional and material trajectory.", image: "Use real environments, natural detail, faces and landscape as the story's living structure.", editing: "Balance patient observation with lyrical associations and decisive changes in family circumstance.", sound: "Join environmental sound and Ravi Shankar's music without overwhelming ordinary life.", learning: "Understand how low-resource location production can create expansive humanist cinema."
  },
  {
    id: "scenario_the_night_of_the_hunter_1955", title: "The Night of the Hunter", originalTitle: "The Night of the Hunter", year: 1955,
    directors: ["Charles Laughton"], genres: ["Crime", "Drama", "Film-Noir"], tradition: "American Expressionist fairy-tale noir", tone: "Biblical, dreamlike and menacing",
    premise: "Turn a child pursuit story into a visual fable where stylized spaces and performance separate innocence from predatory authority.", screenplay: "Shift the point of view toward children and structure danger through repeated pursuit and refuge.", image: "Use high-contrast silhouettes, studio landscapes, forced perspective and storybook compositions.", editing: "Move between threat and lyrical escape without flattening the film into one realistic mode.", sound: "Use hymns, recurring singing, night ambience and score as signals of approaching danger.", learning: "Study how Expressionist design can survive inside American genre storytelling."
  },
  {
    id: "scenario_the_seventh_seal_1957", title: "The Seventh Seal", originalTitle: "Det sjunde inseglet", year: 1957,
    directors: ["Ingmar Bergman"], genres: ["Drama", "Fantasy"], tradition: "Postwar Scandinavian art cinema and allegory", tone: "Severe, theatrical and existential",
    premise: "Stage an allegorical journey where plague, faith, performance and a chess game turn philosophical conflict into visible action.", screenplay: "Move between intimate debate, travelling performers and social catastrophe within a clear pilgrimage structure.", image: "Use stark black-and-white landscapes, iconic silhouettes and theatrical grouping.", editing: "Alternate philosophical confrontation with episodic encounters and moments of ordinary tenderness.", sound: "Use silence, wind, ritual, music and direct dialogue to hold both allegory and physical world.", learning: "Connect Scandinavian art cinema, theatre and symbolic visual storytelling."
  },
  {
    id: "scenario_fjols_til_fjells_1957", title: "Fjols til fjells", originalTitle: "Fjols til fjells", year: 1957,
    directors: ["Edith Carlmar"], genres: ["Comedy"], tradition: "Norwegian popular studio-location comedy", tone: "Fast, accessible and farcical",
    premise: "Build a mountain-hotel farce where mistaken identity, service routines and repeated entrances drive escalating confusion.", screenplay: "Coordinate misunderstandings and reversals so each attempt to restore order creates a new problem.", image: "Use hotel geography, winter exteriors and ensemble blocking to keep identities and movement readable.", editing: "Cut on entrances, discoveries and reaction timing while preserving the farce's spatial map.", sound: "Let dialogue rhythm, doors, telephones, music and hotel bustle support comic timing.", learning: "Place Norwegian popular comedy inside production craft rather than treating it as a minor historical footnote."
  },
  {
    id: "scenario_de_dodes_tjern_1958", title: "De dødes tjern", originalTitle: "De dødes tjern", aliases: ["Lake of the Dead"], year: 1958,
    directors: ["Kåre Bergstrøm"], genres: ["Horror", "Mystery", "Thriller"], tradition: "Norwegian psychological horror and literary adaptation", tone: "Forested, uncanny and psychologically uncertain",
    premise: "Build a cabin mystery where landscape, legend and unstable interpretation make natural space feel threatening.", screenplay: "Distribute suspicion across an ensemble and delay whether events require supernatural or psychological explanation.", image: "Use forest, water, cabin interiors and black-and-white contrast as recurring sources of dread.", editing: "Control subjective memory, investigation and revelation without resolving uncertainty too early.", sound: "Use water, forest ambience, silence, voices and restrained music to make absence active.", learning: "Study how Norwegian landscape and literary mystery can produce a distinct horror system."
  },
  {
    id: "scenario_touch_of_evil_1958", title: "Touch of Evil", originalTitle: "Touch of Evil", year: 1958,
    directors: ["Orson Welles"], genres: ["Crime", "Film-Noir", "Thriller"], tradition: "Late classical noir and border modernism", tone: "Baroque, corrupt and spatially unstable",
    premise: "Stage a border investigation where moving camera, layered sound and institutional corruption contaminate every location.", screenplay: "Interlock competing investigators, prejudice and planted evidence around a compressed crisis.", image: "Use wide-angle lenses, long takes, deep staging, night locations and expressive low angles.", editing: "Balance extended moving shots with fractured suspense and parallel threats.", sound: "Layer source music, street noise, dialogue and acoustic transitions across connected spaces.", learning: "Understand how camera movement and sound can turn noir space into a continuous system."
  },
  {
    id: "scenario_hiroshima_mon_amour_1959", title: "Hiroshima mon amour", originalTitle: "Hiroshima mon amour", year: 1959,
    directors: ["Alain Resnais"], genres: ["Drama", "Romance"], tradition: "French Left Bank modernism and memory cinema", tone: "Fragmented, intimate and historically haunted",
    premise: "Build a brief encounter where personal memory and historical catastrophe remain inseparable but never equivalent.", screenplay: "Interweave present dialogue, remembered images and contested knowledge rather than linear exposition.", image: "Contrast bodies, reconstructed memory, documentary traces and contemporary Hiroshima.", editing: "Use associative cuts and temporal disruption to make remembering an active production process.", sound: "Let repeated dialogue, voice-over, music and historical reference create tension between seeing and knowing.", learning: "Study how modernist cinema can join documentary evidence, fiction and unstable memory."
  },

  {
    id: "scenario_psycho_1960", title: "Psycho", originalTitle: "Psycho", year: 1960,
    directors: ["Alfred Hitchcock"], genres: ["Horror", "Mystery", "Thriller"], tradition: "Late-classical studio horror and modern suspense", tone: "Controlled, intimate and violently disruptive",
    premise: "Build a suspense film that shifts protagonist, genre expectation and audience knowledge through precise image, editing and music.", screenplay: "Use a false initial plot and a radical midpoint rupture to reorganize identification.", image: "Employ black-and-white photography, architecture, point of view and object detail for controlled unease.", editing: "Construct violence through shot fragments, temporal compression and reaction rather than explicit continuous action.", sound: "Coordinate water, voices, silence, sound effects and string score as narrative weapons.", learning: "Connect production economy and audiovisual precision to the formation of modern screen horror."
  },
  {
    id: "scenario_breakfast_at_tiffany_s_1961", title: "Breakfast at Tiffany's", originalTitle: "Breakfast at Tiffany's", year: 1961,
    directors: ["Blake Edwards"], genres: ["Comedy", "Drama", "Romance"], tradition: "Early-1960s Hollywood romantic comedy and star image", tone: "Elegant, melancholic and socially performative",
    premise: "Build a city romance around a self-created public persona whose glamour conceals economic and emotional instability.", screenplay: "Balance comic encounters, withheld biography and the pressure between independence and attachment.", image: "Use New York locations, studio interiors, fashion, color and star framing as character construction.", editing: "Move between social comedy and private melancholy without losing the central relationship.", sound: "Use dialogue, city ambience and recurring song to connect glamour with loneliness.", learning: "Study how costume, location, music and star performance create a romantic screen identity."
  },
  {
    id: "scenario_jules_and_jim_1962", title: "Jules and Jim", originalTitle: "Jules et Jim", year: 1962,
    directors: ["François Truffaut"], genres: ["Drama", "Romance"], tradition: "French New Wave literary adaptation", tone: "Buoyant, intimate and increasingly tragic",
    premise: "Tell years of friendship and romantic instability with narrative speed, playfulness and abrupt emotional change.", screenplay: "Compress time through episodes and narration while keeping the triangular relationship legible.", image: "Use location shooting, handheld movement, freeze frames, masks and direct visual invention.", editing: "Accelerate biography through montage, ellipsis and shifts between lightness and consequence.", sound: "Join voice-over, dialogue, songs and score to carry time and changing emotional perspective.", learning: "Compare New Wave freedom with the demands of long-span literary storytelling."
  },
  {
    id: "scenario_cleo_from_5_to_7_1962", title: "Cléo from 5 to 7", originalTitle: "Cléo de 5 à 7", aliases: ["Cleo from 5 to 7"], year: 1962,
    directors: ["Agnès Varda"], genres: ["Drama"], tradition: "French Left Bank cinema and near-real-time city film", tone: "Observant, anxious and gradually self-aware",
    premise: "Follow a performer through Paris in near real time as being looked at slowly gives way to looking at the world herself.", screenplay: "Use a clocked walk through encounters and locations to transform perspective without a conventional plot machine.", image: "Combine reflective surfaces, streets, performance and documentary attention to everyday Paris.", editing: "Preserve temporal progression while marking chapters, detours and changes in self-perception.", sound: "Use street ambience, conversation, rehearsal and song to shift between public persona and private fear.", learning: "Study time, city space and gendered looking as a unified production structure."
  },
  {
    id: "scenario_lawrence_of_arabia_1962", title: "Lawrence of Arabia", originalTitle: "Lawrence of Arabia", year: 1962,
    directors: ["David Lean"], genres: ["Adventure", "Biography", "Drama"], tradition: "Large-format international historical epic", tone: "Monumental, ambiguous and physically expansive",
    premise: "Build a historical epic where landscape, logistics and a contradictory central performance carry both spectacle and psychological uncertainty.", screenplay: "Select large historical movements through a character whose self-invention and political use remain unstable.", image: "Use large-format desert photography, extreme scale, long lenses and controlled compositions.", editing: "Join vast geography through graphic transitions, ellipsis and clear campaign progression.", sound: "Use wind, distance, battle texture, silence and orchestral themes to make scale audible.", learning: "Understand epic production as logistics, format, landscape, performance, editing and sound."
  },
  {
    id: "scenario_contempt_1963", title: "Contempt", originalTitle: "Le mépris", aliases: ["Le Mépris"], year: 1963,
    directors: ["Jean-Luc Godard"], genres: ["Drama", "Romance"], tradition: "French New Wave confronting international prestige production", tone: "Cool, wounded and self-reflexive",
    premise: "Turn a collapsing marriage and a troubled adaptation into a film about labor, authorship, commerce and looking.", screenplay: "Let professional compromise and domestic misunderstanding unfold through extended confrontation.", image: "Use widescreen color, architecture, bodies and Mediterranean locations as competing systems of value.", editing: "Hold long domestic passages, interrupt continuity and expose the construction of cinematic meaning.", sound: "Repeat music, break expected continuity and use multilingual dialogue to keep production conflict audible.", learning: "Study how a film can critique the international production system from inside it."
  },
  {
    id: "scenario_8_1_2_1963", title: "8½", originalTitle: "8½", aliases: ["8 1/2", "Eight and a Half"], year: 1963,
    directors: ["Federico Fellini"], genres: ["Drama", "Fantasy"], tradition: "European modernist film-about-film", tone: "Dreamlike, comic and creatively blocked",
    premise: "Build a director's crisis where production meetings, memories, fantasies and lies occupy the same unstable narrative space.", screenplay: "Move fluidly between present production pressure and subjective escape without announcing every boundary.", image: "Use elaborate blocking, moving camera, stylized light, faces and constructed production spaces.", editing: "Link reality, fantasy and memory through associative transitions and recurring figures.", sound: "Use dubbing, music, voices and abrupt acoustic shifts to maintain a deliberately artificial world.", learning: "Understand self-reflexive cinema as a production case about authorship, collaboration and paralysis."
  },
  {
    id: "scenario_band_of_outsiders_1964", title: "Band of Outsiders", originalTitle: "Bande à part", aliases: ["Bande à part"], year: 1964,
    directors: ["Jean-Luc Godard"], genres: ["Crime", "Drama"], tradition: "French New Wave genre play", tone: "Casual, youthful and self-conscious",
    premise: "Build a small crime story whose pauses, games and digressions matter as much as the planned robbery.", screenplay: "Use genre expectations as a loose frame for friendship, performance and boredom.", image: "Shoot Paris locations with mobile, economical framing and direct attention to bodies in space.", editing: "Interrupt action with narration, silence, dance and ellipsis while keeping the basic plan understandable.", sound: "Use voice-over, music, deliberate silence and everyday ambience as visible formal choices.", learning: "Study how New Wave cinema can dismantle and still enjoy popular genre form."
  },
  {
    id: "scenario_dr_strangelove_1964", title: "Dr. Strangelove", originalTitle: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", aliases: ["Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb"], year: 1964,
    directors: ["Stanley Kubrick"], genres: ["Comedy", "War"], tradition: "Cold War black comedy and studio satire", tone: "Deadpan, catastrophic and institutionally absurd",
    premise: "Build an apocalypse comedy where rigid procedures, masculine performance and enclosed command spaces make systems more dangerous than individuals.", screenplay: "Intercut three locations whose rational rules collectively produce irrational catastrophe.", image: "Use monumental war-room design, wide-angle interiors, aircraft material and severe black-and-white lighting.", editing: "Cross-cut command chains and deadlines so comic performance never reduces strategic clarity.", sound: "Contrast official language, communications technology, music and explosions for satirical effect.", learning: "Connect institutional satire to set design, ensemble performance, cross-cutting and sound."
  },
  {
    id: "scenario_the_umbrellas_of_cherbourg_1964", title: "The Umbrellas of Cherbourg", originalTitle: "Les parapluies de Cherbourg", year: 1964,
    directors: ["Jacques Demy"], genres: ["Drama", "Musical", "Romance"], tradition: "French color musical and sung-through melodrama", tone: "Vivid, romantic and quietly devastating",
    premise: "Build an everyday romance in which every line is sung and color design makes ordinary shops and rooms emotionally heightened.", screenplay: "Let work, family, war and time alter the relationship without abandoning the continuous musical form.", image: "Coordinate saturated color, wallpaper, costumes, streets and camera movement as one designed palette.", editing: "Move through seasons and life changes with musical continuity and clear emotional ellipsis.", sound: "Integrate sung dialogue, orchestration and recurring themes as the complete dramatic language.", learning: "Study how music and color can organize an entire production rather than decorate selected scenes."
  },
  {
    id: "scenario_the_battle_of_algiers_1966", title: "The Battle of Algiers", originalTitle: "La battaglia di Algeri", year: 1966,
    directors: ["Gillo Pontecorvo"], genres: ["Drama", "War"], tradition: "Political modernism and newsreel-style historical reconstruction", tone: "Urgent, collective and analytically tense",
    premise: "Reconstruct an anticolonial conflict through urban geography, collective actors and documentary-coded images.", screenplay: "Organize competing systems of resistance and counterinsurgency without reducing history to one hero.", image: "Use black-and-white location photography, nonprofessional faces, handheld observation and newsreel texture.", editing: "Cross-cut operations, searches and public consequence while maintaining political and spatial clarity.", sound: "Combine crowd noise, military procedure, chants, percussion and score to distinguish forces and pressure.", learning: "Examine the ethical and formal difference between documentary appearance and staged reconstruction."
  },
  {
    id: "scenario_persona_1966", title: "Persona", originalTitle: "Persona", year: 1966,
    directors: ["Ingmar Bergman"], genres: ["Drama", "Thriller"], tradition: "European modernism and material self-reflexivity", tone: "Intimate, fractured and confrontational",
    premise: "Build a two-person psychological film where faces, speech, silence and the physical medium destabilize identity.", screenplay: "Concentrate conflict in confession, withholding and shifting identification rather than external action.", image: "Use extreme close-ups, high contrast, merged faces and exposed film material.", editing: "Break continuity, repeat or fracture images and make the interruption of the film itself meaningful.", sound: "Use one character's silence, the other's voice, sparse effects and abrupt rupture as structural elements.", learning: "Study how performance and film material can become inseparable in modernist cinema."
  },
  {
    id: "scenario_bonnie_and_clyde_1967", title: "Bonnie and Clyde", originalTitle: "Bonnie and Clyde", year: 1967,
    directors: ["Arthur Penn"], genres: ["Action", "Biography", "Crime"], tradition: "New Hollywood genre revision", tone: "Playful, romantic and abruptly violent",
    premise: "Reframe an outlaw story through youthful performance, tonal instability and violence that shifts from entertainment to consequence.", screenplay: "Mix episodic criminal momentum, celebrity self-invention and a relationship shaped by failure.", image: "Use period locations, expressive zooms, natural environments and faces that resist classical glamour.", editing: "Move rapidly between comedy, intimacy and violence, culminating in fragmented multi-speed action.", sound: "Use banjo music, gunfire, silence and period texture to create deliberate tonal collision.", learning: "Understand the transition from classical genre control to New Hollywood ambiguity and violence."
  },
  {
    id: "scenario_2001_a_space_odyssey_1968", title: "2001: A Space Odyssey", originalTitle: "2001: A Space Odyssey", aliases: ["2001"], year: 1968,
    directors: ["Stanley Kubrick"], genres: ["Adventure", "Sci-Fi"], tradition: "Large-format modernist science fiction and effects production", tone: "Monumental, precise and enigmatic",
    premise: "Build a cosmic journey where design, movement, practical effects, music and duration communicate more than explanatory dialogue.", screenplay: "Organize vast historical jumps and a contained machine conflict around recurring questions of intelligence and transformation.", image: "Coordinate large-format photography, front projection, miniatures, rotating sets and graphic design.", editing: "Use radical ellipsis, match cuts, long duration and controlled spatial progression.", sound: "Contrast classical music, breathing, machine voices, silence and abstract sound environments.", learning: "Study effects-led production as previsualization, engineering, design, camera, editing and sound."
  },
  {
    id: "scenario_night_of_the_living_dead_1968", title: "Night of the Living Dead", originalTitle: "Night of the Living Dead", year: 1968,
    directors: ["George A. Romero"], genres: ["Horror", "Thriller"], tradition: "American regional independent horror", tone: "Immediate, besieged and socially abrasive",
    premise: "Build a siege film from one rural house, local resources and escalating group conflict rather than studio spectacle.", screenplay: "Use survival decisions and incompatible leadership to make the human group as dangerous as the external threat.", image: "Exploit black-and-white location photography, news-like inserts and practical makeup within limited means.", editing: "Escalate attacks, arguments and failed plans through direct continuity and abrupt violence.", sound: "Use radio, television, screams, impacts and sparse music to enlarge the world beyond the house.", learning: "Connect regional low-budget production to a durable modern horror form."
  },

  {
    id: "scenario_the_godfather_1972", title: "The Godfather", originalTitle: "The Godfather", year: 1972,
    directors: ["Francis Ford Coppola"], genres: ["Crime", "Drama"], tradition: "New Hollywood prestige crime epic", tone: "Ceremonial, intimate and morally dark",
    premise: "Build a family succession story where ritual, business procedure and private loyalty transform a reluctant outsider into institutional power.", screenplay: "Interweave family events and criminal operations while tracking one central moral transformation.", image: "Use low-key interiors, warm period design, controlled compositions and contrasting public rituals.", editing: "Cross-cut parallel ceremonies and violence while preserving long-form character progression.", sound: "Use quiet dialogue, room tone, gunfire, ritual music and recurring themes to define power.", learning: "Study how New Hollywood combines studio scale, auteur control and classical narrative craft."
  },
  {
    id: "scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975", title: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", originalTitle: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", aliases: ["Jeanne Dielman"], year: 1975,
    directors: ["Chantal Akerman"], genres: ["Drama"], tradition: "Feminist modernism and durational domestic cinema", tone: "Exact, repetitive and increasingly destabilized",
    premise: "Build a domestic routine through duration and repetition so tiny deviations become major dramatic events.", screenplay: "Organize days around labor, transactions and ritual rather than conventional plot escalation.", image: "Use fixed frontal framing, domestic geometry and consistent camera distance.", editing: "Preserve real duration, repeated actions and measured ellipsis so change is perceptible through comparison.", sound: "Let household actions, rooms and silence carry material weight without explanatory score.", learning: "Understand duration and domestic labor as precise production and narrative choices."
  },
  {
    id: "scenario_jaws_1975", title: "Jaws", originalTitle: "Jaws", year: 1975,
    directors: ["Steven Spielberg"], genres: ["Adventure", "Thriller"], tradition: "New Hollywood location thriller and emerging blockbuster", tone: "Suspenseful, communal and physically pressured",
    premise: "Build a sea thriller where restricted visibility, practical production difficulty and character conflict delay the threat while increasing fear.", screenplay: "Move from community denial to a focused three-person hunt with clear escalating objectives.", image: "Use water-level point of view, real ocean geography, practical shark work and reaction framing.", editing: "Control when the threat is shown and maintain spatial clarity across beach, boat and underwater action.", sound: "Use the recurring score, water, machinery, silence and offscreen threat as suspense structure.", learning: "Study how production constraints can reshape suspense and contribute to blockbuster form."
  },
  {
    id: "scenario_star_wars_1977", title: "Star Wars", originalTitle: "Star Wars", aliases: ["Star Wars: Episode IV - A New Hope", "Star Wars: Episode IV – A New Hope", "A New Hope"], year: 1977,
    directors: ["George Lucas"], genres: ["Action", "Adventure", "Sci-Fi"], tradition: "New Hollywood effects blockbuster and space opera", tone: "Mythic, energetic and materially detailed",
    premise: "Build a fast space adventure whose effects, design, editing and sound make an invented universe feel used and navigable.", screenplay: "Use a clear mythic quest, parallel rescues and escalating obstacles to support a dense new world.", image: "Coordinate location photography, production design, models, motion control, optical compositing and creature work.", editing: "Accelerate parallel action while preserving objectives, screen direction and geography.", sound: "Create a complete sonic universe from voices, machinery, weapons, creatures and orchestral themes.", learning: "Understand the modern effects pipeline as coordinated worldbuilding rather than isolated spectacle."
  },
  {
    id: "scenario_killer_of_sheep_1977", title: "Killer of Sheep", originalTitle: "Killer of Sheep", year: 1977,
    directors: ["Charles Burnett"], genres: ["Drama"], tradition: "African American independent and community-based realist cinema", tone: "Observant, lyrical and economically burdened",
    premise: "Build a neighborhood portrait from work, family, children and small attempts at relief rather than a conventional plot engine.", screenplay: "Let episodes and relationships accumulate a material picture of fatigue, dignity and community.", image: "Use black-and-white location photography, available environments and patient observation of bodies and streets.", editing: "Create meaning through juxtaposed daily moments, visual rhyme and musical association.", sound: "Use voices, neighborhood ambience and recorded music as memory and social texture.", learning: "Place community-based American independent cinema inside the central film-history timeline."
  }
] as const satisfies readonly EarlyCinemaExpansionDefinition[];

export function normalizeEarlyCinemaTitle(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function scenarioMatchesEarlyCinemaDefinition(
  scenario: HistoricalFilmScenario,
  definition: EarlyCinemaExpansionDefinition,
): boolean {
  if (scenario.id === definition.id) return true;
  if (scenario.film.year !== definition.year) return false;
  const scenarioTitles = [scenario.film.title, scenario.film.original_title].map(normalizeEarlyCinemaTitle);
  const definitionTitles = [definition.title, definition.originalTitle, ...(definition.aliases ?? [])].map(normalizeEarlyCinemaTitle);
  return scenarioTitles.some((title) => definitionTitles.includes(title));
}

export function getEarlyCinemaExpansionDefinition(
  scenario: HistoricalFilmScenario,
): EarlyCinemaExpansionDefinition | undefined {
  return earlyCinemaExpansionDefinitions.find((definition) => scenarioMatchesEarlyCinemaDefinition(scenario, definition));
}

export function mergeEarlyCinemaExpansion(
  baseScenarios: readonly HistoricalFilmScenario[],
): readonly HistoricalFilmScenario[] {
  const merged = [...baseScenarios];
  let nextPosition = Math.max(0, ...baseScenarios.map((scenario) => scenario.source.position)) + 1;
  for (const definition of earlyCinemaExpansionDefinitions) {
    if (merged.some((scenario) => scenarioMatchesEarlyCinemaDefinition(scenario, definition))) continue;
    merged.push(createEarlyCinemaScenario(definition, nextPosition));
    nextPosition += 1;
  }
  return merged;
}

function createEarlyCinemaScenario(
  definition: EarlyCinemaExpansionDefinition,
  position: number,
): HistoricalFilmScenario {
  const genreKeys = definition.genres.map(toGenreKey);
  return {
    id: definition.id,
    status: "manual_early_cinema_case_needs_source_verification",
    source: {
      list_id: "manual_early_cinema_expansion_2026",
      position,
      imdb_id: `manual_${definition.id.replace(/^scenario_/, "")}`,
      url: `https://www.imdb.com/find/?q=${encodeURIComponent(`${definition.title} ${definition.year}`)}`,
    },
    film: {
      title: definition.title,
      original_title: definition.originalTitle,
      year: definition.year,
      title_type: "Movie",
      runtime_mins: 0,
      directors: definition.directors,
      genres: definition.genres,
      genre_keys: genreKeys,
      imdb_rating: 0,
      user_rating: 0,
    },
    scenario_type: getScenarioType(definition.genres),
    production_challenge: definition.premise,
    required_choices_seed: {
      screenplay: ["historical_form", "dramatic_structure", "character_pressure"],
      camera: ["period_image_system", "spatial_design", "performance_viewpoint"],
      editing: ["historical_editing_method", "rhythm", "information_control"],
      sound: ["historical_sound_method", "music_and_silence"],
      themes: ["film_history", "production_method", "craft_consequence"],
    },
    phases: sharedProductionCasePhases,
    learning_goals_seed: [definition.learning, `Connect ${definition.tradition.toLowerCase()} to concrete production choices.`, "Distinguish researched historical claims from current case mapping."],
    manual_enrichment_needed: [
      "source_backed_historical_profile",
      "department_level_craft_sources",
      "verified_camera_and_sound_specifications",
      "reception_and_legacy_review",
    ],
  };
}

function toGenreKey(genre: string): string {
  return genre.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function getScenarioType(genres: readonly string[]): string {
  if (genres.includes("Animation")) return "animation_production";
  if (genres.includes("Documentary")) return "documentary_production";
  if (genres.some((genre) => ["Horror", "Crime", "Mystery", "Thriller", "Film-Noir"].includes(genre))) return "crime_thriller_production";
  if (genres.includes("Comedy")) return "character_comedy_production";
  if (genres.some((genre) => ["Action", "Adventure", "War", "Western"].includes(genre))) return "action_adventure_production";
  if (genres.some((genre) => ["Fantasy", "Sci-Fi"].includes(genre))) return "speculative_production";
  return "character_drama_production";
}

const sharedProductionCasePhases = [
  { id: "pitch", label: "Pitch", player_task: "Define the film's historical production promise, conflict and formal method." },
  { id: "research", label: "Research", player_task: "Separate sourced history from provisional case mapping." },
  { id: "screenplay", label: "Screenplay", player_task: "Build the structure and scene logic specific to this film." },
  { id: "casting", label: "Casting", player_task: "Choose the performance system and ensemble energy." },
  { id: "production_design", label: "Production design", player_task: "Choose spaces, sets, objects, costume and makeup as a historical production system." },
  { id: "cinematography", label: "Cinematography", player_task: "Choose framing, movement, light and capture methods appropriate to the case." },
  { id: "editing", label: "Editing", player_task: "Choose rhythm, temporal structure and information control." },
  { id: "sound", label: "Sound", player_task: "Choose dialogue, silence, music, ambience and effects appropriate to the film's period and method." },
  { id: "release", label: "Release", player_task: "Place the film historically without making unsupported claims of influence or innovation." },
] as const;
