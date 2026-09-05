import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const nitramProductionCaseVerification = {
  scenarioId: "scenario_nitram_2021",
  status: "verified",
  verifiedAt: "2026-09-05",
  summary: "Nitram is verified as a new source-first Chapter 19 Production Case for the Cannes major-prizes reconciliation. Cannes locks the 2021 Competition cycle, Caleb Landry Jones' Best Actor award and principal creative credits; the contemporaneous press kit separately records production year 2020 and the Good Thing Productions / Stan / Wild Bunch International / MIFF Premiere Fund / Madman / Nude Run network. Screen Australia confirms the completed Australian feature, Good Thing Productions Company Pty Ltd, producers Nick Batzias and Virginia Whitwell, director Justin Kurzel, writer Shaun Grant, editor Nick Fenton and principal cast. In a direct Australian Cinematographer interview Germain McMicking locks the November 2020 lockdown shoot, 24 days across four weeks, Geelong production hub, Geelong/Winchelsea locations, Super-16 investigation blocked by Covid-era processing supply, ARRI Alexa Mini S35 with vintage Panavision Ultra Speeds, Hi8/Video8 diegetic cameras, the handheld-to-more-formal camera progression, selected lighting methods, show-LUT development, Edel Rafferty grade and Soundfirm Melbourne post. The record intentionally preserves a format discrepancy: McMicking describes a 1.55:1 frame while the contemporaneous press kit lists 1.43:1; institutional runtime listings also vary. Exact budget, investor shares, recoupment, complete union terms, full camera/lens/codec/media package, complete lighting plot, complete sound chain, editorial hardware/storage, VFX shot census and definitive mastering lineage remain unresolved.",
  sources: [
    {
      title: "NITRAM",
      publisher: "Festival de Cannes",
      url: "https://cinemadedemain.festival-cannes.com/en/f/nitram/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting the 2021 Competition/Best Actor cycle, Australia, Justin Kurzel direction, Shaun Grant screenplay, Germain McMicking cinematography, Alice Babidge production design, Nick Fenton editing and Jed Kurzel credit layer."
    },
    {
      title: "Nitram",
      publisher: "Screen Australia",
      url: "https://www.screenaustralia.gov.au/screen-guide/nitram-38629/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "Australian national screen-industry record supporting completion year 2021, Good Thing Productions Company Pty Ltd, producers Nick Batzias and Virginia Whitwell, director Justin Kurzel, writer Shaun Grant, editor Nick Fenton, principal cast and Australian/international sales listings."
    },
    {
      title: "NITRAM",
      publisher: "Good Thing Productions",
      url: "https://goodthingproductions.com.au/projects/nitram/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Producer-company record supporting completed feature status, Justin Kurzel direction, Shaun Grant screenplay, Nick Batzias and Virginia Whitwell production, Madman distribution and Wildbunch international sales."
    },
    {
      title: "Germain McMicking ACS on Justin Kurzel's Nitram",
      publisher: "Australian Cinematographer Magazine",
      url: "https://acmag.com.au/2021/09/01/nitram/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct cinematographer testimony supporting the November 2020 lockdown production, 24-day/four-week schedule, Geelong hub and locations, Super-16 processing constraint, Alexa Mini S35 and Panavision Ultra Speeds, Hi8/Video8 sources, camera-language progression, selected lighting setups, test-built LUT, Edel Rafferty grade and Soundfirm post."
    },
    {
      title: "NITRAM press kit",
      publisher: "Melbourne International Film Festival / Good Thing Productions",
      url: "https://miffindustry.com/wp-content/uploads/2021/08/NITRAM-press-kit-14-June-21-V2.pdf",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Contemporaneous production press kit supporting Year of Production 2020, producer/executive-producer and department credits, Good Thing/Stan/Wild Bunch/MIFF/Madman/Nude Run production-network roles, Greater Geelong filming, Soundfirm post, colourist Edel Rafferty, production/post sound and VFX credits, and the separate 1.43:1 aspect-ratio listing."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
