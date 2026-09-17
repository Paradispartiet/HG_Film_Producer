import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_SETUP_COPY } from "./studioSetupCopy.js";

type ScriptTemplatePresentationInput = {
  readonly id: string;
  readonly title: string;
  readonly defaultTheme: string;
};

type ScriptTemplatePresentation = {
  readonly title: string;
  readonly defaultTheme: string;
};

type ScriptTemplateCopyWithPresentation = {
  readonly presentation?: (template: ScriptTemplatePresentationInput) => ScriptTemplatePresentation;
};

const canonicalTemplates = [
  {
    id: "script_template_intimate_drama",
    title: "Intimate drama",
    defaultTheme: "What we owe the people we love.",
  },
  {
    id: "script_template_urban_thriller",
    title: "Urban thriller",
    defaultTheme: "Trust is the most dangerous thing to give away.",
  },
  {
    id: "script_template_low_budget_horror",
    title: "Low budget horror",
    defaultTheme: "The thing we refuse to look at is the thing that finds us.",
  },
  {
    id: "script_template_documentary_portrait",
    title: "Documentary portrait",
    defaultTheme: "A life is more than the story it tells about itself.",
  },
  {
    id: "script_template_romantic_comedy",
    title: "Romantic comedy",
    defaultTheme: "We have to lose the version of ourselves that cannot love.",
  },
  {
    id: "script_template_social_realism",
    title: "Social realism",
    defaultTheme: "Ordinary lives bend under pressures they did not choose.",
  },
] as const satisfies readonly ScriptTemplatePresentationInput[];

function scriptTemplatePresentation(language: (typeof FILMWORK_LANGUAGES)[number]) {
  return (STUDIO_SETUP_COPY[language].scriptTemplate as unknown as ScriptTemplateCopyWithPresentation).presentation;
}

test("Script Templates expose localized presentation for every canonical template id", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const present = scriptTemplatePresentation(language);
    assert.equal(typeof present, "function", `${language} script-template presentation formatter`);
    assert.ok(present);

    for (const template of canonicalTemplates) {
      const presentation = present(template);
      assert.ok(presentation.title.trim(), `${language} ${template.id} title`);
      assert.ok(presentation.defaultTheme.trim(), `${language} ${template.id} defaultTheme`);
    }
  }
});

test("English Script Template presentation preserves canonical wording", () => {
  const present = scriptTemplatePresentation("en");
  assert.ok(present);

  for (const template of canonicalTemplates) {
    assert.deepEqual(
      present(template),
      { title: template.title, defaultTheme: template.defaultTheme },
      template.id,
    );
  }
});

test("Script Template presentation localizes visible title and default theme", () => {
  const nb = scriptTemplatePresentation("nb");
  const fr = scriptTemplatePresentation("fr");
  const pt = scriptTemplatePresentation("pt");
  assert.ok(nb);
  assert.ok(fr);
  assert.ok(pt);

  assert.deepEqual(nb(canonicalTemplates[0]), {
    title: "Intimt drama",
    defaultTheme: "Hva vi skylder menneskene vi elsker.",
  });
  assert.deepEqual(fr(canonicalTemplates[3]), {
    title: "Portrait documentaire",
    defaultTheme: "Une vie est plus que l’histoire qu’elle raconte sur elle-même.",
  });
  assert.deepEqual(pt(canonicalTemplates[5]), {
    title: "Realismo social",
    defaultTheme: "As vidas comuns cedem sob pressões que não escolheram.",
  });
});
