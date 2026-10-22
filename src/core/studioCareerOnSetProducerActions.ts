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
    production_event_perfect_weather: {
      story_clarity: "Ask the director and script supervisor which story moment most benefits from the light before approving a schedule change.",
      performance_trust: "Protect a brief preparation window for performers so an unexpected lighting opportunity does not become rushed acting.",
      crew_coordination: "Agree a safe short adjustment with camera, sound and the assistant director while preserving the rest of the shooting plan."
    },
    production_event_camera_breakthrough: {
      story_clarity: "Confirm with the director how the proposed technical discovery serves the scene without deciding the shot design for them.",
      performance_trust: "Give the cast space to prepare for the new technical setup rather than springing a last-minute demand on performers.",
      crew_coordination: "Bring camera, sound and the assistant director together to confirm equipment, time and safe working conditions for the idea."
    },
    production_event_actor_improvisation: {
      story_clarity: "Ask the director and script supervisor whether the improvisation supports the film's intended character and story arc.",
      performance_trust: "Protect a short rehearsal for director and cast to explore the spontaneous idea without pressure to accept it.",
      crew_coordination: "Coordinate camera, sound and the schedule so the idea can be tried without sacrificing planned essential footage."
    },
    production_event_location_value: {
      story_clarity: "Discuss with the director whether the unexpected location detail advances the story before committing to a change.",
      performance_trust: "Help the director and performers explore the location in a calm rehearsal before filming any new action.",
      crew_coordination: "Check permissions, crew access, sound conditions and safe movement before adjusting the location plan."
    },
    production_event_cost_saving: {
      story_clarity: "Identify with the director which scenes and narrative beats must survive any simpler production approach.",
      performance_trust: "Keep essential cast preparation and rehearsal time intact while adopting a leaner production plan.",
      crew_coordination: "Simplify transport, rentals and department call times together without cutting indispensable crew or safety."
    },
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
    production_event_perfect_weather: {
      story_clarity: "Avklar med regissør og script hvilket fortellermoment som tjener mest på lyset før opptaksplanen endres.",
      performance_trust: "Skjerm litt forberedelsestid for skuespillerne slik at godt lys ikke fører til forhastede prestasjoner.",
      crew_coordination: "Avtal en trygg, kort omlegging med foto, lyd og innspillingsleder uten å miste resten av dagens plan."
    },
    production_event_camera_breakthrough: {
      story_clarity: "Undersøk med regissøren hvordan fotoavdelingens nye løsning støtter scenen, uten å overta bildevalgene.",
      performance_trust: "Gi skuespillerne rom til å forberede den nye tekniske løsningen uten urimelig tidspress.",
      crew_coordination: "Samle foto, lyd og innspillingsleder for å kontrollere utstyr, tidsbruk og trygg gjennomføring."
    },
    production_event_actor_improvisation: {
      story_clarity: "Avklar med regissør og script om improvisasjonen passer figurens utvikling og filmens fortelling.",
      performance_trust: "Skjerm en kort prøve der regissør og skuespillere kan utforske ideen uten press om å bruke den.",
      crew_coordination: "Samordne foto, lyd og dagsplan slik at ideen kan prøves uten å miste planlagte nødvendige opptak."
    },
    production_event_location_value: {
      story_clarity: "Drøft med regissøren om den uventede detaljen ved opptaksstedet faktisk styrker filmens fortelling.",
      performance_trust: "Gi regissør og skuespillere en rolig prøve på stedet før eventuelle nye opptak planlegges.",
      crew_coordination: "Kontroller tillatelser, tilgang, lydforhold og trygg bevegelse før opptaksplanen endres."
    },
    production_event_cost_saving: {
      story_clarity: "Finn sammen med regissøren ut hvilke scener og fortellermomenter som ikke kan forenkles bort.",
      performance_trust: "Ta vare på nødvendig forberedelses- og prøvetid for skuespillerne selv om produksjonen forenkles.",
      crew_coordination: "Forenkle transport, leieutstyr og oppmøtetider i samråd med avdelingene uten å svekke sikkerheten."
    },
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
    production_event_perfect_weather: {
      story_clarity: "Demandez à la réalisation et à la continuité quel moment du récit profite vraiment de cette lumière avant de changer le planning.",
      performance_trust: "Préservez un temps de préparation pour les interprètes afin que la belle lumière ne crée pas une pression excessive.",
      crew_coordination: "Concertez image, son et assistance de réalisation pour ajuster le planning sans compromettre la sécurité."
    },
    production_event_camera_breakthrough: {
      story_clarity: "Vérifiez avec la réalisation comment l'idée de l'équipe image sert la scène sans imposer les choix de cadrage.",
      performance_trust: "Donnez aux interprètes le temps de se préparer au dispositif technique plutôt que d'imposer un changement brusque.",
      crew_coordination: "Réunissez image, son et assistance de réalisation pour vérifier matériel, temps et sécurité de la proposition."
    },
    production_event_actor_improvisation: {
      story_clarity: "Demandez à la réalisation et à la continuité si l'improvisation respecte l'évolution du personnage et le récit.",
      performance_trust: "Préservez une répétition calme pour que réalisation et interprètes explorent l'idée sans obligation de la garder.",
      crew_coordination: "Coordonnez image, son et planning pour essayer la proposition sans perdre les prises indispensables."
    },
    production_event_location_value: {
      story_clarity: "Discutez avec la réalisation de la valeur narrative du lieu découvert avant de modifier le travail prévu.",
      performance_trust: "Offrez à la réalisation et aux interprètes une répétition paisible sur place avant de décider de nouvelles prises.",
      crew_coordination: "Vérifiez autorisations, accès, conditions sonores et déplacements sûrs avant d'adapter le plan du lieu."
    },
    production_event_cost_saving: {
      story_clarity: "Définissez avec la réalisation les scènes essentielles à préserver avant toute simplification de la production.",
      performance_trust: "Conservez la préparation et les répétitions indispensables du casting dans le plan simplifié.",
      crew_coordination: "Réduisez transports, locations et horaires avec les équipes sans sacrifier les postes essentiels ou la sécurité."
    },
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
    production_event_perfect_weather: {
      story_clarity: "Confirma com a realização e a continuidade que momento da história beneficia mais desta luz antes de alterar o plano.",
      performance_trust: "Protege algum tempo de preparação para o elenco para que a oportunidade de luz não crie interpretações apressadas.",
      crew_coordination: "Combina um ajuste seguro com imagem, som e assistência de realização sem prejudicar o restante plano do dia."
    },
    production_event_camera_breakthrough: {
      story_clarity: "Confirma com a realização como a descoberta da imagem serve a cena sem escolher os enquadramentos por ela.",
      performance_trust: "Dá ao elenco tempo para se preparar para a nova solução técnica em vez de impor mudanças de última hora.",
      crew_coordination: "Reúne imagem, som e assistência de realização para validar equipamento, tempo e condições de segurança."
    },
    production_event_actor_improvisation: {
      story_clarity: "Pergunta à realização e à continuidade se a improvisação respeita a personagem e a história do filme.",
      performance_trust: "Reserva um ensaio tranquilo para a realização e o elenco explorarem a ideia sem obrigação de a usar.",
      crew_coordination: "Coordena imagem, som e horário para experimentar a ideia sem perder as tomadas essenciais previstas."
    },
    production_event_location_value: {
      story_clarity: "Discute com a realização se o pormenor inesperado do local acrescenta valor à narrativa antes de alterar o plano.",
      performance_trust: "Dá à realização e ao elenco espaço para um ensaio calmo no local antes de gravar algo novo.",
      crew_coordination: "Confirma permissões, acessos, som e circulação segura da equipa antes de mudar o plano de rodagem."
    },
    production_event_cost_saving: {
      story_clarity: "Identifica com a realização as cenas e os momentos narrativos essenciais antes de simplificar a produção.",
      performance_trust: "Mantém o tempo indispensável de preparação e ensaio do elenco mesmo com um plano mais simples.",
      crew_coordination: "Simplifica transportes, alugueres e horários em conjunto com as equipas sem comprometer a segurança."
    },
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

/** The five dilemmas already in saves made with practicalActionVersion 1. */
const FIRST_ACTION_EVENT_IDS: ReadonlySet<string> = new Set([
  "production_event_bad_weather",
  "production_event_equipment_failure",
  "production_event_actor_conflict",
  "production_event_permit_issue",
  "production_event_budget_overrun"
]);

/**
 * Version 1 keeps the five originally authored practical choices, leaving the
 * other five dialogues generic. Version 2 covers all ten. Missing versions
 * in legacy saves are handled by the caller, not fabricated here.
 */
export function getOnSetProducerAction(
  language: FilmWorkLanguage, eventId: string | undefined, priority: ProducerPriorityId,
  version: 1 | 2 = 2
): string | undefined {
  if (!eventId || (version === 1 && !FIRST_ACTION_EVENT_IDS.has(eventId))) return undefined;
  return ON_SET_PRODUCER_ACTIONS[language][eventId as OnSetEventId]?.[priority];
}
