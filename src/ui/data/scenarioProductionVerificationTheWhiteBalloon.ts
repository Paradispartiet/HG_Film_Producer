import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theWhiteBalloonProductionCaseVerification = {
  scenarioId: "scenario_the_white_balloon_1995",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "The White Balloon is verified as Jafar Panahi's 1995 Iranian first feature, built around an 85-minute real-time quest and an institutional production network that should not be simplified into one company or one auteur. Cannes records Panahi's debut and Caméra d'Or. IFFR credits Kurosh Mazkouri and Foad Nour as producers, Abbas Kiarostami as screenwriter, Panahi as editor/production designer, Ferdos Films as production company and Farabi Cinema Foundation as world-rights holder. Torino credits Panahi for direction/design/editing, Kiarostami's screenplay from an original idea by Panahi and Parviz Shahbazi, Farzad Jodat as director of photography, Mehdi Dejbodi for sound, Kurosh Mazkouri as director of production and IRIB Channel Two as production company. Celluloid Dreams instead lists Farabi Cinema Foundation as producer, so production, support and sales roles remain source-specific rather than silently collapsed. BFI records the film's real-time form and a performance method intended to preserve spontaneity. That is historical process evidence only; current work with minor performers must follow applicable consent, guardian, welfare, working-hours, education and labor requirements. The reviewed sources do not establish a camera body, lens set, stock, exposure, lighting plan, laboratory chain, sound hardware, detailed schedule, crew size or permit history, so those are not invented. Most festival/sales records give 85 minutes. ACMI preserves an 82-minute holding; this is retained as collection/version variance. Cannes recognition, later critical canonization and Panahi's later censorship history are downstream and are not used as proof of undocumented 1995 production technique.",
  sources: [
    {
      title: "About Jafar Panahi",
      publisher: "Festival de Cannes",
      url: "https://cdn.festival-cannes.com/media/uploads/2025/05/189496.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Institutional Cannes biography confirming Panahi's first feature, Kiarostami collaboration and Caméra d'Or."
    },
    {
      title: "The White Balloon",
      publisher: "International Film Festival Rotterdam",
      url: "https://iffr.com/en/iffr/1995/films/the-white-balloon",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Festival record for 85 minutes, producers Kurosh Mazkouri/Foad Nour, Kiarostami screenplay, Panahi editing/design, Ferdos Films and Farabi world rights."
    },
    {
      title: "Badkonake sefid",
      publisher: "Torino Film Festival",
      url: "https://www.torinofilmfest.org/en/13-festival-internazionale-cinema-giovani/film/badkonake-sefid/1632/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Detailed festival credit record for Panahi, Kiarostami/Panahi/Shahbazi authorship, Farzad Jodat, Mehdi Dejbodi, Kurosh Mazkouri and IRIB Channel Two."
    },
    {
      title: "WHITE BALLOON, THE",
      publisher: "Celluloid Dreams",
      url: "https://celluloid-dreams.com/films/white-balloon-the/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Sales-company catalogue confirming Iran, 1995, Farsi, 85 minutes, Panahi and a Farabi producer attribution retained as institutional-role variance."
    },
    {
      title: "90 great films of the 1990s: The White Balloon",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/90-great-films-1990s",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI record for Kiarostami's script, Panahi's debut and the historical performance method of giving script material to children in portions."
    },
    {
      title: "10 great Iranian family dramas",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/lists/10-great-iranian-family-dramas",
      sourceKind: "film_institute",
      supports: ["overall", "editing"],
      note: "BFI description of the film unfolding in real time and of its child-centered Tehran quest structure."
    },
    {
      title: "The White balloon",
      publisher: "Australian Centre for the Moving Image",
      url: "https://www.acmi.net.au/works/85485--the-white-balloon/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Collection record preserving an 82-minute holding, used only as runtime/version metadata against the dominant 85-minute institutional record."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
