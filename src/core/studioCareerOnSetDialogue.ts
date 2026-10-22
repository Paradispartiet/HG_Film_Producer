import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ProducerPriorityId, ProducerPrioritySummary } from "./applyProducerPriority.js";
import { getOnSetProducerAction } from "./studioCareerOnSetProducerActions.js";

/** Ten playable production challenges; new events can safely omit a dialogue. */
export const ON_SET_EVENT_IDS = [
  "production_event_bad_weather", "production_event_perfect_weather",
  "production_event_equipment_failure", "production_event_camera_breakthrough",
  "production_event_actor_conflict", "production_event_actor_improvisation",
  "production_event_permit_issue", "production_event_location_value",
  "production_event_budget_overrun", "production_event_cost_saving"
] as const;

export type OnSetEventId = (typeof ON_SET_EVENT_IDS)[number];
type Role = "director" | "assistant" | "camera" | "actor" | "location" | "production";
const eventRoles: Readonly<Record<OnSetEventId, Role>> = {
  production_event_bad_weather: "assistant",
  production_event_perfect_weather: "camera",
  production_event_equipment_failure: "camera",
  production_event_camera_breakthrough: "director",
  production_event_actor_conflict: "actor",
  production_event_actor_improvisation: "director",
  production_event_permit_issue: "location",
  production_event_location_value: "location",
  production_event_budget_overrun: "production",
  production_event_cost_saving: "production"
};
interface DialogueCopy {
  readonly heading: string;
  readonly forecast: string;
  readonly review: string;
  readonly producer: string;
  readonly response: string;
  readonly roles: Readonly<Record<Role, string>>;
  readonly concerns: Readonly<Record<OnSetEventId, string>>;
  readonly replies: Readonly<Record<ProducerPriorityId, string>>;
  readonly fitted: string;
  readonly partial: string;
  readonly stopped: string;
  readonly lesson: Readonly<Record<ProducerPriorityId, string>>;
}

