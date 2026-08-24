import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const inlandEmpireProductionCaseVerification = {
  scenarioId: "scenario_inland_empire_2006",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Inland Empire is verified conservatively as David Lynch's 2006 standard-definition DV feature and as a production model built around lightweight low-resolution capture, iterative written scene production, director-operated camera work, small crews, home-based editing/sound and a substantial up-resolution/film-delivery chain. Post Magazine's 2007 interview with Lynch is the central technical source: he identifies the Sony PD-150 carried over from davidlynch.com experiments, says the story emerged as separately conceived scenes accumulated, records frequent three-camera shooting, more than six months of Final Cut Pro editing at his home office, limited Apple Shake/After Effects work, Noriko Miyakawa's assistant-editor effects contribution, Greg Spence's FotoKem post supervision, Snell & Wilcox Alchemist up-resolution, telecine/DI color control, film-version checking and Lynch/Steve Tushar/Dean Hurley home-studio sound work. BAFTA is used to correct the common no-script myth: Lynch says each scene was written before it was shot even though the complete feature screenplay emerged progressively. BFI's digital-cinema history confirms the PD-150's low-resolution character and Lynch's own handheld camera operation, long approximately 40-minute takes and close director-performer working method. Rushprint's contemporary Odd-Geir Saether account documents an extremely small crew and little lighting while stressing continued attention to decoration/detail; AFI formally credits Saether as director of photography, so the verification preserves the distinction between formal credit and Lynch's documented direct camera operation rather than collapsing either. BAFTA also connects the Polish production to Camerimage and Lodz, whose factories, architecture, winter mood and contacts generated ideas. AFI records a 179-minute release, Criterion and current BFI exhibition materials use 180 minutes, the main BFI catalogue page currently lists 189 minutes, and a BFI/StudioCanal home-media listing gives 172 minutes. Gameplay therefore uses 180 while preserving the conflicting institutional records. The verification does not claim HD acquisition, does not call the production wholly improvised or unscripted, does not claim Lynch alone photographed every frame, does not invent an exact tape count or principal-photography duration, and does not infer undisclosed VFX details beyond the named Shake/After Effects work.",
  sources: [
    {
      title: "Director's Chair: David Lynch - 'Inland Empire'",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2007/February-1-2007/DIRECTORS-CHAIR-DAVID-LYNCH-INLAND-EMPIRE.aspx",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Primary filmmaker interview covering Sony PD-150 origin, scene-by-scene development, frequent three-camera capture, Final Cut Pro self-editing for more than six months, Shake/After Effects, Noriko Miyakawa, Greg Spence, FotoKem, Alchemist up-resolution, DI/telecine/film delivery, home-studio sound design, Steve Tushar, Dean Hurley and Pro Tools."
    },
    {
      title: "David Lean Lecture: David Lynch",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/david-lean-lecture-david-lynch/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Lynch explicitly corrects the idea that actors simply improvised without scripts: scenes were written before shooting even though the feature grew from initially unrelated ideas. Also connects Polish material to Camerimage visits and the atmosphere of Lodz."
    },
    {
      title: "Attack of the zeros and ones: the early years of digital cinema",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Digital-cinema history quoting Lynch on the PD-150's intentionally low quality, speed and freedom, and documenting his own handheld camera operation, close performer proximity and approximately 40-minute takes."
    },
    {
      title: "Inland Empire",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/63888-INLAND-EMPIRE",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional catalogue record confirming Lynch as director/writer/editor/producer, Mary Sweeney as producer, Odd Geir Saether as director of photography, Christina Wilson as art director, US/France/Poland production companies and a 179-minute duration."
    },
    {
      title: "Norsk fotograf på Lynch-film",
      publisher: "Rushprint",
      url: "https://rushprint.no/2005/08/norsk-fotograf-pa-lynchfilm/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Contemporary Odd-Geir Saether production account describing lightweight handheld DV cameras, an extremely small crew, little lighting equipment, Lynch frequently taking a camera himself, and continued emphasis on decoration and detail."
    },
    {
      title: "Inland Empire (2006)",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/30077-inland-empire",
      sourceKind: "film_institute",
      supports: ["overall", "sound"],
      note: "Director-approved edition identifying Inland Empire as Lynch's first digitally shot feature and using a 180-minute runtime; current edition also documents remastering with original re-recording mixers Dean Hurley and Ron Eng, kept separate from original-capture claims."
    },
    {
      title: "Inland Empire (2006)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/e833d9ae-8b2e-50da-8b23-bfd8dbcc471d/inland-empire",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional catalogue record for the USA/France/Poland production; its current 189-minute runtime is preserved as a catalogue discrepancy rather than overwritten."
    },
    {
      title: "David Lynch on music and innovation",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/david-lynch-music-sound-chrystabell-cellophane-memories",
      sourceKind: "filmmaker_interview",
      supports: ["sound"],
      note: "Documents Dean Hurley finding the earlier 'Polish Poem' recording on a hard drive during the lengthy production and Lynch bringing it into Inland Empire, illustrating archive-driven music discovery."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
