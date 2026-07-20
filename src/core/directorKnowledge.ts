export type DirectorKnowledgePhase = "development" | "preproduction" | "production" | "postproduction";
export type DirectorKnowledgeLevel = "foundation" | "intermediate" | "advanced";

export const DIRECTOR_KNOWLEDGE_CATEGORIES = [
  { id: "directing_process", label: "Regiarbeid", description: "Hvordan regissøren utvikler, kommuniserer og beskytter filmens helhetlige idé." },
  { id: "script_dramaturgy", label: "Manus og dramaturgi", description: "Begreper for sceneanalyse, konflikt, informasjon og dramatisk utvikling." },
  { id: "performance_casting", label: "Casting og skuespillerarbeid", description: "Arbeid med rollevalg, prøver, handlinger, undertekst og kontinuitet i prestasjonen." },
  { id: "blocking_staging", label: "Blocking og iscenesettelse", description: "Hvordan kropper, blikk, bevegelser og rom organiseres foran kamera." },
  { id: "shot_composition", label: "Bildeutsnitt og komposisjon", description: "Bildegrammatikk, utsnitt, perspektiv og visuell prioritering." },
  { id: "camera_lens", label: "Kamera og optikk", description: "Kameraets plassering, objektiver, fokus og romgjengivelse." },
  { id: "exposure_motion", label: "Eksponering og bevegelse", description: "Lysmengde, bildefrekvens, lukkertid og gjengivelse av bevegelse." },
  { id: "lighting_color", label: "Lys og farge", description: "Lyskvalitet, retning, kontrast, fargetemperatur og fargestyring." },
  { id: "design_continuity", label: "Scenografi og kontinuitet", description: "Miljø, rekvisitter, kostyme, romlogikk og sammenheng mellom opptak." },
  { id: "editing_time", label: "Klipp og filmisk tid", description: "Sammenstilling, rytme, kontinuitet, ellipser og bilde-lyd-overganger." },
  { id: "sound_music", label: "Lyd og musikk", description: "Dialog, atmosfære, effekter, musikk, perspektiv og miks." },
  { id: "production_post", label: "Opptak og postproduksjon", description: "Settarbeid, opptakslogistikk, metadata, VFX, grading og levering." },
] as const;

export type DirectorKnowledgeCategoryId = (typeof DIRECTOR_KNOWLEDGE_CATEGORIES)[number]["id"];

export type DirectorKnowledgeSource = {
  readonly id: string;
  readonly label: string;
  readonly organization: string;
  readonly url: string;
  readonly scope: string;
};

export const DIRECTOR_KNOWLEDGE_SOURCES: readonly DirectorKnowledgeSource[] = [
  { id: "dga-process", label: "Directors’ Minimum Conditions: Preparation, Production and Post-Production", organization: "Directors Guild of America", url: "https://www.dga.org/contracts/creative-rights/basic-agreement-article-7", scope: "Regissørens ansvar gjennom forberedelse, opptak, klipp, lyd og director’s cut." },
  { id: "dga-blocking", label: "The Director’s Prep: Blocking & Shot Listing", organization: "Directors Guild of America", url: "https://www.dga.org/Events/2019/Dec2019/DDI_Lab_LA_Prep_1019", scope: "Blocking, floor plan, shotlisting og kommunikasjon av scenen." },
  { id: "dga-actors", label: "Working with Actors", organization: "Directors Guild of America", url: "https://www.dga.org/Events/2026/June2026/DDI_WorkingWithActors-0426", scope: "Casting, prøver, tilpasning til skuespillerens metode og regi av prestasjon." },
  { id: "screenskills-director", label: "Director: Film and TV Drama", organization: "ScreenSkills", url: "https://www.screenskills.com/job-profiles/roles/director-film-and-tv-drama/", scope: "Regissørens kreative ledelse og samarbeid med produsent, fotograf, skuespillere og klipper." },
  { id: "kodak-glossary", label: "Glossary of Motion Picture Terms", organization: "Kodak", url: "https://www.kodak.com/en/motion/page/glossary-of-motion-picture-terms/", scope: "Filmformat, optikk, eksponering, farge, laboratorie- og visningsterminologi." },
  { id: "arri-lens", label: "ALEXA LF FAQ: focal length, sensor size and angle of view", organization: "ARRI", url: "https://www.arri.com/en/learn-help/learn-help-camera-system/frequently-asked-questions/alexa-lf-faq", scope: "Objektivets brennvidde, sensorformat og bildevinkel." },
  { id: "arri-image", label: "ARRI Camera Image Science and Metadata", organization: "ARRI", url: "https://www.arri.com/en/learn-help/arri-camera-technology/best-overall-image-quality", scope: "Dynamisk omfang, highlight roll-off, eksponeringsrom, Log og metadata." },
  { id: "avid-glossary", label: "MediaCentral Glossary", organization: "Avid", url: "https://resources.avid.com/SupportFiles/attach/Interplay_Central/IPC_Help/InterplayCentral_Help/IPC_Glossary.html", scope: "Klipp, logging, sekvenser, L-cuts og redaksjonell arbeidsflyt." },
  { id: "academy-craft", label: "Academy Academy: filmmaking crafts", organization: "Academy of Motion Picture Arts and Sciences", url: "https://www.oscars.org/videos-photos/academy-academy", scope: "Kinematografi, scenografi, kostyme, lyd, musikk, VFX og andre filmfag." },
  { id: "aces-glossary", label: "ACES Glossary and System Documentation", organization: "Academy Color Encoding System", url: "https://docs.acescentral.com/glossary/", scope: "Fargestyring, input-, look- og output-transformer, LUT-er og digital masterflyt." },
] as const;

export type DirectorWorkflowStep = {
  readonly id: string;
  readonly order: number;
  readonly phase: DirectorKnowledgePhase;
  readonly title: string;
  readonly goal: string;
  readonly actions: readonly string[];
  readonly outputs: readonly string[];
  readonly collaborators: readonly string[];
  readonly termIds: readonly string[];
  readonly sourceIds: readonly string[];
};

