import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

/** Source-controlled display-only translations for verified explanatory metadata.
 * Original source titles, publishers, links, claim support IDs, and canonical
 * verification records are never changed. Exact unknown text stays untouched.
 */
type SourceCopyRow = readonly [canonical: string, nb: string, fr: string, pt: string];

export const FILM_STUDY_SOURCE_COPY_ROWS = {
  scenario_12_angry_men_1957: [
    [
      "The brief's one-room blocking, argument-led escalation, tightening faces, controlled lens progression, and lean production method are supported by production history and cinematography analysis.",
      "Produksjonshistorie og filmanalyse underbygger briefens plassering av skuespillerne i ett rom, konfliktopptrapping gjennom argumentasjon, tettere ansiktsutsnitt, styrt utvikling i objektivbruk og effektive produksjonsmetode.",
      "L'histoire de la production et l'analyse photographique étayent la disposition des acteurs dans une seule pièce, la montée du conflit par le débat, les visages de plus en plus serrés, la progression maîtrisée des focales et la méthode de production économe décrites dans le brief.",
      "A história da produção e a análise da fotografia sustentam a marcação numa única sala, a escalada através do debate, os enquadramentos cada vez mais fechados dos rostos, a progressão controlada das objetivas e o método de produção económico descritos no briefing.",
    ],
    [
      "Production history documenting the real-jury-room rehearsals, 365 planned setups, claustrophobic set strategy, and 17-day shoot.",
      "Produksjonshistorie som dokumenterer prøver i et virkelig juryrom, 365 planlagte kameraoppsett, en klaustrofobisk scenografisk strategi og 17 dagers opptak.",
      "Historique de production documentant les répétitions dans une véritable salle des jurés, les 365 dispositifs de prise de vues prévus, le choix d'un décor claustrophobe et le tournage de 17 jours.",
      "História da produção que documenta os ensaios numa sala de jurados real, os 365 posicionamentos de câmara planeados, a estratégia de cenário claustrofóbico e os 17 dias de rodagem.",
    ],
    [
      "Criterion analysis documents the shift from wide-angle to telephoto lenses, reduced depth, and increasing emphasis on faces as pressure rises.",
      "Criterions analyse dokumenterer overgangen fra vidvinkel til teleobjektiv, mindre opplevd dybde og stadig sterkere vekt på ansikter etter hvert som presset øker.",
      "L'analyse de Criterion documente le passage du grand-angle au téléobjectif, la réduction de la profondeur perçue et l'accent croissant sur les visages à mesure que la pression monte.",
      "A análise da Criterion documenta a passagem das grandes-angulares às teleobjetivas, a redução da profundidade aparente e o foco crescente nos rostos à medida que a pressão aumenta.",
    ],
    [
      "Archival edition record identifying the production-history, Lumet, Reginald Rose, and Boris Kaufman materials used to document the film's construction.",
      "Arkivutgavens oversikt identifiserer materialet om produksjonshistorien, Lumet, Reginald Rose og Boris Kaufman som brukes til å dokumentere hvordan filmen ble til.",
      "La notice de l'édition d'archives recense les documents sur la production, Lumet, Reginald Rose et Boris Kaufman utilisés pour retracer la fabrication du film.",
      "O registo da edição de arquivo identifica os materiais sobre a produção, Lumet, Reginald Rose e Boris Kaufman utilizados para documentar a construção do filme.",
    ],
  ],
  scenario_the_machinist_2004: [
    [
      "The brief's nightmare pacing, industrial-location pressure, geographic dislocation, and deliberately timeless visual approach are supported by a director interview and institutional production records.",
      "Et regissørintervju og institusjonelle produksjonsregistre underbygger briefens marerittaktige tempo, presset fra industrimiljøene, den geografiske fremmedgjøringen og det bevisst tidløse visuelle uttrykket.",
      "Un entretien avec le réalisateur et des archives institutionnelles de production étayent le rythme cauchemardesque, la pression des lieux industriels, le dépaysement géographique et l'esthétique volontairement intemporelle décrits dans le brief.",
      "Uma entrevista com o realizador e registos institucionais de produção sustentam o ritmo de pesadelo, a pressão dos espaços industriais, o deslocamento geográfico e a estética deliberadamente intemporal descritos no briefing.",
    ],
    [
      "Anderson describes a languid, old-fashioned nightmare structure, menace in mundane objects, industrial noise, and the deliberate removal of cultural markers to create dislocation.",
      "Anderson beskriver en langsom, gammeldags marerittstruktur, trusler i hverdagsgjenstander, industristøy og en bevisst fjerning av kulturelle kjennetegn for å skape fremmedgjøring.",
      "Anderson décrit une structure de cauchemar lente et surannée, la menace des objets ordinaires, les bruits industriels et l'effacement délibéré des repères culturels pour créer un sentiment de dépaysement.",
      "Anderson descreve uma estrutura de pesadelo lenta e antiquada, ameaças nos objetos banais, ruído industrial e a eliminação deliberada de referências culturais para criar deslocamento.",
    ],
    [
      "Institutional production record confirming the 35mm production and the credited cinematographer, editor, composer, and art director behind the film's craft system.",
      "Et institusjonelt produksjonsregister bekrefter opptak på 35 mm og oppgir fotografen, klipperen, komponisten og scenografiansvarlig som står bak filmens håndverksmessige helhet.",
      "Une fiche institutionnelle de production confirme le tournage en 35 mm et identifie le directeur de la photographie, le monteur, le compositeur et le directeur artistique ayant contribué à la fabrication du film.",
      "Um registo institucional de produção confirma a rodagem em 35 mm e identifica o diretor de fotografia, o montador, o compositor e o diretor artístico responsáveis pelo trabalho técnico e artístico do filme.",
    ],
    [
      "Official location record confirming the Barcelona-area industrial, transport, amusement-park, and infrastructure locations used to construct the film's displaced world.",
      "Et offisielt opptaksstedsregister bekrefter industri-, transport-, fornøyelsespark- og infrastrukturområdene rundt Barcelona som ble brukt til å skape filmens fremmedgjorte verden.",
      "Un registre officiel des lieux de tournage confirme l'utilisation, autour de Barcelone, de sites industriels, de transport, de parc d'attractions et d'infrastructures pour créer l'univers décalé du film.",
      "Um registo oficial de locais de rodagem confirma a utilização, na região de Barcelona, de espaços industriais, de transportes, de parque de diversões e de infraestruturas para criar o mundo deslocado do filme.",
    ],
  ],
  scenario_the_lives_of_others_2006: [
    [
      "The brief's surveillance-as-action structure, muted institutional world, analogue listening system, restrained performances, and conscience-driven dramatic arc are supported by filmmaker and cinematographer accounts.",
      "Beretninger fra filmskapere og filmfotografen underbygger briefens overvåking som dramatisk handling, dempede institusjonsmiljø, analoge avlyttingssystem, tilbakeholdne skuespill og utvikling drevet av samvittighetskonflikt.",
      "Les témoignages des cinéastes et du directeur de la photographie étayent la surveillance comme moteur de l'action, l'univers institutionnel feutré, les dispositifs d'écoute analogiques, le jeu retenu et l'évolution dramatique portée par la conscience décrits dans le brief.",
      "Os relatos dos cineastas e do diretor de fotografia sustentam a vigilância como ação dramática, o ambiente institucional apagado, o sistema analógico de escuta, as interpretações contidas e o arco dramático guiado pela consciência descritos no briefing.",
    ],
    [
      "The writer-director and cast describe the film's origin in listening, its Stasi research, low-budget production, and restrained moral transformation.",
      "Manusforfatteren og regissøren samt skuespillerne beskriver filmens utgangspunkt i lytting, undersøkelsene av Stasi, lavbudsjettproduksjonen og den tilbakeholdne moralske forvandlingen.",
      "Le scénariste-réalisateur et les interprètes décrivent l'origine du film dans l'écoute, les recherches sur la Stasi, le tournage à petit budget et la transformation morale discrète.",
      "O argumentista-realizador e o elenco descrevem a origem do filme na escuta, a investigação sobre a Stasi, a produção de baixo orçamento e a transformação moral subtil.",
    ],
    [
      "Bogdanski describes extensive GDR visual research using photographs, books, films, and personal memory.",
      "Bogdanski beskriver omfattende visuelle undersøkelser av DDR ved hjelp av fotografier, bøker, filmer og personlige minner.",
      "Bogdanski décrit des recherches visuelles approfondies sur la RDA à partir de photographies, de livres, de films et de souvenirs personnels.",
      "Bogdanski descreve uma pesquisa visual aprofundada sobre a RDA através de fotografias, livros, filmes e memórias pessoais.",
    ],
    [
      "The BFI review documents the deliberately muted production design, sombre cinematography, music, and restrained performance system.",
      "BFIs anmeldelse dokumenterer det bevisst dempede produksjonsdesignet, det dystre fotoarbeidet, musikken og det tilbakeholdne skuespillet.",
      "L'analyse du BFI décrit les décors volontairement sobres, la photographie sombre, la musique et le jeu retenu.",
      "A crítica do BFI documenta a cenografia deliberadamente discreta, a fotografia sombria, a música e as interpretações contidas.",
    ],
  ],
} as const satisfies Readonly<Record<string, readonly SourceCopyRow[]>>;

