import type { FilmWorkLanguage } from "./filmWorkLanguage.js";
import type { StudioCareerDramaturgyId } from "./studioCareerDramaturgy.js";

interface DramaturgyCopy {
  readonly heading: string;
  readonly introduction: string;
  readonly current: string;
  readonly change: string;
  readonly choose: string;
  readonly swipeHint: string;
  readonly note: string;
  readonly scriptContext: (conflict: number, pacing: number) => string;
  readonly footageContext: (missing: number) => string;
  readonly options: Readonly<Record<StudioCareerDramaturgyId, {
    readonly title: string;
    readonly reason: string;
    readonly tradeoff: string;
  }>>;
}

export const STUDIO_CAREER_DRAMATURGY_COPY: Readonly<Record<FilmWorkLanguage, DramaturgyCopy>> = {
  nb: {
    heading: "Fortell historien på en annen måte",
    introduction: "Utforsk vendepunkt, konflikt, spenningsoppbygging og scenerekkefølge. Dette er simulerte klippegrep basert på ditt manus og det som faktisk ble filmet.",
    current: "Valgt grep", change: "Beregnet endring", choose: "Prøv dette grepet", swipeHint: "Sveip sidelengs for flere grep", 
    note: "Tallene er beregnet i samme prøvevisningsmotor som sluttfilmen. Et valg kan svekke andre sider av fortellingen. Ingen ny opptaksdag opprettes, og filmen låses ikke.",
    scriptContext: (conflict, pacing) => `Manusgrunnlag: konflikt ${conflict}/100 · rytme ${pacing}/100.`,
    footageContext: (missing) => `${missing} uferdige scener i opptaksrapporten kan begrense dramaturgien.`,
    options: {
      original: { title: "Behold fortellerstrukturen", reason: "Bruk fortellingen slik den allerede er klippet.", tradeoff: "Ingen nye dramaturgiske virkninger." },
      turning_point: { title: "Gi vendepunktet mer plass", reason: "La avgjørende reaksjon og konsekvens komme tydeligere frem.", tradeoff: "Kan gi tyngde, men gjør ikke svak konflikt sterk av seg selv." },
      conflict: { title: "Vis hovedkonflikten tidligere", reason: "Gjør motstand og innsats tydelig fra starten.", tradeoff: "Mer fremdrift for interessen, men mindre tid til oppbygging." },
      suspense: { title: "Hold igjen avsløringen", reason: "La publikum vente og tolke før ny informasjon gis.", tradeoff: "Mer spenning, men større fare for uklarhet." },
      scene_order: { title: "Endre scenerekkefølgen", reason: "Bygg en tydeligere årsak–virkning-kjede med tilgjengelige scener.", tradeoff: "Kan bedre forståelsen, men hull i opptakene gjør grepet risikabelt." }
    }
  },
  en: {
    heading: "Tell the story differently",
    introduction: "Explore turning points, conflict, suspense and scene order. These are simulated editing decisions grounded in your screenplay and recorded footage.",
    current: "Selected technique", change: "Projected change", choose: "Try this technique", swipeHint: "Swipe sideways for more choices",
    note: "Scores come from the same screening engine as the final film. A technique may worsen another aspect of storytelling. No new footage is invented, and the film stays unlocked.",
    scriptContext: (conflict, pacing) => `Screenplay evidence: conflict ${conflict}/100 · pacing ${pacing}/100.`,
    footageContext: (missing) => `${missing} unfinished recorded scenes may restrict the available structure.`,
    options: {
      original: { title: "Keep the original structure", reason: "Retain the storytelling rhythm of the current cut.", tradeoff: "No new dramaturgical effect." },
      turning_point: { title: "Emphasize the turning point", reason: "Give the decisive reaction and its consequence more space.", tradeoff: "May add weight but cannot fix weak conflict on its own." },
      conflict: { title: "Bring the conflict forward", reason: "Establish opposing forces and the stakes earlier.", tradeoff: "Stronger hook, but less time to build up." },
      suspense: { title: "Delay the reveal", reason: "Let the audience anticipate and interpret before the answer arrives.", tradeoff: "Greater tension at the cost of clarity." },
      scene_order: { title: "Reorder the scenes", reason: "Clarify cause and effect with the footage you actually have.", tradeoff: "May improve coherence, but missing scenes add risk." }
    }
  },
  fr: {
    heading: "Raconter autrement",
    introduction: "Explorez les tournants, le conflit, le suspense et l'ordre des scènes. Ces montages simulés utilisent le scénario et les prises réellement enregistrées.",
    current: "Choix actuel", change: "Variation simulée", choose: "Essayer ce choix", swipeHint: "Balayez sur le côté pour plus de choix",
    note: "Les scores viennent du même moteur que le film final. Un choix peut affaiblir un autre aspect du récit. Aucune prise n'est inventée et le film reste modifiable.",
    scriptContext: (conflict, pacing) => `Scénario : conflit ${conflict}/100 · rythme ${pacing}/100.`,
    footageContext: (missing) => `${missing} scènes non terminées peuvent limiter la construction du récit.`,
    options: {
      original: { title: "Garder la structure", reason: "Préserver la construction narrative du montage actuel.", tradeoff: "Aucun nouvel effet dramaturgique." },
      turning_point: { title: "Accentuer le tournant", reason: "Donner plus de place à la réaction décisive et ses conséquences.", tradeoff: "Le poids augmente sans forcément résoudre un conflit faible." },
      conflict: { title: "Avancer le conflit", reason: "Présenter plus tôt l'opposition et les enjeux.", tradeoff: "Accroche plus forte, au prix d'une montée plus courte." },
      suspense: { title: "Retarder la révélation", reason: "Laisser le public anticiper avant de révéler les informations.", tradeoff: "Plus de tension, mais une compréhension moins immédiate." },
      scene_order: { title: "Réorganiser les scènes", reason: "Clarifier les causes et conséquences avec les prises disponibles.", tradeoff: "Les scènes manquantes rendent le choix plus fragile." }
    }
  },
  pt: {
    heading: "Contar a história de outra forma",
    introduction: "Explora pontos de viragem, conflito, suspense e ordem das cenas. Estas decisões de montagem são simuladas a partir do guião e das imagens gravadas.",
    current: "Escolha atual", change: "Alteração prevista", choose: "Experimentar escolha", swipeHint: "Desliza para ver mais escolhas",
    note: "Os valores vêm do mesmo motor da versão final. Uma técnica pode prejudicar outro aspeto da história. Não se inventam cenas e o filme não fica bloqueado.",
    scriptContext: (conflict, pacing) => `Guião: conflito ${conflict}/100 · ritmo ${pacing}/100.`,
    footageContext: (missing) => `${missing} cenas por concluir podem limitar a estrutura narrativa.`,
    options: {
      original: { title: "Manter a estrutura", reason: "Preservar a construção da montagem atual.", tradeoff: "Sem novos efeitos dramatúrgicos." },
      turning_point: { title: "Destacar o ponto de viragem", reason: "Dar mais espaço à reação decisiva e à consequência.", tradeoff: "Pode aumentar o impacto, sem resolver por si só um conflito fraco." },
      conflict: { title: "Antecipar o conflito", reason: "Mostrar a oposição e o que está em jogo mais cedo.", tradeoff: "Mais interesse, mas menos tempo para a preparação." },
      suspense: { title: "Adiar a revelação", reason: "Deixar o público antecipar antes de receber a resposta.", tradeoff: "Mais tensão, mas menor clareza." },
      scene_order: { title: "Reordenar as cenas", reason: "Reforçar causa e efeito usando as imagens disponíveis.", tradeoff: "Cenas em falta tornam o resultado mais arriscado." }
    }
  }
};
