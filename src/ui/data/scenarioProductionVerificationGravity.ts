import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const gravityProductionCaseVerification = {
  scenarioId: "scenario_gravity_2013",
  status: "verified",
  verifiedAt: "2026-08-24",
  summary: "Gravity is verified as a 2013 VFX-led hybrid production whose unusual historical importance lies in the dependency chain from editorial and previs through digital prelight, techvis, LED illumination, motion-control photography, performance integration, CG construction, stereoscopy and spatial sound. Framestore's official project record states that pre-production, filming and extensive post were centered in London, that most shots retained photographed faces while suits, vehicles, Earth, stars, debris and space environments were CG, and that the Light Box combined 196 LED panels of 4,096 bulbs to move accurate environmental illumination around a performer while a robotic camera supplied apparent motion. Framestore's production retrospective adds that the complete film was built in visualization as Cuarón's de facto editorial tool; the opening shot took roughly three months to block, visualization ran for around two years, Lubezki collaborated on digital prelight, and techvis converted the screen plan into robot, Light Box and stage instructions. The Academy's Deconstructing Gravity account independently preserves the three-pass boundary among previs, live action and post, plus computer-generated prelight, Light Box and modified industrial robots. ARRI verifies ALEXA capture with Master Prime lenses, but the case does not misrepresent that photographed package as the source of every finished pixel. Mark Sanger's title-specific account states that the film was blocked in editing eighteen months before the shoot, that no conventional coverage existed and that live performances were selected and fed back into the animation/VFX pipeline. Sound began equally early: Freemantle and Cuarón made a 5.1 sound design for a 45-minute previs in December 2010, establishing vacuum silence except where contact, body, suit, radio or interior atmosphere transmits sound. Lievsay then attached voices to bodies and scene geography, and Price's manipulated orchestral/electronic score moved with the sound field. The original 7.1 mix and Atmos extension remain distinct. AFI verifies the 91-minute runtime and principal writing, producing, cinematography, editing and production-design credits. The verification does not call the Light Box a final-pixel LED background volume, does not claim whole-body motion capture, does not erase practical rigs and interiors, and does not treat awards or scientific plausibility as evidence of production method.",
  sources: [
    {
      title: "Gravity",
      publisher: "Framestore",
      url: "https://www.framestore.com/work/gravity",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Official VFX-studio project record supporting the London previs/postvis-to-shoot pipeline, majority-face-only photographic boundary, CG suits/environments, Bot & Dolly robotics, the 20-by-10-foot Light Box and its 196 panels of 4,096 LED bulbs."
    },
    {
      title: "Preparing for Gravity",
      publisher: "Framestore",
      url: "https://www.framestore.com/news/preparing-gravity",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "First-party retrospective with Tim Webber, Fiona Walkinshaw, Vincent Aupetit and Stuart Penn: complete-film previs as de facto editorial, roughly two years of visualization, digital prelight with Lubezki, techvis, motion-control/Light Box programming and actor briefing."
    },
    {
      title: "Deconstructing Gravity",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/events/deconstructing-gravity",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Academy event record preserving Tim Webber's three-pass previs/live-action/post account, computer-generated prelight, Light Box illumination, twelve-wire rig and modified industrial robots."
    },
    {
      title: "History of ARRI - Emmanuel Lubezki",
      publisher: "ARRI",
      url: "https://100.arri.com/timeline/event/59ad95b027fc605792b770b0",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Manufacturer history identifying Gravity as captured with ARRI ALEXA and Master Prime lenses; used only as a bounded live-action acquisition record, not a description of the CG image pipeline."
    },
    {
      title: "Gravity (2013)",
      publisher: "American Film Institute Catalog",
      url: "https://catalog.afi.com/Film/69732-GRAVITY",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming 91 minutes; Alfonso and Jonás Cuarón writing; Alfonso Cuarón and David Heyman producing; Emmanuel Lubezki cinematography; Alfonso Cuarón and Mark Sanger editing; Andy Nicholson production design; and Venice opening context."
    },
    {
      title: "The Art of the Cut: Gravity co-Editor and Oscar Winner Mark Sanger Explains His Craft and Style",
      publisher: "ProVideo Coalition",
      url: "https://www.provideocoalition.com/gravity-co-editor-and-oscar-nominee-mark-sanger/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Title-specific editor interview supporting the eighteen-month pre-shoot block, storyboards/previs edit, near-lock before photography, lack of conventional coverage, performance-take selection and tightly versioned editorial/VFX feedback loop."
    },
    {
      title: "The Sound of Gravity",
      publisher: "SoundWorks Collection",
      url: "https://soundworkscollection.com/videos/gravity",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Title-specific profile with Alfonso Cuarón and re-recording mixer Skip Lievsay documenting the deliberately constructed, spatially immersive soundtrack."
    },
    {
      title: "How the sound masters of Gravity broke the rules to make noise in a vacuum",
      publisher: "The Verge",
      url: "https://www.theverge.com/2013/10/10/4822482/the-sound-design-of-gravity-glenn-freemantle-skip-lievsay",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Direct interviews with Freemantle and Lievsay supporting the December 2010 45-minute previs mix, contact/vibration point of audition, breath/heartbeat/radio distinctions, spatial dialogue, Price score coordination, original 7.1 mix and Atmos extension."
    },
    {
      title: "Gravity Shines Light on Future of 3D Filmmaking",
      publisher: "Motion Picture Association - The Credits",
      url: "https://www.motionpictures.org/2013/10/gravity-shines-light-on-future-of-3d-filmmaking/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Industry feature with stereo supervisor Chris Parks supporting the production's early 3D intent and the narrative use of parallax; retained without falsely equating stereo exhibition with the live-action acquisition format."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
