# Japanese ambiguity and dialogue Production Case verification

Verified on 2026-07-23. This batch reviews existing playable scenarios only; it adds no films.

## Cases

- `scenario_cure_1997`
- `scenario_wheel_of_fortune_and_fantasy_2021`
- `scenario_monster_kore_eda_2023`
- `scenario_evil_does_not_exist_2023`

## Comparative production systems

### Cure

A serial-murder investigation loses rather than gains causal certainty. Restrained 35mm distance, ordinary industrial and domestic spaces, hypnotic questioning, patient ellipses and a precise field of water, flame, ventilation and distant traffic turn post-bubble social disconnection into psychological horror without effects spectacle.

### Wheel of Fortune and Fantasy

Three autonomous stories are joined by coincidence, imagination and changes in relational power. Hamaguchi's flat table-reading rehearsal method, medium and long-shot coverage, extended conversations, open doors and carefully timed cuts make language, silence and role-play the principal dramatic action.

### Monster

One school conflict returns through mother, teacher and child. Yuji Sakamoto's screenplay, Kore-eda's editing, restrained camera placement, institutional and childhood spaces, layered sound and Ryuichi Sakamoto's final score add adjacent information rather than simply contradicting earlier accounts, revising blame through expanded empathy.

### Evil Does Not Exist

Forestry work, well water and a public consultation establish a concrete rural ecological system before the film moves into unresolved violence. Patient landscape observation, practical tasks, community procedure, environmental sound, Eiko Ishibashi's interrupted score and abrupt editing prevent nature, development and human motive from becoming morally simple.

## Verification threshold

Each case now has:

- four inspectable HTTPS sources from at least two publishers;
- a complete 17-area history and craft audit;
- at least nine `source_verified` areas;
- explicit `mapped` or `not_central` status where department-level evidence is incomplete;
- one playable history match, one partial match and one mismatch;
- a verification record linked to the existing scenario ID.

## Sources

The batch uses film records, restoration material, programme notes, critical archives, award records and filmmaker conversations from the Criterion Collection, British Film Institute, Film at Lincoln Center, Berlin International Film Festival, Festival de Cannes and La Biennale di Venezia.

Sources support only the registry's permitted areas: `overall`, `screenplay`, `cinematography`, `editing` and `sound`.

## Integration

The profiles are exposed through the existing player-facing film-history resolver and use a dedicated four-film donor pool. Alternatives compare hypnotic procedural uncertainty, triptych conversation, multiperspectival institutional revision and ecological procedural ambiguity rather than unrelated Japanese films.

The previous resolver's growing import and nested-conditional chain is split into `scenarioFilmStudyIndependentStorytellingCatalog.ts`. The catalogue now owns profile membership and donor grouping, while `scenarioFilmStudyIndependentStorytellingBatch.ts` retains coverage resolution and choice construction. Existing group behaviour is preserved and remains covered by all earlier batch tests.

## Files

- `src/ui/data/scenarioFilmStudyJapaneseAmbiguityCure.ts`
- `src/ui/data/scenarioFilmStudyJapaneseAmbiguityWheelOfFortune.ts`
- `src/ui/data/scenarioFilmStudyJapaneseAmbiguityMonster.ts`
- `src/ui/data/scenarioFilmStudyJapaneseAmbiguityEvilDoesNotExist.ts`
- `src/ui/data/scenarioFilmStudyIndependentStorytellingCatalog.ts`
- `src/ui/data/scenarioFilmStudyJapaneseAmbiguityDialogue.test.ts`
- `src/ui/data/scenarioProductionVerificationJapaneseAmbiguityDialogueBatch.ts`

The unified verification registry rises from 200 to 204 cases. Catalogue size and scenario data remain unchanged.
