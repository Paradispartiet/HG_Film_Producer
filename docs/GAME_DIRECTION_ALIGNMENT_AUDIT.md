# Game direction alignment audit

## Executive summary

The current app is broadly aligned with `docs/GAME_DIRECTION.md`: Production Cases remains the clearest stable MVP/reference loop, and Studio Career is documented and surfaced as a playable but experimental branch.

The main risk is **unclear mode hierarchy and UX confusion**, with secondary risk of **generic tycoon drift** inside Studio Career if money, prestige, awards, crew/cast continuity, and pipeline metrics expand before manual playtesting. The current app does not look like a pure quiz or AI writing tool, and Production Cases mostly avoids quiz drift by asking the player to reconstruct production logic through choices.

The next work should be **manual playtest and copy clarity**, not feature expansion. The safest next PRs are small documentation/copy/UX-clarity passes that make the intended hierarchy obvious without changing scoring, storage, seed data, formulas, routing, or gameplay systems.

## What aligns well

- **Production Cases is still the stable MVP/reference loop.** `GAME_DIRECTION` names Production Cases as the stable MVP checkpoint and reference loop; the checkpoint doc repeats the closed loop from title screen to case report, replay, next case, progress, and best result; the landing screen makes “Start Production Cases” the primary action.
- **Knowledge through action is present in Production Cases.** The library and mission flow frame cases as production choices, phases, scores, reports, and improvements rather than isolated trivia questions.
- **Case report and replay loop are implemented as a focused improvement loop.** The Production Case report is gated until all phases are complete, then offers Play again, Next case, and Back to Production Cases actions.
- **Progress and best-result tracking support repeat learning.** The Production Cases dashboard includes collection summary, next action, achievements, and recent best results, matching the “improve best result” loop in the current MVP documentation.
- **Studio Career is documented as experimental, not the main MVP.** The Studio Career status doc explicitly says it is an experimental playable branch and should not be expanded before focused manual testing.
- **Existing freeze/checkpoint docs reduce scope creep.** The Production Cases MVP checkpoint and Studio Career experimental status docs both say broad simulator expansion should wait for manual validation.
- **Future/full-simulator ideas are visibly separated on the landing screen.** Writers’ room, Full studio simulator, and Film history atlas / locations appear under planned future modes rather than current playable mode actions.

## Concrete mismatches or risks

### 1. Studio Career label is softer in UI than in docs

- **Where it appears:** Landing screen mode summary and action buttons.
- **Why it conflicts with GAME_DIRECTION:** The docs say Studio Career is an “experimental playable branch,” not the stable main MVP. The landing screen says “early studio pipeline mode” and offers “New studio career” beside other actions. That is accurate enough to be non-blocking, but it does not use the stronger “experimental” warning a new player needs.
- **Severity:** Medium.
- **Recommended next action:** Copy-clarity PR only: label Studio Career as experimental on the title screen and/or add a short “play Production Cases first” note. Do not change routing or career behavior.

### 2. A new player can still choose career before the stable MVP

- **Where it appears:** Landing screen actions: Start Production Cases, Continue career, New studio career, Demo dashboard.
- **Why it conflicts with GAME_DIRECTION:** Production Cases is the reference motor, but Studio Career is still a directly available mode. Because both are playable-looking actions, a new player could start the experimental branch first and judge the app by the less-validated simulator flow.
- **Severity:** Medium.
- **Recommended next action:** Small UX/copy clarification that Production Cases is the recommended first play path. Do not hide Studio Career or alter routing in this audit follow-up unless a separate UX decision is made.

### 3. Global navigation uses generic “Studio office” context

- **Where it appears:** Shared game navigation context label.
- **Why it conflicts with GAME_DIRECTION:** The phrase “Studio office” supports the studio fantasy, but it can blur whether the player is in the stable Production Cases loop, experimental Studio Career, or a dev/inspection surface. That weakens the one-playable-motor-at-a-time rule.
- **Severity:** Low.
- **Recommended next action:** Copy audit or small UI-copy PR to make mode context more explicit. Do not change navigation routes.

### 4. Production Cases library still says “Seed catalogue” and “classic film seed file”

- **Where it appears:** Production Cases library header.
- **Why it conflicts with GAME_DIRECTION:** “Seed catalogue” and “seed file” are internal/dev-data terms. They make the MVP feel like a data browser instead of the stable case-based training mode for learning production logic through action.
- **Severity:** Medium.
- **Recommended next action:** Copy-only PR to replace internal catalogue language with player-facing case-library language. Do not change seed data or case filtering.

### 5. Production Cases can read as reconstruction, not forward production judgment

- **Where it appears:** Production Cases library text says manual briefs “follow and reconstruct the production choices behind the specific film.”
- **Why it conflicts with GAME_DIRECTION:** Reconstruction is useful for film literacy, but if overemphasized it can drift toward finding the historically correct answer instead of developing production judgment under constraints.
- **Severity:** Low.
- **Recommended next action:** Copy-only clarification that reconstructing the film is a way to learn transferable production logic. Do not change scoring or mission content.

### 6. Studio Career contains many simulator signals before validation

- **Where it appears:** Studio Career flow and docs list setup, development, pre-production, full shoot schedule, post-production, release, career application, career-year/expenses, crew/cast continuity, completed-film collapse, and pipeline continuation.
- **Why it conflicts with GAME_DIRECTION:** This is allowed as an experimental branch, but it is the clearest risk vector for premature full-simulator expansion. If expanded before manual testing, it could become a generic tycoon or Excel economy simulator rather than a film-understanding game.
- **Severity:** High.
- **Recommended next action:** Manual playtest notes PR before any career feature PR. Freeze new simulator layers until the documented manual path is played and evaluated.

