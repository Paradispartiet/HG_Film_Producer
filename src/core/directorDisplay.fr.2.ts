export type DirectorLocalizedTermCopy = {
  readonly label: string;
  readonly definition: string;
  readonly example: string;
};

const FR_TERM_SEEDS_2 = `
frame_rate|Cadence d’images|Le nombre d’images enregistrées ou affichées par seconde.|48 i/s lus à 24 i/s produisent une vitesse divisée par deux.
slow_motion|Ralenti|Une prise de vues à une cadence supérieure à la cadence de lecture afin d’étirer le temps.|Une tasse qui tombe est filmée à 96 i/s.
motion_blur|Flou de mouvement|Le flou produit lorsque le sujet ou la caméra se déplace pendant l’exposition.|Une obturation plus longue rend la course plus fluide et plus instable.
exposure|Exposition|La quantité de lumière enregistrée et la manière dont les tonalités sont placées dans le support d’image.|Le visage est prioritaire même si la fenêtre perd une partie de ses détails.
dynamic_range|Plage dynamique|L’écart entre le détail le plus sombre et le plus clair que la caméra peut reproduire simultanément.|L’intérieur et l’extérieur éclairé par le soleil restent lisibles dans le même plan.
highlight_rolloff|Transition des hautes lumières|La manière dont les zones très lumineuses évoluent progressivement ou brutalement vers la valeur blanche maximale.|Une transition douce permet à la lampe de conserver sa forme avant de devenir blanche.
nd_filter|Filtre ND|Un filtre neutre qui réduit la lumière sans changement de couleur recherché.|Un filtre ND est utilisé en extérieur pour filmer à grande ouverture.
key_light|Lumière principale|La lumière dominante qui définit la direction et la forme principales du sujet.|La fenêtre sert de lumière principale à la scène.
fill_light|Lumière de remplissage|Une lumière qui relève le côté ombré et contrôle le contraste sans devenir une nouvelle lumière principale.|Un léger rebond conserve du détail sur le côté ombré du visage.
backlight|Contre-jour|Une lumière qui atteint le sujet depuis l’arrière ou l’arrière-latéral.|Le soleil à travers la fumée dessine le contour du corps.
practical_light|Source pratique|Une source lumineuse visible dans la scène, comme une lampe ou un écran.|La lampe de table justifie la lumière chaude sur le visage.
motivated_lighting|Éclairage motivé|Un éclairage qui paraît provenir de sources crédibles dans le monde de la scène.|Une source plus puissante hors de la fenêtre imite le clair de lune.
hard_light|Lumière dure|Une lumière provenant d’une petite source ou d’une source éloignée qui produit des ombres nettes.|Le soleil direct crée des ombres de stores très marquées.
soft_light|Lumière douce|Une lumière provenant d’une grande source ou d’une source diffusée qui produit des transitions d’ombre progressives.|Un grand cadre diffusant produit une lumière de fenêtre douce.
negative_fill|Remplissage négatif|L’emploi de surfaces sombres pour réduire la lumière réfléchie du côté ombré.|Un tissu noir près du visage absorbe la lumière parasite de la pièce.
bounce_light|Lumière réfléchie|Une lumière dirigée vers une surface puis réfléchie plus doucement vers le sujet.|Une lampe est réfléchie sur un mur blanc.
color_temperature|Température de couleur|Une description, en kelvins, du caractère chaud ou froid de la lumière.|Une source tungstène autour de 3200 K contraste avec la lumière du jour.
white_balance|Balance des blancs|La référence de la caméra pour déterminer ce qui doit être rendu neutre.|La caméra est équilibrée à 4300 K sous un éclairage mixte.
palette|Palette de couleurs|Le système sélectionné de couleurs dominantes et d’accent.|Le rouge est réservé aux moments où le contrôle se brise.
lut|LUT|Une table qui transforme les valeurs de l’image pour l’affichage ou le traitement colorimétrique.|Une show LUT est utilisée pour les dailies et dans la salle de montage.
production_design|Décors / production design|La conception visuelle globale du monde physique du film.|L’appartement paraît de plus en plus exigu à mesure que le mobilier et l’aménagement changent.
art_direction|Direction artistique|La réalisation pratique et l’organisation du concept défini par la direction des décors ou du production design.|La direction artistique coordonne la construction du couloir.
set_decoration|Décoration de plateau|Le choix et la disposition des meubles, textiles et détails du décor.|La table est encombrée de sorte que les personnages doivent se tendre au-dessus les uns des autres.
prop|Accessoire|Un objet utilisé ou activement impliqué dans la scène.|Le téléphone doit fonctionner de la même manière dans toutes les prises.
hero_prop|Accessoire principal|Un accessoire particulièrement important, destiné à supporter les gros plans et souvent fabriqué en plusieurs exemplaires.|La lettre existe en plusieurs copies identiques.
costume_design|Création de costumes|La conception des vêtements et accessoires qui expriment le personnage et la palette du film.|La veste devient plus serrée à mesure que le personnage perd le contrôle.
makeup_hair|Maquillage et coiffure|La conception de la peau, des cheveux, de l’âge, des blessures et du style des personnages.|La blessure évolue selon des étapes documentées.
texture|Texture|La qualité visuelle et tactile des surfaces, tissus et environnements.|Un costume lisse contraste avec des murs rugueux.
silhouette|Silhouette|La forme extérieure du sujet, lisible indépendamment de ses détails internes.|Le grand manteau du personnage reste reconnaissable dans l’obscurité.
spatial_geography|Géographie de l’espace|La compréhension par le public de la position des lieux et des personnes.|Nous savons où se trouve la sortie avant que l’incendie commence.
screen_geography|Géographie à l’écran|La manière dont les relations spatiales sont représentées à travers les plans et le montage.|La porte reste du même côté du personnage entre les différents cadrages.
continuity|Continuité|La cohérence du temps, de l’espace, de l’action, des costumes, de la lumière et du jeu.|La tasse contient la même quantité avant et après la coupe.
assembly|Bout-à-bout|Une première mise bout à bout des prises dans l’ordre du scénario ou des scènes.|Toutes les scènes sont assemblées grossièrement les unes après les autres.
rough_cut|Premier montage|Une version de travail où la structure et la durée des scènes continuent d’évoluer.|Une scène est déplacée et trois minutes sont supprimées.
fine_cut|Montage affiné|Une version plus précise où les choix de plans, le rythme et les transitions sont affinés.|La pause avant la réponse est raccourcie de huit images.
picture_lock|Verrouillage image|Le moment où l’ordre et la durée des images ne doivent plus changer de manière substantielle.|Le film est verrouillé avant le mixage final et le conform.
continuity_editing|Montage de continuité|Un système de montage qui rend faciles à suivre le temps, l’espace et l’action.|Les regards et les mouvements raccordent pendant toute la conversation.
montage|Montage|L’assemblage d’images qui comprime le temps ou construit une idée.|L’entraînement est condensé en cinq actions et un seul développement musical.
match_cut|Match cut|Une coupe qui relie deux images par une forme, un mouvement, un son ou une idée similaires.|Une lampe ronde coupe vers le soleil.
jump_cut|Jump cut|Un saut visible de temps ou de position entre des images similaires.|Des pauses sont supprimées dans le même angle de caméra.
cross_cutting|Montage alterné|L’alternance entre des actions se déroulant dans des lieux ou des temps différents.|Le sauvetage est alterné avec le danger qui se rapproche.
cut_on_action|Raccord dans le mouvement|Une coupe placée à l’intérieur d’une action pour que le mouvement porte la transition.|Le personnage commence à se lever en plan large et termine le geste en plan moyen.
ellipsis|Ellipse|Une coupe qui omet du temps ou de l’action que le public peut reconstituer.|La porte se ferme et nous coupons au lendemain matin.
j_cut|J-cut|Une transition où le son du plan suivant commence avant le changement d’image.|On entend le train avant de voir la gare.
l_cut|L-cut|Une transition où le son du plan précédent continue après le changement d’image.|L’aveu continue sur la réaction dans la pièce suivante.
rhythm|Rythme|Le motif de durées, pauses, mouvements et sons qui se déploie dans le temps.|Trois interruptions rapides sont suivies d’un long plan fixe.
production_sound|Son direct|Les dialogues et autres sons enregistrés pendant le tournage proprement dit.|La scène privilégie un dialogue propre au bruit du ventilateur du lieu.
room_tone|Ambiance seule|Un enregistrement du bruit de fond propre à un espace sans action principale ni dialogue.|Trente secondes d’ambiance seule sont enregistrées après la scène.
wild_track|Son seul|Un son enregistré sans image synchrone, souvent une ambiance ou une action précise.|Les pas sont enregistrés séparément après la prise.
ambience|Ambiance|Les sons de fond qui définissent un lieu, un moment et un environnement.|Des trains lointains rendent la nuit urbaine et inquiète.
adr|Post-synchronisation / ADR|Un dialogue réenregistré en studio en synchronisation avec l’image montée.|Une réplique enregistrée dans le vent est refaite avec la respiration et le timing corrects.
foley|Bruitage / Foley|Des sons synchronisés recréés par des interprètes pour les pas, les vêtements et les contacts physiques.|Le tissu du manteau devient plus présent à mesure que le personnage approche.
diegetic_sound|Son diégétique|Un son compris comme existant dans le monde du film.|La musique provient de la radio présente dans la scène.
non_diegetic_sound|Son extradiégétique|Un son qui n’est pas présenté comme une partie physique du monde du film.|La musique orchestrale n’est entendue que par le public.
score|Musique originale|Une musique composée pour répondre aux besoins dramatiques et structurels du film.|Le thème n’apparaît au complet qu’après le choix décisif du personnage.
spotting_session|Séance de spotting|Une séance où l’emplacement et la fonction de la musique ou du son sont décidés.|La musique commence après le regard, pas au moment où la porte s’ouvre.
sound_bridge|Pont sonore|Un son qui continue ou commence au-dessus d’un changement de scène et relie les images.|Les applaudissements continuent sur une pièce vide le lendemain.
sound_perspective|Perspective sonore|La manière dont la distance, l’espace, la direction et la subjectivité sont exprimés par le son.|Le dialogue s’atténue lorsque le personnage panique.
final_mix|Mixage final|L’équilibrage final des dialogues, effets, ambiances et musique.|La musique est abaissée pour que la respiration devienne le centre de la scène.
head_of_department|Chef de département|La personne qui dirige un département comme l’image, les décors, les costumes ou le son.|La direction de la photographie et le production design coordonnent les couleurs et les matériaux.
first_ad|Premier assistant réalisateur|La personne qui dirige l’organisation pratique du tournage, le planning et la coordination sur le plateau.|Le premier assistant réalisateur estime le temps nécessaire pour trois configurations caméra.
dp|Directeur de la photographie|Le responsable du département caméra et lumière qui développe l’expression photographique du film.|Le réalisateur et le directeur de la photographie testent deux séries d’objectifs avant de choisir.
script_supervisor|Scripte|La personne qui contrôle la couverture du scénario, les prises, la continuité et les directions à l’écran.|La scripte signale qu’une ligne de regard ne raccorde pas.
production_constraint|Contrainte de production|Une limite imposée à la solution par le temps, le budget, le lieu, la sécurité ou la météo.|Le coucher du soleil ne laisse que vingt minutes pour le plan principal.
location_scout|Repérage|L’évaluation créative et pratique de lieux de tournage possibles.|Un large couloir est choisi pour permettre une mise en scène en profondeur.
tech_scout|Repérage technique|Un repérage commun avec les départements clés pour planifier l’exécution du tournage.|L’équipe repère les emplacements possibles pour la grue, l’alimentation électrique et le son.
floor_plan|Plan au sol|Une vue de dessus de l’espace, des personnes et des configurations caméra.|Les caméras A et B sont indiquées de chaque côté de la table.
shooting_schedule|Plan de travail|Le planning qui détermine quand les scènes et les éléments seront filmés.|Toutes les scènes de nuit sont regroupées dans la même semaine.
setup|Configuration caméra|Une combinaison de position caméra, optique, lumière et machinerie préparée comme un ensemble.|Trois plans sont tournés depuis la même configuration avec de légers recadrages.
company_move|Déplacement de l’équipe|Le déplacement du casting, de l’équipe et du matériel vers un autre lieu au cours de la journée.|Un extérieur supplémentaire exige un déplacement de toute l’équipe et est retiré du plan de travail.
slate|Clap|La plaque et le clap qui identifient scène, plan et prise et fournissent un point de synchronisation.|Scène 24, plan 3B, prise 2 sont annoncés et claqués.
take|Prise|Un enregistrement continu depuis le démarrage de la caméra et du son jusqu’à leur arrêt.|La prise 4 possède le meilleur jeu mais nécessite un pickup de la fin.
print_take|Prise à tirer|Une prise que le réalisateur signale comme particulièrement utilisable au montage.|Le réalisateur marque la prise 6 comme prise à tirer.
circle_take|Prise cerclée|Une prise préférée, signalée dans le rapport ou les métadonnées.|La scripte cercle la prise 3.
pickup|Reprise partielle|Une courte portion de scène refaite sans reprendre toute la prise.|Ils refont seulement la portion allant de la réplique à la fermeture de la porte.
safety_take|Prise de sécurité|Une prise supplémentaire effectuée après une version utilisable afin de disposer d’une alternative.|La prise de sécurité essaie une intensité plus basse.
video_assist|Retour vidéo|Le système qui permet au réalisateur et aux départements de voir l’image caméra pendant le tournage.|Le réalisateur vérifie la ligne de regard et la composition sur le moniteur.
rushes|Rushes|Un terme courant pour désigner les images récemment tournées ou traitées.|Le réalisateur regarde les rushes avant les gros plans du lendemain.
color_grade|Étalonnage|Le traitement créatif et technique de l’exposition, du contraste et de la couleur après le montage.|Les carnations restent cohérentes tandis que l’arrière-plan devient progressivement plus froid.
dcp|DCP|Un paquet de fichiers normalisé pour la projection numérique en salle, comprenant image, son et métadonnées.|La version finale est contrôlée à partir du DCP dans la salle de cinéma.
wardrobe_test|Essai costumes caméra|Un test des costumes avec l’acteur, la caméra et la lumière avant le tournage.|Une chemise rayée est remplacée après qu’un test caméra révèle du moiré.
`.trim();

function parseTermCopy(rows: string): Readonly<Record<string, DirectorLocalizedTermCopy>> {
  return Object.fromEntries(rows.split("\n").map((line) => {
    const [id, label, definition, example] = line.split("|");
    if (!id || !label || !definition || !example) throw new Error(`Invalid localized Director term row: ${line}`);
    return [id, { label, definition, example }] as const;
  }));
}

export const DIRECTOR_TERM_COPY_FR_2 = parseTermCopy(FR_TERM_SEEDS_2);
