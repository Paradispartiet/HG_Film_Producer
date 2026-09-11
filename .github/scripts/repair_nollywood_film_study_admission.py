from pathlib import Path

path = Path('.github/workflows/nollywood-representation-admission.yml')
s = path.read_text()

anchor = "          python3 - <<'PY'\n          from pathlib import Path\n          import json\n"
if s.count(anchor) != 1:
    raise SystemExit(f'admission python anchor drifted: {s.count(anchor)}')

film_study_block = r'''          cat > src/ui/data/scenarioFilmStudyRepresentationLivingInBondage.ts <<'EOF'
          import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";

          export const livingInBondageFilmHistoryProfile = {
            scenarioId: "scenario_living_in_bondage_1992",
            period: "early-1990s Nigerian video-film formation: celluloid-cost collapse, private/informal finance, Super VHS production, marketer-led home-video circulation and the production system later identified with Nollywood",
            traditions: ["Nigerian video film", "Nollywood", "home-video cinema", "popular melodrama", "informal-sector film economy", "low-cost video production", "West African video distribution"],
            before: "Living in Bondage emerged after Nigeria's celluloid production and theatrical infrastructure had become increasingly difficult to sustain economically. The reviewed SAGE and UNESCO research describes video as a practical response to those constraints, while Kenneth Nnebue's videocassette business and prior video-film financing/distribution connected production finance to an existing informal video market. The case is therefore treated as an industrial transition built from already developing video and trading networks, not as a nationality token or a claim that one film invented Nigerian cinema.",
            moment: "The 1992 production joined Okechukwu Ogunjiofor's originating writer-producer role, Kenneth Nnebue's financing and marketing resources, Chris Obi Rapu's direction, an approximately 150,000-naira reported production cost, Super VHS capture and a straight-to-home-video circulation model. These source-backed elements are the production-history core of the case. The evidence does not justify inventing a camera body, lenses, lighting package, tape stock, edit suite, sound hardware, crew size, schedule, ownership split, recoupment structure or exact duplication and sales quantities.",
            after: "Jonathan Haynes's scholarship describes Living in Bondage as opening the market for Nigerian video films, while UNESCO and BFI place it within the early home-video boom that became formative for Nollywood. Its legacy is used here to explain how low-cost capture, private/informal finance, marketer-led distribution and domestic home viewing could form an industry system outside a conventional vertically integrated studio and theatrical-release model. Later Nollywood scale remains downstream evidence and is not projected backward onto the exact 1992 production.",
            historyQuestion: "How did Living in Bondage combine low-cost video capture, private/informal finance, marketer-led distribution and home viewing into an industry system without turning later Nollywood scale or national identity into unsupported evidence about the 1992 production?",
            technicalHighlights: [
              { area: "historical_context", status: "source_verified", note: "SAGE and UNESCO place the film inside the economic decline of viable celluloid production and theatrical access and the emergence of Nigerian video-film production." },
              { area: "movement_and_tradition", status: "source_verified", note: "Haynes, UNESCO and BFI connect the case to the Nigerian video-film formation later identified with Nollywood; the label is treated as an industrial tradition rather than a style or nationality quota." },
              { area: "industry_and_production_context", status: "source_verified", note: "The reviewed research identifies Nnebue's financing/marketing role, Ogunjiofor's writer-producer role, Obi Rapu's direction, the reported approximately 150,000-naira cost and the informal home-video market infrastructure." },
              { area: "reception_and_legacy", status: "source_verified", note: "Haynes, UNESCO and BFI describe the market-opening success and later home-video boom. Later scale is kept separate from evidence about the original production." },
              { area: "screenplay", status: "source_verified", note: "The reviewed scholarship identifies Okechukwu Ogunjiofor as story originator and writer-producer. No unsupported scene-level writing process or revision history is inferred." },
              { area: "directing", status: "mapped", note: "Chris Obi Rapu is identified as director, but the reviewed sources do not establish a detailed staging or directing workflow." },
              { area: "performance", status: "research_pending", note: "Performance and casting are not needed to establish the industrial admission and are left pending rather than inferred from later summaries." },
              { area: "production_design", status: "research_pending", note: "No sufficiently specific source-backed production-design or props workflow is established by the admission evidence." },
              { area: "costume_makeup", status: "research_pending", note: "Costume, makeup and hair practice remain unclaimed because the reviewed admission sources do not document them at production-workflow depth." },
              { area: "cinematography", status: "source_verified", note: "The source set establishes Super VHS capture as a low-cost production choice. Composition, camera body, lenses, exposure and operator workflow remain unset." },
              { area: "lighting", status: "research_pending", note: "No lighting units, ratios, filtration or exposure practice are inferred from the fact of Super VHS production." },
              { area: "camera_format", status: "source_verified", note: "SAGE research identifies Super VHS capture in the early video-film production context; no unsupported camera model, tape-stock variant or transfer chain is added." },
              { area: "editing", status: "research_pending", note: "Straight-to-home-video circulation is distribution evidence, not proof of a particular editing system; edit hardware and workflow remain unset." },
              { area: "sound_design", status: "research_pending", note: "The reviewed admission sources do not establish production-sound, dialogue-recording or final-mix hardware and workflow at sufficient specificity." },
              { area: "music", status: "research_pending", note: "Music is not required for the representation-gap admission and no score-production workflow is inferred." },
              { area: "effects_animation", status: "not_central", note: "Effects and animation are not central to the verified industry-system case and no effects workflow is claimed." },
              { area: "documentary_method", status: "not_central", note: "Living in Bondage is treated as a fictional video feature; academic and institutional sources are production-history evidence, not a documentary method inside the film." },
            ],
          } as const satisfies FilmHistoryProfile;
          EOF

          python3 - <<'PY'
          from pathlib import Path

          p = Path('src/ui/data/scenarioFilmStudyMap.ts')
          s = p.read_text()
          import_anchor = 'import { shiriFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenShiri";\n'
          if s.count(import_anchor) != 1:
              raise SystemExit(f'Film Study import anchor drifted: {s.count(import_anchor)}')
          s = s.replace(import_anchor, import_anchor + 'import { livingInBondageFilmHistoryProfile } from "./scenarioFilmStudyRepresentationLivingInBondage";\n', 1)
          registry_anchor = '  [shiriFilmHistoryProfile.scenarioId]: shiriFilmHistoryProfile,\n'
          if s.count(registry_anchor) != 1:
              raise SystemExit(f'Film Study registry anchor drifted: {s.count(registry_anchor)}')
          s = s.replace(registry_anchor, registry_anchor + '  [livingInBondageFilmHistoryProfile.scenarioId]: livingInBondageFilmHistoryProfile,\n', 1)
          p.write_text(s)
          PY

'''
s = s.replace(anchor, film_study_block + anchor, 1)

