from pathlib import Path

p = Path("src/core/filmHistoryChapterNineAuditContract.test.ts")
text = p.read_text()
text = text.replace(
    '  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["Battleship Potemkin", "Man with a Movie Camera"]);\n',
    '  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["Battleship Potemkin", "Man with a Movie Camera", "Mother", "The Fall of the Romanov Dynasty", "Earth", "October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"]);\n',
)
text = text.replace(
    '  assert.deepEqual(resolved.byDecision.P0, ["Mother", "The Fall of the Romanov Dynasty", "Earth"]);\n',
    '  assert.deepEqual(resolved.byDecision.P0, []);\n',
)
text = text.replace(
    '  assert.deepEqual(resolved.byDecision.P1, ["October", "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks"]);\n',
    '  assert.deepEqual(resolved.byDecision.P1, []);\n',
)
old_queue = '''  assert.deepEqual(resolved.recommendedNewProductionCases, [
    "Mother",
    "The Fall of the Romanov Dynasty",
    "Earth",
    "October",
    "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks",
  ]);'''
text = text.replace(old_queue, '  assert.deepEqual(resolved.recommendedNewProductionCases, []);')
# The source-code-level audit assertions must move with the resolved matrix too.
text = text.replace('  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 410;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 415;/);')
needle = '  assert.match(audit, /period: "1917–1930"/);\n'
new_assertions = '''  assert.match(audit, /period: "1917–1930"/);
  assert.match(audit, /USE_EXISTING: \\["Battleship Potemkin", "Earth", "Man with a Movie Camera", "Mother", "October", "The Extraordinary Adventures of Mr\\. West in the Land of the Bolsheviks", "The Fall of the Romanov Dynasty"\\]/);
  assert.match(audit, /P0: \\[\\]/);
  assert.match(audit, /P1: \\[\\]/);
'''
text = text.replace(needle, new_assertions)
p.write_text(text)
