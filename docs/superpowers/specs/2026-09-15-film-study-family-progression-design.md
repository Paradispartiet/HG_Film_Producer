# Canonical Film Study Family Progression — Design

## Status

Design-only architecture specification.

- Exact baseline: `a5e962d634cec396d59a3145497a4641c5c4ec24`
- Design branch: `design/film-study-family-progression-20260915`
- Formatter write-port remains closed.
- This design does not assign `Religious/Moral → X`.
- No formatter, scenario, profile, donor, navigation, or UI behavior is changed by this design.

## Problem

The current Film Study system contains mechanisms for classification, profile lookup, donor selection, and scenario navigation. Those mechanisms do not establish a canonical pedagogical or semantic progression from one feedback family to another.

The following are therefore not valid progression evidence:

- resolver precedence;
- import order;
- declaration order;
- source-file adjacency;
- profile lookup order;
- donor selection;
- scenario-library navigation;
- formatter coverage or fallback order.

In particular, the locked baseline does not establish a canonical successor for Religious/Moral. Choosing New Hollywood, Blockbuster, Political/Feminist, or any other family because it appears nearby in unrelated runtime structures would create semantics that the repository has not authorized.

## Design decision

Film Study family progression is a separate canonical relation over the existing Film Study family identity space.

The relation is explicit-only: an edge exists only when canonical progression data declares it. No edge may be inferred from unrelated runtime structures.

The progression model is an adjacency relation, not a global ordered list. Conceptually:

```ts
type FilmStudyFamilyProgressionEdge = Readonly<{
  from: FilmStudyFamilyId;
  to: FilmStudyFamilyId;
}>;

function successorsOf(
  familyId: FilmStudyFamilyId,
): readonly FilmStudyFamilyId[];
```

The concrete implementation must reuse the repository's existing canonical Film Study family identifier/type source rather than create a duplicate taxonomy.

`successorsOf(...)` is intentionally plural. The design does not assume that every family has exactly one successor or that the graph is globally linear.

An empty result is a valid canonical result. The mechanism must therefore be valid with an empty edge set.

## Semantic boundaries

Five concerns remain distinct:

1. **Classification** — which Film Study family a scenario, answer, or result belongs to.
2. **Profile lookup** — which profile/configuration belongs to a family.
3. **Donor selection** — which existing material may be reused for a case.
4. **Scenario navigation** — which scenario the interface or scenario library presents next.
5. **Family progression** — an explicitly declared pedagogical/canonical relation between Film Study families.

No concern may substitute for another. In particular, navigation is not progression, and resolver precedence is not progression.

## Canonical edge authority

A progression edge may be added only when the relation itself is independently justified and intentionally declared as Film Study progression.

A consumer's need for a successor is not evidence for an edge. A formatter gap, fallback branch, UI ordering requirement, nearby declaration, or convenient sequence is not sufficient authority.

If no canonical authority establishes an edge, the correct result is absence of that edge.

This design therefore does not add any edge solely to answer `Religious/Moral → X`.

## Data and API properties

The progression layer must satisfy these properties:

- **Explicit-only** — all returned edges originate in canonical progression data.
- **Order-independent** — import, declaration, resolver, and object iteration order do not create edges.
- **Read-only** — consumers cannot mutate canonical progression state.
- **Deterministic** — equal canonical input yields equal successor sets.
- **Identifier reuse** — existing Film Study family identifiers are reused; display names are not a second identity system.
- **No implicit total order** — there is no global family array whose position silently means pedagogical succession.
- **Empty-valid** — families may have zero outgoing edges, and the entire canonical edge set may initially be empty.
- **Consumer-neutral** — introducing the mechanism does not change classification, profile, donor, scenario-navigation, formatter, or UI behavior by itself.

Validation of family identifiers follows the repository's existing canonical family-ID contract. The progression mechanism must not introduce a competing validation regime merely for this relation.

## Initial state

The safe initial canonical progression state is explicit-only and may contain zero edges.

Specifically:

- Religious/Moral receives no successor from this design.
- New Hollywood / New York does not become a successor relation merely because of resolver or family-internal structure.
- Blockbuster receives no special status from proximity or chronology.
- Political/Feminist receives no successor/predecessor status from fallback structure.

Future edge additions are separate semantic/data changes and require their own evidence and review.

