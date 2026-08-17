from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected one marker, got {count}: {old!r}")
    p.write_text(text.replace(old, new, 1), encoding="utf-8")


replace_once(
    "src/core/filmHistoryBook.ts",
    'import { filmHistoryChapterSeven } from "./filmHistoryChapterSeven.js";\n',
    'import { filmHistoryChapterSeven } from "./filmHistoryChapterSeven.js";\nimport { filmHistoryChapterEight } from "./filmHistoryChapterEight.js";\n',
)

old_outline = '''      outline(
        "french-avant-gardes",
        8,
        "French Impressionism, Surrealism and the avant-gardes",
        "1918–1930",
        "French filmmakers and artists pursue photogénie, subjective vision, abstraction, Surrealism and alternatives to commercial narrative norms.",
        ["Define photogénie in historical context.", "Compare Impressionist and Surrealist strategies.", "Connect avant-garde production to alternative institutions."],
        ["photogénie", "French Impressionism", "Surrealism", "pure cinema", "avant-garde"],
      ),'''
replace_once("src/core/filmHistoryBook.ts", old_outline, "      filmHistoryChapterEight,")

old_test = '''test("only Chapters 8–30 remain explicit outlines after Chapter 7 completion", () => {
  const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 7);
  assert.equal(completed.length, 7);
  assert.ok(completed.every((chapter) => chapter.status === "full"));
  assert.ok(completed.every((chapter) => chapter.sections.length > 0));

  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 7);
  assert.equal(remaining.length, 23);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});'''
new_test = '''test("only Chapters 9–30 remain explicit outlines after Chapter 8 completion", () => {
  const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 8);
  assert.equal(completed.length, 8);
  assert.ok(completed.every((chapter) => chapter.status === "full"));
  assert.ok(completed.every((chapter) => chapter.sections.length > 0));

  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 8);
  assert.equal(remaining.length, 22);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});'''
replace_once("src/core/filmHistoryBook.test.ts", old_test, new_test)
