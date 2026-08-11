import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theBigSickProductionCaseVerification = {
  scenarioId: "scenario_the_big_sick_2017",
  status: "verified",
  verifiedAt: "2026-08-11",
  summary: "The Big Sick's autobiographical three-year screenplay development, Pakistani-American family specificity, stand-up ensemble, real-hospital New York production, warm naturalistic camera, Robert Nassau post workflow, intimate clean sound and Michael Andrews score architecture are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Emily V. Gordon & Kumail Nanjiani (THE BIG SICK) | OnWriting",
      publisher: "Writers Guild of America East",
      url: "https://www.wgaeast.org/onwriting/emily-v-gordon-kumail-nanjiani-the-big-sick/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Gordon and Nanjiani describe the SXSW 2012 genesis with Judd Apatow, Gordon joining as co-writer, roughly three years and hundreds of drafts, the move from remembered fact to constructed fiction, the hospital second act, family viewpoints and the importance of establishing Kumail and Emily's chemistry in writing, shooting and editing."
    },
    {
      title: "Q&A with Kumail Nanjiani, Emily Gordon, and Zoe Kazan",
      publisher: "National Board of Review",
      url: "https://nationalboardofreview.org/2017/08/qa-kumail-nanjiani-emily-gordon-zoe-kazan/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "The writers explain beginning the screenplay five years after the real events, repeatedly rebuilding drafts with Apatow and Barry Mendel, and using enough autobiographical distance to preserve emotional truth while reshaping the experience for cinema."
    },
    {
      title: "Michael Showalter on Working with Kumail Nanjiani and Judd Apatow on The Big Sick",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/102788-michael-showalter-on-working-with-kumail-nanjiani-and-judd-apatow-on-the-big-sick/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Showalter documents a year of script work, his naturalistic human-observer camera philosophy, collaborative direction, Barry Mendel and Judd Apatow's production involvement, a New York shoot with one day of Chicago exteriors, a real Long Island hospital, months of editorial fine-tuning and Apatow's post involvement in music and sound."
    },
    {
      title: "The A-List: The Big Sick director Michael Showalter",
      publisher: "postPerspective",
      url: "https://postperspective.com/list-big-sick-director-michael-showalter/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Showalter explains Robert Nassau's autonomous New York assembly and later Los Angeles producer cut, the intimate clean sound strategy, Michael Andrews' restrained scoring role, Technicolor PostWorks dailies and DI, Alex Bickel's color grade and the production's warm authentic visual target."
    },
    {
      title: "Peaks and Valleys",
      publisher: "ICG Magazine",
      url: "https://www.icgmagazine.com/web/peaks-and-valleys/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The International Cinematographers Guild's Sundance production survey identifies Brian Burgoyne as The Big Sick's cinematographer and records the Guild camera team, including A- and B-camera operators, assistants, digital loader and unit still photographer."
    },
    {
      title: "THE BIG SICK – Original Motion Picture Soundtrack",
      publisher: "Kinetophone",
      url: "https://kinetophone.com/news/the-big-sick-original-motion-picture-soundtrack/",
      sourceKind: "trade_feature",
      supports: ["overall", "sound"],
      note: "Michael Andrews describes receiving a mostly locked film, Showalter's request for a clear musical transition at Emily's sickness, the suspended middle-act state, the changing relationship with Emily's parents and the decision to remove forced Indian and Pakistani musical signifiers when they felt inauthentic."
    },
    {
      title: "The 90th Academy Awards – 2018",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2018",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy's official ceremony record lists The Big Sick, written by Emily V. Gordon and Kumail Nanjiani, among the five nominees for Writing (Original Screenplay) at the 90th Academy Awards."
    },
    {
      title: "The Big Sick. 2017. Directed by Michael Showalter",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/events/3783",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "MoMA's Contenders record confirms the 120-minute US DCP, Amazon Studios presentation, Showalter direction and the fictionalized Nanjiani-Gordon courtship, while noting the film's box-office breakthrough and its treatment of cultural difference, identity and family conflict."
    },
    {
      title: "Amazon Studios Coughs Up $12 Million for 'The Big Sick' at Sundance",
      publisher: "TheWrap",
      url: "https://www.thewrap.com/amazon-studios-big-sick-12-million/",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "The contemporary Sundance trade report documents Amazon Studios acquiring the festival breakout for approximately $12 million after competitive bidding and confirms Showalter, Nanjiani, Gordon, Apatow and Mendel in the core creative and production team."
    },
    {
      title: "The Big Sick: Synopsis",
      publisher: "Lionsgate",
      url: "https://app.powster.com/lionsgateus/the-big-sick/us/synopsis/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official US release page records the real-courtship premise, Pakistan-born stand-up protagonist, parental marriage expectations, medical crisis, Emily's parents and the principal director, writers and producers behind the theatrical release."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
