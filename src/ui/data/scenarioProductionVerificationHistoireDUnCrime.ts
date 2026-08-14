import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const histoireDUnCrimeProductionCaseVerification = {
  scenarioId: "scenario_histoire_d_un_crime_1901",
  status: "verified",
  verifiedAt: "2026-08-14",
  summary: "Institutional Pathé/CNC evidence and film-history scholarship support a 1901 Ferdinand Zecca social-crime drama built as a longer multi-tableau narrative within Pathé's newly organized production service. The prison episode represents earlier life inside a distinct scenic plane while present confinement remains visible, so the case teaches retrospective memory and narrative time without asserting that Zecca uniquely invented the cinematic flashback.",
  sources: [
    {
      title: "Il y a 160 ans naissait Ferdinand Zecca",
      publisher: "Centre national du cinéma et de l'image animée (CNC)",
      url: "https://www.cnc.fr/cinema/actualites/il-y-a-160-ans-naissait-ferdinand-zecca_2165740",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "CNC states that Pathé hired Zecca in 1900 and identifies Histoire d'un crime as his 1901 social drama, highlighting increased footage, storytelling in multiple tableaux and audience success. It supports narrative expansion but does not supply a universal 'first flashback' claim."
    },
    {
      title: "Pathé – Our history",
      publisher: "Pathé",
      url: "https://www.pathe.com/en/pathe/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Pathé's corporate history dates Zecca's launch of the company's film-production service and creation of its first studio to 1901, placing the film inside an emerging organized production system rather than treating it as an isolated formal invention."
    },
    {
      title: "Histoire de Pathé",
      publisher: "Fondation Jérôme Seydoux-Pathé",
      url: "https://www.fondation-jeromeseydoux-pathe.com/cms/histoire_pathe",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The Pathé foundation documents Zecca directing film production from 1901 and developing differentiated catalogue genres including dramatic and realistic scenes. This anchors the film's social-drama form in company-level production and genre expansion."
    },
    {
      title: "Pathé 358 – Histoire d'un crime",
      publisher: "GRIMH / early-cinema historical archive",
      url: "https://www.grimh.org/index.php?Itemid=675&id=666&lang=fr&layout=edit&option=com_content&view=article",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The archival dossier reproduces historical testimony from the Cinémathèque française research commission and Charles Pathé concerning Zecca's authorship, the crime-to-execution story, rapid production, production cost, sales and commercial success. These claims are used as attributed historical evidence, not as neutral modern metadata."
    },
    {
      title: "Historical Dictionary of French Cinema",
      publisher: "Scarecrow Press / Bloomsbury",
      url: "https://www.bloomsbury.com/us/historical-dictionary-of-french-cinema-9780810854918/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The scholarly reference work by Dayna Oscherwitz and MaryEllen Higgins treats Histoire d'un crime as an early narrative and realist crime film and describes the prison recollection as two scenic sets visible within the same composition. The case uses that concrete staging description while deliberately avoiding an absolute first-flashback formulation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
