from pathlib import Path

book_path = Path("src/core/filmHistoryBook.ts")
book = book_path.read_text()

old_import = 'import { filmHistoryChapterEight } from "./filmHistoryChapterEight.js";\n'
new_import = old_import + 'import { filmHistoryChapterNine } from "./filmHistoryChapterNine.js";\n'
if book.count(old_import) != 1:
    raise SystemExit("unexpected Chapter 8 import count")
if 'filmHistoryChapterNine } from "./filmHistoryChapterNine.js"' not in book:
    book = book.replace(old_import, new_import, 1)

old_outline = '''      outline(
        "soviet-montage",
        9,
        "Revolution and Soviet Montage",
        "1917–1930",
        "Kuleshov, Eisenstein, Vertov, Pudovkin and others make editing a site of political theory, perception and formal experiment.",
        ["Compare major montage theories.", "Analyze editing as argument rather than continuity alone.", "Place Soviet production inside revolutionary institutions."],
        ["montage", "Kuleshov effect", "collision", "kino-eye", "constructivism"],
      ),'''
if old_outline not in book:
    raise SystemExit("Chapter 9 outline marker missing")
book = book.replace(old_outline, "      filmHistoryChapterNine,", 1)
book_path.write_text(book)

book_test_path = Path("src/core/filmHistoryBook.test.ts")
book_test = book_test_path.read_text()
replacements = {
    'test("only Chapters 9–30 remain explicit outlines after Chapter 8 completion", () => {': 'test("only Chapters 10–30 remain explicit outlines after Chapter 9 completion", () => {',
    'const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 8);': 'const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 9);',
    'assert.equal(completed.length, 8);': 'assert.equal(completed.length, 9);',
    'const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 8);': 'const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 9);',
    'assert.equal(remaining.length, 22);': 'assert.equal(remaining.length, 21);',
}
for old, new in replacements.items():
    if book_test.count(old) != 1:
        raise SystemExit(f"unexpected book-test marker count for: {old}")
    book_test = book_test.replace(old, new, 1)
book_test_path.write_text(book_test)

print("Materialized Chapter 9 full text and reconciled book state to 9 full / 21 outlines")