### 7. Completed-film metrics risk generic tycoon/awards emphasis

- **Where it appears:** Completed film panel and next-project carried studio cards show quality, audience appeal, critical appeal, gross revenue, net revenue, awards won, money, reputation, prestige, year, quarter, and completed film count.
- **Why it conflicts with GAME_DIRECTION:** These metrics are not wrong, but they can pull attention toward accumulation and scoreboard outcomes unless paired with clearer explanation of why previous production choices worked and how they improve the next production.
- **Severity:** Medium.
- **Recommended next action:** Manual playtest should check whether players understand the production-craft causes behind these metrics. Avoid adding economy, awards, distribution, investor, or prestige systems until that is validated.

### 8. Some Studio Career continuation copy emphasizes pipeline completion more than learning

- **Where it appears:** Next project/result panels and pipeline handoff copy.
- **Why it conflicts with GAME_DIRECTION:** The current copy helps avoid trapped states, which is good, but it often says what step is next rather than what film-production lesson carries forward. This risks a process-completion loop rather than “become better because I understand film better.”
- **Severity:** Low.
- **Recommended next action:** After manual playtest, consider copy that connects handoffs to production judgment. Do not change formulas or unlocks.

### 9. Demo/dev dashboard remains visible from player-facing navigation

- **Where it appears:** Landing screen and shared game navigation show Demo dashboard / Dev dashboard.
- **Why it conflicts with GAME_DIRECTION:** Dev and inspection surfaces are useful, but if they remain too prominent, they can dilute the hierarchy between the stable MVP and experimental branch.
- **Severity:** Low.
- **Recommended next action:** Copy/visibility review only. Do not remove tools needed for development unless a separate product decision is made.

## Mode hierarchy check

- **Is Production Cases still clearly the stable MVP/reference loop?** Yes in docs and mostly yes in UI. The README, Game Direction, Production Cases checkpoint, and landing primary action all point to Production Cases as the current playable MVP/reference loop.
- **Is Studio Career clearly experimental?** Yes in docs, partially in UI. The Studio Career status doc is explicit; the landing screen says “early studio pipeline mode,” which is less clear than “experimental.”
- **Could a new player misunderstand what to play first?** Yes. “Start Production Cases” is primary, but “New studio career” is still a normal visible action and may be read as the main game because the title fantasy is studio management.
- **Are “Full simulator” / future modes clearly separated from current modes?** Mostly yes. They are grouped as planned future modes on the landing screen, and README calls the full studio simulator a later expansion rather than the playable main mode.

## Player fantasy check

- **I run a film studio.** Communicated strongly by the title screen, Studio Career, studio/career state, pipeline, completed films, money/reputation/prestige, and next-film setup.
- **I make production choices under constraints.** Communicated in both Production Cases and Studio Career, especially through phases, choices, budgets/schedules/crew/cast, and shoot/release flow.
- **I learn why film choices work.** Communicated best in Production Cases through case scoring, feedback, report, and best-result improvement. Weaker in Studio Career, where outcome metrics can outpace craft explanation.
- **I build taste, method, reputation and career.** Partially communicated. Reputation/career are explicit; taste and method are more implicit and should not be expanded mechanically before playtesting.
- **I become better because I understand film better.** Strongest in Production Cases. Studio Career needs playtest validation to confirm whether the player experiences improvement through understanding, not just pipeline progression.

## Do-not-build-now list

Do not build these next:

- Full simulator expansion.
- Deeper economy systems.
- Investor, loan, financing, or distribution-contract systems.
- Awards expansion.
- New crew/cast simulation depth.
- New atlas/location systems.
- AI writing/manuscript features.
- Large new content sets or broad new case batches.
- New playable modes.
- More progression systems that do not clearly feed the next production.
- New metrics that mainly reward accumulation rather than film-production judgment.
- Any feature whose first justification is tycoon depth rather than film understanding through action.

## Recommended next 3 PRs

### PR 1 — Clarify mode hierarchy copy

- **Goal:** Make the title screen and shared navigation copy say that Production Cases is the recommended stable MVP and Studio Career is experimental.
- **Why it matters:** Reduces new-player confusion and protects the one-playable-motor-at-a-time rule.
- **What must not be changed:** No routing, scoring, storage, career logic, Production Cases logic, seed data, or UI layout changes beyond copy.

### PR 2 — Manual Production Cases playtest notes

- **Goal:** Add a short manual browser playtest report for the checkpoint paths: new player, returning player, Play again, Next case, persistence, and fallback to library.
- **Why it matters:** The checkpoint doc says manual browser validation is the next gate before expansion.
- **What must not be changed:** No gameplay fixes, new cases, scoring changes, storage changes, or UI changes in the same PR.

### PR 3 — Manual Studio Career experimental-path playtest notes

- **Goal:** Add a focused manual playtest report for the documented Studio Career path from new career through Film Two actionability and completed-film collapse.
- **Why it matters:** Studio Career is the highest drift risk and should not expand before its current flow is evaluated.
- **What must not be changed:** No new studio systems, economy depth, awards/investor/distribution systems, atlas/location systems, AI/manus features, or content expansion.