/** Producer-led communication, never shot design or actor direction. */
export const ON_SET_DIALOGUE_COPY = {
  en: {
    heading: "Listen to the set", forecast: "A possible team response, before the day is confirmed.", review: "Revisit the on-set conversation",
    producer: "You · Producer", response: "Team's response",
    roles: { director: "Director", assistant: "Assistant director", camera: "Camera department", actor: "Performer", location: "Location manager", production: "Production manager" },
    concerns: {
      production_event_bad_weather: "The wind is unsafe. We cannot ask the crew to keep filming outside. Which work do we protect?",
      production_event_perfect_weather: "The light fits our story unusually well. How do we make use of it without losing the plan?",
      production_event_equipment_failure: "We have lost a key camera component. The director needs to know what can still be filmed.",
      production_event_camera_breakthrough: "The camera team found a more expressive solution. Can we protect the story without taking over their craft?",
      production_event_actor_conflict: "We disagree about the scene. The director needs room to rebuild trust before we can continue.",
      production_event_actor_improvisation: "An unexpected performance feels truthful. Can we leave room for the director and cast to explore it?",
      production_event_permit_issue: "Access is uncertain. We need a legal, workable plan before anyone sets up.",
      production_event_location_value: "This location adds unexpected meaning. Can the departments preserve it in the film?",
      production_event_budget_overrun: "Overtime and rentals are mounting. Which filmmaking need can we safeguard while replanning?",
      production_event_cost_saving: "We can simplify transport and equipment without losing the scene. Who needs to align first?"
    },
    replies: {
      story_clarity: "I'll bring the director, continuity and edit team together to agree on the story goal; the director still chooses how to stage it.",
      performance_trust: "I'll protect rehearsal time and a calm working environment, so the director and cast can solve the performance together.",
      crew_coordination: "I'll coordinate the production departments, access and safety so the creative team has a workable plan."
    },
    fitted: "That addresses our immediate need. We can move ahead together, subject to what the actual shoot allows.",
    partial: "That helps one part of the film, but our main obstacle still needs another department's attention.",
    stopped: "We must stop unsafe or impossible filming. Support cannot turn a stopped day into usable footage.",
    lesson: {
      story_clarity: "Producing means protecting the common story intention, not directing a shot.",
      performance_trust: "Producing means giving the cast and director good working conditions, not directing their performances.",
      crew_coordination: "Producing means aligning departments and protecting safe conditions for creative work."
    }
  },
  nb: {
    heading: "Lytt til filmteamet", forecast: "Mulig respons fra teamet før opptaksdagen bekreftes.", review: "Se samtalen fra opptaksdagen",
    producer: "Du · Produsent", response: "Teamets svar",
    roles: { director: "Regissør", assistant: "Innspillingsleder", camera: "Fotoavdelingen", actor: "Skuespiller", location: "Locationansvarlig", production: "Produksjonsleder" },
    concerns: {
      production_event_bad_weather: "Vinden gjør det utrygt å filme ute. Vi kan ikke be teamet fortsette. Hva skal vi ivareta?",
      production_event_perfect_weather: "Lyset passer historien uvanlig godt. Hvordan bruker vi muligheten uten å miste planen?",
      production_event_equipment_failure: "En kritisk kameradel er ødelagt. Regissøren må få vite hva vi fortsatt kan spille inn.",
      production_event_camera_breakthrough: "Fotoavdelingen har funnet en mer uttrykksfull løsning. Kan vi støtte fortellingen uten å overta faget deres?",
      production_event_actor_conflict: "Vi er uenige om scenen. Regissøren trenger rom til å bygge opp tilliten før vi fortsetter.",
      production_event_actor_improvisation: "Et uventet skuespillerøyeblikk kjennes ekte. Kan regissør og skuespillere få utforske det?",
      production_event_permit_issue: "Tilgangen til opptaksstedet er usikker. Vi trenger en lovlig og gjennomførbar plan.",
      production_event_location_value: "Dette stedet tilfører uventet mening. Hvordan kan fagavdelingene bevare det i filmen?",
      production_event_budget_overrun: "Overtid og leieutstyr øker kostnadene. Hvilket filmfaglig behov må vi ivareta når planen endres?",
      production_event_cost_saving: "Vi kan forenkle transport og utstyr uten å miste scenen. Hvem bør samordnes først?"
    },
    replies: {
      story_clarity: "Jeg samler regissør, script og klipper om fortellingens mål. Regissøren bestemmer fortsatt hvordan scenen iscenesettes.",
      performance_trust: "Jeg skjermer prøvetid og et trygt arbeidsmiljø, så regissør og skuespillere kan løse scenen sammen.",
      crew_coordination: "Jeg samordner fagavdelinger, tilgang og sikkerhet slik at det kreative teamet får en gjennomførbar plan."
    },
    fitted: "Det møter behovet vårt nå. Vi kan arbeide videre sammen, så langt opptaksforholdene tillater.",
    partial: "Det hjelper en del av filmen, men hovedproblemet trenger fortsatt støtte fra en annen avdeling.",
    stopped: "Utrygge eller umulige opptak må stanses. Støtte kan ikke gjøre en stanset dag til brukbare opptak.",
    lesson: {
      story_clarity: "Produsenten ivaretar det felles fortellermålet, ikke selve bildeutsnittet.",
      performance_trust: "Produsenten legger til rette for samspill mellom regi og skuespillere, uten å instruere dem.",
      crew_coordination: "Produsenten samordner fagavdelinger og ivaretar trygge rammer for skapende arbeid."
    }
  },
  fr: {
    heading: "Écouter le plateau", forecast: "Réponse possible de l'équipe avant de confirmer la journée.", review: "Revoir l'échange sur le plateau",
    producer: "Vous · Production", response: "Réponse de l'équipe",
    roles: { director: "Réalisation", assistant: "Assistant de réalisation", camera: "Équipe image", actor: "Interprète", location: "Responsable des lieux", production: "Direction de production" },
    concerns: {
      production_event_bad_weather: "Le vent rend l'extérieur dangereux. Nous devons arrêter. Que faut-il préserver ?",
      production_event_perfect_weather: "La lumière sert merveilleusement le récit. Comment en profiter sans perdre notre plan ?",
      production_event_equipment_failure: "Une pièce essentielle de la caméra est en panne. Que peut-on encore tourner ?",
      production_event_camera_breakthrough: "L'équipe image a trouvé une solution plus expressive. Comment soutenir le récit sans imposer la mise en scène ?",
      production_event_actor_conflict: "Nous ne sommes pas d'accord sur la scène. La réalisation doit rétablir la confiance.",
      production_event_actor_improvisation: "Un jeu spontané sonne juste. La réalisation et les interprètes peuvent-ils l'explorer ?",
      production_event_permit_issue: "L'accès au lieu est incertain. Il faut un plan autorisé avant de tourner.",
      production_event_location_value: "Ce lieu apporte un sens inattendu. Comment les équipes peuvent-elles le préserver ?",
      production_event_budget_overrun: "Locations et heures supplémentaires s'accumulent. Quel besoin artistique faut-il protéger ?",
      production_event_cost_saving: "Nous pouvons simplifier les transports sans perdre la scène. Qui doit se coordonner ?"
    },
    replies: {
      story_clarity: "Je réunis réalisation, continuité et montage autour du sens de la scène ; la mise en scène reste au réalisateur.",
      performance_trust: "Je préserve les répétitions et un climat serein pour que réalisation et interprètes trouvent leur solution.",
      crew_coordination: "Je coordonne les équipes, l'accès et la sécurité afin de proposer un plan réalisable."
    },
    fitted: "Cela répond au besoin immédiat. Avançons ensemble si les conditions le permettent.",
    partial: "C'est utile, mais notre obstacle principal demande encore l'aide d'un autre département.",
    stopped: "Un tournage impossible ou dangereux doit s'arrêter. Aucun soutien ne crée des prises dans ces conditions.",
    lesson: {
      story_clarity: "La production protège l'intention narrative sans choisir les plans.",
      performance_trust: "La production protège la collaboration sans diriger les interprètes.",
      crew_coordination: "La production aligne les équipes et garantit des conditions sûres."
    }
  },
  pt: {
    heading: "Ouvir a equipa", forecast: "Possível resposta da equipa antes de confirmar o dia.", review: "Rever a conversa no plateau",
    producer: "Tu · Produção", response: "Resposta da equipa",
    roles: { director: "Realização", assistant: "Assistência de realização", camera: "Equipa de imagem", actor: "Intérprete", location: "Responsável de locais", production: "Direção de produção" },
    concerns: {
      production_event_bad_weather: "O vento torna o exterior inseguro. Temos de parar. O que devemos proteger?",
      production_event_perfect_weather: "A luz favorece a história. Como aproveitá-la sem perder o plano?",
      production_event_equipment_failure: "Falhou uma peça essencial da câmara. O que ainda podemos filmar?",
      production_event_camera_breakthrough: "A imagem encontrou uma solução mais expressiva. Como apoiar a história sem assumir a realização?",
      production_event_actor_conflict: "Discordamos sobre a cena. A realização precisa de reconstruir a confiança.",
      production_event_actor_improvisation: "Uma reação espontânea parece verdadeira. Podemos dar espaço ao elenco e à realização?",
      production_event_permit_issue: "O acesso ao local é incerto. Precisamos de autorização e de um plano viável.",
      production_event_location_value: "Este local trouxe um novo significado. Como preservá-lo no filme?",
      production_event_budget_overrun: "Horas extra e alugueres estão a crescer. Que necessidade criativa vamos proteger?",
      production_event_cost_saving: "Podemos simplificar os transportes sem perder a cena. Quem deve colaborar?"
    },
    replies: {
      story_clarity: "Vou reunir realização, continuidade e montagem sobre o objetivo da história; a encenação cabe à realização.",
      performance_trust: "Vou proteger ensaios e um ambiente tranquilo para que realização e elenco resolvam juntos a cena.",
      crew_coordination: "Vou coordenar departamentos, acesso e segurança para criar condições de trabalho viáveis."
    },
    fitted: "Isso responde ao desafio imediato. Podemos avançar juntos se as condições o permitirem.",
    partial: "Ajuda uma parte do filme, mas a dificuldade principal ainda exige atenção de outro departamento.",
    stopped: "Uma rodagem insegura ou impossível tem de parar. Nenhum apoio cria tomadas num dia interrompido.",
    lesson: {
      story_clarity: "A produção protege a intenção narrativa, mas não escolhe os planos.",
      performance_trust: "A produção protege a colaboração sem dirigir os intérpretes.",
      crew_coordination: "A produção alinha as equipas e protege condições seguras."
    }
  }
} as const satisfies Record<FilmWorkLanguage, DialogueCopy>;

export interface OnSetConversation {
  readonly speaker: string;
  readonly concern: string;
  readonly producer: string;
  readonly reply: string;
  readonly teamResponse: string;
  readonly lesson: string;
}

export function getOnSetConversation(
  language: FilmWorkLanguage, eventId: string, priority: ProducerPriorityId, summary: ProducerPrioritySummary,
  practicalActionVersion?: 1 | 2
): OnSetConversation | undefined {
  if (!ON_SET_EVENT_IDS.some((id) => id === eventId)) return undefined;
  const key = eventId as OnSetEventId;
  const copy = ON_SET_DIALOGUE_COPY[language];
  return {
    speaker: copy.roles[eventRoles[key]],
    concern: copy.concerns[key],
    producer: copy.producer,
    reply: (practicalActionVersion ? getOnSetProducerAction(language, eventId, priority, practicalActionVersion) : undefined) ?? copy.replies[priority],
    teamResponse: summary.interrupted ? copy.stopped : summary.approachFits ? copy.fitted : copy.partial,
    lesson: copy.lesson[priority]
  };
}