export const DIRECTOR_WORKFLOW: readonly DirectorWorkflowStep[] = [
  { id: "script-interpretation", order: 1, phase: "development", title: "Tolke manus og definere ståsted", goal: "Finne hva filmen handler om dramatisk, emosjonelt og formelt før løsninger velges.", actions: ["Bryt manuset ned i beats, mål, hindringer og vendepunkter.", "Definer publikums kunnskap og filmens synsvinkel.", "Skill tema fra konkret spillbar handling."], outputs: ["Reginotat", "Sceneanalyse", "Spørsmål til manus"], collaborators: ["Manusforfatter", "Produsent"], termIds: ["beat", "scene_objective", "obstacle", "turning_point", "point_of_view", "directors_statement"], sourceIds: ["dga-process", "screenskills-director"] },
  { id: "creative-system", order: 2, phase: "development", title: "Bygge filmens formelle system", goal: "Oversette tolkningen til regler for bilde, lyd, skuespill, rom og tid.", actions: ["Definer tone og visuell grammatikk.", "Lag prinsipper for når kamera beveger seg og når det står stille.", "Bestem hvilke kontraster som skal utvikle seg gjennom filmen."], outputs: ["Visuelt konsept", "Tone- og referansepakke", "Formelle regler"], collaborators: ["Fotograf", "Produksjonsdesigner", "Klipper", "Lyddesigner"], termIds: ["creative_vision", "tone", "visual_language", "formal_rule", "palette", "sound_perspective"], sourceIds: ["screenskills-director", "academy-craft"] },
  { id: "casting-performance", order: 3, phase: "preproduction", title: "Casting og prestasjonsstrategi", goal: "Finne skuespillere og arbeidsmåter som kan bære scenenes handling og undertekst.", actions: ["Definer hva rollen gjør, ikke bare hva den føler.", "Gjennomfør auditions, callbacks og chemistry reads.", "Planlegg hvordan ulike skuespillere mottar justeringer."], outputs: ["Castingvalg", "Rollehandlinger", "Prøveplan"], collaborators: ["Castingansvarlig", "Skuespillere", "Produsent"], termIds: ["casting", "callback", "chemistry_read", "playable_action", "adjustment", "subtext"], sourceIds: ["dga-actors", "screenskills-director"] },
  { id: "department-alignment", order: 4, phase: "preproduction", title: "Samordne avdelingene", goal: "Sørge for at alle fagavdelinger løser samme dramatiske idé uten å arbeide i parallelle siloer.", actions: ["Gjennomfør fagmøter og manusgjennomgang.", "Knytt design-, kamera-, lys- og lydvalg til scenens funksjon.", "Avklar kostnad, tid og teknisk risiko tidlig."], outputs: ["Avdelingsbrief", "Lookbook", "Tekniske tester", "Prioritetsliste"], collaborators: ["Fotograf", "Produksjonsdesigner", "Kostymedesigner", "Lyd", "VFX", "1. AD"], termIds: ["head_of_department", "lookbook", "camera_test", "wardrobe_test", "tech_scout", "production_constraint"], sourceIds: ["screenskills-director", "academy-craft"] },
  { id: "location-tech-scout", order: 5, phase: "preproduction", title: "Location og teknisk befaring", goal: "Forstå hvordan rom, lys, lyd, logistikk og sikkerhet påvirker scenens muligheter.", actions: ["Gå scenen fysisk i rommet.", "Sjekk solretning, støy, strøm, rigg, adkomst og kameraposisjoner.", "Oppdater blocking og shotplan etter virkelige forhold."], outputs: ["Floor plan", "Kameraposisjoner", "Lys- og lydplan", "Risikoliste"], collaborators: ["1. AD", "Fotograf", "Gaffer", "Grip", "Location", "Lyd"], termIds: ["location_scout", "tech_scout", "floor_plan", "practical_light", "wild_track", "screen_geography"], sourceIds: ["dga-blocking", "dga-process"] },
  { id: "blocking-rehearsal", order: 6, phase: "preproduction", title: "Blocking og prøve", goal: "Finne spillbare bevegelser og maktforhold før kameraet låser scenen.", actions: ["La skuespillerne undersøke handling og rom.", "Plasser innganger, utganger, blikk og kryssinger.", "Juster kamera etter prestasjonen, ikke omvendt som automatikk."], outputs: ["Blockingplan", "Reviderte marks", "Prestasjonstoner", "Kamerabehov"], collaborators: ["Skuespillere", "Fotograf", "Script supervisor", "1. AD"], termIds: ["blocking", "staging", "mark", "eyeline", "cross", "motivated_movement"], sourceIds: ["dga-blocking", "dga-actors"] },
  { id: "shot-design", order: 7, phase: "preproduction", title: "Shot design og dekning", goal: "Velge de bildene som faktisk uttrykker scenens informasjon, relasjoner og forandring.", actions: ["Bestem master, singles, inserts og reaksjoner ut fra scenens behov.", "Test akselinje, skjermretning og øyelinjer.", "Gi hvert bilde en dramatisk funksjon."], outputs: ["Shotlist", "Storyboard ved behov", "Linseliste", "Dekningsstrategi"], collaborators: ["Fotograf", "Storyboard artist", "Script supervisor", "1. AD"], termIds: ["coverage", "shot_list", "master_shot", "axis_of_action", "shot_size", "dramatic_purpose"], sourceIds: ["dga-blocking", "kodak-glossary", "arri-lens"] },
  { id: "schedule-priorities", order: 8, phase: "preproduction", title: "Planlegge tid og prioriteringer", goal: "Beskytte de viktigste kreative valgene når opptaksdagen møter begrensninger.", actions: ["Marker ufravikelige bilder og prestasjonsbehov.", "Planlegg alternative dekninger.", "Avtal rekkefølge med 1. AD og fotograf."], outputs: ["Prioritert shotlist", "Plan B", "Tidsestimater", "Pickup-liste"], collaborators: ["Produsent", "1. AD", "Fotograf", "Produksjonsleder"], termIds: ["shooting_schedule", "company_move", "setup", "pickup", "safety_take", "coverage"], sourceIds: ["dga-process", "screenskills-director"] },
  { id: "shooting-floor", order: 9, phase: "production", title: "Lede opptaket", goal: "Samle prestasjon, bilde, lyd og produksjon til ett tydelig resultat under tidspress.", actions: ["Kommuniser hva tagningen skal forbedre.", "Gi presise justeringer til skuespiller og avdeling.", "Vurder kontinuitet, teknisk kvalitet og om scenens vendepunkt er synlig."], outputs: ["Godkjente takes", "Reginotater", "Pickup-behov", "Metadata og logg"], collaborators: ["Skuespillere", "Fotograf", "1. AD", "Script supervisor", "Lyd", "Alle avdelingsledere"], termIds: ["take", "print_take", "adjustment", "continuity", "video_assist", "slate"], sourceIds: ["dga-process", "dga-actors"] },
  { id: "dailies-adaptation", order: 10, phase: "production", title: "Se dailies og tilpasse planen", goal: "Kontrollere at materialet fungerer samlet og oppdage problemer før opptaket har gått videre.", actions: ["Vurder prestasjon, fokus, eksponering, dekning og lyd.", "Sammenlign materialet med scenens hensikt.", "Oppdater kommende shotlister og pickups."], outputs: ["Dailies-notater", "Korrigerte planer", "Pickup- og VFX-notater"], collaborators: ["Fotograf", "Klipper", "Script supervisor", "Produsent"], termIds: ["dailies", "rushes", "circle_take", "focus_pull", "exposure", "pickup"], sourceIds: ["dga-process", "arri-image"] },
  { id: "picture-edit", order: 11, phase: "postproduction", title: "Bygge filmens bildeklipp", goal: "Finne den sterkeste rytmen, synsvinkelen og informasjonsflyten i det innspilte materialet.", actions: ["Start med assembly og vurder scenens faktiske materiale.", "Arbeid fra dramatisk funksjon fremfor å bevare planlagt dekning.", "Lås bilde først når struktur og rytme er kontrollert."], outputs: ["Assembly", "Rough cut", "Fine cut", "Picture lock"], collaborators: ["Klipper", "Produsent", "VFX editor"], termIds: ["assembly", "rough_cut", "fine_cut", "picture_lock", "reaction_shot", "ellipsis"], sourceIds: ["dga-process", "avid-glossary"] },
  { id: "finish", order: 12, phase: "postproduction", title: "Lyd, musikk, VFX, farge og levering", goal: "Ferdigstille filmens sanselige helhet og sikre at intensjonen overlever teknisk distribusjon.", actions: ["Spot lyd, musikk og VFX med fagavdelingene.", "Godkjenn ADR, Foley, design, miks og grading.", "Kontroller mastere i relevante visningsformater."], outputs: ["Låst lydmiks", "Ferdige VFX", "Color grade", "DCP og øvrige leveranser"], collaborators: ["Lyddesigner", "Komponist", "VFX supervisor", "Colorist", "Post supervisor"], termIds: ["spotting_session", "adr", "foley", "final_mix", "color_grade", "dcp"], sourceIds: ["dga-process", "academy-craft", "aces-glossary"] },
] as const;

