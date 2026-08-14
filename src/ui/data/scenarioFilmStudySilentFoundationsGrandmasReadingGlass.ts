import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const grandmasReadingGlassFilmHistoryProfile = {
  scenarioId: "scenario_grandmas_reading_glass_1900",
  period: "1900 British early cinema using motivated magnified inserts to connect a domestic base view to the boy's changing visual attention",
  traditions: [
    "Brighton and Hove early cinema",
    "G. A. Smith fiction and optical experimentation",
    "Early analytical editing and point-of-view construction",
  ],
  before: "Early projected films already used close views, optical tricks and staged attractions, while Smith's own As Seen Through a Telescope had linked an observer to a magnified view. The problem was not to invent looking for cinema from nothing, but to make a sequence of changing shot scales intelligible as one character's motivated act of seeing.",
  moment: "Grandma's Reading Glass keeps returning to a stable domestic view of a boy beside his grandmother, then inserts circularly masked enlarged views as he handles her reading glass. A Warwick catalogue description records the series as newspaper, watch mechanism, canary, grandmother's eye and kitten. The cuts are legible because the boy's gesture and the optical prop explain why the image changes scale: looking becomes the organizing action of the sequence.",
  after: "The film is widely used by BFI and early-cinema historians to teach the emergence of analytical shot relations, close views and point-of-view construction. Its importance does not require a first-invention claim: the stronger lesson is that filmmakers around 1900 were already learning how a close insert could be motivated by attention and then reintegrated into a wider scene.",
  historyQuestion: "How can a one-minute domestic attraction make five radically enlarged inserts feel like one coherent act of looking before later continuity conventions are standardized?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "BFI identifies Grandma's Reading Glass as a 1900 silent fiction by G. A. Smith and places it in its Inventing Film Language collection of Victorian-era experiments in shot scale, editing and continuity." },
    { area: "movement_and_tradition", status: "source_verified", note: "BFI treats the film as an innovative play on perspective, while the scholarly Who's Who of Victorian Cinema places Smith's 1900 films within the Brighton-area development of interpolated close-ups and subjective/objective viewpoint relations." },
    { area: "industry_and_production_context", status: "source_verified", note: "The surviving Warwick Trading Company catalogue description documents the film as a commercial novelty offered to exhibitors, while BFI material on Smith's contemporary work confirms his Brighton production relationship with Warwick." },
    { area: "reception_and_legacy", status: "source_verified", note: "BFI explicitly uses the film as a teaching example of what became known as the point-of-view shot; that legacy is presented here as a demonstrable formal relation rather than an uncontested claim that Smith invented POV or the close-up." },
    { area: "screenplay", status: "source_verified", note: "The Warwick catalogue records the boy successively examining a newspaper, his watch, a canary, grandmother's eye and a kitten, giving the short film a precise looking-action progression rather than a generic collection of insert shots." },
    { area: "directing", status: "source_verified", note: "BFI attributes the film to G. A. Smith and emphasizes the deliberate alternation between the boy's activity and magnified views, grounding the case in designed visual direction rather than accidental coverage." },
    { area: "performance", status: "mapped", note: "The boy's handling and looking gestures and grandmother's presence motivate the inserts, but the inspected institutional sources do not document rehearsal or actor-direction practice in enough detail for source-verified workflow status." },
    { area: "production_design", status: "mapped", note: "The sewing-table setting, reading glass, newspaper, watch, birdcage and kitten are essential screen objects, but surviving sources describe the visible setup more clearly than a dedicated production-design workflow." },
    { area: "costume_makeup", status: "not_central", note: "Period clothing helps define the domestic scene, but costume, hair and makeup are not documented as a distinct production system central to this case." },
    { area: "cinematography", status: "source_verified", note: "BFI identifies the film's point-of-view play, and the Warwick catalogue plus surviving film describe abnormally enlarged object views; the circular mask gives those inserts an optical relation to the reading glass rather than presenting arbitrary close coverage." },
    { area: "lighting", status: "mapped", note: "The film requires readable contrast between the domestic base view and enlarged inserts, but the inspected sources do not establish a film-specific lighting plan strongly enough for source-verified status." },
    { area: "camera_format", status: "mapped", note: "Contemporary Smith apparatus and mask-making context survives, but the inspected sources used for this case do not provide a sufficiently specific film-stock/gauge record to upgrade camera format beyond mapped." },
    { area: "editing", status: "source_verified", note: "The film alternates the wider boy-and-grandmother view with five motivated magnified inserts. BFI describes this as point-of-view construction; the key historical evidence is the repeated look/object/return relation, not a mythic single birth of editing." },
    { area: "sound_design", status: "not_central", note: "BFI identifies the surviving production as silent; synchronized watch ticks, bird calls or dialogue would be modern additions and are not projected backward into the 1900 production." },
    { area: "music", status: "not_central", note: "No original synchronized score is established by the inspected sources. Any live or later recorded accompaniment belongs to exhibition or restoration history rather than the photographed production system." },
    { area: "effects_animation", status: "source_verified", note: "The circularly masked magnified views are a documented optical/presentation device within the film's construction, turning the reading glass into the motivation for abnormal scale and viewpoint." },
    { area: "documentary_method", status: "not_central", note: "Grandma's Reading Glass is treated as staged fiction and trick/visual-language experimentation, not as actuality or documentary evidence of an untouched domestic moment." },
  ],
} as const satisfies FilmHistoryProfile;
