import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aSeparationProductionCaseVerification = {
  scenarioId: "scenario_a_separation_2011",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "A Separation is verified conservatively as Asghar Farhadi's 2011 Iranian 35mm production built from unusually disciplined rehearsal, a detailed screenplay, Tehran location work, a nearly continuous handheld camera strategy, concurrent editorial information control and restrained music use. Sony Pictures Classics' title-specific press kit records long casting and rehearsal, precise adherence to a detailed screenplay, an intention to keep variations minimal once shooting began, and location production everywhere except the judge's office and court, which were recreated inside two disused schools. Mahmoud Kalari's later title-specific recollection complements rather than cancels that account: he describes A Separation as entirely handheld except for three still shots, calls the camera a narrator or third eye, and recalls Farhadi making last-minute changes when a final take demanded it. Viennale and trigon-film identify 35mm, while DFI/BFI/DreamLab confirm the principal cinematography, editing, production-design, music and sound credits. The verification deliberately does not promote weaker database claims about camera body, lens package, film stock, lab or DI path. Farhadi's Filmmaker interview identifies editing as control over the amount and timing of information in a detective-less mystery and states that the drama carries no music until the closing credits because he did not want score to impose emotional judgment. Hayedeh Safiyari later recalled editing while production was still shooting. DreamLab separates sound recordist Mahmood Sammakbashi, mixer Mohammad-Reza Delpak and sound editor Reza Narimizadeh. Sony, DFI and Viennale record 123 minutes while BFI lists 122; gameplay uses 123 while preserving the discrepancy. Naturalism is therefore modeled as planned craft, not improvisation, documentary status or absence of production design, editorial construction or sound post.",
  sources: [
    {
      title: "A Separation press kit",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/aseparation/aseparation_presskit.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Title-specific Farhadi interview supporting long casting/rehearsal, detailed screenplay, minimal planned variation during shooting, extensive location work, and reconstruction of judge/court spaces inside two disused schools; press-kit metadata records 123 minutes."
    },
    {
      title: "The Past press kit - interview with cinematographer Mahmoud Kalari",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/thepast/thepast_presskit.pdf",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Kalari's retrospective title-specific evidence that A Separation was entirely handheld except for three still shots, that the camera functions as a narrator/third eye, and that Farhadi can make last-minute changes despite extensive planning."
    },
    {
      title: "Jodaeiye Nader az Simin",
      publisher: "Viennale",
      url: "https://www.viennale.at/en/films/jodaeiye-nader-az-simin",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Festival/institutional record confirming Iran 2011, 123 minutes, 35 mm format, Mahmoud Kalari cinematography, Hayedeh Safiyari editing and Mahmood Sammakbashi sound."
    },
    {
      title: "A Separation",
      publisher: "trigon-film",
      url: "https://trigon-film.org/en/films/a-separation/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Distributor record independently listing 35mm among release formats, 123 minutes, Mahmoud Kalari, Mahmoud Samakbashi and Keyvan Moghaddam."
    },
    {
      title: "Nader og Simin - en separation",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/nader-og-simin-en-separation",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming Asghar Farhadi as director/screenwriter/producer, Mahmoud Kalari cinematography, Hayedeh Safiyari editing, Sattar Oraki music, Keyvan Moghaddam production design and 123-minute duration."
    },
    {
      title: "A Separation",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/film/4e863895-0eb6-56b0-a218-73079fb5f057/a-separation",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional record confirming Farhadi authorship and a 122-minute running time, retained explicitly as a runtime/catalogue discrepancy against the 123-minute Sony/DFI/Viennale record."
    },
    {
      title: "Asghar Farhadi: A Separation",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/36713-asghar-farhadi-a-separation/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Farhadi explains editing as regulation of how much information reaches the audience and when, and states that no music is used during the film itself, only over the closing credits, to avoid imposed emotional judgment."
    },
    {
      title: "Nader and Simin, A Separation",
      publisher: "DreamLab Films",
      url: "https://www.dreamlabfilms.com/nader-and-simin-a-separation/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Production/sales record separating cinematography, editing, composer, production-design/costume, sound mixer Mohammad-Reza Delpak, sound editor Reza Narimizadeh and sound recordist Mahmood Sammakbashi."
    },
    {
      title: "Interview with Iranian film editor Haideh Safiyari",
      publisher: "Film International",
      url: "https://filmint.nu/interview-with-iranian-film-editor-haideh-safiyari-ali-moosavi/",
      sourceKind: "trade_feature",
      supports: ["editing"],
      note: "Safiyari's retrospective account that she edited A Separation while Farhadi was still shooting and that a rough cut existed around the end of principal photography; no unsupported software inference is attached."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