old_evidence = "              'evidence_paths': ['src/ui/data/scenarioProductionVerificationLivingInBondage.ts'],"
new_evidence = "              'evidence_paths': ['src/ui/data/scenarioProductionVerificationLivingInBondage.ts', 'src/ui/data/scenarioFilmStudyRepresentationLivingInBondage.ts'],"
if s.count(old_evidence) != 1:
    raise SystemExit(f'coverage evidence anchor drifted: {s.count(old_evidence)}')
s = s.replace(old_evidence, new_evidence, 1)

stage_anchor = "            src/ui/data/scenarioProductionVerificationLivingInBondage.ts \\\n            src/ui/data/scenarioProductionVerificationRegistry.ts \\\n"
stage_new = "            src/ui/data/scenarioProductionVerificationLivingInBondage.ts \\\n            src/ui/data/scenarioFilmStudyRepresentationLivingInBondage.ts \\\n            src/ui/data/scenarioFilmStudyMap.ts \\\n            src/ui/data/scenarioProductionVerificationRegistry.ts \\\n"
if s.count(stage_anchor) != 1:
    raise SystemExit(f'commit staging anchor drifted: {s.count(stage_anchor)}')
s = s.replace(stage_anchor, stage_new, 1)

count_anchor = '          test "$(git diff --cached --name-only | wc -l)" -eq 8\n'
if s.count(count_anchor) != 1:
    raise SystemExit(f'commit file-count anchor drifted: {s.count(count_anchor)}')
s = s.replace(count_anchor, '          test "$(git diff --cached --name-only | wc -l)" -eq 11\n', 1)

path.write_text(s)
