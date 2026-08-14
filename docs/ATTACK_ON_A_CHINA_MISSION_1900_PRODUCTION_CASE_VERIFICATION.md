# Attack on a China Mission – Bluejackets to the Rescue (1900) — Production Case verification

Verification date: **2026-08-14**

Canonical scenario: `scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900`

## Why this film is a Production Case

This Chapter 3 case is not valuable because it can be advertised as a technical “first.” Its value is more demanding: it forces the player to separate **what survives, what catalogues describe, what archives infer and what later reconstruction adds** before making a formal claim about early editing.

James Williamson staged a Boxer-Rebellion mission attack and British naval rescue as topical fiction in Brighton in 1900. The case therefore combines three inseparable questions:

1. how staged views can construct attack/rescue space;
2. how archival reconstruction can alter what later viewers believe the original film did;
3. how racist characterisation and British imperial rescue ideology shape the production's representation.

## Canonical scenario contract

- **Year:** 1900
- **Title type:** Short
- **Runtime model:** 1 minute
- **Director / producer:** James Williamson
- **Genres:** Drama / War / Short
- **Scenario type:** `action_adventure_production`
- **Expansion:** `manual_chapter_three_narrative_expansion_2026`
- **Manual enrichment remaining:** none

The scenario locks:

- mission attack and rescue as **topical fiction, not actuality**;
- mission-house/gate, Boxer-attack and British naval-rescue spaces;
- provenance labels on camera positions and scene material;
- comparison of surviving, described and reconstructed orders;
- artefact integrity before a cross-cutting claim;
- no first-cross-cutting claim;
- practical visual gunfire/explosions without invented synchronized recorded sound;
- explicit imperial and racist-representation analysis.

## Film and archive evidence

### British Film Institute — exact film

BFI identifies the work as a 1900 silent fictional treatment of a Boxer-Rebellion mission attack and explicitly warns that it contains racist characterisation. BFI describes a single-position version followed by additional material, including opening scenes and a reverse rescue view.

That account is preserved in the case as **BFI's archival version description**, not promoted into final certainty about the original editing order.

### Screen Archive South East

Screen Archive South East dates the film to 1900, classifies it as professional fiction and credits James Williamson as producer/director. Its record describes the mission gate/house, armed attack, sailors, horse and smoke-filled rescue, giving the Production Case concrete staging and design evidence.

### Dulac and Gaudreault — artefact history

Nicolas Dulac and André Gaudreault's peer-reviewed study, *Cross-cutting in the face of history: The case of Attack on a China Mission*, supplies the critical safeguard. It reports that copies rediscovered in **1950** and **1985** did not match the alternating structure known from catalogue description and examines a later reconstructed version containing modifications that can make the material appear more classically edited than the surviving early artefacts justify.

The case therefore treats **reconstruction history as evidence**, not as an invisible repair layer.

## Comparative and cultural context

### BFI — *Attack on a Mission Station*

BFI's Mitchell and Kenyon comparison confirms that mission attacks around the Boxer Rebellion were staged topical reconstructions in early British cinema. It also notes that Williamson made his competing version more spectacular with gunshots and explosions. These are treated as practical visual staging in a silent production, not as synchronized recorded sound.

### Oxford Academic — British imperial siege culture

Scholarship in *History Workshop Journal* places Boxer-Rebellion mission/rescue narratives inside British imperial siege culture and Yellow-Peril rhetoric. The Production Case uses this source for ideological context but does **not** adopt any simple “first cross-cutting” claim where the film-specific artefact scholarship conflicts with it.

### Cambridge University Press — fictionalizing the Boxer Rebellion

Ross G. Forman's *Peking Plots: Fictionalizing the Boxer Rebellion of 1900* documents the rapid British fictionalization of the conflict and its importance to imperial self-conception. This supports the distinction between current-event topicality and documentary actuality.

## Film Study coverage

The source-backed profile is registered in `scenarioFilmStudySilentFoundationsBatch.ts` and resolves through the normal runtime Film Study path.

The dedicated end-to-end test requires:

- **17/17 Film Study areas**;
- at least **11 source-verified areas**;
- globally registered runtime Production Verification;
- exactly six verification sources with broad publisher diversity;
- explicit 1950/1985 rediscovery history;
- reconstruction and catalogue evidence;
- single-position and reverse-view evidence;
- provenance/artefact-integrity language;
- no first-cross-cutting claim;
- fiction/not-actuality classification;
- racist and imperial framing;
- Boxer-Rebellion and British naval-rescue context;
- silent-production boundary.

## Historiographic safeguards

The Production Case must not state or imply that:

- the later reconstructed alternating version is certainly the exact 1900 original;
- Williamson invented cross-cutting;
- the film is actuality/documentary footage shot in China;
- racist characterisation can be ignored because the film is formally innovative;
- the British naval rescue is ideologically neutral;
- described gunshots/explosions prove synchronized recorded sound.

Instead, the case teaches a stronger historical method: **formal interpretation depends on provenance, version history and surviving evidence**.

## Runtime integration

The case counts as complete only because all of these layers are connected:

- `src/core/chapterThreeNarrativeExpansion.ts`
- `src/ui/data/filmScenarios.ts` through the already-registered Chapter 3 expansion
- `src/ui/data/scenarioFilmStudySilentFoundationsAttackChinaMission.ts`
- `src/ui/data/scenarioFilmStudySilentFoundationsBatch.ts`
- `src/ui/data/scenarioProductionVerificationAttackChinaMission.ts`
- `src/ui/data/scenarioProductionVerificationSilentFoundationsBatch.ts`
- global `scenarioProductionVerificationRegistry.ts` through the silent-foundations spread
- `src/ui/data/scenarioFilmStudyAttackChinaMission.test.ts`
- global Production Verification hard-count test
- Production Case rest audit
- Film History Chapter 1–3 Atlas audits

A scenario, profile or reconstruction note by itself is not completion.

## Count transition

Before this case:

- playable Film Atlas: **389**
- runtime source-verified Production Cases: **382**
- Chapter 3 P0: **0**
- Chapter 3 P1: **2**

After this case:

- playable Film Atlas: **390**
- runtime source-verified Production Cases: **383**
- Chapter 3 P0: **0**
- Chapter 3 P1: **1**

Exact Chapter 3 Production Case still required:

1. **Histoire d'un crime (1901)** — P1

The P2/book-only set remains *Cendrillon*, *Stop Thief!*, *Mary Jane's Mishap* and *The Lonedale Operator*.
