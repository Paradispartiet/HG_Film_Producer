import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const insideOutProductionCaseVerification = {
  scenarioId: "scenario_inside_out_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's daughter-inspired and psychology-informed screenplay, five-emotion ensemble, dual real-world and mind-world design, virtual camera and lighting grammars, particle-and-geometry-light character rendering, iterative editing, designed mental soundscape, inward orchestral score, Cannes launch and Academy recognition are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Inside Out",
      publisher: "Pixar Animation Studios",
      url: "https://www.pixar.com/inside-out",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Pixar's official film archive defines Riley, the five emotions and the functional mind geography of Headquarters, personality islands, Imagination Land, Dream Productions, the Train of Thought and Long Term Memory."
    },
    {
      title: "The 2015 Official Selection",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/2015/the-2015-official-selection/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official festival archive records Pete Docter's Inside Out as a 2015 out-of-competition selection and confirms its international launch beside the year's major studio and auteur premieres."
    },
    {
      title: "2016 Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2016/I",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy records the Animated Feature win for Pete Docter and Jonas Rivera and the original-screenplay nomination for Docter, Meg LeFauve and Josh Cooley from a story by Docter and Ronnie del Carmen."
    },
    {
      title: "The Science of Why Inside Out Is Just as Good as Pixar's Best Work",
      publisher: "WIRED",
      url: "https://www.wired.com/2015/06/pixar-inside-out/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "The feature documents consultation with emotion researcher Paul Ekman, the narrowing of a much larger emotional field to five principal characters and the long development process required to make psychological ideas dramatically legible."
    },
    {
      title: "Inside Out Rendering",
      publisher: "fxguide",
      url: "https://www.fxguide.com/fxfeatured/inside-out-rendering/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Department testimony documents Paul Ekman and Dacher Keltner's research role, shape-based emotion design, energy particles, Joy's volumetric glow, the first production use of geometry light and the differentiated rendering of the real and mind worlds."
    },
    {
      title: "Animation: Pixar's Inside Out",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2015/June-1-2015/Animation-Pixars-Inside-Out.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "The production feature identifies Ralph Eggleston, Patrick Lin and Kim White and explains the three-year production, virtual camera choreography, two visual worlds, Joy's lighting treatment and the effects-animation pipeline."
    },
    {
      title: "Introduction to virtual cameras",
      publisher: "Khan Academy",
      url: "https://www.khanacademy.org/computing/pixar/virtual-cameras/virtual-cameras-1/v/virtual-cameras",
      sourceKind: "filmmaker_interview",
      supports: ["cinematography", "editing"],
      note: "Inside Out director of photography Patrick Lin and camera lead Adam Habib demonstrate Pixar's virtual camera, explaining how lens, focal length, framing, staging and movement are chosen to serve the emotional purpose of a scene."
    },
    {
      title: "This Is Pixar's Secret to Making Moviegoers Cry",
      publisher: "TIME",
      url: "https://time.com/3928481/inside-out-pixar-secret-crying/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Editor Kevin Nolting describes working with Docter, Ronnie del Carmen and Pixar's Brain Trust, the willingness to push emotional material too far and then revise it, and editorial construction of the film's most affecting passages."
    },
    {
      title: "Behind the creative, clever sound of Pixar's Inside Out",
      publisher: "A Sound Effect",
      url: "https://www.asoundeffect.com/inside-out-sound/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "The SoundWorks feature identifies Pete Docter, Jonas Rivera, supervising sound editor Shannon Mills and sound designer Ren Klyce and documents the designed sonic distinction between Riley's physical world and the mechanisms and spaces of her mind."
    },
    {
      title: "Walt Disney Records Set To Release Inside Out Original Motion Picture Soundtrack",
      publisher: "Walt Disney Records",
      url: "https://www.prnewswire.com/news-releases/walt-disney-records-set-to-release-inside-out-original-motion-picture-soundtrack-with-score-composed-by-michael-giacchino-300094334.html",
      sourceKind: "archive_feature",
      supports: ["overall", "sound"],
      note: "The official label release records Michael Giacchino's aim for an atmospheric score that feels like internal thought, its emotional rather than conventionally spectacular brief and its 70-piece orchestra, organ, rhythm section, jazz and horror-derived colours."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
