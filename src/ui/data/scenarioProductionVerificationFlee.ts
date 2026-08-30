import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const fleeProductionCaseVerification = {
  scenarioId: "scenario_flee_2021",
  status: "verified",
  verifiedAt: "2026-08-29",
  summary: "Flee is verified as the fifth Chapter 19 Production Case through institutional film records, producer credits and title-specific first-person production testimony. The Danish Film Institute records Jonas Poher Rasmussen as director/screenwriter, Kenneth Ladekjær as animation director/storyboard supervisor, Janus Billeskov Jansen as editor, Jess Nicholls as art director, Uno Helmersson as composer, Final Cut for Real as production company with Sun Creature/Vivement Lundi/MostFilm/Mer Film among co-production participants, and an 89-minute Danish record. Final Cut for Real supplies the wider credited animation, storyboard, design and production team. Rasmussen and Ladekjær describe animation as an identity-protection strategy and a way to visualize past events that could not be filmed directly; the governing character-animation method uses observed reference and acting interpretation rather than simple rotoscopic tracing. Jansen describes an audio/interview-led editorial process in which dialogue, rough drawings and animatic material were developed together, with an exact-length animatic required before full animation. Nordisk Film & TV Fond documents two principal animation modes plus distributed work: Sun Creature in Copenhagen led animation, Vivement Lundi in Rennes handled backgrounds/compositing, and Studio Train-Train in Lille contributed FX animation, color and graphical sequences. Nicholls describes art direction as encompassing visual development, framing/cinematography-like decisions, style, quality control, sets/dressing and post-production, while Ladekjær led acting/movement and animation performance. Jansen additionally documents archival research feeding back into the edit when real historical footage connected to Amin's memory was found, showing that archive could change documentary structure rather than merely decorate it. Sound-team testimony describes sound as a bridge across animated and archival materials, and Helmersson describes a restrained organic/electronic score built around the cadence and emotional weight of Amin's voice. Exact interview-hour totals, complete archive licensing terms, per-shot drawing/frame counts, full software/hardware stack, animator-day totals, cross-country labor shares, budget allocations, proprietary handoff infrastructure, full compositing graphs, recording chains, plug-in inventories and final mix routing remain outside the verified layer.",
  sources: [
    {
      title: "Flee",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/flee",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Institutional record supporting the 89-minute runtime, Jonas Poher Rasmussen, Kenneth Ladekjær, Janus Billeskov Jansen, Jess Nicholls, Uno Helmersson, producer/co-production credits and key animation-design roles."
    },
    {
      title: "FLEE",
      publisher: "Final Cut for Real",
      url: "https://www.finalcutforreal.dk/flee/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Producer record supplying the wider production, co-production, animation, storyboard, design, production-management and music credits."
    },
    {
      title: "Flee director on his Sundance-selected animated documentary",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/stories/flee-director-on-his-sundance-selected-animated-documentary",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Rasmussen's title-specific account documents the two main animation modes and distributed pipeline: Sun Creature animation in Copenhagen, Vivement Lundi backgrounds/compositing in Rennes, and Studio Train-Train FX/color/graphical work in Lille."
    },
    {
      title: "It Is Always Tempting in Animation to Show More Than You Need to: Art Director Jess Nicholls on Flee",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/111057-it-is-always-tempting-in-animation-to-show-more-than-you-need-to-art-director-jess-nicholls-on-flee/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Nicholls's first-person account defines art-direction responsibilities across visual development, framing/cinematography, style, quality control, set design/dressing and post-production, alongside the Ladekjær/Rasmussen/Jansen creative boundary."
    },
    {
      title: "Editor Janus Billeskov Jansen Explains His Role In Constructing The Narrative Of Flee",
      publisher: "Cartoon Brew",
      url: "https://www.cartoonbrew.com/feature-film/editor-janus-billeskov-jansen-explains-his-role-in-constructing-the-narrative-of-flee-214304.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Jansen documents interview/audio-led editing, rough visual material and animatic feedback, the exact-length animatic constraint, archive discovery changing the story and the documentary/animation relationship."
    },
    {
      title: "Oscar Contender Flee Needed to Be Animated—Here's Why",
      publisher: "Backstage",
      url: "https://www.backstage.com/magazine/article/flee-movie-animation-director-interview-74880/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Animation director Kenneth Ladekjær explains storyboards/rough drawings as the production's virtual filming layer, the close collaboration with editor/director/art direction and animation as an anonymity strategy."
    },
    {
      title: "Using Sound to Bridge Animation and Archive Footage in Flee",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/flee-sound/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "editing", "sound"],
      note: "Title-specific sound-team testimony supports the sound bridge across animation/archive, the thematic feeling of flight and the collaboration among director, editor, sound and composer."
    },
    {
      title: "Flee — Music by Uno Helmersson",
      publisher: "Milan Records",
      url: "https://www.milanrecords.com/release/flee/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Helmersson's first-person statement supports a restrained organic/electronic score designed around Amin's voice, emotional cadence and documentary material."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
