import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { getDirectorTerm, type DirectorTerm } from "./directorKnowledge.js";
import { DIRECTOR_SHOT_FIELDS, type DirectorShotFieldId } from "./directorProject.js";

export type DirectorAppliedLearningKind = "brief" | "shot";

export type DirectorAppliedLearningGuide = {
  readonly id: string;
  readonly kind: DirectorAppliedLearningKind;
  readonly fieldId: DirectorBriefFieldId | DirectorShotFieldId;
  readonly fieldLabel: string;
  readonly norwegianLabel: string;
  readonly purpose: string;
  readonly exercise: string;
  readonly checklist: readonly string[];
  readonly termIds: readonly string[];
};

type BriefGuideSeed = Omit<DirectorAppliedLearningGuide, "id" | "kind" | "fieldLabel"> & {
  readonly fieldId: DirectorBriefFieldId;
};

type ShotGuideSeed = Omit<DirectorAppliedLearningGuide, "id" | "kind" | "fieldLabel"> & {
  readonly fieldId: DirectorShotFieldId;
  readonly fieldLabel: string;
};

const briefGuideSeeds: readonly BriefGuideSeed[] = [
  {
    fieldId: "sceneTitle",
    norwegianLabel: "Scenetittel",
    purpose: "Et presist arbeidsnavn gjør det lettere å snakke om scenens funksjon, ikke bare nummeret i manuset.",
    exercise: "Gi scenen et navn som beskriver den viktigste forandringen. Unngå bare sted eller handling, som «Kjøkkenet».",
    checklist: ["Navnet skiller scenen fra de andre", "Navnet peker mot scenens dramatiske utvikling"],
    termIds: ["sequence", "beat"],
  },
  {
    fieldId: "sceneContext",
    norwegianLabel: "Scenekontekst",
    purpose: "Regissøren må vite hvilke fakta, relasjoner og forventninger publikum og karakterene tar med seg inn i scenen.",
    exercise: "Skriv tre korte linjer: Hva vet publikum? Hva vet hovedkarakteren? Hva vet en annen karakter som hovedkarakteren ikke vet?",
    checklist: ["Tid og sted er forståelige", "Relevant forhistorie er avgrenset", "Ulik kunnskap mellom karakterene er synlig"],
    termIds: ["given_circumstances", "exposition", "point_of_view"],
  },
  {
    fieldId: "sceneObjective",
    norwegianLabel: "Scenemål",
    purpose: "Et spillbart mål gir scenen retning og gjør det mulig å vurdere om handlingen faktisk endrer noe.",
    exercise: "Fullfør setningen: «I denne scenen prøver karakteren å …, men … står i veien, og hvis hun mislykkes …». Skriv med aktive verb.",
    checklist: ["Målet kan forsøkes gjennom handling", "Hindringen er aktiv", "Det som står på spill er konkret"],
    termIds: ["scene_objective", "obstacle", "stakes", "playable_action"],
  },
  {
    fieldId: "audienceEffect",
    norwegianLabel: "Publikumseffekt",
    purpose: "Regi handler også om å planlegge publikums kunnskap, følelse og forventning gjennom scenen.",
    exercise: "Beskriv publikums tilstand ved inngang, ved vendepunktet og ved utgang. Skill mellom hva de føler og hva de vet.",
    checklist: ["Synsvinkelen er tydelig", "Tonen er konkret", "Publikumseffekten forandrer seg"],
    termIds: ["point_of_view", "tone", "subtext", "reaction_shot"],
  },
  {
    fieldId: "conflictTurn",
    norwegianLabel: "Konflikt og vending",
    purpose: "Scenen trenger motstand og et øyeblikk der taktikk, makt eller informasjon endrer retning.",
    exercise: "Del scenen i tre beats. Skriv hvem som har overtaket i hvert beat, og marker nøyaktig hva som skaper vendingen.",
    checklist: ["Motstridende mål er synlige", "Vendingen skyldes handling eller informasjon", "Situasjonen har en annen verdi etter vendingen"],
    termIds: ["conflict", "turning_point", "reversal", "beat"],
  },
  {
    fieldId: "formalStrategy",
    norwegianLabel: "Formell strategi",
    purpose: "En formell regel samler valg for bilde, lyd, spill og tid, og gjør avvik meningsfulle.",
    exercise: "Skriv én regel for scenen i formen «Vi gjør alltid … frem til …». Forklar deretter hvorfor regelen brytes eller opprettholdes.",
    checklist: ["Regelen kan observeres i den ferdige scenen", "Regelen støtter scenens dramatiske idé", "Avvik har en tydelig grunn"],
    termIds: ["formal_rule", "visual_language", "creative_vision", "tone"],
  },
  {
    fieldId: "blocking",
    norwegianLabel: "Blocking",
    purpose: "Plassering, avstand, blikk og bevegelse uttrykker relasjon og makt før kameraet bestemmes.",
    exercise: "Tegn rommet ovenfra. Marker inngang, utgang, aksen, startposisjoner, kryssinger og hvor maktbalansen skifter.",
    checklist: ["Bevegelsene har motivasjon", "Blikkretninger kan fotograferes", "Aksen og skjermretningen er forstått", "Blocking endrer relasjonen"],
    termIds: ["blocking", "staging", "axis_of_action", "eyeline", "motivated_movement"],
  },
  {
    fieldId: "performanceDirection",
    norwegianLabel: "Skuespillerregi",
    purpose: "Presis regi gir skuespilleren noe konkret å gjøre mot en annen, fremfor å be om en løs følelse.",
    exercise: "Skriv én spillbar handling for hvert beat. Legg til én mulig justering som endrer taktikk uten å diktere følelsen.",
    checklist: ["Instruksjonene bruker aktive verb", "Underteksten er forstått", "Skuespilleren får rom til å lytte", "Justeringen beskriver en endring"],
    termIds: ["playable_action", "adjustment", "listening", "subtext"],
  },
  {
    fieldId: "productionDesign",
    norwegianLabel: "Produksjonsdesign",
    purpose: "Rom, kostyme, rekvisitter, teksturer og farger må utføre dramatisk arbeid, ikke bare dekorere scenen.",
    exercise: "Velg tre synlige elementer. For hvert element: skriv hva det forteller, hvem det tilhører og hvordan betydningen endres i scenen.",
    checklist: ["Elementene støtter karakter eller konflikt", "Paletten er kontrollert", "Viktige rekvisitter tåler nærbilde", "Miljøet påvirker blocking"],
    termIds: ["production_design", "prop", "costume_design", "palette", "texture"],
  },
  {
    fieldId: "shotPlan",
    norwegianLabel: "Bildeplan",
    purpose: "Dekning skal uttrykke scenens utvikling og samtidig gi klipperen nok materiale til å bygge den.",
    exercise: "Lag først den minste mulige dekningen som forteller scenen. Legg deretter bare til bilder som har en ny dramatisk funksjon.",
    checklist: ["Hvert bilde har en begrunnelse", "Master eller alternativ romforståelse er vurdert", "Avgjørende reaksjoner er dekket", "Inserts brukes bare når informasjonen trenger dem"],
    termIds: ["coverage", "shot_list", "master_shot", "reaction_shot", "insert"],
  },
  {
    fieldId: "cameraMovementLenses",
    norwegianLabel: "Kamera, bevegelse og optikk",
    purpose: "Kameraposisjon og optikk bestemmer perspektiv, romfølelse, nærhet og hva publikum kan oppdage.",
    exercise: "Beskriv to alternative løsninger for samme øyeblikk: én med vid optikk nær motivet og én med lengre optikk lenger unna. Velg den som best uttrykker relasjonen.",
    checklist: ["Kameraavstand og brennvidde vurderes sammen", "Dybdeskarpheten har en funksjon", "Bevegelsen er motivert", "Perspektivet støtter synsvinkelen"],
    termIds: ["focal_length", "angle_of_view", "depth_of_field", "focus_pull", "lens_distortion"],
  },
  {
    fieldId: "lightingPalette",
    norwegianLabel: "Lys og palett",
    purpose: "Lys må ha en troverdig kildelogikk og samtidig styre ansikt, rom, kontrast og fargeutvikling.",
    exercise: "Identifiser scenens synlige og usynlige lyskilder. Velg hovedlys, fyllnivå, fargetemperatur og hva som skal få falle i mørke.",
    checklist: ["Hovedlysets retning er forståelig", "Praktiske kilder er integrert", "Kontrast støtter tonen", "Fargevalgene følger filmens palett"],
    termIds: ["key_light", "fill_light", "practical_light", "motivated_lighting", "color_temperature", "palette"],
  },
  {
    fieldId: "editingRhythm",
    norwegianLabel: "Klipperytme",
    purpose: "Regissøren planlegger varighet, reaksjoner, pauser og overganger allerede før opptak, men lar materialet utfordre planen i klippen.",
    exercise: "Marker hvor scenen trenger varighet, hvor et klipp endrer betydning, og hvor lyd kan begynne før eller fortsette etter bildet.",
    checklist: ["Rytmen følger dramatisk utvikling", "Ellipser er forståelige", "Klipp i handling brukes bevisst", "Bilde- og lydoverganger er planlagt"],
    termIds: ["rhythm", "ellipsis", "cut_on_action", "j_cut", "l_cut"],
  },
  {
    fieldId: "soundStrategy",
    norwegianLabel: "Lydstrategi",
    purpose: "Dialog, atmosfære, romtone, separate lyder, musikk og stillhet bestemmer sted, perspektiv og emosjonelt fokus.",
    exercise: "Lag tre lag: det som må tas synkront, det som bør tas separat på location, og det som skal skapes i postproduksjon.",
    checklist: ["Dialogprioriteten er bestemt", "Romtone og wild tracks er planlagt", "Lydperspektivet følger synsvinkelen", "Musikkens funksjon er konkret"],
    termIds: ["production_sound", "ambience", "room_tone", "wild_track", "sound_perspective", "score"],
  },
  {
    fieldId: "practicalConstraints",
    norwegianLabel: "Praktiske begrensninger",
    purpose: "Tid, budsjett, location, sikkerhet og tilgjengelig utstyr må oversettes til kreative prioriteringer før opptaksdagen.",
    exercise: "Skriv den viktigste begrensningen, hva den truer, og en plan A og plan B som begge bevarer scenens dramatiske kjerne.",
    checklist: ["Den viktigste risikoen er identifisert", "Prioriterte bilder er merket", "Alternative setups finnes", "Tidsbruk og flytting er realistisk"],
    termIds: ["production_constraint", "shooting_schedule", "setup", "company_move", "safety_take"],
  },
  {
    fieldId: "proofOfIntent",
    norwegianLabel: "Bevis på regiintensjonen",
    purpose: "En regitanke må kunne vurderes i det innspilte og klippede materialet, ikke bare høres god ut i et notat.",
    exercise: "Skriv tre observerbare tegn på at scenen fungerer: ett i prestasjon, ett i bilde eller blocking og ett i lyd eller klipp.",
    checklist: ["Tegnene kan observeres i dailies", "De henger sammen med den formelle regelen", "De kan vurderes før picture lock"],
    termIds: ["creative_vision", "formal_rule", "dailies", "print_take", "picture_lock"],
  },
];

