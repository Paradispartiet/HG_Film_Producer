import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const lovelessProductionCaseVerification = {
  scenarioId: "scenario_loveless_2017",
  status: "verified",
  verifiedAt: "2026-08-10",
  summary: "Loveless is verified as a Russian-European family-breakdown and missing-child production in which Zvyagintsev and Oleg Negin's tightly controlled script, carefully cast performances, a purpose-built Moscow apartment, real peripheral landscape, digital anamorphic photography, selective VFX, measured editing, environmental sound and the Galperines' score form one coordinated social-pressure system. Twelve inspectable sources from twelve publishers support the case.",
  sources: [
    {
      title: "NELYUBOV (LOVELESS)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/nelyubov/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Competition record verifies the 127-minute Russia-France-Belgium-Germany feature, Zvyagintsev and Oleg Negin screenplay, Mikhail Krichman photography, Anna Mass editing, Andrey Ponkratov design, Andrei Dergachev sound, music credit and the 2017 Jury Prize."
    },
    {
      title: "Sony Pictures Classics Acquires Andrey Zvyagintsev's Loveless",
      publisher: "Sony Pictures Entertainment",
      url: "https://www.sonypictures.com/corp/press_releases/2017/05_17/051717_loveless.html",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "Sony documents the international co-production companies and support structure, the Zvyagintsev-Negin screenplay, Alexander Rodnyansky's third collaboration with the director and Sony Pictures Classics' Cannes acquisition."
    },
    {
      title: "Interview with Russian production designer Andrey Ponkratov, of the Andrey Zvyagintsev films",
      publisher: "Australian Production Design Guild",
      url: "https://apdg.org.au/2018/07/interview-with-russian-production-designer-andrey-ponkratov",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Ponkratov details the soundstage-built family apartment, Zvyagintsev's predetermined mise-en-scène and actor trajectories, deep interior axes, Skhodnensky Kovsh location, four giant photographic backdrops, lighting constraints and a window-view VFX composite."
    },
    {
      title: "Anamorphic/i S35",
      publisher: "Cooke Optics",
      url: "https://cookeoptics.com/lens/anamorphic-i-s35/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Cooke's official production list identifies Loveless / Nelyubov (2017), photographed by Mikhail Krichman RGC, as a production using Cooke Anamorphic/i S35 lenses."
    },
    {
      title: "Loveless review: Andrey Zvyagintsev finds resonances in a Russian family falling apart",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/loveless-review-andrey-zvyagintsev-finds-resonances-russian-family-falling-apart",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Sight and Sound analyzes the opening winter landscape, precisely framed images, suggestive environmental sound, the movement from domestic rupture to volunteer search and the film's expansion from individual characterization into state-of-the-nation commentary."
    },
    {
      title: "Cannes Report #2: Loveless",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/cannes-report-2-loveless/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Film Comment places Loveless after Leviathan and records the Cannes discussion in which Zvyagintsev and Rodnyansky frame the film as both a continuation of the director's social concerns and a universal investigation of the human condition."
    },
    {
      title: "Cannes 2017: Andrei Zvyagintsev's Loveless",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/4552-cannes-2017-andrei-zvyagintsev-s-loveless",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Criterion's Cannes dossier collects contemporary critical responses describing the film as a family drama that expands into a social and political critique, supporting its historical placement and controlled visual severity."
    },
    {
      title: "30th European Film Awards",
      publisher: "European Film Academy",
      url: "https://vod.europeanfilmacademy.org/2017-films",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "The European Film Academy records awards to Mikhail Krichman for Loveless cinematography and to Evgueni and Sacha Galperine for its music, confirming major craft recognition after the Cannes premiere."
    },
    {
      title: "The 90th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2018",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The Academy's official ceremony record lists Russia's Loveless among the five nominees for the 2018 Foreign Language Film award, documenting its international awards trajectory."
    },
    {
      title: "Interview: Andrey Zvyagintsev - Loveless",
      publisher: "IONCINEMA",
      url: "https://www.ioncinema.com/interviews/interview-andrei-zvyagintsev-loveless",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Zvyagintsev discusses family as his recurring dramatic field, Scenes from a Marriage, L'Avventura and Caché as reference points, precise scene preparation, script fidelity with limited rehearsal discoveries, the search for fresh performers and the long process of choosing landscapes."
    },
    {
      title: "Interview With Andrey Zvyagintsev, Film Director And Screenwriter",
      publisher: "Izba Arts",
      url: "https://www.izbaarts.com/interview-with-andrey-zvyagintsev/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Zvyagintsev explains that an unrealized wish to remake Scenes from a Marriage merged with co-writer Oleg Negin's story about Russia's Liza Alert volunteer movement, producing Loveless's family-breakdown and missing-child structure."
    },
    {
      title: "Love-less — a quietly collapsing image filled with unease",
      publisher: "VIDEO SALON.web",
      url: "https://videosalon.jp/report/eizo-plus_12_loveless/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The production-focused feature records the ALEXA XT and ALEXA Mini camera package, Cooke Anamorphic/i and Vantage Hawk zoom lenses, and an ARRI SkyPanel lighting package, supporting the film's digital anamorphic and controlled-light workflow."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
