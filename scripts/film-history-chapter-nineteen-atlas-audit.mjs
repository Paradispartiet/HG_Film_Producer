import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const coreDirectory = path.join(root, "src", "core");
const dataDirectory = path.join(root, "src", "ui", "data");
const seedPath = path.join(root, "data", "film", "scenarios", "film_scenarios_seed.json");
const filmScenariosPath = path.join(dataDirectory, "filmScenarios.ts");
const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = 539;
const EXPECTED_ATLAS_COUNT = 540;

const candidates = [
  {
    "title": "Tenet",
    "originalTitle": "Tenet",
    "year": 2020,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Photochemical 65mm/IMAX production and a pandemic-era theatrical release make production-format persistence and the release-window crisis visible as separate systems."
  },
  {
    "title": "Nomadland",
    "originalTitle": "Nomadland",
    "year": 2020,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "American independent location production with nonprofessional participants and later theatrical/platform circulation makes production scale, documentary-adjacent performance and distribution distinct."
  },
  {
    "title": "Soul",
    "originalTitle": "Soul",
    "year": 2020,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Pixar feature animation and a pandemic-era direct-to-streaming release make mature CG production and disrupted theatrical circulation visible without treating distribution as production authorship."
  },
  {
    "title": "Collective",
    "originalTitle": "Colectiv",
    "year": 2020,
    "aliases": [
      "Colectiv"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Romanian observational documentary production makes access, institutional accountability, nonfiction evidence and transnational festival/distribution circulation distinct."
  },
  {
    "title": "Quo Vadis, Aida?",
    "originalTitle": "Quo Vadis, Aida?",
    "year": 2020,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Bosnian-led European co-production and historical reconstruction make public funding, regional authorship, language and representation responsibilities visible."
  },
  {
    "title": "Another Round",
    "originalTitle": "Druk",
    "year": 2020,
    "aliases": [
      "Druk"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Danish-European ensemble production provides a public-funding and regional-industry comparison inside the pandemic-disrupted release period."
  },
  {
    "title": "Never Rarely Sometimes Always",
    "originalTitle": "Never Rarely Sometimes Always",
    "year": 2020,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Low-scale American independent location production foregrounds performer care, access and intimate social realism rather than technology-led production history."
  },
  {
    "title": "Wolfwalkers",
    "originalTitle": "Wolfwalkers",
    "year": 2020,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Irish hand-drawn feature animation makes 2D craft, international co-production and platform-era distribution visible as a countercurrent to CG dominance."
  },
  {
    "title": "Days",
    "originalTitle": "Rizi",
    "year": 2020,
    "aliases": [
      "Rizi"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Tsai Ming-liang's low-scale transnational art-cinema production preserves durational, location-centered practice inside a platform- and pandemic-shaped decade."
  },
  {
    "title": "The Disciple",
    "originalTitle": "The Disciple",
    "year": 2020,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Marathi-language Indian independent production makes music-performance training, regional authorship and global festival/platform circulation visible outside Hindi-centered industry narratives."
  },
  {
    "title": "Dune",
    "originalTitle": "Dune",
    "year": 2021,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Large-format digital cinematography, extensive VFX, location/stage integration and premium theatrical exhibition make blockbuster production and post interdependence explicit."
  },
  {
    "title": "The Power of the Dog",
    "originalTitle": "The Power of the Dog",
    "year": 2021,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Streaming-backed prestige production in New Zealand makes platform financing, location substitution, authorship and theatrical qualification separate institutional layers."
  },
  {
    "title": "Drive My Car",
    "originalTitle": "Doraibu mai ka",
    "year": 2021,
    "aliases": [
      "Doraibu mai ka"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Japanese location production and multilingual performance connect regional authorship, adaptation and global festival/distribution circulation."
  },
  {
    "title": "Flee",
    "originalTitle": "Flugt",
    "year": 2021,
    "aliases": [
      "Flugt"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Animated documentary makes recorded testimony, anonymity, archive, reconstruction and animation labor separate evidentiary and production systems."
  },
  {
    "title": "Titane",
    "originalTitle": "Titane",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "French-Belgian independent production offers a body-performance, prosthetics and European co-production comparison beyond platform or camera technology."
  },
  {
    "title": "The Worst Person in the World",
    "originalTitle": "Verdens verste menneske",
    "year": 2021,
    "aliases": [
      "Verdens verste menneske"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Norwegian-European production anchors Nordic public support, location work and international art-cinema circulation."
  },
  {
    "title": "Memoria",
    "originalTitle": "Memoria",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Thailand-Colombia-European transnational production makes cross-regional financing, location, language and sound-centered authorship visible."
  },
  {
    "title": "CODA",
    "originalTitle": "CODA",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Independent production followed by major platform acquisition makes accessibility, signed/spoken performance and financing-versus-distribution boundaries visible."
  },
  {
    "title": "The Green Knight",
    "originalTitle": "The Green Knight",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Independent fantasy production and pandemic-delayed circulation provide a craft-heavy practical/VFX comparison outside franchise scale."
  },
  {
    "title": "The Mitchells vs. the Machines",
    "originalTitle": "The Mitchells vs. the Machines",
    "year": 2021,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Stylized studio feature animation makes painterly linework, CG production and platform-acquired distribution a useful comparison to photoreal animation pipelines."
  },
  {
    "title": "Avatar: The Way of Water",
    "originalTitle": "Avatar: The Way of Water",
    "year": 2022,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Performance capture, virtual cinematography, underwater performance systems and stereoscopic exhibition make virtual production a mature integrated workflow."
  },
  {
    "title": "Top Gun: Maverick",
    "originalTitle": "Top Gun: Maverick",
    "year": 2022,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Aviation location work, compact cockpit camera systems and delayed event-theatrical release connect physical production risk, imaging engineering and exhibition recovery."
  },
  {
    "title": "Everything Everywhere All at Once",
    "originalTitle": "Everything Everywhere All at Once",
    "year": 2022,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Independent-scale production with dense visual-effects work makes small-team post, practical effects and rapid iteration a counterpoint to blockbuster VFX scale."
  },
  {
    "title": "Nope",
    "originalTitle": "Nope",
    "year": 2022,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Large-format capture, day-for-night imaging development, practical location design and VFX integration make contemporary image engineering and physical production inseparable."
  },
  {
    "title": "RRR",
    "originalTitle": "RRR",
    "year": 2022,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Telugu-language industrial-scale production and global circulation make Indian regional industry, action spectacle and transnational distribution visible without collapsing Indian cinemas into one system."
  },
  {
    "title": "Decision to Leave",
    "originalTitle": "Heojil kyolshim",
    "year": 2022,
    "aliases": [
      "Decision to Leave"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "South Korean commercial-auteur production makes camera, editorial and design precision visible within a mature regional industry and global festival circuit."
  },
  {
    "title": "All Quiet on the Western Front",
    "originalTitle": "Im Westen nichts Neues",
    "year": 2022,
    "aliases": [
      "Im Westen nichts Neues"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "German-led war production for a global platform makes European location production, large-scale physical craft and streaming commissioning distinct."
  },
  {
    "title": "Saint Omer",
    "originalTitle": "Saint Omer",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "French courtroom-centered production makes legal observation, performance restraint and documentary-derived research a low-scale countercurrent."
  },
  {
    "title": "Guillermo del Toro's Pinocchio",
    "originalTitle": "Guillermo del Toro's Pinocchio",
    "year": 2022,
    "aliases": [
      "Pinocchio"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Feature stop-motion production makes puppet fabrication, frame-by-frame performance and digital post a distinct animation pipeline within the streaming era."
  },
  {
    "title": "EO",
    "originalTitle": "EO",
    "year": 2022,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "Polish-European production centered on an animal protagonist makes multi-location logistics, animal-welfare boundaries and subjective image/sound design a distinct production comparison."
  },
  {
    "title": "Oppenheimer",
    "originalTitle": "Oppenheimer",
    "year": 2023,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "65mm and IMAX photochemical production, including large-format black-and-white work, makes film-stock and premium-format persistence central to 2020s production history."
  },
  {
    "title": "Barbie",
    "originalTitle": "Barbie",
    "year": 2023,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-scale studio construction, practical design and global theatrical event circulation provide a physical-production counterpoint to virtual-production narratives."
  },
  {
    "title": "Killers of the Flower Moon",
    "originalTitle": "Killers of the Flower Moon",
    "year": 2023,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Platform-backed financing with substantial theatrical release and community-situated historical production makes ownership, representation, location and distribution distinct."
  },
  {
    "title": "Poor Things",
    "originalTitle": "Poor Things",
    "year": 2023,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Purpose-built environments, miniature/optical traditions and contemporary digital post make stylized physical design and effects integration a major production case."
  },
  {
    "title": "The Zone of Interest",
    "originalTitle": "The Zone of Interest",
    "year": 2023,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Distributed fixed-camera observation, remote monitoring and offscreen sound design make production method and ethics of historical representation structurally linked but distinct."
  },
  {
    "title": "Godzilla Minus One",
    "originalTitle": "Gojira -1.0",
    "year": 2023,
    "aliases": [
      "Godzilla Minus One"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Japanese studio production with a comparatively compact VFX team makes regional effects infrastructure and resource scale visible beside Hollywood models."
  },
  {
    "title": "The Boy and the Heron",
    "originalTitle": "Kimitachi wa do ikiru ka",
    "year": 2023,
    "aliases": [
      "Kimitachi wa dou ikiru ka"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Studio Ghibli's hand-drawn feature production keeps labor-intensive 2D animation central in a decade of real-time and generative-image discourse."
  },
  {
    "title": "Four Daughters",
    "originalTitle": "Les filles d'Olfa",
    "year": 2023,
    "aliases": [
      "Les filles d'Olfa"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Tunisian-led hybrid documentary uses reenactment and performance to make testimony, absent subjects and reconstruction boundaries explicit."
  },
  {
    "title": "Anatomy of a Fall",
    "originalTitle": "Anatomie d'une chute",
    "year": 2023,
    "aliases": [
      "Anatomie d'une chute"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "French-European courtroom and location production anchors contemporary public co-production, multilingual performance and festival-to-theatrical circulation."
  },
  {
    "title": "Spider-Man: Across the Spider-Verse",
    "originalTitle": "Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "aliases": [
      "Spider Man Across the Spider Verse"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Large-scale stylized animation extends mixed rendering, linework, frame modulation and multi-world visual systems while making pipeline scale and labor coordination visible."
  },
  {
    "title": "Dune: Part Two",
    "originalTitle": "Dune: Part Two",
    "year": 2024,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Large-format digital capture, location/stage production, extensive VFX and premium-format exhibition show mature blockbuster coordination after the pandemic disruption."
  },
  {
    "title": "The Brutalist",
    "originalTitle": "The Brutalist",
    "year": 2024,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "VistaVision-origin photochemical production and 70mm presentation make revived legacy formats a deliberate contemporary production and exhibition choice."
  },
  {
    "title": "Flow",
    "originalTitle": "Straume",
    "year": 2024,
    "aliases": [
      "Flow"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Latvian independent feature animation built with a compact team and Blender-centered workflow makes small-scale software production globally visible."
  },
  {
    "title": "The Substance",
    "originalTitle": "The Substance",
    "year": 2024,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Practical prosthetic/body-effects work integrated with digital effects makes material transformation craft and post-production boundaries visible."
  },
  {
    "title": "Nickel Boys",
    "originalTitle": "Nickel Boys",
    "year": 2024,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "First-person visual design makes camera embodiment, performer eyelines, rigging and editorial perspective a production-system problem rather than a purely stylistic label."
  },
  {
    "title": "The Seed of the Sacred Fig",
    "originalTitle": "Dane-ye anjir-e ma'abed",
    "year": 2024,
    "aliases": [
      "The Seed of the Sacred Fig"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Iranian production under severe institutional constraints makes authorship, safety, legal risk, location and later international circulation distinct evidence layers."
  },
  {
    "title": "All We Imagine as Light",
    "originalTitle": "All We Imagine as Light",
    "year": 2024,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Indian-led international co-production makes Mumbai location work, public/private financing and festival circulation visible without treating international partners as authorship."
  },
  {
    "title": "Dahomey",
    "originalTitle": "Dahomey",
    "year": 2024,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Senegalese-French documentary production makes restitution, institutional access, object provenance and hybrid voice strategies separate production/evidence questions."
  },
  {
    "title": "Anora",
    "originalTitle": "Anora",
    "year": 2024,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "American independent location production and later global theatrical circulation provide a performer-centered, low-to-mid-scale counterpoint to platform blockbusters."
  },
  {
    "title": "Furiosa: A Mad Max Saga",
    "originalTitle": "Furiosa: A Mad Max Saga",
    "year": 2024,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Large-scale Australian action production makes practical vehicles, stunt work, location/stage construction and extensive digital post complementary rather than opposing systems."
  },
  {
    "title": "Sinners",
    "originalTitle": "Sinners",
    "year": 2025,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Large-format photochemical capture and premium IMAX exhibition make 65mm-format expansion and film-origin spectacle a continuing 2020s production system."
  },
  {
    "title": "One Battle After Another",
    "originalTitle": "One Battle After Another",
    "year": 2025,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Contemporary large-scale photochemical production makes revived VistaVision practice, location logistics and studio distribution a current format-persistence case."
  },
  {
    "title": "F1",
    "originalTitle": "F1",
    "year": 2025,
    "aliases": [
      "F1 The Movie"
    ],
    "role": "anchor_film",
    "decisionIfMissing": "P0",
    "chapterFunction": "Embedded motorsport location production and custom compact imaging systems make camera engineering, safety, live-event coordination and platform/studio partnership intersect."
  },
  {
    "title": "KPop Demon Hunters",
    "originalTitle": "KPop Demon Hunters",
    "year": 2025,
    "aliases": [],
    "role": "anchor_film",
    "decisionIfMissing": "P1",
    "chapterFunction": "Streaming-first feature animation with a globally circulating Korean-pop framework makes transnational cultural design, studio animation labor and platform distribution distinct."
  },
  {
    "title": "Sentimental Value",
    "originalTitle": "Affeksjonsverdi",
    "year": 2025,
    "aliases": [
      "Affeksjonsverdi"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Norwegian-led European co-production anchors Nordic authorship, public support, multilingual performance and festival-to-theatrical circulation."
  },
  {
    "title": "The Secret Agent",
    "originalTitle": "O Agente Secreto",
    "year": 2025,
    "aliases": [
      "O Agente Secreto"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Brazilian-led historical production makes Latin American regional authorship, period reconstruction and international co-production/circulation visible."
  },
  {
    "title": "It Was Just an Accident",
    "originalTitle": "It Was Just an Accident",
    "year": 2025,
    "aliases": [
      "Un simple accident"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Iranian filmmaking under institutional constraint makes production risk, transnational support and festival circulation distinct from narrative or political interpretation."
  },
  {
    "title": "Sirāt",
    "originalTitle": "Sirāt",
    "year": 2025,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Spanish-led desert location production and international co-production make extreme-location logistics, sound/music culture and regional financing visible."
  },
  {
    "title": "Resurrection",
    "originalTitle": "Kuang Ye Shi Dai",
    "year": 2025,
    "aliases": [
      "Resurrection"
    ],
    "role": "major_comparison",
    "decisionIfMissing": "P1",
    "chapterFunction": "Chinese auteur production at ambitious formal scale provides a contemporary Mainland Chinese comparison within globally circulating festival cinema."
  },
  {
    "title": "Sound of Falling",
    "originalTitle": "Sound of Falling",
    "year": 2025,
    "aliases": [],
    "role": "major_comparison",
    "decisionIfMissing": "P2",
    "chapterFunction": "German-European co-production and multi-period ensemble staging provide a low-effects, formally ambitious festival-cinema counterpoint to technology-led 2020s histories."
  }
];

const historicalObjects = [
  {
    "label": "Pandemic shutdown, return-to-work protocols and health-safety labor systems",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "COVID-19 temporarily halted production and introduced testing, zoning, PPE and department-specific restart systems; these measures were time-, jurisdiction- and contract-specific rather than a permanent universal workflow."
  },
  {
    "label": "Release-window rupture, PVOD, simultaneous streaming and theatrical recovery",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Closures, delays, premium VOD and streaming releases disrupted theatrical windows in 2020, followed by an uneven theatrical recovery; release strategy remains separate from how a film was financed or produced."
  },
  {
    "label": "Mature streaming commissioning, acquisition, residuals and audience-data transparency",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Platforms became major commissioners, financiers, acquirers and distributors, while labor agreements increasingly addressed streaming residuals and data; those roles must be distinguished title by title."
  },
  {
    "label": "Real-time virtual production, LED volumes and in-camera visual effects",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "LED volumes, real-time rendering, virtual scouting and tracked camera workflows expanded after earlier experiments, but virtual production is not synonymous with CGI, VFX, greenscreen or digital cinematography."
  },
  {
    "label": "Remote and cloud collaboration, distributed post and production-data workflows",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Pandemic constraints accelerated remote review and distributed collaboration while data-centric post continued to mature; cloud or remote participation never proves a title's exact software, storage or security topology."
  },
  {
    "label": "Generative AI, digital replicas and negotiated authorship or consent boundaries",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Generative AI and digital-replica bargaining created new contractual distinctions around writing, performer consent and synthetic material; guild rules are jurisdiction- and contract-specific rather than universal production law."
  },
  {
    "label": "Labor agreements, working conditions, rest, staffing and strike disruptions",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Crew and creative labor agreements, working-time protections and the 2023 US strikes made labor conditions a visible production-system variable, but industry events do not prove any individual title's schedule or staffing."
  },
  {
    "label": "Photochemical persistence and revival across 35mm, VistaVision, 65mm and IMAX",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Film-origin production remained active and in some high-profile cases expanded into legacy or large formats; persistence never implies aesthetic superiority or a reversal of digital dominance."
  },
  {
    "label": "Premium-format and event theatrical exhibition after pandemic disruption",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "IMAX, 70mm and other premium presentations became important to selected event releases during theatrical recovery, but exhibition format never proves original camera format."
  },
  {
    "label": "Animation plurality across CG, hand-drawn, stop-motion and independent software pipelines",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "The decade contains major CG, hand-drawn, stop-motion and smaller software-centered productions; animation history remains plural rather than a single march toward photoreal or generative imagery."
  },
  {
    "label": "Transnational co-production, public funds, sales agents and festival circulation",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Cross-border co-production and public support remain structurally important, especially outside Hollywood; production ownership, financing, sales, festival selection and distribution are separate evidence layers."
  },
  {
    "label": "Distinct regional industries and uneven global production infrastructures",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Indian, Korean, Japanese, Chinese, African, Latin American, Middle Eastern, Nordic and other production systems must retain their own institutional histories rather than being collapsed into one global platform era."
  },
  {
    "label": "Hybrid documentary, archive, reenactment and animated nonfiction",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Contemporary nonfiction increasingly combines testimony, archive, reenactment, animation and staged strategies, requiring explicit separation between production method and historical evidence."
  },
  {
    "label": "Sustainability, carbon accounting and lower-impact production planning",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Industry bodies increasingly formalized sustainability measurement and production-planning guidance; available evidence is regionally uneven and must not be generalized into universal carbon claims."
  },
  {
    "label": "Physical production, practical effects, stunts, prosthetics and digital post as complementary systems",
    "role": "historical_object",
    "atlasDecision": "NO_PRODUCTION_CASE",
    "chapterFunction": "Large and small productions continue to combine built environments, location work, practical effects, performance, stunts and digital post; the decade does not support a simple practical-versus-digital opposition."
  }
];

const researchSources = [
  {
    "title": "Theatrical Gross Box Office in the EU and the UK collapsed by 70.4% in 2020",
    "publisher": "European Audiovisual Observatory / Council of Europe",
    "url": "https://www.obs.coe.int/en/web/observatoire/home/-/asset_publisher/wy5m8bRgOygg/content/theatrical-gross-box-office-in-the-eu-and-the-uk-collapsed-by-70-4-in-2020",
    "supports": [
      "pandemic_exhibition",
      "cinema_closures",
      "release_delays",
      "premium_vod",
      "2020_production_decline"
    ]
  },
  {
    "title": "The Safe Way Forward",
    "publisher": "Directors Guild of America / SAG-AFTRA / IATSE / Teamsters",
    "url": "https://www.dga.org/News/PressReleases/2020/200612_Coronavirus_Set_Safety_Guidelines",
    "supports": [
      "pandemic_production",
      "return_to_work",
      "testing",
      "zone_system",
      "worker_safety"
    ]
  },
  {
    "title": "Groundbreaking LED stage production technology created for The Mandalorian",
    "publisher": "Industrial Light & Magic",
    "url": "https://www.ilm.com/groundbreaking-led-stage-production-technology-created-for-hit-lucasfilm-series-the-mandalorian/",
    "supports": [
      "virtual_production",
      "led_volume",
      "real_time_rendering",
      "in_camera_vfx",
      "stagecraft"
    ]
  },
  {
    "title": "Artificial Intelligence",
    "publisher": "Writers Guild of America West",
    "url": "https://www.wga.org/contracts/know-your-rights/artificial-intelligence",
    "supports": [
      "generative_ai",
      "writing_contracts",
      "disclosure",
      "human_authorship",
      "training_rights"
    ]
  },
  {
    "title": "Artificial Intelligence Resources",
    "publisher": "SAG-AFTRA",
    "url": "https://www.sagaftra.org/contracts-industry-resources/contracts/2023-tvtheatrical-contracts/artificial-intelligence-resources",
    "supports": [
      "digital_replicas",
      "performer_consent",
      "synthetic_performers",
      "ai_bargaining"
    ]
  },
  {
    "title": "2026 MBA Contract Changes FAQ",
    "publisher": "Writers Guild of America West",
    "url": "https://www.wga.org/contracts/contracts/mba/2026-mba-contract-changes-faq",
    "supports": [
      "ai_contract_continuity",
      "training_notice",
      "2026_labor_context"
    ]
  },
  {
    "title": "IATSE Members Ratify Contracts with Producers, Studios and Streaming Services",
    "publisher": "IATSE",
    "url": "https://iatse.net/iatse-members-ratify-contracts-with-producers-studios-and-streaming-services/",
    "supports": [
      "crew_labor",
      "streaming",
      "rest",
      "wages",
      "working_conditions"
    ]
  },
  {
    "title": "Sustainability report proposes step-change for UK film production",
    "publisher": "British Film Institute / BAFTA albert / Arup",
    "url": "https://www.bfi.org.uk/news/screen-new-deal-sustainability-report",
    "supports": [
      "sustainability",
      "carbon_accounting",
      "production_planning",
      "digital_collaboration"
    ]
  },
  {
    "title": "European films made up a third of all cinema admissions in Europe in 2024",
    "publisher": "European Audiovisual Observatory / Council of Europe",
    "url": "https://www.obs.coe.int/en/web/observatoire/-/european-films-made-up-a-third-of-all-cinema-admissions-in-europe-in-2024",
    "supports": [
      "theatrical_recovery",
      "2024_admissions",
      "european_production",
      "post_pandemic_market"
    ]
  },
  {
    "title": "SVOD Usage in the European Union – 2024 data",
    "publisher": "European Audiovisual Observatory / Council of Europe",
    "url": "https://www.obs.coe.int/en/web/observatoire/-/svod-usage-in-the-european-union",
    "supports": [
      "svod",
      "platform_usage",
      "streaming_market",
      "2024"
    ]
  },
  {
    "title": "Co-production funding history",
    "publisher": "Council of Europe / Eurimages",
    "url": "https://www.coe.int/en/web/eurimages/co-production-funding-history",
    "supports": [
      "international_coproduction",
      "public_funding",
      "european_cinema",
      "2020s"
    ]
  },
  {
    "title": "AFFEKSJONSVERDI (SENTIMENTAL VALUE)",
    "publisher": "Festival de Cannes",
    "url": "https://www.festival-cannes.com/en/f/affeksjonsverdi/",
    "supports": [
      "2025_candidate_baseline",
      "sentimental_value",
      "norway",
      "coproduction"
    ]
  },
  {
    "title": "O AGENTE SECRETO (THE SECRET AGENT)",
    "publisher": "Festival de Cannes",
    "url": "https://www.festival-cannes.com/en/f/o-agente-secreto/",
    "supports": [
      "2025_candidate_baseline",
      "the_secret_agent",
      "brazil",
      "coproduction"
    ]
  },
  {
    "title": "KUANG YE SHI DAI (RESURRECTION)",
    "publisher": "Festival de Cannes",
    "url": "https://www.festival-cannes.com/en/f/kuang-ye-shi-dai/",
    "supports": [
      "2025_candidate_baseline",
      "resurrection",
      "china"
    ]
  }
];

const boundaryNotes = [
  "Chapter 19 begins in 2020 because the COVID-19 shutdown/restart cycle and release-window disruption changed film production and circulation conditions abruptly, while streaming, digital post, virtual production and platform economics all predate the boundary.",
  "The pandemic is not the chapter's single causal master narrative: health protocols, platform commissioning, theatrical recovery, labor bargaining, virtual production, sustainability, regional industries and camera/format choices changed on different schedules.",
  "US guild agreements concerning AI, digital replicas, residuals and working conditions are high-value evidence for covered US labor contexts, not universal rules for world cinema.",
  "Theatrical cinema persists beside platforms: post-pandemic admissions recovered unevenly, premium/event exhibition remained significant for selected releases, and transnational co-production continued to generate large volumes of feature production.",
  "The first candidate census is deliberately bounded to release years 2020–2025. The chapter period remains 2020–present, and 2026+ is open for later source-mature audit updates rather than being frozen during an incomplete current year."
];

const safeguards = [
  "Chapter 19 is an open current-period audit: the 2020–2025 candidate matrix is a baseline, not a claim that 2026 or the wider 2020s are historically complete.",
  "A film released during the COVID-19 pandemic is not automatically a pandemic-produced film; shutdown, restart, testing, scheduling and insurance claims require title-specific evidence.",
  "Streaming distribution or acquisition does not establish who financed, produced or creatively controlled a film, and theatrical qualification does not establish production ownership.",
  "Return-to-work testing, PPE and zone protocols were time-, jurisdiction- and contract-specific and are not presented as permanent current practice.",
  "LED volumes, StageCraft, real-time rendering, virtual cameras, previs, greenscreen, CGI, compositing and ordinary digital cinematography remain distinct systems unless title-specific evidence connects them.",
  "Generative AI is not treated as a synonym for conventional VFX, animation, machine learning or digital post, and guild AI provisions are never generalized beyond their contractual scope.",
  "Digital-replica, scanning, synthetic-performer or voice-cloning claims require title-specific or contract-specific evidence, including consent and intended-use boundaries where relevant.",
  "Strikes and industrywide labor disputes are context evidence, not proof that a specific film halted, delayed or changed staffing without title-specific documentation.",
  "Sustainability figures and guidance retain their geographic and methodological scope; UK or European studies are not silently generalized to all world production.",
  "35mm, VistaVision, 65mm and IMAX persistence is documented as a production choice, not evidence that photochemical work is inherently superior to digital capture.",
  "Premium-format or large-format exhibition never proves that a film was photographed in the same format.",
  "Indian, Korean, Japanese, Mainland Chinese, Hong Kong, Taiwanese, African, Latin American, Middle Eastern, Nordic and other production systems are not collapsed into one global streaming-era model.",
  "Festival selection, awards and sales activity are circulation or reception evidence, not substitutes for financing, production-company, ownership, labor or craft evidence.",
  "Candidate chapterFunction text is a roadmap hypothesis for research prioritization and does not promote film-specific craft claims to source_verified.",
  "Camera bodies, lenses, codecs, frame rates, recording media, cloud systems, VFX software, render architecture, AI tools, budgets, schedules and finishing paths require title-specific evidence.",
  "Documentary footage, archive, reenactment, animation, testimony and staged material retain different evidentiary status; formal hybridity never converts reconstruction into historical proof.",
  "Stunts, weapons, pyrotechnics, vehicles, water work, extreme locations, intimacy, child performance and physical transformation are historical production topics, not present-day procedural instruction.",
  "2025 candidates are institutionally anchored as part of the baseline, but any Production Case requires fresh title-specific source research before production_verified status."
];

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function parseQuotedStrings(value) {
  const out = [];
  const pattern = /"((?:\\.|[^"\\])*)"/g;
  for (const match of value.matchAll(pattern)) out.push(JSON.parse(`"${match[1]}"`));
  return out;
}

function findMatchingBracket(source, startIndex, openCharacter, closeCharacter) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = startIndex; i < source.length; i += 1) {
    const c = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      quote = c;
      continue;
    }
    if (c === openCharacter) depth += 1;
    if (c === closeCharacter && --depth === 0) return i;
  }
  throw new Error(`Unclosed ${openCharacter} beginning at ${startIndex}`);
}

function extractTopLevelObjects(arraySource) {
  const objects = [];
  let i = 0;
  while (i < arraySource.length) {
    if (arraySource[i] !== "{") {
      i += 1;
      continue;
    }
    const end = findMatchingBracket(arraySource, i, "{", "}");
    objects.push(arraySource.slice(i, end + 1));
    i = end + 1;
  }
  return objects;
}

function stringField(source, field, required = true) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (!match) {
    if (!required) return undefined;
    throw new Error(`Missing ${field}: ${source.slice(0, 160)}`);
  }
  return JSON.parse(`"${match[1]}"`);
}

function numberField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*(\\d+)`));
  if (!match) throw new Error(`Missing ${field}: ${source.slice(0, 160)}`);
  return Number(match[1]);
}

function stringArrayField(source, field) {
  const match = source.match(new RegExp(`\\b${field}\\s*:\\s*\\[([^\\]]*)\\]`));
  return match ? parseQuotedStrings(match[1]) : [];
}

function parseExpansion(fileName) {
  const source = readText(path.join(coreDirectory, fileName));
  const declaration = source.match(/export const\s+\w+Definitions\s*=\s*\[/);
  if (!declaration || declaration.index === undefined) throw new Error(`Could not locate definitions array in ${fileName}`);
  const start = source.indexOf("[", declaration.index);
  const end = findMatchingBracket(source, start, "[", "]");
  return extractTopLevelObjects(source.slice(start + 1, end)).map((objectSource) => ({
    id: stringField(objectSource, "id"),
    title: stringField(objectSource, "title"),
    originalTitle: stringField(objectSource, "originalTitle", false) ?? stringField(objectSource, "title"),
    aliases: stringArrayField(objectSource, "aliases"),
    year: numberField(objectSource, "year"),
    origin: fileName,
  }));
}

function expansionFilesFromRuntime() {
  const source = readText(filmScenariosPath);
  const importMap = new Map();
  for (const match of source.matchAll(/import\s+\{\s*(merge\w+Expansion)\s*\}\s+from\s+"\.\.\/\.\.\/core\/([^"]+)\.js";/g)) {
    importMap.set(match[1], `${match[2]}.ts`);
  }
  const ordered = [];
  for (const match of source.matchAll(/=\s*(merge\w+Expansion)\([^;]+\);/g)) {
    const fileName = importMap.get(match[1]);
    if (!fileName) throw new Error(`Could not map runtime merge function ${match[1]} to a core expansion file.`);
    ordered.push(fileName);
  }
  if (ordered.length === 0) throw new Error("No runtime expansion order found in filmScenarios.ts");
  return ordered;
}

function scenarioTitles(item) {
  return [item.title, item.originalTitle].filter(Boolean).map(normalize);
}

function matchesDefinition(scenario, definition) {
  if (scenario.id === definition.id) return true;
  if (scenario.year !== definition.year) return false;
  const accepted = new Set([definition.title, definition.originalTitle, ...definition.aliases].filter(Boolean).map(normalize));
  return scenarioTitles(scenario).some((title) => accepted.has(title));
}

function buildAtlas() {
  const seed = JSON.parse(readText(seedPath));
  const scenarios = seed.scenarios.map((scenario) => ({
    id: scenario.id,
    title: scenario.film.title,
    originalTitle: scenario.film.original_title,
    year: scenario.film.year,
    origin: "film_scenarios_seed.json",
  }));
  const expansionStats = [];
  const expansionFiles = expansionFilesFromRuntime();
  for (const fileName of expansionFiles) {
    let appended = 0;
    let matchedExisting = 0;
    const definitions = parseExpansion(fileName);
    for (const definition of definitions) {
      if (scenarios.some((scenario) => matchesDefinition(scenario, definition))) {
        matchedExisting += 1;
        continue;
      }
      scenarios.push(definition);
      appended += 1;
    }
    expansionStats.push({ fileName, definitions: definitions.length, appended, matchedExisting });
  }
  return { scenarios, expansionStats };
}

function buildVerifiedScenarioIds() {
  const ids = new Set();
  for (const fileName of readdirSync(dataDirectory)) {
    if (!fileName.startsWith("scenarioProductionVerification") || !fileName.endsWith(".ts")) continue;
    const source = readText(path.join(dataDirectory, fileName));
    for (const match of source.matchAll(/scenarioId\s*:\s*"([^"]+)"/g)) ids.add(match[1]);
  }
  return ids;
}

function matchesCandidate(scenario, candidate) {
  if (scenario.year !== candidate.year) return false;
  const accepted = [candidate.title, candidate.originalTitle, ...(candidate.aliases ?? [])].filter(Boolean).map(normalize);
  return scenarioTitles(scenario).some((title) => title && accepted.includes(title));
}

const atlas = buildAtlas();
if (atlas.scenarios.length !== EXPECTED_ATLAS_COUNT) {
  throw new Error(`Chapter 19 audit expected the current Atlas count of ${EXPECTED_ATLAS_COUNT} scenarios after preserving the closed Chapter 18 baseline of ${CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT}, found ${atlas.scenarios.length}`);
}

const verifiedIds = buildVerifiedScenarioIds();
if (verifiedIds.size !== EXPECTED_ATLAS_COUNT) {
  throw new Error(`Chapter 19 audit expected ${EXPECTED_ATLAS_COUNT} literal Production Verification IDs in the live registry, found ${verifiedIds.size}`);
}

const resolvedCandidates = candidates.map((candidate) => {
  const matches = atlas.scenarios.filter((scenario) => matchesCandidate(scenario, candidate));
  if (matches.length > 1) throw new Error(`${candidate.title}: expected at most one Atlas match, found ${matches.length}`);
  const match = matches[0] ?? null;
  const productionVerified = Boolean(match && verifiedIds.has(match.id));
  return {
    ...candidate,
    decision: match ? (productionVerified ? "USE_EXISTING" : "EXISTING_REQUIRED") : candidate.decisionIfMissing,
    scenarioId: match?.id ?? null,
    matches: matches.length,
    productionVerified,
    origin: match?.origin ?? null,
  };
});

const byDecision = { USE_EXISTING: [], P0: [], P1: [], P2: [], EXISTING_REQUIRED: [] };
for (const candidate of resolvedCandidates) byDecision[candidate.decision].push(candidate.title);

const report = {
  schemaVersion: "1.0",
  auditDate: "2026-08-28",
  status: "foundation_established",
  chapter: {
    number: 19,
    id: "pandemic-platform-labor-virtual-production",
    title: "Pandemic disruption, platform consolidation, labor and virtual-production cinema",
    period: "2020–present",
    candidateBaseline: "2020–2025",
    scope: "Cinema since 2020 as pandemic shutdown and restart, theatrical-window rupture and recovery, mature streaming and platform financing/distribution, virtual production and real-time VFX, remote collaboration, labor and AI bargaining, sustainability pressures, transnational co-production, regional industries, animation and nonfiction plurality, and photochemical or premium-format persistence reshape production.",
    thesis: "The period is not a single streaming, virtual-production or AI revolution. Health protocols, financing and distribution, exhibition, labor contracts, VFX and real-time systems, camera and format choices, sustainability and regionally distinct production infrastructures changed on different schedules and must remain separate evidence layers."
  },
  governance: {
    openCurrentPeriod: true,
    candidateBaselineEnds: 2025,
    currentYearExcludedFromFrozenBaseline: 2026,
    laterCandidateExpansionRequiresSourceFirstAudit: true,
    productionCasesMayStartAfterThisMatrix: true,
    candidateFunctionsAreRoadmapHypotheses: true
  },
  atlas: {
    baselineFromClosedChapter18: CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT,
    expectedCount: EXPECTED_ATLAS_COUNT,
    actualCount: atlas.scenarios.length,
    expansionOrder: atlas.expansionStats
  },
  verificationIndex: { literalVerifiedScenarioIds: verifiedIds.size },
  candidates: resolvedCandidates,
  candidatePrioritiesIfMissing: {
    P0: candidates.filter((item) => item.decisionIfMissing === "P0").map((item) => item.title),
    P1: candidates.filter((item) => item.decisionIfMissing === "P1").map((item) => item.title),
    P2: candidates.filter((item) => item.decisionIfMissing === "P2").map((item) => item.title)
  },
  byDecision,
  recommendedNewProductionCases: resolvedCandidates
    .filter((item) => item.decision === "P0" || item.decision === "P1")
    .map((item) => item.title),
  historicalObjects,
  researchSources,
  boundaryNotes,
  safeguards
};

const outputPath = process.argv.find((arg) => arg.startsWith("--write="))?.slice("--write=".length);
if (outputPath) {
  const absolute = path.resolve(root, outputPath);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${JSON.stringify(report, null, 2)}\n`);
}

console.log(JSON.stringify(report, null, 2));