## Contract tests

The implementation contract must prove at least the following:

1. An explicitly declared edge is returned by `successorsOf(from)`.
2. A family with no declared outgoing edge returns an empty result.
3. No edge appears merely because two families are adjacent in an import, declaration, resolver, profile, donor, navigation, or formatter structure.
4. Reordering unrelated declarations cannot change progression results.
5. Progression lookup does not change classification results.
6. Progression lookup does not change profile lookup.
7. Progression lookup does not change donor selection.
8. Progression lookup does not change scenario navigation.
9. Progression lookup does not change formatter behavior.
10. Religious/Moral has no successor unless a progression edge is explicitly declared by a later, independently justified change.
11. Duplicate canonical edges are rejected or normalized deterministically according to one documented implementation rule; they must never create order-sensitive behavior.
12. The API remains structurally capable of multiple outgoing edges without requiring the initial data set to contain any.

The tests must use the progression relation itself as the source of truth. They must not reconstruct expected successors from unrelated runtime ordering.

## Rollout

### Phase 1 — mechanism

Introduce the isolated progression relation, validation consistent with existing family IDs, the plural read-only lookup API, and contract tests. The edge set may be empty.

### Phase 2 — canonical edges

Add individual progression edges only when each edge has explicit Film Study semantic authority. Edge admission is independent of formatter demand.

### Phase 3 — consumers

Consumers may adopt the progression API only where progression semantics are actually required. Existing consumers must not be migrated merely to remove local ordering code unless that ordering was already intended to mean canonical progression.

The formatter remains fail-closed for any successor-dependent slice until the required edge exists canonically.

## Non-goals

This design does not:

- change the Film Study formatter;
- choose a successor for Religious/Moral;
- infer New Hollywood or Blockbuster as the next family;
- reorder existing families;
- reinterpret scenario navigation as pedagogy;
- alter donor selection;
- modify Film Study profiles;
- introduce a new UI flow;
- force Film Study into a linear course sequence;
- create placeholder edges for future work;
- refactor unrelated Film Study architecture.

## Rejected alternatives

### Global ordered family array

Rejected because array position would silently create total-order semantics and would make unrelated declaration ordering authoritative.

### Reuse scenario navigation

Rejected because scenario navigation describes movement among scenarios, not canonical relations among feedback families.

### Reuse resolver/fallback precedence

Rejected because precedence answers classification/fallback questions, not pedagogical succession.

### Add `Religious/Moral → New Hollywood/Blockbuster` as a bootstrap edge

Rejected because this would manufacture exactly the semantic claim the fail-closed gate could not prove.

### Singular `successorOf(): FamilyId | null`

Rejected as the primary contract because the baseline does not prove cardinality ≤ 1. A plural API preserves the weaker, evidence-compatible graph model.

## Risks and controls

- **Risk: accidental hidden ordering semantics.** Control: adjacency relation plus explicit-only tests.
- **Risk: duplicate family taxonomy.** Control: reuse the existing canonical family identity source.
- **Risk: progression becomes a convenience API for navigation.** Control: semantic-boundary tests and consumer-neutral Phase 1.
- **Risk: placeholder edges are added to unblock formatters.** Control: empty-valid state and separate edge-admission changes.
- **Risk: future graph flexibility causes unnecessary complexity.** Control: keep Phase 1 API minimal; plural lookup does not require graph traversal, ranking, cycle handling, or pathfinding.

## Acceptance criteria

The design is satisfied when implementation can demonstrate all of the following:

- exactly one canonical Film Study family-progression relation/API exists;
- it reuses existing canonical family identities;
- undeclared progression returns no successor rather than inferring one;
- the relation can validly contain zero edges;
- import/declaration/resolver/navigation ordering cannot create progression;
- formatter code and behavior remain unchanged by Phase 1;
- Religious/Moral still has no successor unless a separately justified canonical edge is later admitted;
- existing classification, profile, donor, scenario-navigation, and UI behavior remain unaffected.

## Consequence for the blocked formatter slice

The previous formatter investigation remains closed without a candidate successor. This design does not reopen that write-port.

A future formatter slice that depends on `Religious/Moral → X` becomes legitimate only after `X` exists as an independently justified edge in the canonical progression relation. Until then, `Religious/Moral → X` remains absent by design.