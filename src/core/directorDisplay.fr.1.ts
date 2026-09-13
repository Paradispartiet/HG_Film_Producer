export type DirectorLocalizedTermCopy = {
  readonly label: string;
  readonly definition: string;
  readonly example: string;
};

const FR_TERM_SEEDS_1 = `
creative_vision|Vision créative|L’idée directrice qui fait fonctionner ensemble l’histoire, le ton, l’image, le son et les interprétations.|Dans un drame intime, la caméra ne s’approche qu’au moment où le personnage perd le contrôle.
directors_statement|Note d’intention de réalisation|Une formulation brève de l’interprétation du réalisateur, de son intention et de sa stratégie formelle.|La note d’intention décrit le film comme un rétrécissement progressif de la marge de manœuvre.
tone|Ton|La tonalité émotionnelle et l’attitude fondamentale du film.|La même scène est conçue comme une comédie sèche plutôt que comme un mélodrame.
point_of_view|Point de vue|La personne ou l’élément autour duquel le film organise les connaissances et l’expérience du public.|Le public entend le téléphone avant que le personnage principal comprenne qui appelle.
visual_language|Langage visuel|Un système récurrent de cadrages, mouvements, lumière, couleur et usage de l’espace.|Les plans larges statiques dominent jusqu’au moment où le personnage principal agit enfin.
formal_rule|Règle formelle|Une contrainte délibérée qui organise la forme du film et donne du sens aux écarts.|La caméra ne franchit jamais le seuil avant le point de bascule.
reference|Référence|Une œuvre, une image ou une expression utilisée pour concrétiser une qualité recherchée.|La référence sert à préciser le contraste et la température de couleur, pas à copier tout un style.
lookbook|Lookbook|Un ensemble sélectionné d’images et de notes qui communique la direction visuelle du film.|Le lookbook montre comment le vert disparaît progressivement des décors.
coverage|Couverture|La quantité et le type de plans qui donnent au montage les moyens de construire la scène.|Un master, deux plans individuels et un insert décisif couvrent les besoins de la scène.
shot_list|Liste de plans|Une liste ordonnée des configurations caméra prévues et de leur fonction.|Le plan 12 est un gros plan qui n’est tourné qu’après le point de bascule.
storyboard|Storyboard|Une suite de vignettes dessinées ou visualisées montrant les plans prévus dans l’ordre.|Une séquence d’action est storyboardée pour clarifier les directions et les collisions.
dailies|Rushes|Les images récemment tournées qui sont visionnées avant que la production ne poursuive le travail.|Les rushes montrent qu’il manque le plan de réaction décisif de la scène.
beat|Beat|Le plus petit changement significatif d’action, de tactique, d’information ou de relation.|Elle sourit, découvre le mensonge puis change de stratégie en trois beats distincts.
scene_objective|Objectif de scène|Le résultat concret qu’un personnage cherche à obtenir dans la scène.|Il veut convaincre sa sœur de rester dans la pièce.
super_objective|Super-objectif|La force directrice à long terme du personnage sur une partie importante du film.|Tout au long du film, elle tente de reprendre le contrôle.
obstacle|Obstacle|Ce qui s’oppose activement au personnage entre son objectif et sa réussite.|L’autre personnage refuse de répondre directement et force une nouvelle tactique.
conflict|Conflit|L’affrontement entre des objectifs, besoins, valeurs ou forces incompatibles.|Tous deux veulent protéger l’enfant, mais de manières opposées.
stakes|Enjeu|La conséquence du succès ou de l’échec de l’action.|Si l’accord échoue, elle perd son logement.
turning_point|Point de bascule|Le moment qui change la direction de la scène ou les possibilités d’action.|Un nom est prononcé et le rapport de force s’inverse.
reversal|Renversement|Un retournement où la situation prend une valeur opposée ou rompt nettement avec l’attente.|La personne qui semblait être la victime se révèle contrôler la rencontre.
setup_payoff|Setup et payoff|Un élément est établi tôt puis acquiert une signification ou une conséquence plus tard.|Une serrure cassée est montrée avant que l’effraction ne soit révélée.
subtext|Sous-texte|Ce que le personnage pense, veut ou dissimule sous les mots prononcés.|Dans la scène, « je vais bien » signifie « n’insiste pas ».
exposition|Exposition|Les informations dont le public a besoin sur le monde, le passé, les relations ou les règles.|L’histoire familiale apparaît pendant que les personnages se disputent les places à table.
sequence|Séquence|Plusieurs scènes qui forment ensemble une unité dramatique plus vaste.|L’enquête se compose de trois scènes où le risque augmente.
casting|Casting|Le processus qui consiste à rechercher et choisir les interprètes pour les rôles.|Le calme inattendu d’une candidate rend l’antagoniste plus menaçant.
audition|Audition|Une séance structurée au cours de laquelle un acteur travaille un matériau lié au rôle.|La candidate rejoue la scène après avoir reçu une seule action concrète.
callback|Callback|Une audition ultérieure réservée à un groupe plus restreint de candidats.|Deux candidats sont testés avec le même partenaire de jeu.
chemistry_read|Chemistry read|Une audition où des partenaires potentiels sont testés ensemble afin d’évaluer leur dynamique de jeu.|Les deux rôles principaux essaient une scène conflictuelle puis une scène silencieuse.
table_read|Lecture à table|Une lecture collective à voix haute du scénario avec les acteurs et des membres clés de l’équipe.|La lecture à table révèle qu’une relation importante est introduite trop tard.
rehearsal|Répétition|Un travail préparatoire sur l’action, le texte, l’espace ou la technique avant le tournage.|Les acteurs explorent la scène sans caméra avant de fixer la mise en place.
playable_action|Action jouable|Un verbe actif que l’acteur peut tenter d’exercer sur une autre personne.|« Convaincs-la » est plus jouable que « sois triste ».
intention|Intention|Ce que le personnage cherche à faire à l’autre personne ou à la situation.|Il essaie de la faire rire pour éviter la question.
given_circumstances|Circonstances données|Les faits concernant le personnage, le temps, le lieu et la relation qui sont déjà vrais avant le début de la scène.|Elle n’a pas dormi et doit cacher que l’argent a disparu.
adjustment|Ajustement de jeu|Une modification concrète demandée par le réalisateur entre deux prises.|À la prise suivante, elle attend qu’il s’asseye avant d’attaquer.
listening|Écoute active|La manière dont l’acteur reçoit l’action du partenaire avant que sa réponse n’apparaisse.|Le gros plan est maintenu pendant le silence qui précède la réponse.
emotional_arc|Arc émotionnel|L’évolution de l’état émotionnel du personnage à travers une scène ou le film.|La défense devient espoir, puis honte.
mark|Marque au sol|Un point physique que l’acteur atteint pour le focus, la lumière ou la composition.|L’acteur s’arrête sur la marque au moment où la fenêtre s’ouvre.
blocking|Mise en place|La planification des positions et des déplacements des acteurs dans l’espace.|Elle se place entre lui et la porte au moment où elle prend le contrôle.
staging|Mise en scène|L’organisation d’ensemble des corps, de l’espace, de la caméra et de l’action.|Trois personnes sont placées dans la profondeur afin que les alliances puissent changer dans un seul plan.
business|Jeu de scène|De petites actions concrètes du corps ou avec des objets pendant la scène.|Elle trie les couverts pour éviter le contact visuel.
cross|Traversée|Le déplacement d’un acteur d’une position ou d’un côté de l’espace à un autre.|Il passe derrière elle et rompt l’axe de pouvoir établi.
entrance|Entrée|L’arrivée d’un personnage dans la scène ou dans le cadre.|Elle entre avant que la porte ait fini de vibrer.
exit|Sortie|Le départ d’un personnage hors de la scène ou du cadre.|Il sort, mais sa voix reste présente au téléphone.
axis_of_action|Axe d’action|Une ligne imaginaire qui traverse l’action ou la relation principale.|L’axe passe entre les deux personnes assises à la table.
rule_180|Règle des 180°|La caméra reste normalement du même côté de l’axe d’action afin de préserver les directions à l’écran.|L’axe n’est franchi qu’après un plan neutre qui rétablit l’espace.
screen_direction|Direction à l’écran|La direction dans laquelle une personne ou un objet se déplace ou regarde dans l’image.|Elle se déplace systématiquement vers la droite en allant vers la maison.
eyeline|Ligne de regard|La direction et la hauteur vers lesquelles un personnage regarde dans l’image.|Tous deux regardent le même point hors champ.
cheat|Tricher le placement|Un léger ajustement du corps ou d’un objet effectué pour les besoins de la caméra.|L’acteur pivote de cinq degrés vers la caméra sans que l’espace semble avoir changé.
motivated_movement|Mouvement motivé|Un mouvement qui découle de l’action du personnage ou de la situation.|Elle va à la fenêtre parce qu’elle entend la voiture.
shot_size|Échelle de plan|La quantité de sujet et d’environnement visible dans le cadre.|Un gros plan dissimule la personne qui se trouve derrière la porte.
extreme_wide|Plan général|Un plan très large où l’environnement domine et où les personnages sont souvent petits.|Une personne traverse un immense champ enneigé.
wide_shot|Plan large|Un plan qui montre le corps entier ou une grande partie de l’espace.|Toute la cuisine et la distance entre les personnages restent visibles.
full_shot|Plan en pied|Un cadrage qui montre généralement une personne de la tête aux pieds.|L’hésitation du personnage se lit dans tout son corps.
medium_shot|Plan moyen|Un cadrage qui montre approximativement le personnage à partir de la taille ou du buste.|Le dialogue conserve à la fois le visage et les gestes des mains.
medium_close_up|Plan rapproché|Un cadrage approximativement du buste ou des épaules vers le haut.|La conversation reste proche sans isoler complètement le personnage.
close_up|Gros plan|Un cadrage serré sur un visage ou un détail significatif.|Le gros plan arrive au moment où le personnage comprend la vérité.
extreme_close_up|Très gros plan|Un cadrage extrêmement serré sur une petite partie du sujet.|Seuls l’œil et son reflet sont visibles.
insert|Insert|Un plan rapproché d’un objet ou d’une action ayant une importance narrative.|La clé est placée dans la mauvaise poche.
cutaway|Plan de coupe|Un plan qui quitte l’action principale pour montrer un élément lié.|On coupe vers l’horloge pendant que la conversation continue.
two_shot|Plan à deux|Un plan qui contient deux personnages principaux.|Les deux restent dans le cadre lorsque leur alliance se brise.
master_shot|Plan maître|Un plan continu qui couvre toute la scène ou une grande partie de celle-ci.|La scène peut être jouée entièrement dans un plan maître en mouvement.
reaction_shot|Plan de réaction|Un plan qui montre la réponse à une action, une réplique ou une découverte.|On reste sur la sœur silencieuse après l’aveu.
focal_length|Focale|La distance entre le centre optique de l’objectif et le plan de mise au point lorsque le point est à l’infini.|Sur le même format de capteur, un 25 mm offre un angle de champ plus large qu’un 75 mm.
angle_of_view|Angle de champ|La portion de la scène que l’objectif et le capteur enregistrent dans le cadre.|À focale égale, le grand format utilise une plus grande partie de l’image projetée par l’objectif.
prime_lens|Objectif à focale fixe|Un objectif possédant une seule focale fixe.|La scène est principalement photographiée avec des 35 mm et 50 mm.
zoom_lens|Zoom|Un objectif dont la focale est variable.|Un zoom lent resserre l’espace à mesure que le personnage comprend.
spherical_lens|Objectif sphérique|Un objectif qui ne comprime pas horizontalement l’image comme une optique anamorphique.|Les objectifs sphériques sont associés à un cadre recadré au format 2,39:1.
anamorphic_lens|Objectif anamorphique|Un objectif qui comprime horizontalement l’image à la prise de vues avant son désanamorphosage à l’affichage.|Une prise anamorphique 2x est désanamorphosée sur le moniteur et en postproduction.
depth_of_field|Profondeur de champ|La zone comprise entre le point le plus proche et le plus éloigné qui paraît suffisamment nette.|Premier plan et arrière-plan restent nets dans une lutte de pouvoir.
shallow_focus|Faible profondeur de champ|Une zone de netteté étroite avec un premier plan ou un arrière-plan nettement flou.|Seul le visage est net tandis que la pièce disparaît dans le flou.
deep_focus|Grande profondeur de champ|Une grande partie de la profondeur de l’espace reste lisiblement nette.|L’enfant au premier plan et les parents à l’arrière-plan sont nets en même temps.
focus_pull|Changement de point|Une modification contrôlée de la distance de mise au point pendant le plan.|Le point passe de la lettre à la personne dans l’embrasure de la porte.
rack_focus|Transfert de point|Un changement de mise au point clairement perceptible entre des sujets ou des plans de profondeur.|Le point passe du pistolet au visage de sa propriétaire.
sensor_size|Taille de capteur|La surface physique d’image qui enregistre l’image projetée par l’objectif.|Un 50 mm donne un cadrage plus large en grand format qu’en Super 35.
lens_distortion|Distorsion de l’objectif|Une modification géométrique ou optique de la forme du sujet, surtout vers les bords de l’image.|Un objectif grand-angle très proche du visage exagère l’espace derrière lui.
aperture|Ouverture|L’ouverture variable de l’objectif qui régule la quantité de lumière et la profondeur de champ.|On ouvre le diaphragme pour réduire la profondeur de champ.
f_stop|Nombre f|Le rapport entre la focale et le diamètre de l’ouverture du diaphragme.|f/2 est plus ouvert et laisse nominalement entrer davantage de lumière que f/4.
t_stop|Indice T|Une mesure d’exposition qui tient compte de la perte réelle de lumière à travers l’objectif.|Deux objectifs cinéma différents sont tous deux réglés à T2.8.
iso_ei|ISO / indice d’exposition|Un indice de sensibilité ou de travail utilisé pour calculer l’exposition.|La caméra est évaluée à EI 800 pendant le test.
shutter_angle|Angle d’obturateur|Une manière d’exprimer la part de chaque période d’image pendant laquelle le capteur est exposé.|Un angle de 180° à 24 i/s correspond à environ 1/48 seconde.
shutter_speed|Vitesse d’obturation|La durée pendant laquelle chaque image est exposée.|1/500 seconde est utilisé pour une action nette et saccadée.
`.trim();

function parseTermCopy(rows: string): Readonly<Record<string, DirectorLocalizedTermCopy>> {
  return Object.fromEntries(rows.split("\n").map((line) => {
    const [id, label, definition, example] = line.split("|");
    if (!id || !label || !definition || !example) throw new Error(`Invalid localized Director term row: ${line}`);
    return [id, { label, definition, example }] as const;
  }));
}

export const DIRECTOR_TERM_COPY_FR_1 = parseTermCopy(FR_TERM_SEEDS_1);
