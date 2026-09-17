import type { StrategicGoal } from "../domain/career.js";
import type { FilmWorkLanguage } from "./filmWorkLanguage.js";

export type StrategicGoalPresentationInput = Pick<
  StrategicGoal,
  "id" | "type" | "title" | "description"
>;

export type StrategicGoalPresentation = Pick<StrategicGoal, "title" | "description">;

type LocalizedStrategicGoalKey =
  | Exclude<StrategicGoal["type"], "build_reputation">
  | "build_reputation_local_oslo"
  | "build_reputation_technical_craft";

type LocalizedStrategicGoalCopy = Readonly<
  Record<LocalizedStrategicGoalKey, StrategicGoalPresentation>
>;

const LOCALIZED_STRATEGIC_GOALS: Readonly<
  Record<Exclude<FilmWorkLanguage, "en">, LocalizedStrategicGoalCopy>
> = {
  nb: {
    survive_year: {
      title: "Overlev det første året",
      description: "Hold studioet solvent gjennom fire kvartaler og fullfør én film.",
    },
    make_profit: {
      title: "Gå med overskudd",
      description: "Fullfør en film med positiv nettoinntekt.",
    },
    launch_debut: {
      title: "Lag en lønnsom debut",
      description: "Lanser studioets første film med positiv nettoinntekt.",
    },
    build_reputation_local_oslo: {
      title: "Bli et lokalt Oslo-studio",
      description: "Bygg en gjenkjennelig lokal stemme gjennom Oslo-fortellinger, filmteam og innspillingssteder.",
    },
    build_reputation_technical_craft: {
      title: "Forbedre det tekniske håndverket",
      description: "Hev produksjonskvaliteten gjennom opplæring, utstyr og sterke avdelingsledere.",
    },
    build_prestige: {
      title: "Bygg omdømme innen kunstfilm",
      description: "Utvikle filmer med en tydelig kritisk profil og bygg relasjoner til festivaler.",
    },
    win_award: {
      title: "Vinn en festivalpris",
      description: "Før én film fra festivalutvelgelse til en konkurransepris.",
    },
    grow_audience: {
      title: "Bygg et kommersielt publikum",
      description: "Skap gjentakende publikumspotensial på tvers av studioets filmer.",
    },
    specialize_genre: {
      title: "Bli kjent for thrillere",
      description: "Fullfør en sammenhengende rekke spenningsdrevne sjangerfilmer.",
    },
    discover_talent: {
      title: "Oppdag nye talenter",
      description: "Løft fram nye skuespillere eller filmarbeidere gjennom meningsfullt kreativt ansvar.",
    },
    international_breakthrough: {
      title: "Sikre en internasjonal samproduksjon",
      description: "Bygg nok posisjon til å pakke en film med utenlandske kreative og finansielle partnere.",
    },
  },
  fr: {
    survive_year: {
      title: "Passer la première année",
      description: "Maintenez le studio solvable pendant quatre trimestres et terminez un film.",
    },
    make_profit: {
      title: "Dégager un bénéfice",
      description: "Terminez un film avec des recettes nettes positives.",
    },
    launch_debut: {
      title: "Réussir un premier film rentable",
      description: "Sortez le premier film du studio avec des recettes nettes positives.",
    },
    build_reputation_local_oslo: {
      title: "Devenir un studio local à Oslo",
      description: "Construisez une identité locale reconnaissable grâce aux récits, équipes et lieux d’Oslo.",
    },
    build_reputation_technical_craft: {
      title: "Améliorer la maîtrise technique",
      description: "Élevez la qualité de production grâce à la formation, au matériel et à de solides chefs de département.",
    },
    build_prestige: {
      title: "Bâtir une réputation dans le cinéma d’auteur",
      description: "Développez des films à l’identité critique affirmée et des relations avec les festivals.",
    },
    win_award: {
      title: "Remporter un prix en festival",
      description: "Menez un film de la sélection en festival jusqu’à une victoire en compétition.",
    },
    grow_audience: {
      title: "Développer un public commercial",
      description: "Créez un attrait durable auprès du public à travers la programmation du studio.",
    },
    specialize_genre: {
      title: "Se faire connaître pour les thrillers",
      description: "Réalisez une série cohérente de films de genre fondés sur le suspense.",
    },
    discover_talent: {
      title: "Découvrir de nouveaux talents",
      description: "Lancez des acteurs ou techniciens émergents en leur confiant de véritables responsabilités créatives.",
    },
    international_breakthrough: {
      title: "Obtenir une coproduction internationale",
      description: "Acquérez assez de stature pour monter un film avec des partenaires créatifs et financiers étrangers.",
    },
  },
  pt: {
    survive_year: {
      title: "Superar o primeiro ano",
      description: "Mantenha o estúdio solvente durante quatro trimestres e conclua um filme.",
    },
    make_profit: {
      title: "Obter lucro",
      description: "Conclua um filme com receita líquida positiva.",
    },
    launch_debut: {
      title: "Fazer uma estreia rentável",
      description: "Estreie o primeiro filme do estúdio com receita líquida positiva.",
    },
    build_reputation_local_oslo: {
      title: "Tornar-se um estúdio local de Oslo",
      description: "Construa uma voz local reconhecível através de histórias, equipas e locais de Oslo.",
    },
    build_reputation_technical_craft: {
      title: "Melhorar o domínio técnico",
      description: "Eleve a qualidade de produção através de formação, equipamento e chefias de departamento fortes.",
    },
    build_prestige: {
      title: "Construir reputação no cinema de autor",
      description: "Desenvolva filmes com identidade crítica própria e relações com festivais.",
    },
    win_award: {
      title: "Ganhar um prémio num festival",
      description: "Leve um filme da seleção em festival até uma vitória competitiva.",
    },
    grow_audience: {
      title: "Construir um público comercial",
      description: "Crie um apelo de público repetível em toda a carteira do estúdio.",
    },
    specialize_genre: {
      title: "Tornar-se conhecido por thrillers",
      description: "Conclua uma sequência coerente de filmes de género orientados pelo suspense.",
    },
    discover_talent: {
      title: "Descobrir novos talentos",
      description: "Lance atores ou profissionais emergentes através de responsabilidades criativas relevantes.",
    },
    international_breakthrough: {
      title: "Garantir uma coprodução internacional",
      description: "Construa posição suficiente para estruturar um filme com parceiros criativos e financeiros estrangeiros.",
    },
  },
};

function localizedGoalKey(goal: StrategicGoalPresentationInput): LocalizedStrategicGoalKey | undefined {
  if (goal.type !== "build_reputation") return goal.type;

  switch (goal.id) {
    case "strategic_goal_local_oslo_studio":
      return "build_reputation_local_oslo";
    case "strategic_goal_improve_technical_craft":
      return "build_reputation_technical_craft";
    default:
      return undefined;
  }
}

export function presentStrategicGoal(
  language: FilmWorkLanguage,
  goal: StrategicGoalPresentationInput,
): StrategicGoalPresentation {
  if (language === "en") {
    return { title: goal.title, description: goal.description };
  }

  const key = localizedGoalKey(goal);
  if (!key) {
    return { title: goal.title, description: goal.description };
  }

  return LOCALIZED_STRATEGIC_GOALS[language][key];
}
