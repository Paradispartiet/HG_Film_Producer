import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { ProducerPriorityId } from "./applyProducerPriority.js";
import type { OnSetEventId } from "./studioCareerOnSetDialogue.js";

/**
 * Practical responses to specific problems faced by a producer on set.
 * These are the same three existing priority decisions, not a new score or
 * decision system. The chosen action is reconstructed from saved event + priority.
 */
type ActionSet = Readonly<Record<ProducerPriorityId, string>>;
type ActionCatalog = Readonly<Partial<Record<OnSetEventId, ActionSet>>>;

export const ON_SET_PRODUCER_ACTIONS: Readonly<Record<FilmWorkLanguage, ActionCatalog>> = {
  en: {
    production_event_bad_weather: {
      story_clarity: "Ask the director and script supervisor which indoor story beats can be prepared while exterior filming is unsafe.",
      performance_trust: "Protect a sheltered rehearsal space for the director and cast without asking anyone to film outside.",
      crew_coordination: "Stop exterior setup, check crew safety and reschedule workable indoor tasks with the assistant director."
    },
    production_event_equipment_failure: {
      story_clarity: "Agree with the director which essential story beats can still be captured with the available camera package.",
      performance_trust: "Give the cast a calm rehearsal window instead of pressuring performers during an equipment breakdown.",
      crew_coordination: "Arrange replacement equipment and coordinate a safe revised call sheet with camera and production."
    },
    production_event_actor_conflict: {
      story_clarity: "Bring the director and script supervisor together on the scene's intention without dictating performances.",
      performance_trust: "Protect time for a private director-and-cast conversation, followed by an unhurried rehearsal.",
      crew_coordination: "Move available crew to another approved task without using schedule pressure against the actors."
    },
    production_event_permit_issue: {
      story_clarity: "Discuss an approved alternative location with the director that preserves the scene's story purpose.",
      performance_trust: "Arrange a suitable rehearsal space for the cast while location access is being resolved.",
      crew_coordination: "Verify written permission with the location manager and postpone setup until access is lawful."
    },
    production_event_budget_overrun: {
      story_clarity: "Ask the director which story beats are indispensable before reducing the scope of the shoot.",
      performance_trust: "Preserve cast preparation and rehearsal time while the production plan is simplified.",
      crew_coordination: "Rework rentals and staffing with production, keeping essential crew and safe working conditions."
    }
  },
  nb: {
    production_event_bad_weather: {
      story_clarity: "Avklar med regissør og script hvilke innendørsscener som kan forberedes mens uteopptak er uforsvarlige.",
      performance_trust: "Sørg for et skjermet prøverom for regissør og skuespillere, uten å presse fram uteopptak.",
      crew_coordination: "Stans rigging ute, ivareta sikkerheten og legg om til gjennomførbare innendørsoppgaver med innspillingsleder."
    },
    production_event_equipment_failure: {
      story_clarity: "Avklar med regissøren hvilke viktige fortellermomenter som kan filmes med utstyret som fortsatt virker.",
      performance_trust: "Gi skuespillerne ro til prøver i stedet for å legge press på dem under utstyrshavariet.",
      crew_coordination: "Skaff erstatningsutstyr og samordne en trygg, oppdatert dagsplan med foto og produksjon."
    },
    production_event_actor_conflict: {
      story_clarity: "Samle regissør og script om hva scenen skal fortelle, uten å bestemme skuespillernes tolkning.",
      performance_trust: "Skjerm tid til en samtale mellom regissør og skuespillere, fulgt av en rolig prøve.",
      crew_coordination: "Flytt tilgjengelig team til en annen godkjent oppgave uten å presse skuespillerne med tidsplanen."
    },
    production_event_permit_issue: {
      story_clarity: "Undersøk et godkjent alternativt opptakssted med regissøren som ivaretar scenens fortellermål.",
      performance_trust: "Finn et egnet prøverom for skuespillerne mens tillatelsen til opptaksstedet avklares.",
      crew_coordination: "Kontroller skriftlig tillatelse med stedsansvarlig og utsett rigging til adgangen er lovlig."
    },
    production_event_budget_overrun: {
      story_clarity: "Spør regissøren hvilke fortellermomenter som må beholdes før innspillingen forenkles.",
      performance_trust: "Beskytt skuespillernes forberedelser og prøvetid mens produksjonsplanen strammes inn.",
      crew_coordination: "Legg om leieavtaler og bemanning med produksjonsledelsen uten å kutte nødvendig sikkerhet."
    }
  },
  fr: {
    production_event_bad_weather: {
      story_clarity: "Demandez à la réalisation et à la continuité quelles scènes intérieures préparer pendant l'arrêt des extérieurs.",
      performance_trust: "Prévoyez une salle de répétition abritée pour la réalisation et les interprètes sans exiger de tournage dehors.",
      crew_coordination: "Arrêtez l'installation extérieure, vérifiez la sécurité et replanifiez les tâches intérieures avec l'assistance de réalisation."
    },
    production_event_equipment_failure: {
      story_clarity: "Déterminez avec la réalisation les moments narratifs encore filmables avec le matériel disponible.",
      performance_trust: "Laissez le temps aux interprètes de répéter sans pression pendant la panne de caméra.",
      crew_coordination: "Organisez le matériel de remplacement et un plan de travail sûr avec l'image et la production."
    },
    production_event_actor_conflict: {
      story_clarity: "Réunissez réalisation et continuité autour de l'intention de la scène sans imposer de jeu aux acteurs.",
      performance_trust: "Réservez un échange privé entre réalisation et interprètes, puis une répétition calme.",
      crew_coordination: "Réaffectez l'équipe disponible à une autre tâche autorisée sans faire pression sur les acteurs."
    },
    production_event_permit_issue: {
      story_clarity: "Étudiez avec la réalisation un autre lieu autorisé qui préserve le rôle narratif de la scène.",
      performance_trust: "Trouvez un espace de répétition pour les interprètes pendant la vérification de l'accès.",
      crew_coordination: "Vérifiez l'autorisation écrite avec la régie et reportez l'installation jusqu'à l'accord."
    },
    production_event_budget_overrun: {
      story_clarity: "Demandez à la réalisation quels moments du récit sont indispensables avant de simplifier le tournage.",
      performance_trust: "Préservez la préparation et les répétitions du casting tout en simplifiant la production.",
      crew_coordination: "Réorganisez locations et effectifs avec la production tout en maintenant la sécurité du plateau."
    }
  },
  pt: {
    production_event_bad_weather: {
      story_clarity: "Confirma com a realização e a continuidade que cenas interiores podem ser preparadas sem filmar no exterior inseguro.",
      performance_trust: "Garante um espaço abrigado para ensaios da realização e do elenco, sem exigir filmagens no exterior.",
      crew_coordination: "Interrompe a montagem no exterior, protege a equipa e reorganiza tarefas interiores com a assistência de realização."
    },
    production_event_equipment_failure: {
      story_clarity: "Decide com a realização que momentos essenciais da história ainda podem ser filmados com o equipamento disponível.",
      performance_trust: "Reserva tempo para o elenco ensaiar com calma, sem pressão durante a avaria do equipamento.",
      crew_coordination: "Organiza equipamento de substituição e um plano de rodagem seguro com imagem e produção."
    },
    production_event_actor_conflict: {
      story_clarity: "Reúne realização e continuidade sobre a intenção da cena sem impor interpretações aos atores.",
      performance_trust: "Protege tempo para uma conversa privada entre realização e elenco, seguida de um ensaio tranquilo.",
      crew_coordination: "Encaminha a equipa disponível para outra tarefa autorizada sem pressionar os intérpretes."
    },
    production_event_permit_issue: {
      story_clarity: "Explora com a realização um local alternativo autorizado que preserve a função narrativa da cena.",
      performance_trust: "Encontra um espaço de ensaio para o elenco enquanto o acesso ao local é esclarecido.",
      crew_coordination: "Confirma a autorização escrita com os responsáveis pelo local e adia a montagem até haver acesso legal."
    },
    production_event_budget_overrun: {
      story_clarity: "Pergunta à realização que momentos da história são indispensáveis antes de simplificar a rodagem.",
      performance_trust: "Preserva a preparação e os ensaios do elenco enquanto o plano de produção é simplificado.",
      crew_coordination: "Revê alugueres e pessoal com a produção, mantendo a equipa essencial e as condições de segurança."
    }
  }
};

/** Older/unknown event identifiers fall back to the existing generic action. */
export function getOnSetProducerAction(
  language: FilmWorkLanguage, eventId: string | undefined, priority: ProducerPriorityId
): string | undefined {
  if (!eventId) return undefined;
  return ON_SET_PRODUCER_ACTIONS[language][eventId as OnSetEventId]?.[priority];
}