const shotGuideSeeds: readonly ShotGuideSeed[] = [
  {
    fieldId: "title",
    fieldLabel: "Shot title",
    norwegianLabel: "Bildetittel",
    purpose: "Et kort arbeidsnavn gjør kameraoppsettet lett å identifisere i shotliste, opptaksplan og samtale på sett.",
    exercise: "Navngi bildet etter motiv og funksjon, som «Marias reaksjon etter avsløringen», ikke bare «CU Maria».",
    checklist: ["Motivet er identifisert", "Den dramatiske funksjonen er synlig i navnet"],
    termIds: ["shot_list", "setup"],
  },
  {
    fieldId: "shotSize",
    fieldLabel: "Shot size",
    norwegianLabel: "Bildeutsnitt",
    purpose: "Utsnitt bestemmer hvor mye kropp, ansikt, handling og miljø publikum kan lese samtidig.",
    exercise: "Velg utsnittet først etter at du har skrevet hvilken informasjon bildet skal gi og hva det skal skjule.",
    checklist: ["Utsnittet passer motivets handling", "Miljøets betydning er vurdert", "Nærhet er dramatisk begrunnet"],
    termIds: ["shot_size", "wide_shot", "medium_shot", "close_up", "insert"],
  },
  {
    fieldId: "cameraPosition",
    fieldLabel: "Camera position",
    norwegianLabel: "Kameraposisjon",
    purpose: "Kameraets side, høyde og avstand påvirker skjermretning, blikk, makt og publikums plass i rommet.",
    exercise: "Plasser kameraet på en plantegning. Marker aksen og skriv hvem kameraet står nærmest, og hvorfor.",
    checklist: ["Aksen er kjent", "Eyelines kan matches", "Skjermretningen er kontrollert", "Avstand og bildevinkel er valgt sammen"],
    termIds: ["axis_of_action", "rule_180", "eyeline", "screen_direction", "angle_of_view"],
  },
  {
    fieldId: "movement",
    fieldLabel: "Movement",
    norwegianLabel: "Kamerabevegelse",
    purpose: "Bevegelse må reagere på eller skape en dramatisk endring; den bør ikke bare tilføre generell energi.",
    exercise: "Skriv hva som utløser bevegelsen, hva kameraet oppdager underveis og hvorfor det stopper akkurat der.",
    checklist: ["Bevegelsen har en utløsende årsak", "Start og slutt har forskjellig betydning", "Retningen passer blocking og skjermretning"],
    termIds: ["motivated_movement", "screen_direction", "staging", "visual_language"],
  },
  {
    fieldId: "lens",
    fieldLabel: "Lens / focal behavior",
    norwegianLabel: "Objektiv og fokus",
    purpose: "Brennvidde, kameraavstand og fokusstrategi former perspektiv og bestemmer hvordan rom og ansikt oppleves.",
    exercise: "Skriv ønsket bildevinkel og perspektiv før millimeter. Beskriv deretter hva som skal være skarpt, og om fokus skal flyttes.",
    checklist: ["Brennvidden er valgt sammen med kameraavstand", "Dybdeskarpheten har en funksjon", "Forvrengning er vurdert", "Fokusskift er dramatisk motivert"],
    termIds: ["focal_length", "angle_of_view", "depth_of_field", "lens_distortion", "focus_pull"],
  },
  {
    fieldId: "subjectAction",
    fieldLabel: "Subject action and blocking",
    norwegianLabel: "Handling og blocking",
    purpose: "Shotkortet må beskrive hva personen faktisk gjør i bildet og hvilke posisjoner som må treffe fokus, lys og komposisjon.",
    exercise: "Skriv handlingen som aktive verb fra bildets start til slutt. Marker eventuelle kryssinger og nødvendige marks.",
    checklist: ["Handlingen kan utføres", "Start- og sluttposisjon er kjent", "Kryssinger er forstått", "Blocking støtter scenemålet"],
    termIds: ["blocking", "staging", "playable_action", "mark", "cross"],
  },
  {
    fieldId: "dramaticPurpose",
    fieldLabel: "Dramatic purpose",
    norwegianLabel: "Dramatisk funksjon",
    purpose: "Hvert bilde må utføre en fortellende eller emosjonell oppgave som ikke allerede løses bedre av et annet bilde.",
    exercise: "Fullfør: «Uten dette bildet mister publikum …». Hvis svaret er uklart, vurder å fjerne eller slå bildet sammen med et annet.",
    checklist: ["Bildet endrer kunnskap, følelse eller relasjon", "Funksjonen knyttes til scenemålet", "Valgt synsvinkel er bevisst"],
    termIds: ["scene_objective", "point_of_view", "reaction_shot", "insert", "turning_point"],
  },
  {
    fieldId: "sound",
    fieldLabel: "Sound and dialogue priority",
    norwegianLabel: "Lyd- og dialogprioritet",
    purpose: "Et shotkort bør fortelle lydavdelingen hva som må være rent, hva som kan tas separat og hvilket lydperspektiv bildet krever.",
    exercise: "Marker bildets viktigste lyd, mulig støyrisiko og én separat lyd som bør tas etter tagningen.",
    checklist: ["Dialogbehovet er tydelig", "Atmosfære og romtone er vurdert", "Wild track er planlagt ved behov", "Lydperspektivet passer bildet"],
    termIds: ["production_sound", "ambience", "room_tone", "wild_track", "sound_perspective"],
  },
  {
    fieldId: "estimatedDuration",
    fieldLabel: "Estimated duration",
    norwegianLabel: "Anslått varighet",
    purpose: "Varighet påvirker prestasjon, kamerabevegelse, opptakstid og hvordan bildet kan fungere i klipperytmen.",
    exercise: "Spill handlingen i virkelig tempo og mål den. Skriv deretter hva som må få tid, og hvor bildet tidligst kan klippes.",
    checklist: ["Varigheten bygger på faktisk handling", "Rytmens funksjon er beskrevet", "Mulig ellipser eller klipp i handling er vurdert"],
    termIds: ["rhythm", "ellipsis", "montage", "cut_on_action"],
  },
];

