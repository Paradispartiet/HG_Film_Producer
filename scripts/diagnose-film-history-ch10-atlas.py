import json
import re
import unicodedata
from pathlib import Path

ROOT = Path.cwd()
CORE = ROOT / "src" / "core"
SEED = ROOT / "data" / "film" / "scenarios" / "film_scenarios_seed.json"
EXPECTED_ATLAS_COUNT = 415

EXPANSIONS = [
    "earlyCinemaExpansion.ts",
    "chapterOneEarlyCinemaExpansion.ts",
    "chapterOneRescuedByRoverExpansion.ts",
    "chapterTwoExhibitionExpansion.ts",
    "chapterThreeNarrativeExpansion.ts",
    "chapterFourIndustryExpansion.ts",
    "chapterFiveInternationalExpansion.ts",
    "chapterSixHollywoodExpansion.ts",
    "chapterSevenWeimarExpansion.ts",
    "chapterEightFrenchAvantGardeExpansion.ts",
    "chapterNineSovietMontageExpansion.ts",
    "modernCanonExpansion.ts",
    "priorityIndieExpansion.ts",
    "eastAsianAuteurExpansion.ts",
    "japaneseAuteurExpansion.ts",
    "southKoreanCinemaExpansion.ts",
    "southSoutheastAsianExpansion.ts",
    "festivalWinners1981To2009Expansion.ts",
    "festivalWinners2010To2024Expansion.ts",
    "scandinavianEuropeanExpansion.ts",
    "easternIberianBritishExpansion.ts",
    "italyFranceGermanyBeneluxExpansion.ts",
]

CANDIDATES = [
    {"title": "Orochi", "originalTitle": "Orochi", "year": 1925, "aliases": ["Serpent"]},
    {"title": "A Page of Madness", "originalTitle": "Kurutta ichipeiji", "year": 1926, "aliases": ["Kurutta ippēji", "Kurutta Ichipeiji"]},
    {"title": "Crossroads", "originalTitle": "Jūjiro", "year": 1928, "aliases": ["Jujiro", "Crossways"]},
    {"title": "Souls on the Road", "originalTitle": "Rojō no Reikon", "year": 1921, "aliases": ["Rojo no Reikon"]},
    {"title": "Laborer's Love", "originalTitle": "Laogong zhi aiqing", "year": 1922, "aliases": ["Labourer's Love", "Romance of a Fruit Peddler"]},
    {"title": "The Romance of the Western Chamber", "originalTitle": "Xixiang ji", "year": 1927, "aliases": ["Romance of the Western Chamber"]},
    {"title": "The Red Heroine", "originalTitle": "Hongxia", "year": 1929, "aliases": ["Red Heroine"]},
    {"title": "The Burning of the Red Lotus Temple", "originalTitle": "Huoshao Hongliansi", "year": 1928, "aliases": ["Burning of the Red Lotus Temple"]},
    {"title": "Raja Harishchandra", "originalTitle": "Raja Harishchandra", "year": 1913, "aliases": []},
    {"title": "Kaliya Mardan", "originalTitle": "Kaliya Mardan", "year": 1919, "aliases": ["Kaliya Mardan (The Childhood of Krishna)"]},
    {"title": "The Light of Asia", "originalTitle": "Prem Sanyas", "year": 1925, "aliases": ["Prem Sanyas", "Die Leuchte Asiens"]},
    {"title": "Shiraz", "originalTitle": "Shiraz: A Romance of India", "year": 1928, "aliases": ["Shiraz: A Romance of India"]},
    {"title": "A Throw of Dice", "originalTitle": "Prapancha Pash", "year": 1929, "aliases": ["Prapancha Pash"]},
    {"title": "Afgrunden", "originalTitle": "Afgrunden", "year": 1910, "aliases": ["The Abyss"]},
    {"title": "Ingeborg Holm", "originalTitle": "Ingeborg Holm", "year": 1913, "aliases": []},
    {"title": "The Outlaw and His Wife", "originalTitle": "Berg-Ejvind och hans hustru", "year": 1918, "aliases": ["The Outlaw and His Wife (Berg-Ejvind och hans hustru)"]},
    {"title": "Sir Arne's Treasure", "originalTitle": "Herr Arnes pengar", "year": 1919, "aliases": ["Sir Arne's Treasure (Herr Arnes pengar)"]},
    {"title": "Erotikon", "originalTitle": "Erotikon", "year": 1920, "aliases": []},
    {"title": "The Phantom Carriage", "originalTitle": "Körkarlen", "year": 1921, "aliases": ["Korkarlen", "The Phantom Chariot"]},
    {"title": "Häxan", "originalTitle": "Häxan", "year": 1922, "aliases": ["Haxan", "Witchcraft Through the Ages"]},
    {"title": "Gösta Berling's Saga", "originalTitle": "Gösta Berlings saga", "year": 1924, "aliases": ["Gosta Berling's Saga", "The Saga of Gosta Berling"]},
    {"title": "Growth of the Soil", "originalTitle": "Markens grøde", "year": 1921, "aliases": ["Markens grode"]},
    {"title": "The Sentimental Bloke", "originalTitle": "The Sentimental Bloke", "year": 1919, "aliases": []},
    {"title": "El automóvil gris", "originalTitle": "El automóvil gris", "year": 1919, "aliases": ["The Grey Automobile", "The Gray Automobile", "El automovil gris"]},
]

