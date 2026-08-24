import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const slumdogMillionaireProductionCaseVerification = {
  scenarioId: "scenario_slumdog_millionaire_2008",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Slumdog Millionaire is verified conservatively as Danny Boyle's 2008 UK-led Mumbai production using a deliberately hybrid image system: Silicon Imaging's title-specific account documents Anthony Dod Mantle choosing the SI-2K Mini for more latitude than MiniDV while preserving the small camera footprint needed inside crowded locations, with a detached 2K camera head, gigabit-Ethernet raw stream, CineForm RAW recording and portable laptop/backpack configurations. The same source records difficult heat/dust/movement conditions and final grading that interwove SI-2K material with multiple film stocks. Stefan Ciupek's production-workflow account preserves a crucial boundary: most night work remained on pushed 35mm, local assistants had to learn the unfamiliar digital system, SI-2K shooting generated roughly two to three hours of material per day, RAID5 protected working data and a backup copy was sent to England. The verification therefore does not invent a single digital-versus-film percentage or call the picture all-digital. AFI and DFI record a 120-minute release and principal credits including Danny Boyle, Simon Beaufoy, Christian Colson, Anthony Dod Mantle, Chris Dickens, Mark Digby and A. R. Rahman; AFI FEST lists Danny Boyle and Loveleen Tandan as directors and a 116-minute runtime, while IFFR lists 110 minutes. Boyle and Tandan interviews support Tandan's substantive local casting, Hindi-dialogue and second-unit/co-directing work, so the catalogue discrepancy is preserved rather than resolved by erasure. Boyle also describes live Mumbai sound as essential to the production's local texture, while Academy records separate Sound Mixing winners Ian Tapp, Richard Pryke and Resul Pookutty from Sound Editing nominees Glenn Freemantle and Tom Sayers. The verification does not call CineForm RAW uncompressed, does not claim every night scene used SI-2K, does not treat RAID5 as a sole archive, does not erase 35mm or local crew labor, and does not assume real locations equal unmediated documentary truth.",
  sources: [
    {
      title: "Slumdog Millionaire Shot With Innovative SI-2K Digital Cinema Camera",
      publisher: "Silicon Imaging",
      url: "https://www.siliconimaging.com/DigitalCinema/News/PR_01_31_09_Slumdog.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Title-specific technical account with Anthony Dod Mantle and production-team material covering SI-2K Mini selection, 2K raw over gigabit Ethernet, CineForm RAW, portable recording, latitude/mobility requirements, heat/dust pressure, hybrid film intercutting and final London grading."
    },
    {
      title: "Digitale Cinematographie 2009: Slumdog Millionaire workflow",
      publisher: "film-tv-video.de",
      url: "https://www.film-tv-video.de/event/2009/07/07/digitale-cinematographie-2009-red-festspiele-in-munchen/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Stefan Ciupek's production-workflow report supporting local camera-assistant training, the hybrid SI-2K/35mm boundary, most night photography on pushed 35mm, roughly two-to-three hours of daily SI-2K capture, RAID5 protection and a backup copy sent to England."
    },
    {
      title: "Slumdog Millionaire",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/64756-SLUMDOG-MILLIONAIRE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming a 120-minute release and Danny Boyle, Simon Beaufoy, Christian Colson, Anthony Dod Mantle, Chris Dickens, Mark Digby and A. R. Rahman, with Q & A by Vikas Swarup as literary source."
    },
    {
      title: "Slumdog Millionaire - AFI FEST 2008",
      publisher: "American Film Institute / AFI FEST",
      url: "https://fest.afi.com/2008/galas-2008/slumdog-millionaire/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Festival record listing Danny Boyle and Loveleen Tandan as directors, Anthony Dod Mantle and Mrinal Desai as directors of photography, expanded editing credits and a 116-minute runtime; preserved as a credit/version record alongside AFI's catalogue."
    },
    {
      title: "The 81st Academy Awards - Slumdog Millionaire",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2009",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Awards record confirming Anthony Dod Mantle for cinematography, Chris Dickens for editing, A. R. Rahman for score/song, Ian Tapp/Richard Pryke/Resul Pookutty for sound mixing, Glenn Freemantle/Tom Sayers for sound editing, Simon Beaufoy for adapted screenplay and Danny Boyle for directing."
    },
    {
      title: "Interview: Danny Boyle, Director of Slumdog Millionaire",
      publisher: "Connect2Mason",
      url: "https://www.connect2mason.com/interview_dab_boyle",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "sound"],
      note: "Boyle describes Loveleen Tandan's casting/local-reality collaboration and second-unit role, and explains why live sound and embodied Mumbai location conditions were central to the film."
    },
    {
      title: "Slumdog Millionaire",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/slumdog-millionaire",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Independent institutional confirmation of Danny Boyle, Simon Beaufoy, Christian Colson, Anthony Dod Mantle, Chris Dickens, Mark Digby, A. R. Rahman and a 120-minute duration."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