export type DirectorTerm = {
  readonly id: string;
  readonly term: string;
  readonly norwegian: string;
  readonly category: DirectorKnowledgeCategoryId;
  readonly phase: DirectorKnowledgePhase;
  readonly level: DirectorKnowledgeLevel;
  readonly definition: string;
  readonly directorUse: string;
  readonly example: string;
  readonly sourceIds: readonly string[];
};

const CATEGORY_SOURCES: Record<DirectorKnowledgeCategoryId, readonly string[]> = {
  directing_process: ["dga-process", "screenskills-director"],
  script_dramaturgy: ["dga-process", "screenskills-director"],
  performance_casting: ["dga-actors", "screenskills-director"],
  blocking_staging: ["dga-blocking", "dga-actors"],
  shot_composition: ["dga-blocking", "academy-craft"],
  camera_lens: ["kodak-glossary", "arri-lens"],
  exposure_motion: ["kodak-glossary", "arri-image"],
  lighting_color: ["kodak-glossary", "arri-image", "aces-glossary"],
  design_continuity: ["academy-craft", "dga-process"],
  editing_time: ["avid-glossary", "dga-process"],
  sound_music: ["academy-craft", "dga-process"],
  production_post: ["dga-process", "arri-image", "aces-glossary"],
};

const CATEGORY_USE: Record<DirectorKnowledgeCategoryId, string> = {
  directing_process: "Regissøren bruker begrepet til å formulere og kommunisere filmens helhetlige kreative retning.",
  script_dramaturgy: "Regissøren bruker begrepet når manus og scene brytes ned til spillbar dramatisk handling.",
  performance_casting: "Regissøren bruker begrepet i casting, prøve og konkrete justeringer av skuespillerarbeidet.",
  blocking_staging: "Regissøren bruker begrepet til å organisere personer, blikk og bevegelse tydelig i rommet.",
  shot_composition: "Regissøren bruker begrepet til å styre publikums informasjon, nærhet og visuelle oppmerksomhet.",
  camera_lens: "Regissøren bruker begrepet sammen med fotografen for å velge perspektiv, romgjengivelse og kamerabevegelse.",
  exposure_motion: "Regissøren bruker begrepet med fotoavdelingen for å kontrollere lysregistrering og bevegelsesuttrykk.",
  lighting_color: "Regissøren bruker begrepet til å samordne lys, palett, stemning og den tekniske fargepipelinen.",
  design_continuity: "Regissøren bruker begrepet til å bygge en troverdig verden og bevare meningsfull sammenheng mellom opptak.",
  editing_time: "Regissøren bruker begrepet sammen med klipperen for å forme tid, rytme og informasjonsrekkefølge.",
  sound_music: "Regissøren bruker begrepet til å bestemme lydens kilde, perspektiv, prioritet og dramatiske funksjon.",
  production_post: "Regissøren bruker begrepet for å samarbeide presist gjennom opptak, etterarbeid og teknisk levering.",
};