const localizedSourceCopy: ReadonlyMap<string, ReadonlyMap<string, SourceCopyRow>> = new Map(
  Object.entries(FILM_STUDY_SOURCE_COPY_ROWS).map(([id, rows]) => [
    id, new Map<string, SourceCopyRow>(rows.map((row) => [row[0], row])),
  ]),
);

export function presentFilmStudySourceText(
  language: FilmWorkLanguage,
  scenarioId: string,
  canonical: string,
): string {
  if (language === "en") return canonical;
  const row = localizedSourceCopy.get(scenarioId)?.get(canonical);
  return row?.[language === "nb" ? 1 : language === "fr" ? 2 : 3] ?? canonical;
}

/** Technical category labels only; source.supports values remain canonical. */
export const FILM_STUDY_SOURCE_SUPPORT_LABELS: Readonly<Record<FilmWorkLanguage, Readonly<Record<string, string>>>> = {
  en: { overall: "Overall", screenplay: "Screenplay", cinematography: "Cinematography", editing: "Editing", sound: "Sound" },
  nb: { overall: "Helhet", screenplay: "Manus", cinematography: "Foto", editing: "Klipp", sound: "Lyd" },
  fr: { overall: "Ensemble", screenplay: "Scénario", cinematography: "Photographie", editing: "Montage", sound: "Son" },
  pt: { overall: "Conjunto", screenplay: "Argumento", cinematography: "Fotografia", editing: "Montagem", sound: "Som" },
};

export function presentFilmStudySourceSupport(language: FilmWorkLanguage, canonical: string): string {
  return FILM_STUDY_SOURCE_SUPPORT_LABELS[language][canonical] ?? canonical;
}