def normalize(value):
    value = unicodedata.normalize("NFKD", str(value or ""))
    value = "".join(ch for ch in value if not unicodedata.combining(ch)).lower().replace("&", "and")
    return " ".join(re.findall(r"[a-z0-9]+", value))

def accepted(item):
    return {normalize(value) for value in [item.get("title"), item.get("originalTitle"), *item.get("aliases", [])] if normalize(value)}

def matches(left, right):
    if left.get("id") and right.get("id") and left["id"] == right["id"]:
        return True
    return left.get("year") == right.get("year") and bool(accepted(left) & accepted(right))

def matching_bracket(source, start, open_char, close_char):
    depth = 0
    quote = None
    escaped = False
    for index in range(start, len(source)):
        ch = source[index]
        if quote:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                quote = None
            continue
        if ch in {'"', "'", '`'}:
            quote = ch
            continue
        if ch == open_char:
            depth += 1
        elif ch == close_char:
            depth -= 1
            if depth == 0:
                return index
    raise RuntimeError(f"unmatched {open_char}{close_char}")

def top_level_objects(array_source):
    objects = []
    index = 0
    while index < len(array_source):
        if array_source[index] != "{":
            index += 1
            continue
        end = matching_bracket(array_source, index, "{", "}")
        objects.append(array_source[index:end + 1])
        index = end + 1
    return objects

def string_field(source, field):
    match = re.search(rf'\b{re.escape(field)}\s*:\s*"((?:\\.|[^"\\])*)"', source)
    if not match:
        raise RuntimeError(f"missing {field}: {source[:120]}")
    return json.loads('"' + match.group(1) + '"')

def number_field(source, field):
    match = re.search(rf'\b{re.escape(field)}\s*:\s*(\d+)', source)
    if not match:
        raise RuntimeError(f"missing {field}: {source[:120]}")
    return int(match.group(1))

def aliases_field(source):
    match = re.search(r'\baliases\s*:\s*\[([^\]]*)\]', source)
    if not match:
        return []
    return [json.loads('"' + item + '"') for item in re.findall(r'"((?:\\.|[^"\\])*)"', match.group(1))]

def parse_expansion(file_name):
    source = (CORE / file_name).read_text()
    declaration = re.search(r'export const\s+\w+Definitions\s*=\s*\[', source)
    if not declaration:
        raise RuntimeError(f"definitions array missing in {file_name}")
    array_start = source.find("[", declaration.start())
    array_end = matching_bracket(source, array_start, "[", "]")
    return [
        {
            "id": string_field(obj, "id"),
            "title": string_field(obj, "title"),
            "originalTitle": string_field(obj, "originalTitle"),
            "aliases": aliases_field(obj),
            "year": number_field(obj, "year"),
        }
        for obj in top_level_objects(source[array_start + 1:array_end])
    ]

seed = json.loads(SEED.read_text())
atlas = [
    {
        "id": item["id"],
        "title": item["film"]["title"],
        "originalTitle": item["film"]["original_title"],
        "aliases": [],
        "year": item["film"]["year"],
        "origin": "film_scenarios_seed.json",
    }
    for item in seed["scenarios"]
]
expansion_summary = []
for file_name in EXPANSIONS:
    appended = 0
    matched_existing = 0
    for definition in parse_expansion(file_name):
        if any(matches(item, definition) for item in atlas):
            matched_existing += 1
        else:
            atlas.append({**definition, "origin": file_name})
            appended += 1
    expansion_summary.append({"fileName": file_name, "appended": appended, "matchedExisting": matched_existing})

if len(atlas) != EXPECTED_ATLAS_COUNT:
    raise RuntimeError(f"expected {EXPECTED_ATLAS_COUNT} Atlas films, found {len(atlas)}")

results = []
for candidate in CANDIDATES:
    found = [item for item in atlas if matches(item, candidate)]
    results.append({
        **candidate,
        "matches": len(found),
        "scenarioId": found[0]["id"] if len(found) == 1 else None,
        "origin": found[0]["origin"] if len(found) == 1 else None,
    })

report = {
    "schemaVersion": "diagnostic-1.0",
    "chapter": {"number": 10, "id": "silent-beyond-west", "title": "Silent cinemas beyond the usual canon", "period": "1910s–1929"},
    "atlas": {"expectedCount": EXPECTED_ATLAS_COUNT, "actualCount": len(atlas), "expansionOrder": expansion_summary},
    "candidates": results,
    "existing": [item["title"] for item in results if item["matches"] == 1],
    "missing": [item["title"] for item in results if item["matches"] == 0],
    "ambiguous": [item["title"] for item in results if item["matches"] > 1],
}
output = ROOT / "docs" / "film-history-chapter-ten-atlas-diagnostic.json"
output.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
print(json.dumps(report, indent=2, ensure_ascii=False))
if report["ambiguous"]:
    raise RuntimeError("ambiguous Chapter 10 candidate matches: " + ", ".join(report["ambiguous"]))
