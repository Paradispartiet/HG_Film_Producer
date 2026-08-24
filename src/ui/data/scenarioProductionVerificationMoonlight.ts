import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const moonlightProductionCaseVerification = {
  scenarioId: "scenario_moonlight_2016",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Moonlight is verified as a 2016 small-scale digital-cinema production case whose triptych, Miami locations, single-camera capture, performance-centered recording choices, digital intermediate, editing and score were coordinated around emotional proximity rather than observational distance. In a direct Filmmaker Magazine interview, cinematographer James Laxton specifies an ALEXA XT recording ProRes, an entirely one-camera shoot, Hawk V-Lite anamorphics, Rec.709 monitoring, later DI work with Alex Bickel, compact LiteMat/LED lighting, the compressed 90-minute swimming-scene weather window, and the distinction between his own operation and Steadicam sequences. ARRI's direct Laxton interview independently establishes Florida/Liberty City as a major pre-production decision, anamorphic framing, natural/warm Black-skin rendering, low-light sensitivity, Miami's palette and the fully lit night-beach scene. Jenkins's postPerspective interview documents mirror HD dailies with a simple LUT sent to Los Angeles, Nat Sanders and Joi McMillon's division of the triptych, roughly four months of editing and the Wildfire mix. Jenkins's Filmmaker interview identifies Hannah Beachler, Caroline Eselin and Laxton as a coordinated color team and says the environment's color followed character rather than a rigid block scheme. In A24's Jenkins/Gerwig conversation, Jenkins describes the tiny shared edit room, continuity across three actors and a late edit refined by only a few cuts per day. His Pitchfork interview documents Nicholas Britell's script-born Little/Chiron/Black themes and the deliberate application of chopped-and-screwed ideas from Southern hip-hop to orchestral material. The verification therefore does not infer ARRIRAW capture, a B-camera, literal Fuji/Agfa/Kodak acquisition, a finished Rec.709 look, documentary spontaneity, or a culturally generic slowed-score technique.",
  sources: [
    {
      title: "A One-Camera Show: DP James Laxton on Moonlight",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/100603-a-one-camera-show-dp-james-laxton-on-moonlight/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Direct Laxton interview supporting ALEXA XT/ProRes, one-camera-only production, Hawk V-Lites, Rec.709 monitoring, DI refinement, film-emulation chapter looks, compact lighting, performance-momentum logic and title-specific location/lighting details."
    },
    {
      title: "Moonlight: DP James Laxton creates poetic look on ALEXA",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/-moonlight-dp-james-laxton-creates-poetic-look-on-alexa",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Manufacturer interview with Laxton supporting Florida/Liberty City and anamorphic decisions, skin-tone and low-light priorities, Vantage Hawk V-Lites, Miami palette, operator proximity and the fully lit night beach scene."
    },
    {
      title: "The A-List: Moonlight director Barry Jenkins",
      publisher: "postPerspective",
      url: "https://postperspective.com/the-a-list-moonlight-director-barry-jenkins/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct Jenkins interview supporting the Atomos Samurai HD mirror-dailies workflow, simple LUT, remote editorial start, Sanders/McMillon story division, roughly four months of editing, small post budget and Wildfire sound mix."
    },
    {
      title: "Inside Looking Out: Barry Jenkins on Moonlight",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/100314-inside-looking-out/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Direct Jenkins interview supporting collaboration among Hannah Beachler, Caroline Eselin and Laxton, character-driven emotional color, darker/starker chapter progression and the use of real Miami environments rather than rigid color blocking."
    },
    {
      title: "All The Way Home with Barry Jenkins & Greta Gerwig",
      publisher: "A24",
      url: "https://a24films.com/notes/2018/02/episode-01-all-the-way-home-with-barry-jenkins-greta-gerwig",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing"],
      note: "Jenkins's own account of the compact shared editing room, the challenge of emotional continuity across three actors playing Chiron and the extremely fine-grained late-stage editing process."
    },
    {
      title: "Director Barry Jenkins on the Music That Made Moonlight",
      publisher: "Pitchfork",
      url: "https://pitchfork.com/thepitch/1377-director-barry-jenkins-on-the-music-that-made-moonlight/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Direct Jenkins interview supporting Nicholas Britell's script-derived themes, orchestral-score intent, Southern hip-hop reference field, chopped-and-screwed transformation and distinction between source cues and original score."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