const briefLabels = new Map(DIRECTOR_BRIEF_FIELDS.map((field) => [field.id, field.label]));

export const DIRECTOR_APPLIED_LEARNING_GUIDES: readonly DirectorAppliedLearningGuide[] = [
  ...briefGuideSeeds.map((guide) => ({
    ...guide,
    id: `brief:${guide.fieldId}`,
    kind: "brief" as const,
    fieldLabel: briefLabels.get(guide.fieldId) ?? guide.fieldId,
  })),
  ...shotGuideSeeds.map((guide) => ({
    ...guide,
    id: `shot:${guide.fieldId}`,
    kind: "shot" as const,
  })),
];

export function getDirectorAppliedLearningGuide(guideId: string): DirectorAppliedLearningGuide | undefined {
  return DIRECTOR_APPLIED_LEARNING_GUIDES.find((guide) => guide.id === guideId);
}

export function getDirectorAppliedLearningGuideTerms(guide: DirectorAppliedLearningGuide): readonly DirectorTerm[] {
  return guide.termIds.map((termId) => getDirectorTerm(termId)).filter((term): term is DirectorTerm => Boolean(term));
}

export function getDirectorAppliedLearningGuidesForKind(kind: DirectorAppliedLearningKind): readonly DirectorAppliedLearningGuide[] {
  return DIRECTOR_APPLIED_LEARNING_GUIDES.filter((guide) => guide.kind === kind);
}

export function getDirectorAppliedLearningContextsForTerm(termId: string): readonly DirectorAppliedLearningGuide[] {
  return DIRECTOR_APPLIED_LEARNING_GUIDES.filter((guide) => guide.termIds.includes(termId));
}

export function validateDirectorAppliedLearningCoverage(): readonly string[] {
  const errors: string[] = [];
  const briefIds = new Set(briefGuideSeeds.map((guide) => guide.fieldId));
  const shotIds = new Set(shotGuideSeeds.map((guide) => guide.fieldId));

  for (const field of DIRECTOR_BRIEF_FIELDS) {
    if (!briefIds.has(field.id)) errors.push(`Missing brief learning guide for ${field.id}`);
  }
  for (const field of DIRECTOR_SHOT_FIELDS) {
    if (!shotIds.has(field)) errors.push(`Missing shot learning guide for ${field}`);
  }
  for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
    if (getDirectorAppliedLearningGuideTerms(guide).length !== guide.termIds.length) {
      errors.push(`Guide ${guide.id} references an unknown term`);
    }
  }

  return errors;
}
