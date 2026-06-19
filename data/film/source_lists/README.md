# Film source lists

This folder is for raw or semi-raw imported source lists used to seed HG Film Producer scenarios.

Expected canonical CSV path:

```text
data/film/source_lists/imdb_ls000064637.csv
```

The currently committed scenario seed is already imported from IMDb list `ls000064637` and contains 161 scenarios in:

```text
data/film/scenarios/film_scenarios_seed.json
```

The raw CSV should be committed here when the exact IMDb export file is available in GitHub/Codex. Keep the filename stable so the importer command remains:

```bash
node tools/importers/import_imdb_list_to_scenarios.mjs data/film/source_lists/imdb_ls000064637.csv data/film/scenarios/film_scenarios_seed.json
```
