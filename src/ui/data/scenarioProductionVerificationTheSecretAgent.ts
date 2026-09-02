import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theSecretAgentProductionCaseVerification = {
  scenarioId: "scenario_the_secret_agent_2025",
  status: "verified",
  verifiedAt: "2026-09-02",
  summary: "The Secret Agent is verified as an award-priority Chapter 19 regional/global production case through Festival de Cannes, BBFC, ARRI, ABCine, Post Magazine and direct filmmaker/cinematographer interviews. Cannes records 2025 Best Director for Kleber Mendonça Filho and Best Actor for Wagner Moura and lists the Competition version at 158 minutes; BBFC records a 160m30s UK cinema version, so the playable record rounds that cinema master to 161 minutes while preserving Cannes provenance separately. ARRI locks ALEXA 35 plus ALEXA Mini, Panavision B Series anamorphics plus a selected 100 mm L Series lens, preproduction LUT development, restrained handheld, extensive tracking, compact car rigs, two split-diopter shots, ten weeks for a 180-page screenplay, and two grading sessions. Camera gear came from France while lighting/rigging were sourced locally. ABCine's Thales Junqueira interview documents roughly 30 art-department crew, two to three weeks of art preparation, dozens of Recife locations, the roadside gas station built from scratch, an IML studio build, period-crowd selection and a vibrant rather than gray 1977 strategy. Post Magazine documents an eleven-month editorial period, two editors under Cannes deadline pressure, VFX-heavy sequence division, Avid plus PostLab collaboration from separate nearby rooms and an editorial emphasis on sound perspective. ARRI documents geographically distributed post: editing Brazil, sound editing Netherlands, mixing France, grading Germany, VFX France/Netherlands. Exact budget/finance, daily schedule, full camera/lighting/data inventory, all sets/props/costumes/vehicles, VFX shot/vendor census, complete sound/music sessions and Cannes-to-BBFC master lineage remain unresolved.",
  sources: [
    {
      title: "O AGENTE SECRETO (THE SECRET AGENT)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/o-agente-secreto/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record supporting Competition status, Best Director and Best Actor 2025, 158-minute Cannes listing and principal department credits."
    },
    {
      title: "The Secret Agent",
      publisher: "British Board of Film Classification",
      url: "https://www.bbfc.co.uk/release/the-secret-agent-q29sbgvjdglvbjpwwc0xmdm0ntmw",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "Institutional UK version record supporting the 160m30s 2D cinema master used for the rounded playable runtime."
    },
    {
      title: "Evgenia Alexandrova AFC shoots The Secret Agent with ARRI's ALEXA 35",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/evgenia-alexandrova-afc-the-secret-agent-with-arri-alexa-35",
      sourceKind: "trade_press",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct cinematographer interview locking ALEXA 35/Mini, Panavision B Series and 100 mm L Series, LUT, tracking/car work, ten-week/180-page pressure, two grading sessions and distributed international post."
    },
    {
      title: "A Conversation with Kleber Mendonça Filho (THE SECRET AGENT)",
      publisher: "Hammer to Nail",
      url: "https://www.hammertonail.com/interviews/mendonca-filho/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct director interview supporting archive/memory research, old anamorphic Panavision choice, deliberate digital-plus-imperfect-optics strategy and explicit rejection of a fake-film emulation or photochemical necessity."
    },
    {
      title: "Thales Junqueira: O Agente Secreto",
      publisher: "ABCine",
      url: "https://abcine.org.br/entrevistas/thales-junqueira-o-agente-secreto/",
      sourceKind: "trade_press",
      supports: ["overall", "cinematography"],
      note: "Direct production-design interview supporting roughly 30 art crew, 2–3 weeks of preparation, preserved Recife locations, purpose-built gas station, IML studio build, crowd-periodization and vibrant 1977 design."
    },
    {
      title: "Editing: The Secret Agent",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2026/January-February-2026/Editing-I-The-Secret-Agent-I-.aspx",
      sourceKind: "trade_press",
      supports: ["overall", "editing", "sound"],
      note: "Direct editor interviews supporting eleven months of editing, two-editor Cannes-deadline structure, VFX-heavy sequence division, Avid/PostLab collaboration and editorial sound-perspective practice."
    },
    {
      title: "Kleber Mendonca Filho breaks down four key scenes from The Secret Agent",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/features/kleber-mendonca-filho-breaks-down-four-key-scenes-from-the-secret-agent-the-film-has-multiple-layers-of-storytelling/5214226.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound", "editing"],
      note: "Direct director reporting supporting archive-derived city sound from personal late-1980s VHS recordings and extensive sound editing/mixing for Recife texture."
    },
    {
      title: "Evgenia Alexandrova AFC / The Secret Agent",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/evgenia-alexandrova-afc-the-secret-agent/",
      sourceKind: "trade_press",
      supports: ["cinematography", "overall"],
      note: "Direct cinematographer reporting supporting ten-week location pressure, strict shot-list planning, negative fill, Dinos/SkyPanels/Asteras/HMIs and period-compatible night-location lighting choices."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
