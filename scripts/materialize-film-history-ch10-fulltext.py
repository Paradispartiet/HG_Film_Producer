from pathlib import Path

book_path = Path("src/core/filmHistoryBook.ts")
book = book_path.read_text()

import_anchor = 'import { filmHistoryChapterNine } from "./filmHistoryChapterNine.js";\n'
if import_anchor not in book:
    raise SystemExit("missing Chapter 9 import anchor")
if 'filmHistoryChapterTen' not in book:
    book = book.replace(import_anchor, import_anchor + 'import { filmHistoryChapterTen } from "./filmHistoryChapterTen.js";\n', 1)

start_token = '      outline(\n        "silent-beyond-west",'
start = book.find(start_token)
if start < 0:
    raise SystemExit("Chapter 10 outline start not found")
end_token = '      ),\n    ],'
end = book.find(end_token, start)
if end < 0:
    raise SystemExit("Chapter 10 outline end not found")
end += len('      ),')
book = book[:start] + '      filmHistoryChapterTen,' + book[end:]
book_path.write_text(book)

book_test_path = Path("src/core/filmHistoryBook.test.ts")
book_test = book_test_path.read_text()
old = '''test("only Chapters 10–30 remain explicit outlines after Chapter 9 completion", () => {
  const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 9);
  assert.equal(completed.length, 9);
  assert.ok(completed.every((chapter) => chapter.status === "full"));
  assert.ok(completed.every((chapter) => chapter.sections.length > 0));

  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 9);
  assert.equal(remaining.length, 21);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});'''
new = '''test("only Chapters 11–30 remain explicit outlines after Chapter 10 completion", () => {
  const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 10);
  assert.equal(completed.length, 10);
  assert.ok(completed.every((chapter) => chapter.status === "full"));
  assert.ok(completed.every((chapter) => chapter.sections.length > 0));

  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 10);
  assert.equal(remaining.length, 20);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});'''
if old not in book_test:
    raise SystemExit("Chapter completion book-test block not found")
book_test_path.write_text(book_test.replace(old, new, 1))

print("Materialized Chapter 10 fulltext into canonical 30-chapter Film History book")
