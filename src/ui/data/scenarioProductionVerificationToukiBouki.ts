import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const toukiBoukiProductionCaseVerification = {
  scenarioId: "scenario_touki_bouki_1973",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Criterion, The Film Foundation, BFI and Festival de Cannes support Touki Bouki as a 1973 Senegalese Cinegrit production written and directed by Djibril Diop Mambéty, with Siro Asteni as editor and El Hadji Mbow credited for sound. Criterion additionally credits Mambéty as producer, Aziz Diop Mambéty for costume and set design, Lamine Ba Carlos and Ousmane Sow as assistant directors, Medoune Faye as assistant producer, Emma Mennenti as assistant editor and Aziz Diop Mambéty as set photographer. The cinematography record is intentionally preserved as institutional provenance rather than normalized away: Film Foundation lists Pap Samba Sow and Georges Bracher, Cannes lists Pap Samba Sow, and Criterion lists Georges Bracher. Criterion scholarship places the roughly $30,000 debut feature within a Senegalese film culture whose local production ambitions still depended on French film stock, equipment rental, processing and editing facilities, and frames Mambéty's associative montage and poetic sound-image disjunction as a specifically Senegalese postcolonial modernism in dialogue with, but not reducible to, European and American precedents. Film Foundation identifies Cinegrit as production company and GTC Paris in the surviving production/restoration record. Runtime provenance is also preserved: Film Foundation and Cannes list 88 minutes, Criterion 89 minutes and BFI 95 minutes. The case uses 88 minutes canonically while refusing to invent undocumented cuts, camera bodies, lenses, film stock, lighting ratios, microphones, exact shooting dates or an original-score authorship. The 2008 Cineteca di Bologna/L'Immagine Ritrovata restoration with the World Cinema Project and Mambéty family is kept separate from the 1973 production.",
  sources: [
    {
      title: "Touki bouki",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28412-touki-bouki",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion records Senegal, 1973, color, 1.37:1, 89 minutes, Mambéty as director/producer/writer, Georges Bracher as director of photography, Siro Asteni as editor, Aziz Diop Mambéty for costume/set design, the assistant production/editorial credits, the singers, and the separate 2008 restoration history."
    },
    {
      title: "Touki bouki: Mambéty and Modernity",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/2988-touki-bouki-mambety-and-modernity",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Criterion scholarship documents the approximately $30,000 self-taught debut feature, Senegal's 1960s-70s film culture and French infrastructure dependence, the 1973 Moscow FIPRESCI prize, associative editing, sound-image disjunction, soundtrack layering and the need to read Mambéty's modernism through Senegalese postcolonial history rather than a derivative New Wave label."
    },
    {
      title: "Touki Bouki",
      publisher: "The Film Foundation – World Cinema Project",
      url: "https://www.film-foundation.org/world-cinema?page=5&sortBy=country&sortOrder=1",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Film Foundation identifies Senegal, Cinegrit, Mambéty as director/writer, Pap Samba Sow and Georges Bracher as directors of photography, Siro Asteni as editor, El Hadji Mbow for sound, GTC Paris, color, 88 minutes and the separate 2008 restoration."
    },
    {
      title: "Touki Bouki (1973)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/9a363fae-8f64-54e3-88f8-b07a06d2d1dd/touki-bouki",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "BFI records the 1973 Senegalese film, Mambéty as director/writer and a 95-minute institutional runtime listing, useful as catalog provenance alongside the 88- and 89-minute records."
    },
    {
      title: "Touki Bouki",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/touki-bouki/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Cannes Classics records the 1973 production, 88-minute runtime, Pap Samba Sow for cinematography, Siro Asteni for editing, El Hadji Mbow for sound and Cinegrit/Studio Kankourama as production contact, kept as institutional provenance rather than used to overwrite conflicting credits."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