const TERM_SEEDS = `
creative_vision|Creative vision|Kreativ helhetsvisjon|directing_process|development|foundation|Den samlende ideen for hvordan historie, tone, bilde, lyd og prestasjoner skal virke sammen.|Et intimt drama lar kameraet komme nær først når karakteren mister kontroll.
directors_statement|Director's statement|Reginotat|directing_process|development|foundation|En kort formulering av regissørens tolkning, hensikt og formelle strategi.|Reginotatet beskriver filmen som en gradvis innsnevring av handlingsrommet.
tone|Tone|Tone|directing_process|development|foundation|Filmens følelsesmessige og holdningsmessige grunnklang.|Samme scene planlegges som tørr komedie i stedet for melodrama.
point_of_view|Point of view|Synsvinkel|directing_process|development|foundation|Hvem eller hva filmen organiserer publikums kunnskap og opplevelse rundt.|Publikum hører telefonen før hovedpersonen forstår hvem som ringer.
visual_language|Visual language|Visuelt språk|directing_process|development|intermediate|Et gjentakende system av utsnitt, bevegelse, lys, farge og rombruk.|Statiske totaler dominerer frem til hovedpersonen endelig handler.
formal_rule|Formal rule|Formell regel|directing_process|development|intermediate|En bevisst begrensning som organiserer filmens form og gjør avvik meningsfulle.|Kamera krysser aldri dørterskelen før vendepunktet.
reference|Reference|Referanse|directing_process|development|foundation|Et verk, bilde eller uttrykk brukt til å konkretisere én ønsket kvalitet.|Referansen brukes for kontrast og fargetemperatur, ikke for å kopiere hele stilen.
lookbook|Lookbook|Visuell referansepakke|directing_process|preproduction|foundation|En kuratert samling bilder og notater som kommuniserer filmens visuelle retning.|Lookbooken viser hvordan grønt gradvis forsvinner fra miljøet.
coverage|Coverage|Dekning|directing_process|preproduction|foundation|Mengden og typen bilder som gir klipperen mulighet til å bygge scenen.|En master, to singles og ett avgjørende insert dekker scenens behov.
shot_list|Shot list|Shotliste|directing_process|preproduction|foundation|En ordnet liste over planlagte kameraoppsett og deres funksjon.|Bilde 12 er et nærbilde som først tas etter vendepunktet.
storyboard|Storyboard|Bilderuteplan|directing_process|preproduction|foundation|Tegnede eller visualiserte ruter som viser planlagte bilder i rekkefølge.|En actionsekvens tegnes for å avklare retning og kollisjoner.
dailies|Dailies|Dagens opptak|directing_process|production|foundation|Nylig innspilt materiale som gjennomgås før produksjonen går videre.|Dailies viser at scenens avgjørende reaksjonsbilde mangler.
beat|Beat|Dramatisk slag|script_dramaturgy|development|foundation|Den minste meningsfulle endringen i handling, taktikk, informasjon eller relasjon.|Hun smiler, oppdager løgnen og endrer strategi i tre tydelige beats.
scene_objective|Scene objective|Scenemål|script_dramaturgy|development|foundation|Det konkrete resultatet en karakter forsøker å oppnå i scenen.|Han vil få søsteren til å bli i rommet.
super_objective|Super-objective|Overordnet mål|script_dramaturgy|development|intermediate|Karakterens langsiktige drivkraft gjennom en større del av filmen.|Hun forsøker gjennom hele filmen å gjenopprette kontroll.
obstacle|Obstacle|Hindring|script_dramaturgy|development|foundation|Det som aktivt står mellom karakteren og målet.|Motspilleren nekter å svare direkte og tvinger frem en ny taktikk.
conflict|Conflict|Konflikt|script_dramaturgy|development|foundation|Sammenstøtet mellom uforenlige mål, behov, verdier eller krefter.|Begge vil beskytte barnet, men på motsatte måter.
stakes|Stakes|Hva som står på spill|script_dramaturgy|development|foundation|Konsekvensen av å lykkes eller mislykkes med handlingen.|Hvis avtalen faller, mister hun hjemmet.
turning_point|Turning point|Vendepunkt|script_dramaturgy|development|foundation|Øyeblikket som endrer scenens retning eller handlingsmuligheter.|Et navn nevnes og maktbalansen snur.
reversal|Reversal|Reversering|script_dramaturgy|development|intermediate|En vending der situasjonen får motsatt verdi eller forventning brytes markant.|Den som virket som offer, viser seg å kontrollere møtet.
setup_payoff|Setup and payoff|Planting og innfrielse|script_dramaturgy|development|foundation|Et element etableres tidlig og får betydning senere.|En ødelagt lås vises før innbruddet avsløres.
subtext|Subtext|Undertekst|script_dramaturgy|development|foundation|Det karakteren mener, ønsker eller skjuler under de uttalte ordene.|Replikken «jeg har det fint» betyr i scenen «ikke spør mer».
exposition|Exposition|Eksposisjon|script_dramaturgy|development|foundation|Informasjon publikum trenger om verden, fortid, relasjoner eller regler.|Familiehistorien kommer frem mens karakterene slåss om bordplasseringen.
sequence|Sequence|Sekvens|script_dramaturgy|development|foundation|Flere scener som sammen utgjør en større dramatisk enhet.|Etterforskningen består av tre scener med økende risiko.
casting|Casting|Rollebesetning|performance_casting|preproduction|foundation|Prosessen med å finne og velge utøvere til rollene.|En uventet ro hos kandidaten gjør antagonisten mer truende.
audition|Audition|Prøvespill|performance_casting|preproduction|foundation|En strukturert prøve der en skuespiller arbeider med materiale for rollen.|Kandidaten spiller scenen på nytt etter én konkret handling.
callback|Callback|Ny prøverunde|performance_casting|preproduction|foundation|En senere audition for et mindre utvalg kandidater.|To kandidater prøves med samme motspiller.
chemistry_read|Chemistry read|Samspillprøve|performance_casting|preproduction|foundation|En audition der mulige medspillere testes sammen.|De to hovedrollene prøver en konfliktfylt scene og en stille scene.
table_read|Table read|Bordlesning|performance_casting|preproduction|foundation|En samlet høytlesning av manus med skuespillere og nøkkelpersoner.|Bordlesningen avslører at en viktig relasjon introduseres for sent.
rehearsal|Rehearsal|Prøve|performance_casting|preproduction|foundation|Forberedende arbeid med handling, tekst, rom eller teknikk før opptak.|Skuespillerne undersøker scenen uten kamera før blocking bestemmes.
playable_action|Playable action|Spillbar handling|performance_casting|preproduction|foundation|Et aktivt verb skuespilleren kan forsøke mot en annen person.|«Overtal henne» er mer spillbart enn «vær trist».
intention|Intention|Hensikt|performance_casting|preproduction|foundation|Hva karakteren prøver å gjøre med den andre eller situasjonen.|Han prøver å få henne til å le for å unngå spørsmålet.
given_circumstances|Given circumstances|Gitte omstendigheter|performance_casting|preproduction|intermediate|Fakta om karakter, tid, sted og relasjon som gjelder før scenen begynner.|Hun har ikke sovet og må skjule at pengene er borte.
adjustment|Adjustment|Regijustering|performance_casting|production|foundation|En konkret endring regissøren ber om mellom tagninger.|Neste gang venter hun til han setter seg før hun angriper.
listening|Listening|Aktiv lytting|performance_casting|production|foundation|Skuespillerens mottak av partnerens handling før responsen oppstår.|Nærbildet holdes gjennom pausen før svaret.
emotional_arc|Emotional arc|Emosjonell bue|performance_casting|development|foundation|Forandringen i karakterens følelsesmessige tilstand gjennom scene eller film.|Forsvar blir til håp og deretter skam.
mark|Mark|Gulvmerke|performance_casting|production|foundation|Et fysisk punkt skuespilleren treffer for fokus, lys eller komposisjon.|Skuespilleren stanser på merket idet vinduet åpnes.
blocking|Blocking|Blocking|blocking_staging|preproduction|foundation|Planlegging av skuespillernes plasseringer og bevegelser i rommet.|Hun flytter seg mellom ham og døren idet hun tar kontroll.
staging|Staging|Iscenesettelse|blocking_staging|preproduction|foundation|Den samlede organiseringen av kropper, rom, kamera og handling.|Tre personer plasseres i dybden slik at allianser kan skifte i ett bilde.
business|Stage business|Fysisk aktivitet|blocking_staging|preproduction|intermediate|Små konkrete handlinger med kropp eller gjenstander under scenen.|Hun sorterer bestikk for å unngå øyekontakt.
cross|Cross|Kryssing|blocking_staging|preproduction|foundation|En skuespiller beveger seg fra én posisjon eller side til en annen.|Han krysser bak henne og bryter den etablerte maktaksen.
entrance|Entrance|Inngang|blocking_staging|preproduction|foundation|Karakterens ankomst inn i scene eller bilde.|Hun kommer inn før døren har sluttet å vibrere.
exit|Exit|Utgang|blocking_staging|preproduction|foundation|Karakterens forlatelse av scene eller bilde.|Han går, men stemmen blir igjen på telefonen.
axis_of_action|Axis of action|Handlingsakse|blocking_staging|preproduction|foundation|En tenkt linje gjennom den viktigste handlingen eller relasjonen.|Aksen går mellom de to personene ved bordet.
rule_180|180-degree rule|180-gradersregelen|blocking_staging|preproduction|foundation|Kamera holdes normalt på én side av handlingsaksen for å bevare retning.|Aksen krysses først etter et nøytralt bilde som reetablerer rommet.
screen_direction|Screen direction|Skjermretning|blocking_staging|production|foundation|Retningen en person eller gjenstand beveger seg eller ser i bildet.|Hun går konsekvent mot høyre på vei til huset.
eyeline|Eyeline|Blikkretning|blocking_staging|production|foundation|Retningen og høyden en karakter ser mot i bildet.|Begge ser mot samme punkt utenfor rammen.
cheat|Cheat|Jukse plassering|blocking_staging|production|intermediate|En liten justering av kropp eller gjenstand for kameraets behov.|Skuespilleren vrir seg fem grader mot kamera uten at rommet oppleves endret.
motivated_movement|Motivated movement|Motivert bevegelse|blocking_staging|preproduction|foundation|Bevegelse som springer ut av karakterens handling eller situasjon.|Hun går til vinduet fordi hun hører bilen.
shot_size|Shot size|Bildeutsnitt|shot_composition|preproduction|foundation|Hvor mye av motivet og omgivelsene bildet viser.|Et nærbilde skjuler hvem som står bak døren.
extreme_wide|Extreme wide shot|Ekstremt totalbilde|shot_composition|preproduction|foundation|Et svært vidt bilde der miljøet dominerer og personer ofte er små.|En person krysser et enormt snøfelt.
wide_shot|Wide shot|Totalbilde|shot_composition|preproduction|foundation|Et bilde som viser hele kroppen eller en stor del av rommet.|Hele kjøkkenet og avstanden mellom karakterene er synlig.
full_shot|Full shot|Helbilde|shot_composition|preproduction|foundation|Et utsnitt som vanligvis viser en person fra hode til fot.|Karakterens nøling leses gjennom hele kroppen.
medium_shot|Medium shot|Halvnært bilde|shot_composition|preproduction|foundation|Et utsnitt omtrent fra midje eller bryst og opp.|Dialogen beholder både ansikt og håndbevegelser.
medium_close_up|Medium close-up|Nært halvbilde|shot_composition|preproduction|foundation|Et utsnitt omtrent fra bryst eller skuldre og opp.|Samtalen holdes nær uten å isolere karakteren helt.
close_up|Close-up|Nærbilde|shot_composition|preproduction|foundation|Et tett bilde av ansikt eller betydningsfull detalj.|Nærbildet kommer idet karakteren innser sannheten.
extreme_close_up|Extreme close-up|Ekstremt nærbilde|shot_composition|preproduction|foundation|Et svært tett bilde av en liten del av motivet.|Bare øyet og refleksjonen i det er synlig.
insert|Insert|Detaljinnskudd|shot_composition|preproduction|foundation|Et nærbilde av en gjenstand eller handling med narrativ betydning.|Nøkkelen går i feil lomme.
cutaway|Cutaway|Bortklipp|shot_composition|production|foundation|Et bilde som forlater hovedhandlingen for å vise noe relatert.|Vi klipper til klokken mens samtalen fortsetter.
two_shot|Two-shot|Tobildet|shot_composition|preproduction|foundation|Et bilde som inneholder to hovedpersoner.|Begge forblir i rammen når alliansen brytes.
master_shot|Master shot|Masterbilde|shot_composition|preproduction|foundation|Et sammenhengende bilde som dekker hele eller store deler av scenen.|Scenen kan spilles komplett i en bevegelig master.
reaction_shot|Reaction shot|Reaksjonsbilde|shot_composition|production|foundation|Et bilde som viser responsen på en handling, replikk eller oppdagelse.|Vi blir på den tause søsteren etter tilståelsen.
focal_length|Focal length|Brennvidde|camera_lens|preproduction|foundation|Avstanden fra objektivets optiske sentrum til fokusplanet ved uendelig fokus.|En 25 mm gir videre bildevinkel enn en 75 mm på samme sensorformat.
angle_of_view|Angle of view|Bildevinkel|camera_lens|preproduction|foundation|Hvor mye av scenen objektiv og sensor fanger i rammen.|Large format viser mer av objektivets projiserte bilde ved samme brennvidde.
prime_lens|Prime lens|Fast objektiv|camera_lens|preproduction|foundation|Et objektiv med én fast brennvidde.|Scenen fotograferes hovedsakelig på 35 mm og 50 mm.
zoom_lens|Zoom lens|Zoomobjektiv|camera_lens|preproduction|foundation|Et objektiv med variabel brennvidde.|En langsom zoom snevrer inn rommet mens karakteren forstår.
spherical_lens|Spherical lens|Sfærisk objektiv|camera_lens|preproduction|intermediate|Et objektiv uten anamorfisk horisontal kompresjon av bildet.|Sfærisk optikk kombineres med et beskåret 2.39-format.
anamorphic_lens|Anamorphic lens|Anamorfisk objektiv|camera_lens|preproduction|intermediate|Et objektiv som komprimerer bildet horisontalt ved opptak og strekkes i visning.|2x anamorfisk opptak de-squeezes i monitor og post.
depth_of_field|Depth of field|Dybdeskarphet|camera_lens|preproduction|foundation|Området fra nærmeste til fjerneste punkt som oppleves akseptabelt skarpt.|Forgrunn og bakgrunn holdes skarpe i et maktspill.
shallow_focus|Shallow focus|Grunn dybdeskarphet|camera_lens|production|foundation|En smal sone av skarphet med tydelig uskarp for- eller bakgrunn.|Bare ansiktet er skarpt mens rommet faller bort.
deep_focus|Deep focus|Stor dybdeskarphet|camera_lens|production|intermediate|En stor del av rommets dybde holdes lesbart skarp.|Barnet i forgrunn og foreldrene i bakgrunn er samtidig skarpe.
focus_pull|Focus pull|Fokusdragning|camera_lens|production|foundation|En kontrollert endring av fokusavstand under bildet.|Fokus går fra brevet til personen i døren.
rack_focus|Rack focus|Markert fokusskift|camera_lens|production|foundation|Et tydelig fokusdrag mellom motiver eller dybdeplan.|Fokus skifter fra pistolen til eierens ansikt.
sensor_size|Sensor size|Sensorformat|camera_lens|preproduction|intermediate|Det fysiske bildearealet som registrerer objektivets projiserte bilde.|50 mm viser videre utsnitt på large format enn på Super 35.
lens_distortion|Lens distortion|Objektivforvrengning|camera_lens|preproduction|intermediate|Geometrisk eller optisk endring av motivets form, særlig mot bildekantene.|Et vidt objektiv tett på ansiktet overdriver rommet bak.
aperture|Aperture|Blenderåpning|exposure_motion|production|foundation|Den variable åpningen i objektivet som regulerer lysmengde og dybdeskarphet.|Blenderen åpnes for å oppnå mindre dybdeskarphet.
f_stop|F-stop|F-tall|exposure_motion|production|foundation|Forholdet mellom brennvidde og blenderdiameter.|f/2 er mer åpent og slipper nominelt inn mer lys enn f/4.
t_stop|T-stop|T-tall|exposure_motion|production|intermediate|Et eksponeringsmål som tar hensyn til faktisk lystap gjennom objektivet.|To forskjellige cinemaobjektiver settes begge til T2.8.
iso_ei|ISO / Exposure Index|ISO / eksponeringsindeks|exposure_motion|production|foundation|En følsomhets- eller arbeidsindeks brukt til å beregne eksponering.|Kameraet vurderes på EI 800 under testen.
shutter_angle|Shutter angle|Lukkervinkel|exposure_motion|production|foundation|En måte å uttrykke hvor stor del av hver bildeperiode sensoren eksponeres.|180 grader ved 24 fps gir omtrent 1/48 sekund.
shutter_speed|Shutter speed|Lukkertid|exposure_motion|production|foundation|Hvor lenge hvert enkelt bilde eksponeres.|1/500 sekund brukes for skarp og hakkete action.
frame_rate|Frame rate|Bildefrekvens|exposure_motion|production|foundation|Antall bilder som registreres eller vises per sekund.|48 fps avspilt i 24 fps gir halv hastighet.
slow_motion|Slow motion|Sakte film|exposure_motion|production|foundation|Opptak med høyere bildefrekvens enn avspilling slik at tiden strekkes.|En fallende kopp filmes i 96 fps.
motion_blur|Motion blur|Bevegelsesuskarphet|exposure_motion|production|foundation|Uskarphet som oppstår når motiv eller kamera beveger seg under eksponeringen.|Lengre lukkertid gjør løpingen mer flytende og urolig.
exposure|Exposure|Eksponering|exposure_motion|production|foundation|Mengden lys som registreres og hvordan tonene plasseres i opptaksmediet.|Ansiktet prioriteres selv om vinduet mister noe detalj.
dynamic_range|Dynamic range|Dynamisk omfang|exposure_motion|production|intermediate|Spennet mellom mørkeste og lyseste detalj kameraet kan gjengi samtidig.|Interiør og solbelyst eksteriør beholdes i samme bilde.
highlight_rolloff|Highlight roll-off|Overgang i høylys|exposure_motion|production|advanced|Hvordan svært lyse områder gradvis eller brått går mot maksimal hvitverdi.|Myk roll-off lar lampen beholde form før den blir hvit.
nd_filter|Neutral density filter|ND-filter|exposure_motion|production|foundation|Et nøytralt filter som reduserer lys uten tilsiktet fargeendring.|ND brukes ute for å filme med åpen blender.
key_light|Key light|Hovedlys|lighting_color|preproduction|foundation|Det dominerende lyset som definerer motivets viktigste retning og form.|Vinduet fungerer som scenens key light.
fill_light|Fill light|Fylllys|lighting_color|production|foundation|Lys som løfter skyggesiden og styrer kontrast uten å bli nytt hovedlys.|Et svakt bounce gir detalj i ansiktets skyggeside.
backlight|Backlight|Baklys|lighting_color|production|foundation|Lys som treffer motivet bakfra eller bakfra-siden.|Sol gjennom røyk tegner kroppens kant.
practical_light|Practical light|Praktisk lyskilde|lighting_color|preproduction|foundation|En lyskilde som er synlig i scenen, som lampe eller skjerm.|Bordlampen begrunner det varme ansiktslyset.
motivated_lighting|Motivated lighting|Motivert lyssetting|lighting_color|preproduction|foundation|Lys som oppleves å komme fra troverdige kilder i scenens verden.|Et større lys utenfor vinduet etterligner måneskinn.
hard_light|Hard light|Hardt lys|lighting_color|production|foundation|Lys fra en liten eller fjern kilde som gir tydelige skygger.|Direkte sol lager skarpe persienneskygger.
soft_light|Soft light|Mykt lys|lighting_color|production|foundation|Lys fra en stor eller diffus kilde som gir gradvise skyggoverganger.|En stor diffus ramme lager mykt vinduslys.
negative_fill|Negative fill|Negativ fill|lighting_color|production|intermediate|Mørke flater brukes til å redusere reflektert lys på skyggesiden.|Sort tekstil ved ansiktet absorberer rommets strølys.
bounce_light|Bounce light|Reflektert lys|lighting_color|production|foundation|Lys sendes mot en flate og reflekteres mykere mot motivet.|En lampe bounces i en hvit vegg.
color_temperature|Color temperature|Fargetemperatur|lighting_color|production|foundation|En beskrivelse i kelvin av lysets varme eller kjølige karakter.|Tungstenlys rundt 3200 K kontrasteres mot dagslys.
white_balance|White balance|Hvitbalanse|lighting_color|production|foundation|Kameraets referanse for hva som skal gjengis nøytralt.|Kamera balanseres til 4300 K i blandingslys.
palette|Color palette|Fargepalett|lighting_color|development|foundation|Det utvalgte systemet av dominerende og aksentfarger.|Rødt reserveres for øyeblikk der kontroll brytes.
lut|LUT|Oppslagstabell|lighting_color|production|intermediate|En tabell som omformer bildeverdier for visning eller fargebehandling.|En show-LUT brukes i dailies og klipperommet.
production_design|Production design|Produksjonsdesign|design_continuity|preproduction|foundation|Den overordnede visuelle utformingen av filmens fysiske verden.|Leiligheten blir trangere gjennom møblering og ombygging.
art_direction|Art direction|Art direction|design_continuity|preproduction|foundation|Praktisk realisering og organisering av produksjonsdesignerens konsept.|Art director koordinerer byggingen av korridoren.
set_decoration|Set decoration|Set dressing og dekor|design_continuity|preproduction|foundation|Valg og plassering av møbler, tekstiler og miljødetaljer.|Bordet er overfylt slik at karakterene må strekke seg over hverandre.
prop|Prop|Rekvisitt|design_continuity|preproduction|foundation|En gjenstand som brukes eller inngår aktivt i scenen.|Telefonen må fungere likt i alle tagninger.
hero_prop|Hero prop|Hovedrekvisitt|design_continuity|preproduction|intermediate|En særlig viktig rekvisitt som tåler nærbilde og ofte finnes i kopier.|Brevet bygges i flere identiske versjoner.
costume_design|Costume design|Kostymedesign|design_continuity|preproduction|foundation|Utforming av klær og tilbehør som uttrykker karakter og filmens palett.|Jakken blir strammere etter hvert som karakteren mister kontroll.
makeup_hair|Makeup and hairstyling|Sminke og hår|design_continuity|preproduction|foundation|Utforming av hud, hår, alder, skade og stil for karakterene.|Skaden utvikles gjennom dokumenterte stadier.
texture|Texture|Tekstur|design_continuity|preproduction|foundation|Den synlige og taktile kvaliteten i overflater, stoff og miljø.|Glatt kostyme står mot ru vegger.
silhouette|Silhouette|Silhuett|design_continuity|preproduction|foundation|Motivets ytre form, lesbar uavhengig av indre detalj.|Karakterens store frakk gjenkjennes i mørket.
spatial_geography|Spatial geography|Romgeografi|design_continuity|preproduction|foundation|Publikums forståelse av hvor steder og personer befinner seg.|Vi vet hvor utgangen er før brannen starter.
screen_geography|Screen geography|Skjermgeografi|design_continuity|production|foundation|Hvordan romlige forhold representeres gjennom bilder og klipp.|Døren forblir på samme side av karakteren mellom utsnittene.
continuity|Continuity|Kontinuitet|design_continuity|production|foundation|Sammenheng i tid, rom, handling, kostyme, lys og prestasjon.|Koppen er like full før og etter klippet.
assembly|Assembly cut|Assembly|editing_time|postproduction|foundation|En tidlig sammenstilling av opptakene i manus- eller sceneorden.|Alle scenene legges grovt etter hverandre.
rough_cut|Rough cut|Grovklipp|editing_time|postproduction|foundation|En arbeidsversjon der struktur og scenelengde fortsatt utvikles.|En scene flyttes og tre minutter fjernes.
fine_cut|Fine cut|Finklipp|editing_time|postproduction|foundation|En mer presis versjon der bildevalg, rytme og overganger finjusteres.|Pausen før svaret kortes med åtte bilder.
picture_lock|Picture lock|Bildelås|editing_time|postproduction|foundation|Punktet der bilderekkefølge og varighet ikke lenger skal endres vesentlig.|Filmen låses før endelig lydmiks og conform.
continuity_editing|Continuity editing|Kontinuitetsklipp|editing_time|postproduction|foundation|Et klippesystem som gjør tid, rom og handling lett å følge.|Blikk og bevegelse matcher gjennom samtalen.
montage|Montage|Montasje|editing_time|postproduction|foundation|Sammenstilling av bilder som komprimerer tid eller bygger en idé.|Treningen komprimeres gjennom fem handlinger og ett musikalsk forløp.
match_cut|Match cut|Form- eller handlingsmatch|editing_time|postproduction|foundation|Et klipp som kobler bilder gjennom lik form, bevegelse, lyd eller idé.|En rund lampe klipper til solen.
jump_cut|Jump cut|Hoppklipp|editing_time|postproduction|foundation|Et synlig tids- eller posisjonshopp mellom lignende bilder.|Pauser fjernes fra samme kameravinkel.
cross_cutting|Cross-cutting|Kryssklipp|editing_time|postproduction|foundation|Veksling mellom handlinger på forskjellige steder eller tider.|Redningen kryssklippes med faren som nærmer seg.
cut_on_action|Cut on action|Klipp i bevegelse|editing_time|postproduction|foundation|Klippet legges inne i en handling slik at bevegelsen leder overgangen.|Karakteren reiser seg i total og fullfører i halvnært.
ellipsis|Ellipsis|Ellipse|editing_time|postproduction|foundation|Et klipp utelater tid eller handling publikum kan slutte seg til.|Døren lukkes og vi klipper til morgenen etter.
j_cut|J-cut|J-klipp|editing_time|postproduction|foundation|Lyden fra neste bilde begynner før bildet skifter.|Toget høres før vi ser stasjonen.
l_cut|L-cut|L-klipp|editing_time|postproduction|foundation|Lyden fra forrige bilde fortsetter etter at bildet har skiftet.|Tilståelsen fortsetter over reaksjonen i neste rom.
rhythm|Rhythm|Rytme|editing_time|postproduction|foundation|Mønsteret av varighet, pauser, bevegelse og lyd gjennom tid.|Tre raske avbrytelser følges av ett langt stillestående bilde.
production_sound|Production sound|Opptakslyd|sound_music|production|foundation|Dialog og andre lyder registrert under selve opptaket.|Scenen prioriterer ren dialog fremfor viften i lokalet.
room_tone|Room tone|Romtone|sound_music|production|foundation|Opptak av et roms grunnlyd uten hovedhandling eller dialog.|Tretti sekunder romtone tas etter scenen.
wild_track|Wild track|Separat lydopptak|sound_music|production|foundation|Lyd tatt uten synkront bilde, ofte atmosfære eller spesifikk handling.|Fottrinnene tas separat etter tagningen.
ambience|Ambience|Atmosfærelyd|sound_music|production|foundation|Bakgrunnslyder som definerer sted, tid og miljø.|Fjerne tog gjør natten urban og urolig.
adr|ADR|Ettersynkronisert dialog|sound_music|postproduction|foundation|Dialog spilles inn på nytt i studio mot det ferdige bildet.|En vindutsatt replikk tas på nytt med riktig pust og timing.
foley|Foley|Foley-lyd|sound_music|postproduction|foundation|Synkroniserte menneskeskapte lyder for skritt, klær og fysisk kontakt.|Frakkens stoff blir tydeligere når karakteren nærmer seg.
diegetic_sound|Diegetic sound|Diegetisk lyd|sound_music|postproduction|foundation|Lyd som forstås å eksistere i filmens verden.|Musikken kommer fra radioen i scenen.
non_diegetic_sound|Non-diegetic sound|Ikke-diegetisk lyd|sound_music|postproduction|foundation|Lyd som ikke presenteres som en fysisk del av filmens verden.|Orkestermusikken høres bare av publikum.
score|Score|Original filmmusikk|sound_music|postproduction|foundation|Komponert musikk laget for filmens dramatiske og strukturelle behov.|Temaet kommer først komplett etter karakterens avgjørende valg.
spotting_session|Spotting session|Musikk- eller lydspotting|sound_music|postproduction|foundation|Gjennomgang der plassering og funksjon for musikk eller lyd bestemmes.|Musikken starter etter blikket, ikke idet døren åpnes.
sound_bridge|Sound bridge|Lydbro|sound_music|postproduction|foundation|Lyd fortsetter eller begynner over et sceneskifte og binder bilder sammen.|Applaus fortsetter over et tomt rom dagen etter.
sound_perspective|Sound perspective|Lydperspektiv|sound_music|postproduction|intermediate|Hvordan avstand, rom, retning og subjektivitet uttrykkes i lyd.|Dialogen dempes når karakteren får panikk.
final_mix|Final mix|Sluttmiks|sound_music|postproduction|foundation|Den endelige balanseringen av dialog, effekter, atmosfære og musikk.|Musikken senkes slik at pusten blir scenens fokus.
head_of_department|Head of department|Avdelingsleder|production_post|preproduction|foundation|Lederen for et fagområde som foto, design, kostyme eller lyd.|Fotograf og produksjonsdesigner samordner farge og materialer.
first_ad|First assistant director|Første regiassistent|production_post|preproduction|foundation|Lederen for praktisk opptaksavvikling, tidsplan og koordinering på sett.|Første regiassistent beregner tiden for tre kameraoppsett.
dp|Director of photography|Filmfotograf|production_post|preproduction|foundation|Avdelingsleder for kamera og lys som utvikler filmens fotografiske uttrykk.|Regissør og fotograf tester to linsesett før valg.
script_supervisor|Script supervisor|Script og kontinuitetsansvarlig|production_post|production|foundation|Personen som kontrollerer manusdekning, tagninger, kontinuitet og skjermretning.|Script supervisor varsler at blikkretningen ikke matcher.
production_constraint|Production constraint|Produksjonsbegrensning|production_post|preproduction|foundation|En ramme som tid, budsjett, sted, sikkerhet eller vær setter for løsningen.|Solnedgangen gir bare tjue minutter for hovedbildet.
location_scout|Location scout|Locationbefaring|production_post|preproduction|foundation|Kreativ og praktisk vurdering av mulige opptakssteder.|En bred korridor velges for dybdestaging.
tech_scout|Technical scout|Teknisk befaring|production_post|preproduction|foundation|Felles befaring med nøkkelavdelinger for å planlegge gjennomføringen.|Teamet merker hvor kran, strøm og lydposisjon kan være.
floor_plan|Floor plan|Plantegning|production_post|preproduction|foundation|En ovenfra-tegning av rom, personer og kameraoppsett.|Kamera A og B markeres på hver side av bordet.
shooting_schedule|Shooting schedule|Opptaksplan|production_post|preproduction|foundation|Planen for når scener og elementer skal fotograferes.|Alle nattscener samles i samme uke.
setup|Setup|Kameraoppsett|production_post|production|foundation|En kombinasjon av kameraposisjon, optikk, lys og rigg som forberedes samlet.|Tre bilder tas fra samme setup med små omramminger.
company_move|Company move|Flytting av hele enheten|production_post|production|intermediate|Når cast, crew og utstyr flyttes til nytt sted i løpet av dagen.|Et ekstra eksteriør krever en company move og tas ut av planen.
slate|Slate / clapperboard|Klapp|production_post|production|foundation|Tavle og klapp som identifiserer scene, bilde og tagning og gir sync-punkt.|Scene 24, bilde 3B, tagning 2 klappes.
take|Take|Tagning|production_post|production|foundation|Én sammenhengende innspilling fra kamera og lyd starter til de stopper.|Tagning 4 har best prestasjon, men trenger pickup av slutten.
print_take|Print take|Foretrukket tagning|production_post|production|foundation|En tagning regissøren markerer som særlig brukbar for klipp.|Regissøren markerer tagning 6 som print.
circle_take|Circle take|Sirklet tagning|production_post|production|foundation|En foretrukket tagning markert i rapport eller metadata.|Script supervisor sirkler tagning 3.
pickup|Pickup|Supplerende delopptak|production_post|production|foundation|En kort del av en scene tas på nytt uten full ny tagning.|De tar pickup fra replikken til døren lukkes.
safety_take|Safety take|Sikkerhetstagning|production_post|production|foundation|En ekstra tagning etter en brukbar versjon for å sikre et alternativ.|Sikkerhetstagningen prøver lavere intensitet.
video_assist|Video assist|Videomonitorering|production_post|production|foundation|Systemet som lar regissør og fagfolk se kamerabildet under opptak.|Regissøren kontrollerer eyeline og komposisjon på monitoren.
rushes|Rushes|Råopptak|production_post|production|foundation|Et vanlig navn på nylig prosessert opptaksmateriale.|Regissøren ser rushes før neste dags nærbilder.
color_grade|Color grade|Fargekorrigering og grading|production_post|postproduction|foundation|Kreativ og teknisk bearbeiding av eksponering, kontrast og farge etter klipp.|Hud holdes konsistent mens bakgrunnen kjøles gradvis.
dcp|Digital Cinema Package|Digital kinopakke|production_post|postproduction|foundation|Standardisert filpakke for digital kinovisning med bilde, lyd og metadata.|Finalen kvalitetssikres fra DCP i kinosalen.
wardrobe_test|Wardrobe test|Kostymeprøve for kamera|production_post|preproduction|intermediate|Kostymer testes med skuespiller, kamera og lys før opptak.|En stripet skjorte byttes etter at kameratesten viser moaré.
`.trim();

