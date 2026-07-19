# HG Film Producer Game Direction

## North Star

HG Film Producer is a game for learning how films are made, where they belong in film history and why their choices work.

The player studies real films through concrete cases in historical context, screenplay, directing, performance, cinematography, production design, editing and sound. The goal is understanding—not winning a simulation, maximizing a score or climbing a rank.

## One-sentence pitch

Learn film history and film craft by examining the real choices behind films, comparing plausible alternatives and receiving film-specific explanations grounded in sources.

## What the game is

HG Film Producer is:

- A film-literacy, film-history and film-craft learning game.
- A case-based way to understand how finished films solve artistic and technical problems.
- A guided comparison between real filmmaking choices and plausible alternatives.
- A source-backed film-history and craft system.
- A modular film universe that can connect to History Go.

The player should learn by doing more than reading, but the action must remain academically and professionally meaningful. A choice is useful when it clarifies historical position, screenplay structure, staging, acting, image, design, sound, editing or production method.

## What the game is not

HG Film Producer is not:

- A budget, schedule or resource-management simulator.
- A generic tycoon or studio-economy game.
- A points game.
- A rank ladder built around Assistant, Producer or Auteur titles.
- A best-score chase.
- A quiz that rewards guessing without explanation.
- An AI screenplay generator.
- Just a film encyclopedia.

Budget, time, technology, location and working conditions may appear when they are documented facts that explain how a real film was made. They must not become a universal simulated resource system detached from the film being studied.

## Stable mode: Production Cases

Production Cases is the stable MVP and the reference model for the app.

Each case focuses on one film. It first places the film historically, then connects that position to the film's concrete technical and artistic methods. The player compares approaches, chooses the explanation that best fits the film, reads immediate feedback and completes a learning report.

```text
choose a film
→ place it historically
→ compare its inherited traditions and production conditions
→ inspect the complete craft map
→ study the film-specific phases
→ compare plausible approaches
→ choose an explanation
→ read why it fits, partly fits or does not fit
→ inspect the sources
→ read the learning report
→ review or continue
```

There is no numerical score and no prestige tier. Progress records only which cases and phases have been studied.

## Pedagogical assessment

The system may internally distinguish between:

- a choice that clearly matches the documented film method;
- a choice that explains part of the method;
- a choice that should be reconsidered.

These distinctions exist only to select useful feedback and identify material worth reviewing. They must not be converted into points, ranks, currency, rewards or public performance labels.

A wrong or partial choice is not a punishment. It is an opportunity to compare methods and understand the film more precisely.

## Learning report

After all phases are completed, the case report should show:

- which historical and technical methods the player identified clearly;
- which phases are worth comparing again;
- the central film-history and film-craft lesson;
- the sources supporting the case.

The report must not show a score, best result, rank or threshold for advancement.

## Progress

Progress exists to help the player return to learning:

- Not started
- In progress
- Completed

Completion means that the player has worked through the case. It does not certify mastery and does not rank the player against anyone else.

## Film history and sources

Film history is a playable explanatory layer, not decorative trivia. Every case should answer four connected questions:

1. What traditions existed before the film?
2. What historical, industrial and technological conditions shaped its production?
3. How do those conditions appear in the film's concrete choices?
4. What did the film carry forward into later cinema, teaching or preservation?

The interface should present this as:

```text
BEFORE THE FILM
→ IN ITS HISTORICAL MOMENT
→ WHAT IT CARRIES FORWARD
```

The player should compare plausible historical positions drawn from real films. The correct explanation must connect history to production method instead of rewarding recall of dates, awards or trivia.

Production claims should be supported by filmmaker and department-head interviews, archival records, film institutes, established trade publications, preservation records or comparable evidence. Sources should explain why a method was used, what practical conditions shaped it and how the choice appears in the finished film.

The detailed implementation and research standard are defined in `docs/FILM_HISTORY_AND_CRAFT_MAPPING.md`.

## Complete mapping requirement

Every Production Case must assess the same 17 areas. A field may be primary, supporting, research pending or not central, but it must not silently disappear.

### Film history

- historical context;
- movement and tradition;
- industry and production context;
- reception and legacy.

### Film technique

- screenplay and dramaturgy;
- directing and staging;
- performance and casting;
- production design and props;
- costume, makeup and hairstyling;
- cinematography and composition;
- lighting;
- camera, lenses and capture format;
- editing and temporal construction;
- sound design and dialogue;
- music and score;
- practical effects, VFX and animation;
- documentary and research method.

The game must show whether each area is:

- `source_verified`;
- `mapped` in the current case but awaiting dedicated source review;
- `research_pending`;
- `not_central` to this particular film.

The app must never fill an unresearched area with generic prose merely to make the case appear complete.

## Design pillars

### Film-specific knowledge

Every case must teach something concrete about the film being studied. Generic management dilemmas are not enough.

### Explanation after choice

The player should always learn why an alternative fits, partly fits or fails to explain the film.

### Comparison builds understanding

The value of a choice comes from comparing real methods. Alternatives should be plausible enough to reveal meaningful historical and technical distinctions.

### History and craft remain connected

Historical context, movement, production conditions, screenplay, directing, performance, cinematography, design, editing and sound should be shown as interacting parts of one film—not isolated trivia categories.

### Sources remain inspectable

A verified case must expose its evidence. The game should distinguish clearly between source-verified material, mapped material and material still awaiting research.

### No motivational clutter

Points, badges, streaks, ranks and simulated economy must not displace the subject matter. The film and the explanation are the reward.

## Studio Career

Studio Career is not the current reference model and must not steer Production Cases toward simulation mechanics.

Any future career structure must remain subordinate to learning. It may organize cases, roles or curricula, but it must not turn the main game into budget management, prestige accumulation or an economy simulator.

## Expansion rule

Before adding a feature, ask:

- Does this teach a concrete film-history or film-craft concept?
- Is the choice tied to a real film, method or documented production condition?
- Does the feedback explain why?
- Does it help the player compare techniques or historical systems?
- Are unsupported areas marked as research pending?
- Can the same learning goal be achieved without points, ranks or simulated resources?

If the learning value is unclear, the feature should wait. HG Film Producer grows by improving film understanding, not by adding generic game systems.
