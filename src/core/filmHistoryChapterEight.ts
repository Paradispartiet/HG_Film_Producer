import type { FilmHistoryBookChapter, FilmHistoryBookSource } from "./filmHistoryBook.js";
import { filmHistoryChapterEightMovementOne } from "./filmHistoryChapterEightMovementOne.js";
import { filmHistoryChapterEightMovementTwo } from "./filmHistoryChapterEightMovementTwo.js";
import { filmHistoryChapterEightMovementThree } from "./filmHistoryChapterEightMovementThree.js";

export const filmHistoryChapterEightSources: readonly FilmHistoryBookSource[] = [
  { id: "ch8_field_moma", title: "The French Avant-Garde of the 1920s", publisher: "Museum of Modern Art", url: "https://www.moma.org/explore/inside_out/2010/04/13/the-french-avant-garde-of-the-1920s/" },
  { id: "ch8_delluc_cinematheque", title: "Louis Delluc, un impressionniste en éclaireur", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/762.html" },
  { id: "ch8_dulac_moma", title: "Germaine Dulac: Duty, Deviance, and Desire", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/film/802" },
  { id: "ch8_dulac_classic_modern", title: "Germaine Dulac, entre classique, moderne, et avant garde", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/1521.html" },
  { id: "ch8_dulac_sensations", title: "Germaine Dulac : sensations cinégraphiques à la Maison des rêves", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/1755.html" },
  { id: "ch8_dulac_retrospective", title: "Rétrospective Germaine Dulac", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/cycle/germaine-dulac-943.html" },
  { id: "ch8_epstein_retrospective", title: "Rétrospective Jean Epstein", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/cycle/jean-epstein-117.html" },
  { id: "ch8_epstein_corpus", title: "Jean Epstein — Catalogue des restaurations et tirages", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/catalogues/restaurations-tirages/corpus.php?id=7" },
  { id: "ch8_france1920_corpus", title: "France années 1920 — Catalogue des restaurations et tirages", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/catalogues/restaurations-tirages/corpus.php?id=11" },
  { id: "ch8_moma_avant_term", title: "Experimentation in Film / The Avant-Garde", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/terms/film/experimentation-in-film-the-avant-garde" },
  { id: "ch8_coeur_cinematheque", title: "Cœur fidèle", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/48086.html" },
  { id: "ch8_bfi_1923", title: "10 great films of 1923", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1923" },
  { id: "ch8_bfi_silent_romances", title: "10 great silent romances", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-silent-romances" },
  { id: "ch8_usher_cinematheque", title: "La Chute de la maison Usher", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/48361.html" },
  { id: "ch8_usher_restoration", title: "La Chute de la maison Usher — Catalogue des restaurations et tirages", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id=48361" },
  { id: "ch8_roue_cinematheque", title: "La Roue", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/48689.html" },
  { id: "ch8_roue_launch", title: "La Roue d’Abel Gance : Le lancement d’un film d’exception", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/1809.html" },
  { id: "ch8_napoleon_cinematheque", title: "Napoléon vu par Abel Gance", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/48685.html" },
  { id: "ch8_napoleon_comet", title: "The Napoléon Comet: The Expert Appraisal of a Collection", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/662.html" },
  { id: "ch8_napoleon_machines", title: "Machines — Le triple écran d'Abel Gance", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/exposition-machines-guide.html" },
  { id: "ch8_napoleon_bfi", title: "Napoleon: 10 unmissable highlights from Abel Gance's five-and-a-half-hour masterpiece", publisher: "British Film Institute", url: "https://www.bfi.org.uk/features/napoleon-highlights-abel-gance-silent-film" },
  { id: "ch8_napoleon_grande_version", title: "Napoléon vu par Abel Gance — current Grande Version parts 1 and 2", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/154798.html" },
  { id: "ch8_inhumaine_cinematheque", title: "L'Inhumaine", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/49387.html" },
  { id: "ch8_ballet_moma", title: "Fernand Léger. Ballet mécanique. 1924", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/303856" },
  { id: "ch8_ballet_bfi", title: "Ballet mécanique (1924)", publisher: "British Film Institute", url: "https://www.bfi.org.uk/film/cac5e43b-cfeb-5086-b6eb-49959f9be138/ballet-mecanique" },
  { id: "ch8_bfi_french_avant", title: "10 great French avant-garde films of the 1920s", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-french-avant-garde-films-1920s" },
  { id: "ch8_emak_moma", title: "Man Ray. Emak-Bakia", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/works/305153" },
  { id: "ch8_etoile_cinematheque", title: "L'Étoile de mer", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/53940.html" },
  { id: "ch8_etoile_object", title: "L'étoile de mer de Man Ray offerte par Robert Desnos", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/objet/1284.html" },
  { id: "ch8_entracte_cinematheque", title: "Entr'acte", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/47671.html" },
  { id: "ch8_entracte_fondation", title: "Restaurations — Entr'acte, René Clair, 1924", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/cms/restaurations" },
  { id: "ch8_entracte_pompidou", title: "Entr'acte", publisher: "Centre Pompidou", url: "https://www.centrepompidou.fr/fr/ressources/oeuvre/cByj8A" },
  { id: "ch8_bfi_1924", title: "10 great films of 1924", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-films-1924" },
  { id: "ch8_passion_cinematheque", title: "La Passion de Jeanne d'Arc", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/48248.html" },
  { id: "ch8_dreyer_writings", title: "Carl Th. Dreyer : Films et écrits", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/article/954.html" },
  { id: "ch8_passion_bfi_catholic", title: "10 great Catholic films", publisher: "British Film Institute", url: "https://www.bfi.org.uk/lists/10-great-catholic-films" },
  { id: "ch8_dreyer_retrospective", title: "Rétrospective Carl Theodor Dreyer", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/cycle/carl-theodor-dreyer-357.html" },
  { id: "ch8_beudet_cinematheque", title: "La Souriante madame Beudet", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/57083.html" },
  { id: "ch8_beudet_fondation", title: "Programme Germaine Dulac", publisher: "Fondation Jérôme Seydoux-Pathé", url: "https://www.fondation-jeromeseydoux-pathe.com/event/3234" },
  { id: "ch8_coquille_cinematheque", title: "La Coquille et le clergyman", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/54125.html" },
  { id: "ch8_menilmontant_cinematheque", title: "Ménilmontant", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/102657.html" },
  { id: "ch8_menilmontant_restoration", title: "Ménilmontant — Catalogue des restaurations et tirages", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id=102657" },
  { id: "ch8_chien_cinematheque", title: "Un chien andalou", publisher: "La Cinémathèque française", url: "https://www.cinematheque.fr/film/47197.html" },
  { id: "ch8_dali_moma", title: "Salvador Dalí: Creator/Collaborator", publisher: "Museum of Modern Art", url: "https://www.moma.org/calendar/film/610" },
  { id: "ch8_bunuel_moma", title: "Luis Buñuel", publisher: "Museum of Modern Art", url: "https://www.moma.org/collection/artists/31258" },
];

const sections = [
  ...filmHistoryChapterEightMovementOne,
  ...filmHistoryChapterEightMovementTwo,
  ...filmHistoryChapterEightMovementThree,
];

const sourceIds = new Set(filmHistoryChapterEightSources.map((source) => source.id));
if (sourceIds.size !== filmHistoryChapterEightSources.length) throw new Error("Chapter 8 source IDs must be unique");
if (new Set(filmHistoryChapterEightSources.map((source) => source.url)).size !== filmHistoryChapterEightSources.length) throw new Error("Chapter 8 source URLs must be unique");
for (const source of filmHistoryChapterEightSources) {
  if (!source.id.startsWith("ch8_")) throw new Error(`Chapter 8 source ID must start with ch8_: ${source.id}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Chapter 8 source URL must be HTTPS: ${source.id}`);
}
for (const section of sections) {
  for (const sourceId of section.sourceIds) {
    if (!sourceIds.has(sourceId)) throw new Error(`Chapter 8 section ${section.id} references unknown source ${sourceId}`);
  }
}

export const filmHistoryChapterEight: FilmHistoryBookChapter = {
  id: "french-avant-gardes",
  number: 8,
  title: "French Impressionism, Surrealism and the avant-gardes",
  period: "1918–1930",
  summary: "French avant-garde cinema in the 1920s was not one anti-commercial style. Critics, feature producers, independent filmmakers, feminist organizers, painters, poets, musicians, patrons, cine-clubs and specialist venues built overlapping systems in which photogénie, subjective vision, rhythmic montage, abstraction, Dada and Surrealist association became practical production problems. The chapter follows six playable Atlas anchors—Cœur fidèle, Napoléon, Un Chien Andalou, The Smiling Madame Beudet, Entr'acte and the French-produced boundary case The Passion of Joan of Arc—while keeping nine further films as comparisons and ten theories or institutions as historical objects rather than fake scenarios.",
  status: "full",
  learningObjectives: [
    "Explain why French Impressionism, Dada, cinéma pur and Surrealism should not be collapsed into one avant-garde style preset.",
    "Define photogénie as a contested historical theory of cinematic transformation rather than a measurable property of faces or objects.",
    "Connect Delluc, Epstein and Dulac's critical writing to concrete production choices in movement, duration, framing and montage.",
    "Use The Smiling Madame Beudet to analyze subjective form, gendered social space and feminist authorship without a simplistic empowerment score.",
    "Use Cœur fidèle to reconstruct perception-led camera and editing as collaborative production rather than a lone-inventor story.",
    "Use La Roue and Napoléon to connect accelerated montage and optical experimentation to large crews, apparatus and version history.",
    "Explain Polyvision as capture plus three-projector exhibition infrastructure rather than an aspect-ratio effect.",
    "Use L'Inhumaine to analyze cross-art production design and the labor hidden by director-centered attribution.",
    "Explain cinéma pur and Ballet mécanique through repetition, objects, rhythm and nonnarrative organization without assuming that plotlessness means randomness.",
    "Use Man Ray to connect artist-film practice, optical transformation, poetic adaptation and small-scale production networks.",
    "Use Entr'acte to show how theatrical event design and musical accompaniment can shape a film before production begins.",
    "Use The Passion of Joan of Arc as a French-production boundary anchor without relabeling Dreyer as an Impressionist or Surrealist director.",
    "Use La Coquille et le clergyman to distinguish screenplay authorship, directorial control, reception conflict and later canon formation.",
    "Use Un Chien Andalou to reconstruct Surrealist association as disciplined collaboration while keeping bodily and animal harm historical rather than imitable.",
    "Connect cine-clubs, specialist cinemas, patrons and artist networks to alternative financing and exhibition without pretending avant-garde production existed outside economics.",
    "Maintain strict boundaries among premiere versions, recuts, restorations, reconstructed accompaniment and modern digital presentation.",
    "Explain why the 1930 sound threshold does not retroactively turn silent-era accompaniment into synchronized production sound or erase silent craft overnight.",
  ],
  keyTerms: [
    "French Impressionism", "first French avant-garde", "photogénie", "subjective vision", "associative montage", "rhythmic montage", "superimposition", "slow motion", "accelerated motion", "multiple exposure", "cinéma pur", "Dada", "Surrealism", "automatic writing", "cross-art collaboration", "artist film", "cine-club", "specialist cinema", "alternative exhibition", "patronage", "event cinema", "Ballets Suédois", "Studio des Ursulines", "Studio 28", "Polyvision", "triple-screen projection", "version criticism", "restoration", "reconstructed accompaniment", "feminist film history", "authorship dispute", "subjective close-up", "optical transformation", "silent accompaniment", "canon formation", "representational harm",
  ],
  sections,
  filmReferences: [
    { title: "The Passion of Joan of Arc", year: 1928, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_passion_of_joan_of_arc_1928", note: "French-produced radical close-up and performance anchor kept as a boundary case rather than falsely relabeled as an Impressionist or Surrealist manifesto." },
    { title: "Cœur fidèle", year: 1923, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_coeur_fidele_1923", note: "Epstein's playable anchor for photogénie, subjective camera, rhythmic editing and collaborative perception-led production." },
    { title: "Napoléon", year: 1927, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_napoleon_1927", note: "Gance's playable epic-scale problem in mobile camera systems, montage, multiple images, Polyvision infrastructure and rigorous version criticism." },
    { title: "Un Chien Andalou", year: 1929, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_un_chien_andalou_1929", note: "Buñuel and Dalí's playable Surrealist collaboration in constrained discontinuity, small-scale financing, alternative exhibition and ethical handling of disturbing imagery." },
    { title: "The Smiling Madame Beudet", year: 1923, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_the_smiling_madame_beudet_1923", note: "Dulac's playable anchor for gendered domestic space, subjective fantasy, associative montage and feminist film history." },
    { title: "Entr'acte", year: 1924, role: "anchor_film", atlasDecision: "use_existing_atlas_case", atlasScenarioId: "scenario_entr_acte_1924", note: "Clair, Picabia, de Maré and Satie connect Dada, ballet, trick imagery and rhythmic editing to event-based exhibition and later version change." },
    { title: "La Roue", year: 1923, role: "comparative_film", atlasDecision: "P2", note: "Essential Gance comparison for accelerated montage, railway-scale production and extreme version history; Napoléon already supplies the distinct Gance Production Case." },
    { title: "Ballet mécanique", year: 1924, role: "comparative_film", atlasDecision: "P2", note: "Léger and Murphy's machine-body abstraction expands cinéma pur, repetition and object rhythm without requiring a redundant short-form Production Case." },
    { title: "La Coquille et le Clergyman", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Dulac and Artaud's contested collaboration is indispensable for authorship, rhythm and Surrealist historiography while Madame Beudet already carries the distinct Dulac gameplay problem." },
    { title: "The Fall of the House of Usher", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Epstein extends slow motion, superimposition, mobile camera and material atmosphere, while Cœur fidèle remains the foundational playable Epstein case." },
    { title: "Ménilmontant", year: 1926, role: "comparative_film", atlasDecision: "P2", note: "Kirsanoff's independent urban melodrama broadens location texture, ellipsis and subjective montage without duplicating the existing perception-led Production Cases." },
    { title: "Emak-Bakia", year: 1926, role: "comparative_film", atlasDecision: "P2", note: "Man Ray's cinegraphic experiment broadens optical transformation and artist-film practice while remaining book-level evidence beside the stronger playable short-film anchors." },
    { title: "L'Étoile de mer", year: 1928, role: "comparative_film", atlasDecision: "P2", note: "Man Ray and Robert Desnos connect poetic adaptation, distorted vision, objects and Surrealist association without adding a redundant Production Case." },
    { title: "L'Inhumaine", year: 1924, role: "comparative_film", atlasDecision: "P2", note: "L'Herbier's modernist feature is central evidence for architecture, costume, music and cross-art collaboration, but those logistics overlap existing design and scale cases." },
    { title: "L'Âge d'Or", year: 1930, role: "comparative_film", atlasDecision: "P2", note: "Buñuel's patron-supported Surrealist feature extends provocation, censorship and the sound threshold; Un Chien Andalou remains the cleaner silent-era Surrealist Production Case." },
  ],
  historicalObjects: [
    { label: "Photogénie and French Impressionist film theory", role: "historical_object", atlasDecision: "no_production_case", note: "Delluc, Epstein, Dulac and others theorized cinema's transformation of faces, objects, movement and duration; the contested concept remains theory rather than a measurable camera preset or gameplay score." },
    { label: "Film criticism, journals, ciné-clubs and specialist cinemas", role: "historical_object", atlasDecision: "no_production_case", note: "Writing, clubs and specialist venues built audiences and vocabularies for film art outside ordinary commercial circulation; they enabled movements but are institutions, not films." },
    { label: "Independent producers, patrons and alternative financing", role: "historical_object", atlasDecision: "no_production_case", note: "Small companies, private money, artist networks and wealthy patrons created different freedoms and dependencies from vertically integrated studios while remaining real economic structures." },
    { label: "Dada and Surrealist artist networks", role: "historical_object", atlasDecision: "no_production_case", note: "Poetry, painting, photography, performance and anti-bourgeois artistic networks shaped collaboration and exhibition without amounting to one reproducible visual style recipe." },
    { label: "Cinéma pur and abstract moving-image practice", role: "historical_object", atlasDecision: "no_production_case", note: "Artists explored rhythm, shape, repetition, speed and photographic transformation without conventional narrative obligations across many shorts rather than one canonical scenario." },
    { label: "Alternative exhibition and event cinema", role: "historical_object", atlasDecision: "no_production_case", note: "Studio des Ursulines, Studio 28, ballet programs and cine-club screenings created distinct contexts for short experimental work and are modeled as exhibition infrastructure rather than fake films." },
    { label: "Cross-art production design and modernist collaboration", role: "historical_object", atlasDecision: "no_production_case", note: "Architects, painters, musicians, poets, fashion designers and filmmakers collaborated across departments, making avant-garde cinema a production network rather than director-only authorship." },
    { label: "Gender, authorship and unequal canon formation", role: "historical_object", atlasDecision: "no_production_case", note: "Germaine Dulac and other women were central to production, theory and organization; later canons and attribution disputes can obscure that labor and require explicit evidentiary treatment." },
    { label: "Censorship, scandal and representational harm", role: "historical_object", atlasDecision: "no_production_case", note: "Provocation could trigger censorship or political reaction, while shocking imagery may involve real harm or vulnerable bodies; historical analysis never converts dangerous acts into player objectives." },
    { label: "Restoration, alternate cuts and reconstructed accompaniment", role: "historical_object", atlasDecision: "no_production_case", note: "La Roue, Napoléon and many shorts survive through complex restoration histories, so modern runtimes, music and reconstructed versions remain distinct from original production and exhibition states." },
  ],
  sources: filmHistoryChapterEightSources,
};
