import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const manilaClawsLightProductionCaseVerification = {
  scenarioId: "scenario_manila_in_the_claws_of_light_1975",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Criterion, The Film Foundation, BFI and Festival de Cannes support Manila in the Claws of Light as a 1975 Philippine film directed by Lino Brocka and adapted by Clodualdo Del Mundo Jr. from Edgardo Reyes's novel. Criterion credits Mike De Leon and Severino Manotok Jr. as producers, De Leon as director of photography, Ding Austria as camera operator, Edgardo Jarlego and Ike Jarlego Jr. as editors, Luis Reyes and Ramon Reyes for sound, Max Jocson for original music and Socrates Topacio as art director. Criterion scholarship records that De Leon offered Brocka resources to make the adaptation, that Brocka mixed professional and nonprofessional performers and used locally recruited extras in Manila locations, and that the male-prostitution subplot added for the film was shortened for international release, with excised scenes never restored. The case separates the pre-martial-law story period from production/release under Ferdinand Marcos's 1975 martial-law regime. Runtime provenance is preserved rather than normalized into invented cuts: Film Foundation and Cannes list 124 minutes, Criterion and BFI 125, and BFI Player 126. Film Foundation documents the separate 2013 restoration from original camera and sound negatives preserved at the BFI National Archive, with Mike De Leon guiding grading. The case refuses unsupported camera bodies, lenses, film stock, lighting ratios, microphone models and exact shooting dates.",
  sources: [
    {
      title: "Manila in the Claws of Light",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/29221-manila-in-the-claws-of-light",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion records the 1975 Philippine color 1.85:1 presentation, 125-minute runtime, Brocka, Manotok and De Leon production credits, Del Mundo/Reyes adaptation, De Leon/Austria camera credits, Jarlego editing, Reyes sound, Jocson music, Topacio art direction and the separate 2013 restoration."
    },
    {
      title: "Manila in the Claws of Light: A Proletarian Inferno",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5741-manila-in-the-claws-of-light-a-proletarian-inferno",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion scholarship documents martial-law censorship, De Leon's production-resource role, the Reyes source novel, mixed casting, Manila locations, labor politics, the added male-prostitution subplot and its shortened international-release form, plus the film's stylized reportage, cinematography and sound tensions."
    },
    {
      title: "Bringing the Grit to Philippine Cinema",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/5748-bringing-the-grit-to-philippine-cinema",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography"],
      note: "Criterion production material documents Brocka's location-shot realism and deliberate mix of professional and nonprofessional actors, including recruiting extras from communities around the Sunog-Apog canal location."
    },
    {
      title: "Manila in the Claws of Light / Maynila sa mga kuko ng liwanag",
      publisher: "The Film Foundation – World Cinema Project",
      url: "https://www.film-foundation.org/world-cinema?page=5&sortBy=country&sortOrder=1",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Film Foundation records Brocka, De Leon and Manotok, Jarlego editing, Jocson music, Reyes sound, color and 124 minutes, and documents the 2013 restoration from original camera and sound negatives preserved at the BFI National Archive with De Leon guiding grading."
    },
    {
      title: "Maynila: Sa mga Kuko ng Liwanag (Manila in the Claws of Light)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/maynila-sa-mga-kuko-ng-liwanag/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes Classics records the 1975 film at 124 minutes, Brocka, Del Mundo, De Leon, the Jarlego editors, Jocson music and Luis Reyes sound as an institutional restoration/circulation record."
    },
    {
      title: "Maynila sa mga kuko ng liwanag (1975)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/e7c93a2a-7243-56c8-96d4-9b4602b977ed/maynila-sa-mga-kuko-ng-liwanag",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI records the Philippine 1975 film, Brocka, Severino Manotok Jr., Del Mundo and a 125-minute runtime listing, retained as provenance alongside Film Foundation/Cannes 124 and BFI Player 126."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
