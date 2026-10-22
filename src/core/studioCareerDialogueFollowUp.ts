import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import { ON_SET_EVENT_IDS, type OnSetEventId } from "./studioCareerOnSetDialogue.js";
import type { TeamContinuity } from "./studioCareerTeamContinuity.js";

/**
 * The speaker on today's set refers to the previous *real* production event.
 * This is dialogue only: no new meter, invented relationships or alternate
 * quality calculation. Missing/legacy context simply omits the follow-up.
 */
interface FollowUpCopy {
  readonly incident: Readonly<Record<OnSetEventId, string>>;
  readonly supported: (incident: string) => string;
  readonly unfinished: (incident: string) => string;
  readonly stopped: (incident: string) => string;
  readonly today: Readonly<Record<OnSetEventId, string>>;
  readonly shifted: string;
}

const FOLLOW_UP_COPY = {
  en: {
    incident: {
      production_event_bad_weather: "the weather stoppage",
      production_event_perfect_weather: "the unexpected good light",
      production_event_equipment_failure: "the equipment breakdown",
      production_event_camera_breakthrough: "the camera team's discovery",
      production_event_actor_conflict: "the cast disagreement",
      production_event_actor_improvisation: "the spontaneous performance",
      production_event_permit_issue: "the location access problem",
      production_event_location_value: "the location discovery",
      production_event_budget_overrun: "the production overrun",
      production_event_cost_saving: "the simpler production plan"
    },
    supported: (incident) => `After ${incident}, your support gave the team a way forward.`,
    unfinished: (incident) => `After ${incident}, we still have an unanswered request for support.`,
    stopped: (incident) => `When ${incident} interrupted filming, we could not finish that work.`,
    today: {
      production_event_bad_weather: "I'm the assistant director: safety comes first. Help me reorganize the safe work while exterior filming stops.",
      production_event_perfect_weather: "I'm with the camera team. Can you make room in the schedule for the director to decide how to use this light?",
      production_event_equipment_failure: "I'm with camera. We need a workable equipment plan, not pressure to attempt an unsafe shot.",
      production_event_camera_breakthrough: "I'm the director. Can you bring the departments together around the story goal and leave the shot design with me?",
      production_event_actor_conflict: "I'm in the cast. Please protect a calm rehearsal conversation with the director, not decide how I should play the scene.",
      production_event_actor_improvisation: "I'm the director. Give the cast and me space to test the idea before production commits to it.",
      production_event_permit_issue: "I'm managing locations. Please help secure permission before the crew begins any setup.",
      production_event_location_value: "I'm the location manager. Can you coordinate access while the director decides what this place contributes?",
      production_event_budget_overrun: "I'm managing production. We need a revised practical plan that protects the film's main creative requirement.",
      production_event_cost_saving: "I'm managing production. Can you align the teams on what we can simplify without sacrificing the scene?"
    },
    shifted: "The earlier unanswered need has to be considered alongside today's creative opportunity."
  },
  nb: {
    incident: {
      production_event_bad_weather: "været som stanset opptakene",
      production_event_perfect_weather: "det uventet gode lyset",
      production_event_equipment_failure: "utstyrshavariet",
      production_event_camera_breakthrough: "fotoavdelingens nye løsning",
      production_event_actor_conflict: "uenigheten mellom skuespillerne",
      production_event_actor_improvisation: "det spontane skuespillerøyeblikket",
      production_event_permit_issue: "problemet med tillatelse til opptaksstedet",
      production_event_location_value: "oppdagelsen på opptaksstedet",
      production_event_budget_overrun: "overskridelsen i produksjonen",
      production_event_cost_saving: "den forenklede produksjonsplanen"
    },
    supported: (incident) => `Etter ${incident} ga støtten din teamet en vei videre.`,
    unfinished: (incident) => `Etter ${incident} har vi fortsatt et behov du ikke har fulgt opp.`,
    stopped: (incident) => `Da ${incident} avbrøt innspillingen, fikk vi ikke fullført arbeidet.`,
    today: {
      production_event_bad_weather: "Jeg er innspillingsleder. Sikkerheten kommer først. Hjelp meg å omorganisere trygt arbeid mens uteopptakene står.",
      production_event_perfect_weather: "Jeg jobber i fotoavdelingen. Kan du frigjøre tid så regissøren kan avgjøre hvordan vi bruker lyset?",
      production_event_equipment_failure: "Jeg jobber med foto. Vi trenger en gjennomførbar utstyrsplan, ikke press om uforsvarlige opptak.",
      production_event_camera_breakthrough: "Jeg er regissøren. Kan du samle fagavdelingene om fortellermålet, men overlate bildevalgene til meg?",
      production_event_actor_conflict: "Jeg er skuespiller. Gi oss rom for en rolig prøve med regissøren, uten å bestemme hvordan jeg skal spille.",
      production_event_actor_improvisation: "Jeg er regissøren. La oss prøve ideen med skuespillerne før produksjonen binder seg til den.",
      production_event_permit_issue: "Jeg er locationansvarlig. Hjelp oss å sikre tillatelse før teamet rigger.",
      production_event_location_value: "Jeg har ansvar for opptaksstedet. Kan du koordinere tilgangen mens regissøren avgjør hva stedet skal bety?",
      production_event_budget_overrun: "Jeg er produksjonsleder. Vi trenger en justert, gjennomførbar plan som ivaretar filmens viktigste kreative behov.",
      production_event_cost_saving: "Jeg er produksjonsleder. Kan du samle avdelingene om hva vi kan forenkle uten å svekke scenen?"
    },
    shifted: "Behovet som står igjen fra forrige opptaksdag, må tas med i vurderingen av dagens kreative mulighet."
  },
  fr: {
    incident: {
      production_event_bad_weather: "l'arrêt dû à la météo",
      production_event_perfect_weather: "la lumière inattendue",
      production_event_equipment_failure: "la panne de matériel",
      production_event_camera_breakthrough: "la découverte de l'équipe image",
      production_event_actor_conflict: "le désaccord au sein de la distribution",
      production_event_actor_improvisation: "l'improvisation des interprètes",
      production_event_permit_issue: "le problème d'autorisation du lieu",
      production_event_location_value: "la découverte du lieu",
      production_event_budget_overrun: "le dépassement de production",
      production_event_cost_saving: "le plan de production simplifié"
    },
    supported: (incident) => `Après ${incident}, votre soutien a permis à l'équipe d'avancer.`,
    unfinished: (incident) => `Après ${incident}, un besoin de l'équipe reste sans réponse.`,
    stopped: (incident) => `Lorsque ${incident} a interrompu le tournage, le travail est resté inachevé.`,
    today: {
      production_event_bad_weather: "Je suis assistant de réalisation. La sécurité prime. Aidons les équipes à trouver un travail sûr pendant l'arrêt des extérieurs.",
      production_event_perfect_weather: "Je travaille à l'image. Pouvez-vous dégager du temps pour que la réalisation choisisse comment profiter de cette lumière ?",
      production_event_equipment_failure: "Je travaille à l'image. Il nous faut un plan de matériel viable, sans pousser l'équipe à risquer une prise.",
      production_event_camera_breakthrough: "Je suis à la réalisation. Réunissez les équipes autour du récit, mais laissez-moi choisir les plans.",
      production_event_actor_conflict: "Je joue dans le film. Protégez une répétition calme avec la réalisation, sans décider de mon interprétation.",
      production_event_actor_improvisation: "Je réalise le film. Laissez le temps aux interprètes et à moi d'essayer cette idée avant de nous engager.",
      production_event_permit_issue: "Je gère les lieux. Aidez-nous à obtenir l'autorisation avant l'installation de l'équipe.",
      production_event_location_value: "Je gère les lieux. Coordonnez l'accès pendant que la réalisation décide du sens du décor.",
      production_event_budget_overrun: "Je dirige la production. Il nous faut un plan réaliste qui protège le besoin créatif essentiel.",
      production_event_cost_saving: "Je dirige la production. Pouvez-vous aligner les services sur ce que nous pouvons simplifier sans affaiblir la scène ?"
    },
    shifted: "Il faut tenir compte du besoin resté ouvert avant de profiter de cette nouvelle occasion créative."
  },
  pt: {
    incident: {
      production_event_bad_weather: "a paragem causada pelo mau tempo",
      production_event_perfect_weather: "a luz inesperada",
      production_event_equipment_failure: "a avaria do equipamento",
      production_event_camera_breakthrough: "a descoberta da equipa de imagem",
      production_event_actor_conflict: "o desacordo do elenco",
      production_event_actor_improvisation: "a improvisação do elenco",
      production_event_permit_issue: "o problema da autorização do local",
      production_event_location_value: "a descoberta no local",
      production_event_budget_overrun: "o desvio na produção",
      production_event_cost_saving: "o plano de produção simplificado"
    },
    supported: (incident) => `Depois de ${incident}, o teu apoio ajudou a equipa a avançar.`,
    unfinished: (incident) => `Depois de ${incident}, a equipa ainda tem um pedido de apoio por resolver.`,
    stopped: (incident) => `Quando ${incident} interrompeu a rodagem, não conseguimos concluir o trabalho.`,
    today: {
      production_event_bad_weather: "Sou assistente de realização. A segurança vem primeiro. Ajuda-nos a reorganizar o trabalho seguro durante a paragem no exterior.",
      production_event_perfect_weather: "Sou da equipa de imagem. Podes reservar tempo para a realização decidir como aproveitar esta luz?",
      production_event_equipment_failure: "Sou da imagem. Precisamos de um plano de equipamento viável, sem pressionar a equipa a fazer tomadas inseguras.",
      production_event_camera_breakthrough: "Sou a pessoa responsável pela realização. Junta os departamentos em torno do objetivo da história, mas deixa-me escolher os planos.",
      production_event_actor_conflict: "Faço parte do elenco. Protege um ensaio tranquilo com a realização, sem decidir a minha interpretação.",
      production_event_actor_improvisation: "Sou responsável pela realização. Dá ao elenco e a mim espaço para experimentar antes de comprometer a produção.",
      production_event_permit_issue: "Sou responsável pelos locais. Ajuda-nos a garantir a autorização antes de montar o equipamento.",
      production_event_location_value: "Sou responsável pelos locais. Coordena o acesso enquanto a realização decide o significado do espaço.",
      production_event_budget_overrun: "Sou responsável pela produção. Precisamos de um plano exequível que proteja a principal necessidade criativa.",
      production_event_cost_saving: "Sou responsável pela produção. Podes alinhar os departamentos sobre o que simplificar sem prejudicar a cena?"
    },
    shifted: "A necessidade anterior por resolver deve ser considerada antes de aproveitarmos esta nova oportunidade criativa."
  }
} satisfies Record<FilmWorkLanguage, FollowUpCopy>;

/** One contextual line from today's actual speaker; preview and replay use the same saved history. */
export function describeOnSetFollowUp(
  language: FilmWorkLanguage,
  eventId: string,
  continuity: TeamContinuity | undefined
): string | undefined {
  if (!continuity) return undefined;
  if (!ON_SET_EVENT_IDS.some((id) => id === eventId)) return undefined;
  if (!ON_SET_EVENT_IDS.some((id) => id === continuity.previousEventId)) return undefined;
  const copy = FOLLOW_UP_COPY[language];
  const previous = copy.incident[continuity.previousEventId as OnSetEventId];
  const introduction = continuity.previousWasInterrupted ? copy.stopped(previous)
    : continuity.previousWasMatched ? copy.supported(previous) : copy.unfinished(previous);
  const question = copy.today[eventId as OnSetEventId];
  return `${introduction} ${question}${continuity.shiftedPriority ? ` ${copy.shifted}` : ""}`;
}
