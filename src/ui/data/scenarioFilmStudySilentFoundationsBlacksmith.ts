import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

export const blacksmithSceneFilmHistoryProfile = {
  scenarioId: "scenario_blacksmith_scene_1893",
  period: "1893 Edison laboratory cinema at the transition from motion-picture experiment to repeatable Kinetoscope production",
  traditions: [
    "Kinetoscope-era staged actuality",
    "Black Maria studio production",
    "Fixed-camera single-take performance",
  ],
  before: "Edison laboratory motion-picture work had already produced short experimental motion records, but the 1893 Black Maria joined camera apparatus, a controllable filming environment and repeatable performance into a more systematic production practice.",
  moment: "Blacksmith Scene stages three Edison laboratory employees around a forge-like work action: hammering, a pause to share a bottle and a return to work. William K. L. Dickson and William Heise make the scene for Kinetograph capture and Kinetoscope viewing inside the Black Maria, whose rotating base and opening roof were designed to keep the action in strong natural light. The result is a fixed, single, unedited take of roughly half a minute rather than a later multi-shot continuity construction.",
  after: "The film's 1893 public demonstration and later National Film Registry recognition make it useful not as a single-birthday myth for cinema, but as an unusually inspectable case of apparatus, studio architecture, staged labor and exhibition format becoming one repeatable production system.",
  historyQuestion: "How do performers, Kinetograph, Kinetoscope, fixed framing and the sun-tracking Black Maria combine into a production system before multi-shot continuity becomes the organizing norm?",
  technicalHighlights: [
    { area: "historical_context", status: "source_verified", note: "The film was photographed in 1893 during the Edison laboratory's early Kinetoscope period and publicly demonstrated at the Brooklyn Institute of Arts and Sciences on May 9, 1893." },
    { area: "movement_and_tradition", status: "source_verified", note: "The case belongs to Kinetoscope-era staged actuality: it presents recognizable manual work but uses Edison laboratory employees to perform the blacksmith action for the camera rather than recording an untouched workplace event." },
    { area: "industry_and_production_context", status: "source_verified", note: "Blacksmith Scene was produced within the Edison laboratory system in the purpose-built Black Maria, connecting camera, viewing apparatus, personnel and studio architecture before a mature film industry existed." },
    { area: "reception_and_legacy", status: "source_verified", note: "Library of Congress records the May 1893 public Kinetoscope demonstration, and the National Film Registry lists Blacksmith Scene as a 1995 selection." },
    { area: "screenplay", status: "mapped", note: "The visible action has a compact work-pause-work shape, but the inspected institutional sources do not document a written scenario or screenplay process; the case therefore treats action organization as mapped rather than source-verified writing craft." },
    { area: "directing", status: "source_verified", note: "MoMA attributes the making of the film to William Heise and William K. L. Dickson and explicitly distinguishes their filmmaking work from Thomas Edison's company oversight." },
    { area: "performance", status: "source_verified", note: "The apparent blacksmiths were Edison laboratory employees; Library of Congress identifies Charles Kayser, John Ott and a third unidentified man, making the staged ensemble itself part of the production method." },
    { area: "production_design", status: "source_verified", note: "The Black Maria is not neutral background: its purpose-built enclosed stage, movable structure and opening roof were engineered around the photographic requirements of early motion-picture production." },
    { area: "costume_makeup", status: "not_central", note: "Work clothing supports the blacksmith enactment, but the inspected sources do not document a costume, hair or makeup department or a distinct production workflow for those elements." },
    { area: "cinematography", status: "source_verified", note: "MoMA documents a fixed camera and single continuous take, while Library of Congress attributes the photography to Dickson; the image is organized around readable repeated hammering and the shared-bottle pause inside one frame." },
    { area: "lighting", status: "source_verified", note: "The Black Maria could rotate on a circular track and open its roof to maximize sunlight, making natural-light control a designed production resource rather than incidental illumination." },
    { area: "camera_format", status: "source_verified", note: "MoMA records Kinetograph capture for Kinetoscope viewing, tying the photographed scene to the Edison laboratory's camera-and-viewer system rather than later projection-era assumptions." },
    { area: "editing", status: "source_verified", note: "MoMA describes the film as a single unedited take; the correct production lesson is therefore how staging and timing carry the whole action without later continuity cutting." },
    { area: "sound_design", status: "not_central", note: "The photographed 1893 case is treated as silent capture; no synchronized production-sound or sound-design workflow is asserted from later accompaniment practices." },
    { area: "music", status: "not_central", note: "No original synchronized score is part of the documented capture system, so modern accompaniment must remain separate from the production case rather than being retroactively attributed to 1893." },
    { area: "effects_animation", status: "not_central", note: "The case depends on live staged action, apparatus and light rather than trick effects or animation; later effects histories should not be projected backward onto this scene." },
    { area: "documentary_method", status: "mapped", note: "The film resembles an actuality subject because it depicts labor directly, but the performers are laboratory employees staging blacksmith work; the distinction between observed subject and arranged performance is therefore an explicit learning point." },
  ],
} as const satisfies FilmHistoryProfile;