export const DIRECTOR_TERMS: DirectorTerm[] = TERM_SEEDS.split("\n").map((line) => {
  const parts = line.split("|");
  if (parts.length !== 8) throw new Error(`Invalid director terminology row with ${parts.length} fields: ${line}`);
  const [id, term, norwegian, categoryValue, phaseValue, levelValue, definition, example] = parts;
  const category = categoryValue as DirectorKnowledgeCategoryId;
  if (!CATEGORY_SOURCES[category]) throw new Error(`Unknown director terminology category: ${categoryValue}`);
  if (!id || !term || !norwegian || !definition || !example) throw new Error(`Incomplete director terminology row: ${line}`);
  if (!isPhase(phaseValue)) throw new Error(`Unknown director terminology phase: ${phaseValue}`);
  if (!isLevel(levelValue)) throw new Error(`Unknown director terminology level: ${levelValue}`);
  return {
    id,
    term,
    norwegian,
    category,
    phase: phaseValue,
    level: levelValue,
    definition,
    directorUse: CATEGORY_USE[category],
    example,
    sourceIds: CATEGORY_SOURCES[category],
  };
});

export function getDirectorTerm(termId: string): DirectorTerm | undefined {
  return DIRECTOR_TERMS.find((term) => term.id === termId);
}

export function searchDirectorTerms(
  query: string,
  category: DirectorKnowledgeCategoryId | "all" = "all",
  phase: DirectorKnowledgePhase | "all" = "all",
): readonly DirectorTerm[] {
  const normalizedQuery = normalizeSearchText(query);
  return DIRECTOR_TERMS.filter((term) => {
    if (category !== "all" && term.category !== category) return false;
    if (phase !== "all" && term.phase !== phase) return false;
    if (!normalizedQuery) return true;
    return normalizeSearchText([term.term, term.norwegian, term.definition, term.directorUse, term.example].join(" ")).includes(normalizedQuery);
  });
}

export function getDirectorTermsForWorkflowStep(step: DirectorWorkflowStep): readonly DirectorTerm[] {
  return step.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function getDirectorKnowledgeCategory(categoryId: DirectorKnowledgeCategoryId) {
  return DIRECTOR_KNOWLEDGE_CATEGORIES.find((category) => category.id === categoryId);
}

function isPhase(value: string): value is DirectorKnowledgePhase {
  return value === "development" || value === "preproduction" || value === "production" || value === "postproduction";
}

function isLevel(value: string): value is DirectorKnowledgeLevel {
  return value === "foundation" || value === "intermediate" || value === "advanced";
}

function normalizeSearchText(value: string): string {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
